---
name: Enzo Gubbiotti Portfolio
description: Reference-led monochrome developer portfolio with restrained interactive photography.
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
rounded:
    inline-chip: '4px'
    technology-chip: '5px'
    button: '7px'
    card: '12px'
    feature: '14px'
    interest: '30px'
    portrait: '50%'
spacing:
    chip-gap: '12px'
    grid-gap: '16px'
    mobile-gutter: '20px'
    gutter: '24px'
    timeline-gap: '32px'
    mobile-section: '48px'
    section: '64px'
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
---

# Design System: Enzo Gubbiotti Portfolio

## Overview

**Creative North Star: "The supplied Ren Lenon portfolio"**

The user pinned https://renlenon.vercel.app/ as the visual authority and explicitly required preserving its artistic direction. The implemented world is a narrow, white-first portfolio with light section titles, muted prose, compact controls and restrained image interactions. The default system sans stack is intentional reference fidelity.

Keep the identity personal through verified content and the user's projects. Do not reinterpret this into an oversized agency landing page, colorful dashboard or new brand direction. This document records the implementation; the home page's Experience mode and sequence live in `.impeccable/surface.md`.

**Key Characteristics:**

- Narrow centered composition with generous separation between sections.
- White and charcoal surfaces, gray text and borders, small black actions.
- Circular avatar with randomized pixel reveal.
- Compact timelines, dashed project outlines and softly rounded photographs.
- Functional light and dark themes with English copy throughout.

## Colors

The palette is neutral-first. CSS custom properties in `src/styles/global.css` map the light primitives to their dark counterparts under `:root[data-theme=dark]`.

### Primary

The button pair supplies the principal action contrast; the foreground token carries headings and meaningful icons. Technology icon colors are small, source-local identifiers, not a general brand palette.

### Neutral

The background is the page canvas, surface is the subtle inset fill, muted is secondary prose and border defines quiet boundaries. The contribution graph uses surface, foreground and foreground/background mixes at 20%, 38% and 61%, rather than a separate green palette.

**The Reference Rule.** Preserve the supplied reference's monochrome hierarchy. Existing muted purple and green project illustrations remain small content surfaces, not accents to expand across the page.

## Typography

The system sans stack is shared throughout. Identity uses a medium-weight name; the role uses normal weight; section titles are light. Card titles add weight at compact sizes. No custom font download is required.

The frontmatter records desktop roles. At the mobile breakpoint, the role becomes 28px, section headings 26px, identity name 24px and introduction 16px. Body remains 16px. Timeline titles are 17px. Supporting project and timeline copy is 14px, with project descriptions increased to 15px on mobile. Small metadata and uppercase project links are intentionally compact in the reference.

Headings use balanced wrapping and tight tracking. Long email addresses wrap within their flex child. Contribution counts use tabular numerals. English is the only shipped interface language.

## Layout

The shell is centered, maximum 768px wide including 24px inline gutters. Its usable desktop content width is 720px. The header is 65px high. The main column separates sections by 64px; the hero starts with 64px top padding. Identity places portrait and name side by side with a 24px gap.

At widths up to 639px, shell gutters become 20px, header 60px, section gaps 48px and hero top padding 32px. Project cards change from three columns to one; timeline dates move above their content; trail and contact grids become single columns. Technology detail groups likewise collapse to one column. The circular avatar is 128px below 640px and 160px from 640px upward.

Featured panels use a horizontal flex gallery, 280px high on desktop and 260px on mobile. The active panel grows from flex 1 to 2.5 on desktop, or 1.3 on mobile. Trail photographs occupy a 224px square stack. Contact and trail sections use a two-column 1.05fr / .95fr split before the mobile collapse.

The GitHub graph has a separate 540px refinement: tighter cells, fewer visible month labels and wrapping footer metadata. It retains a readable daily-values table. Floating contact sits at bottom/right 24px, changing to 16px on mobile; the footer reserves additional mobile bottom space.

## Elevation & Depth

Most surfaces are flat and defined by borders or subtle fills. Project cards have dashed outlines. Photographs use a restrained `0 5px 18px #00000016` shadow; the floating contact uses `0 4px 12px #0002`. The dark photographic overlay is local to featured content and keeps white text legible. Do not generalize photographic shading into decorative gradients elsewhere.

## Shapes

Small labels use gently rounded corners, actions use a 7px radius, project cards and photographs 12px, and featured/contact containers 14px. Interest labels are pills. The avatar alone uses a circular crop. Contribution cells use 2px corners, reducing to 1px on small screens.

## Components

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

## Do's and Don'ts

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
