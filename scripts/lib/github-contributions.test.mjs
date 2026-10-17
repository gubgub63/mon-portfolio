import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseContributions } from './github-contributions.mjs';

const days = Array.from({ length: 365 }, (_, index) => {
    const date = new Date(Date.UTC(2025, 0, index + 1)).toISOString().slice(0, 10);
    return `<td id="day-${index}" data-date="${date}" data-level="${index ? 0 : 4}"></td>`;
});
const tooltips = days.map(
    (_, index) =>
        `<tool-tip for="day-${index}">${index ? 'No contributions' : '1,234 contributions'} on January 1st.</tool-tip>`,
);
const heading =
    '<h2 id="js-contribution-activity-description">1,250 contributions in the last year</h2>';
const fixture = heading + [...days].reverse().join('') + tooltips.join('');

test('joins tooltips by ID, sorts dates, and preserves the profile headline separately', () => {
    const result = parseContributions(fixture);
    assert.equal(result.total, 1234);
    assert.equal(result.reportedTotal, 1250);
    assert.deepEqual(result.range, { start: '2025-01-01', end: '2025-12-31' });
    assert.deepEqual(result.contributions[0], { date: '2025-01-01', count: 1234, level: 4 });
    assert.equal(result.contributions[364].count, 0);
});

test('rejects missing tooltips instead of silently showing zero contributions', () => {
    assert.throws(() => parseContributions(fixture.replace(tooltips[0], '')), /missing tooltip/);
});

test('rejects incomplete calendars, duplicate dates, and missing headline', () => {
    assert.throws(() => parseContributions(''), /complete yearly/);
    assert.throws(
        () => parseContributions(fixture.replace('2025-01-02', '2025-01-01')),
        /duplicated or incomplete/,
    );
    assert.throws(
        () => parseContributions(fixture.replace(heading, '')),
        /Missing GitHub contribution total/,
    );
});
