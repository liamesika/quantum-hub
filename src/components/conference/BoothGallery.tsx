"use client";

import { boothGalleryImages } from "@/config/content";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";

export function BoothGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const images = boothGalleryImages;

  if (images.length === 0) return null;

  return (
    <section className="py-14 sm:py-20">
      <div className="section-container text-center">
        <SectionHeading>Booth Gallery</SectionHeading>

        <AnimateIn delay={150}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightboxIdx(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-surface-border"
              >
                <img
                  src={src}
                  alt={`Booth photo ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-quantum-pink/5 transition-colors group-hover:bg-quantum-pink/10" />
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Lightbox */}
        {lightboxIdx !== null && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 text-3xl text-white/60 hover:text-white"
            >
              &times;
            </button>
            <img
              src={images[lightboxIdx]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 text-4xl text-white/60 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx((lightboxIdx - 1 + images.length) % images.length);
                  }}
                >
                  ‹
                </button>
                <button
                  className="absolute right-4 text-4xl text-white/60 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx((lightboxIdx + 1) % images.length);
                  }}
                >
                  ›
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
