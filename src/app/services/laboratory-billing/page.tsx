import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Laboratory Billing Services | InterPulse Global",
  description:
    "Laboratory billing services for clinical, diagnostic, molecular, and pathology labs—coding review, claim submission, denial management, payment posting, and AR reporting.",
};

const highlights = [
  "Laboratory claim submission and tracking",
  "Denial review and payer follow-up",
  "Payment posting and reconciliation",
  "Accounts receivable reporting",
  "LIS and EHR billing workflows",
  "Payer-specific billing requirements",
];

const labChallenges = [
  {
    title: "Complex Laboratory Test Coding",
    body: "Laboratories need experienced billing professionals who can keep up with ongoing CPT and HCPCS code changes, particularly for molecular and clinical laboratory testing.",
  },
  {
    title: "Prior Authorization Requirements",
    body: "Expensive molecular and genetic tests may require authorization before services are performed. Timely approvals can help reduce denials and protect laboratory revenue.",
  },
  {
    title: "Specialized LIS Integration",
    body: "Connecting laboratory information systems with billing workflows helps ensure accurate data transfer, minimize claim errors, and support faster reimbursement.",
  },
  {
    title: "CLIA & Regulatory Compliance",
    body: "Specialized laboratory billing teams help laboratories follow applicable CLIA requirements, payer policies, and evolving billing and compliance standards.",
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

export default function LaboratoryBillingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
        <Image
          src="/laboratory-billing-banner.jpg"
          alt="Laboratory technicians working with diagnostic testing equipment"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(11,31,51,0.92) 0%, rgba(11,31,51,0.78) 45%, rgba(11,31,51,0.45) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 90% 20%, rgba(255,107,26,0.18), transparent 55%)",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-[#FF9A55] uppercase">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Laboratory Billing Services for Clinical and Diagnostic Labs
          </h1>
          <p className="mt-3 max-w-2xl text-base font-medium text-white/90 sm:text-lg">
            Billing Support for Laboratory Claims, Coding and Reimbursement
          </p>
          <div className="mt-5 h-px w-24 bg-white/50" />
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            InterPulse Global supports laboratory billing workflows for clinical,
            diagnostic, molecular and pathology labs. Our team assists with
            coding review, claim submission, payer follow-up, denial management,
            payment posting, accounts receivable and billing reports.
          </p>

          <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm font-medium text-white"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      <ConsultForm />

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Laboratory Billing Built for Complexity
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Laboratory billing requires careful attention to test coding, medical
            necessity, payer policies, and clean claim submission. InterPulse
            Global helps labs and diagnostic providers improve billing accuracy,
            reduce avoidable denials, and strengthen collections across high-
            volume testing workflows.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              What Lab Billing Challenges Do Laboratories Across the United
              States Face?
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {labChallenges.map((item) => (
              <li
                key={item.title}
                className="border border-[var(--border)] bg-[var(--surface)] px-5 py-5"
              >
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
