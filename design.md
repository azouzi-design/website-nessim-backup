# Design System — Nessim Bozrati

A build manual for adding pages and sections to this site. Every value here
is extracted from working code, not invented.

**Source of truth:** `src/app/globals.css` (tokens) + `src/components/`
(patterns). If code and this file disagree, the code wins — then fix this file.

**How to use this:** building something new? Go to §7 (Page Playbook) first,
then copy the exact class strings from §4 (Recipes). Don't author new visual
values unless §8 says the system is genuinely missing one.

---

## 1. The direction in one paragraph

Warm editorial minimalism. A serif display face (IBM Plex Serif) does all the
talking; a neutral grotesque (Switzer) carries the body. Everything sits on an
off-white page as **white cards with tight 8px gutters and near-invisible
shadows** — structure comes from card edges and generous whitespace, almost
never from borders or rules. Color is restrained to near-black, white, and one
LinkedIn blue, with six pastel accents used *only* as small segmented tag bars.
Motion is springy and physical (overshoot easing, scroll-driven card stacking,
a slowly rotating wireframe globe) but decorative-only — never required to
understand the page. Tight negative letter-spacing on headings and fixed-height
components give it a designed, laid-out feel rather than a flowing-document feel.

---

## 2. Foundations

### 2.1 Fonts

Loaded in `src/app/layout.tsx`, exposed as CSS vars + Tailwind utilities.

| Role | Family | Weights | Var | Utility |
|---|---|---|---|---|
| Display / headings | IBM Plex Serif (Google) | 600 only | `--font-heading` | `font-heading` |
| Body / UI | Switzer (local variable woff2, + italic) | variable | `--font-body` | `font-body` |

- `body` defaults to Switzer. `h1–h4` default to IBM Plex Serif via a global rule.
- **Apply `font-heading` explicitly** on any non-heading element that should be
  serif (stat values, pill labels, pull-quotes) — it's not inherited outside `h1–h4`.
- Only weight 600 is loaded for the serif. Never write `font-bold`/`font-normal`
  on serif text; it will synthesize and look wrong.

### 2.2 Type scale

Defined in `@theme inline`, so each token carries size + line-height +
letter-spacing + weight in one utility.

| Utility | Size | LH | Tracking | Weight | Use |
|---|---|---|---|---|---|
| `text-h1` | 48px | 1.1 | -2px | 600 | Page hero headline only |
| `text-h2` | 32px | 1.2 | -1.5px | 600 | Section headings, big stat numbers |
| `text-h3` | 24px | 1.2 | -1px | 600 | Pull-quotes, stat values inside cards |
| `text-h4` | 16px | 1.2 | -0.5px | 600 | Card titles |
| `text-body` | 14px | 1.4 | 0 | 400 | All body copy, nav links, labels |
| `text-button` | 14px | 1.3 | -0.5px | 500 | Button labels only |
| `text-caption` | 12px | 1.3 | 0 | 400 | Chips/tags only |

Responsive: **only h1/h2/h3 shrink** (§6). h4, body, button, caption are fixed
at every viewport — that's deliberate, keep it.

`h1–h6` and `p` get `text-wrap: balance` globally.

### 2.3 Color

| Token | Hex | Role |
|---|---|---|
| `background` | `#ffffff` | Cards, pills, panels sitting on the page |
| `background-secondary` | `#f9f9f9` | **Page background**; nested tiles inside a white card |
| `foreground` | `#171717` | Primary text; dark inverted surfaces; primary CTA fill |
| `foreground-secondary` | `#333333` | Body/secondary copy on light surfaces |
| `stroke` | `#ebebeb` | Hairline borders; neutral chip fill; tertiary button fill |
| `primary-blue` | `#0a66c2` | LinkedIn CTA only — not a general brand accent |

**Accents** — pastel, used *exclusively* as chip/tag fills, always with
`text-foreground`. Never as a section background, button, or large surface.

`accent-bg-purple #eddcf9` · `accent-bg-teal #bef4eb` · `accent-bg-green #c6f1c7` ·
`accent-bg-blue #cce6ff` · `accent-bg-amber #fef0cd` · `accent-bg-red #fdd8d8`

Accents carry meaning — keep the mapping stable across pages:
Growth→purple, GTM→teal, Sales→green, Marketing→blue, Content→amber, Branding→red.

