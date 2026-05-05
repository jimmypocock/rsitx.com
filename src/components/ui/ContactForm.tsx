"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "roofing", label: "Roofing" },
  { value: "waterproofing", label: "Waterproofing & Dampproofing" },
  { value: "restoration", label: "Restoration Services" },
  { value: "sheet-metal", label: "Sheet Metal" },
  { value: "other", label: "Other" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage("Form is not configured. Please call us directly.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New Contact Form Submission - ${formState.service || "General Inquiry"}`);
    formData.append("from_name", "RSI Website Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        trackEvent.contactFormSubmit();
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to submit form. Please try again or call us directly.");
    }
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

  if (status === "success") {
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
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-600 hover:text-green-500 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam prevention */}
      <input type="checkbox" name="botcheck" className="hidden" />

      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          <p className="font-medium">Error submitting form</p>
          <p className="text-sm mt-1">{errorMessage}</p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-foreground"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            value={formState.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-foreground"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            value={formState.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
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
            autoComplete="email"
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
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
            autoComplete="tel"
            value={formState.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-foreground"
          >
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            value={formState.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
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
          placeholder="Tell us about your project or how we can help..."
          className="mt-1 block w-full rounded-md border border-secondary-300 px-4 py-2.5 text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex justify-center items-center rounded-md bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {status === "submitting" ? (
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
