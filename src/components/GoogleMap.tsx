"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";

export function GoogleMap({
  query,
  heading = "Location",
}: {
  query: string;
  heading?: string;
}) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-14 sm:py-20">
      <div className="section-container px-[50px] text-center">
        <SectionHeading>{heading}</SectionHeading>
        <AnimateIn delay={100}>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-surface-border">
            <iframe
              src={src}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map — ${query}`}
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
