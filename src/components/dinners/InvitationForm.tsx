"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";

type FormData = {
  fullName: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export function InvitationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.company.trim()) errs.company = "Company is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) errs.phone = "Phone is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate submission — replace with actual endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-all placeholder:text-text-dim focus:bg-white/[0.05] ${
      errors[field]
        ? "border-red-500/50 focus:border-red-500"
        : "border-surface-border focus:border-quantum-pink/40"
    }`;

  return (
    <section className="py-14 sm:py-20">
      <div className="section-container text-center">
        <SectionHeading>Request an Invitation</SectionHeading>
        <AnimateIn delay={100}>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Interested in joining one of our exclusive partner dinners? Submit
            your details below.
          </p>
        </AnimateIn>

        {!isOpen && !submitted && (
          <AnimateIn delay={200}>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-quantum-pink px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(216,43,114,0.35)] transition-all hover:bg-quantum-pink-light hover:shadow-[0_8px_32px_rgba(216,43,114,0.5)] hover:-translate-y-0.5"
            >
              Request an Invitation
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </AnimateIn>
        )}

        {isOpen && !submitted && (
          <AnimateIn delay={100}>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 max-w-xl space-y-5 rounded-2xl border border-surface-border bg-white/[0.015] p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-text-dim">
                    Full Name <span className="text-quantum-pink">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass("fullName")}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-text-dim">
                    Company <span className="text-quantum-pink">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className={inputClass("company")}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-400">{errors.company}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-dim">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. CEO, VP Innovation"
                  className={inputClass("role")}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-text-dim">
                    Email <span className="text-quantum-pink">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-text-dim">
                    Phone <span className="text-quantum-pink">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+972..."
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-dim">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any additional information..."
                  className={`${inputClass("notes")} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-quantum-pink py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(216,43,114,0.35)] transition-all hover:bg-quantum-pink-light disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </AnimateIn>
        )}

        {submitted && (
          <AnimateIn>
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-surface-border bg-white/[0.015] p-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-quantum-pink/10">
                <svg
                  className="h-7 w-7 text-quantum-pink"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                Request Received
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Thank you for your interest. Our team will review your request and
                get back to you shortly.
              </p>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
