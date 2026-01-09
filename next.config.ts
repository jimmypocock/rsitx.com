import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      // Old URL structure used underscores - redirect to new hyphenated URLs
      {
        source: "/about_us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact_us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/green_initiative",
        destination: "/green-initiative",
        permanent: true,
      },
      // Old service URLs - consolidated under main roofing service
      {
        source: "/services/roof_repairs",
        destination: "/services/roofing",
        permanent: true,
      },
      {
        source: "/services/re-roofing",
        destination: "/services/roofing",
        permanent: true,
      },
      // Restoration services consolidated into main services page
      {
        source: "/services/restoration_services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/restoration-services",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
