import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerLinks, navLinks } from "@/config/content";

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-6 py-16 text-center">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <Image
              src="/logos/quantum.png"
              alt="Quantum Hub"
              width={140}
              height={36}
              className="mb-4 h-8 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
              Facilitating collaborations between industry leaders and startups
              through our end-to-end value chain approach.
            </p>
            {/* LinkedIn */}
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-quantum-pink"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-text-dim uppercase">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-text-dim uppercase">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/[0.06] pt-6 text-center text-xs text-text-dim">
          <p>&copy; {new Date().getFullYear()} Quantum Hub. All rights reserved.</p>
          <a
            href="https://liamesika.co.il"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-quantum-pink"
          >
            built by
            <Image
              src="/logos/lmelevix.png"
              alt="LMElevix"
              width={100}
              height={30}
              className="h-5 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
