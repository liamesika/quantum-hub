"use client";

import Image from "next/image";
import { partnersLogos } from "@/config/content";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateIn } from "@/components/AnimateIn";

export function PartnersSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-container text-center">
        <SectionHeading>Our Partners</SectionHeading>

        {partnersLogos.length > 0 ? (
          <AnimateIn delay={150}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
              {partnersLogos.map((logo) => (
                <div key={logo.name} className="transition-opacity hover:opacity-90">
                  {logo.href ? (
                    <a href={logo.href} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={140}
                        height={60}
                        className="h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-12"
                      />
                    </a>
                  ) : (
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={60}
                      className="h-10 w-auto object-contain opacity-70 sm:h-12"
                    />
                  )}
                </div>
              ))}
            </div>
          </AnimateIn>
        ) : (
          <AnimateIn delay={150}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-12 opacity-60">
              {/* Placeholder partner logos until assets arrive */}
              {[
                { name: "Taavura-Livnat Group", src: "/logos/quantum.png" },
                { name: "Hyundai Motor Group", src: "/logos/hyundai.png" },
                { name: "Maniv", src: "/logos/maniv.png" },
              ].map((p) => (
                <Image
                  key={p.name}
                  src={p.src}
                  alt={p.name}
                  width={120}
                  height={50}
                  className="h-8 w-auto object-contain sm:h-10"
                />
              ))}
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
