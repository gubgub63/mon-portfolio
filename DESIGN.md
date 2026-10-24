---
name: Enzo Gubbiotti Portfolio
description: Independent monochrome developer and personal field-journal trail worlds, scoped by route.
colors:
    bg: '#fff'
    fg: '#202632'
    muted: '#687180'
    border: '#e2e4e8'
    surface: '#f6f7f8'
    button: '#171819'
    button-text: '#fff'
    dark-bg: '#101113'
    dark-fg: '#f0f1f3'
    dark-muted: '#a2a8b1'
    dark-border: '#31343a'
    dark-surface: '#1c1e22'
    dark-button: '#f1f2f4'
    dark-button-text: '#171819'
    trail-paper: '#f4f1e9'
    trail-ink: '#252b24'
    trail-muted: '#596050'
    trail-line: '#c7c8bc'
    trail-orange: '#fb5b30'
    trail-on-orange: '#231a13'
    trail-night: '#252b24'
    trail-white: '#fffdf6'
    trail-night-muted: '#c5cbbd'
    trail-journal-bg: '#e5e8de'
    trail-dark-journal-bg: '#283127'
    trail-dark-paper: '#191c18'
    trail-dark-ink: '#f4f1e9'
    trail-dark-muted: '#bfc5b5'
    trail-dark-line: '#4b5144'
typography:
    display:
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        fontSize: '34px'
        fontWeight: 400
        lineHeight: 1.3
        letterSpacing: '-0.035em'
    headline:
        fontSize: '30px'
        fontWeight: 300
        lineHeight: 1.2
        letterSpacing: '-0.035em'
    title:
        fontSize: '18px'
        fontWeight: 600
        lineHeight: 1.2
        letterSpacing: '-0.025em'
    body:
        fontSize: '16px'
        fontWeight: 400
        lineHeight: 1.6
    introduction:
        fontSize: '18px'
        fontWeight: 400
        lineHeight: 1.85
    label:
        fontSize: '13px'
    trail-display:
        fontFamily: 'Manrope, sans-serif'
        fontSize: 'clamp(58px, 6.9vw, 96px)'
        fontWeight: 400
        lineHeight: 1.07
        letterSpacing: '-0.04em'
    trail-headline:
        fontFamily: 'Manrope, sans-serif'
        fontSize: 'clamp(32px, 3.8vw, 52px)'
        fontWeight: 400
        lineHeight: 1.14
        letterSpacing: '-0.035em'
    trail-title:
        fontFamily: 'Manrope, sans-serif'
        fontSize: '26px'
        fontWeight: 400
        lineHeight: 1.3
    trail-body:
        fontFamily: 'Manrope, sans-serif'
        fontSize: '16px'
        fontWeight: 400
        lineHeight: 1.65
    trail-lead:
        fontFamily: 'Manrope, sans-serif'
        fontSize: 'clamp(18px, 1.5vw, 22px)'
        fontWeight: 400
        lineHeight: 1.65
        letterSpacing: '-0.015em'
    trail-label:
        fontFamily: 'Manrope, sans-serif'
        fontSize: '13px'
        fontWeight: 700
rounded:
    inline-chip: '4px'
    technology-chip: '5px'
    button: '7px'
    card: '12px'
    feature: '14px'
    interest: '30px'
    portrait: '50%'
    trail-frame: '0'
    trail-pill: '100px'
    trail-portrait: '14px'
    trail-landscape: '24px 140px 24px 90px'
    trail-round-control: '50%'
spacing:
    chip-gap: '12px'
    grid-gap: '16px'
    mobile-gutter: '20px'
    gutter: '24px'
    timeline-gap: '32px'
    mobile-section: '48px'
    section: '64px'
    trail-gutter: 'clamp(22px, 4.5vw, 80px)'
    trail-copy-gap: '24px'
    trail-row: '32px'
    trail-panel-gap: '48px'
    trail-mobile-section: '70px'
    trail-mobile-feature: '64px'
    trail-section: '116px'
