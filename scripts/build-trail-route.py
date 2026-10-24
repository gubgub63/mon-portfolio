"""Rebuild the local GR441 scene from its public GPX and IGN RGE ALTI.
Run manually: python3 scripts/build-trail-route.py. No network calls at site runtime.
"""
import json
import math
from pathlib import Path
import urllib.request
import xml.etree.ElementTree as ET
from datetime import date

ROOT = Path(__file__).resolve().parents[1]
source = json.loads((ROOT / 'src/data/gr441-route.json').read_text())
with urllib.request.urlopen(source['trackSource'], timeout=60) as response:
    root = ET.fromstring(response.read())
raw = [(float(p.attrib['lon']), float(p.attrib['lat'])) for p in root.findall('.//{*}trkpt')]
latitude = sum(p[1] for p in raw) / len(raw)
km_lon = 111.195 * math.cos(math.radians(latitude))
km_lat = 111.195
# Keep one point about every 150 m; retain cumulative distance from the full track.
points = []
distance = 0
last_kept = -1
for i, (lon, lat) in enumerate(raw):
    if i:
        previous = raw[i - 1]
        distance += math.hypot((lon - previous[0]) * km_lon, (lat - previous[1]) * km_lat)
    if distance - last_kept >= .15 or i == len(raw) - 1:
        points.append((lon, lat, distance))
        last_kept = distance
min_lon, max_lon = min(p[0] for p in raw), max(p[0] for p in raw)
min_lat, max_lat = min(p[1] for p in raw), max(p[1] for p in raw)
pad_lon = (max_lon - min_lon) * .12
pad_lat = (max_lat - min_lat) * .06
min_lon -= pad_lon
max_lon += pad_lon
min_lat -= pad_lat
max_lat += pad_lat
cols, rows = 19, 31
grid = [(min_lon + (max_lon - min_lon) * x / (cols - 1), max_lat - (max_lat - min_lat) * y / (rows - 1)) for y in range(rows) for x in range(cols)]
locations = [(p[0], p[1]) for p in points] + grid
altitudes = []
for start in range(0, len(locations), 200):
    batch = locations[start:start + 200]
    body = json.dumps({'lon': '|'.join(str(round(p[0], 7)) for p in batch), 'lat': '|'.join(str(round(p[1], 7)) for p in batch), 'resource': 'ign_rge_alti_wld', 'delimiter': '|', 'zonly': 'true'}).encode()
    request = urllib.request.Request('https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.json', data=body, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(request, timeout=90) as response:
        values = json.load(response)['elevations']
    if len(values) != len(batch) or any(not math.isfinite(v) or v < -100 for v in values):
        raise ValueError('Missing or invalid IGN elevations; existing data left unchanged.')
    altitudes.extend(values)
    print(f'IGN elevations: {len(altitudes)}/{len(locations)}', flush=True)
width, depth = (max_lon - min_lon) * km_lon, (max_lat - min_lat) * km_lat

def project(p):
    return [round((p[0] - (min_lon + max_lon) / 2) * km_lon, 4), round(((min_lat + max_lat) / 2 - p[1]) * km_lat, 4)]

result = {
    'source': source['source'], 'trackSource': source['trackSource'],
    'elevationSource': 'https://data.geopf.fr/altimetrie/resources/ign_rge_alti_wld',
    'elevationCredit': 'IGN · RGE ALTI® · Licence Ouverte 2.0',
    'retrievedAt': date.today().isoformat(),
    'description': 'Public planned GR441 route, sampled at about 150 m; terrain elevations from IGN. Not a personal activity or navigation aid. Elevation is visually exaggerated eight times in 3D.',
    'columns': cols, 'rows': rows, 'widthKm': round(width, 4), 'depthKm': round(depth, 4),
    'distanceKm': round(distance, 2),
    'route': [project(p) + [round(altitudes[i]), round(p[2], 3)] for i, p in enumerate(points)],
    'terrain': [round(z) for z in altitudes[len(points):]],
}
(ROOT / 'src/data/gr441-3d.json').write_text(json.dumps(result, ensure_ascii=False, separators=(',', ':')) + '\n')
print(f'Saved {len(points)} route points and {len(grid)} terrain samples ({distance:.2f} km).')
