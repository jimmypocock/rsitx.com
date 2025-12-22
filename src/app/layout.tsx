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

export const metadata: Metadata = {
  metadataBase: new URL("https://rsitx.com"),
  title: {
    default: `${company.name} | Commercial Roofing & Waterproofing in Houston`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "commercial roofing",
    "waterproofing",
    "restoration services",
    "Houston roofing contractor",
    "roof repairs",
    "building restoration",
    "Southeast Texas",
    "RSI",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rsitx.com",
    siteName: company.name,
    title: `${company.name} | Commercial Roofing & Waterproofing`,
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Commercial Roofing & Waterproofing`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
