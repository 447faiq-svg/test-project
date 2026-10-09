import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medical Billing and Coding Services | InterPulse Global",
  description:
    "End-to-end medical billing and coding support—eligibility verification, claims, payment posting, denial management, AR follow-up, and specialty coding.",
};

const highlights = [
  "Insurance eligibility verification",
  "Charge entry & clean claims",
  "Denial management & appeals",
  "ICD-10, CPT & HCPCS coding",
];

const billingSupport = [
  {
    title: "Insurance Eligibility & Benefits Verification",
    body: "Verify patient coverage, eligibility, benefits, and insurance details before services are provided.",
  },
  {
    title: "Charge Entry & Claims Submission",
    body: "Accurately enter charges and submit clean claims to the appropriate insurance payers.",
  },
  {
    title: "Payment Posting & Account Reconciliation",
    body: "Record insurance and patient payments accurately while reconciling accounts to maintain accurate financial records.",
  },
  {
    title: "Denial Management & Appeals",
    body: "Identify the causes of claim denials, take corrective action, and submit appropriate appeals to help recover missed revenue.",
  },
  {
    title: "Accounts Receivable Follow-Up",
    body: "Monitor outstanding balances and conduct timely payer follow-up to reduce aging accounts receivable.",
  },
  {
    title: "Patient Billing & Collections Support",
    body: "Generate patient statements and support the collection process for outstanding patient balances.",
  },
];

const codingServices = [
  {
    title: "ICD-10, CPT & HCPCS Coding",
    body: "Coding performed by qualified and certified medical coding professionals based on clinical documentation and applicable coding guidelines.",
  },
  {
    title: "Medical Record & Documentation Audits",
    body: "Review clinical documentation and coding practices to identify discrepancies, potential compliance concerns, and opportunities for improvement.",
  },
  {
    title: "Risk Adjustment Coding",
    body: "Support accurate identification and reporting of relevant risk-adjustment diagnoses based on supporting documentation.",
  },
  {
    title: "Specialty-Specific Coding Expertise",
    body: "Coding support tailored to the requirements and workflows of different medical specialties.",
  },
  {
    title: "Coding Updates & Compliance Review",
    body: "Stay aligned with coding changes, regulatory requirements, and applicable guidelines through ongoing coding updates and compliance checks.",
  },
];

const onboardingSteps = [
  {
    title: "Introduction & Welcome Session",
    body: "We begin with a personalized welcome call to introduce your dedicated support team, explain the onboarding process, and discuss how InterPulse Global will support your practice’s billing and coding operations.",
  },
  {
    title: "Practice Information & Onboarding Questionnaire",
    body: "You’ll receive a structured onboarding questionnaire designed to collect the essential information we need about your practice, providers, systems, billing processes, and operational requirements.",
  },
  {
    title: "Detailed Onboarding Consultation",
    body: "Our specialists conduct an in-depth onboarding meeting to review your practice’s requirements, understand your current workflows, identify key priorities, and answer any questions before implementation begins.",
  },
  {
    title: "Customized Workflow & SOP Development",
    body: "Using the information gathered during onboarding, we develop customized Standard Operating Procedures (SOPs) based on your practice’s specific workflows, billing requirements, coding processes, and operational preferences.",
  },
  {
    title: "Go-Live & Service Transition",
    body: "Once preparation and workflow setup are complete, we establish your official go-live date. On launch day, the agreed billing and coding operations transition to the InterPulse Global team, with the goal of maintaining continuity and minimizing disruption to your practice.",
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B1A] text-white ${className}`}
    >
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

export default function MedicalBillingCodingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
        <Image
          src="/billing-coding-banner.jpg"
          alt="Medical billing and coding specialist reviewing claims"
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
              "linear-gradient(105deg, rgba(11,31,51,0.94) 0%, rgba(11,31,51,0.82) 48%, rgba(11,31,51,0.5) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 55% at 85% 25%, rgba(255,107,26,0.2), transparent 55%)",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-[#FF9A55] uppercase">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
            Comprehensive Medical Billing &amp; Coding Solutions by InterPulse
            Global
          </h1>
          <div className="mt-5 h-px w-24 bg-white/50" />
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            At InterPulse Global, we provide end-to-end medical billing and
            coding support designed to simplify the revenue cycle and help
            healthcare providers stay focused on delivering quality patient care.
            From verifying insurance coverage and submitting claims to posting
            payments and resolving denials, our team supports each stage of the
            billing process.
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
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
            <a
              href="/services/medical-billing-audit"
              className="inline-flex h-12 items-center justify-center border border-white/35 px-6 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:border-white/70 hover:bg-white/10"
            >
              Request Free Audit
            </a>
          </div>
        </div>
      </section>

      <ConsultForm />

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Medical Billing and Coding Services
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Our services are tailored to meet the needs of healthcare practices
            of different sizes and specialties throughout the United States.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              End-to-End Medical Billing Support
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              Our medical billing services are designed to help practices
              maintain accurate claims, improve collections, and keep their
              revenue cycle moving efficiently.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {billingSupport.map((item) => (
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

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Professional Medical Coding Services
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              Accurate coding plays an important role in compliant billing and
              appropriate reimbursement. InterPulse Global provides coding
              support to help practices maintain accurate and consistent coding
              practices.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {codingServices.map((item) => (
              <li
                key={item.title}
                className="border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-5"
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

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              How InterPulse Global Onboards Your Medical Billing &amp; Coding
              Services
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              We make the transition to outsourced medical billing and coding
              straightforward, organized, and transparent. Our onboarding process
              is designed to understand your practice, establish the right
              workflows, and prepare our team for a smooth launch.
            </p>
          </div>

          <ol className="mt-10 grid gap-4">
            {onboardingSteps.map((step, index) => (
              <li
                key={step.title}
                className="border border-[var(--border)] bg-[var(--surface)] px-5 py-5 sm:px-6"
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

          <div className="mt-12 text-center">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
