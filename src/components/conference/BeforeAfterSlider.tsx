"use client";

import { useState, useRef, useCallback } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateIn } from "@/components/AnimateIn";

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Placeholder images until real assets arrive
  const beforeSrc = "/images/booth-before.jpg";
  const afterSrc = "/images/booth-after.jpg";

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      updatePos(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [updatePos]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (dragging.current) updatePos(e.clientX);
    },
    [updatePos]
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <section className="py-14 sm:py-20">
      <div className="section-container text-center">
        <SectionHeading>Quantum Booth Presence</SectionHeading>
        <AnimateIn delay={100}>
          <p className="mt-4 text-text-secondary">
            Drag the slider to see the Quantum-branded booth transformation.
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div
            ref={containerRef}
            className="relative mx-auto mt-10 aspect-[16/9] max-w-3xl cursor-col-resize select-none overflow-hidden rounded-2xl border border-surface-border"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            {/* After (full background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-quantum-pink/20 to-surface-dark">
              <div className="flex h-full items-center justify-center text-sm text-text-dim">
                After — Quantum branded (asset pending)
              </div>
            </div>

            {/* Before (clipped) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-surface-dark to-[#1a1a2e]"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="flex h-full items-center justify-center text-sm text-text-dim">
                Before — Original booth (asset pending)
              </div>
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 z-10 w-0.5 bg-white/80"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-surface-dark/80 shadow-lg backdrop-blur-sm">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Before
            </div>
            <div className="absolute right-4 bottom-4 z-10 rounded-full bg-quantum-pink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              After
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
