import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const base = (process.argv[2] || '/').replace(/\/$/, '');
const dist = resolve('dist');
const pages = ['index.html', 'trail/index.html', 'fr/index.html', 'fr/trail/index.html'];
const errors = [];

for (const page of pages) {
    const html = readFileSync(join(dist, page), 'utf8');

    for (const [, rawPath] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
        if (!rawPath.startsWith('/')) continue;

        const url = new URL(rawPath, 'https://example.test');
        if (!url.pathname.startsWith(`${base}/`)) {
            errors.push(`${page}: ${rawPath} is outside the deployment base`);
            continue;
        }

        const relativePath = url.pathname.slice(base.length + 1);
        const target = join(dist, relativePath);
        const file = relativePath.endsWith('/') ? join(target, 'index.html') : target;
        const resolvedFile =
            existsSync(file) && statSync(file).isDirectory() ? join(file, 'index.html') : file;

        if (!existsSync(resolvedFile)) {
            errors.push(`${page}: ${rawPath} has no generated file`);
        }
    }
}

if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
} else {
    console.log(
        `All local links and assets resolve under ${base || '/'} in ${pages.length} pages.`,
    );
}
