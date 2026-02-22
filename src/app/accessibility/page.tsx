import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
};

export default function AccessibilityPage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <div className="section-container max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-wide uppercase sm:text-4xl">
          Accessibility Statement
        </h1>
        <div className="mt-10 space-y-6 text-sm leading-[1.8] text-text-secondary">
          <p>
            <strong className="text-text-primary">Last updated:</strong> March 2026
          </p>
          <p>
            Quantum Hub is committed to ensuring digital accessibility for
            people with disabilities. We continuously improve the user
            experience for everyone and apply the relevant accessibility
            standards.
          </p>
          <h2 className="text-lg font-semibold text-text-primary">
            Measures Taken
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Semantic HTML structure with appropriate heading hierarchy</li>
            <li>
              Sufficient color contrast ratios for text readability
            </li>
            <li>Keyboard navigation support throughout the site</li>
            <li>Alt text for all meaningful images</li>
            <li>ARIA labels for interactive elements</li>
            <li>Responsive design that adapts to different screen sizes</li>
          </ul>
          <h2 className="text-lg font-semibold text-text-primary">
            Feedback
          </h2>
          <p>
            We welcome your feedback on the accessibility of this website. If
            you encounter any accessibility barriers, please contact us through
            our LinkedIn page. We will try to respond within a reasonable
            timeframe.
          </p>
        </div>
      </div>
    </section>
  );
}
