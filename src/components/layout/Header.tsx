"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navigation } from "@/data/company";
import { TopBar } from "./TopBar";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <nav className="bg-white shadow-md" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-600">
                  {company.shortName}
                </span>
                <span className="hidden sm:inline text-sm text-foreground-muted">
                  Restoration Services
                </span>
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
                    className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
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

                  {/* Dropdown Menu */}
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
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary-600 hover:bg-primary-50 transition-colors"
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t" id="mobile-menu">
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
