"use client";

import { useState } from "react";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "roofing", label: "Roofing" },
  { value: "re-roofing", label: "Re-Roofing" },
  { value: "roof-repairs", label: "Roof Repairs" },
  { value: "waterproofing", label: "Waterproofing/Dampproofing" },
  { value: "restoration", label: "Restoration Services" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-green-800">
          Thank you for your message!
        </h3>
        <p className="mt-2 text-green-700">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-foreground"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-foreground"
        >
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formState.service}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex justify-center items-center rounded-md bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}
