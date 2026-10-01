import Link from "next/link";

export default function CareersPage() {
  return (
    <section className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
        Company
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--text)]">
        Careers
      </h1>
      <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
        Join InterPulse Global and help clinical practices turn claims into
        dependable cash flow. Open roles will be listed here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex text-sm font-medium text-[#FF6B1A] hover:underline"
      >
        ← Back to Home
      </Link>
    </section>
  );
}
