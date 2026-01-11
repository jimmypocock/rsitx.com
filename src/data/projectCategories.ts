export interface ProjectImage {
  src: string;
  alt: string;
}

export interface BeforeAfterPair {
  before: ProjectImage;
  after: ProjectImage;
  title?: string;
}

export interface CategoryProject {
  id: string;
  name: string;
  location: string;
  description: string;
  services: string[];
  image: string;
  year?: number;
  images?: ProjectImage[];
  beforeAfterPairs?: BeforeAfterPair[];
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
    image: "/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-1.webp",
    projects: [
      {
        id: "texas-am-galveston-tennis",
        name: "Texas A&M Galveston Tennis Courts",
        location: "Galveston, TX",
        description:
          "Complete waterproofing restoration for the campus tennis court facilities.",
        services: ["Waterproofing"],
        image: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp",
        images: [
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp", alt: "Texas A&M Tennis Courts after restoration - view 1" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-2.webp", alt: "Texas A&M Tennis Courts after restoration - view 2" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-3.webp", alt: "Texas A&M Tennis Courts after restoration - view 3" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-4.webp", alt: "Texas A&M Tennis Courts after restoration - view 4" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-5.webp", alt: "Texas A&M Tennis Courts after restoration - view 5" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-6.webp", alt: "Texas A&M Tennis Courts after restoration - view 6" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-7.webp", alt: "Texas A&M Tennis Courts after restoration - view 7" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-8.webp", alt: "Texas A&M Tennis Courts after restoration - view 8" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-9.webp", alt: "Texas A&M Tennis Courts after restoration - view 9" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-10.webp", alt: "Texas A&M Tennis Courts after restoration - view 10" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-11.webp", alt: "Texas A&M Tennis Courts after restoration - view 11" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-12.webp", alt: "Texas A&M Tennis Courts after restoration - view 12" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-13.webp", alt: "Texas A&M Tennis Courts after restoration - view 13" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-14.webp", alt: "Texas A&M Tennis Courts after restoration - view 14" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-15.webp", alt: "Texas A&M Tennis Courts after restoration - view 15" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-16.webp", alt: "Texas A&M Tennis Courts after restoration - view 16" },
        ],
        beforeAfterPairs: [
          {
            before: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-before-1.webp", alt: "Tennis courts before restoration - view 1" },
            after: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp", alt: "Tennis courts after restoration - view 1" },
          },
          {
            before: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-before-3.webp", alt: "Tennis courts before restoration - view 2" },
            after: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-4.webp", alt: "Tennis courts after restoration - view 2" },
          },
          {
            before: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-before-4.webp", alt: "Tennis courts before restoration - view 3" },
            after: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-3.webp", alt: "Tennis courts after restoration - view 3" },
          },
          {
            before: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-before-8.webp", alt: "Tennis courts before restoration - view 4" },
            after: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-13.webp", alt: "Tennis courts after restoration - view 4" },
          },
        ],
      },
      {
        id: "pvamu-engineering",
        name: "Prairie View A&M University Engineering Building",
        location: "Prairie View, TX",
        description:
          "Complete roofing system installation for the university's engineering facility.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-1.webp",
        images: [
          { src: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-1.webp", alt: "PVAMU Engineering Building roofing project - view 1" },
          { src: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-2.webp", alt: "PVAMU Engineering Building roofing project - view 2" },
          { src: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-3.webp", alt: "PVAMU Engineering Building roofing project - view 3" },
          { src: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-4.webp", alt: "PVAMU Engineering Building roofing project - view 4" },
          { src: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-5.webp", alt: "PVAMU Engineering Building roofing project - view 5" },
        ],
      },
      {
        id: "san-jacinto-college",
        name: "San Jacinto College Petrochemical Building",
        location: "Houston, TX",
        description:
          "Roofing installation for the college's petrochemical training facility.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-san-jacinto-college-petrochemical-building.webp",
      },
      {
        id: "lyondellbasell-center",
        name: "LyondellBasell Center for Petrochemical Energy and Technology",
        location: "Houston, TX",
        description:
          "Roofing project for this advanced petrochemical education and research facility.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-lyondellbasell-center-for-petrochemical-energy-and-technology-1.webp",
        images: [
          { src: "/images/projects/colleges-universities/roofing-lyondellbasell-center-for-petrochemical-energy-and-technology-1.webp", alt: "LyondellBasell Center roofing - view 1" },
          { src: "/images/projects/colleges-universities/roofing-lyondellbasell-center-for-petrochemical-energy-and-technology-2.webp", alt: "LyondellBasell Center roofing - view 2" },
          { src: "/images/projects/colleges-universities/roofing-lyondellbasell-center-for-petrochemical-energy-and-technology-3.webp", alt: "LyondellBasell Center roofing - view 3" },
        ],
      },
      {
        id: "uh-clear-lake",
        name: "University of Houston Clear Lake Recreation and Wellness Center",
        location: "Houston, TX",
        description:
          "Commercial roofing for the university's recreation and wellness facility.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-university-of-houston-clear-lake-recreation-and-wellness-center.webp",
      },
      {
        id: "uh-science-tech",
        name: "University of Houston Science and Technology Building",
        location: "Houston, TX",
        description:
          "Roofing installation for the university's science and technology complex.",
        services: ["Roofing"],
        image: "/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-1.webp",
        images: [
          { src: "/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-1.webp", alt: "UH Science & Tech Building roofing - view 1" },
          { src: "/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-2.webp", alt: "UH Science & Tech Building roofing - view 2" },
          { src: "/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-3.webp", alt: "UH Science & Tech Building roofing - view 3" },
          { src: "/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-4.webp", alt: "UH Science & Tech Building roofing - view 4" },
        ],
      },
      {
        id: "texas-am-galveston-dorms",
        name: "Texas A&M Galveston Dormitories",
        location: "Galveston, TX",
        description:
          "Waterproofing services for student dormitory buildings at the Galveston campus.",
        services: ["Waterproofing"],
        image: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-1.webp",
        images: [
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-1.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 1" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-2.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 2" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-3.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 3" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-4.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 4" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-5.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 5" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-6.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 6" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-7.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 7" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-8.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 8" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-9.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 9" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-10.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 10" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-11.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 11" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-12.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 12" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-13.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 13" },
          { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-14.webp", alt: "Texas A&M Galveston Dorms waterproofing - view 14" },
        ],
      },
    ],
  },
  {
    id: "historical-projects",
    slug: "historical-projects",
    name: "Historical Projects",
    description:
      "Specialized historic preservation and restoration services honoring Texas's architectural heritage.",
    image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp",
    projects: [
      {
        id: "buffalo-soldiers-museum",
        name: "Buffalo Soldiers National Museum",
        location: "Houston, TX",
        description:
          "Historic preservation of the Houston Light Guard Armory (1925), winner of the 2025 Good Brick Award from Preservation Houston.",
        services: ["Waterproofing", "Restoration"],
        image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp",
        year: 2024,
        images: [
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp", alt: "Buffalo Soldiers Museum restoration - view 1" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-2.webp", alt: "Buffalo Soldiers Museum restoration - view 2" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-3.webp", alt: "Buffalo Soldiers Museum restoration - view 3" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-4.webp", alt: "Buffalo Soldiers Museum restoration - view 4" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-5.webp", alt: "Buffalo Soldiers Museum restoration - view 5" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-6.webp", alt: "Buffalo Soldiers Museum restoration - view 6" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-7.webp", alt: "Buffalo Soldiers Museum restoration - view 7" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-8.webp", alt: "Buffalo Soldiers Museum restoration - view 8" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-9.webp", alt: "Buffalo Soldiers Museum restoration - view 9" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-10.webp", alt: "Buffalo Soldiers Museum restoration - view 10" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-11.webp", alt: "Buffalo Soldiers Museum restoration - view 11" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-12.webp", alt: "Buffalo Soldiers Museum restoration - view 12" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-13.webp", alt: "Buffalo Soldiers Museum restoration - view 13" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-14.webp", alt: "Buffalo Soldiers Museum restoration - view 14" },
          { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-15.webp", alt: "Buffalo Soldiers Museum restoration - view 15" },
        ],
      },
    ],
  },
  {
    id: "hospitals-medical-facilities",
    slug: "hospitals-medical-facilities",
    name: "Hospitals & Medical Facilities",
    description:
      "Healthcare facility roofing and waterproofing with minimal disruption to critical medical operations.",
    image: "/images/projects/hospitals-medical/roofing-ut-health-houston-1.webp",
    projects: [
      {
        id: "ut-health-houston",
        name: "UT Health Houston",
        location: "Houston, TX",
        description:
          "Large-scale roofing project for this major medical campus in the Texas Medical Center.",
        services: ["Roofing"],
        image: "/images/projects/hospitals-medical/roofing-ut-health-houston-1.webp",
        images: [
          { src: "/images/projects/hospitals-medical/roofing-ut-health-houston-1.webp", alt: "UT Health Houston roofing - view 1" },
          { src: "/images/projects/hospitals-medical/roofing-ut-health-houston-2.webp", alt: "UT Health Houston roofing - view 2" },
          { src: "/images/projects/hospitals-medical/roofing-ut-health-houston-3.webp", alt: "UT Health Houston roofing - view 3" },
          { src: "/images/projects/hospitals-medical/roofing-ut-health-houston-4.webp", alt: "UT Health Houston roofing - view 4" },
          { src: "/images/projects/hospitals-medical/roofing-ut-health-houston-5.webp", alt: "UT Health Houston roofing - view 5" },
          { src: "/images/projects/hospitals-medical/roofing-ut-health-houston-6.webp", alt: "UT Health Houston roofing - view 6" },
          { src: "/images/projects/hospitals-medical/roofing-ut-health-houston-7.webp", alt: "UT Health Houston roofing - view 7" },
          { src: "/images/projects/hospitals-medical/roofing-ut-health-houston-8.webp", alt: "UT Health Houston roofing - view 8" },
        ],
      },
      {
        id: "uh-fertitta-medicine",
        name: "University of Houston Tilman J. Fertitta Family College of Medicine",
        location: "Houston, TX",
        description:
          "Roofing installation for the university's new medical education facility.",
        services: ["Roofing"],
        image: "/images/projects/hospitals-medical/roofing-university-of-houston-tilman-j-fertitta-family-college-of-medicine.webp",
      },
    ],
  },
  {
    id: "industrial",
    slug: "industrial",
    name: "Industrial",
    description:
      "Commercial roofing solutions for manufacturing facilities, processing plants, and industrial complexes.",
    image: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-1.webp",
    projects: [
      {
        id: "sanderson-farms-bryan",
        name: "Sanderson Farms Plant",
        location: "Bryan, TX",
        description:
          "Large-scale commercial roofing project for Sanderson Farms poultry processing facility.",
        services: ["Roofing"],
        image: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-1.webp",
        images: [
          { src: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-1.webp", alt: "Sanderson Farms Plant roofing - view 1" },
          { src: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-2.webp", alt: "Sanderson Farms Plant roofing - view 2" },
          { src: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-3.webp", alt: "Sanderson Farms Plant roofing - view 3" },
          { src: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-4.webp", alt: "Sanderson Farms Plant roofing - view 4" },
          { src: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-5.webp", alt: "Sanderson Farms Plant roofing - view 5" },
          { src: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-6.webp", alt: "Sanderson Farms Plant roofing - view 6" },
        ],
      },
    ],
  },
  {
    id: "multi-family-residential",
    slug: "multi-family-residential",
    name: "Multi-Family Residential",
    description:
      "Commercial roofing and waterproofing services for apartment complexes, condominiums, and multi-family housing developments.",
    image: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-1.webp",
    projects: [
      {
        id: "il-palazzo",
        name: "Il Palazzo",
        location: "Houston, TX",
        description:
          "Comprehensive waterproofing services for this luxury residential property.",
        services: ["Waterproofing"],
        image: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-1.webp",
        images: [
          { src: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-1.webp", alt: "Il Palazzo waterproofing - view 1" },
          { src: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-2.webp", alt: "Il Palazzo waterproofing - view 2" },
          { src: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-3.webp", alt: "Il Palazzo waterproofing - view 3" },
          { src: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-4.webp", alt: "Il Palazzo waterproofing - view 4" },
          { src: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-5.webp", alt: "Il Palazzo waterproofing - view 5" },
          { src: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-6.webp", alt: "Il Palazzo waterproofing - view 6" },
          { src: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-7.webp", alt: "Il Palazzo waterproofing - view 7" },
          { src: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-8.webp", alt: "Il Palazzo waterproofing - view 8" },
        ],
      },
    ],
  },
  {
    id: "schools-k12",
    slug: "schools-k12",
    name: "Schools (K-12)",
    description:
      "K-12 school district roofing and waterproofing with scheduling to minimize educational disruption.",
    image: "/images/projects/schools-k12/roofing-grand-oaks-high-school-conroe-isd.webp",
    projects: [
      {
        id: "9th-grade-center-spring-isd",
        name: "9th Grade Center",
        location: "Spring, TX",
        description:
          "Roofing installation for Spring ISD's 9th grade campus.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-9th-grade-center-spring-isd.webp",
      },
      {
        id: "dekaney-9th-grade-center",
        name: "Dekaney 9th Grade Center",
        location: "Spring, TX",
        description:
          "Commercial roofing project for Spring ISD's Dekaney 9th grade facility.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-dekaney-9th-grade-center-spring-isd.webp",
      },
      {
        id: "clear-lake-high-school",
        name: "Clear Lake High School",
        location: "Houston, TX",
        description:
          "Roofing services for Clear Creek ISD high school campus.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-clear-lake-high-school.webp",
      },
      {
        id: "grand-oaks-high-school",
        name: "Grand Oaks High School",
        location: "Spring, TX",
        description:
          "Roofing installation for Conroe ISD's Grand Oaks High School.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-grand-oaks-high-school-conroe-isd.webp",
      },
      {
        id: "new-caney-high-school",
        name: "New Caney High School",
        location: "New Caney, TX",
        description:
          "Commercial roofing project for New Caney ISD.",
        services: ["Roofing"],
        image: "/images/projects/schools-k12/roofing-new-caney-high-school.webp",
      },
      {
        id: "hailey-elementary",
        name: "Hailey Elementary",
        location: "Houston, TX",
        description:
          "Sheet metal installation and fabrication for elementary school campus.",
        services: ["Sheet Metal"],
        image: "/images/projects/schools-k12/sheet-metal-hailey-elementary-1.webp",
        images: [
          { src: "/images/projects/schools-k12/sheet-metal-hailey-elementary-1.webp", alt: "Hailey Elementary sheet metal - view 1" },
          { src: "/images/projects/schools-k12/sheet-metal-hailey-elementary-2.webp", alt: "Hailey Elementary sheet metal - view 2" },
        ],
      },
      {
        id: "mcadams-junior-high",
        name: "McAdams Junior High",
        location: "Houston, TX",
        description:
          "Sheet metal services for junior high school facility.",
        services: ["Sheet Metal"],
        image: "/images/projects/schools-k12/sheet-metal-mcadams-junior-high-1.webp",
        images: [
          { src: "/images/projects/schools-k12/sheet-metal-mcadams-junior-high-1.webp", alt: "McAdams Junior High sheet metal - view 1" },
          { src: "/images/projects/schools-k12/sheet-metal-mcadams-junior-high-2.webp", alt: "McAdams Junior High sheet metal - view 2" },
          { src: "/images/projects/schools-k12/sheet-metal-mcadams-junior-high-3.webp", alt: "McAdams Junior High sheet metal - view 3" },
          { src: "/images/projects/schools-k12/sheet-metal-mcadams-junior-high-4.webp", alt: "McAdams Junior High sheet metal - view 4" },
        ],
      },
    ],
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
