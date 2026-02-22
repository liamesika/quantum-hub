import { Metadata } from "next";
import { vipLoungeContent } from "@/config/content";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";
import { GoogleMap } from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "VIP Lounge",
  description:
    "An exclusive VIP lounge experience by Quantum Hub and Synopsys at the Smart Mobility Summit 2026.",
  openGraph: {
    title: "VIP Lounge | Quantum Hub",
    description:
      "A curated space for high-level meetings and strategic conversations.",
  },
};

export default function VipLoungePage() {
  return (
    <>
      <PageHero
        title={vipLoungeContent.title}
        subtitle={vipLoungeContent.subtitle}
        badge="Exclusive"
        backgroundImage="/images/vip-lounge.jpg"
      >
        {/* Time block */}
        <div className="inline-flex items-center gap-3 rounded-xl border border-surface-border bg-white/[0.02] px-6 py-4">
          <svg
            className="h-5 w-5 text-quantum-pink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-lg font-semibold text-text-primary">
            {vipLoungeContent.time}
          </span>
        </div>
      </PageHero>

      {/* What to Expect */}
      <section className="py-14 sm:py-20">
        <div className="section-container text-center">
          <SectionHeading>What to Expect</SectionHeading>
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            {vipLoungeContent.expectations.map((item, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="flex items-start gap-4 rounded-xl border border-surface-border bg-white/[0.015] p-5 transition-colors hover:bg-white/[0.03]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-quantum-pink/10">
                    <svg
                      className="h-4 w-4 text-quantum-pink"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <GoogleMap query="אקספו תל אביב" heading="Location" />
    </>
  );
}
