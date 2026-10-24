---
version: 1
slug: 'src-components-trailpage-astro'
primary_target: 'src/components/TrailPage.astro'
related_targets: ['src/styles/trail.css', 'src/layouts/TrailLayout.astro']
---

# Trail portfolio redesign

Scope: `/trail/` and `/fr/trail/`. Mode: Experience, with a clear partnership destination. Existing bilingual copy, user edits, real results, sources, goals and contact destinations remain factual authority. Developer portfolio stays visually unchanged.

## Direction contract

THESIS: A personal field journal. Meet Enzo Gubbiotti first, then discover his home, everyday life and ambitions through real photographs, biographical passages and source-grounded route motion.

OWN-WORLD: Warm paper, olive ink and restrained safety-orange accents. Manrope 400 for name, natural-case headings and prose; 700 for selected emphasis and controls. A single central portrait with 14px corners; rotated, softly shadowed photographs only in the biography; generous gutters; rounded project controls and open descriptions. The portrait remains in color. The journal uses a quiet pale-green surface.

STORY: Enzo's full name and personal imagery; three biographical chapters; the GR441 home loop; three 2027 ambitions; verified results; preparation footage; proposed partnerships and direct contact.

FIRST VIEWPORT: Enzo Gubbiotti is the primary heading beside one prominent upright color portrait, cropped to a tall oval. No stacked cards or landscape/preparation images repeat the biography in the hero. Smaller personal copy introduces him; a round discovery link enters the story. The footer grounds his discipline and origin and links to the next chapter. The full name spans the top row. The central portrait anchors a three-column editorial stage, with role and biography at left and discovery action at right. Below 1000px the name stays on one row, the portrait centers beneath it, and the copy and action reflow below.

FORM: Personal-first refinement pinned by the user's explicit corrections, not a new random direction roll. Signature sections are the chapter-responsive photographic biography and geographic GR441 SVG drawn from the public source GPX. Project tabs use masked image swaps with keyboard support and progressive enhancement. Motion remains subordinate to personal content and complete static fallbacks.

FINISH: Finish review, durable design documentation and source provenance accompany the shipped implementation. `DESIGN.md` records the actual scoped tokens and interaction rules.

## Personal-first refinement — 17 October 2026

The user rejected the earlier aggressive condensed font, oversized slogans, insufficient animation and insufficient personal identity. Their explicit corrections supersede that campaign treatment: Enzo Gubbiotti must be first and visually primary; real personal imagery must be prominent; reduce display sizes; develop distinctive sections and purposeful animation informed by Awwwards references.

Motion thesis: A personal field journal. The opening presents a central portrait below Enzo’s name spanning the page; its subtle entrance and pointer depth remain distinct from the multi-photo biography. The story uses a sticky photographic spread whose foreground photo and active chapter follow three real biographical passages. The GR441 SVG is a simplified geographic projection of the public FKT GPX, with a scroll-driven orange stroke and marker; it is not a personal activity record or navigation aid. Projects change through interruptible native View Transitions, or a Web Animations image-mask fallback. Photo depth responds only to a fine pointer. A single event-scheduled animation-frame renderer supplies scroll/pointer updates without an idle loop or scroll hijacking. Reduced motion presents static imagery, non-sticky biography, immediate project selection and the complete route. Without JavaScript all chapters, all projects and the route remain visible.

Awwwards research references: Peak'n Film photographic navigation/transitions; Body10 athlete gallery; Born&Bred project transitions. No copied assets or invented biographical claims.

## Historical exploration

The original recorded exploration selected outdoor campaign, candidate 6, seed `aea2c359`. Other explored candidates were ridge editorial, race-bib identity, outdoor film, expedition atlas, preparation diary and alpine journal. This record preserves exploration provenance only. Its landscape-first hero, Barlow Condensed ExtraBold, oversized uppercase slogans and full orange journal were rejected by the user and are not current design authority. No new roll was performed: the personal-first refinement above is pinned by the user's precise changes.

## Editorial hero refinement — 18 October 2026

User finds the previous hero too empty and conventional. Replace the split text/photo layout with a full-width name, central square photographic anchor and asymmetrically distributed role, introduction and discovery action. Preserve the quieter typography, personal identity, biography animation and relaxed goals. No cards, collage or oval crop in the hero.
