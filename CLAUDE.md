# rsitx.com

Marketing website for **Restoration Services, Inc. (RSI)** — a Houston-based commercial roofing, waterproofing, and building restoration company. Production site at https://rsitx.com.

## Stack

- **Next.js 16** App Router with React 19 and the React Compiler enabled (`reactCompiler: true` in `next.config.ts`)
- **TypeScript** (strict)
- **Tailwind CSS v4** (PostCSS-based, no `tailwind.config.*` — theme tokens live in `src/app/globals.css` via `@theme inline`)
- **Vercel** hosting with `@vercel/analytics` and `@vercel/speed-insights`
- **Web3Forms** for the contact form (no backend)

No tests, no CI config in-repo.

## Commands

```bash
npm run dev    # next dev on port 451
npm run build  # next build
npm run start  # next start
npm run lint   # eslint
```

The dev port is **451**, not 3000.

## Environment variables

| Name | Notes |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key for the contact form. Public by design (browser-exposed). Set in `.env.local` for dev and in Vercel env vars for prod. The form short-circuits with a friendly error if it's missing. |

## Layout

```
src/
  app/                     # App Router routes
    layout.tsx             # Root layout — Header, Footer, Analytics, SpeedInsights
    page.tsx               # Home
    about/, contact/, careers/, credentials/, products/, green-initiative/, maintenance/
    services/[slug]/       # Service detail pages
    projects/[slug]/, projects/featured/
    locations/[slug]/
    recognition/good-brick-award-2025/
    sitemap.ts, robots.ts  # SEO
  components/
    layout/                # Header, Footer (client components)
    ui/                    # Hero, Section, ServiceCard, ContactForm, Lightbox, ImageGallery, BeforeAfterSlider, etc.
  data/                    # Static content as TypeScript modules — single source of truth
    company.ts             # Company info AND nav structure (footer + main nav generated here)
    services.ts            # Services + roofing systems + waterproofing applications
    projectCategories.ts   # Project categories with images and before/after pairs
    locations.ts           # Service area locations
    credentials.ts, partners.ts, testimonials.ts, maintenance.ts
  lib/
    analytics.ts           # trackEvent helpers wrapping @vercel/analytics
public/images/             # All site imagery (webp preferred), organized by usage
.private/                  # Gitignored — source images, NOTES.md, TODO.md, raw client photos
```

Path alias: `@/*` → `./src/*`.

## Conventions

- **Content lives in `src/data/*.ts` as typed exports.** Page components import from there. When adding a service, project category, location, etc., update the data module — the nav and sitemap pick it up automatically.
- **Navigation is generated** in `src/data/company.ts` from `getServiceNavItems()`, `getLocationNavItems()`, `getProjectCategoryNavItems()`. Don't hand-edit nav lists in the Header.
- **Sitemap** (`src/app/sitemap.ts`) iterates the data modules — same idea. New service/location/project category routes show up automatically.
- **Section + SectionHeader** (`src/components/ui/Section.tsx`) is the standard page section wrapper with `background="white" | "alt" | "primary"`. Use it instead of hand-rolling section markup.
- **Brand colors** are CSS variables in `globals.css` (`--color-primary-*`, `--color-secondary-*`) exposed to Tailwind via `@theme inline`. Use `bg-primary-600`, `text-foreground-muted`, etc.
- **Images**: prefer `next/image` with `webp` sources. Remote images need an entry in `next.config.ts` `images.remotePatterns` (currently only `placehold.co`).
- **Redirects** for legacy URLs live in `next.config.ts`. Add new ones there when renaming a route.
- **Analytics events** go through `trackEvent` in `src/lib/analytics.ts` rather than calling `track()` directly, so the event names stay consistent.

## Things worth knowing

- The contact form posts directly to Web3Forms using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. Rotating or swapping providers happens in Vercel env vars + `.env.local` — no code change needed.
- `company.yearsOfLegacy` in `src/data/company.ts` is computed from `LEGACY_FOUNDED_YEAR` (1932 — the Hou-Tex Roofing lineage RSI traces back to) at module-load time. In a static build this freezes at build time — fine for the "60+ years experience" copy on the projects page, just be aware if you reference it somewhere date-sensitive.
- The Header is transparent only on `/` until scrolled (see `Header.tsx:15-17`). New full-bleed hero pages need the same logic if you want the same look.
- `.private/` contains design notes, TODO list, and original client photo masters. Gitignored — don't move things out of it without checking.
