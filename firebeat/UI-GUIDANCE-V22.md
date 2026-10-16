# V22 — responsive repair and portable delivery

## Context and intent
Repair the Agenda mobile failure from the supplied screenshots, replace wrapped filter blocks with clear horizontal navigation, avoid one-word heading tails and package local typography/source for GitHub Pages. Keep the approved art direction, hero/footer, photography and narrative.

## Foundations and composition
Retain Be Vietnam Pro and the existing festival semantic palette. --font-primary defines the same local family plus Arial/Helvetica/sans-serif; --body and --display must share it. All five used weights must be bundled with Vietnamese/Latin coverage and OFL. No installed font or external Google Fonts connection is required. Font synthesis must be disabled; text-size-adjust must preserve mobile sizing. Typography should retain approved scale, adapting middle headings to26–31px on narrow screens. Heading em phrases must form balanced blocks on mobile; short second phrases should remain together. Desktop hero/footer scales remain distinct.

Attention and grid are unchanged except instrumental mobile Agenda: category → full-width description → time/status. Desktop must explicitly place category/content/time in three columns; tablet must place content/time in the second column; mobile≤760px must use a vertical flex sequence. No child may inherit the old grid-column2 placement that squeezed the description to about65px. The content track must use minmax(0,1fr) and min-width0 where needed.

## Component rules
Flavor navigation on mobile must be one horizontal rail with168px items (158px on narrow320px), readable region names and supporting menu. It must not wrap into the rejected2×2 unequal pills. Combo filters≤1100px must be one native horizontal row, with transparent parent and red selected pill. Active/focused choices should scroll into view without scrolling the page unnecessarily. Both must retain button semantics, aria-pressed,44px+ height, pointer/touch scrolling and visible keyboard focus. States: default transparent/light border, hover warm fill, active/selected brand red, focus blue outline, disabled/loading/error behavior inherited from their existing async selection/filters. Long names must remain intact; future labels must not force page overflow.

Agenda dates≤760px must be three equal compact buttons with date above weekday, brand-red selection and keyboard arrows/Home/End retained. Category, content and status must stay left aligned. Unconfirmed schedule content must remain labeled. Content must wrap naturally rather than shrink type to fit a grid. Program errors are not remote states here; existing static framework remains.

Touch confetti: a short tap on hero/footer must emit34 pieces even when pointer is coarse. Pointer travel>12px or pointercancel must suppress the burst to avoid firing on page scroll. The subsequent synthetic click must not create a duplicate burst. Mouse/pen trails and click bursts remain. Canvas must stay pointer-transparent, passive and region-scoped; no control action may be cancelled. Reduced motion must disable trails/bursts on every device. Rendering must continue for a touch burst without requiring a fine pointer. Coarse-pointer CSS must show the canvas except under reduced motion. Physics limits and unavailable-canvas fallback remain fromV21.

## Portable source
The export must include dist, local assets/fonts/license, README, GitHub Pages workflow, design/QA guidance and optional dev tool. It must exclude .git, .openai Site identity/hosting data, credentials, archives and scratch. Workflow must publish dist with Actions and no build dependencies. All asset/content routes must remain relative, supporting repository subpaths and custom-domain roots. A domain must not be guessed; repository/domain/DNS configuration remains pending the exact admeX destination.

## Testable acceptance and QA
See QA-RESPONSIVE.md for direct browser findings at320/375/390/430/768/1024/1366/1440/1920px, heading/overflow/font metrics and interaction checks. Screenshot evidence supplied by the user was visually inspected before repair. Source/VM tests also passed; touch behavior was simulated, not tested on a physical phone. Do not claim universal OS/Safari verification. QA harness must not remain in published dist. Native dialogs/reader, reduced-motion, content truth, map asset and sales-demo labels must remain intact.

## Anti-patterns
Must not retain inherited grid placement on a stacked component, shrink body text to compensate for broken columns, reintroduce a multi-row filter box or replace Vietnamese glyphs with fallback fragments. Should prefer semantic phrase grouping and text-wrap balance to arbitrary per-device br tags. Must not claim that source export means GitHub deployment or DNS changes have completed.

## Checklist
Nine-width browser checks completed; local fonts and glyph coverage verified; reader/selection/filter/FAQ/gift checks completed; short-tap/swipe/reduced-motion path checked in VM. Physical iOS/Android and Safari remain unverified. Final archive/source must match, preserve current Sites audience and exclude the temporary QA route.
