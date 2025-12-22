import { track } from "@vercel/analytics";

// Re-export track for custom event tracking
export { track };

// Pre-defined events for consistency
export const trackEvent = {
  // Contact events
  contactFormSubmit: () => track("contact_form_submit"),
  phoneClick: () => track("phone_click"),
  emailClick: () => track("email_click"),

  // Navigation events
  ctaClick: (location: string) => track("cta_click", { location }),
  serviceView: (service: string) => track("service_view", { service }),
  projectView: (project: string) => track("project_view", { project }),

  // Engagement events
  quoteRequest: () => track("quote_request"),
  newsletterSignup: () => track("newsletter_signup"),
};
