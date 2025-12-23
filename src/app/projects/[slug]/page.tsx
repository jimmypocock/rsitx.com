import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";
import {
  projectCategories,
  getProjectCategoryBySlug,
  getAllProjectCategorySlugs,
} from "@/data/projectCategories";

interface ProjectCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getProjectCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} Projects`,
    description: `${company.name} ${category.description}`,
  };
}

export default async function ProjectCategoryPage({
  params,
}: ProjectCategoryPageProps) {
  const { slug } = await params;
  const category = getProjectCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  // Get other categories for the "Other Categories" section
  const otherCategories = projectCategories
    .filter((c) => c.id !== category.id)
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <div className="relative bg-primary-600 text-white">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Projects
          </Link>
          <p className="text-primary-200 text-sm font-medium uppercase tracking-wider">
            Project Category
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <Section>
        <SectionHeader
          title={`${category.name} Projects`}
          description="Featured work in this category"
        />

        {category.projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.year && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-foreground">
                        {project.year}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium">
                    {project.location}
                  </p>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary-50 rounded-xl">
            <svg
              className="w-12 h-12 text-secondary-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <p className="text-foreground-muted">
              Project details coming soon for this category.
            </p>
            <p className="mt-2 text-sm text-foreground-muted">
              Contact us to learn about our {category.name.toLowerCase()} experience.
            </p>
          </div>
        )}
      </Section>

      {/* Services Available */}
      <Section background="alt">
        <SectionHeader
          title="Services We Provide"
          description={`Full range of commercial roofing and restoration services for ${category.name.toLowerCase()}`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/services/roofing"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
              Roofing
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              New construction, re-roofing, and repairs
            </p>
          </Link>
          <Link
            href="/services/waterproofing"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
              Waterproofing
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Below-grade and above-grade systems
            </p>
          </Link>
          <Link
            href="/services/restoration-services"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
              Restoration
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Historic preservation and building restoration
            </p>
          </Link>
          <Link
            href="/services/sheet-metal"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
              Sheet Metal
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Custom fabrication and installation
            </p>
          </Link>
        </div>
      </Section>

      {/* Other Categories */}
      <Section>
        <SectionHeader
          title="Other Project Types"
          description="Explore our work across different sectors"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherCategories.map((otherCategory) => (
            <Link
              key={otherCategory.id}
              href={`/projects/${otherCategory.slug}`}
              className="group flex items-center gap-4 bg-secondary-50 hover:bg-primary-600 rounded-lg p-4 transition-colors"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                <Image
                  src={otherCategory.image}
                  alt={otherCategory.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-white transition-colors">
                  {otherCategory.name}
                </h3>
                <p className="text-sm text-foreground-muted group-hover:text-primary-100 transition-colors">
                  {otherCategory.projects.length} project
                  {otherCategory.projects.length !== 1 ? "s" : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-primary-600 font-medium hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Have a {category.name} Project?
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            Contact us to discuss your commercial roofing, waterproofing, or
            restoration project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Get a Quote
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
