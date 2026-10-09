import type { Metadata } from "next";
import Link from "next/link";
import { specialties } from "@/data/specialties";

export const metadata: Metadata = {
  title: "Clinical Specialties | InterPulse Global",
  description:
    "Explore InterPulse Global specialty-aware medical billing across 30+ clinical specialties.",
};

export default function SpecialtiesPage() {
  return (
    <section className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
        Specialties
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--text)]">
        Specialty-Tuned Reimbursement Logic
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
        Select a specialty to learn how InterPulse Global supports coding,
        claims, and collections for that clinical area.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((item) => (
          <Link
            key={item.slug}
            href={`/specialties/${item.slug}`}
            className="border border-[var(--border)] bg-[var(--surface-card)] px-5 py-5 transition hover:border-[#FF6B1A]/40"
          >
            <h2 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text)]">
              {item.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--text-muted)]">
              {item.summary}
            </p>
            <span className="mt-4 inline-flex text-xs font-semibold tracking-[0.06em] text-[#FF6B1A] uppercase">
              Learn More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