components:
    button-primary:
        backgroundColor: '{colors.button}'
        textColor: '{colors.button-text}'
        rounded: '{rounded.button}'
        padding: '10px 22px'
    button-secondary:
        backgroundColor: '{colors.bg}'
        textColor: '{colors.fg}'
        rounded: '{rounded.button}'
        padding: '10px 22px'
    technology-chip:
        textColor: '{colors.fg}'
        rounded: '{rounded.technology-chip}'
        padding: '4px 12px'
    project-card:
        rounded: '{rounded.card}'
        padding: '8px'
    contact-card:
        rounded: '{rounded.feature}'
        padding: '15px 12px'
    trail-action:
        backgroundColor: '{colors.trail-orange}'
        textColor: '{colors.trail-on-orange}'
        rounded: '{rounded.trail-pill}'
        padding: '15px 20px'
    trail-action-hover:
        backgroundColor: '{colors.trail-ink}'
        textColor: '{colors.trail-paper}'
    trail-discover-control:
        backgroundColor: '{colors.trail-orange}'
        textColor: '{colors.trail-on-orange}'
        rounded: '{rounded.trail-round-control}'
        width: '52px'
        height: '52px'
    trail-project-tab:
        textColor: '{colors.trail-ink}'
        rounded: '{rounded.trail-pill}'
        padding: '12px 20px'
    trail-project-tab-selected:
        backgroundColor: '{colors.trail-orange}'
        textColor: '{colors.trail-on-orange}'
    trail-theme-control:
        rounded: '{rounded.trail-round-control}'
        width: '44px'
        height: '44px'
---

# Design System: Enzo Gubbiotti Portfolio

## Overview

**Creative North Star: "The supplied Ren Lenon portfolio" (developer); "A personal field journal" (trail)**

This repository has two independent visual worlds. The unprefixed tokens and developer guidance below apply to `/` and `/fr/`, using `Layout.astro` and `global.css`. The `trail-` tokens and explicitly marked trail guidance apply only to `/trail/` and `/fr/trail/`, using `TrailLayout.astro` and `trail.css`. Trail imports its own stylesheet; do not propagate its display fonts, orange palette or wide composition into the developer portfolio.

### Developer world

The user pinned https://renlenon.vercel.app/ as the developer visual authority and explicitly required preserving its artistic direction. The implemented world is a narrow, white-first portfolio with light section titles, muted prose, compact controls and restrained image interactions. The default system sans stack is intentional reference fidelity.

Keep the identity personal through verified content and the user's projects. Do not reinterpret this into an oversized agency landing page, colorful dashboard or new brand direction. This document records the implementation; the home page's Experience mode and sequence live in `.impeccable/surface.md`.

**Key Characteristics:**

- Narrow centered composition with generous separation between sections.
- White and charcoal surfaces, gray text and borders, small black actions.
- Circular avatar with randomized pixel reveal.
- Compact timelines, dashed project outlines and softly rounded photographs.
- Functional light and dark themes, with English and French route variants.

### Trail world

The trail world is a personal field journal: Enzo's full name leads, accompanied by his color portrait, home landscape and real preparation footage. Warm paper, olive ink, restrained orange and light Manrope typography support the person. Photographic arrangements and source-grounded route motion create the distinctive section design; smaller natural-case headings keep the voice conversational.

The user explicitly rejected the earlier aggressive condensed typography and oversized campaign slogans. The current personal-first direction supersedes that treatment. The approved contract is `.impeccable/surfaces/src-components-trailpage-astro.md`; page sequence and content constraints live in `.impeccable/trail.md`.

**Key Characteristics:**

- Full name first, with real personal imagery prominent.
- Manrope 400 display and prose, with 700 reserved for selected controls and emphasis.
- Loosely rotated photographic frames, fine rules and open evidence rows.
- Three biographical chapters with a responsive photographic spread, followed by a source-derived GR441 route.
- Event-driven motion, bilingual routes, persistent themes, keyboard project selection and readable no-JavaScript content.

## Colors

### Developer world

The palette is neutral-first. CSS custom properties in `src/styles/global.css` map the light primitives to their dark counterparts under `:root[data-theme=dark]`.

