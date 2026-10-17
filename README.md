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
- `src/data/trail-social.ts`: confirmed TikTok account and public follower/like counts observed October 11, 2026. Refresh counts and date together; likes are cumulative across the account. The preparation video links out to TikTok and uses a local AVIF cover, without an embed.
- `TRAIL-AUDIT.md`: trail positioning audit, elite athlete presentation references, implemented improvements and remaining content needs for brand outreach.
- `public/data/github.json`: GitHub contribution snapshot refreshed by `npm run github:update` and before `npm run build`. The Pages workflow refreshes and redeploys every four hours, as well as on pushes to `main`. `reportedTotal` is the GitHub profile headline shown on the portfolio; `total` sums the visible daily values, which can differ from the headline. Failed or incomplete responses stop the build without replacing the previous snapshot. For local development, run `npm run github:update` to refresh the committed snapshot.
- `public/images/SOURCES.md`: image provenance. Trail landscapes are illustrative stock photos, not personal photos or application screenshots.
- `public/images/trail/SOURCES.md`: trail landscape sources, photographers, licenses and image adaptations. The separate trail portrait is from Enzo's confirmed UTMB profile.
- `DESIGN.md`: reference-based design system and interaction rules.
- `.impeccable/trail.md`: trail surface brief and comparison with the inherited design system.

The profile effect uses the actual GitHub avatar, with a randomized pixel transition between grayscale and color. It accepts another image via the `src` prop on `PixelPortrait`.

There is no unverified resume download, invented testimonial, contact form backend, or visitor counter. Contact links open the confirmed email address and public GitHub profile. Career start year remains unspecified because only September 14 was confirmed.

## Validation

Production build, mobile and landscape overflow, theme persistence, keyboard portrait toggle, expandable content, marquee pause, photograph cycling, image loading, anchor targets and reduced-motion behavior were checked in the browser.
