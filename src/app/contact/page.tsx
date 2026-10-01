import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
        Company
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--text)]">
        Contact Us
      </h1>
      <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
        Reach the InterPulse Global team for consultations, partnerships, or
        support. We&apos;ll respond within one business day.
      </p>
      <Link
        href="/#consult"
        className="mt-8 inline-flex text-sm font-medium text-[#FF6B1A] hover:underline"
      >
        Request a consultation →
      </Link>
    </section>
  );
}
