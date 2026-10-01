import ConsultForm from "@/components/ConsultForm";
import Image from "next/image";

const checklist = [
  "Free Audit / Demo",
  "Denial management and appeals",
  "Payment posting and reconciliation",
  "AR follow-up and aging reports",
  "Insurance eligibility verification",
  "Patient statements and collections",
  "Medical coding support",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B1A] text-white">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
        <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function MedicalBillingPage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Banner */}
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

      {/* What are medical billing services */}
      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            What Are Medical Billing Services?
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Medical billing services help healthcare providers submit insurance
            claims, verify patient coverage, review medical codes, post
            payments, manage denials, follow up on unpaid claims, and collect
            patient balances. These services are part of revenue cycle
            management and help practices improve cash flow while reducing
            administrative workload.
          </p>
        </div>
      </section>
    </main>
  );
}
