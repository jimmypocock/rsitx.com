import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, StaffCard } from "@/components/ui";
import { departments, getStaffByDepartment } from "@/data/staff";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the team at ${company.name} — leadership, project managers, estimators, and superintendents serving Southeast Texas.`,
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="The People Behind RSI"
        description="Decades of combined experience in commercial roofing, waterproofing, sheet metal, and restoration — backed by a culture of accountability."
      />

      {departments.map((department, idx) => {
        const members = getStaffByDepartment(department.id);
        if (members.length === 0) return null;

        return (
          <Section
            key={department.id}
            background={idx % 2 === 1 ? "alt" : "white"}
          >
            <div className="mb-10 sm:mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-2">
                Department
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {department.name}
              </h2>
              {department.description && (
                <p className="mt-3 text-foreground-muted max-w-2xl">
                  {department.description}
                </p>
              )}
            </div>
            <ul className="grid gap-x-6 gap-y-10 sm:gap-x-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {members.map((person, memberIdx) => (
                <li key={person.id}>
                  <StaffCard
                    person={person}
                    priority={idx === 0 && memberIdx < 4}
                  />
                </li>
              ))}
            </ul>
          </Section>
        );
      })}

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work With Our Team
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get the right people on it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${company.contact.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 transition-colors"
            >
              Call {company.contact.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
