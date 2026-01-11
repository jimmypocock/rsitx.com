import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";
import {
  maintenancePrograms,
  additionalServices,
  schedulingOptions,
} from "@/data/maintenance";

export const metadata: Metadata = {
  title: "Maintenance Programs",
  description: `${company.name} offers preventive roof maintenance programs to extend roof life, prevent costly repairs, and protect your investment.`,
};

export default function MaintenancePage() {
  return (
    <>
      <PageHeader
        title="Maintenance Programs"
        subtitle="Preventive Care"
        description="Extend your roof's life and prevent costly repairs"
        backgroundImage="/images/projects/hospitals-medical/roofing-ut-health-houston-3.webp"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            Regular maintenance is the key to maximizing your roof&apos;s
            lifespan and avoiding unexpected repairs. Our preventive maintenance
            programs catch small issues before they become big problems, saving
            you money and protecting your building.
          </p>
        </div>
      </Section>

      {/* Why Maintenance */}
      <Section background="alt">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">2x</div>
            <p className="text-sm text-foreground-muted">
              Well-maintained roofs can last up to twice as long
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">80%</div>
            <p className="text-sm text-foreground-muted">
              Of roof failures can be prevented with regular maintenance
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">$$$</div>
            <p className="text-sm text-foreground-muted">
              Save significantly on emergency repairs and premature replacement
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <p className="text-sm text-foreground-muted">
              Priority response for maintenance program members
            </p>
          </div>
        </div>
      </Section>

      {/* Maintenance Programs */}
      <Section>
        <SectionHeader
          title="Maintenance Programs"
          description="Choose the level of protection that fits your needs"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {maintenancePrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-medium text-primary-600 mb-1">
                {program.frequency}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {program.name}
              </h3>
              <p className="text-sm text-foreground-muted mb-4">
                {program.description}
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                  Includes:
                </p>
                <ul className="space-y-1">
                  {program.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-foreground-muted"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Additional Services */}
      <Section background="alt">
        <SectionHeader
          title="Additional Services"
          description="Standalone services available for all customers"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {additionalServices.map((service) => (
            <div key={service.id} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-primary-600"
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
                <h3 className="font-semibold text-foreground">{service.name}</h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Flexible Scheduling */}
      <Section>
        <SectionHeader
          title="Flexible Scheduling"
          description="We work around your business, not the other way around"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {schedulingOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white border border-gray-100 rounded-lg p-5"
            >
              <h3 className="font-semibold text-foreground">{option.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Protect Your Investment
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Contact us to discuss a maintenance program tailored to your
            building&apos;s needs and budget.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Request a Consultation
            </Link>
            <a
              href={`tel:${company.contact.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white hover:bg-primary-400 transition-colors"
            >
              Call {company.contact.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
