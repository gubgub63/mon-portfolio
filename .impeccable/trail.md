# Trail portfolio

Mode: Experience. Routes: `/trail/` and `/fr/trail/`. Visual world: a personal field journal shaped by the user’s explicit refinement after rejecting aggressive typography and a landscape-first campaign. Enzo’s first and last name lead, with real personal imagery and purposeful animation. Developer routes keep their existing visual identity. The direction contract is `.impeccable/surfaces/src-components-trailpage-astro.md`; the two scoped systems and their tokens are recorded in `DESIGN.md` and `.impeccable/design.json`.

Purpose: introduce Enzo as a trail runner from Puy-de-Dôme, show verified results, communicate his ambitions and invite partnership conversations. Making a living from trail running is an aspiration, not a current professional claim. His goal of reaching a UTMB Index of 700 in 2026 remains an ambition, independently of the dated published index values.

## Story and composition

Sequence: Enzo Gubbiotti as the primary heading beside one prominent central color portrait; three biographical chapters with a photographic spread; source-derived GR441 home-loop SVG; three 2027 project destinations led by GR441; selected results and full-results/UTMB disclosure; personal TikTok footage and dated audience figures; proposed collaboration disclosures; partnership contact; photography/source disclosure and footer link to the developer portfolio.

GR441 leads because it is the most personal project; that ordering is editorial, not a confirmed schedule. Category labels remain adjacent to Espoir placings and overall rankings stay visible. Proposed collaboration formats describe support and contribution to agree together. The page does not claim professional or elite status, existing sponsors, audience demographics or guaranteed campaign performance.

## Shipped visual world

`src/layouts/TrailLayout.astro` imports only `src/styles/trail.css`. The independent trail world uses warm paper, olive ink, focused safety-orange accents, light Manrope typography and smaller natural-case headings. The hero centers one square portrait under a full-width name, distinct from the biography photo stack. Goals use an open layout, pill-shaped destination controls, asymmetrically rounded landscapes and unboxed descriptions. The pale-green journal, dark route/contact sections and open paper evidence rows pace the page. Main content reaches 1600px including fluid gutters, independently of the developer's 768px shell. The trail portrait is shown in color; the developer pixel portrait stays on the developer routes.

Only Manrope 400/700 is self-hosted in `src/assets/fonts/`, with its OFL license. Both use `font-display: swap` and sans-serif fallback; the regular face is preloaded. No remote font service or generated raster is required. The former condensed campaign type is superseded.

Only the biography uses overlapping photographs, rotations and soft shadows. The hero is a single upright central portrait with a caption outside the image; the name uses entry masks while the portrait fades and rises. Scroll subtly moves the portrait, selects the biography chapter photo and draws the GR441 route. Fine-pointer depth is confined to the single hero visual. A single animation-frame renderer is scheduled by input/viewport events, with no continuous idle loop or scroll hijacking. Project selection uses native View Transitions when available and a Web Animations image mask otherwise.

The biography presents all three factual passages in ordinary document flow. Desktop pairs them with a sticky photographic spread; mobile removes stickiness and shows the spread above the passages. Reduced motion cancels entrances and hero transforms, removes chapter height/stickiness, hides the route marker and displays the complete route. CSS animations stop, transitions shorten to .01ms and scrolling becomes automatic.

`src/data/gr441-route.json` stores the public FKT route page, exact GPX `trackSource`, retrieval date, derivation description, SVG viewBox/path and start point. The path is a simplified geographic projection of the source track. It illustrates the planned GR441 route, not an activity Enzo has completed and not a navigation aid. A complete ground stroke remains visible throughout animation, and the source caption links to Fastest Known Time.

## Navigation and responsive behavior

The header links to story, projects, results and contact and provides FR/EN route links plus theme control. The footer links to the matching developer-language route. Theme choice shares the persisted `theme` key across routes; state labels and `aria-pressed` update, and unavailable storage does not block the page. Visible focus uses a 3px outline with 6px offset; a skip link reaches main content.

At 1100px and below contact leaves the header and gaps tighten. At 760px and below section links hide, language and theme remain, content grids stack, hero identity and collage stack, biography becomes non-sticky, results reflow, and the footer wraps. The theme control becomes 38px square. The labelled, focusable full-results region scrolls its 600px minimum-width table on narrow screens.

The destination explorer starts as ordinary anchors with all three project panels visible. JavaScript progressively supplies ARIA tabs and panels, selecting GR441 by default or a matching URL fragment. Left/Right wrap, Home/End select the endpoints, focus follows keyboard selection, and only the selected tab remains in the tab order. Clicking updates the URL fragment; fragment changes select the corresponding panel. Animated selection is skipped for reduced motion. Without JavaScript, all project photographs and factual descriptions, all three biography chapters and the full SVG route remain visible; destination anchors scroll normally. Native disclosures and contact/language links remain functional.

## Asset and source policy

Use the local WebP landscapes: `auvergne.webp` (Chaîne des Puys from Puy de Dôme), `madeira.webp` (view from Pico do Arieiro) and `reunion.webp` (Mafate). Auvergne appears in the biography and GR441 project. They illustrate identified places, not personal race participation. Preserve the public credits link to `/images/trail/SOURCES.md`, including author, original source, license and adaptation details, and asset sidecars. Do not substitute unrelated mountains or imply stock subjects are Enzo. The separate portrait is from Enzo's confirmed UTMB profile; no Creative Commons license is asserted for personal assets.

`src/data/trail-results.json` is the dated October 4, 2026 UTMB snapshot linked to Enzo's confirmed profile. Preserve DNF status, missing ratings and published distances. `src/data/trail.ts` holds MIUT Legend, the GR441 FKT attempt and Diagonale des Fous as 2027 goals with source links. Goals remain distinct from results and confirmed registrations. Bilingual copy lives in `src/data/trail-copy.ts`.

`src/data/trail-social.ts` records the user-confirmed public TikTok account: EnzoQuiCourt, @enzo_gubbiotti. On October 11, 2026 the profile displayed 2,968 followers and 50.5K cumulative account likes. These are a dated snapshot, not live analytics or an engagement rate. The actual preparation-post cover is local `tiktok-puy-de-dome.avif`, with its provenance sidecar; it preserves the 405 × 720 aspect ratio and links out to TikTok without an embed or third-party script.
