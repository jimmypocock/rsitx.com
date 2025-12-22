# Images To Replace

All placeholder images need to be replaced with real photography. Images should be high-quality, professional photos that represent RSI's work and brand.

## Recommended Image Specifications

- **Format**: WebP (with JPEG fallback) or optimized JPEG/PNG
- **Hero images**: 1920x1080px minimum
- **Page headers**: 1920x600px minimum
- **Service/Project cards**: 800x600px (4:3 ratio)
- **Partner logos**: 200x80px (transparent PNG preferred)

---

## Hero & Page Header Images

| Location | File | Current Placeholder | Recommended Image |
|----------|------|---------------------|-------------------|
| Homepage Hero | `src/app/page.tsx:30` | 1920x1080 | Dramatic shot of RSI crew working on a large commercial roof, preferably aerial or wide angle showing scale |
| Homepage "Why Choose RSI" | `src/app/page.tsx:101` | 800x600 | RSI team photo or crew working together on a project |
| About Page Header | `src/app/about/page.tsx:28` | 1920x600 | Company building, team photo, or historical image |
| About Page Content | `src/app/about/page.tsx:50` | 800x600 | Historical photo of RSI or founding story image |
| Services Page Header | `src/app/services/page.tsx:20` | 1920x600 | Wide shot of roofing/waterproofing work in progress |
| Projects Page Header | `src/app/projects/page.tsx:19` | 1920x600 | Collage or impressive completed project |
| Products Page Header | `src/app/products/page.tsx:22` | 1920x600 | Close-up of roofing materials or installation |
| Green Initiative Header | `src/app/green-initiative/page.tsx:38` | 1920x600 | Green roof installation or sustainable project |
| Green Initiative Content | `src/app/green-initiative/page.tsx:160` | 800x600 | Green roof close-up or eco-friendly installation |
| Contact Page Header | `src/app/contact/page.tsx:17` | 1920x600 | RSI office building or friendly team interaction |

---

## Service Images

| Service | File | Current Placeholder | Recommended Image |
|---------|------|---------------------|-------------------|
| Roofing | `src/data/services.ts:45` | 800x600 | Commercial roof installation, re-roofing, or repair work |
| Waterproofing | `src/data/services.ts:66` | 800x600 | Waterproofing membrane application |
| Restoration | `src/data/services.ts:87` | 800x600 | Building facade restoration work |
| Sheet Metal | `src/data/services.ts:109` | 800x600 | Custom sheet metal fabrication or installation (coping, flashing, gutters) |

---

## Project Images

| Project | File | Current Placeholder | Recommended Image |
|---------|------|---------------------|-------------------|
| Rice University | `src/data/projects.ts:79` | 600x400 | Completed Rice University roofing project |
| Moody Gardens | `src/data/projects.ts:90` | 600x400 | Moody Gardens building/roof |
| Prairie View A&M | `src/data/projects.ts:101` | 600x400 | Prairie View nursing school building |
| Houston Medical Center | `src/data/projects.ts:112` | 600x400 | Medical center building exterior |
| Historic Downtown | `src/data/projects.ts:123` | 600x400 | Historic building restoration |
| Port of Houston Warehouse | `src/data/projects.ts:134` | 600x400 | Industrial warehouse facility |
| First Baptist Church | `src/data/projects.ts:145` | 600x400 | Church building exterior |
| Harris County Admin | `src/data/projects.ts:156` | 600x400 | Government building exterior |

### Green Initiative Project Images

| Project | File | Current Placeholder | Recommended Image |
|---------|------|---------------------|-------------------|
| Rice University (Green) | `src/app/green-initiative/page.tsx:17` | 400x300 | Green roof at Rice |
| Moody Gardens (Green) | `src/app/green-initiative/page.tsx:22` | 400x300 | Sustainable installation at Moody Gardens |
| Prairie View (Green) | `src/app/green-initiative/page.tsx:27` | 400x300 | Eco-friendly roof at Prairie View |

---

## Partner Logos (200x80px each)

These should be official logos from each manufacturer. Contact partners or download from their media/press kits.

### Roofing Partners
| Partner | File Location |
|---------|---------------|
| GAF Materials Corporation | `src/data/partners.ts:16` |
| U.S. Ply, Inc | `src/data/partners.ts:23` |
| Carlisle | `src/data/partners.ts:30` |
| TAMKO Roofing Products | `src/data/partners.ts:37` |
| CertainTeed | `src/data/partners.ts:44` |
| Soprema | `src/data/partners.ts:51` |
| Garland | `src/data/partners.ts:58` |
| Johns Manville | `src/data/partners.ts:65` |
| Firestone Building Products | `src/data/partners.ts:72` |

### Waterproofing Partners
| Partner | File Location |
|---------|---------------|
| Sika | `src/data/partners.ts:80` |
| Neogard | `src/data/partners.ts:87` |
| BASF/Sonneborn | `src/data/partners.ts:94` |
| Hydrotech | `src/data/partners.ts:101` |
| Momentive/GE | `src/data/partners.ts:108` |
| Tremco | `src/data/partners.ts:115` |
| Dow Corning | `src/data/partners.ts:122` |
| Henry | `src/data/partners.ts:129` |
| Prosoco | `src/data/partners.ts:136` |

---

## Image Optimization Tips

1. **Use Next.js Image component** (already implemented) for automatic optimization
2. **Provide multiple sizes** using `srcSet` for responsive images
3. **Add meaningful alt text** for accessibility and SEO
4. **Consider lazy loading** for below-the-fold images (Next.js does this automatically)
5. **Compress images** before upload using tools like:
   - [Squoosh](https://squoosh.app/)
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/) (Mac)

---

## Where to Store Images

Recommended structure:
```
public/
├── images/
│   ├── heroes/
│   │   ├── home-hero.webp
│   │   ├── about-header.webp
│   │   └── ...
│   ├── services/
│   │   ├── roofing.webp
│   │   ├── re-roofing.webp
│   │   └── ...
│   ├── projects/
│   │   ├── rice-university.webp
│   │   └── ...
│   └── partners/
│       ├── gaf-logo.png
│       └── ...
```

After adding images, update the `src` paths in the respective data files and page components.
