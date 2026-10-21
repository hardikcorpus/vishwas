# Vishwas Enterprises — Design System

**Company:** Vishwas Enterprises — authorized distributor of specialty lubricants and sealants (threadlockers, retaining compounds, gasket & thread sealants, industrial greases, gear and specialty oils) to industrial customers.

**Products / surfaces:** one — a marketing + catalog website (home, product catalog, product detail, request-a-quote). Likely B2B buyers: maintenance managers, plant engineers, purchase departments.

## Sources
- `uploads/mb01.jpg` — mood reference: dark-teal content band, mint highlight headings, mono eyebrows, light grotesk (a fintech site).
- `uploads/mb02.jpg` — mood reference: deep green/teal + cream fintech landing, hairline value cards, big light stats, FAQ list.
- `uploads/mb03.jpg` — mood reference: industrial robotics hero, grey seamless photography, mono telemetry annotations, corner brackets.
- `uploads/mb04.png` — mood reference: CNC/metal-forming hero, huge condensed headline, numbered index ("01 / …"), copper accent.
- Brief: "teal colors in light mode with a sharp professional look."

These are **third-party mood references**, not Vishwas assets. No logo, codebase, Figma, website, fonts or photography for Vishwas were supplied. Everything here is an original system directed by the mood board; nothing is copied from those brands.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `fonts/` — Geist + Geist Mono variable woff2 (latin, latin-ext), self-hosted
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives, grouped `core/`, `forms/`, `display/`, `feedback/` (each with `.jsx`, `.d.ts`, `.prompt.md`, one `*.card.html`)
- `ui_kits/website/` — click-through website (Home, Catalog, Product, Contact)
- `thumbnail.html`, `SKILL.md`
- `assets/` — intentionally empty (no logo or imagery supplied)

## Components
- **core:** Button, IconButton, Badge, Tag, Eyebrow, Icon
- **forms:** Input (incl. multiline), Select, Checkbox, Radio, Switch
- **display:** Card, ProductCard, Stat, Tabs, Accordion
- **feedback:** Dialog, Toast, Tooltip

No source component inventory existed, so this is a standard set sized to a distributor site.
**Intentional additions:** `Icon` (wrapper for Lucide CDN glyphs), `Eyebrow` (mono section kicker used on every section), `ProductCard` (catalog SKU tile), `Stat` (credibility figures), `Accordion` (FAQ — seen in mood board).

---

## CONTENT FUNDAMENTALS
- **Voice:** a knowledgeable applications engineer, not a salesperson. Precise, calm, useful. Claims are specific and verifiable ("Removable with hand tools", "−55 to 150 °C"), never superlative ("world-class", "best-in-class").
- **Person:** "we" for Vishwas, "you/your" for the customer. "We stock and recommend accordingly." "Tell us the application."
- **Casing:** Sentence case for headings, buttons and nav ("Request a quote", "Browse products"). UPPERCASE only in Geist Mono eyebrows/badges/spec annotations ("PRODUCT RANGE", "IN STOCK", "TEMP −55 → 150 °C").
- **Headlines:** short, declarative, often two beats with the second in teal: "Specialty lubricants & sealants, *specified right.*" / "Every joint, thread and bearing — covered."
- **CTAs:** verb-first, concrete: Request a quote · Talk to an engineer · Download PDF · View details. Arrow-up-right for navigation, never "Click here".
- **Technical copy:** use real units with thin spacing and proper symbols (°C, mm, ml, ISO VG 220, NLGI 2, NSF H1). Part numbers in mono, brass colour. Use "→" for ranges in annotations, "to" in body.
- **Spelling:** Indian/British English (colour, catalogue, litre). Prices "exclusive of GST".
- **Numbers:** only real, verified figures. Never invent stats; leave a Stat out rather than pad.
- **Emoji:** never. Unicode used sparingly: `·` separators, `—`, `→`, `×` (pack sizes "50 × 250 ml"), `°`.

