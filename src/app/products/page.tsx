import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, SectionHeader, PartnerGrid } from "@/components/ui";
import { partners, getPartnersByCategory } from "@/data/partners";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Products",
  description: `${company.name} is an authorized installer of products from leading roofing and waterproofing manufacturers.`,
};

export default function ProductsPage() {
  const roofingPartners = getPartnersByCategory("roofing");
  const waterproofingPartners = getPartnersByCategory("waterproofing");

  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Partners & Products"
        description="Authorized installer of industry-leading products"
        backgroundImage="https://placehold.co/1920x600/5c1909/ffffff?text=RSI+Products"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            RSI is an authorized installer of products from leading industry names. We partner with the best manufacturers to ensure your building receives the highest quality materials, backed by comprehensive warranties.
          </p>
        </div>
      </Section>

      {/* Roofing Partners */}
      <Section background="alt">
        <SectionHeader
          title="Roofing Products"
          description="We install roofing systems from these trusted manufacturers"
        />
        <PartnerGrid partners={roofingPartners} />
      </Section>

      {/* Waterproofing Partners */}
      <Section>
        <SectionHeader
          title="Waterproofing Products"
          description="Our waterproofing solutions feature products from industry leaders"
        />
        <PartnerGrid partners={waterproofingPartners} />
      </Section>

      {/* Why Quality Materials Matter */}
      <Section background="alt">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Quality Materials Matter
            </h2>
            <p className="mt-6 text-lg text-foreground-muted">
              The products we install are only as good as the manufacturers behind them. That&apos;s why we partner exclusively with industry leaders who share our commitment to quality and durability.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
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
                <span className="text-foreground-muted">
                  Extended manufacturer warranties for peace of mind
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
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
                <span className="text-foreground-muted">
                  Products designed for Gulf Coast climate challenges
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
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
                <span className="text-foreground-muted">
                  Certified installation by trained professionals
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-secondary-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-foreground-muted mb-6">
              Not sure which products are right for your building? Our team can help you evaluate your options and recommend the best solution for your needs and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Discuss Your Project?
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Contact us to learn more about the products we install and find the right solution for your building.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
