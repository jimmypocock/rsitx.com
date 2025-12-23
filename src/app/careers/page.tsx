import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Employment",
  description: `Join the ${company.name} team. Explore career opportunities in commercial roofing, waterproofing, restoration, and sheet metal across Texas.`,
};

const jobCategories = [
  {
    title: "Roofing Professionals",
    description:
      "From apprentice roofers to seasoned foremen, our roofing teams tackle projects of all sizes across Texas.",
    positions: [
      "Roofing Foreman",
      "Journeyman Roofer",
      "Roofing Apprentice",
      "Roof Service Technician",
    ],
  },
  {
    title: "Waterproofing Specialists",
    description:
      "Our waterproofing crews protect buildings from the elements using the latest materials and techniques.",
    positions: [
      "Waterproofing Foreman",
      "Waterproofing Technician",
      "Caulking Specialist",
      "Below-Grade Waterproofing Installer",
    ],
  },
  {
    title: "Restoration Craftsmen",
    description:
      "Skilled tradespeople who restore and preserve buildings, including historic structures requiring specialized care.",
    positions: [
      "Restoration Foreman",
      "Mason / Brick Layer",
      "Concrete Repair Technician",
      "Historic Restoration Specialist",
    ],
  },
  {
    title: "Sheet Metal Fabricators",
    description:
      "Craftsmen who design, fabricate, and install custom architectural sheet metal components.",
    positions: [
      "Sheet Metal Foreman",
      "Sheet Metal Mechanic",
      "Sheet Metal Fabricator",
      "Sheet Metal Apprentice",
    ],
  },
  {
    title: "Project Management",
    description:
      "Leaders who coordinate crews, manage schedules, and ensure projects are completed safely and on time.",
    positions: [
      "Project Manager",
      "Assistant Project Manager",
      "Project Coordinator",
      "Estimator",
    ],
  },
  {
    title: "Operations & Support",
    description:
      "Essential team members who keep our operations running smoothly from our Houston headquarters.",
    positions: [
      "Safety Manager",
      "Warehouse / Logistics",
      "Equipment Operator",
      "Administrative Support",
    ],
  },
];

const benefits = [
  {
    title: "Competitive Pay",
    description: "Industry-leading wages with opportunities for overtime",
  },
  {
    title: "Health Benefits",
    description: "Medical, dental, and vision coverage for you and your family",
  },
  {
    title: "Retirement Plan",
    description: "401(k) with company match to help you build your future",
  },
  {
    title: "Paid Time Off",
    description: "Vacation, holidays, and sick leave",
  },
  {
    title: "Training & Development",
    description: "On-the-job training and opportunities to advance your skills",
  },
  {
    title: "Safety First",
    description: "Comprehensive safety program and equipment provided",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Employment"
        subtitle="Careers at RSI"
        description="Build your career with a company that's been building confidence since 1932"
        backgroundImage="https://placehold.co/1920x600/5c1909/ffffff?text=Careers+at+RSI"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            At Restoration Services, Inc., we&apos;re always looking for skilled
            professionals who take pride in their work. With nearly a century of
            legacy in the Texas construction industry, we offer stable employment,
            competitive compensation, and the opportunity to work on meaningful
            projects across the state.
          </p>
        </div>
      </Section>

      {/* Job Categories */}
      <Section background="alt">
        <SectionHeader
          title="Career Opportunities"
          description="Explore the types of positions available at RSI"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="text-lg font-bold text-foreground">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                {category.description}
              </p>
              <ul className="mt-4 space-y-2">
                {category.positions.map((position) => (
                  <li
                    key={position}
                    className="flex items-center text-sm text-foreground"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-primary-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {position}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeader
          title="Why Work at RSI?"
          description="We take care of our team members"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 p-4 rounded-lg bg-secondary-50"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Company Values */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Our Values
          </h2>
          <p className="mt-4 text-foreground-muted">
            RSI was built on the principles of quality workmanship, safety, and
            integrity. We look for team members who share these values and take
            pride in doing the job right the first time.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary-600">Quality</div>
              <p className="mt-2 text-sm text-foreground-muted">
                Excellence in every detail
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary-600">Safety</div>
              <p className="mt-2 text-sm text-foreground-muted">
                Everyone goes home safe
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary-600">Integrity</div>
              <p className="mt-2 text-sm text-foreground-muted">
                Doing what we say we&apos;ll do
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to Join Our Team?
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            View our current job openings or contact us to learn more about
            career opportunities at RSI.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              View Job Openings
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
