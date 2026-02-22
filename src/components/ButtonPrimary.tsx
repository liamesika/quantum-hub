import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
};

export function ButtonPrimary({
  href,
  children,
  external,
  className = "",
  variant = "primary",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? `${base} bg-quantum-pink text-white shadow-[0_4px_20px_rgba(216,43,114,0.35)] hover:bg-quantum-pink-light hover:shadow-[0_8px_32px_rgba(216,43,114,0.5)] hover:-translate-y-0.5`
      : `${base} border border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary hover:bg-white/[0.04]`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${styles} ${className}`}>
      {children}
    </Link>
  );
}
