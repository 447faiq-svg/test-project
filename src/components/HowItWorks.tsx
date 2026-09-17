const steps = [
  {
    number: "01",
    title: "Pre-Encounter Verification",
    description:
      "Automated 270/271 eligibility checks 48 hours prior to visits. Front desk receives clear copay, coinsurance, and deductible breakdowns instantly.",
    tag: "T-minus 48h Protocol",
    tagColor: "text-sky-400",
    badgeClass: "bg-sky-500/20 text-sky-300",
    cardClass: "border-[var(--border)]",
  },
  {
    number: "02",
    title: "Intelligent Specialty Scrub",
    description:
      "Certified AAPC coders review specialty-specific claims with algorithmic NCCI edit checks, modifier validation, and medical necessity matching.",
    tag: "Algorithmic Validation",
    tagColor: "text-orange-400",
    badgeClass: "bg-[var(--border)] text-[var(--text)]",
    cardClass: "border-[var(--border)]",
  },
  {
    number: "03",
    title: "14-Day Denial Resolution",
    description:
      "When payers contest a line item, dedicated appeals specialists submit formal documentation within 48 hours. No claim remains stuck in limbo.",
    tag: "Zero Dormant Claims",
    tagColor: "text-orange-400",
    badgeClass: "bg-[#FF6B1A] text-white",
    cardClass: "border-[#FF6B1A]/70",
  },
  {
    number: "04",
    title: "Practice Analytics & Payouts",
    description:
      "Real-time executive reporting gives practice owners clear insight into collection percentages, provider RVUs, and incoming bank deposits.",
    tag: "24/7 Practice Transparency",
    tagColor: "text-emerald-400",
    badgeClass: "bg-[var(--border)] text-[var(--text)]",
    cardClass: "border-[var(--border)]",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 w-[min(800px,90%)] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
            PRECISION ARCHITECTURE
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
            How InterPulse Delivers: The 4-Step Revenue Engine
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
            We replaced sluggish, error-prone manual billing with continuous
            pre-flight rule verification, automated policy alignment, and
            proactive cash collection.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className={`flex flex-col rounded-2xl border bg-[var(--surface-elevated)] p-5 transition duration-300 hover:opacity-95 sm:p-6 ${step.cardClass}`}
            >
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${step.badgeClass}`}
              >
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">
                {step.description}
              </p>
              <p className={`mt-5 text-xs font-medium ${step.tagColor}`}>
                • {step.tag}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