**Surface stacking rule (important):**
```
page          → bg-background-secondary  (#f9f9f9, set on body)
card on page  → bg-background            (#ffffff)
tile in card  → bg-background-secondary  (#f9f9f9)
```
Alternate; never put white on white. For an inverted block use `bg-foreground`
with `text-background` (headline) and `text-background-secondary` (sub-copy).

### 2.4 Radius / shadow / border

- Radius: `rounded-xl` (12px) is the default for cards, tiles, buttons.
  `rounded-2xl` (16px) for large hero-scale containers (project card, testimonial
  block). `rounded-full` for pills and avatars. **Nothing else.**
- Shadow — two tokens, both nearly invisible by design:
  - `shadow-sm` `0 2px 4px 0 rgb(23 23 23 / 0.03)` — resting state of small
    floating elements (pills, icon buttons)
  - `shadow-md` `0 3px 5px 0 rgb(23 23 23 / 0.05)` — hover lift, and framed photos
  - Cards on the page carry **no shadow at rest**. Lift is a hover affordance.
- Borders: `border border-stroke` only, and sparingly — framed photos, icon-only
  buttons, the project card. Cards separate by color, not by border.

### 2.5 Spacing scale

Tailwind v4 default (`1` = 4px). No custom spacing tokens. The values actually
in use, and what they mean:

| Utility | px | Meaning in this system |
|---|---|---|
| `gap-1` | 4 | Icon ↔ adjacent text (title + arrow) |
| `gap-2` | 8 | **Card grid gutter** — universal, all grids |
| `gap-3` | 12 | Button row; tight label stacks |
| `gap-6` | 24 | Inside a card: heading block ↔ body |
| `gap-10` | 40 | Inside a card: major zones (chips ↔ art ↔ text) |
| `gap-13` | 52 | Hero copy block internal rhythm |
| `gap-16` | 64 | **Section heading ↔ section content** — universal |
| `gap-25` | 100 | Hero: copy block ↔ proof block |
| `px-5` | 20 | **Page gutter** — every section wrapper |
| `py-13` | 52 | **Section vertical padding** — every section |

The two numbers to remember: **`gap-2` between cards, `gap-16` between a
heading and its content, `py-13` around a section.**

### 2.6 Measure ladder (max-widths)

Content narrows as text gets denser. Pick from this ladder — don't invent widths.

| Width | Use |
|---|---|
| `max-w-[1000px]` | The page content column. Every section wrapper. |
| `max-w-[786px]` | Pull-quotes / testimonial text |
| `max-w-[632px]` | Hero headline + CTA block |
| `max-w-[600px]` | Framed image compositions |
| `max-w-[494px]` | Description under a wide card title |
| `max-w-[420px]` | Body paragraph blocks (about copy, card descriptions) |

### 2.7 Breakpoints

Custom, defined in `@theme inline`:

- `tablet` = **920px**
- `mobile` = **500px**

Used both ways: `tablet:flex-row` (min-width, ≥920) and `max-tablet:h-11` /
`max-mobile:grid-cols-1` (max-width). The site is authored desktop-first and
steps **down** via `max-*` variants. Follow that direction.

---

## 3. Layout system

### 3.1 App shell

`layout.tsx` sets `<html class="{fonts} h-full antialiased">` and
`<body class="min-h-full flex flex-col">`. Page files render a `<main>`
containing sections. Nothing else is global.

### 3.2 Section shell — copy this for every new section

```tsx
<section id="slug" className="flex flex-col items-center">
  <div className="flex flex-col gap-16 items-center max-w-[1000px] w-full px-5 py-13">
    <h2 className="font-heading text-h2 text-foreground text-center whitespace-pre-line">
      {"Two-line heading written\nwith an explicit break"}
    </h2>
    {/* content */}
  </div>
</section>
```

Notes:
- The outer `<section>` is a full-bleed centering track; the inner div is the
  1000px column. Keeping them separate is what lets a section paint a
  full-width background later without breaking the measure.
- Section headings are **centered, two lines, with a hand-placed `\n`** plus
  `whitespace-pre-line`. That deliberate line-breaking is part of the look.

### 3.3 Grids

Always `grid` + `gap-2`, collapsing at `max-mobile`:

```tsx
<div className="grid grid-cols-2 max-mobile:grid-cols-1 gap-2 w-full">   {/* cards */}
<div className="grid grid-cols-4 max-mobile:grid-cols-2 gap-2 w-full">   {/* stat tiles */}
```

Equal-height logo/tile rows use `flex flex-wrap gap-2` with `flex-1` children
and a fixed row height, switching to explicit `basis-[calc((100%-16px)/3)]` at
`max-mobile`.

