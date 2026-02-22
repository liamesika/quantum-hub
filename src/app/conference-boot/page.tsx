import { Metadata } from "next";
import { conferenceBootContent } from "@/config/content";
import { PageHero } from "@/components/PageHero";
import { AnimateIn } from "@/components/AnimateIn";
import { BoothGallery } from "@/components/conference/BoothGallery";
import { GoogleMap } from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Conference Booth",
  description: conferenceBootContent.body,
  openGraph: {
    title: "Conference Booth | Quantum Hub",
    description: conferenceBootContent.body,
  },
};

export default function ConferenceBootPage() {
  return (
    <>
      <PageHero
        title={conferenceBootContent.title}
        badge="Smart Mobility Summit 2026"
        backgroundImage="/images/conference-booth.jpg"
      />

      {/* Description */}
      <section className="py-14 sm:py-20">
        <div className="section-container text-center">
          <AnimateIn>
            <p className="mx-auto max-w-3xl text-base leading-[1.8] text-text-secondary sm:text-lg">
              {conferenceBootContent.body}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Booth Gallery */}
      <BoothGallery />

      <GoogleMap query="אקספו תל אביב" heading="Location" />
    </>
  );
}
