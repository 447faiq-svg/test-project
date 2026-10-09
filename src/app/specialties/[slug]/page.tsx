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
    title: `${specialty.headline} | InterPulse Global`,
    description: specialty.intro,
  };
}

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B1A] text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        aria-hidden
      >
        <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default async function SpecialtyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 15% 20%, rgba(0,64,122,0.08), transparent 55%), radial-gradient(ellipse 55% 60% at 90% 30%, rgba(255,107,26,0.12), transparent 50%), linear-gradient(180deg, var(--surface-elevated) 0%, var(--surface) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[900px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
            Clinical Specialty
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {specialty.headline}
          </h1>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            {specialty.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
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
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            Common Challenges in {specialty.title} Billing
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            {specialty.challenges}
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-[900px]">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            Benefits of Professional {specialty.title} Billing Services
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            {specialty.benefitsIntro}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {specialty.benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-sm font-medium text-[var(--text)]"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            How We Optimize Your {specialty.title} Billing
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            {specialty.optimize}
          </p>
          <div className="mt-10">
            <Link
              href="/#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
