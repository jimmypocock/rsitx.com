export interface CategoryProject {
  id: string;
  name: string;
  location: string;
  description: string;
  services: string[];
  image: string;
  year?: number;
}

export interface ProjectCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  projects: CategoryProject[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "colleges-universities",
    slug: "colleges-universities",
    name: "Colleges & Universities",
    description:
      "Commercial roofing, waterproofing, and restoration services for higher education institutions across Texas.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Colleges+%26+Universities",
    projects: [
      {
        id: "rice-university",
        name: "Rice University",
        location: "Houston, TX",
        description:
          "Comprehensive roofing and waterproofing services for multiple campus buildings, including green roofing initiatives.",
        services: ["Roofing", "Waterproofing", "Green Roofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Rice+University",
      },
      {
        id: "prairie-view-nursing",
        name: "Prairie View A&M School of Nursing",
        location: "Prairie View, TX",
        description:
          "Full roofing system installation with sustainable materials for this state-of-the-art nursing facility.",
        services: ["Roofing", "Green Roofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Prairie+View+A%26M",
      },
      {
        id: "lamar-university",
        name: "Lamar University",
        location: "Beaumont, TX",
        description: "Campus-wide roofing maintenance and restoration.",
        services: ["Roofing", "Restoration"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Lamar+University",
        year: 2021,
      },
    ],
  },
  {
    id: "government-buildings",
    slug: "government-buildings",
    name: "Government Buildings",
    description:
      "Trusted partner for federal, state, and municipal building projects requiring quality roofing and restoration work.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Government+Buildings",
    projects: [
      {
        id: "harris-county-admin",
        name: "Harris County Administration Building",
        location: "Houston, TX",
        description:
          "Re-roofing and exterior restoration for a major county government facility.",
        services: ["Re-Roofing", "Restoration"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Government+Building",
      },
    ],
  },
  {
    id: "historical-projects",
    slug: "historical-projects",
    name: "Historical Projects",
    description:
      "Specialized historic preservation and restoration services honoring Texas's architectural heritage.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Historical+Projects",
    projects: [
      {
        id: "buffalo-soldiers-museum",
        name: "Buffalo Soldiers National Museum",
        location: "Houston, TX",
        description:
          "Historic preservation of the Houston Light Guard Armory, winner of the 2025 Good Brick Award.",
        services: ["Restoration", "Masonry"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Buffalo+Soldiers",
        year: 2024,
      },
      {
        id: "historic-downtown",
        name: "Downtown Houston Historic Building",
        location: "Houston, TX",
        description:
          "Careful restoration of a century-old commercial building, preserving architectural details while modernizing protection.",
        services: ["Historical Restoration", "Waterproofing", "Masonry Repair"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Historic+Building",
      },
      {
        id: "strand-district",
        name: "Historic Strand District",
        location: "Galveston, TX",
        description: "Historic building restoration in downtown Galveston.",
        services: ["Restoration", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Strand+District",
        year: 2020,
      },
      {
        id: "beaumont-historic",
        name: "Downtown Beaumont Historic Building",
        location: "Beaumont, TX",
        description: "Historic preservation and waterproofing services.",
        services: ["Restoration", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Beaumont+Historic",
        year: 2020,
      },
    ],
  },
  {
    id: "hospitals-medical-facilities",
    slug: "hospitals-medical-facilities",
    name: "Hospitals & Medical Facilities",
    description:
      "Healthcare facility roofing and waterproofing with minimal disruption to critical medical operations.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Hospitals+%26+Medical",
    projects: [
      {
        id: "texas-medical-center",
        name: "Texas Medical Center",
        location: "Houston, TX",
        description: "Large-scale restoration project for medical facilities.",
        services: ["Restoration", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=TX+Medical+Center",
        year: 2019,
      },
      {
        id: "utmb-health",
        name: "UTMB Health",
        location: "Galveston, TX",
        description: "Medical campus roofing and waterproofing services.",
        services: ["Roofing", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=UTMB",
        year: 2021,
      },
      {
        id: "sa-medical-center",
        name: "Medical Center Facility",
        location: "San Antonio, TX",
        description: "Commercial roofing installation for healthcare facility.",
        services: ["Roofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=SA+Medical",
        year: 2021,
      },
    ],
  },
  {
    id: "hotels-hospitality",
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    description:
      "Roofing and restoration solutions for hotels, resorts, and hospitality properties across Texas.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Hotels+%26+Hospitality",
    projects: [
      {
        id: "moody-gardens",
        name: "Moody Gardens",
        location: "Galveston, TX",
        description:
          "Green roofing and waterproofing for iconic Galveston attraction.",
        services: ["Green Roofing", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Moody+Gardens",
        year: 2018,
      },
      {
        id: "spi-resort",
        name: "Beachfront Resort",
        location: "South Padre Island, TX",
        description: "Hurricane-resistant roofing system for coastal resort property.",
        services: ["Roofing", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=SPI+Resort",
        year: 2023,
      },
    ],
  },
  {
    id: "multi-family-residential",
    slug: "multi-family-residential",
    name: "Multi-Family Residential",
    description:
      "Commercial roofing services for apartment complexes, condominiums, and multi-family housing developments.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Multi-Family+Residential",
    projects: [],
  },
  {
    id: "office-buildings",
    slug: "office-buildings",
    name: "Office Buildings",
    description:
      "Commercial office building roofing, waterproofing, and exterior restoration throughout Texas.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Office+Buildings",
    projects: [
      {
        id: "downtown-office-complex",
        name: "Downtown Office Complex",
        location: "Houston, TX",
        description: "Commercial re-roofing for high-rise office buildings.",
        services: ["Roofing", "Sheet Metal"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Downtown+Houston",
        year: 2021,
      },
    ],
  },
  {
    id: "parking-structures",
    slug: "parking-structures",
    name: "Parking Structures",
    description:
      "Specialized waterproofing and restoration for parking garages and multi-level parking facilities.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Parking+Structures",
    projects: [],
  },
  {
    id: "religious-facilities",
    slug: "religious-facilities",
    name: "Religious Facilities",
    description:
      "Roofing and restoration services for churches, temples, mosques, and other religious buildings.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Religious+Facilities",
    projects: [
      {
        id: "first-baptist-church",
        name: "First Baptist Church",
        location: "Houston, TX",
        description:
          "Restoration and waterproofing of a historic church, including steeple and facade work.",
        services: ["Restoration", "Waterproofing", "Caulking"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Church+Restoration",
      },
    ],
  },
  {
    id: "schools-k12",
    slug: "schools-k12",
    name: "Schools (K-12)",
    description:
      "K-12 school district roofing and waterproofing with scheduling to minimize educational disruption.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Schools+K-12",
    projects: [],
  },
];

export function getProjectCategoryBySlug(slug: string): ProjectCategory | undefined {
  return projectCategories.find((category) => category.slug === slug);
}

export function getAllProjectCategorySlugs(): string[] {
  return projectCategories.map((category) => category.slug);
}

export function getTotalProjectCount(): number {
  return projectCategories.reduce((total, category) => total + category.projects.length, 0);
}

export function getAllProjects(): CategoryProject[] {
  return projectCategories.flatMap((category) => category.projects);
}

export function getFeaturedProjects(): CategoryProject[] {
  // Return first project from each category that has projects
  return projectCategories
    .filter((category) => category.projects.length > 0)
    .map((category) => category.projects[0]);
}

export function getProjectCategoryNavItems(): { name: string; href: string }[] {
  return [
    { name: "All Projects", href: "/projects" },
    ...projectCategories
      .map((category) => ({
        name: category.name,
        href: `/projects/${category.slug}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];
}
