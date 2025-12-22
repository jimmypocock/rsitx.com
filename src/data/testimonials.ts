export interface Testimonial {
  id: string;
  quote: string;
  author?: string;
  company?: string;
  role?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "We have had the privilege of working with RSI for several years and have come to know that they consistently provide quality and professional workmanship, maintenance and support.",
    featured: true,
  },
  {
    id: "testimonial-2",
    quote:
      "RSI provided thorough communication and project updates and never missed a milestone during all phases of the project--I highly recommend RSI.",
    featured: true,
  },
  {
    id: "testimonial-3",
    quote:
      "We are always pleased to have RSI as the winning contractor on our projects. They properly staff the project and keep it staffed until completion. RSI is also an integral part of the team when unforeseen conditions arise. Instead of standing to the side awaiting instructions, they come to the table with cost-effective quality solutions.",
    featured: true,
  },
  {
    id: "testimonial-4",
    quote:
      "RSI's professional, responsive staff has provided me with cost-effective, dependable, high quality roofing services for many years. I will continue to recommend RSI without a moment's hesitation.",
    featured: false,
  },
  {
    id: "testimonial-5",
    quote:
      "RSI has completed numerous roofing projects for our firm. Our company primarily works within the educational industry. RSI has been an extremely qualified participant in these projects. They are well aware of the needs of the educational institutions, and provide excellent communication with the staff and also security for the staff and students.",
    featured: false,
  },
  {
    id: "testimonial-6",
    quote:
      "RSI has sealed and waterproofed several of our commercial buildings. The results of their efforts have eliminated all of the past water leakage and penetration problems, some of which were severe. We were extremely impressed with their knowledge of waterproofing technology and products and the thoroughness of their work. To date, their work has held up over time and the building exteriors still look like new.",
    featured: false,
  },
  {
    id: "testimonial-7",
    quote:
      "I would like you to know how pleased we are with the exterior restoration of our property performed by RSI. While always a handsome building, the exterior now shows to even better advantage. More importantly, however, we now have a weather-tight facade.",
    featured: false,
  },
  {
    id: "testimonial-8",
    quote:
      "Our architecture firm specializes in green housing. RSI was knowledgeable about the latest in green roofing materials and they ensured the roof was installed perfectly and met all current code requirements. I look forward to working with them on our next project.",
    featured: true,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}
