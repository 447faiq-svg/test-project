import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MIPS Reporting | InterPulse Global",
  description:
    "MIPS reporting support for eligible clinicians—eligibility review, measure selection, performance monitoring, CMS submission preparation, and MVP guidance.",
};

const highlights = [
  "Eligibility & special status review",
  "Traditional MIPS & MVP evaluation",
  "Year-round performance monitoring",
  "CMS reporting preparation",
];

const supportIncludes = [
  {
    title: "Eligibility & Special Status Review",
    body: "Determine whether clinicians qualify for MIPS participation and identify applicable special statuses or exclusions.",
  },
  {
    title: "Traditional MIPS & MVP Evaluation",
    body: "Review Traditional MIPS requirements and applicable MIPS Value Pathway (MVP) options to determine the appropriate reporting approach.",
  },
  {
    title: "Performance Monitoring Throughout the Year",
    body: "Track selected measures, documentation, and performance data during the applicable performance period.",
  },
  {
    title: "CMS Reporting Preparation",
    body: "Organize and review reporting information and prepare the required data for submission through applicable CMS reporting pathways.",
  },
];

const journeySteps = [
  {
    title: "Determine Clinician Eligibility",
    body: "We begin by reviewing the clinician’s MIPS participation status based on applicable CMS requirements, including Medicare billing, beneficiary volume, clinician type, and other eligibility factors. Where applicable, we use CMS QPP eligibility resources to help confirm participation requirements.",
  },
  {
    title: "Select Appropriate Performance Measures",
    body: "Our team reviews the available measures and helps identify options relevant to the provider’s specialty, practice operations, and reporting pathway. The goal is to select measures that are applicable to the practice while supporting strong performance and accurate reporting.",
  },
  {
    title: "Collect & Monitor Performance Data",
    body: "Throughout the performance year, we help organize and monitor relevant information from available EHR, billing, and clinical systems. Ongoing tracking can help identify documentation gaps or performance concerns early enough for practices to take corrective action before submission.",
  },
  {
    title: "Validate Reporting Information",
    body: "Before submission, our team reviews the available reporting data for completeness, accuracy, and alignment with applicable CMS requirements. This review helps reduce avoidable reporting errors and supports more reliable submission data.",
  },
  {
    title: "Prepare & Submit MIPS Data",
    body: "InterPulse Global assists with preparing the required information for submission through applicable CMS-approved reporting pathways. Our team focuses on ensuring that reporting data is properly organized and submitted within the applicable reporting requirements and deadlines.",
  },
  {
    title: "Review Results & Plan for the Next Cycle",
    body: "Once CMS processes the submitted information and issues the clinician’s final MIPS score, we can review the results to identify strengths, potential gaps, and opportunities for improvement. Using those findings, practices can develop a more informed strategy for the following MIPS performance year and work toward stronger future performance.",
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

export default function MipsReportingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
        <Image
          src="/rcm-banner.jpg"
          alt="MIPS reporting and quality performance support"
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
            MIPS Reporting Support for Healthcare Practices
          </h1>
          <div className="mt-5 h-px w-24 bg-white/50" />
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            InterPulse Global helps eligible clinicians navigate the MIPS
            reporting process with structured support throughout the performance
            year. From determining MIPS eligibility and selecting appropriate
            measures to monitoring performance data and preparing CMS
            submissions, our team helps practices stay organized and aligned with
            applicable program requirements.
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
            MIPS Reporting Support
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Payment adjustments are based on the clinician&apos;s final MIPS
            score and the rules established by CMS.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Our MIPS Reporting Support Includes
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {supportIncludes.map((item) => (
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            2026 MIPS Performance Year Requirements
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            For the 2026 performance year, eligible clinicians should verify
            their participation status, determine the appropriate reporting
            pathway, and monitor performance throughout the year.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            The MIPS final score ranges from 0 to 100 points, while the
            performance threshold remains 75 points through the 2028 performance
            year.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Because requirements can vary by clinician and reporting pathway,
            practices should review their specific CMS requirements before
            beginning the reporting process.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Quality Reporting Requirements for 2026
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Under Traditional MIPS, the Quality performance category generally
            follows a 12-month performance period from January 1 through December
            31, 2026.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Clinicians generally need to report at least 75% of eligible cases
            for each selected quality measure, subject to the individual measure
            specifications and applicable CMS requirements.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Accurate documentation and consistent data tracking throughout the
            performance period are important for maintaining complete and
            reliable reporting data.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            MIPS Value Pathways (MVP) Registration
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Clinicians intending to report through a MIPS Value Pathway for the
            2026 performance year should review the requirements associated with
            the applicable MVP and complete registration during the designated
            CMS registration period.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            For the 2026 performance year, the MVP registration window runs from
            April 1 through November 30, 2026.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Verify Your MIPS Participation Status
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            MIPS eligibility is not the same for every clinician. Participation
            status may depend on factors such as clinician type, Medicare
            enrollment date, Medicare billing activity, beneficiary volume, and
            participation in an Advanced APM.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Before selecting measures or preparing reporting data, clinicians
            should confirm their 2026 MIPS status through the official CMS
            Quality Payment Program (QPP) eligibility resources.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              How InterPulse Global Supports the MIPS Reporting Journey
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              MIPS reporting involves multiple requirements, deadlines, data
              elements, and CMS rules. InterPulse Global provides structured
              support throughout the reporting cycle to help practices organize
              their information and prepare for submission.
            </p>
          </div>

          <ol className="mt-10 grid gap-4">
            {journeySteps.map((step, index) => (
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
