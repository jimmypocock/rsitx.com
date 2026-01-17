"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { company, navigation } from "@/data/company";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Only use transparent header on home page
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent ? "" : "bg-white shadow-md"
    }`}>
      {/* Top Bar */}
      <div className={`transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-primary-700"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm text-white">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${company.contact.phoneRaw}`}
                className="flex items-center gap-2 hover:text-secondary-200 transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{company.contact.phone}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={`rounded-md px-4 py-1.5 font-medium transition-colors ${
                  isTransparent
                    ? "bg-white/20 hover:bg-white/30"
                    : "bg-primary-500 hover:bg-primary-400"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                {/* Logo image - swap between white and color based on transparency */}
                <div className="relative h-10 w-32">
                  <Image
                    src={isTransparent ? "/images/logo-white.svg" : "/images/logo.svg"}
                    alt={company.name}
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.main.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-[15px] font-medium rounded-md transition-colors ${
                      isTransparent
                        ? isActive(item.href)
                          ? "text-white bg-white/20"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                        : isActive(item.href)
                          ? "text-primary-600 bg-primary-50"
                          : "text-foreground hover:text-primary-600 hover:bg-primary-50"
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu - always has white background */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute left-0 top-full w-56 bg-white rounded-md shadow-lg ring-1 ring-black/5 py-2">
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.name}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:text-primary-600 hover:bg-primary-50 transition-colors"
                          >
                            {child.name}
                            <svg
                              className="w-3 h-3 ml-1"
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
                        ) : (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(child.href)
                                ? "text-primary-600 bg-primary-50"
                                : "text-foreground hover:text-primary-600 hover:bg-primary-50"
                            }`}
                          >
                            {child.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                  isTransparent
                    ? "text-white hover:bg-white/10"
                    : "text-foreground hover:text-primary-600 hover:bg-primary-50"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">
                  {mobileMenuOpen ? "Close main menu" : "Open main menu"}
                </span>
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - always has solid background */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg max-h-[calc(100vh-6.5rem)] overflow-y-auto" id="mobile-menu">
            <div className="px-4 py-3 space-y-1">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? "text-primary-600 bg-primary-50"
                        : "text-foreground hover:text-primary-600 hover:bg-primary-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.name}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 rounded-md text-sm text-foreground-muted hover:text-primary-600 hover:bg-primary-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                            <svg
                              className="w-3 h-3 ml-1"
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
                        ) : (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block px-3 py-2 rounded-md text-sm ${
                              isActive(child.href)
                                ? "text-primary-600 bg-primary-50"
                                : "text-foreground-muted hover:text-primary-600 hover:bg-primary-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
