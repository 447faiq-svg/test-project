import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medical Billing Services | InterPulse Global",
  description:
    "Medical billing services for claim submission, coding review, denial management, payment posting, AR follow-up, patient billing, and revenue cycle reporting.",
};

const checklist = [
  "Free Audit / Demo",
  "Denial management and appeals",
  "Payment posting and reconciliation",
  "AR follow-up and aging reports",
  "Insurance eligibility verification",
  "Patient statements and collections",
  "Medical coding support",
];

const billingChallenges = [
  {
    title: "Claims submitted late",
    body: "Delays in claim submission can postpone reimbursement and negatively impact cash flow.",
  },
  {
    title: "Eligibility not verified",
    body: "Failing to confirm insurance eligibility before a patient’s visit can lead to avoidable claim denials and unexpected patient balances.",
  },
  {
    title: "CPT, ICD-10, or modifier errors",
    body: "Incorrect coding or missing modifiers can result in rejected or denied claims.",
  },
  {
    title: "Denials not followed up",
    body: "Unresolved denials can leave earned revenue sitting unpaid and increase the risk of timely-filing deadlines.",
  },
  {
    title: "Payments not posted correctly",
    body: "Inaccurate payment posting can create discrepancies and make it difficult to understand the practice’s true financial position.",
  },
  {
    title: "Aging AR",
    body: "Unpaid balances that remain outstanding for 30, 60, 90, or 120+ days become increasingly difficult to recover.",
  },
  {
    title: "Patient balances not collected",
    body: "Poor patient billing and collection processes can leave significant revenue uncollected.",
  },
  {
    title: "Limited billing visibility",
    body: "Without clear reporting and performance insights, practices may struggle to identify revenue leaks, workflow problems, and areas for improvement.",
  },
];

const hipaaPractices = [
  "Secure document and file sharing",
  "Role-based system access",
  "HIPAA-focused billing procedures",
  "Encrypted communication channels",
  "Restricted PHI access",
  "Ongoing staff training",
  "Detailed, audit-ready documentation",
  "Business Associate Agreement support",
];

const servicesInclude = [
  {
    service: "Insurance Eligibility Verification",
    detail:
      "Verify active insurance coverage, copays, deductibles, coinsurance, and applicable payer requirements before services are provided.",
  },
  {
    service: "Charge Entry",
    detail:
      "Accurately record rendered services, CPT codes, diagnosis codes, modifiers, units, and provider information.",
  },
  {
    service: "Medical Coding Review",
    detail:
      "Examine CPT, ICD-10, HCPCS, and modifier coding to help ensure accuracy and reduce billing errors before claims are submitted.",
  },
  {
    service: "Claim Submission",
    detail:
      "Electronically submit professional and institutional claims through clearinghouses and payer portals.",
  },
  {
    service: "Claim Scrubbing",
    detail:
      "Review claims for missing information, coding discrepancies, payer-specific requirements, and potential rejection issues before submission.",
  },
  {
    service: "Denial Management",
    detail:
      "Analyze denied claims, determine the underlying cause, make necessary corrections, and resubmit or appeal claims when appropriate.",
  },
  {
    service: "AR Follow-Up",
    detail:
      "Monitor outstanding claims, communicate with insurance payers, and follow up on aging accounts to help accelerate reimbursement.",
  },
  {
    service: "Payment Posting",
    detail:
      "Accurately record ERA and EOB payments, adjustments, patient responsibilities, and payer-related denials.",
  },
  {
    service: "Patient Billing",
    detail:
      "Generate and deliver patient statements while supporting follow-up on outstanding patient balances.",
  },
  {
    service: "Revenue Cycle Reporting",
    detail:
      "Provide insights into collections, denial activity, AR aging, payer performance, claim status, and other key billing metrics.",
  },
  {
    service: "Credentialing Coordination",
    detail:
      "Assist with payer enrollment and provider setup when reimbursement or billing challenges are related to network participation.",
  },
  {
    service: "Billing Audit",
    detail:
      "Evaluate billing operations to identify missed revenue opportunities, recurring denial patterns, process inefficiencies, and workflow gaps.",
  },
];

const comparisonRows = [
  {
    term: "Medical Billing",
    description:
      "Managing the submission of healthcare claims and following up with payers to secure reimbursement for services provided.",
    focus: "Claim-focused",
  },
  {
    term: "Revenue Cycle Management (RCM)",
    description:
      "Managing the complete financial process of a healthcare practice, from appointment scheduling and insurance verification through billing, payments, denials, reporting, and collections.",
    focus: "End-to-end financial process",
  },
  {
    term: "Medical Coding",
    description:
      "Translating clinical documentation into appropriate CPT, ICD-10, HCPCS, and modifier codes for accurate billing.",
    focus: "Coding-focused",
  },
  {
    term: "Denial Management",
    description:
      "Investigating denied claims, resolving billing issues, submitting corrections or appeals, and helping prevent future denials.",
    focus: "Revenue recovery-focused",
  },
  {
    term: "AR Follow-Up",
    description:
      "Monitoring outstanding claims and aging accounts while following up with payers to help collect unpaid balances.",
    focus: "Collection-focused",
  },
];