### Primary

The button pair supplies the principal action contrast; the foreground token carries headings and meaningful icons. Technology icon colors are small, source-local identifiers, not a general brand palette.

### Neutral

The background is the page canvas, surface is the subtle inset fill, muted is secondary prose and border defines quiet boundaries. The contribution graph uses surface, foreground and foreground/background mixes at 20%, 38% and 61%, rather than a separate green palette.

**The Reference Rule.** Preserve the supplied reference's monochrome hierarchy. Existing muted purple and green project illustrations remain small content surfaces, not accents to expand across the page.

### Trail world — Primary

Safety orange marks actions, selected projects, the name punctuation and route progress. On-orange ink supplies its foreground. Orange remains a focused accent rather than a full journal-section fill.

### Trail world — Neutral

Paper is the warm page canvas; ink supplies text and the invariant night-section fill. Muted carries secondary prose, line supplies divisions, and night-muted supports dark-section copy. The journal has its own quiet pale-green background. Dark theme remaps paper, ink, muted, line and journal background to the corresponding `trail-dark-` tokens; orange, night, off-white and on-orange remain invariant.

**The Route Boundary Rule.** Keep each world's tokens and component language inside its own layout and routes.

## Typography

### Developer world

The system sans stack is shared throughout. Identity uses a medium-weight name; the role uses normal weight; section titles are light. Card titles add weight at compact sizes. No custom font download is required.

The frontmatter records desktop roles. At the mobile breakpoint, the role becomes 28px, section headings 26px, identity name 24px and introduction 16px. Body remains 16px. Timeline titles are 17px. Supporting project and timeline copy is 14px, with project descriptions increased to 15px on mobile. Small metadata and uppercase project links are intentionally compact in the reference.

Headings use balanced wrapping and tight tracking. Long email addresses wrap within their flex child. Contribution counts use tabular numerals. English and French are shipped on separate routes.

### Trail world

Self-hosted Manrope is the sole trail family: 400 for name, headings, prose and key numbers, and 700 for navigation and selected emphasis. Its fallback is `sans-serif`; both faces use `font-display: swap`. The regular face is preloaded. Font files and the OFL license live in `src/assets/fonts/`. Barlow Condensed is no longer part of the shipped trail world.

The frontmatter records principal desktop roles. The full-name heading becomes 70px at 1100px and below, then `clamp(52px, 13vw, 76px)` at 760px and below. Standard mobile section headings are 33px; biography and route headings are 30px and 35px. Biography prose uses 18px/1.9 on desktop and 16px/1.85 on mobile. Project choice text is 20px on desktop, 18px below 1100px and 13px on mobile. Source notes remain 12px; tabular numerals support result comparisons.

**The Personal Voice Rule.** Lead with Enzo's name and readable natural-case type; preserve the light display weight instead of restoring oversized condensed slogans.

## Layout

### Developer world

The shell is centered, maximum 768px wide including 24px inline gutters. Its usable desktop content width is 720px. The header is 65px high. The main column separates sections by 64px; the hero starts with 64px top padding. Identity places portrait and name side by side with a 24px gap.

At widths up to 639px, shell gutters become 20px, header 60px, section gaps 48px and hero top padding 32px. Project cards change from three columns to one; timeline dates move above their content; trail and contact grids become single columns. Technology detail groups likewise collapse to one column. The circular avatar is 128px below 640px and 160px from 640px upward.

Featured panels use a horizontal flex gallery, 280px high on desktop and 260px on mobile. The active panel grows from flex 1 to 2.5 on desktop, or 1.3 on mobile. Trail photographs occupy a 224px square stack. Contact and trail sections use a two-column 1.05fr / .95fr split before the mobile collapse.

The GitHub graph has a separate 540px refinement: tighter cells, fewer visible month labels and wrapping footer metadata. It retains a readable daily-values table. Floating contact sits at bottom/right 24px, changing to 16px on mobile; the footer reserves additional mobile bottom space.

### Trail world

