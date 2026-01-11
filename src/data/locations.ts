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
  image?: string;
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
    image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp",
    projects: [
      {
        id: "buffalo-soldiers-museum",
        name: "Buffalo Soldiers National Museum",
        description:
          "Historic preservation of the Houston Light Guard Armory, winner of the 2025 Good Brick Award.",
        services: ["Waterproofing", "Restoration"],
        image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp",
        year: 2024,
      },
      {
        id: "ut-health-houston",
        name: "UT Health Houston",
        description:
          "Large-scale roofing project for this major medical campus in the Texas Medical Center.",
        services: ["Roofing"],
        image: "/images/projects/hospitals-medical/roofing-ut-health-houston-1.webp",
      },
      {
        id: "uh-fertitta-medicine",
        name: "University of Houston Tilman J. Fertitta Family College of Medicine",
        description:
          "Roofing installation for the university's new medical education facility.",
        services: ["Roofing"],
        image: "/images/projects/hospitals-medical/roofing-university-of-houston-tilman-j-fertitta-family-college-of-medicine.webp",
      },
      {
        id: "lyondellbasell-center",
        name: "LyondellBasell Center for Petrochemical Energy and Technology",
        description:
          "Roofing project for this advanced petrochemical education and research facility.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-lyondellbasell-center-for-petrochemical-energy-and-technology-1.webp",
      },
      {
        id: "san-jacinto-college",
        name: "San Jacinto College Petrochemical Building",
        description:
          "Roofing installation for the college's petrochemical training facility.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-san-jacinto-college-petrochemical-building.webp",
      },
      {
        id: "uh-clear-lake",
        name: "University of Houston Clear Lake Recreation and Wellness Center",
        description:
          "Commercial roofing for the university's recreation and wellness facility.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-university-of-houston-clear-lake-recreation-and-wellness-center.webp",
      },
      {
        id: "uh-science-tech",
        name: "University of Houston Science and Technology Building",
        description:
          "Roofing installation for the university's science and technology complex.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-1.webp",
      },
      {
        id: "clear-lake-high-school",
        name: "Clear Lake High School",
        description:
          "Roofing services for Clear Creek ISD high school campus.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-clear-lake-high-school.webp",
      },
      {
        id: "hailey-elementary",
        name: "Hailey Elementary",
        description:
          "Sheet metal installation and fabrication for elementary school campus.",
        services: ["Sheet Metal"],
        image: "/images/projects/schools-k12/sheet-metal-hailey-elementary-1.webp",
      },
      {
        id: "mcadams-junior-high",
        name: "McAdams Junior High",
        description:
          "Sheet metal services for junior high school facility.",
        services: ["Sheet Metal"],
        image: "/images/projects/schools-k12/sheet-metal-mcadams-junior-high-1.webp",
      },
      {
        id: "il-palazzo",
        name: "Il Palazzo",
        description:
          "Comprehensive waterproofing services for this luxury residential property.",
        services: ["Waterproofing"],
        image: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-1.webp",
      },
      {
        id: "pvamu-engineering",
        name: "Prairie View A&M University Engineering Building",
        description:
          "Complete roofing system installation for the university's engineering facility.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-1.webp",
      },
      {
        id: "9th-grade-center-spring-isd",
        name: "9th Grade Center (Spring ISD)",
        description:
          "Roofing installation for Spring ISD's 9th grade campus.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-9th-grade-center-spring-isd.webp",
      },
      {
        id: "dekaney-9th-grade-center",
        name: "Dekaney 9th Grade Center (Spring ISD)",
        description:
          "Commercial roofing project for Spring ISD's Dekaney 9th grade facility.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-dekaney-9th-grade-center-spring-isd.webp",
      },
      {
        id: "grand-oaks-high-school",
        name: "Grand Oaks High School (Conroe ISD)",
        description:
          "Roofing installation for Conroe ISD's Grand Oaks High School.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-grand-oaks-high-school-conroe-isd.webp",
      },
      {
        id: "new-caney-high-school",
        name: "New Caney High School",
        description:
          "Commercial roofing project for New Caney ISD.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-new-caney-high-school.webp",
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
    projects: [],
  },
  {
    id: "south-padre-island",
    slug: "south-padre-island",
    name: "South Padre Island",
    region: "Gulf Coast",
    description:
      "Specialized coastal roofing and waterproofing services for South Padre Island's resort and commercial properties, built to withstand Gulf Coast weather.",
    projects: [],
  },
  {
    id: "rio-grande-valley",
    slug: "rio-grande-valley",
    name: "Rio Grande Valley",
    region: "South Texas",
    description:
      "Providing commercial roofing and restoration services throughout the Rio Grande Valley, including McAllen, Brownsville, and Harlingen.",
    projects: [],
  },
  {
    id: "beaumont",
    slug: "beaumont",
    name: "Beaumont",
    region: "Southeast Texas",
    description:
      "Serving the Beaumont-Port Arthur metropolitan area with commercial roofing and industrial waterproofing services.",
    projects: [],
  },
  {
    id: "port-arthur",
    slug: "port-arthur",
    name: "Port Arthur",
    region: "Southeast Texas",
    description:
      "Industrial and commercial roofing services for Port Arthur's refineries, petrochemical facilities, and commercial properties.",
    projects: [],
  },
  {
    id: "sabine-pass",
    slug: "sabine-pass",
    name: "Sabine Pass",
    region: "Southeast Texas",
    description:
      "Serving the Sabine Pass area with industrial roofing and waterproofing services, including LNG facilities and port infrastructure.",
    projects: [],
  },
  {
    id: "galveston",
    slug: "galveston",
    name: "Galveston",
    region: "Gulf Coast",
    description:
      "Historic preservation and coastal roofing expertise for Galveston Island's unique architectural heritage and modern commercial properties.",
    image: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp",
    projects: [
      {
        id: "texas-am-galveston-dorms",
        name: "Texas A&M Galveston Dormitories",
        description:
          "Waterproofing services for student dormitory buildings at the Galveston campus.",
        services: ["Waterproofing"],
        image: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-1.webp",
      },
      {
        id: "texas-am-galveston-tennis",
        name: "Texas A&M Galveston Tennis Courts",
        description:
          "Complete waterproofing restoration for the campus tennis court facilities.",
        services: ["Waterproofing"],
        image: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  // Only generate pages for locations with projects
  return locations
    .filter((location) => location.projects.length > 0)
    .map((location) => location.slug);
}

export function getLocationsWithProjects(): Location[] {
  return locations.filter((location) => location.projects.length > 0);
}

export function getServiceAreas(): Location[] {
  return locations.filter((location) => location.projects.length === 0);
}

export function getLocationNavItems(): { name: string; href: string }[] {
  // Only show locations with projects in navigation
  const locationsWithProjects = getLocationsWithProjects();
  return [
    { name: "All Locations", href: "/locations" },
    ...locationsWithProjects
      .map((location) => ({
        name: location.name,
        href: `/locations/${location.slug}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];
}
