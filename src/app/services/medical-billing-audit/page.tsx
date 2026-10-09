import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medical Billing Audit | InterPulse Global",
  description:
    "Uncover revenue leakage, coding gaps, and denial patterns with InterPulse Global’s precision medical billing audit—actionable KPI insights for your practice.",
};

const heroHighlights = [
  "Charges and payment analysis",
  "Year-over-year comparisons",
  "Month-by-month breakdowns",
];

const auditScope = [
  "Summary reports organized by revenue bucket",
  "Coding accuracy reviews",
  "Compliance with CMS submission deadlines",
  "Accounts receivable tied to unresolved claims",
  "Unresolved claim denials",
  "Outstanding claim rejections",
  "Charges never submitted to payers",
  "Invalid write-offs",
  "Pending electronic remittance advices (ERAs)",
  "Claims with no payer response",
];

const auditOnboarding = [
  {
    title: "Initial Welcome & Introduction",
    body: "We start with a personalized welcome session to introduce our team, explain the engagement process, discuss your expectations, and outline how our medical billing audit specialists will support your practice.",
  },
  {
    title: "Practice Information Questionnaire",
    body: "You’ll receive a detailed onboarding questionnaire designed to collect essential information about your practice, billing operations, providers, systems, workflows, and specific audit requirements.",
  },
  {
    title: "Comprehensive Onboarding Consultation",
    body: "Our specialists conduct an in-depth onboarding meeting to review the information provided, understand your current billing processes, identify key areas of focus, and establish the objectives and scope of the audit.",
  },
  {
    title: "Customized Audit Workflows & SOPs",
    body: "Based on your practice’s operations and audit requirements, we develop customized workflows and Standard Operating Procedures (SOPs). These guidelines help establish a consistent approach to reviewing billing activities and reporting findings.",
  },
  {
    title: "Audit Launch & Go-Live",
    body: "Once the required information, access, workflows, and procedures are in place, we establish the official go-live date. At launch, InterPulse Global begins the agreed medical billing audit services and transitions into the established workflow with minimal disruption to your practice.",
  },
];

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

export default function MedicalBillingAuditPage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative min-h-[min(100svh,720px)] overflow-hidden sm:min-h-[72vh] lg:min-h-[78vh]">
        <Image
          src="/billing-audit-banner.jpg"
          alt="Healthcare team reviewing billing performance and audit findings"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(11,31,51,0.94) 0%, rgba(11,31,51,0.82) 48%, rgba(11,31,51,0.45) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 88% 18%, rgba(255,107,26,0.22), transparent 55%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{
            background: "linear-gradient(to top, var(--surface), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="hero-fade-up text-[12px] font-semibold tracking-[0.2em] text-[#FF9A55] uppercase">
            InterPulse Global · Services
          </p>
          <h1 className="hero-fade-up mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.08]">
            Medical Billing Audit
          </h1>
          <div className="hero-fade-up mt-4 h-px w-24 bg-white/50" />
          <p className="hero-fade-up-delay mt-5 max-w-2xl text-lg font-medium text-white/92 sm:text-xl sm:leading-8">
            What Does InterPulse Global&apos;s Comprehensive Billing Audit
            Include?
          </p>
          <p className="hero-fade-up-delay mt-4 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-base">
            If your practice is losing revenue to silent billing gaps,
            InterPulse Global delivers a thorough medical billing audit—led by
            specialists who focus on the KPIs that actually move collections.
          </p>
          <ul className="hero-fade-up-delay mt-8 grid max-w-xl gap-3">
            {heroHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm font-medium text-white sm:text-[15px]"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="hero-fade-up-delay mt-9 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Request Free Audit
            </a>
            <a
              href="#scope"
              className="inline-flex h-12 items-center justify-center border border-white/35 px-6 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:border-white/70 hover:bg-white/10"
            >
              See Full Scope
            </a>
          </div>
        </div>
      </section>

      <ConsultForm />

      {/* Precision audit intro */}
      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
              Precision audit
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Enhancing Your Practice With InterPulse Global&apos;s Precision
              Medical Billing Audit
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base">
              <p>
                Healthcare providers face constant pressure in revenue
                management—billing accuracy, shifting regulations, and revenue
                recovery that never quite keeps pace. A focused audit surfaces
                where money is leaking and why.
              </p>
              <p>
                Whether you run a small clinic or a multi-site practice,
                InterPulse Global understands the operational realities you face
                and delivers premium medical billing audit services. Through
                comprehensive analysis, we turn claim denials and process gaps
                into clear, actionable recovery paths.
              </p>
              <p>
                Audits are conducted by AAPC-certified medical coders who follow
                industry standards and best practices—so findings are credible,
                prioritized, and ready for your team to act on.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,107,26,0.35), transparent 55%, rgba(0,64,122,0.25))",
              }}
            />
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border)] sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[520px]">
              <Image
                src="/billing-audit-doctor.jpg"
                alt="Physician reviewing billing documentation during an audit consultation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,31,51,0.7) 0%, transparent 42%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                  Find the leaks. Fix the cycle.
                </p>
                <p className="mt-2 max-w-sm text-sm text-white/85">
                  KPI-driven audits that expose coding gaps, stalled claims, and
                  write-offs costing your practice real revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full audit scope */}
      <section
        id="scope"
        className="bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
              Audit scope
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              What Our Comprehensive Billing Audit Covers
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base">
              Every review digs into the claim lifecycle—from charge capture to
              remittance—so nothing that should have been paid is left behind.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {auditScope.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border border-[var(--border)] bg-[var(--surface-card)] px-5 py-4 transition hover:border-[#FF6B1A]/35"
              >
                <CheckIcon />
                <span className="text-sm font-medium text-[var(--text)] sm:text-[15px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit onboarding */}
      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              How InterPulse Global Starts Your Medical Billing Audit Engagement
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              At InterPulse Global, we follow a structured onboarding process to
              understand your practice, establish the appropriate audit
              framework, and ensure our team is prepared to begin reviewing your
              billing operations efficiently.
            </p>
          </div>

          <ol className="mt-10 grid gap-4">
            {auditOnboarding.map((step, index) => (
              <li
                key={step.title}
                className="border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-5 sm:px-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center bg-[#FF6B1A] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)] sm:text-[15px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Specialty billing */}
      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Medical Billing Services by Specialty
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Every healthcare specialty comes with its own coding requirements,
            documentation standards, payer policies, authorization procedures,
            and reimbursement challenges. Our specialty-focused medical billing
            services help healthcare providers simplify their revenue cycle,
            reduce claim denials, improve collections, and spend more time
            focused on patient care.
          </p>
          <a
            href="/specialties"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
          >
            Explore Specialties
          </a>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20"
        style={{
          background:
            "linear-gradient(120deg, #0B1F33 0%, #123A5C 55%, #0B1F33 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,26,0.28), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3 py-1.5">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-[#FF9A55]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path
                d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5V6l7-3z"
                strokeLinejoin="round"
              />
              <path
                d="m9 12 2 2 4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#FF9A55] uppercase">
              HIPAA Compliant
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to uncover what your billing is leaving behind?
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-8 text-white/80 sm:text-base">
            Request a complimentary medical billing audit. We&apos;ll map the
            gaps, quantify the impact, and show you a clearer path to recovery.
          </p>
          <a
            href="#consult"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-8 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
          >
            Request Free Audit
          </a>
        </div>
      </section>
    </main>
  );
}