---

## 4. Component recipes

Copy these verbatim. If you need a variant, change the fill token only.

### 4.1 CTA button (fixed-width, icon + label)

```tsx
// Primary
<a className="flex gap-2 h-10 items-center justify-center px-3 rounded-xl bg-foreground w-[200px] max-mobile:w-[144px] transition-opacity duration-150 hover:opacity-90 active:opacity-70">
  <Image src="/hero/icon-book-call.svg" alt="" width={16} height={16} />
  <span className="text-button text-background whitespace-nowrap">Book a Call</span>
</a>
```

| Variant | Fill | Label class |
|---|---|---|
| Primary | `bg-foreground` | `text-button text-background` |
| Secondary (LinkedIn) | `bg-primary-blue` | `text-button text-background` |
| Tertiary | `bg-stroke` | `text-button text-foreground` |

Invariants: `h-10 px-3 rounded-xl gap-2`, `w-[200px]` → `max-mobile:w-[144px]`,
16px icon, and **opacity-only feedback** (`duration-150 hover:opacity-90
active:opacity-70`). Buttons never lift, scale, or change color on hover.

### 4.2 Icon-only button (40×40)

```tsx
<a aria-label="LinkedIn"
   className="flex items-center justify-center size-10 rounded-xl bg-background border border-stroke shadow-sm transition-opacity duration-150 hover:opacity-90 active:opacity-70">
  <Image src="/hero/icon-linkedin.svg" alt="" width={14} height={14} />
</a>
```

### 4.3 Clickable card

```tsx
<div className="group flex flex-col gap-10 items-center px-8 py-6 rounded-xl bg-background cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:opacity-80 active:-translate-y-0.5 active:opacity-50">
```

The lift **is** the clickable affordance: `-translate-y-1` + `shadow-md` +
`opacity-80`, 300ms ease-out, half-depth on `active`. Use `group` so a child
arrow icon can respond:

```tsx
<Image src="/services/icon-arrow-right-up-circle.svg" alt="" width={16} height={16}
  className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
```

### 4.4 Static tile (stat / logo cell)

```tsx
<div className="flex flex-col gap-2 items-center justify-center px-3 py-4 rounded-xl bg-background">
  <p className="font-heading text-h2 text-foreground text-center whitespace-nowrap">+10K</p>
  <p className="text-body text-foreground-secondary whitespace-nowrap">Users reached</p>
</div>
```

Serif value over grotesque label, always centered. Use `text-h2` on the page,
`text-h3` when nested inside a card (and swap fill to `bg-background-secondary`).

### 4.5 Chip row — note: chips are **flush and square**

This is easy to get wrong. Chips have **no gap and no radius**; they butt
together into a single segmented color bar.

```tsx
<div className="flex items-start justify-center flex-wrap">
  <span className="flex h-5 items-center justify-center px-2 text-caption whitespace-nowrap bg-stroke text-foreground">$1,800</span>
  <span className="flex h-5 items-center justify-center px-2 text-caption whitespace-nowrap bg-accent-bg-purple text-foreground">Growth</span>
</div>
```

Convention: first chip is the price/meta chip in neutral `bg-stroke`; following
chips are pastel category tags. An emphasis chip inverts:
`bg-foreground text-background`.

### 4.6 Pill (floating, rounded-full)

```tsx
<div className="flex gap-2 h-13 max-tablet:h-11 max-mobile:h-9 items-center justify-center px-4 rounded-full bg-background shadow-sm">
```

Fixed heights step 52 → 44 → 36px. Contents (icon, serif label) step down in
lockstep — see `hero.tsx` for the full triple.

### 4.7 Quote / testimonial block

```tsx
// Light
<div className="flex flex-col gap-6 items-center justify-center h-[200px] max-mobile:h-auto max-mobile:py-8 w-full p-6 rounded-xl bg-background">
  <p className="font-heading text-h3 text-foreground text-center max-w-[786px]">…</p>
  <p className="text-body text-foreground-secondary whitespace-nowrap max-mobile:whitespace-normal max-mobile:text-center">Name — Role @ Company</p>
</div>
```

Inverted variant: `bg-foreground` + `text-background` / `text-background-secondary`.
Pattern: fixed 200px height on desktop, `h-auto py-8` on mobile.

### 4.8 Framed photo

```tsx
<div className="rounded-xl border border-stroke shadow-md overflow-hidden" style={{ transform: "rotate(-2deg)" }}>
```

