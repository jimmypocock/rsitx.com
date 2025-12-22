import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeader, Stats } from "@/components/ui";
import { TestimonialBlock } from "@/components/ui/Testimonials";
import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name}, with more than ${company.yearsInBusiness} years of expertise in roofing, waterproofing, and building restoration services serving Southeast Texas.`,
};

export default function AboutPage() {
  const stats = [
    { value: "1964", label: "Founded" },
    { value: "60+", label: "Years of Experience" },
    { value: "7", label: "Industry Memberships" },
    { value: "1000+", label: "Projects Completed" },
  ];

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Our Story"
        description="More than 60 years of doing it right"
        backgroundImage="https://placehold.co/1920x600/5c1909/ffffff?text=About+RSI"
      />

      {/* Company Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Building Confidence Since 1964
            </h2>
            <p className="mt-6 text-lg text-foreground-muted">
              Restoration Services, Inc. has built a legacy of reliability spanning more than {company.yearsInBusiness} years of expertise in roofing, waterproofing, and building restoration services serving Southeast Texas.
            </p>
            <p className="mt-4 text-lg text-foreground-muted">
              From simple roof patches to massive, multi-story, multi-million dollar restoration or roofing projects, RSI&apos;s experience combined with our commitment to quality means we deliver the ideal solution for every building we touch.
            </p>
            <p className="mt-4 text-lg text-foreground-muted">
              Our team maintains constant watch for emerging technology, including infrared leak detection and non-destructive restoration methods. This commitment to innovation keeps us ahead and keeps your buildings protected.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/800x600/5c1909/ffffff?text=RSI+History"
              alt="RSI company history"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section background="primary">
        <Stats stats={stats} variant="primary" />
      </Section>

      {/* Values */}
      <Section background="alt">
        <SectionHeader
          title="Our Values"
          description="The principles that guide everything we do"
        />
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 mb-6">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Quality</h3>
            <p className="mt-4 text-foreground-muted">
              We never compromise on quality. Every project receives our full attention to detail and commitment to excellence.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 mb-6">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Reliability</h3>
            <p className="mt-4 text-foreground-muted">
              When we make a commitment, we keep it. Our clients trust us to deliver on time and on budget, every time.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 mb-6">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
            <p className="mt-4 text-foreground-muted">
              We stay ahead of industry trends and technology to provide the most effective solutions for our clients.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <TestimonialBlock testimonial={testimonials[0]} />
        </div>
      </Section>

      {/* Professional Memberships */}
      <Section background="alt">
        <SectionHeader
          title="Professional Memberships"
          description="We maintain active memberships in leading industry associations"
        />
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {company.memberships.map((membership) => (
            <div
              key={membership}
              className="flex items-center justify-center w-28 h-28 rounded-lg bg-white shadow-sm border border-secondary-200"
            >
              <span className="text-xl font-bold text-primary-600">
                {membership}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-foreground-muted">
            National Roofing Contractors Association (NRCA) • Roofing Contractors Association of Texas (RCAT) • Western States Roofing Contractors Association (WSRCA) • RCI, Inc. • Associated General Contractors (AGC) • American Subcontractors Association (ASA) • International Concrete Repair Institute (ICRI)
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Contact us today to discuss your roofing, waterproofing, or restoration project.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
