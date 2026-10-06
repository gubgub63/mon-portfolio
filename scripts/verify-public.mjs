const siteUrl = process.argv[2];

if (!siteUrl) {
    console.error('Usage: node scripts/verify-public.mjs <pages-url>');
    process.exit(1);
}

const base = new URL(siteUrl);
const expectedPaths = [
    'images/profile.png',
    'images/nourino.webp',
    'images/trail/enzo.webp',
    'images/trail/auvergne.webp',
];

async function verify() {
    for (const page of ['', 'trail/']) {
        const response = await fetch(new URL(page, base), { cache: 'no-store' });
        if (!response.ok) throw new Error(`${page || '/'} returned ${response.status}`);

        const html = await response.text();
        const expectedImage = page ? expectedPaths[2] : expectedPaths[0];
        const expectedUrl = new URL(expectedImage, base).pathname;
        if (!html.includes(expectedUrl)) {
            throw new Error(`${page || '/'} does not reference ${expectedUrl}`);
        }
    }

    for (const path of expectedPaths) {
        const response = await fetch(new URL(path, base), { cache: 'no-store' });
        if (!response.ok) throw new Error(`${path} returned ${response.status}`);
        if (!response.headers.get('content-type')?.startsWith('image/')) {
            throw new Error(`${path} was not served as an image`);
        }
    }
}

for (let attempt = 1; attempt <= 12; attempt++) {
    try {
        await verify();
        console.log(`Public pages and key images are available at ${base.href}`);
        process.exit(0);
    } catch (error) {
        console.error(`Public check ${attempt}/12: ${error.message}`);
        if (attempt === 12) process.exit(1);
        await new Promise((done) => setTimeout(done, 5000));
    }
}
