import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { PartnersSection } from "@/components/home/PartnersSection";

export const metadata: Metadata = {
  title: "Quantum Hub — Autonomous Mobility Event",
  description:
    "An exclusive event by Quantum Hub and Hyundai exploring the future of autonomous mobility, AI, and dual-use technologies at the Smart Mobility Summit 2026.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
      <PartnersSection />
    </>
  );
}
