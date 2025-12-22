import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, SectionHeader, ServiceCard } from "@/components/ui";
import { TestimonialBlock } from "@/components/ui/Testimonials";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Services",
  description: `${company.name} provides comprehensive roofing, waterproofing, and restoration services for commercial buildings in Southeast Texas.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="What We Do"
        description="Staying ahead. Keeping you covered."
        backgroundImage="https://placehold.co/1920x600/5c1909/ffffff?text=RSI+Services"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            RSI maintains constant watch for emerging technology, including infrared leak detection and non-destructive restoration. Innovation puts us ahead—using breakthroughs and advances that augment our service and deliver better results for your building.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="alt">
        <SectionHeader
          title="Comprehensive Building Solutions"
          description="From new construction to restoration, we have you covered."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <TestimonialBlock
            testimonial={{
              quote:
                "RSI provided thorough communication and project updates and never missed a milestone during all phases of the project--I highly recommend RSI.",
            }}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need a Custom Solution?
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Every building is unique. Contact us to discuss your specific needs and get a tailored solution.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
