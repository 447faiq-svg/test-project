import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-Powered Medical Billing — Coming Soon | InterPulse Global",
  description:
    "InterPulse Global’s upcoming AI Billing solution will use intelligent automation to streamline billing workflows, reduce errors, and help accelerate reimbursement.",
};

export default function AiAgentsPage() {
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
        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-0 opacity-[0.28]"
        />

        <div className="relative mx-auto w-full max-w-[900px] px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <span className="inline-flex items-center rounded-md bg-[#FF6B1A]/12 px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-[#FF6B1A] uppercase">
            Coming Soon
          </span>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            AI-Powered Medical Billing — Coming Soon
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            The future of medical billing is here. InterPulse Global&apos;s
            upcoming AI Billing solution will use intelligent automation to
            streamline billing workflows, identify potential claim issues,
            reduce errors, and help accelerate reimbursement. Designed to work
            alongside your existing RCM processes, our AI-powered technology
            will help practices improve efficiency, reduce administrative
            workload, and optimize revenue—so your team can spend more time
            focusing on what matters most: patient care.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#consult"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </Link>
            <Link
              href="/#solutions"
              className="inline-flex h-12 items-center justify-center border border-[var(--border-strong)] px-6 text-[12px] font-semibold tracking-[0.06em] text-[var(--text)] uppercase transition hover:border-[#FF6B1A]/50 hover:text-[#FF6B1A]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-elevated)] px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto grid w-full max-w-[1000px] gap-4 sm:grid-cols-3">
          {[
            {
              title: "Smarter workflows",
              body: "Intelligent automation that supports claim preparation, review, and follow-up.",
            },
            {
              title: "Fewer errors",
              body: "Identify potential claim issues earlier to reduce denials and rework.",
            },
            {
              title: "Faster reimbursement",
              body: "Help accelerate payment cycles while your team stays focused on care.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="border border-[var(--border)] bg-[var(--surface)] px-5 py-6"
            >
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text)]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
