import { Metadata } from "next";
import { privateDinnersContent } from "@/config/content";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { GoogleMap } from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Partners Private Dinners",
  description:
    "Intimate, invite-only dinners connecting global partners with Israeli innovation and technology.",
  openGraph: {
    title: "Partners Private Dinners | Quantum Hub",
    description:
      "Intimate gatherings connecting senior executives with hand-selected Israeli startups and founders.",
  },
};

export default function PartnersDinnersPage() {
  return (
    <>
      <PageHero
        title={privateDinnersContent.title}
        badge="Invite Only"
        backgroundImage="/images/private-dinners.jpg"
      />

      <section className="py-14 sm:py-20">
        <div className="section-container text-center">
          <AnimateIn>
            <p className="mx-auto max-w-3xl text-base leading-[1.8] text-text-secondary sm:text-lg">
              {privateDinnersContent.body}
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="mt-8 text-sm font-medium text-quantum-pink">
              More details soon...
            </p>
          </AnimateIn>
        </div>
      </section>

      <GoogleMap query="אקספו תל אביב" heading="Location" />
    </>
  );
}
