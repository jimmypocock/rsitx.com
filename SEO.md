# SEO checklist

A working list of off-site (and a few site-adjacent) SEO actions for rsitx.com. The on-site code lives in the codebase and is tracked there. This doc is the manual / off-site work that needs a human + accounts.

**Current goal:** rank in the top 3 organic results in Houston for these queries:

- `commercial roofing Houston`
- `roofing services Houston`
- `commercial waterproofing Houston`
- `sheet metal Houston`

Already strong for `restoration services Houston` (brand match).

## How to track ranking honestly

Don't trust whatever you see when you Google something on your own machine — Google personalizes by location, history, and device. Instead:

- **Quick check:** Chrome incognito + change location to Houston (DevTools → ⋮ → More tools → Sensors → set custom geo to 29.76, -95.37). Then search.
- **Better check:** Run rank tracking through [Ahrefs](https://ahrefs.com), [SEMrush](https://semrush.com), or [Nightwatch](https://nightwatch.io). Cheapest plan that does daily rank tracking for ~10 keywords is enough.
- **Search Console:** [Google Search Console](https://search.google.com/search-console) gives you the impressions/clicks/avg-position for every query that brought someone to the site. Free. Required.

## Priority 1 — Google Business Profile

This is the **single highest-impact action** for the four target queries. The "local pack" (the 3 map results above the organic listings) is gated by Google Business Profile, not your website. If RSI isn't claimed and optimized in GBP, you're losing the local pack regardless of how good the site is.

- [ ] Claim / verify the Google Business Profile for **Restoration Services, Inc.** at 9810 Fairbanks N. Houston Rd., Houston, TX 77064.
  - URL: <https://business.google.com>
  - Verification can take 1–2 weeks (postcard or video call).
- [ ] Set primary category to **Roofing Contractor** and secondary categories to **Waterproofing Service**, **Sheet Metal Contractor**, **Construction Company**.
- [ ] Add the full NAP. The NAP must match the website and every other directory **exactly**, character for character (`9810 Fairbanks N. Houston Rd.` everywhere — same abbreviations, no variations).
- [ ] Set business hours.
- [ ] Add 10+ photos: exterior of office/yard, team shots from `/team`, project before/after pairs, equipment, sheet metal shop. Keep adding photos every few weeks.
- [ ] Write the GBP description (~750 chars). Include "Houston" + each of the four service keywords naturally. Don't keyword stuff.
- [ ] Add **services** as individual line items (each with a short description) — Commercial Roofing, Re-Roofing, Roof Repairs, Waterproofing, Sheet Metal Fabrication, Concrete & Masonry Restoration, etc.
- [ ] Turn on messaging.
- [ ] Post weekly updates (project photos, awards, news). GBP posts are an active ranking signal.

## Priority 2 — Reviews

GBP reviews (count + recency + sentiment + keyword usage in review text) are a top ranking factor for the local pack. Even 10–15 fresh reviews can move you significantly.

- [ ] Set up a review request flow. After every completed project, send the property manager a 2-line email with a direct review link: `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`
- [ ] Aim for **2 new reviews per month** at minimum.
- [ ] When clients leave reviews, suggest (don't dictate) phrases like "commercial roofing in Houston" or "waterproofing on our Houston building" — natural inclusion of keywords in review text helps.
- [ ] Reply to **every** review, positive or negative. Replies are visible to Google and to prospective clients.
- [ ] Mirror reviews on **BBB** and **Yelp** as a secondary push (lower weight than Google, but they're ranking domains in their own right).

## Priority 3 — Local citations / NAP consistency

Google cross-references your NAP across the web. Inconsistencies dilute trust. Aim for an identical listing on each of these:

- [ ] [Better Business Bureau](https://www.bbb.org) — Houston Roofing Contractors category
- [ ] [Yelp](https://biz.yelp.com)
- [ ] [Yellow Pages](https://www.yellowpages.com)
- [ ] [Houston Chamber of Commerce](https://www.houston.org/membership) (membership has a directory listing)
- [ ] [AGC of Houston](https://www.agchouston.org) member directory (RSI is already an AGC member per `src/data/company.ts`)
- [ ] [NRCA](https://www.nrca.net) member directory (also already a member)
- [ ] [WSRCA](https://www.wsrca.com) member directory
- [ ] [IIBEC](https://iibec.org) member directory
- [ ] [Apple Maps Connect](https://mapsconnect.apple.com)
- [ ] [Bing Places](https://www.bingplaces.com)

Use a citation audit tool (Moz Local, BrightLocal, Whitespark) to find inconsistencies in batch — many of these may already exist with stale data from the pre-RSI Hou-Tex / Gulf Waterproofing era.

## Priority 4 — Backlinks from Houston-relevant publications

One mention from a real Houston publication is worth more than a hundred generic directory links. Realistic targets:

- [ ] [Houston Business Journal](https://www.bizjournals.com/houston) — pitch project case studies, especially the Buffalo Soldiers Museum Good Brick Award win
- [ ] [PaperCity Magazine](https://www.papercitymag.com) — historic preservation + architecture beat
- [ ] [Houston CultureMap](https://houston.culturemap.com) — community / preservation stories
- [ ] [Houston Chronicle](https://www.houstonchronicle.com) — paid ads or earned media via PR
- [ ] [Texas Architect Magazine](https://magazine.texasarchitects.org) — for Sheet Metal craftsmanship features
- [ ] [University of Houston / Texas A&M / Prairie View A&M news offices](https://uh.edu/news-events/) — case study placements on completed campus projects
- [ ] [Greater Houston Preservation Alliance](https://www.preservationhouston.org) — already linked via the Good Brick Award; lean into the relationship

For each pitch, lead with a specific story (a project, a milestone, a team-member angle) rather than generic "we exist" outreach.

## Priority 5 — Content additions to the site itself

These are content ideas that would create new pages or sections on rsitx.com and capture more long-tail searches. Each is a real time investment — I'd only pursue one or two.

- [ ] **Service + city long-tail pages**: `/services/roofing/houston`, `/services/waterproofing/houston`, etc. Each page needs unique copy (not boilerplate) — 800+ words covering local climate, common building types, neighborhood projects. **Big lift, real reward.**
- [ ] **Insights / blog**: 1 article every 2 weeks on Gulf Coast-specific roofing problems, hurricane prep, infrared inspection case studies. Ranks for question-based long-tail searches.
- [ ] **Case study pages** for each major project (separate from the project category pages). Schema markup for `Article` + photos + the property manager's quote.
- [ ] **FAQ schema** on key pages — answers to "how often should I inspect my commercial roof in Houston" type questions, marked up so they can appear in Google's FAQ rich result.

## Priority 6 — Technical / monitoring

- [ ] Add the site to **[Google Search Console](https://search.google.com/search-console)** if not already done. Verify via DNS or the `/.well-known` route. Submit `https://rsitx.com/sitemap.xml`.
- [ ] Set up **[Bing Webmaster Tools](https://www.bing.com/webmasters)** (free, easy, picks up real traffic).
- [ ] Validate the structured data with [Google's Rich Results Test](https://search.google.com/test/rich-results) — check that the `RoofingContractor` schema on the homepage and `Service` schema on each `/services/[slug]` page parse cleanly.
- [ ] Confirm the **Vercel Speed Insights** scores stay green (already wired up in `src/app/layout.tsx`). Aim for LCP < 2.5s on mobile.
- [ ] Run a **monthly check** through [PageSpeed Insights](https://pagespeed.web.dev) on the home page and one service page.

## What's already done in code

For reference (so we don't duplicate effort), the site already has:

- `RoofingContractor` JSON-LD on every page (`src/app/layout.tsx`)
- `Service` JSON-LD on each `/services/[slug]` page
- Houston-targeted `<title>` and `<meta description>` on each service page
- 1200×630 OpenGraph image (`public/images/og-image.webp`) for social shares
- `metadataBase` set so Next.js generates correct canonical URLs
- `sitemap.xml` and `robots.txt` (`src/app/sitemap.ts`, `src/app/robots.ts`)
- Legacy URL redirects (`next.config.ts`)
- Analytics + Speed Insights via Vercel
- Real client/case-study content under `/projects/*` (Google rewards depth)
- A real `/locations/houston` page with named project examples

## Tracking progress

Two metrics that actually matter:

1. **Search Console — Average position for the four target queries.** Track weekly. Direction matters more than the number.
2. **GBP insights — Discovery searches and direction requests.** This is the local-pack proxy.

Don't chase the keyword density / "SEO score" plugins. Those aren't ranking factors.
