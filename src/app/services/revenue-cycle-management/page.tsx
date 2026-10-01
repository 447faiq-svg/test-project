import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Revenue Cycle Management | InterPulse Global",
  description:
    "High-performance RCM for healthcare practices—claim accuracy, faster payments, denial recovery, and proactive A/R management from InterPulse Global.",
};

const outcomes = [
  "99% claim accuracy through RPA-powered processes",
  "Insurance payments typically within 26 days",
  "Complimentary provider credentialing with preferred payers",
  "Up to 20% revenue lift from accelerated collections",
  "Steady cash flow with proactive A/R management",
];

const proofPoints = [
  {
    title: "150+ Physicians",
    body: "Trusted by practices across specialties",
    icon: "physicians",
  },
  {
    title: "30+ Specialties",
    body: "Specialty-aware billing workflows",
    icon: "specialties",
  },
  {
    title: "End-to-End RPA",
    body: "Automation across the claim lifecycle",
    icon: "rpa",
  },
  {
    title: "98% Clean Claims",
    body: "Strong first-pass submission rates",
    icon: "claims",
  },
];

const processSteps = [
  {
    title: "Start of a Claim",
    items: ["Patient Registration", "Insurance Eligibility", "Patient Appointment"],
    color: "#F59E0B",
  },
  {
    title: "Claims Submission",
    items: ["Charge Entry", "Medical Coding", "Timely Claim Submission"],
    color: "#FF6B1A",
  },
  {
    title: "Claims Management",
    items: ["Payment Posting", "Denial Management", "Appeals"],
    color: "#00407A",
  },
  {
    title: "A/R Management",
    items: ["A/R Follow-up", "Patient Collections", "Patient Statements"],
    color: "#2563EB",
  },
  {
    title: "Analytics",
    items: ["Performance Reporting", "Denial Trend Insights", "Collection Visibility"],
    color: "#0D9488",
  },
];

const advantageCards = [
  {
    title: "96% Average Collection Rate",
    body: "Accuracy, efficiency, and proactive follow-up put more earned revenue back into your practice.",
    icon: "rate",
  },
  {
    title: "Cleaner Claims, Fewer Denials",
    body: "Disciplined coding and submission workflows raise clean-claim rates and smooth the revenue cycle.",
    icon: "clean",
  },
  {
    title: "Recover Unpaid Balances",
    body: "We pursue denials, appeals, and outstanding patient balances so you capture what you’ve earned.",
    icon: "recover",
  },
  {
    title: "48-Hour Denial Turnaround",
    body: "Fast resubmissions plus proactive alerts help stop repeat denials before they stack up.",
    icon: "speed",
  },
  {
    title: "Clearer Patient Communication",
    body: "Timely statements and convenient payment options keep patients informed and collections moving.",
    icon: "comms",
  },
];

const onboardingSteps = [
  {
    title: "Welcome Call",
    body: "A personalized session that walks you through our process and how we’ll support your practice.",
  },
  {
    title: "Setup Questionnaire",
    body: "A structured intake so we gather operational and payer details for a clean start.",
  },
  {
    title: "Onboarding Meeting",
    body: "Experts cover workflows, systems, and communication protocols end to end.",
  },
  {
    title: "Defining Workflow SOPs",
    body: "Custom standard operating procedures tailored to how your practice actually runs.",
  },
  {
    title: "Go-Live Date",
    body: "After preparation, operations transition seamlessly to the InterPulse Global team.",
  },
];

const trustStats = [
  { value: "150+", label: "Physicians Served" },
  { value: "30+", label: "Specialties" },
  { value: "98%", label: "First-Pass Clean Claims" },
  { value: "97.95%", label: "Collection Ratio" },
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

function ProofIcon({ name }: { name: string }) {
  const common = "h-6 w-6";
  switch (name) {
    case "physicians":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" />
          <circle cx="9" cy="7" r="3.5" />
          <path d="M22 21v-2a3.5 3.5 0 0 0-2.5-3.35" strokeLinecap="round" />
          <path d="M16.5 3.5a3.5 3.5 0 0 1 0 7" strokeLinecap="round" />
        </svg>
      );
    case "specialties":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M9 3h6v4H9zM11 7v14M13 7v14M5 11h14M5 15h14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "rpa":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 18v3" strokeLinecap="round" />
          <path d="M7 10h4M13 10h4M7 13h10" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5V6l7-3z" strokeLinejoin="round" />
        </svg>
      );
  }
}

function AdvantageIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  const props = {
    viewBox: "0 0 24 24",
    className: common,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "rate":
      return (
        <svg {...props}>
          <path d="M4 19V5M4 19h16" strokeLinecap="round" />
          <path d="M8 15l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "clean":
      return (
        <svg {...props}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" strokeLinejoin="round" />
          <path d="M14 3v5h5M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "recover":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2.5" strokeLinecap="round" />
        </svg>
      );
    case "speed":
      return (
        <svg {...props}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function RevenueCycleManagementPage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero — one composition */}
      <section className="relative min-h-[min(100svh,720px)] overflow-hidden sm:min-h-[72vh] lg:min-h-[78vh]">
        <Image
          src="/rcm-banner.jpg"
          alt="Healthcare professional managing revenue cycle operations"
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
              "linear-gradient(105deg, rgba(11,31,51,0.94) 0%, rgba(11,31,51,0.8) 48%, rgba(11,31,51,0.42) 100%)",
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
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{
            background: "linear-gradient(to top, var(--surface), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="hero-fade-up text-[12px] font-semibold tracking-[0.2em] text-[#FF9A55] uppercase">
            InterPulse Global · Services
          </p>
          <h1 className="hero-fade-up mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.08]">
            Revenue Cycle Management
          </h1>
          <p className="hero-fade-up-delay mt-5 max-w-xl text-base text-white/88 sm:text-lg sm:leading-8">
            High-performance RCM that lifts collections, shortens payment
            cycles, and keeps your practice focused on care.
          </p>
          <div className="hero-fade-up-delay mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
            <a
              href="#process"
              className="inline-flex h-12 items-center justify-center border border-white/35 px-6 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:border-white/70 hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Outcomes band */}
      <section className="relative z-10 -mt-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] border border-[var(--border)] bg-[var(--surface-card)] px-5 py-6 shadow-[0_18px_50px_rgba(11,31,51,0.12)] sm:px-8 sm:py-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            <div className="shrink-0 lg:max-w-[220px]">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
                What you gain
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text)]">
                Built for measurable practice income
              </h2>
            </div>
            <ul className="grid flex-1 gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium text-[var(--text)] sm:text-[15px]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ConsultForm />

      {/* Proof strip */}
      <section className="bg-[var(--surface)] px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto grid w-full max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="group flex gap-4 border border-[var(--border)] bg-[var(--surface-elevated)] p-5 transition hover:border-[#FF6B1A]/40"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-[#FF6B1A]/12 text-[#FF6B1A] transition group-hover:bg-[#FF6B1A] group-hover:text-white">
                <ProofIcon name={point.icon} />
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--text)]">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative overflow-hidden bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,26,0.14), transparent 70%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
              The process
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              How InterPulse Global&apos;s RCM Works
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base">
              From registration to reporting, we cover the full patient-to-payment
              journey—so practices protect revenue and cut administrative load.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < processSteps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute top-8 left-[calc(50%+28px)] z-0 hidden h-px w-[calc(100%-28px)] lg:block"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--border-strong), transparent)",
                    }}
                  />
                )}
                <div className="relative z-10 h-full border border-[var(--border)] bg-[var(--surface-card)] p-5 transition hover:border-[#FF6B1A]/35">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center text-sm font-bold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {index + 1}
                    </span>
                    <div
                      className="h-0.5 flex-1"
                      style={{ backgroundColor: `${step.color}55` }}
                    />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold text-[var(--text)]">
                    {step.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: step.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 border-t border-[var(--border)] pt-10 sm:grid-cols-2">
            <p className="text-[15px] leading-8 text-[var(--text-muted)]">
              Certified coders deliver precise coding and charge capture to
              maximize reimbursement while lowering compliance risk—paired with
              technology for real-time claim monitoring.
            </p>
            <p className="text-[15px] leading-8 text-[var(--text-muted)]">
              Specialists overturn denied claims and recover stalled revenue
              with disciplined appeals, accurate payment posting, and clearer
              cash-flow visibility for leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section
        className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16"
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
        <div className="relative mx-auto grid w-full max-w-[1100px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#FF9A55] sm:text-[2.75rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm tracking-wide text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantage */}
      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
              Results-driven
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Strengthen Your Practice With InterPulse Global&apos;s RCM
              Advantage
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base">
              Unlock your practice&apos;s full revenue-cycle potential with a
              model built for measurable outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantageCards.map((card, i) => (
              <article
                key={card.title}
                className={`group border border-[var(--border)] bg-[var(--surface-card)] p-6 transition hover:-translate-y-0.5 hover:border-[#FF6B1A]/40 hover:shadow-[0_16px_40px_rgba(11,31,51,0.08)] ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center bg-[#FF6B1A]/12 text-[#FF6B1A] transition group-hover:bg-[#FF6B1A] group-hover:text-white">
                  <AdvantageIcon name={card.icon} />
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EMR + HIPAA */}
      <section className="border-y border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 border border-[#FF6B1A]/35 bg-[#FF6B1A]/10 px-3 py-1.5">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-[#FF6B1A]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5V6l7-3z" strokeLinejoin="round" />
              <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#FF6B1A] uppercase">
              HIPAA Compliant
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Seamless EMR/EHR Support
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base">
            At{" "}
            <strong className="font-semibold text-[var(--text)]">
              InterPulse Global
            </strong>
            , billing experts specialize in{" "}
            <strong className="font-semibold text-[var(--text)]">
              EMR/EHR support
            </strong>{" "}
            for a smoother revenue cycle. We work across major systems to help
            providers{" "}
            <strong className="font-semibold text-[var(--text)]">
              streamline workflows, reduce denials, and maximize reimbursements.
            </strong>
          </p>
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
              Onboarding Process for RCM Services
            </h2>
            <ol className="relative mt-10 space-y-0">
              {onboardingSteps.map((step, index) => (
                <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
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
                src="/rcm-doctor.jpg"
                alt="Clinical professional supporting RCM onboarding"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,31,51,0.65) 0%, transparent 45%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                  Guided handoff. Clear go-live.
                </p>
                <p className="mt-2 max-w-sm text-sm text-white/85">
                  Your operations transition to InterPulse Global with SOPs,
                  workflows, and support already in place.
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
          className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,26,0.28), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to strengthen your revenue cycle?
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-8 text-white/80 sm:text-base">
            Tell us about your practice—we&apos;ll map the gaps, outline the
            plan, and show what high-performance RCM looks like for you.
          </p>
          <a
            href="#consult"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-8 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
          >
            Request Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
