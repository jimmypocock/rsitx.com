"use client";

import Link from "next/link";
import { company } from "@/data/company";

export function TopBar() {
  return (
    <div className="bg-primary-700 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between text-sm">
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
              className="rounded-md bg-primary-500 px-4 py-1.5 font-medium hover:bg-primary-400 transition-colors"
            >
              Report a Leak
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
