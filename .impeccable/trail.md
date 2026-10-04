# Trail profile

Mode: Experience. Route: `/trail/`. Extension of the existing portfolio, with the same reference authority: https://renlenon.vercel.app/.

Purpose: introduce Enzo as a trail runner from Puy-de-Dôme, show verified results, communicate his 2027 ambitions and invite contact around running and outdoor projects. Making a living from trail running is an aspiration, not a current professional claim.

Sequence: identity and home landscape, UTMB indexes, selected finishes and full-results disclosure, three 2027 goals, personal story, contact, photography/source disclosure, quiet footer.

## Inherited design evidence

`src/layouts/Layout.astro` and `src/styles/global.css` are shared with the developer route. The trail page reuses the system sans stack, 768px shell, 24px desktop/20px mobile gutters, 64px desktop/48px mobile section rhythm, light section headings, compact primary action and contact cards. `src/styles/trail.css` uses the existing foreground, muted, border, surface and easing variables rather than introducing a second palette. Both themes, focus styling and reduced-motion behavior come from the shared implementation.

The existing `PixelPortrait` component supplies the same circular grayscale/color pixel interaction, with the confirmed UTMB portrait on this route. Photography and goal containers retain the established 12px corners; the results disclosure and mode switch reuse the 7px control shape. Goal image shading is local to caption legibility, consistent with the existing featured photographs. `DESIGN.md` and `.impeccable/design.json` remain the unchanged global design authority; this brief records surface-specific choices.

## Navigation and responsive behavior

The Developer/Trail switch uses ordinary route links and `aria-current="page"`. Section links, footer destination and floating contact target follow the current route. Theme choice persists across routes. Below 701px the header keeps the mode switch and theme control while hiding section links. At the inherited 639px mobile breakpoint, goals and story become a single column and race dates move above their result rows. The full results table has a labelled, focusable scroll region.

## Asset and source policy

Use the three local WebP landscapes: `auvergne.webp` (Chaîne des Puys from Puy de Dôme), `madeira.webp` (view from Pico do Arieiro) and `reunion.webp` (Mafate). The Auvergne image also anchors the introduction. These are licensed photographs of identified places, not personal race photography. Preserve the public credits link to `/images/trail/SOURCES.md`, including author, original source, license and adaptation details. Do not substitute unrelated mountains or imply that stock subjects are Enzo.

`src/data/trail-results.json` is the dated October 4, 2026 UTMB snapshot, linked to Enzo's user-confirmed profile. Preserve DNF status, missing ratings and published distances. `src/data/trail.ts` holds MIUT Legend, GR441 FKT attempt and Diagonale des Fous as 2027 goals with source links. Race ambitions must remain distinct from verified results and confirmed entries.
