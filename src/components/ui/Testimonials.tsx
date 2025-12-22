"use client";

import { useState, useEffect, useCallback } from "react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export function Testimonials({
  testimonials,
  autoPlay = true,
  interval = 6000,
}: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-primary-600 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-primary-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <div className="relative mt-8">
            <div
              className="overflow-hidden"
              role="region"
              aria-label="Testimonials"
              aria-live="polite"
            >
              <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              {(testimonials[current].author ||
                testimonials[current].company) && (
                <footer className="mt-6">
                  <p className="text-primary-200">
                    {testimonials[current].author && (
                      <span className="font-semibold text-white">
                        {testimonials[current].author}
                      </span>
                    )}
                    {testimonials[current].author &&
                      testimonials[current].company && (
                        <span className="mx-2">-</span>
                      )}
                    {testimonials[current].company && (
                      <span>{testimonials[current].company}</span>
                    )}
                  </p>
                </footer>
              )}
            </div>
          </div>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === current ? "bg-white" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === current ? "true" : "false"}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Single testimonial display for service pages, etc.
interface TestimonialBlockProps {
  testimonial: {
    quote: string;
    author?: string;
    company?: string;
  };
}

export function TestimonialBlock({ testimonial }: TestimonialBlockProps) {
  return (
    <blockquote className="rounded-lg bg-secondary-100 p-6 md:p-8">
      <svg
        className="h-8 w-8 text-primary-300 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-lg text-foreground italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      {(testimonial.author || testimonial.company) && (
        <footer className="mt-4">
          <p className="text-sm text-foreground-muted">
            {testimonial.author && (
              <span className="font-semibold text-foreground">
                {testimonial.author}
              </span>
            )}
            {testimonial.author && testimonial.company && (
              <span className="mx-2">-</span>
            )}
            {testimonial.company && <span>{testimonial.company}</span>}
          </p>
        </footer>
      )}
    </blockquote>
  );
}
