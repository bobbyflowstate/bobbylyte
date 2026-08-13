# Bobby Lyte — booking site handoff

Static, framework-free implementation of the Bobby Lyte booking page. Drop this folder on any static host (Netlify, Vercel, Cloudflare Pages, S3+CDN, plain nginx) and it works — no build step, no npm install, no JS framework.

```
handoff/
├─ index.html          the whole page: markup + page CSS + ~60 lines of vanilla JS
├─ styles.css          entry point — @imports the token files below
├─ tokens/
│  ├─ fonts.css        Google Fonts import (see "Fonts")
│  ├─ colors.css       palette + semantic aliases
│  ├─ typography.css   type ramp
│  ├─ spacing.css      4px scale, radii, container
│  ├─ effects.css      glow, shadows, textures
│  ├─ motion.css       easings, durations, @keyframes
│  └─ base.css         element defaults + utility classes
└─ assets/             SVG logos, marks, textures (no raster images yet)
```

## Ship checklist

1. **Booking form.** `#bookform` currently `preventDefault()`s and swaps in the confirmation panel (`#sentmsg`). Point it at a real endpoint — the markup already has `method="post" action="/api/booking"` and proper `name` attributes (`name, organisation, email, date, city, settype, budget, message`). Options, cheapest first: Formspree / Basin / Netlify Forms (change `action` and add `data-netlify="true"`), or a small serverless function that emails **booking@bobbyflowstate.com**. Keep the success state — replacing the form with `#sentmsg` is the intended UX. Add spam protection (honeypot field or Turnstile) before launch.
2. **Confirm the booking email address** — `booking@bobbyflowstate.com` appears three times in `index.html` and once in `assets/`. Search-and-replace if it changes.
3. **Missing content, marked in-page as pending** — do not invent replacements:
   - hi-res press photos (the `.photoslot` block in `#signal`)
   - the EPK PDF (`#press`, card 1 — button is `disabled`)
   - SoundCloud follower stats (`#signal` stats table shows `—`)
   - press quotes (section not built; no quotes were supplied)
4. **Analytics / consent.** Nothing is installed. The YouTube embed already uses `youtube-nocookie.com`; SoundCloud embeds still set cookies, so a consent banner may be required in the EU. If so, lazy-mount the iframes after consent (their `src` values are in the `#sets` panes).
5. **Favicon / social image.** `assets/mark-signal-ball-square.svg` is wired as the favicon; `og:image` currently points at the SVG lockup — **generate a 1200×630 PNG** for real link previews and swap the `og:image` path.

## How it's built

- **No framework.** Semantic HTML; all component styling is class-based CSS in the `<style>` block of `index.html`, driven entirely by the design-system custom properties in `tokens/`. Never hard-code a hex — every colour, space, radius, easing and glow has a token.
- **JS is four small IIFEs** at the bottom of `index.html`: level-bar generation, ticker duplication, set-type tabs, sticky-nav + scroll spy, form submit. No dependencies.
- **Interactive bits:** set-type tabs (`.tab[aria-selected]` ↔ `.setpanes > [data-pane]`), nav that turns solid + blurred past 40px (`.nav.solid`), scroll spy writing `aria-current` on nav links.
- **Responsive** at 900px: hero and two-column sections collapse to one column, the show rows reflow, nav links hide (there is **no mobile menu yet** — add a disclosure button if you want the links on small screens).
- **Motion** all respects `prefers-reduced-motion` (handled in `tokens/motion.css`).

## Brand rules that must survive implementation

- Green (`--accent-primary #35FF9E`) on dark only. **Never neon green on white.**
- Glow is punctuation: at most one glowing element per viewport.
- Hover brightens (signal → phosphor + glow); press drops the glow and nudges 1px down. Nothing scales or bounces.
- `//` is a spacer device — keep it exactly as typed; never read or write it as "slash slash".
- No emoji anywhere. Icons are 2px-stroke line icons only.
- Body copy is `--text-body`, not green. Numerics (dates, run times) use the readout face.

## Fonts

`tokens/fonts.css` loads **Space Grotesk**, **JetBrains Mono**, **Fraunces** and **Martian Mono** from Google Fonts. For production, self-host as `.woff2` (subset to latin) and replace the `@import` with `@font-face` rules — that removes a third-party request and the FOUT.

⚠️ **Martian Mono is a stand-in** for the intended `Readout / Segment` face (DSEG7/DSEG14, which was never licensed). If a DSEG licence is bought, swap `--font-readout` in `tokens/typography.css` — nothing else changes.

## Working on this with Claude Code

Point Claude Code at this folder and give it the design system's `readme.md` (in the parent project) as context — it documents the full token set, voice rules, and visual foundations. Two rules to hold it to:

1. Style with the existing custom properties; add new tokens rather than literal values.
2. Keep the markup static and framework-free unless the client explicitly asks for a CMS or a framework.
