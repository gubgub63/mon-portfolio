# Enzo Gubbiotti — Portfolio

Bilingual Astro portfolio with two independently scoped visual worlds: the developer portfolio follows [Renielyn Lenon's portfolio](https://renlenon.vercel.app/); the trail profile is a personal field journal led by Enzo’s full name, real imagery and source-grounded motion.

## Run

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Routes and design

- `/` and `/fr/`: developer portfolio, using `src/layouts/Layout.astro` and `src/styles/global.css`. Its narrow monochrome composition and GitHub avatar pixel effect remain independent of trail styling.
- `/trail/` and `/fr/trail/`: trail portfolio, using `src/components/TrailPage.astro`, `src/layouts/TrailLayout.astro` and `src/styles/trail.css`. Name-first identity, an editorial name-first composition with a central personal portrait, three biographical chapters, an interactive 3D GR441 route, an accessible project explorer, verified results and partnership contact.
- `DESIGN.md`: both design systems, with unprefixed developer tokens and `trail-` tokens scoped to their respective routes. `.impeccable/design.json` holds motion, breakpoints and component previews.
- `.impeccable/trail.md`: current trail composition, progressive enhancement, source policy and responsive behavior. `.impeccable/surfaces/src-components-trailpage-astro.md`: approved redesign direction.
- `src/assets/fonts/`: self-hosted Manrope 400/700, with its OFL license. Trail uses font swapping and preloads the regular face.

- `/trail/gr441/` and `/fr/trail/gr441/`: dedicated GR441 project, with an early 2027 supported FKT goal confirmed by Enzo. Includes motivation, interactive relief and synchronised elevation profile, preparation steps, an existing preparation video and a project-specific contact email. Reconnaissance and logistics are shown as work to organise; no target time or exact date is invented.

## Content and provenance

- `src/data/profile.ts`: identity, career, technologies and public projects. Career start year remains unspecified because only September 14 was confirmed.
- `src/data/trail-copy.ts`: English and French trail copy, including the UTMB Index 700 ambition.
- `src/data/gr441-project.ts`: bilingual project copy and confirmed early 2027 supported-attempt details.
- `src/data/trail.ts`: 2027 ambitions and linked race/route sources; goals do not imply confirmed entries.
- `src/data/gr441-route.json`: original simplified 2D projection and public FKT GPX source.
- `src/data/gr441-3d.json`: local geographic GR441 points (about 150 m apart) and a 19 × 31 IGN RGE ALTI® elevation grid, with sources and retrieval date. `TrailRoute.astro` renders a static SVG on the server and enhances it with drag rotation, keyboard orientation, zoom, 2D/3D switching and a distance/altitude slider. Relief is exaggerated ×8 and labelled. Data illustrates a planned route, not a personal activity or navigation aid. Elevations © IGN, Licence Ouverte 2.0. Refresh manually with `python3 scripts/build-trail-route.py`; building and viewing the site require no elevation API calls.
- `src/data/trail-results.json`: verified UTMB snapshot retrieved October 4, 2026, including indexes, results and DNF status. Refresh data and date together.
- `src/data/trail-social.ts`: confirmed TikTok account and public follower/like counts observed October 11, 2026. Refresh counts and date together; likes are cumulative across the account. The local AVIF preparation cover links out to its original post without an embed.
- `TRAIL-AUDIT.md`: earlier trail positioning audit and content needs for brand outreach; current appearance is documented in the design files above.
- `public/data/github.json`: dated GitHub contribution snapshot refreshed by `npm run github:update` and before `npm run build`. The Pages workflow refreshes and redeploys every four hours and on pushes to `main`. `reportedTotal` is the profile headline; `total` sums visible daily values and may differ. Failed or incomplete responses stop the build without replacing the previous snapshot.
- `public/images/SOURCES.md`: general image provenance. Developer trail-interest photos are illustrations, not personal outings or application screenshots.
- `public/images/trail/SOURCES.md` and image sidecars: trail photographers, sources, licenses and adaptations. Landscapes illustrate destinations; the trail portrait comes from Enzo's confirmed UTMB profile and the AVIF cover from his confirmed TikTok account. No generated raster is used in the trail redesign.

The developer profile effect accepts another image through `PixelPortrait`'s `src` prop. Trail displays the confirmed portrait in color within its personal photographic compositions. Contact uses the confirmed email and public destinations, with a prefilled partnership brief on trail.

## Interaction and validation

Trail project anchors progressively become keyboard-operated tabs, with Left/Right and Home/End selection and fragment support. Project changes use native View Transitions when available, with a Web Animations image-mask fallback. The chapter-responsive photographic story and geographic route enhance ordinary page content. Route rendering is event-driven, without automatic motion; horizontal touch gestures rotate while vertical page scrolling remains available. Arrow keys orient the focused scene, +/− zoom, and Home restores the initial view. Without JavaScript its full static 3D view and source caption remain visible; inactive controls stay hidden. Without JavaScript every project, all three chapters and the full route remain visible; native results, partnership and source disclosures still work. Both worlds support visible keyboard focus, persisted themes and reduced motion.

The trail redesign was checked with the production build, asset provenance validation, desktop/mobile layouts, both languages, light/dark themes, keyboard project selection, biography chapter progression, SVG route progress, native disclosures, no-JavaScript fallback and reduced motion. Viewports of 375, 390, 844, 1200 and 1440px were checked for overflow and image loading. Developer interaction checks cover the portrait toggle, expandable content, marquee pause and photograph cycling. Generated review screenshots remain local under `.impeccable/review/`.
