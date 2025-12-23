export interface LocationProject {
  id: string;
  name: string;
  description: string;
  services: string[];
  image: string;
  year?: number;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  region: string;
  description: string;
  image: string;
  mapUrl?: string;
  projects: LocationProject[];
}

export const locations: Location[] = [
  {
    id: "houston",
    slug: "houston",
    name: "Houston",
    region: "Greater Houston Area",
    description:
      "Our headquarters and primary service area. RSI has been serving the Houston metropolitan area since 1982, with roots in Houston's construction industry dating back to 1932.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Houston",
    projects: [
      {
        id: "houston-1",
        name: "Rice University Campus",
        description: "Comprehensive roofing and waterproofing services for multiple campus buildings.",
        services: ["Roofing", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Rice+University",
        year: 2020,
      },
      {
        id: "houston-2",
        name: "Texas Medical Center",
        description: "Large-scale restoration project for medical facilities.",
        services: ["Restoration", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=TX+Medical+Center",
        year: 2019,
      },
      {
        id: "houston-3",
        name: "Buffalo Soldiers Museum",
        description: "Historic preservation of the Houston Light Guard Armory.",
        services: ["Restoration", "Masonry"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Buffalo+Soldiers",
        year: 2024,
      },
      {
        id: "houston-4",
        name: "Downtown Office Complex",
        description: "Commercial re-roofing for high-rise office buildings.",
        services: ["Roofing", "Sheet Metal"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Downtown+Houston",
        year: 2021,
      },
    ],
  },
  {
    id: "san-antonio",
    slug: "san-antonio",
    name: "San Antonio",
    region: "South Central Texas",
    description:
      "Serving the San Antonio metropolitan area with commercial roofing, waterproofing, and restoration services for historic and modern buildings.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=San+Antonio",
    projects: [
      {
        id: "sa-1",
        name: "Historic Downtown Building",
        description: "Restoration and waterproofing for a historic commercial property.",
        services: ["Restoration", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=SA+Historic",
        year: 2022,
      },
      {
        id: "sa-2",
        name: "Medical Center Facility",
        description: "Commercial roofing installation for healthcare facility.",
        services: ["Roofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=SA+Medical",
        year: 2021,
      },
    ],
  },
  {
    id: "south-padre-island",
    slug: "south-padre-island",
    name: "South Padre Island",
    region: "Gulf Coast",
    description:
      "Specialized coastal roofing and waterproofing services for South Padre Island's resort and commercial properties, built to withstand Gulf Coast weather.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=South+Padre+Island",
    projects: [
      {
        id: "spi-1",
        name: "Beachfront Resort",
        description: "Hurricane-resistant roofing system for coastal resort property.",
        services: ["Roofing", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=SPI+Resort",
        year: 2023,
      },
    ],
  },
  {
    id: "rio-grande-valley",
    slug: "rio-grande-valley",
    name: "Rio Grande Valley",
    region: "South Texas",
    description:
      "Providing commercial roofing and restoration services throughout the Rio Grande Valley, including McAllen, Brownsville, and Harlingen.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Rio+Grande+Valley",
    projects: [
      {
        id: "rgv-1",
        name: "Valley Industrial Park",
        description: "Large-scale commercial roofing for industrial facilities.",
        services: ["Roofing", "Sheet Metal"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=RGV+Industrial",
        year: 2022,
      },
    ],
  },
  {
    id: "beaumont",
    slug: "beaumont",
    name: "Beaumont",
    region: "Southeast Texas",
    description:
      "Serving the Beaumont-Port Arthur metropolitan area with commercial roofing and industrial waterproofing services.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Beaumont",
    projects: [
      {
        id: "bmt-1",
        name: "Lamar University",
        description: "Campus-wide roofing maintenance and restoration.",
        services: ["Roofing", "Restoration"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Lamar+University",
        year: 2021,
      },
      {
        id: "bmt-2",
        name: "Downtown Beaumont Historic Building",
        description: "Historic preservation and waterproofing services.",
        services: ["Restoration", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Beaumont+Historic",
        year: 2020,
      },
    ],
  },
  {
    id: "port-arthur",
    slug: "port-arthur",
    name: "Port Arthur",
    region: "Southeast Texas",
    description:
      "Industrial and commercial roofing services for Port Arthur's refineries, petrochemical facilities, and commercial properties.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Port+Arthur",
    projects: [
      {
        id: "pa-1",
        name: "Industrial Refinery Complex",
        description: "Specialized roofing for petrochemical facility.",
        services: ["Roofing", "Sheet Metal"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=PA+Industrial",
        year: 2023,
      },
    ],
  },
  {
    id: "sabine-pass",
    slug: "sabine-pass",
    name: "Sabine Pass",
    region: "Southeast Texas",
    description:
      "Serving the Sabine Pass area with industrial roofing and waterproofing services, including LNG facilities and port infrastructure.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Sabine+Pass",
    projects: [
      {
        id: "sp-1",
        name: "Port Facility",
        description: "Industrial waterproofing for port infrastructure.",
        services: ["Waterproofing", "Roofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Sabine+Port",
        year: 2022,
      },
    ],
  },
  {
    id: "galveston",
    slug: "galveston",
    name: "Galveston",
    region: "Gulf Coast",
    description:
      "Historic preservation and coastal roofing expertise for Galveston Island's unique architectural heritage and modern commercial properties.",
    image: "https://placehold.co/1920x600/5c1909/ffffff?text=Galveston",
    projects: [
      {
        id: "gal-1",
        name: "Moody Gardens",
        description: "Green roofing and waterproofing for iconic Galveston attraction.",
        services: ["Green Roofing", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Moody+Gardens",
        year: 2018,
      },
      {
        id: "gal-2",
        name: "Historic Strand District",
        description: "Historic building restoration in downtown Galveston.",
        services: ["Restoration", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=Strand+District",
        year: 2020,
      },
      {
        id: "gal-3",
        name: "UTMB Health",
        description: "Medical campus roofing and waterproofing services.",
        services: ["Roofing", "Waterproofing"],
        image: "https://placehold.co/600x400/5c1909/ffffff?text=UTMB",
        year: 2021,
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}

export function getLocationNavItems(): { name: string; href: string }[] {
  return [
    { name: "All Locations", href: "/locations" },
    ...locations
      .map((location) => ({
        name: location.name,
        href: `/locations/${location.slug}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];
}
