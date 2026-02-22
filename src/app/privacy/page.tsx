import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-wide uppercase sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-6 text-sm leading-[1.8] text-text-secondary">
          <p>
            <strong className="text-text-primary">Last updated:</strong> March 2026
          </p>
          <p>
            Quantum Hub (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and
            safeguard your personal information when you visit our website or
            attend our events.
          </p>
          <h2 className="text-lg font-semibold text-text-primary">
            Information We Collect
          </h2>
          <p>
            We may collect personal information that you provide directly, such
            as your name, email address, company, phone number, and role when
            you register for events or submit forms on our website.
          </p>
          <h2 className="text-lg font-semibold text-text-primary">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to process event registrations,
            communicate with you about our events and services, and improve
            your experience. We do not sell or share your personal data with
            third parties for marketing purposes.
          </p>
          <h2 className="text-lg font-semibold text-text-primary">
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
          <h2 className="text-lg font-semibold text-text-primary">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us through our LinkedIn page or event registration channels.
          </p>
        </div>
      </div>
    </section>
  );
}
