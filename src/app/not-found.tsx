import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mb-6 text-7xl font-extrabold tracking-wider text-quantum-pink/30 sm:text-9xl">
          404
        </div>
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-quantum-pink px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(216,43,114,0.35)] transition-all hover:bg-quantum-pink-light hover:shadow-[0_8px_32px_rgba(216,43,114,0.5)] hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
