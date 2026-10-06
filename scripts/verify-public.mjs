const siteUrl = process.argv[2];

if (!siteUrl) {
    console.error('Usage: node scripts/verify-public.mjs <pages-url>');
    process.exit(1);
}

const base = new URL(siteUrl);
const pages = ['', 'trail/', 'fr/', 'fr/trail/'];

async function verify() {
    const images = new Set();

    for (const page of pages) {
        const response = await fetch(new URL(page, base), { cache: 'no-store' });
        if (!response.ok) throw new Error(`${page || '/'} returned ${response.status}`);

        const html = await response.text();
        const expectedImage = page.includes('trail/')
            ? 'images/trail/enzo.webp'
            : 'images/profile.png';
        const expectedUrl = new URL(expectedImage, base).pathname;
        if (!html.includes(expectedUrl)) {
            throw new Error(`${page || '/'} does not reference ${expectedUrl}`);
        }
        if (!html.includes(`<html lang="${page.startsWith('fr/') ? 'fr' : 'en'}">`)) {
            throw new Error(`${page || '/'} has the wrong language`);
        }

        for (const [, imagePath] of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
            images.add(imagePath);
        }
    }

    for (const path of images) {
        const response = await fetch(new URL(path, base), { cache: 'no-store' });
        if (!response.ok) throw new Error(`${path} returned ${response.status}`);
        if (!response.headers.get('content-type')?.startsWith('image/')) {
            throw new Error(`${path} was not served as an image`);
        }
    }

    console.log(`Verified ${pages.length} pages and ${images.size} images.`);
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
