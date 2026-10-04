# Enzo Gubbiotti — Portfolio

English-language Astro portfolio, closely adapted from the visual direction of [Renielyn Lenon's portfolio](https://renlenon.vercel.app/).

## Run

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Content

- `/`: developer portfolio. `/trail/`: trail-running profile, UTMB indexes and results, personal story and 2027 goals. The shared header switches between both routes.
- `src/data/profile.ts`: identity, career, technologies and public projects.
- `src/data/trail.ts`: 2027 ambitions and linked race/route sources; goals do not imply confirmed entries.
- `src/data/trail-results.json`: verified UTMB profile snapshot retrieved October 4, 2026, including indexes, results and DNF status. This is static data, not a live feed; refresh the snapshot and its date together.
- `public/data/github.json`: verified GitHub contribution snapshot, captured October 4, 2026. This is not live data. `total` sums the visible daily values; `reportedTotal` preserves GitHub's differing heading total.
- `public/images/SOURCES.md`: image provenance. Trail landscapes are illustrative stock photos, not personal photos or application screenshots.
- `public/images/trail/SOURCES.md`: trail landscape sources, photographers, licenses and image adaptations. The separate trail portrait is from Enzo's confirmed UTMB profile.
- `DESIGN.md`: reference-based design system and interaction rules.
- `.impeccable/trail.md`: trail surface brief and comparison with the inherited design system.

The profile effect uses the actual GitHub avatar, with a randomized pixel transition between grayscale and color. It accepts another image via the `src` prop on `PixelPortrait`.

There is no unverified resume download, invented testimonial, contact form backend, or visitor counter. Contact links open the confirmed email address and public GitHub profile. Career start year remains unspecified because only September 14 was confirmed.

## Validation

Production build, mobile and landscape overflow, theme persistence, keyboard portrait toggle, expandable content, marquee pause, photograph cycling, image loading, anchor targets and reduced-motion behavior were checked in the browser.