Main wraps reach 1600px including fluid inline gutters; navigation has an independent 1800px maximum and minimum 92px height. The hero is an editorial three-column stage: full-width first/last name on row one, a central square portrait at 430–520px, role and short biography at left, and discovery control at right. The footer spans all columns. Below 1000px a two-column edition centers the portrait beneath the one-row name and places role/action, introduction and footer below.

Biography uses a `1fr / .9fr` spread with a 12% gap. The photo column sticks 50px from the top; three prose chapters each have a 470px minimum height and remain in normal document flow. The route section pairs `.9fr / 1.1fr` columns; its SVG scales to its container with a 570px maximum height. Project panels use `1.2fr / .9fr` with a 7% gap and unboxed descriptions; journal uses `1.3fr / .7fr`. Results and partnerships retain 116px vertical padding; biography uses 90px/100px, route and journal 90px, projects 100px.

At 1100px contact leaves the header and grids tighten. At 760px section navigation hides while languages and theme remain; header height becomes 76px and the theme control 38px square. Hero, biography, route, project and journal grids stack. Hero top padding becomes 32px; the single portrait scales to at most 340px within its visual column. Biography loses stickiness, chapter minimum heights and the visual chapter indicator; all three passages remain available. Results and partnerships use 70px spacing, other major sections 64px. Result rows reflow around their placing column; the labelled scroll region retains the full table at 600px minimum width. These trail breakpoints are independent of the developer's 639px breakpoint.

## Elevation & Depth

### Developer world

Most surfaces are flat and defined by borders or subtle fills. Project cards have dashed outlines. Photographs use a restrained `0 5px 18px #00000016` shadow; the floating contact uses `0 4px 12px #0002`. The dark photographic overlay is local to featured content and keeps white text legible. Do not generalize photographic shading into decorative gradients elsewhere.

### Trail world

The single central hero portrait is upright and shadow-free. Overlap, rotations and the `0 14px 32px #15201517` shadow belong to the biography photos. Goal copy sits directly on the page; a local destination-photo scrim protects its geographic caption.

Entry masks reveal the name lines over 850ms; the single portrait fades and rises over 1000ms. Scroll gently translates the portrait, selects the nearest biography chapter and draws the source-derived route with a moving marker. A single scheduled animation-frame renderer responds to scroll, resize, visibility and fine-pointer events; it does not run an idle animation loop. Pointer depth is limited to hover-capable fine pointers. Project changes use native View Transitions when available, with a Web Animations image-mask fallback. Motion tokens and exact timings are in `.impeccable/design.json`.

Reduced motion cancels entrance animations, clears hero transforms and route dash styles, removes biography stickiness and chapter height, hides the route marker and supplies the complete route. CSS animations are disabled, transitions shortened to .01ms, and smooth scrolling becomes automatic. All content remains available.

## Shapes

### Developer world

Small labels use gently rounded corners, actions use a 7px radius, project cards and photographs 12px, and featured/contact containers 14px. Interest labels are pills. The avatar alone uses a circular crop. Contribution cells use 2px corners, reducing to 1px on small screens.

### Trail world

The hero portrait uses a square crop with 14px corners. Goal landscapes use asymmetric rounded corners (`24px 140px 24px 90px`, mobile `18px 80px 18px 60px`); destination controls and project actions use 100px pill radii. Project descriptions have no enclosing box. Only the biography retains rotated photographic frames and attached captions. Discover, theme, play, contact and back-to-top controls use circles. Keep this personal photographic language inside trail routes; developer rounded dashed project cards retain their own rules.

## Components

### Developer world

### Buttons and navigation

The black primary and outlined secondary share compact padding and a 46px minimum height. Hover raises actions by 2px; text links change foreground emphasis. Navigation stays inline on mobile with smaller gaps and type. Theme toggle persists the chosen theme and exposes its pressed state. The fixed contact action scrolls to contact rather than opening a chat product.

Focus uses a 2px foreground outline with a 5px offset globally. The page has a skip link. Selection and scrollbars inherit the page palette. Disabled buttons reduce opacity and use a non-action cursor.

### Portrait

