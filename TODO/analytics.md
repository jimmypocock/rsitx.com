# Analytics Setup

This document outlines recommended analytics solutions for tracking website performance and user behavior.

---

## Recommended: Vercel Analytics + Web Vitals

**Best for**: Deploying on Vercel, simple setup, privacy-focused

If hosting on Vercel, this is the easiest option with built-in performance insights.

### Setup

1. **Install package**:
```bash
npm install @vercel/analytics
```

2. **Add to layout** (`src/app/layout.tsx`):
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

3. **Enable in Vercel Dashboard**:
   - Go to Project Settings > Analytics
   - Enable Web Analytics

### Pricing

| Plan | Cost | Page Views |
|------|------|------------|
| Hobby (Free) | $0 | 2,500/mo |
| Pro | $20/mo | 25,000/mo included |
| Additional | $0.80/1k | After included |

### Features
- Page views and unique visitors
- Top pages and referrers
- Country/device breakdown
- Core Web Vitals
- No cookie banner required

---

## Alternative: Plausible Analytics

**Best for**: Privacy-focused, GDPR compliant, simple dashboard

### Why Plausible?

- **No cookies** - no consent banner needed
- **GDPR/CCPA compliant** out of the box
- **Lightweight** - 1KB script (vs 45KB for GA)
- **Simple dashboard** - no complexity
- **Open source** (can self-host)

### Setup

1. **Sign up** at [plausible.io](https://plausible.io/)

2. **Add script** to `src/app/layout.tsx`:
```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-domain="rsitx.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Pricing

| Plan | Cost | Page Views |
|------|------|------------|
| Growth | $9/mo | 10,000/mo |
| Business | $19/mo | 100,000/mo |
| Self-hosted | Free | Unlimited |

---

## Alternative: Umami (Self-Hosted)

**Best for**: Full control, unlimited data, free

### Why Umami?

- **Completely free** when self-hosted
- **Privacy-focused** - no cookies
- **Your data** - you own it
- **Simple** - clean, minimal interface

### Setup Options

1. **Deploy to Vercel** (easiest):
   - Fork the [Umami repo](https://github.com/umami-software/umami)
   - Deploy to Vercel
   - Connect a PostgreSQL database (Vercel Postgres or Supabase free tier)

2. **Use Umami Cloud**:
   - Starting at $9/mo for 100k events

### Pricing

| Option | Cost |
|--------|------|
| Self-hosted | Free (just hosting costs) |
| Umami Cloud | $9-49/mo |

---

## Alternative: Google Analytics 4

**Best for**: Comprehensive data, free, familiar interface

### Considerations

- Requires cookie consent banner (GDPR)
- Heavier script (~45KB)
- More complex interface
- Free unlimited tracking

### Setup

1. **Create property** in Google Analytics
2. **Get Measurement ID** (G-XXXXXXXXXX)
3. **Add to layout**:

```tsx
import Script from 'next/script';

const GA_ID = 'G-XXXXXXXXXX';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

4. **Add cookie consent** (required for GDPR):
   - Use a library like `react-cookie-consent`
   - Only load GA after consent

---

## Web Vitals Tracking

Next.js has built-in support for Core Web Vitals. Important for SEO and user experience.

### Built-in Reporting

Add to `src/app/layout.tsx`:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### Custom Web Vitals Tracking

```tsx
// src/app/layout.tsx
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to your analytics
    console.log(metric);

    // Example: Send to custom endpoint
    fetch('/api/vitals', {
      method: 'POST',
      body: JSON.stringify(metric),
    });
  });

  return null;
}
```

---

## Recommendation Summary

| Use Case | Solution | Cost |
|----------|----------|------|
| Hosting on Vercel | **Vercel Analytics** | Free-$20/mo |
| Privacy-first, simple | **Plausible** | $9/mo |
| Full control, free | **Umami (self-hosted)** | Free |
| Maximum data, familiar | Google Analytics 4 | Free |

**My recommendation**:

1. **If on Vercel**: Use Vercel Analytics (simple, integrated, privacy-friendly)
2. **If privacy is priority**: Use Plausible ($9/mo is worth the simplicity)
3. **If budget is tight**: Self-host Umami on Vercel + free PostgreSQL

---

## Key Metrics to Track

### Traffic
- Page views
- Unique visitors
- Session duration
- Bounce rate

### Sources
- Referral sources
- Search traffic
- Direct traffic
- Social media

### Engagement
- Most viewed pages
- Contact form submissions
- Phone number clicks
- Service page views

### Performance
- Core Web Vitals (LCP, FID, CLS)
- Page load times
- Mobile vs desktop

---

## Event Tracking Ideas

Track these custom events for business insights:

```typescript
// Contact form submission
analytics.track('contact_form_submitted', {
  service: 'roofing',
});

// Phone number click
analytics.track('phone_click', {
  location: 'header',
});

// Service page view
analytics.track('service_viewed', {
  service: 'waterproofing',
});

// Project filter used
analytics.track('projects_filtered', {
  category: 'healthcare',
});
```
