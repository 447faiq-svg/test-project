const reasons = [
  {
    title: "Specialized Knowledge for Every Practice",
    body: "Every medical specialty has different coding requirements, documentation standards, payer policies, and reimbursement challenges. Our specialty-focused approach ensures your billing workflow is aligned with the services your practice actually provides.",
  },
  {
    title: "Accurate Medical Coding",
    body: "Proper coding helps communicate the services delivered and supports clean claim submission. Our billing specialists review diagnoses, procedures, modifiers, and documentation to help minimize avoidable billing errors.",
  },
  {
    title: "Effective Denial Management",
    body: "Denied claims can negatively affect cash flow and increase administrative workload. We investigate denial reasons, correct billing issues when appropriate, submit appeals, and track claims through resolution.",
  },
  {
    title: "Proactive Accounts Receivable Management",
    body: "Outstanding claims should not simply sit in an aging report. Our team monitors A/R, follows up with payers, investigates delayed payments, and works on older balances to help recover legitimate revenue.",
  },
  {
    title: "Complete Revenue Cycle Support",
    body: "From eligibility verification and coding through claim submission, payment posting, denial management, and A/R follow-up, our services can support the complete revenue cycle.",
  },
  {
    title: "Customized Billing Solutions",
    body: "Whether you operate a solo practice, multi-provider clinic, specialty group, surgery center, or growing healthcare organization, your billing workflow can be customized around your providers, payer mix, specialty, and claim volume.",
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

export default function SpecialtyBillingWhy() {
  return (
    <section
      id="specialty-billing"
      className="relative border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
            Specialty Billing
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.4rem] md:leading-[1.2]">
            Why Choose Specialty-Focused Medical Billing Services?
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {reasons.map((item) => (
            <li
              key={item.title}
              className="border border-[var(--border)] bg-[var(--surface)] px-5 py-5"
            >
              <div className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text)] sm:text-lg">
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

        <div className="mx-auto mt-14 max-w-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-10 text-center sm:px-10">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            Improve Your Practice&apos;s Revenue Cycle
          </h3>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Your physicians and clinical staff should be focused on delivering
            excellent patient care—not chasing insurance companies, correcting
            rejected claims, or spending hours managing billing paperwork.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Our specialty-focused medical billing services combine experienced
            billing professionals, accurate coding, proactive claim management,
            denial resolution, and A/R follow-up to help healthcare practices
            build a more efficient and predictable revenue cycle.
          </p>
          <a
            href="#consult"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
          >
            Get Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
