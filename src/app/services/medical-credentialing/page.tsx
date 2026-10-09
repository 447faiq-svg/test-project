import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medical Credentialing Services | InterPulse Global",
  description:
    "Healthcare provider credentialing and insurance enrollment services—CAQH/DataSpring, PECOS, payer enrollment, recredentialing, and credential monitoring.",
};

const highlights = [
  "Provider credential verification",
  "Insurance payer enrollment",
  "CAQH/DataSpring & PECOS support",
  "Recredentialing & revalidation",
];

const delayIssues = [
  "Incomplete or missing provider documentation",
  "Inaccurate NPI, taxonomy, license, or practice-location information",
  "Differences between payer records and CAQH/DataSpring profiles",
  "Delays associated with new providers or additional practice locations",
  "New payer enrollment requirements that are not properly tracked",
  "Missed recredentialing or revalidation deadlines",
  "Applications requiring corrections or additional information",
];

const servicesInclude = [
  {
    service: "Provider Credential Verification",
    detail:
      "Review and verification of education, training, licensure, employment history, malpractice coverage, and professional qualifications.",
  },
  {
    service: "Insurance Payer Enrollment",
    detail:
      "Preparation and submission of enrollment applications for commercial insurers, Medicare, Medicaid, HMOs, PPOs, and managed care organizations.",
  },
  {
    service: "CAQH/DataSpring Management",
    detail:
      "Profile creation, information updates, document uploads, payer authorization, and ongoing profile maintenance.",
  },
  {
    service: "Medicare PECOS Enrollment",
    detail:
      "Support with Medicare enrollment applications and provider information maintained through CMS PECOS.",
  },
  {
    service: "Medicaid Enrollment Assistance",
    detail:
      "Enrollment support for individual providers, healthcare groups, and eligible facilities across state Medicaid programs.",
  },
  {
    service: "Recredentialing & Revalidation",
    detail:
      "Monitoring renewal dates, updating credentials, completing payer revalidation requirements, and maintaining supporting documentation.",
  },
  {
    service: "NPI & Taxonomy Assistance",
    detail:
      "NPI setup and updates, taxonomy review, and verification of provider and practice-location information.",
  },
  {
    service: "Hospital Privileging Support",
    detail:
      "Assistance with applications and documentation for admitting, courtesy, surgical, and other facility privileges.",
  },
  {
    service: "Payer Follow-Up & Tracking",
    detail:
      "Monitoring application progress, payer communications, missing requirements, panel availability, and contracting status.",
  },
  {
    service: "Credential & License Monitoring",
    detail:
      "Tracking state licenses, DEA registrations, malpractice coverage, board certifications, and upcoming expiration dates.",
  },
];

const processAreas = [
  {
    area: "Credentialing",
    meaning:
      "Verification of a provider’s professional qualifications, education, training, licenses, and work history.",
    purpose:
      "Demonstrates that the provider meets the payer’s or facility’s professional standards.",
  },
  {
    area: "Provider Enrollment",
    meaning:
      "Completion and submission of applications to participate in a specific insurance network.",
    purpose:
      "Allows the provider or group to become enrolled and active with the payer.",
  },
  {
    area: "Payer Contracting",
    meaning:
      "Establishing the contractual relationship, including rates, fee schedules, reimbursement terms, and participation conditions.",
    purpose:
      "Defines the financial and contractual terms of the provider’s network participation.",
  },
];

const organizationTypes = [
  "Physicians",
  "Nurse practitioners",
  "Physician assistants",
  "Behavioral and mental health providers",
  "Dentists",
  "Physical therapists",
  "Occupational therapists",
  "Speech-language therapists",
  "Urgent care organizations",
  "Telehealth practices",
  "Clinical laboratories",
  "Diagnostic imaging centers",
  "Ambulatory surgery centers (ASCs)",
  "Durable medical equipment (DME) providers",
  "Federally Qualified Health Centers (FQHCs)",
  "Rural health clinics",
  "Multi-specialty medical groups",
  "Hospitals and other healthcare facilities",
];

