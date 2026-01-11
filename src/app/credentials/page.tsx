import type { Metadata } from "next";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";
import {
  manufacturerCertifications,
  industryCertifications,
  memberships,
  warranties,
  serviceCommitments,
  equipmentCapabilities,
} from "@/data/credentials";

export const metadata: Metadata = {
  title: "Credentials & Certifications",
  description: `${company.name} is a fully licensed, insured, and certified commercial roofing contractor with manufacturer certifications and industry memberships.`,
};

export default function CredentialsPage() {
  return (
    <>
      <PageHeader
        title="Credentials"
        subtitle="Trust & Quality"
        description="Licensed, insured, and certified to deliver excellence"
        backgroundImage="/images/projects/hospitals-medical/roofing-ut-health-houston-1.webp"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            When you partner with RSI, you&apos;re working with a fully
            licensed, insured, and certified contractor. Our credentials
            represent decades of commitment to quality, safety, and
            professionalism in commercial roofing and waterproofing.
          </p>
        </div>
      </Section>

      {/* Manufacturer Certifications */}
      <Section background="alt">
        <SectionHeader
          title="Manufacturer Certifications"
          description="Authorized installer for the industry's leading roofing and waterproofing manufacturers"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {manufacturerCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  {cert.description && (
                    <p className="mt-1 text-sm text-foreground-muted">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Safety & Industry Certifications */}
      <Section>
        <SectionHeader
          title="Safety & Industry Certifications"
          description="Committed to the highest standards of workplace safety"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                <div>
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  {cert.description && (
                    <p className="mt-1 text-sm text-foreground-muted">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Memberships */}
      <Section background="alt">
        <SectionHeader
          title="Industry Associations"
          description="Active member of leading construction and roofing organizations"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {memberships.map((membership) => (
            <div
              key={membership.id}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">
                  {membership.acronym || membership.name.substring(0, 3).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  {membership.name}
                </h3>
                {membership.acronym && (
                  <p className="text-xs text-foreground-muted">
                    {membership.acronym}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Warranties */}
      <Section>
        <SectionHeader
          title="Warranty Programs"
          description="Comprehensive protection for your roofing investment"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {warranties.map((warranty) => (
            <div
              key={warranty.id}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {warranty.duration}
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {warranty.name}
              </h3>
              <p className="text-sm text-foreground-muted">
                {warranty.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Service Commitments */}
      <Section background="alt">
        <SectionHeader
          title="Our Commitments"
          description="What you can expect when working with RSI"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCommitments.map((commitment) => (
            <div key={commitment.id} className="flex items-start gap-4">
              <div className="flex-shrink-0">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {commitment.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Equipment & Technology */}
      <Section>
        <SectionHeader
          title="Equipment & Technology"
          description="Professional-grade tools and technology for superior results"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {equipmentCapabilities.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-100 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <span className="font-medium text-foreground text-sm">
                        {item.name}
                      </span>
                      <p className="text-xs text-foreground-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Insurance & Licensing */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fully Licensed & Insured
          </h2>
          <p className="mt-4 text-lg text-foreground-muted">
            RSI maintains comprehensive insurance coverage including General
            Liability, Workers Compensation, Commercial Auto, and Umbrella
            policies. We carry full surety bonding capacity for projects of all
            sizes. Certificates of insurance available upon request.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-foreground">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              General Liability
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-foreground">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Workers Compensation
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-foreground">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Commercial Auto
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-foreground">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Umbrella Coverage
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-foreground">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Surety Bonding
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