`PixelPortrait.astro` uses the actual GitHub avatar, initially grayscale. Hover or keyboard focus triggers a randomized 12-by-12 white-pixel cover/reveal, swapping to color and a 1.1 scale. Click or tap toggles a pinned state. A cancellable animation frame loop settles state safely during interruption. Reduced-motion preference produces an immediate state change.

### Projects and featured panels

Featured photographs have local dark overlays and expandable panels on pointer entry or keyboard focus. Project cards use a dashed outline, a compact preview, description, wrapping technology list and real repository links. Trail imagery is illustrative stock photography, never a claim of personal photography or an actual project screenshot.

### Technology chips

Three duplicated marquee rows carry compact outlined chips. The middle row moves in reverse. Rows pause on hover and focus within the group; reduced motion removes animation, hides duplicate rows and permits horizontal inspection. The explicit details control reveals a static grouped technology list.

### Trail photograph stack

A real button cycles three overlapping photographs; the stacks use distinct small rotations. Hover lifts the front image. The accessible label describes the next-photograph action. These are trail inspiration images, not documented personal outings.

### Activity and disclosure

The monochrome contribution grid is a dated source snapshot, with a source link, total and accessible daily table in a native disclosure. Timeline details and technology details use buttons with `aria-expanded` and `aria-controls`. Empty activity data has a meaningful fallback link.

### Motion

The shared transform easing is `cubic-bezier(.16,1,.3,1)`. Global color transitions take 200ms and transform transitions 300ms; feature expansion 650ms; the trail stack 500ms. Section reveal is a one-time 550ms opacity/12px translation as a section enters view. Reduced motion disables CSS transitions, marquees, smooth scrolling and the optional section reveal.

### Trail actions and navigation

Orange project actions are pill-shaped, with a 52px minimum height and generous padding. Text links and navigation links have at least 44px height. The personal discovery link pairs plain text with a round arrow (52px, 44px on mobile) that rotates on hover. The theme circle is 44px on desktop and 38px on mobile. Focus uses a 3px current-color outline offset 6px; a skip link leads to main content.

Header navigation provides story, projects, results, contact, language and theme. The full name appears in both wordmarks; the footer links to the corresponding developer-language route. Language links use `aria-current`. Theme shares the persisted `theme` key across routes, updates `aria-pressed` and its next-theme label, and tolerates unavailable storage. Without scripting, default light content and route links remain usable.

### Trail personal spread and route

The hero leads with the full name and one upright color portrait. The biography alone owns the overlapping photographs and personal preparation still. Three biography chapters retain the existing factual copy. Their decorative photo stack and indicator are hidden from assistive technology; proximity to the viewport center selects the foreground photo when motion is enabled. Mobile uses a static, non-sticky spread above the three passages.

The GR441 figure is an SVG generated from a simplified geographic projection of the public FKT GPX. `src/data/gr441-route.json` stores the route page, exact `trackSource`, retrieval date, description, viewBox, path and start point. The orange stroke and marker follow scroll progress; the complete base route is always visible. This illustrates a planned route, not a recorded activity by Enzo or a navigation aid. Preserve its source caption.

### Trail project explorer

Three ordinary destination anchors become an ARIA tablist when the project script initializes. GR441 is first and selected by default; a matching initial fragment or `hashchange` selects the corresponding panel. Selection updates photograph and description together, orange state and the single tab stop. Left/Right wrap; Home/End select the endpoints and keyboard selection moves focus. Click updates the fragment with `replaceState`.

Pointer and keyboard selection use interruptible native View Transitions when supported: the outgoing image leaves, the new image opens through a horizontal mask and copy enters below. A previous transition is skipped before another starts. Without that API, Web Animations supplies a 600ms mask on the incoming image. Reduced motion changes panels immediately. Without JavaScript all panels are visible and ordinary anchors reach each destination.

### Trail results, journal and disclosures

Results use open rows that retain category placing, category, date, race, distance, time and overall ranking. Full results, partnership formats and credits use native `details`/`summary`; the full table has a labelled, focusable horizontal scroll region. They work without JavaScript.

