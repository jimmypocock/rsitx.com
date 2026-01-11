export interface Testimonial {
  id: string;
  quote: string;
  author?: string;
  company?: string;
  role?: string;
  featured?: boolean;
}

// Testimonials require verified attribution before adding
export const testimonials: Testimonial[] = [];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}
