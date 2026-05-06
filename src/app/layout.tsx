import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header, Footer } from "@/components/layout";
import { company } from "@/data/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://rsitx.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} | Commercial Roofing & Waterproofing in Houston`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "commercial roofing Houston",
    "Houston roofing contractor",
    "commercial waterproofing Houston",
    "Houston sheet metal contractor",
    "concrete masonry restoration Houston",
    "infrared leak detection",
    "Southeast Texas roofing",
    "Gulf Coast waterproofing",
    "RSI",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: company.name,
    title: `${company.name} | Commercial Roofing & Waterproofing in Houston`,
    description: company.description,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: `${company.name} — commercial roofing and waterproofing in Houston`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Commercial Roofing & Waterproofing in Houston`,
    description: company.description,
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// LocalBusiness (RoofingContractor) structured data — emitted on every page so
// Google has a consistent business entity to associate with the site.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${SITE_URL}/#business`,
  name: company.name,
  alternateName: company.shortName,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.svg`,
  image: `${SITE_URL}/images/og-image.webp`,
  telephone: `+1-${company.contact.phoneRaw.slice(0, 3)}-${company.contact.phoneRaw.slice(3, 6)}-${company.contact.phoneRaw.slice(6)}`,
  email: company.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.contact.address.street,
    addressLocality: company.contact.address.city,
    addressRegion: company.contact.address.state,
    postalCode: company.contact.address.zip,
    addressCountry: "US",
  },
  // Approximate coordinates for 9810 Fairbanks N. Houston Rd. Verify in Google
  // Search Console / GBP if precision matters.
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.913,
    longitude: -95.511,
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Galveston" },
    { "@type": "AdministrativeArea", name: "Southeast Texas" },
    { "@type": "AdministrativeArea", name: "Gulf Coast" },
  ],
  foundingDate: "1932",
  description:
    "Commercial roofing, waterproofing, sheet metal, and building restoration in Houston and Southeast Texas. Nearly a century of Gulf Coast expertise.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Commercial Roofing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Commercial Waterproofing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Architectural Sheet Metal" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Concrete & Masonry Restoration",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
