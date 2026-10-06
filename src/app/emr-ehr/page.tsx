import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EMR & EHR Support Services | InterPulse Global",
  description:
    "EMR and EHR billing support for medical practices—claim workflows, payment posting, reporting, and revenue cycle operations inside your existing platform.",
};

const platforms = [
  "AdvancedMD",
  "Athenahealth",
  "CareCloud",
  "eClinicalWorks",
  "NextGen",
  "Office Ally",
  "Oracle Health",
  "Practice Fusion",
  "Tebra",
];

const trustStats = [
  { value: "150+", label: "Physicians Served" },
  { value: "30+", label: "Specialties" },
  { value: "98%", label: "First-Pass Clean Claims" },
  { value: "End-to-End", label: "RPA Billing Solutions" },
];

const supportCards = [
  {
    title: "Claim and Clearinghouse Support",
    body: "Our billing team assists with claim submission workflows, clearinghouse processes, rejection tracking, payer responses, and corrected claim handling through your existing system.",
  },
  {
    title: "Payment Posting and Reconciliation",
    body: "We support ERA and EOB posting, payment adjustments, patient responsibility, denial codes, and reconciliation within your current billing platform.",
  },
  {
    title: "Billing Reports and Performance Tracking",
    body: "We organize reports for claim status, payments, denials, accounts receivable, collection trends, and payer performance so your practice can monitor billing activity.",
  },
  {
    title: "Staff Onboarding and Workflow Guidance",
    body: "We help practice staff understand billing tasks, account access, workflow responsibilities, reporting schedules, and communication procedures within the selected EHR system.",
  },
  {
    title: "EHR Billing Workflow Setup",
    body: "We review your existing billing workflow and help organize charge entry, claim creation, claim status tracking, and billing task assignments within your EHR platform.",
  },
];

const onboardingSteps = [
  {
    title: "Welcome Call",
    body: "We discuss your current EHR platform, billing workflow, practice size, specialties, claim volume, reporting needs, and operational challenges.",
  },
  {
    title: "Access and Setup Review",
    body: "Our team reviews charge entry, claim submission, payment posting, denial follow-up, accounts receivable, and reporting processes within your current system.",
  },
  {
    title: "Onboarding Meeting",
    body: "Our experts guide you through a detailed onboarding consultation covering roles, timelines, and how InterPulse Global will operate inside your EHR.",
  },
  {
    title: "Workflow Documentation",
    body: "We document task ownership, billing schedules, claim follow-up steps, escalation procedures, reporting frequency, and communication responsibilities.",
  },
  {
    title: "Go-Live and Monitoring",
    body: "Billing support begins on the agreed date. Our team monitors workflow issues, unresolved claims, posting delays, and reporting gaps during the initial transition period.",
  },
];

export default function EmrEhrPage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative min-h-[min(100svh,720px)] overflow-hidden sm:min-h-[72vh] lg:min-h-[78vh]">
        <Image
          src="/emr-ehr-banner.jpg"
          alt="Healthcare professional using an EHR system for clinical and billing workflows"
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
            InterPulse Global · EMR/EHR
          </p>
          <h1 className="hero-fade-up mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[3rem] md:leading-[1.1]">
            EMR and EHR Support Services for Medical Practices
          </h1>
          <p className="hero-fade-up-delay mt-5 max-w-2xl text-lg font-medium text-white/92 sm:text-xl sm:leading-8">
            EHR Support for Medical Billing and Revenue Cycle Workflows
          </p>
          <p className="hero-fade-up-delay mt-4 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-base">
            Improve billing workflows in your existing EMR or EHR with support
            from InterPulse Global. Our team assists with platform onboarding,
            billing setup, claim workflows, payment posting, reporting, and
            daily revenue cycle operations across leading EHR platforms.
          </p>
          <div className="hero-fade-up-delay mt-9 flex flex-wrap gap-4">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
            <a
              href="#platforms"
              className="inline-flex h-12 items-center justify-center border border-white/35 px-6 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:border-white/70 hover:bg-white/10"
            >
              View Platforms
            </a>
          </div>
        </div>
      </section>

      <ConsultForm />

      {/* Platforms */}
      <section
        id="platforms"
        className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
            Compatibility
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            EHR Platforms Supported by Our Billing Team
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base">
            InterPulse Global provides EHR billing support across widely used
            healthcare platforms. We work inside your existing system to manage
            claim workflows, payment posting, denial follow-up, billing reports,
            and other revenue cycle tasks.
          </p>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap justify-center gap-3">
          {platforms.map((name) => (
            <span
              key={name}
              className="border border-[var(--border)] bg-[var(--surface-card)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[#FF6B1A]/40"
            >
              {name}
            </span>
          ))}
          <span className="border border-dashed border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--text-muted)]">
            + others used by practices
          </span>
        </div>
      </section>

      {/* Trust strip */}
      <section
        className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14"
        style={{
          background:
            "linear-gradient(135deg, #0B1F33 0%, #123A5C 48%, #0B1F33 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(255,107,26,0.25), transparent 35%), radial-gradient(circle at 80% 60%, rgba(37,99,235,0.2), transparent 40%)",
          }}
        />
        <div className="relative mx-auto grid w-full max-w-[1100px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#FF9A55] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support services */}
      <section className="bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
              What we support
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              EMR and EHR Billing Support Services
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base">
              Our team supports billing operations within your existing EMR or
              EHR platform. We help medical practices organize claim workflows,
              payment posting, denial follow-up, reporting, and staff processes
              based on their current system and billing requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportCards.map((card, i) => (
              <article
                key={card.title}
                className={`border border-[var(--border)] bg-[var(--surface-card)] p-6 transition hover:-translate-y-0.5 hover:border-[#FF6B1A]/40 ${
                  i === 3 || i === 4 ? "lg:col-span-1" : ""
                } ${i === 3 ? "sm:col-span-1 lg:col-start-1" : ""} ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-4 h-1 w-10 bg-[#FF6B1A]" />
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
              Getting started
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              EMR/EHR Support Onboarding Process
            </h2>
            <ol className="relative mt-10 space-y-0">
              {onboardingSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative flex gap-4 pb-8 last:pb-0"
                >
                  {index < onboardingSteps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-10 left-[17px] h-[calc(100%-2.5rem)] w-px bg-[var(--border)]"
                    />
                  )}
                  <span className="relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[#FF6B1A] bg-[var(--surface)] text-sm font-bold text-[#FF6B1A]">
                    {index + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-bold text-[var(--text)]">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-[var(--text-muted)]">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
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
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border)] sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[540px]">
              <Image
                src="/emr-ehr-doctor.jpg"
                alt="Clinical professional working in an EHR billing workflow"
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
                  Your system. Our billing discipline.
                </p>
                <p className="mt-2 max-w-sm text-sm text-white/85">
                  We plug into your EMR/EHR—no rip-and-replace—then tighten
                  workflows from charge entry through collections.
                </p>
              </div>
            </div>
          </div>
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
          className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,26,0.28), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to strengthen billing inside your EHR?
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-8 text-white/80 sm:text-base">
            Tell us which platform you use—we&apos;ll map the workflow, define
            ownership, and show how InterPulse Global supports your revenue
            cycle without disrupting care.
          </p>
          <a
            href="#consult"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-8 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
          >
            Get Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
