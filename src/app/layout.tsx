import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Quantum Hub — Autonomous Mobility Event",
    template: "%s | Quantum Hub",
  },
  description:
    "An exclusive event by Quantum Hub and Hyundai exploring the future of autonomous mobility, AI, and dual-use technologies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Quantum Hub",
    title: "Quantum Hub — Autonomous Mobility Event",
    description:
      "Join us at the Peres Center for curated conversations on autonomous mobility, innovation, and strategic partnerships.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Hub — Autonomous Mobility Event",
    description:
      "Join us at the Peres Center for curated conversations on autonomous mobility, innovation, and strategic partnerships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Ambient glow */}
        <div
          className="pointer-events-none fixed -top-[200px] -left-[100px] z-0 h-[600px] w-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(216,43,114,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none fixed right-[-100px] bottom-[20%] z-0 h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(100,40,180,0.05) 0%, transparent 60%)",
          }}
        />

        <Header />
        <main className="relative z-[1] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
