"use client";

import Link from "next/link";
import { experienceCards } from "@/config/content";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateIn } from "@/components/AnimateIn";

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-14 sm:py-20">
      <div className="section-container text-center">
        <SectionHeading>Experiences</SectionHeading>
        <p className="mt-4 text-text-secondary">
          Explore what we have planned at 17-18.3
        </p>

        <div className="mt-12 overflow-hidden">
          {experienceCards.map((card, i) => (
            <AnimateIn key={card.href} delay={i * 100}>
              <Link
                href={card.href}
                className="group relative block overflow-hidden border-b border-white/[0.04] transition-all duration-500 last:border-b-0"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                {/* Pink overlay */}
                <div className="absolute inset-0 bg-quantum-pink/[0.15] transition-all duration-500 group-hover:bg-quantum-pink/[0.25]" />

                {/* Dark gradient for text readability */}
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative px-10 py-16 sm:px-14 sm:py-20 text-center">
                  <h3 className="text-2xl font-bold tracking-wide text-white sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-white/70 sm:text-base">
                    {card.subtitle}
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
