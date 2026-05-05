# Omnikeea — Theme Colors

The Omnikeea palette is built around a deep near-black backdrop with a vivid
mint/teal accent and a warm coral used only inside the logo gradient.

## Brand accents

| Token             | Hex       | OKLCH                         | Notes                                |
| ----------------- | --------- | ----------------------------- | ------------------------------------ |
| Accent (primary)  | `#00d9a7` | `oklch(0.78 0.16 168)`        | CTAs, links, focus rings             |
| Accent dim        | `#0e8466` | `oklch(0.52 0.13 168)`        | Outlines, secondary hover            |
| Accent warm       | `#d97a4f` | `oklch(0.66 0.18 30)`         | Logo gradient end-stop only          |
| Gradient — start  | `#3aebc0` | —                             | Top-left of logo tile                |
| Gradient — mid    | `#00d9a7` | —                             | Mid stop of logo tile                |
| Gradient — end    | `#d97a4f` | —                             | Bottom-right of logo tile            |

## Surfaces (dark theme)

| Token   | Hex       | Use                     |
| ------- | --------- | ----------------------- |
| BG      | `#030508` | Page background         |
| BG 1    | `#07090f` | Nav / elevated surfaces |
| BG 2    | `#0d1018` | Card surface            |
| BG 3    | `#131720` | Hover / active surface  |

## Text

| Token    | Hex       | Use                         |
| -------- | --------- | --------------------------- |
| Text     | `#edf0f7` | Primary copy                |
| Text mid | `#7e8ba3` | Secondary copy, nav links   |
| Text dim | `#404c62` | Tertiary / disabled         |

## Borders

| Token      | Value                       | Use                |
| ---------- | --------------------------- | ------------------ |
| Border     | `rgba(255,255,255,0.06)`    | Default divider    |
| Border hi  | `rgba(255,255,255,0.12)`    | Card / button edge |

## Usage notes

- Default to `Accent` for any single-colour brand mark on dark surfaces.
- Use the gradient (`start → mid → end`) only on the logo tile and large hero
  flourishes — never on small UI like buttons or text.
- Maintain a minimum contrast of 4.5:1 for body copy. `Text` on `BG` exceeds
  this comfortably; `Text mid` on `BG` is suitable for secondary copy only.
- Do not place the warm coral on its own — it reads as off-brand outside the
  gradient context.
