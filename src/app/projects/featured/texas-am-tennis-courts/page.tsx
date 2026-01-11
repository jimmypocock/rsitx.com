import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, ImageGallery, BeforeAfterGrid } from "@/components/ui";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Texas A&M Galveston Tennis Courts - Featured Project",
  description: `Complete waterproofing restoration of the Texas A&M Galveston campus tennis court facilities by ${company.name}. View dramatic before and after transformation.`,
};

const projectDetails = {
  name: "Texas A&M Galveston Tennis Courts",
  location: "Galveston, TX",
  client: "Texas A&M University at Galveston",
  service: "Waterproofing Restoration",
  scope: "Complete tennis court surface waterproofing and restoration",
};

const projectHighlights = [
  {
    title: "Surface Preparation",
    description: "Complete removal and assessment of deteriorated coating systems, surface cleaning, and crack repair preparation.",
  },
  {
    title: "Waterproofing System",
    description: "Application of premium waterproofing membrane system designed to withstand coastal weather conditions and heavy athletic use.",
  },
  {
    title: "Surface Restoration",
    description: "Multi-layer acrylic color coating system with line striping for regulation tennis court specifications.",
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive inspection process ensuring proper adhesion, thickness, and uniformity throughout the installation.",
  },
];

const galleryImages = [
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp", alt: "Texas A&M Tennis Courts after restoration - view 1" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-2.webp", alt: "Texas A&M Tennis Courts after restoration - view 2" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-3.webp", alt: "Texas A&M Tennis Courts after restoration - view 3" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-4.webp", alt: "Texas A&M Tennis Courts after restoration - view 4" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-5.webp", alt: "Texas A&M Tennis Courts after restoration - view 5" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-6.webp", alt: "Texas A&M Tennis Courts after restoration - view 6" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-7.webp", alt: "Texas A&M Tennis Courts after restoration - view 7" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-8.webp", alt: "Texas A&M Tennis Courts after restoration - view 8" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-9.webp", alt: "Texas A&M Tennis Courts after restoration - view 9" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-10.webp", alt: "Texas A&M Tennis Courts after restoration - view 10" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-11.webp", alt: "Texas A&M Tennis Courts after restoration - view 11" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-12.webp", alt: "Texas A&M Tennis Courts after restoration - view 12" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-13.webp", alt: "Texas A&M Tennis Courts after restoration - view 13" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-14.webp", alt: "Texas A&M Tennis Courts after restoration - view 14" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-15.webp", alt: "Texas A&M Tennis Courts after restoration - view 15" },
  { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-16.webp", alt: "Texas A&M Tennis Courts after restoration - view 16" },
];

const beforeAfterPairs = [
  {
    before: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-before-1.webp", alt: "Tennis courts before restoration - view 1" },
    after: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp", alt: "Tennis courts after restoration - view 1" },
  },
  {
    before: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-before-3.webp", alt: "Tennis courts before restoration - view 2" },
    after: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-4.webp", alt: "Tennis courts after restoration - view 2" },
  },
  {
    before: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-before-4.webp", alt: "Tennis courts before restoration - view 3" },
    after: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-3.webp", alt: "Tennis courts after restoration - view 3" },
  },
  {
    before: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-before-8.webp", alt: "Tennis courts before restoration - view 4" },
    after: { src: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-13.webp", alt: "Tennis courts after restoration - view 4" },
  },
];

export default function TexasAMTennisCourtsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-primary-600 text-white pt-28 md:pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp"
            alt="Texas A&M Galveston Tennis Courts after restoration"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/projects/colleges-universities"
            className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Colleges & Universities
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-white text-primary-600">
              Featured Project
            </span>
            <span className="text-primary-200">Waterproofing Restoration</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {projectDetails.name}
          </h1>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl">
            Complete waterproofing restoration of campus tennis court facilities with dramatic before and after results
          </p>
        </div>
      </div>

      {/* Project Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">
              Project Overview
            </h2>
            <div className="mt-6 space-y-4 text-foreground-muted">
              <p>
                RSI was selected to perform complete waterproofing restoration of the tennis court facilities at Texas A&M University at Galveston. The coastal location presented unique challenges, including exposure to salt air, high humidity, and severe weather conditions common to the Gulf Coast region.
              </p>
              <p>
                The existing court surfaces had deteriorated significantly, with extensive cracking, delamination, and water infiltration issues that compromised both playability and safety. Our team developed a comprehensive restoration plan that addressed structural concerns while providing a durable, high-performance playing surface.
              </p>
              <p className="font-medium text-foreground">
                The transformation was dramatic—from deteriorated, unsafe surfaces to pristine, regulation-quality tennis courts that will serve the university community for years to come.
              </p>
            </div>

            {/* Project Highlights */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Project Scope
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {projectHighlights.map((highlight, index) => (
                  <div key={index} className="bg-secondary-50 rounded-lg p-5 border border-secondary-100">
                    <h4 className="font-semibold text-foreground">
                      {highlight.title}
                    </h4>
                    <p className="mt-2 text-sm text-foreground-muted">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Project Details */}
              <div className="bg-secondary-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Project Details
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-foreground-muted">Project</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.name}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Location</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.location}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Client</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.client}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Service</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.service}</dd>
                  </div>
                  <div className="pt-3 border-t border-secondary-200">
                    <dt className="text-foreground-muted">Scope</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.scope}</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">
                  Similar Project Needs?
                </h3>
                <p className="text-sm text-primary-100">
                  RSI provides comprehensive waterproofing and restoration services for athletic facilities, parking structures, and more.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-4 text-sm font-medium text-white hover:underline"
                >
                  Request a consultation
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Before & After Section */}
      <Section background="alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Before & After Comparison
        </h2>
        <p className="text-center text-foreground-muted mb-8 max-w-2xl mx-auto">
          Drag the slider to compare before and after images. These comparisons showcase the dramatic transformation achieved through professional waterproofing restoration.
        </p>
        <BeforeAfterGrid
          pairs={beforeAfterPairs}
          columns={2}
          aspectRatio="4/3"
        />
      </Section>

      {/* Full Gallery */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Complete Project Gallery
        </h2>
        <p className="text-center text-foreground-muted mb-8">
          Click any image to view full size ({galleryImages.length} photos)
        </p>
        <ImageGallery
          images={galleryImages}
          columns={4}
          aspectRatio="4/3"
          gap="md"
        />
      </Section>

      {/* Related Projects */}
      <Section background="alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">
          More University Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/projects/colleges-universities"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/projects/colleges-universities/waterproofing-texas-am-galveston-dorms-1.webp"
                alt="Texas A&M Galveston Dormitories"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
                Texas A&M Galveston Dormitories
              </h3>
              <p className="text-sm text-foreground-muted">Waterproofing</p>
            </div>
          </Link>
          <Link
            href="/projects/colleges-universities"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/projects/colleges-universities/roofing-pvamu-engineering-building-1.webp"
                alt="Prairie View A&M Engineering Building"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
                Prairie View A&M Engineering
              </h3>
              <p className="text-sm text-foreground-muted">Roofing</p>
            </div>
          </Link>
          <Link
            href="/projects/colleges-universities"
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-1.webp"
                alt="UH Science & Technology Building"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
                UH Science & Technology
              </h3>
              <p className="text-sm text-foreground-muted">Roofing</p>
            </div>
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects/colleges-universities"
            className="text-primary-600 font-medium hover:underline"
          >
            View all university projects →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Athletic Facility Waterproofing Experts
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            RSI provides professional waterproofing services for tennis courts, stadiums, parking structures, and more. Contact us to discuss your project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/services/waterproofing"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Waterproofing Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