## VISUAL FOUNDATIONS
- **Colour:** teal-led light mode. Brand teal `--teal-600 #1A7A74`; deep `--teal-900 #0A3634` for dark bands and footer (`--teal-950`). Cool green-grey neutrals. **Mint** `--mint-300` is a luminous highlight used *only* on dark teal (headlines, active states, one mint card per view). **Brass** `--brass-500/600` is a tiny industrial accent for part numbers and index digits — never for buttons or large fills. Pages are mostly white; `--surface-tint` (teal-50) for heroes and form pages.
- **Type:** Geist for everything; display sizes in Light 300 / Regular 400 with tight tracking (−0.035em). Headings stay Regular — hierarchy comes from size, not weight. Semibold reserved for the "Vishwas" half of the wordmark. Geist Mono for eyebrows, badges, specs, part numbers (uppercase, +0.08em).
- **Spacing:** 4px base. Section padding 104px vertical on desktop, 32px container gutter, 1240px max width. Cards 28–40px padding. Generous whitespace; density only in spec tables.
- **Sharpness:** radii 0 (photos, bands), 2px (controls, badges, tags), 4px (cards), 6px (dialogs). No pills, no >6px rounding. Radio dots are the only circles.
- **Borders:** 1px hairlines (`--border-subtle`) do most of the structural work — category grids are drawn as shared-edge hairline tables, lists divided by rules. Teal border = hover/focus/selection.
- **Shadows:** almost none. Resting cards are flat with hairline. `--shadow-2` on interactive-card hover; `--shadow-3` only for dialogs/toasts. Focus = 3px teal ring (`--shadow-focus`).
- **Backgrounds:** flat colour fields — white, teal-50 tint, deep-teal bands. No gradients except image protection. Optional hairline grid texture behind technical diagrams. No illustrations.
- **Imagery:** cool, neutral-grey seamless industrial photography — machined parts, dispensing beads, gears with grease, plant interiors. Desaturated/cool, clean, high-key; on dark bands a teal duotone overlay. Annotated with mono spec text, thin leader lines and **corner brackets** (focus-frame motif).
- **Motifs:** numbered indices (`01 — Product range`, brass digit + short rule); mono spec annotations; corner brackets; hairline tables.
- **Motion:** quick and functional. 120ms (colour), 200ms (borders, transforms), 320ms (image zoom). Easing `cubic-bezier(.2,.7,.2,1)`. No bounces, no scroll-jacking; fades/2px nudges only.
- **Hover:** buttons darken one step (600→700); outline/ghost gain teal-50 fill; cards & tiles turn border teal and/or tint teal-50; arrow-up-right icons nudge 2px up-right; product images scale 1.03.
- **Press:** one further step darker (700→800). No shrink.
- **Transparency & blur:** only the sticky header (white 92% + 10px blur) and the dialog scrim (`--overlay-scrim`, deep teal 48%).
- **Layout:** sticky 72px header; 12-col mental grid, typically 1:1 or 1:1.2 asymmetrical splits; left-aligned headings with an action aligned right at the baseline.
- **Cards:** white, 1px `--border-subtle`, 4px radius, no shadow. Tones: tint, dark, brand, mint for feature/CTA cards.

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) line icons (2px stroke, rounded joins), loaded from CDN `unpkg.com/lucide-static@0.460.0/icons/<name>.svg` via the `Icon` component (CSS mask → inherits `currentColor`). **Substitution:** no Vishwas icon set was supplied; Lucide matches the thin-line icons in the mood board.
- **Sizes:** 16 in controls, 18–20 inline, 24 in value strips, 28 in category tiles.
- **Colour:** teal-700/600 on light; mint/teal-300 on dark; never multicolour, never filled.
- **Common glyphs:** arrow-up-right (navigation CTA), arrow-right, search, droplet/droplets (lubricants), cog, circle-dot, square-dashed, pipette, flask-conical, shield-check, truck, file-text, download, phone, mail, map-pin, plus/x.
- **No emoji, no icon fonts, no PNG icons.** Unicode only as typographic separators (· — → ×).
- **Logo:** none provided. The wordmark is typeset — "**Vishwas** Enterprises" (Geist 600/400, −0.03em) with an optional mono tagline. Replace with the real mark when available.

## Fonts
Geist and Geist Mono (OFL, from Google Fonts) are a **chosen** pairing, not the brand's existing fonts — none were supplied. Swap `tokens/fonts.css` if Vishwas has licensed typefaces.