Real photography is always `rounded-xl`, usually slightly rotated, and framed
with hairline + `shadow-md` when it should read as a pinned clipping.

---

## 5. Motion

### 5.1 The four durations

| Duration | Easing | Used for |
|---|---|---|
| 150ms | default | Button/link opacity feedback |
| 300ms | `ease-out` | Card hover lift, icon nudge |
| 500ms | `cubic-bezier(0.34,1.56,0.64,1)` | Layout-changing hover (gallery spread) |
| 700ms | `cubic-bezier(0.34,1.56,0.64,1)` | Scroll-reveal of illustrations |

`cubic-bezier(0.34,1.56,0.64,1)` is the house spring curve — overshoots then
settles. Use it whenever something *arrives*; use `ease-out` when something
*responds*.

### 5.2 Scroll reveal — always via `RevealOnView`

`src/components/reveal-on-view.tsx`. `IntersectionObserver` at threshold 0.3,
re-triggers on re-entry.

```tsx
<RevealOnView variant="bounce" delayMs={index * 100}>{children}</RevealOnView>
```

| Variant | Motion | Use for |
|---|---|---|
| `fade` (default) | opacity + `translate-y-3`, 500ms ease-out | Text, general content |
| `bounce` | opacity + `scale-50 rotate-12` → settle, 700ms spring | Illustrations, decorative art |
| `spring` | `spring-pop` keyframe (0.88 → 1.02 → 1), 450ms | Small inline elements (avatar) |

Stagger with `delayMs={index * 100}` (cards) or `index * 150` (hero pills).
Don't write bespoke IntersectionObserver code — extend this component.

`spring-pop-soft` (subtler overshoot) is the pattern for in-place state swaps —
see the "Copied!" label in `copy-email-button.tsx`, which remounts via `key` to
replay the animation.

### 5.3 Signature motifs — reuse, don't replace

- **Spinning globe** (`spinning-globe.tsx`) — pure-CSS 3D wireframe sphere,
  24 meridians + 17 latitudes in `border-stroke`, tilted `rotateX(-18deg)`,
  rotating 360° every 16s linear. `opacity-70`, `pointer-events-none`,
  absolutely positioned. This is the brand motif. Reposition it with
  `positionClassName` / scale it with `className` — don't introduce a competing
  hero graphic.
- **Stacked cards on scroll** (`stacked-cards.tsx`) — sticky container plus
  invisible 75vh trigger regions; cards translate up into a stack with
  alternating ±6° rotation as their trigger crosses viewport center. Reusable:
  pass `title` + `cards[]`.
- **Gallery hover-spread** (`about.tsx`) — overlapped, rotated photos that
  de-rotate and spread on group hover, on the spring curve. Desktop/tablet only.

All decorative motion must be safe to not see. Nothing here gates content.

---

## 6. Responsive rules

Desktop-first, stepping down through `max-tablet` (≤920) then `max-mobile` (≤500).

1. **Type**: h1 48→40→32, h2 32→28→24, h3 24→22→20, with tracking easing off
   proportionally (media queries at the bottom of `globals.css`). h4/body/button/
   caption never change.
2. **Fixed dimensions step explicitly**, they don't go fluid: pill heights
   52/44/36, button widths 200/200/144, illustration sizes per breakpoint.
3. **Grids collapse** at `max-mobile` only: 4→2, 2→1.
4. **Fixed-height blocks release** on mobile: `h-[200px]` → `max-mobile:h-auto
   max-mobile:py-8`; `whitespace-nowrap` → `max-mobile:whitespace-normal
   max-mobile:text-center`.
5. **Decorative motion simplifies**: gallery spread is `tablet:`-gated; the globe
   gets `max-tablet:scale-[0.75]`.

---

## 7. Page playbook

### 7.1 Scaffold for a new page

```tsx
// src/app/<route>/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Name — Nessim Bozrati",
  description: "…",
};

export default function Page() {
  return (
    <main>
      {/* sections */}
    </main>
  );
}
```

Then compose sections using the §3.2 shell. Order the page the way the landing
page does: **a headline moment → proof → offer → story → contact.**

### 7.2 Choosing a layout for new content

