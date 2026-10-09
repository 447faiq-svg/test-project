import Link from "next/link";
import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  updated: string;
  sections: LegalSection[];
  otherHref: string;
  otherLabel: string;
};

export default function LegalPage({
  title,
  updated,
  sections,
  otherHref,
  otherLabel,
}: LegalPageProps) {
  return (
    <main className="flex flex-1 flex-col bg-[var(--surface)]">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 12% 20%, rgba(0,64,122,0.08), transparent 55%), radial-gradient(ellipse 55% 60% at 90% 30%, rgba(255,107,26,0.1), transparent 50%), linear-gradient(180deg, var(--surface-elevated) 0%, var(--surface) 100%)",
          }}
        />
        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-0 opacity-[0.28]"
        />

        <div className="relative mx-auto w-full max-w-[900px] px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
            Legal
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            Last updated: {updated}
          </p>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#FF6B1A]" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/privacy"
              className={`inline-flex h-10 items-center rounded-md px-5 text-[11px] font-bold tracking-[0.08em] uppercase transition ${
                otherHref === "/terms"
                  ? "bg-[#FF6B1A] text-white"
                  : "border border-[var(--border-strong)] text-[var(--text)] hover:border-[#FF6B1A]/40 hover:text-[#FF6B1A]"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={`inline-flex h-10 items-center rounded-md px-5 text-[11px] font-bold tracking-[0.08em] uppercase transition ${
                otherHref === "/privacy"
                  ? "bg-[#FF6B1A] text-white"
                  : "border border-[var(--border-strong)] text-[var(--text)] hover:border-[#FF6B1A]/40 hover:text-[#FF6B1A]"
              }`}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[860px] space-y-4">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-6 sm:px-7 sm:py-7"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center bg-[#FF6B1A]/12 text-[12px] font-bold text-[#FF6B1A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--text)] sm:text-xl">
                    {section.title}
                  </h2>
                  <div className="mt-3 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
                    {section.body}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-[860px] flex-col items-center justify-between gap-4 border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-6 sm:flex-row sm:px-8">
          <p className="text-sm text-[var(--text-muted)]">
            Also review our{" "}
            <span className="font-semibold text-[var(--text)]">{otherLabel}</span>
            .
          </p>
          <Link
            href={otherHref}
            className="inline-flex text-xs font-semibold tracking-[0.06em] text-[#FF6B1A] uppercase transition hover:text-[#E65200]"
          >
            {otherLabel} →
          </Link>
        </div>
      </section>
    </main>
  );
}
