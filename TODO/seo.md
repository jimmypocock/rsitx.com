# SEO Recommendations

This document outlines SEO best practices and enhancements for the RSI website.

---

## Current Implementation

The site already has:
- [x] Semantic HTML structure
- [x] Meta titles and descriptions per page
- [x] Open Graph tags
- [x] Twitter card tags
- [x] Responsive design
- [x] Clean URL structure with hyphens
- [x] Alt text placeholders for images

---

## Priority 1: Structured Data (JSON-LD)

Structured data helps search engines understand your content and can enable rich snippets in search results.

### Local Business Schema

Add to `src/app/layout.tsx`:

```tsx
export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: 'Restoration Services, Inc.',
    alternateName: 'RSI',
    description: 'Commercial roofing, waterproofing, and building restoration services serving Southeast Texas since 1964.',
    url: 'https://rsitx.com',
    telephone: '+1-281-890-1880',
    email: 'info@rsitx.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9810 Fairbanks N. Houston Rd.',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77064',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.8685,  // Update with actual coordinates
      longitude: -95.4669,
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    foundingDate: '1964',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '50-100',  // Update with actual range
    },
    priceRange: '$$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/rsi-restoration-services',
      'https://www.facebook.com/rsitx',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing and Restoration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Roofing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Waterproofing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Building Restoration',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Service Pages Schema

Add to each service page (e.g., `src/app/services/[slug]/page.tsx`):

```tsx
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.fullDescription,
  provider: {
    '@type': 'RoofingContractor',
    name: 'Restoration Services, Inc.',
  },
  areaServed: {
    '@type': 'State',
    name: 'Texas',
  },
  serviceType: service.title,
};
```

### Breadcrumb Schema

```tsx
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://rsitx.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://rsitx.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: service.title,
      item: `https://rsitx.com/services/${service.slug}`,
    },
  ],
};
```

---

## Priority 2: Sitemap & Robots.txt

### Sitemap

Create `src/app/sitemap.ts`:

```tsx
import { MetadataRoute } from 'next';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rsitx.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/products',
    '/green-initiative',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
```

### Robots.txt

Create `src/app/robots.ts`:

```tsx
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://rsitx.com/sitemap.xml',
  };
}
```

---

## Priority 3: Enhanced Meta Tags

### Per-Page Meta Descriptions

Update each page's metadata with unique, compelling descriptions:

| Page | Current | Recommended |
|------|---------|-------------|
| Home | Generic | "RSI: 60+ years of commercial roofing, waterproofing & restoration in Houston & Southeast Texas. Get a free quote today." |
| Services | Generic | "Commercial roofing, re-roofing, roof repairs, waterproofing & restoration services. Trusted by Houston businesses since 1964." |
| About | Generic | "Learn about RSI's 60+ year legacy of quality roofing & restoration in Southeast Texas. NRCA, RCAT certified." |
| Contact | Generic | "Contact RSI for commercial roofing quotes in Houston. Call (281) 890-1880 or request a free estimate online." |

### Canonical URLs

Already handled by Next.js metadata, but ensure each page has:

```tsx
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://rsitx.com/services/roofing',
  },
};
```

---

## Priority 4: Technical SEO

### Page Speed Optimization

- [x] Next.js Image optimization (implemented)
- [ ] Implement image lazy loading for below-fold images
- [ ] Consider preloading critical images
- [ ] Minimize CSS/JS bundles (Next.js handles this)

### Mobile Optimization

- [x] Responsive design (implemented)
- [ ] Test with Google Mobile-Friendly Test
- [ ] Ensure tap targets are appropriately sized

### Core Web Vitals

Target scores:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## Priority 5: Content Optimization

### Keyword Strategy

Primary keywords to target:
- "commercial roofing Houston"
- "waterproofing contractor Houston"
- "roof repair Houston TX"
- "building restoration Houston"
- "commercial roof replacement"

Long-tail keywords:
- "commercial flat roof repair Houston"
- "industrial waterproofing services Texas"
- "historic building restoration Houston"

### Content Recommendations

1. **Add more content to service pages**
   - FAQs section
   - Process/methodology
   - Types of materials used

2. **Consider a blog**
   - Roofing tips and maintenance guides
   - Project case studies
   - Industry news

3. **Testimonials**
   - Add customer names/companies where possible
   - Include project details

---

## Priority 6: Local SEO

### Google Business Profile

- [ ] Claim/verify Google Business Profile
- [ ] Add consistent NAP (Name, Address, Phone)
- [ ] Add photos regularly
- [ ] Encourage customer reviews
- [ ] Post updates/offers

### Local Citations

Ensure consistent business info on:
- [ ] Yelp
- [ ] BBB
- [ ] Yellow Pages
- [ ] Industry directories (NRCA, etc.)
- [ ] Local Houston business directories

### Service Area Pages (Future)

Consider creating pages for specific service areas:
- `/locations/houston`
- `/locations/galveston`
- `/locations/sugar-land`

---

## Validation Tools

Use these tools to validate implementation:

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test JSON-LD structured data

2. **Schema Markup Validator**
   - https://validator.schema.org/
   - Validate all schema types

3. **Google Search Console**
   - Monitor indexing status
   - View search performance
   - Identify issues

4. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Check Core Web Vitals

5. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly

---

## Implementation Checklist

### Immediate (Do Now)
- [ ] Add Local Business JSON-LD schema
- [ ] Create sitemap.ts
- [ ] Create robots.ts
- [ ] Set up Google Search Console
- [ ] Claim Google Business Profile

### Short-term (Next Week)
- [ ] Add Service schema to service pages
- [ ] Add Breadcrumb schema
- [ ] Review and update meta descriptions
- [ ] Test with Rich Results Test

### Medium-term (Next Month)
- [ ] Implement FAQ schema where applicable
- [ ] Add more detailed service content
- [ ] Build local citations
- [ ] Monitor Core Web Vitals

### Long-term (Ongoing)
- [ ] Consider blog/content strategy
- [ ] Build quality backlinks
- [ ] Regular content updates
- [ ] Monitor and respond to reviews
