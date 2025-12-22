# Analytics Setup

## Implemented

- [x] Vercel Analytics - Page views, visitors, referrers, device breakdown
- [x] Vercel Speed Insights - Core Web Vitals monitoring
- [x] Event tracking utility - `src/lib/analytics.ts`

---

## Enable in Vercel Dashboard

After deploying, enable analytics in your Vercel project:

1. Go to your project in Vercel Dashboard
2. Navigate to **Analytics** tab
3. Click **Enable** for Web Analytics
4. Navigate to **Speed Insights** tab
5. Click **Enable** for Speed Insights

---

## Using Event Tracking

Import the tracking utility to track custom events:

```tsx
import { trackEvent } from "@/lib/analytics";

// Pre-defined events
trackEvent.contactFormSubmit();
trackEvent.phoneClick();
trackEvent.emailClick();
trackEvent.ctaClick("header");
trackEvent.serviceView("roofing");
trackEvent.quoteRequest();

// Or use track() directly for custom events
import { track } from "@/lib/analytics";
track("custom_event", { property: "value" });
```

---

## Suggested Event Tracking Locations

| Event | Location | Purpose |
|-------|----------|---------|
| `phone_click` | Header, Footer, Contact page | Track call intent |
| `email_click` | Footer, Contact page | Track email intent |
| `cta_click` | Hero, Service pages, Sidebar | Track conversion paths |
| `contact_form_submit` | Contact page | Track form completions |
| `quote_request` | Service page CTAs | Track quote requests |
| `service_view` | Service detail pages | Track service interest |
| `newsletter_signup` | Footer | Track newsletter signups |

---

## Vercel Analytics Pricing

| Plan | Cost | Page Views |
|------|------|------------|
| Hobby (Free) | $0 | 2,500/mo |
| Pro | $20/mo | 25,000/mo included |
| Additional | $0.80/1k | After included |

---

## Key Metrics to Monitor

### Traffic
- Page views and unique visitors
- Top pages and referrers
- Geographic distribution

### Performance (Speed Insights)
- **LCP** (Largest Contentful Paint): Target < 2.5s
- **FID** (First Input Delay): Target < 100ms
- **CLS** (Cumulative Layout Shift): Target < 0.1

### Business
- Contact form submissions
- Phone/email click rates
- Most viewed services
- Quote request conversions