The journal uses a quiet pale-green surface and a slightly rotated portrait-format preparation cover that straightens on hover. Its link goes to the real TikTok post; no embedded player is implied. The portrait is shown in color, independently of the developer pixel portrait. Contact uses the confirmed email with bilingual partnership subject and brief. Source notes and credits remain available in both themes.

## Do's and Don'ts

The following reference and pixel-effect rules apply to the developer world; trail follows its separately scoped personal field-journal rules.

### Do:

- Do preserve the supplied reference's composition, neutral hierarchy and profile pixel effect.
- Do maintain English copy, both themes, visible keyboard focus and reduced-motion behavior.
- Do keep avatar, stock illustrations and dated contribution data accurately described.
- Do use actual repository destinations and verified career facts.

### Don't:

- Don't replace the pinned direction with a newly invented visual system.
- Don't present stock photos as personal portraits, project screenshots or evidence of trail achievements.
- Don't invent career years, project metrics, testimonials or contact channels.
- Don't treat the dated GitHub snapshot as a live activity feed.

### Trail Do:

- Do lead with Enzo’s first and last name, color portrait and personal footage; use light Manrope and natural-case headings.
- Do retain visible focus, both language routes, theme persistence, native disclosures and complete no-JavaScript project content.
- Do keep licensed landscape illustrations, the confirmed portrait and personal footage accurately credited.
- Do show dated performance and social snapshots as evidence, and ambitions as future goals.

### Trail Don't:

- Don't carry the trail palette, custom typography or wide grid into the developer routes.
- Don't restore the rejected aggressive condensed type, oversized slogans or landscape-first identity.
- Don't present destination photographs as race participation, ambitions as confirmed entries, or social snapshots as live analytics.
- Don't hide project facts or contact behind animation or JavaScript-only controls.

## Interactive GR441 relief — 23 October 2026

The route figure now uses `TrailRoute.astro` and its independently scoped `trail-route.css`. It projects geographic coordinates and real IGN RGE ALTI® elevations into SVG with olive terrain facets, a fine mesh and the orange full route. A local 19 × 31 elevation grid supports the terrain; 680 route samples preserve the GPX path and cumulative geographic distance. Height is exaggerated eight times, visibly disclosed. The FKT source and IGN credit remain linked beneath the figure. This supersedes the scroll-drawn 2D route described above.

The default 3D view supports horizontal drag rotation, mouse vertical tilt, keyboard arrows, bounded zoom, reset and a 2D switch. A labelled range input moves the position marker and reports distance and altitude. Touch retains vertical page scrolling and pinch zoom; horizontal gestures orient the scene. Rendering only runs after explicit input, with no idle loop, automatic animation or network calls. The complete relief is server-rendered; controls are hidden until enhanced. Both language routes, both themes and reduced-motion preferences retain the same static-first content. The developer world is unchanged. Data sources, retrieval date, attribution and the manual regeneration command are in the README and local data file.

## Dedicated GR441 project — 23 October 2026

`/trail/gr441/` and `/fr/trail/gr441/` present the GR441 as its own personal project, reached from both the home-loop link and GR441 project action. Enzo confirmed the target window of early 2027 and a supported attempt. The exact day and target time remain unspecified. Preparation rows distinguish the defined goal from reconnaissance and support logistics still to organise.

`GR441Page.astro` uses the trail palette and Manrope with its own `gr441.css`: a route-name hero with a real Auvergne panorama, an open four-fact strip, personal intention and portrait signature, a dark interactive terrain section, an unboxed numbered roadmap, dated UTPMA experience, an existing TikTok preparation clip and a project-specific contact. Landscape and video provenance remain explicit. No completed reconnaissance, support team, sponsor or live project tracking is implied. The existing preparation video is presented as a general trail diary entry, not a GR441 reconnaissance.

The shared trail layout accepts a project context for correct canonical/alternate links, language switching and in-page navigation. Its wordmark returns to the trail homepage. The route component optionally adds an IGN elevation profile whose marker follows the distance slider. The full route and profile are server-rendered; controls progressively enhance the page. Both languages, light/dark themes, keyboard controls, reduced motion and a readable no-JavaScript page remain supported.
