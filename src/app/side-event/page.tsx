import { Metadata } from "next";
import Image from "next/image";
import { sideEventContent, siteConfig } from "@/config/content";
import { AnimateIn } from "@/components/AnimateIn";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { AgendaSection } from "@/components/sideevent/AgendaSection";
import { AddToCalendar } from "@/components/sideevent/AddToCalendar";
import { GoogleMap } from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Side Event — Autonomy in Motion",
  description:
    "Autonomy in Motion: from AVs to humanoids. Hosted by Quantum Hub together with Hyundai and in partnership with Maniv.",
  openGraph: {
    title: "Side Event — Autonomy in Motion | Quantum Hub",
    description:
      "Join us for an exclusive morning of insights on autonomous mobility at the Peres Center.",
  },
};

export default function SideEventPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-14">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/side-event.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-quantum-pink/[0.08]" />

        <div className="section-container relative text-center">
          <AnimateIn>
            <span className="mb-5 inline-block rounded-full bg-quantum-pink/15 px-4 py-1.5 text-xs font-semibold tracking-[0.1em] text-quantum-pink uppercase">
              Private Event
            </span>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-[0.04em] uppercase sm:text-4xl md:text-5xl lg:text-6xl">
              {sideEventContent.title}
            </h1>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
              {sideEventContent.subtitle}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Details */}
      <section className="py-14 sm:py-20">
        <div className="section-container text-center">
          {/* Partner logos row */}
          <AnimateIn>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Image
                src="/logos/quantum.png"
                alt="Quantum Hub"
                width={150}
                height={40}
                className="h-9 w-auto"
              />
              <span className="text-lg text-text-dim">&times;</span>
              <Image
                src="/logos/hyundai.png"
                alt="Hyundai CRADLE"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </AnimateIn>

          {/* Date/Time/Venue block */}
          <AnimateIn delay={100}>
            <div className="mx-auto mt-10 inline-flex flex-col items-start gap-4 rounded-2xl border border-surface-border bg-white/[0.02] p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-quantum-pink/10 border border-quantum-pink/20">
                  <span className="text-[10px] font-bold uppercase text-quantum-pink">
                    MAR
                  </span>
                  <span className="text-xl font-bold text-text-primary">17</span>
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-text-primary">
                    {sideEventContent.date}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {sideEventContent.time}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <svg
                    className="h-5 w-5 text-text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-text-primary">
                    Peres Center for Peace and Innovation
                  </div>
                  <div className="text-sm text-text-secondary">Tel Aviv</div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Join Us CTA */}
          <AnimateIn delay={200}>
            <h2 className="mt-14 text-3xl font-extrabold tracking-[0.04em] uppercase sm:text-4xl">
              Join Us
            </h2>
          </AnimateIn>
          <AnimateIn delay={300}>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Secure your spot at this exclusive side event. Space is limited.
            </p>
          </AnimateIn>
          <AnimateIn delay={400}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonPrimary href={siteConfig.lumaRsvp} external>
                RSVP on Luma
              </ButtonPrimary>
              <AddToCalendar />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Agenda */}
      <AgendaSection />

      <GoogleMap query="מרכז פרס לשלום ולחדשנות תל אביב" heading="Location" />

      {/* Maniv logo */}
      <div className="pb-10 text-center">
        <Image
          src="/logos/maniv.png"
          alt="Maniv"
          width={80}
          height={30}
          className="mx-auto h-6 w-auto opacity-40"
        />
      </div>
    </>
  );
}
