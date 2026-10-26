export interface TrailSceneData {
    originLabel?: string;
    finishLabel?: string;
    verticalExaggeration?: number;
    columns: number;
    rows: number;
    widthKm: number;
    depthKm: number;
    distanceKm: number;
    route: number[][];
    terrain: number[];
}

export interface TrailSceneView {
    yaw: number;
    pitch: number;
    zoom: number;
    flat: boolean;
    progress: number;
}

export const initialTrailView: TrailSceneView = {
    yaw: -0.6,
    pitch: 0.95,
    zoom: 1,
    flat: false,
    progress: 0,
};

export function routePosition(data: TrailSceneData, progress: number) {
    const distance = progress * data.distanceKm;
    const index = data.route.findIndex((point) => point[3] >= distance);
    if (index < 0) return data.route[data.route.length - 1];
    const next = data.route[index];
    const previous = data.route[Math.max(0, index - 1)];
    const amount = next[3] === previous[3] ? 0 : (distance - previous[3]) / (next[3] - previous[3]);
    return previous.map((value, i) => value + (next[i] - value) * amount);
}

/** Orthographic projection of geographic kilometres and real terrain elevations. */
export function renderTrailScene(data: TrailSceneData, view: TrailSceneView) {
    const floor = Math.min(...data.terrain);
    const escapeText = (text: string) =>
        text.replace(/[&<>"']/g, (character) => `&#${character.charCodeAt(0)};`);
    const scale = (440 / Math.hypot(data.widthKm, data.depthKm)) * view.zoom;
    const pitch = view.flat ? 0 : view.pitch;
    const yaw = view.flat ? 0 : view.yaw;
    const project = ([x, y, elevation = floor]: number[]) => {
        const rx = x * Math.cos(yaw) - y * Math.sin(yaw);
        const ry = x * Math.sin(yaw) + y * Math.cos(yaw);
        const height = view.flat
            ? 0
            : ((elevation - floor) / 1000) * (data.verticalExaggeration ?? 8);
        return [300 + rx * scale, 265 + (ry * Math.cos(pitch) - height * Math.sin(pitch)) * scale];
    };
    const coordinates = (point: number[]) =>
        project(point)
            .map((n) => n.toFixed(1))
            .join(',');
    const path = (points: number[][]) =>
        points.map((point, i) => `${i ? 'L' : 'M'}${coordinates(point)}`).join(' ');
    const terrainPoint = (x: number, y: number) => [
        (x / (data.columns - 1) - 0.5) * data.widthKm,
        (y / (data.rows - 1) - 0.5) * data.depthKm,
        data.terrain[y * data.columns + x],
    ];
    const faces = [];
    for (let y = 0; y < data.rows - 1; y++) {
        for (let x = 0; x < data.columns - 1; x++) {
            const points = [
                terrainPoint(x, y),
                terrainPoint(x + 1, y),
                terrainPoint(x + 1, y + 1),
                terrainPoint(x, y + 1),
            ];
            const height = points.reduce((sum, point) => sum + point[2], 0) / 4;
            const tone = Math.round(19 + ((height - floor) / 1500) * 28);
            const depth = points.reduce(
                (sum, point) => sum + point[0] * Math.sin(yaw) + point[1] * Math.cos(yaw),
                0,
            );
            faces.push({
                depth,
                markup: `<polygon points="${points.map(coordinates).join(' ')}" fill="hsl(91 11% ${view.flat ? 18 : tone}%)"/>`,
            });
        }
    }
    faces.sort((a, b) => a.depth - b.depth);
    const grid = [];
    for (let x = 0; x < data.columns; x++) {
        grid.push(path(Array.from({ length: data.rows }, (_, y) => terrainPoint(x, y))));
    }
    for (let y = 0; y < data.rows; y++) {
        grid.push(path(Array.from({ length: data.columns }, (_, x) => terrainPoint(x, y))));
    }
    const track = data.route.map(([x, y, altitude]) => [x, y, altitude + 12]);
    const point = routePosition(data, view.progress);
    const [cx, cy] = project([point[0], point[1], point[2] + 12]);
    const [gx, gy] = project([point[0], point[1]]);
    const [sx, sy] = project(track[0]);
    const finish = track[track.length - 1];
    const [fx, fy] = project(finish);
    const showFinish =
        data.finishLabel && Math.hypot(finish[0] - track[0][0], finish[1] - track[0][1]) > 0.5;
    const north = project([0, -data.depthKm / 2 - 1]);
    return `<g class="route-terrain" aria-hidden="true">${faces.map((face) => face.markup).join('')}</g>
        <path class="route-grid" d="${grid.join(' ')}"/>
        <path class="route-halo" d="${path(track)}"/>
        <path class="route-track" d="${path(track)}"/>
        <circle class="route-origin" cx="${sx}" cy="${sy}" r="4"/>
        <text class="route-place" x="${sx + 10}" y="${sy - 12}">${escapeText(data.originLabel ?? 'Volvic')}</text>
        ${showFinish ? `<circle class="route-origin" cx="${fx}" cy="${fy}" r="4"/><text class="route-place" x="${fx + 10}" y="${fy - 12}">${escapeText(data.finishLabel!)}</text>` : ''}
        <path class="route-altitude-line" d="M${gx},${gy} L${cx},${cy}"/>
        <circle class="route-position-ring" cx="${cx}" cy="${cy}" r="10"/>
        <circle class="route-position" cx="${cx}" cy="${cy}" r="4.5"/>
        <text class="route-north" x="${north[0]}" y="${north[1] - 10}" text-anchor="middle">N ↑</text>`;
}
