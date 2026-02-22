"use client";

import { AnimateIn } from "./AnimateIn";

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
};

export function PageHero({ title, subtitle, badge, backgroundImage, children }: Props) {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-14">
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-quantum-pink/[0.08]" />
        </>
      ) : (
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(216,43,114,0.08) 0%, transparent 60%)",
          }}
        />
      )}

      <div className="section-container relative text-center">
        {badge && (
          <AnimateIn>
            <span className="mb-5 inline-block rounded-full bg-quantum-pink/15 px-4 py-1.5 text-xs font-semibold tracking-[0.1em] text-quantum-pink uppercase">
              {badge}
            </span>
          </AnimateIn>
        )}

        <AnimateIn delay={100}>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-[0.04em] uppercase sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </AnimateIn>

        {subtitle && (
          <AnimateIn delay={200}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              {subtitle}
            </p>
          </AnimateIn>
        )}

        {children && (
          <AnimateIn delay={300}>
            <div className="mt-8">{children}</div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
