"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  return (
    <div className="inline-block">
      <h2
        ref={ref}
        className={`text-3xl font-extrabold tracking-[0.06em] uppercase sm:text-4xl md:text-5xl ${
          isInView ? "animate-fade-up" : "opacity-0"
        } ${className}`}
      >
        {children}
      </h2>
      <div
        className={`mx-auto mt-3 h-[3px] w-[30px] rounded-full transition-all duration-700 ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, #D82B72, #a855f7, #3b82f6)",
        }}
      />
    </div>
  );
}
