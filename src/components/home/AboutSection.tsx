"use client";

import Image from "next/image";
import { aboutContent } from "@/config/content";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateIn } from "@/components/AnimateIn";

export function AboutSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-container text-center">
        <SectionHeading>{aboutContent.heading}</SectionHeading>
        <AnimateIn delay={150}>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-[1.8] text-text-secondary sm:text-lg">
            {aboutContent.text}
          </p>
        </AnimateIn>

        {/* Quantum Playground image */}
        <AnimateIn delay={250}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-white/[0.06]">
            <Image
              src="/images/hero-bg.jpg"
              alt="Quantum Playground — End-to-end value chain"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
