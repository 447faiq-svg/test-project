import ConsultForm from "@/components/ConsultForm";
import Image from "next/image";

const auditIncludes = [
  "Review of charge entry and claim accuracy",
  "Assessment of coding compliance and documentation",
  "Analysis of accounts receivable aging and denial rates",
  "Insights into revenue cycle performance",
  "Evaluation of HIPAA compliance",
];

const badges = [
  { title: "HIPAA", subtitle: "Compliant" },
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

export default function MedicalBillingCodingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[480px] overflow-hidden sm:min-h-[560px] lg:min-h-[620px]">
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
            Request Your Complimentary Medical Billing Audit from InterPulse
            Global
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg sm:leading-8">
            Uncover lost revenue, coding weaknesses, and denial patterns in your
            current workflow—completely risk-free.
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold tracking-wide text-white uppercase">
              Your Free Audit Includes:
            </p>
            <ul className="mt-4 grid max-w-2xl gap-3">
              {auditIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium text-white sm:text-[15px]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full border border-white/30 bg-[#0B1F33]/70 text-center backdrop-blur-sm sm:h-20 sm:w-20"
              >
                <span className="text-[10px] font-bold leading-tight text-[#FF9A55] uppercase sm:text-[11px]">
                  {badge.title}
                </span>
                <span className="mt-0.5 px-1 text-[8px] leading-tight text-white/85 sm:text-[9px]">
                  {badge.subtitle}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
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
            InterPulse Global certified coding and billing specialists translate
            clinical documentation into accurate CPT, ICD-10, and HCPCS claims.
            We help practices reduce rework, lift first-pass acceptance, and
            protect reimbursement with specialty-aware coding review and
            compliance-aligned claim preparation.
          </p>
        </div>
      </section>
    </main>
  );
}
