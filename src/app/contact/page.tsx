import type { Metadata } from "next";
import { PageHeader, Section, ContactForm } from "@/components/ui";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${company.name} for commercial roofing, waterproofing, and restoration services in Southeast Texas. Call ${company.contact.phone} or fill out our contact form.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="We're here to help with your roofing and restoration needs"
        backgroundImage="/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-1.webp"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h2>
            <p className="text-foreground-muted mb-8">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Contact Details */}
              <div className="bg-secondary-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-1">
                      Phone
                    </h4>
                    <a
                      href={`tel:${company.contact.phoneRaw}`}
                      className="text-lg font-medium text-primary-600 hover:text-primary-500"
                    >
                      {company.contact.phone}
                    </a>
                  </li>
                  <li>
                    <h4 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="text-lg font-medium text-primary-600 hover:text-primary-500"
                    >
                      {company.contact.email}
                    </a>
                  </li>
                  <li>
                    <h4 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-1">
                      Address
                    </h4>
                    <a
                      href={company.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary-600"
                    >
                      {company.contact.address.street}
                      <br />
                      {company.contact.address.city}, {company.contact.address.state}{" "}
                      {company.contact.address.zip}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Service Area */}
              <div className="bg-secondary-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Service Area
                </h3>
                <p className="text-foreground-muted">
                  We proudly serve commercial clients throughout {company.serviceArea}, including Houston, Galveston, and surrounding areas.
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="bg-primary-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Report a Leak
                </h3>
                <p className="text-primary-200 mb-4">
                  Have an emergency roof leak? Contact us immediately for prompt service.
                </p>
                <a
                  href={`tel:${company.contact.phoneRaw}`}
                  className="inline-flex items-center justify-center w-full rounded-md bg-white px-4 py-2.5 font-semibold text-primary-600 hover:bg-secondary-100 transition-colors"
                >
                  Call Now: {company.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="alt">
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="aspect-[21/9] bg-secondary-200 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-secondary-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-foreground-muted">
                Interactive map placeholder
              </p>
              <a
                href={company.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-primary-600 font-medium hover:text-primary-500"
              >
                View on Google Maps
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
