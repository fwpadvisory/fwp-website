# FWP Advisory — Website

Production website for **Family Wealth Protection Advisory Pty Ltd** — an Australian
asset-protection and succession advisory firm.

Built with **Astro** (static output) and React islands for the few interactive pieces,
styled with **Tailwind CSS v4**, content managed in **Sanity**, deployed to **Vercel**.

## Stack

| Concern | Tool |
|---|---|
| Framework | Astro (static `output`), `@astrojs/vercel` adapter |
| Interactivity | React islands via `@astrojs/react` |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`), brand tokens in `src/styles/global.css` |
| CMS | Sanity (`@sanity/astro`) — Studio embedded at `/studio` |
| SEO/AEO | `@astrojs/sitemap`, JSON-LD, `llms.txt` |
| Fonts | Montserrat (headings) + Inter (body), self-hosted via Fontsource |

## Requirements

- Node.js 20+
- pnpm (`corepack enable pnpm`, or see https://pnpm.io/installation)

## Local development

```bash
pnpm install
cp .env.example .env   # then fill in values
pnpm dev               # http://localhost:4321
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build the static site to `dist/` (+ Vercel output) |
| `pnpm preview` | Preview the production build locally |

## Environment variables

See `.env.example` for the full list. Highlights:

- `PUBLIC_SITE_URL` — canonical site URL (sitemap + canonical tags)
- `PUBLIC_BOOKING_URL` — Discovery Meeting booking link (CTAs fall back to `/contact` if unset)
- `PUBLIC_SANITY_PROJECT_ID` / `PUBLIC_SANITY_DATASET` — Sanity project (Phase 3)
- `PUBLIC_GA4_ID`, `PUBLIC_GSC_VERIFICATION` — analytics (Phase 6)

Never commit `.env` — it is git-ignored.

## Project structure

```
src/
  layouts/      BaseLayout.astro — head, fonts, brand background, header/footer
  components/   Header.tsx (island), Footer.astro, BookingButton.tsx, ...
  pages/        index, services, about, process, resources, contact,
                guide, disclaimer, privacy, terms (+ resources/[slug])
  lib/          site.ts (nav + company facts), sanity.ts (CMS client)
  styles/       global.css — Tailwind + brand tokens
public/         favicon, static assets
```

## Deployment

Static build deployed via Vercel (`@astrojs/vercel`). Environment variables are set in
the Vercel dashboard (mirror `.env.example`). A Sanity webhook triggers a Vercel deploy
hook so publishing content rebuilds the site.
