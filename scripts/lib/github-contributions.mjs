// GitHub renders counts in tooltips, linked to cells by ID (not in date order).
export function parseContributions(html) {
    const attributes = (tag) =>
        Object.fromEntries(
            [...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]),
        );
    const counts = new Map();
    for (const [, tag, label] of html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g)) {
        const match = label.trim().match(/^(No|[\d,]+) contributions? on\b/);
        if (match)
            counts.set(
                attributes(tag).for,
                match[1] === 'No' ? 0 : Number(match[1].replaceAll(',', '')),
            );
    }
    const contributions = [];
    for (const [tag] of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
        const attrs = attributes(tag);
        const count = counts.get(attrs.id);
        const level = Number(attrs['data-level']);
        if (
            !/^\d{4}-\d{2}-\d{2}$/.test(attrs['data-date']) ||
            count === undefined ||
            !Number.isInteger(level) ||
            level < 0 ||
            level > 4
        ) {
            throw new Error('Invalid GitHub contribution cell or missing tooltip');
        }
        contributions.push({ date: attrs['data-date'], count, level });
    }
    contributions.sort((a, b) => a.date.localeCompare(b.date));
    if (contributions.length < 365 || contributions.length > 371) {
        throw new Error('GitHub did not return a complete yearly contribution calendar');
    }
    for (let index = 1; index < contributions.length; index++) {
        const previous = Date.parse(contributions[index - 1].date);
        if (Date.parse(contributions[index].date) - previous !== 86_400_000) {
            throw new Error('GitHub contribution dates are duplicated or incomplete');
        }
    }
    const heading = html.match(
        /<h2\b[^>]*\bid="js-contribution-activity-description"[^>]*>([\s\S]*?)<\/h2>/,
    )?.[1];
    const reported = heading?.match(/([\d,]+)\s+contributions?\b/);
    if (!reported) throw new Error('Missing GitHub contribution total');
    return {
        total: contributions.reduce((sum, day) => sum + day.count, 0),
        reportedTotal: Number(reported[1].replaceAll(',', '')),
        range: { start: contributions[0].date, end: contributions.at(-1).date },
        contributions,
    };
}
