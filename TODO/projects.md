# Projects Data

The projects page currently has sample/placeholder data. This document outlines what's needed to populate real project information.

## Current Data Structure

Projects are stored in `src/data/projects.ts` with this structure:

```typescript
interface Project {
  id: string;           // Unique identifier (kebab-case)
  title: string;        // Project name
  category: ProjectCategory;  // One of the defined categories
  description: string;  // 1-2 sentence description
  services: string[];   // Services used on this project
  image: string;        // Path to project image
  location?: string;    // City, State
  year?: number;        // Year completed
  featured?: boolean;   // Show on homepage
}
```

## Available Categories

- `healthcare` - Hospitals, medical centers, healthcare facilities
- `education` - Universities, schools, educational institutions
- `commercial` - Office buildings, retail, commercial properties
- `industrial` - Warehouses, manufacturing, industrial facilities
- `government` - Government buildings, public facilities
- `religious` - Churches, temples, religious institutions
- `hospitality` - Hotels, resorts, hospitality venues
- `historic` - Historical buildings, restoration projects

---

## Information Needed Per Project

For each project RSI wants to showcase, gather:

### Required
- [ ] Project name
- [ ] Category (from list above)
- [ ] Brief description (1-2 sentences about the work performed)
- [ ] Services provided (e.g., "Roofing", "Waterproofing", "Restoration")
- [ ] Project photo (see `images.md` for specs)

### Optional (Recommended)
- [ ] Location (City, TX)
- [ ] Year completed
- [ ] Whether to feature on homepage

### Nice to Have
- [ ] Square footage
- [ ] Project duration
- [ ] Specific challenges overcome
- [ ] Client testimonial

---

## Sample Projects to Replace

The following placeholder projects need real data:

| Current Placeholder | Category | Status |
|---------------------|----------|--------|
| Rice University | education | Needs real details |
| Moody Gardens | hospitality | Needs real details |
| Prairie View A&M School of Nursing | education | Needs real details |
| Houston Medical Center Complex | healthcare | Placeholder - verify if real |
| Downtown Houston Historic Building | historic | Placeholder - replace |
| Port of Houston Warehouse Facility | industrial | Placeholder - replace |
| First Baptist Church | religious | Placeholder - replace |
| Harris County Administration Building | government | Placeholder - replace |

---

## Recommended Project Count

- **Minimum**: 6-8 projects (at least 1-2 per major category)
- **Ideal**: 12-20 projects for a robust portfolio
- **Featured**: 3-4 projects for homepage display

---

## Adding New Projects

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array:

```typescript
{
  id: "project-name-slug",
  title: "Full Project Name",
  category: "education",
  description: "Brief description of work performed and outcome.",
  services: ["Roofing", "Waterproofing"],
  image: "/images/projects/project-name.webp",
  location: "Houston, TX",
  year: 2024,
  featured: true,
}
```

3. Add the corresponding image to `public/images/projects/`

---

## Category Expansion

If needed, new categories can be added by:

1. Adding to the `ProjectCategory` type in `src/data/projects.ts`
2. Adding to the `projectCategories` array with label and description

Example:
```typescript
{
  id: "multi-family",
  label: "Multi-Family",
  description: "Apartments, condominiums, and residential complexes",
}
```

---

## Future Enhancements

Consider adding later:
- [ ] Individual project detail pages (`/projects/[slug]`)
- [ ] Before/after photo galleries
- [ ] Client testimonials per project
- [ ] Case study format for major projects
- [ ] Filter by service type in addition to category
