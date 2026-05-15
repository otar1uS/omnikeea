# Omnikeea LTD — Marketing Site

A multi-page Next.js (App Router, TypeScript) marketing site for Omnikeea LTD — a pure technology provider delivering integration technology for online platforms (technology only, non-financial entity; we do not process, store, transmit or handle financial transactions).

## Pages

- `/` — Home (hero + animated radar, marquee, modules, framework, CTA)
- `/solutions` — Six platform modules with capability bullets
- `/technology` — Architecture, security & engineering, global footprint
- `/industries` — E-commerce verticals served
- `/company` — Mission, principles, FAQ
- `/contact` — Working enquiry form (validated client-side, posts to `/api/contact`)
- `/legal/privacy` — Privacy Policy
- `/legal/terms` — Terms of Service
- `/sitemap.xml`, `/robots.txt` — SEO basics
- `not-found.tsx` — Custom 404

## Run

```bash
cd omnikeea
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- Sanctioned-country list lives in `lib/sanctions.ts` and is rendered in the footer of every page.
- The contact API route logs payloads — wire up Resend/Postmark/HubSpot in `app/api/contact/route.ts` for production.
- Design system (tokens, components) is fully expressed in `app/globals.css`.
