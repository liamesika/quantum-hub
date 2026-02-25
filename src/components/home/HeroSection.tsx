"use client";

import { heroContent } from "@/config/content";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { AnimateIn } from "@/components/AnimateIn";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-14">

      {/* Background image — mobile portrait / desktop landscape */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: "url(/images/hero-bg-mobile.jpg)" }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center sm:block"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-quantum-pink/[0.06]" />

      <div className="section-container relative text-center">
        <AnimateIn>
          <span className="mb-5 inline-block rounded-full bg-quantum-pink/15 px-4 py-1.5 text-xs font-semibold tracking-[0.1em] text-quantum-pink uppercase">
            Smart Mobility Summit 2026
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[0.04em] uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            {heroContent.title}
          </h1>
        </AnimateIn>

        <div className="mx-auto mt-8 max-w-2xl space-y-5">
          {heroContent.body.map((para, i) => (
            <AnimateIn key={i} delay={200 + i * 80}>
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                {para}
              </p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400}>
          <div className="mx-auto mt-6 inline-flex rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                <svg className="h-5 w-5 shrink-0 text-quantum-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {heroContent.date}
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                <svg className="h-5 w-5 shrink-0 text-quantum-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {heroContent.venue}
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={500}>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary">
            {heroContent.closingText}
          </p>
        </AnimateIn>

        <AnimateIn delay={600}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonPrimary
              href={heroContent.ctaSecondary.href}
              variant="secondary"
            >
              {heroContent.ctaSecondary.label}
            </ButtonPrimary>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
