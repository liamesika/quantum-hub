"use client";

import { useState } from "react";
import { agendaMain, agendaAlternate } from "@/config/content";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimateIn } from "@/components/AnimateIn";

type AgendaItem = {
  time: string;
  title: string;
  speaker?: string;
  role?: string;
};

function AgendaRow({ item, index }: { item: AgendaItem; index: number }) {
  const isBreak =
    item.title.toLowerCase().includes("breakfast") ||
    item.title.toLowerCase().includes("lunch") ||
    item.title.toLowerCase().includes("host link");

  return (
    <AnimateIn delay={index * 40}>
      <div
        className={`flex flex-col items-center border-b border-white/[0.04] py-5 ${
          isBreak ? "opacity-60" : ""
        }`}
      >
        <div className="text-sm font-mono font-medium text-quantum-pink">
          {item.time}
        </div>
        <div
          className={`mt-1.5 text-sm font-medium sm:text-base ${
            isBreak ? "text-text-dim" : "text-text-primary"
          }`}
        >
          {item.title}
        </div>
        {item.speaker && (
          <div className="mt-1 text-sm text-text-secondary">
            {item.speaker}
          </div>
        )}
        {item.role && (
          <div className="mt-0.5 text-xs text-text-dim">{item.role}</div>
        )}
      </div>
    </AnimateIn>
  );
}

export function AgendaSection() {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <section className="py-14 sm:py-20">
      <div className="section-container text-center">
        <SectionHeading>Event Agenda</SectionHeading>
        <AnimateIn delay={100}>
          <p className="mt-4 text-text-secondary">
            A morning of insights, panels, and strategic conversations.
          </p>
        </AnimateIn>

        {/* Main agenda */}
        <div className="mx-auto mt-12 max-w-3xl">
          {agendaMain.map((item, i) => (
            <AgendaRow key={`${item.time}-${i}`} item={item} index={i} />
          ))}
        </div>

        {/* Alternate block toggle */}
        <div className="mx-auto mt-10 max-w-3xl">
          <button
            onClick={() => setShowAlternate(!showAlternate)}
            className="mx-auto flex items-center gap-2 text-sm font-medium text-text-dim transition-colors hover:text-text-secondary"
          >
            <svg
              className={`h-4 w-4 transition-transform ${
                showAlternate ? "rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
            Alternate agenda block
          </button>

          {showAlternate && (
            <div className="mt-4 rounded-xl border border-white/[0.04] bg-white/[0.01] p-6">
              <p className="mb-4 text-xs font-medium tracking-wider text-text-dim uppercase">
                Alternate scheduling
              </p>
              {agendaAlternate.map((item, i) => (
                <AgendaRow key={`alt-${item.time}-${i}`} item={item} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