const approachSteps = [
  {
    title: "Gather Provider Information & Documentation",
    body: "We begin by collecting the information required for credentialing and payer enrollment. This may include provider licenses, NPI details, DEA registration, malpractice insurance, CV, board certification, education and employment history, W-9, EFT information, practice addresses, and other required documentation.",
  },
  {
    title: "Review Data & Identify Discrepancies",
    body: "Provider information is reviewed for accuracy and consistency. We look for potential discrepancies involving NPI records, taxonomy, licenses, addresses, payer records, CAQH/DataSpring information, and other enrollment data.",
  },
  {
    title: "Establish & Maintain CAQH/DataSpring and PECOS Profiles",
    body: "Where applicable, we assist with creating, updating, and maintaining CAQH/DataSpring profiles and Medicare enrollment information through PECOS.",
  },
  {
    title: "Determine Applicable Payers & Submit Applications",
    body: "Based on the provider’s specialty, location, practice structure, payer needs, and patient population, applications can be prepared and submitted to applicable commercial insurers, Medicare, Medicaid, and managed care plans.",
  },
  {
    title: "Monitor Applications & Communicate With Payers",
    body: "After submission, we track application progress and payer responses. This includes monitoring outstanding documents, requests for additional information, panel status, application movement, and contracting-related updates.",
  },
  {
    title: "Track Approval & Future Credentialing Requirements",
    body: "Following payer decisions, we help monitor effective dates, enrollment status, contracting progress, revalidation requirements, and future recredentialing deadlines.",
  },
];

const keyDocuments = [
  {
    document: "NPI",
    purpose: "Identifies the provider for enrollment and billing purposes.",
  },
  {
    document: "State Professional License",
    purpose: "Verifies active professional licensure.",
  },
  {
    document: "DEA Registration",
    purpose: "Required for applicable prescribing professionals.",
  },
  {
    document: "Malpractice Insurance",
    purpose: "Supports payer and facility credentialing requirements.",
  },
  {
    document: "CV / Professional Work History",
    purpose:
      "Used to verify education, employment, and professional history.",
  },
  {
    document: "Board Certification",
    purpose: "Confirms specialty certification where applicable.",
  },
  {
    document: "W-9",
    purpose:
      "Provides tax and business identification information for payer setup.",
  },
  {
    document: "Practice Location Information",
    purpose:
      "Supports service-location verification and payer directory accuracy.",
  },
  {
    document: "Banking / EFT Information",
    purpose:
      "Used to establish electronic payment and remittance arrangements.",
  },
  {
    document: "CAQH/DataSpring Credentials",
    purpose:
      "Supports commercial payer credentialing and provider profile management.",
  },
  {
    document: "PECOS Access",
    purpose: "Supports Medicare enrollment and related provider updates.",
  },
  {
    document: "CLIA Certificate",
    purpose: "Required for applicable laboratory and facility enrollments.",
  },
  {
    document: "Hospital Affiliation Information",
    purpose: "Supports hospital credentialing and privileging activities.",
  },
];

