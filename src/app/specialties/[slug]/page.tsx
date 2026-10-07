import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSpecialty, specialties } from "@/data/specialties";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return specialties.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) return { title: "Specialty | InterPulse Global" };
  return {
    title: `${specialty.title} Billing | InterPulse Global`,
    description: specialty.summary,
  };
}

export default async function SpecialtyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();

  return (
    <section className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
        Clinical Specialty
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--text)]">
        {specialty.title}
      </h1>
      <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
        {specialty.summary}
      </p>
      <p className="mt-5 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
        InterPulse Global provides specialty-aware medical billing and revenue
        cycle support for {specialty.title.toLowerCase()} practices—covering
        charge capture, coding accuracy, claim submission, denial follow-up, and
        transparent reporting tailored to your payer mix.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/#consult"
          className="inline-flex h-12 items-center justify-center rounded-md bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
        >
          Get Consultation
        </Link>
        <Link
          href="/specialties"
          className="inline-flex h-12 items-center justify-center border border-[var(--border-strong)] px-6 text-[12px] font-semibold tracking-[0.06em] text-[var(--text)] uppercase transition hover:border-[#FF6B1A]/50 hover:text-[#FF6B1A]"
        >
          All Specialties
        </Link>
      </div>
    </section>
  );
}
