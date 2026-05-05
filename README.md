# rsitx.com

Marketing website for **Restoration Services, Inc. (RSI)** — a Houston-based commercial roofing, waterproofing, and building restoration company. Live at https://rsitx.com.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Hosted on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
npm run dev
```

Dev server runs at http://localhost:451.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Next.js dev server on port 451 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |

## Environment variables

| Name | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | yes (prod) | Web3Forms access key for the contact form. Public by design — exposed to the browser. Manage in the Vercel project's env vars. |

## Project layout

```
src/
  app/                     # App Router routes
  components/layout/       # Header, Footer
  components/ui/           # Hero, Section, ContactForm, ImageGallery, etc.
  data/                    # Static content as typed TypeScript modules
  lib/                     # analytics.ts (track helpers)
public/images/             # Site imagery (webp preferred)
```

Content (services, projects, locations, credentials, etc.) lives in `src/data/*.ts`. The main nav and `sitemap.ts` are generated from those modules — adding a new service or location route picks up automatically.

For the rest of the architectural detail (conventions, things-to-know, brand colors, redirects), see [CLAUDE.md](./CLAUDE.md).

## Deployment

Auto-deploys to Vercel on push to `main`. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the Vercel project's Environment Variables (Production + Preview) before the first deploy or the contact form will refuse to submit.