const whyChoose = [
  {
    title: "Organized Payer Enrollment Assistance",
    body: "InterPulse Global helps practices review provider information, maintain CAQH/DataSpring and PECOS profiles, prepare payer enrollment applications, organize required documentation, and monitor application progress based on the selected service scope.",
  },
  {
    title: "Consistent Credentialing Follow-Up",
    body: "Our team tracks payer communications, outstanding documentation, application updates, and required follow-up activities. This provides practice administrators and providers with clearer visibility into the status of enrollment, credentialing, and recredentialing requests.",
  },
  {
    title: "Better Visibility Into Credentialing Status",
    body: "Rather than leaving enrollment activities scattered across emails, documents, and payer portals, our support helps organize the information and deadlines associated with each provider and payer relationship.",
  },
  {
    title: "Ongoing Credential Maintenance",
    body: "Credentialing does not end when an application is approved. Licenses, certifications, insurance coverage, payer information, and recredentialing requirements may need to be monitored over time. InterPulse Global helps practices stay organized with these ongoing requirements.",
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

export default function MedicalCredentialingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px]">
        <Image
          src="/about-hero.jpg"
          alt="Medical credentialing and provider enrollment support"
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
            Healthcare Provider Credentialing &amp; Insurance Enrollment
            Services
          </h1>
          <div className="mt-5 h-px w-24 bg-white/50" />
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            Getting enrolled with insurance networks requires accurate provider
            information, complete documentation, timely applications, and
            consistent follow-up. InterPulse Global helps healthcare providers
            manage the credentialing and payer enrollment process—from verifying
            professional credentials and preparing enrollment applications to
            maintaining CAQH/DataSpring and PECOS records and monitoring
            recredentialing deadlines.
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
            Medical Credentialing Services
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Our credentialing support helps providers complete the requirements
            necessary to participate with insurance networks and establish their
            ability to submit claims as in-network providers.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Avoid Credentialing Issues That Can Disrupt Revenue
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              Credentialing problems can create unnecessary delays in payer
              enrollment and may affect a practice&apos;s ability to receive
              in-network reimbursement.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              InterPulse Global combines credentialing support with healthcare
              revenue-cycle expertise to help practices maintain accurate
              provider information, organize enrollment documentation, monitor
              payer requirements, and keep the enrollment process moving
              efficiently.
            </p>
            <p className="mt-8 text-sm font-semibold tracking-[0.08em] text-[var(--text)] uppercase">
              Common issues that can create credentialing delays include:
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {delayIssues.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-sm font-medium text-[var(--text)]"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-3xl text-center text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Keeping provider records accurate and enrollment activities
            organized can help reduce unnecessary rework and prevent avoidable
            delays.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Comprehensive Credentialing &amp; Enrollment Support
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
                    Our Support Includes
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
              Understanding Credentialing, Enrollment &amp; Contracting
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              These three stages are related but serve different purposes in the
              payer participation process.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border border-[var(--border)]">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-[var(--surface)]">
                <tr>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    Area
                  </th>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    What It Means
                  </th>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {processAreas.map((row) => (
                  <tr
                    key={row.area}
                    className="odd:bg-[var(--surface-elevated)] even:bg-[var(--surface)]/70"
                  >
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm font-semibold text-[var(--text)]">
                      {row.area}
                    </td>
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm leading-7 text-[var(--text-muted)]">
                      {row.meaning}
                    </td>
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm leading-7 text-[var(--text-muted)]">
                      {row.purpose}
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
              Credentialing Support for Diverse Healthcare Organizations
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              InterPulse Global supports credentialing and enrollment
              requirements for a broad range of healthcare professionals and
              organizations, including:
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {organizationTypes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-4 text-sm font-medium text-[var(--text)]"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Our Step-by-Step Credentialing Approach
            </h2>
          </div>

          <ol className="mt-10 grid gap-4">
            {approachSteps.map((step, index) => (
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
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            What Is the Typical Credentialing Timeline?
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            The time required for provider credentialing and payer enrollment can
            vary considerably. Many credentialing and enrollment projects take
            approximately 60–120 days, but the actual timeline depends on factors
            such as payer processing times, application completeness, provider
            specialty, state requirements, network availability, and whether the
            provider is being added to an established group contract.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Some payers may complete applications sooner, while others may
            require substantially more time. Industry-reported credentialing
            timelines can range from approximately 45–60 days for certain payers
            to 130–160 days or longer for more complex or complete credentialing
            processes.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Because every payer has its own requirements and processing
            procedures, accurate documentation and timely follow-up can help
            prevent avoidable delays.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Key Documents for Credentialing &amp; Payer Enrollment
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              The exact requirements vary by payer and provider type, but
              commonly requested documents may include:
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border border-[var(--border)]">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="bg-[var(--surface)]">
                <tr>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    Document
                  </th>
                  <th className="border-b border-[var(--border)] px-5 py-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-[var(--text)] uppercase">
                    Common Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {keyDocuments.map((row) => (
                  <tr
                    key={row.document}
                    className="odd:bg-[var(--surface-elevated)] even:bg-[var(--surface)]/70"
                  >
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm font-semibold text-[var(--text)]">
                      {row.document}
                    </td>
                    <td className="border-b border-[var(--border)] px-5 py-4 align-top text-sm leading-7 text-[var(--text-muted)]">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Credentialing Support Across Your Healthcare Systems
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            InterPulse Global can work with provider information maintained
            across practice management platforms, credentialing systems, and
            compatible healthcare applications. Based on available system access
            and the agreed scope of services, our team can help organize and
            monitor provider demographics, licenses, NPI information,
            CAQH/DataSpring profiles, PECOS records, payer documentation,
            application statuses, and credential renewal dates.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            This structured approach helps practices maintain better visibility
            into provider enrollment activities and upcoming credentialing
            requirements.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Why Practices Choose InterPulse Global
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
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