| You have… | Use |
|---|---|
| 2–4 parallel offerings | `grid-cols-2` of clickable cards (§4.3) |
| 4 numbers to brag about | `grid-cols-4` of static tiles (§4.4), `h-[140px]` |
| One long-form narrative | `max-w-[420px]` body stack, centered |
| A social-proof quote | Quote block (§4.7); invert it if it closes the page |
| A sequence of case studies | `StackedCards` |
| Partner/client logos | `flex flex-wrap gap-2` of `flex-1` white tiles |
| One primary action | Primary + secondary CTA pair, `gap-3`, centered |

### 7.3 Pre-ship checklist

- [ ] Section uses the §3.2 shell (`max-w-[1000px] px-5 py-13`, `gap-16`)
- [ ] Surfaces alternate correctly (§2.3) — no white on white
- [ ] All grids use `gap-2` and collapse at `max-mobile`
- [ ] Every fixed height/width has a `max-mobile:` release or step-down
- [ ] Buttons copied from §4.1 — not re-styled
- [ ] Only tokens used; no raw hex, no arbitrary font sizes
- [ ] Serif set explicitly via `font-heading` on non-`h1–h4` elements
- [ ] Entrance animation goes through `RevealOnView`
- [ ] Decorative `<Image>` has `alt=""`; icon-only links have `aria-label`
- [ ] Checked at 1200 / 900 / 480px

---

## 8. Known gaps — address these before going multi-page

The system was built for a single scrolling landing page. These will bite on
page two:

1. **The navbar is anchor-only and lives inside `Hero`.**
   `navbar.tsx` links to `#home`, `#services`, … and is rendered by
   `hero.tsx`. On a second page those anchors resolve to nothing.
   → Move `<Navbar />` into `layout.tsx` and change hrefs to `/#services` etc.,
   or give it a route-aware variant.
2. **No shared footer.** The copyright line is buried inside `contact.tsx`.
   → Extract to `src/components/footer.tsx` and render from `layout.tsx`.
3. **No `<Section>` primitive.** The §3.2 shell is hand-copied five times.
   → Worth extracting: `<Section id title>{children}</Section>`.
4. **CTA markup is duplicated verbatim** between `hero.tsx` and `contact.tsx`.
   → Extract `<CtaButton variant="primary|secondary|tertiary" icon label href />`.
5. **No focus-visible styles anywhere.** Every interactive element styles hover
   and active only. Keyboard users get the UA default ring on a design that
   otherwise controls every state.
   → Add a global `:focus-visible` ring in `globals.css` before shipping more pages.
6. **Single light theme, no dark mode.** Tokens are declared on bare `:root`
   with no `prefers-color-scheme` branch. Fine — but it's a decision to make
   consciously, not to discover later.
7. **Metadata is root-only.** New routes need their own `export const metadata`.

Doing 1–4 first will make every subsequent page substantially cheaper to build.

---

## 9. Asset inventory

Referenced from `/public/<section>/`. Reuse before commissioning new art.

- **Icons (SVG, 12–16px):** `hero/icon-{book-call,send-dm,linkedin,bookmark}`,
  `hero/icon-{grow,scale,expand}` (32px, pill art),
  `services/icon-arrow-right-up-circle` (the "this card is clickable" affordance),
  `contact/icon-{email,substack}`
- **Illustrations (SVG, 97–140px wide):**
  `services/illustration-{gtm-foundation,campaign-direction,content-strategy,personal-branding,growth-partner}`
  — note `growth-partner` exists but is currently unused (the bundle card uses
  the globe instead).
- **Logos:** `hero/logo-{seedstars,vc4a,cgiar,unicef}` + Technovation
  (leaf PNG + text PNG), `projects/logo-cynoia.svg`
- **Photography:** `about/gallery-1…6.jpg`, `about/mention-{card,screenshot}.jpg`,
  `contact/testimonial-photo-v2.jpg`, `hero/avatar.png`

Icon convention: flat single-weight line/duotone SVG, rendered through
`next/image` with explicit `width`/`height` and `alt=""` when decorative.

---

## 10. Do / Don't

**Do**
- Alternate surfaces white ↔ off-white to build depth
- Keep card gutters at `gap-2` — the tight grid is a signature
- Break section headings by hand across two lines
- Let the serif carry emphasis; never bold the body font for emphasis
- Give decorative art the spring curve and let it overshoot

**Don't**
- Use accent pastels for anything larger than a chip
- Add a border to separate cards — use the background contrast
- Give resting cards a shadow (shadow is the hover state)
- Introduce a new radius, shadow, or font size
- Make hover feedback on buttons anything other than opacity
- Use `primary-blue` as a general accent — it means "LinkedIn"
- Ship a fixed pixel height without a `max-mobile:` escape
