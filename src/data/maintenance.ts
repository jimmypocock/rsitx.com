export interface MaintenanceProgram {
  id: string;
  name: string;
  frequency: string;
  description: string;
  includes: string[];
}

export interface SchedulingOption {
  id: string;
  title: string;
  description: string;
}

export const maintenancePrograms: MaintenanceProgram[] = [
  {
    id: "annual",
    name: "Annual Maintenance",
    frequency: "Once per year",
    description:
      "Comprehensive yearly inspection and maintenance to catch issues before they become costly repairs.",
    includes: [
      "Full roof inspection",
      "Detailed condition report",
      "Minor repairs included",
      "Gutter and drain cleaning",
      "Photo documentation",
      "Prioritized repair recommendations",
    ],
  },
  {
    id: "semi-annual",
    name: "Semi-Annual Maintenance",
    frequency: "Twice per year",
    description:
      "Bi-annual inspections ideal for buildings in high-traffic areas or harsh weather zones.",
    includes: [
      "Spring and fall inspections",
      "Seasonal weather preparation",
      "Minor repairs included",
      "Gutter and drain cleaning",
      "Debris removal",
      "Detailed reporting",
    ],
  },
  {
    id: "quarterly",
    name: "Quarterly Maintenance",
    frequency: "Four times per year",
    description:
      "Maximum protection with quarterly inspections for critical facilities and high-value properties.",
    includes: [
      "Quarterly comprehensive inspections",
      "Priority emergency response",
      "All minor repairs included",
      "Complete drain maintenance",
      "Regular debris removal",
      "Executive summary reports",
    ],
  },
  {
    id: "custom",
    name: "Custom Programs",
    frequency: "Tailored schedule",
    description:
      "Flexible maintenance programs designed around your building's specific needs and budget.",
    includes: [
      "Customized inspection schedule",
      "Portfolio management options",
      "Multi-building discounts",
      "Budgeted repair planning",
      "Asset management integration",
      "Dedicated account manager",
    ],
  },
];

export const additionalServices = [
  {
    id: "gutter-cleaning",
    name: "Gutter Cleaning",
    description: "Commercial gutter and downspout cleaning and maintenance.",
  },
  {
    id: "debris-removal",
    name: "Debris Removal",
    description: "Regular clearing of leaves, branches, and accumulated debris.",
  },
  {
    id: "drain-maintenance",
    name: "Drain Maintenance",
    description: "Roof drain inspection, cleaning, and minor repairs.",
  },
  {
    id: "caulking-sealant",
    name: "Caulking & Sealant",
    description: "Inspection and replacement of deteriorated sealants.",
  },
];

export const schedulingOptions: SchedulingOption[] = [
  {
    id: "evening-night",
    title: "Evening & Night Work",
    description:
      "After-hours scheduling available to minimize disruption to your business operations.",
  },
  {
    id: "weekend",
    title: "Weekend Availability",
    description:
      "Saturday and Sunday scheduling for retail, schools, and sensitive environments.",
  },
  {
    id: "tenant-coordination",
    title: "Tenant Coordination",
    description:
      "Flexible scheduling that works around tenant needs and business hours.",
  },
  {
    id: "phased-approach",
    title: "Phased Project Approach",
    description:
      "Large projects broken into manageable phases to reduce operational impact.",
  },
];
