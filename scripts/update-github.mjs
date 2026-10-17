import { readFile, writeFile, rename } from 'node:fs/promises';
import { parseContributions } from './lib/github-contributions.mjs';

const path = new URL('../public/data/github.json', import.meta.url);
const previous = JSON.parse(await readFile(path, 'utf8'));
const response = await fetch(previous.source, {
    headers: { 'Accept-Language': 'en-US', 'User-Agent': 'mon-portfolio' },
    signal: AbortSignal.timeout(30_000),
});
if (!response.ok) throw new Error(`GitHub contributions request failed: ${response.status}`);
const calendar = parseContributions(await response.text());
const age = Date.now() - Date.parse(`${calendar.range.end}T00:00:00Z`);
if (age < -86_400_000 || age > 2 * 86_400_000) {
    throw new Error('GitHub returned an outdated contribution calendar');
}
const snapshot = {
    ...previous,
    ...calendar,
    fetchedAt: new Date().toISOString(),
    note: 'reportedTotal is the GitHub profile headline displayed by the portfolio; total sums the visible daily cells, which can differ from the headline.',
};
const temporary = new URL('../public/data/github.json.tmp', import.meta.url);
await writeFile(temporary, `${JSON.stringify(snapshot, null, 4)}\n`);
await rename(temporary, path);
console.log(`GitHub: ${calendar.reportedTotal} contributions, through ${calendar.range.end}`);
