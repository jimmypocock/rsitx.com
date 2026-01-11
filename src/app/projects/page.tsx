import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";
import {
  projectCategories,
  getTotalProjectCount,
  getFeaturedProjects,
} from "@/data/projectCategories";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore our portfolio of commercial roofing, waterproofing, and restoration projects across Southeast Texas. ${company.name} has completed over 1000 projects in 60+ years.`,
};

export default function ProjectsPage() {
  const totalProjects = getTotalProjectCount();
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Portfolio"
        description="The Gulf Coast Experts"
        backgroundImage="/images/projects/colleges-universities/roofing-pvamu-engineering-building-1.webp"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            With more than six decades of roofing and waterproofing expertise,
            RSI has completed projects across every sector. Our understanding of
            Gulf Coast climate challenges means we deliver solutions that stand
            the test of time.
          </p>
        </div>
      </Section>

      {/* Project Categories */}
      <Section background="alt">
        <SectionHeader
          title="Browse by Category"
          description="Select a project type to view our work in that sector"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectCategories.map((category) => (
            <Link
              key={category.id}
              href={`/projects/${category.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={category.image}
                  alt={`${category.name} projects`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-foreground-muted line-clamp-2">
                  {category.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-foreground-muted">
                    {category.projects.length} project
                    {category.projects.length !== 1 ? "s" : ""}
                  </span>
                  <span className="text-sm font-semibold text-primary-600 group-hover:underline">
                    View projects →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section>
          <SectionHeader
            title="Featured Projects"
            description="Highlights from our portfolio across Texas"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project) => (
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
                  <p className="mt-2 text-sm text-foreground-muted line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service) => (
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
        </Section>
      )}

      {/* Stats */}
      <Section background="alt">
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600">
              {company.yearsOfLegacy}+
            </div>
            <div className="mt-2 text-foreground-muted">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">1000+</div>
            <div className="mt-2 text-foreground-muted">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">
              {projectCategories.length}
            </div>
            <div className="mt-2 text-foreground-muted">Project Categories</div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Let&apos;s discuss how RSI can help with your next roofing,
            waterproofing, or restoration project.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
