# Chyianaquia — Branding Package

A drop-in kit containing the Chyianaquia logo (vector + raster), favicon set, and
brand colour tokens. Everything here is final-export quality; nothing references
project-internal paths or build steps.

## Contents

```
branding/
├── logo/
│   ├── chyianaquia-mark.svg                  Square mark, full-colour gradient (master)
│   ├── chyianaquia-mark-mono-light.svg       Square mark on solid dark tile (for light bg)
│   ├── chyianaquia-mark-mono-dark.svg        Outlined mark for dark surfaces
│   ├── chyianaquia-mark-1024.png             Mark @ 1024 px
│   ├── chyianaquia-mark-512.png              Mark @ 512 px
│   ├── chyianaquia-mark-256.png              Mark @ 256 px
│   ├── chyianaquia-mark-mono-light-512.png   Mono mark @ 512 px
│   ├── chyianaquia-wordmark.svg              Mark + "Chyianaquia" wordmark (dark theme)
│   ├── chyianaquia-wordmark-light.svg        Mark + "Chyianaquia" wordmark (light theme)
│   ├── chyianaquia-wordmark-2400.png         Wordmark @ 2400 × 600
│   ├── chyianaquia-wordmark-1200.png         Wordmark @ 1200 × 300
│   └── chyianaquia-wordmark-light-1200.png   Light-theme wordmark @ 1200 × 300
│
├── favicon/
│   ├── favicon.svg                           Vector favicon (modern browsers)
│   ├── favicon.ico                           Multi-size .ico (16/32/48)
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── favicon-48.png
│   ├── favicon-64.png
│   ├── favicon-96.png
│   ├── favicon-256.png
│   ├── apple-touch-icon-180.png              iOS home-screen icon
│   ├── android-chrome-192.png                PWA / Android
│   └── android-chrome-512.png                PWA / Android (high-res)
│
└── colors/
    ├── colors.css                            CSS custom properties (drop into any project)
    └── colors.md                             Human-readable palette reference
```

## Quick reference

- **Primary accent:** `#00d9a7` (`oklch(0.78 0.16 168)`)
- **Page background:** `#030508`
- **Primary text:** `#edf0f7`
- Logo gradient runs `#3aebc0 → #00d9a7 → #d97a4f` (top-left to bottom-right).

## Logo usage

- **Master file:** `logo/chyianaquia-mark.svg`. Scale freely — it is fully vector.
- Keep clear-space around the mark equal to **¼ of its width** on every side.
- Minimum displayed size: **24 px** for the favicon mark, **120 px** for the
  wordmark (so the text stays legible).
- Don't recolour, rotate, stretch, or apply additional drop-shadows. If you
  need a single-colour version, use the `*-mono-light` (white-on-dark tile) or
  `*-mono-dark` (outline-only) variants.
- For a transparent-background asset, use the SVGs — the PNGs include the dark
  tile background of the master mark.

## Favicon — HTML wiring

Drop the `favicon/` folder at your site root and add the following to `<head>`:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180.png">
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512.png">
```

## Colours

See `colors/colors.md` for the full palette and `colors/colors.css` for ready-to
-import custom properties (prefixed `--ok-…` to avoid collisions).