const whyChoose = [
  {
    title: "Dedicated Billing Support",
    body: "Work with a dedicated billing professional focused on your practice’s needs.",
  },
  {
    title: "Experienced Coding Expertise",
    body: "Benefit from knowledgeable and qualified coding support.",
  },
  {
    title: "Clear Claim Visibility",
    body: "Track claim progress and status with greater transparency.",
  },
  {
    title: "Regular Performance Reporting",
    body: "Receive weekly or monthly reports to monitor billing performance.",
  },
  {
    title: "Denial Root-Cause Analysis",
    body: "Identify why claims are being denied and address recurring issues.",
  },
  {
    title: "Aging-Based AR Follow-Up",
    body: "Prioritize outstanding accounts based on their aging category and payment status.",
  },
  {
    title: "EHR & Clearinghouse Expertise",
    body: "Experience working with various EHR systems and electronic clearinghouse platforms.",
  },
  {
    title: "HIPAA-Aware Workflows",
    body: "Follow security-conscious processes designed around the protection of sensitive healthcare information.",
  },
  {
    title: "Transparent Billing Status",
    body: "Maintain visibility into claims, payments, denials, and outstanding balances without hidden processes.",
  },
  {
    title: "Scalable Practice Support",
    body: "Services designed for both small practices and multi-provider healthcare organizations.",
  },
  {
    title: "Specialty-Specific Workflows",
    body: "Customized billing processes aligned with your specialty, operational needs, and payer requirements.",
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

export default function MedicalBillingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
        <Image
          src="/medical-billing-banner.jpg"
          alt="Healthcare provider supporting practice financial operations"
          fill
          priority
          className="object-cover object-[center_20%]"
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
            Medical Billing Services for Healthcare Providers
          </h1>
          <p className="mt-3 max-w-2xl text-base font-medium text-white/90 sm:text-lg">
            Let InterPulse Global Take Command of Your Practice&apos;s Financial
            Health
          </p>
          <div className="mt-5 h-px w-24 bg-white/50" />
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            Get reliable medical billing services for claim submission, coding
            review, denial management, payment posting, AR follow-up, patient
            billing, and revenue cycle reporting. Our billing team helps
            providers reduce billing errors, improve collections, and stay
            focused on patient care.
          </p>

          <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
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
            What Are Medical Billing Services?
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Medical billing services support healthcare providers by managing
            the financial and administrative processes involved in getting paid
            for patient care. These services may include submitting insurance
            claims, confirming patient eligibility, reviewing medical coding,
            posting payments, handling claim denials, following up on
            outstanding claims, and collecting patient balances.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            As an essential part of revenue cycle management (RCM), medical
            billing services help practices maintain a healthier cash flow,
            reduce billing-related errors, and minimize the administrative
            burden on their internal teams.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Medical Billing Errors Can Delay Revenue
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              Every missed detail in the billing process can impact a
              practice&apos;s revenue. Late claim submissions, coding errors,
              eligibility issues, denied claims, and aging accounts receivable
              can create significant financial challenges for healthcare
              providers.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              When billing processes are not properly managed, practices may
              experience delayed payments, cash-flow issues, increased
              administrative workload, patient billing confusion, and payer
              compliance risks.
            </p>
            <p className="mt-8 text-sm font-semibold tracking-[0.08em] text-[var(--text)] uppercase">
              Common billing challenges include:
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {billingChallenges.map((item) => (
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
            Turn Billing Challenges Into Revenue Opportunities
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            At InterPulse Global, we help practices strengthen their revenue
            cycle by addressing billing issues before they become costly
            problems. Our comprehensive RCM approach is designed to improve
            claim accuracy, reduce avoidable denials, accelerate collections,
            and provide greater visibility into billing performance.
          </p>
          <div className="mt-8">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              HIPAA-Compliant Medical Billing Support
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              Medical billing providers may work with sensitive healthcare
              information, including protected health information (PHI),
              insurance details, claim documentation, EOBs, ERAs, patient
              account balances, and communications with payers. Because of the
              sensitive nature of this information, billing operations should
              follow appropriate HIPAA-focused security and privacy practices.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              These practices can include controlled access, secure data
              sharing, encrypted communications, employee training, audit
              tracking, restricted access to PHI, and appropriate Business
              Associate Agreements (BAAs) when required.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              The U.S. Department of Health and Human Services (HHS) recognizes
              business associates as individuals or organizations that perform
              certain services or functions involving the use or disclosure of
              PHI on behalf of a covered entity.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hipaaPractices.map((item) => (
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

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Our Medical Billing Services Include
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto border border-[var(--border)]">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="bg-[var(--surface-elevated)]">
                <tr>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    Service
                  </th>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    What We Do
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicesInclude.map((row) => (
                  <tr
                    key={row.service}
                    className="odd:bg-[var(--surface)] even:bg-[var(--surface-elevated)]/50"
                  >
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm font-semibold text-[var(--text)]">
                      {row.service}
                    </td>
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm leading-7 text-[var(--text-muted)]">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Medical Billing vs. Revenue Cycle Management
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto border border-[var(--border)]">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-[var(--surface)]">
                <tr>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    Term
                  </th>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    Description
                  </th>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    Primary Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.term}
                    className="odd:bg-[var(--surface-elevated)] even:bg-[var(--surface)]/70"
                  >
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm font-semibold text-[var(--text)]">
                      {row.term}
                    </td>
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm leading-7 text-[var(--text-muted)]">
                      {row.description}
                    </td>
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm font-medium text-[var(--text)]">
                      {row.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Why Choose Our Medical Billing Services?
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
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
