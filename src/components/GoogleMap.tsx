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
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(query)}&navigate=yes`;

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
          <div className="mt-5 flex items-center justify-center gap-4">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              Google Maps
            </a>
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.54 6.63c.97 2.17.97 4.57 0 6.74-.48 1.07-1.18 2.03-2.06 2.81a8.16 8.16 0 0 1-3.08 1.82c-.24.08-.42.27-.48.52-.18.66-.42 1.3-.72 1.91-.14.28-.41.47-.72.47-.08 0-.16-.01-.24-.04a.77.77 0 0 1-.52-.72c-.01-.28.04-.56.14-.82.14-.38.31-.75.5-1.1-1.67.03-3.32-.38-4.76-1.18a8.67 8.67 0 0 1-3.24-3.18c-.97-1.52-1.42-3.29-1.3-5.07.12-1.78.81-3.48 1.97-4.86A8.52 8.52 0 0 1 10.72 2c1.73-.38 3.53-.19 5.14.55a8.56 8.56 0 0 1 3.62 3.08c.4.6.74 1.25 1.02 1.93l.04.07zM8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-6.26 3.97c.18.12.41.08.53-.1a4.01 4.01 0 0 0 .73-2.37.37.37 0 0 1 .75 0c0 .5.1 1 .28 1.46.26.62.7 1.15 1.26 1.52.18.12.42.07.54-.11a.38.38 0 0 0-.11-.53 2.68 2.68 0 0 1-.84-1.02 3.1 3.1 0 0 1-.19-.57 3.82 3.82 0 0 1 .01-1.68.37.37 0 0 0-.28-.45.37.37 0 0 0-.45.28 4.45 4.45 0 0 0-.07.9c-.04.55-.2 1.09-.49 1.56a.38.38 0 0 0 .1.53l.23.08z" />
              </svg>
              Waze
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
