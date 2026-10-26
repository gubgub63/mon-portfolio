"""Build the UTLAC/VDA scenes from GPX and Mapzen Terrain Tiles (Pillow required).

Run with Python and Pillow: python scripts/build-race-routes.py
Optional --utlac-gpx /path/to/file.gpx and --vda-gpx /path/to/file.gpx
use downloaded tracks. Generated JSON is committed; no network calls at runtime.
"""
import argparse
from datetime import date
from io import BytesIO
import json
import math
from pathlib import Path
import urllib.request
import xml.etree.ElementTree as ET

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
RACES = {
    'utlac': {
        'source': 'https://www.utlactrail.com/gare/120k/',
        'trackSource': 'https://www.peak-flow.app/rennen/gpx/utlac-120.gpx',
        'description': 'UTLAC 120K public GPX copy distributed by Peakflow, accessed October 2026. Edition not specified in the GPX. Not a confirmed 2027 course or a personal activity.',
        'originLabel': 'Menaggio',
    },
    'vda': {
        'source': 'https://valdaran.utmb.world/races/VDA',
        'trackSource': 'https://pdf.utmb.world/raw/upload/v1770724536/valdaran/Races/GPX2026/OFICIALES%202026/VDA_2026_WEB_COLOMERS_ea9d9ddf9e.gpx',
        'description': 'Official VDA 2026 GPX linked by the organiser. Not a confirmed 2027 course or a personal activity.',
        'originLabel': 'Vielha',
    },
}


def download(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'mon-portfolio-route-builder/1.0'})
    with urllib.request.urlopen(request, timeout=45) as response:
        return response.read()


def build(name, local_file):
    metadata = RACES[name]
    root = ET.fromstring(Path(local_file).read_bytes() if local_file else download(metadata['trackSource']))
    raw = [(float(p.attrib['lon']), float(p.attrib['lat']), float(p.find('{*}ele').text))
           for p in root.findall('.//{*}trkpt')]
    if len(raw) < 100 or any(not all(math.isfinite(v) for v in point) for point in raw):
        raise ValueError('Missing or invalid GPX coordinates/elevations')
    latitude = sum(p[1] for p in raw) / len(raw)
    km_lon, km_lat = 111.195 * math.cos(math.radians(latitude)), 111.195
    points, distance, last_kept = [], 0, -1
    for index, (lon, lat, altitude) in enumerate(raw):
        if index:
            previous = raw[index - 1]
            distance += math.hypot((lon - previous[0]) * km_lon, (lat - previous[1]) * km_lat)
        if distance - last_kept >= .15 or index == len(raw) - 1:
            points.append((lon, lat, altitude, distance))
            last_kept = distance
    if not 100 < distance < 190:
        raise ValueError(f'Unexpected course distance: {distance:.2f} km')
    min_lon, max_lon = min(p[0] for p in raw), max(p[0] for p in raw)
    min_lat, max_lat = min(p[1] for p in raw), max(p[1] for p in raw)
    pad_lon, pad_lat = (max_lon - min_lon) * .12, (max_lat - min_lat) * .12
    min_lon, max_lon = min_lon - pad_lon, max_lon + pad_lon
    min_lat, max_lat = min_lat - pad_lat, max_lat + pad_lat
    columns, rows, zoom = 25, 25, 10
    tiles = {}

    def elevation(lon, lat):
        x = (lon + 180) / 360 * 2 ** zoom
        y = (1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * 2 ** zoom
        tile_x, tile_y = math.floor(x), math.floor(y)
        key = (tile_x, tile_y)
        if key not in tiles:
            url = f'https://elevation-tiles-prod.s3.amazonaws.com/terrarium/{zoom}/{tile_x}/{tile_y}.png'
            tiles[key] = Image.open(BytesIO(download(url))).convert('RGB')
        red, green, blue = tiles[key].getpixel((int((x - tile_x) * 256), int((y - tile_y) * 256)))
        return round(red * 256 + green + blue / 256 - 32768)

    terrain = [elevation(min_lon + (max_lon - min_lon) * x / (columns - 1),
                         max_lat - (max_lat - min_lat) * y / (rows - 1))
               for y in range(rows) for x in range(columns)]
    if any(z < -100 or z > 5000 for z in terrain):
        raise ValueError('Invalid terrain elevations')
    result = {
        **metadata,
        'elevationSource': 'https://github.com/tilezen/joerd/blob/master/docs/attribution.md',
        'elevationCredit': 'Mapzen Terrain Tiles · Europe: produced using Copernicus data and information funded by the European Union — EU-DEM layers. SRTM/GMTED2010: U.S. Geological Survey.',
        'retrievedAt': date.today().isoformat(),
        'verticalExaggeration': 3,
        'columns': columns, 'rows': rows,
        'widthKm': round((max_lon - min_lon) * km_lon, 4),
        'depthKm': round((max_lat - min_lat) * km_lat, 4),
        'distanceKm': round(distance, 3),
        'route': [[round((p[0] - (min_lon + max_lon) / 2) * km_lon, 4),
                   round(((min_lat + max_lat) / 2 - p[1]) * km_lat, 4),
                   round(p[2]), round(p[3], 3)] for p in points],
        'terrain': terrain,
    }
    (ROOT / f'src/data/{name}-3d.json').write_text(json.dumps(result, ensure_ascii=False, separators=(',', ':')) + '\n')
    print(f'{name}: {distance:.2f} km, {len(points)} route points, {len(terrain)} terrain samples, {len(tiles)} tiles', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    for name in RACES:
        parser.add_argument(f'--{name}-gpx')
    args = parser.parse_args()
    for name in RACES:
        build(name, getattr(args, f'{name}_gpx'))
