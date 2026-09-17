const metrics = [
  {
    stat: "98.26%",
    label: "First-Pass Acceptance",
    description:
      "Claims pass commercial and CMS payers without clearinghouse kickbacks or manual rework.",
    iconBg: "bg-orange-500/15 text-orange-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm-1.1 13.3-3.2-3.2 1.4-1.4 1.8 1.8 3.8-3.8 1.4 1.4-5.2 5.2z" />
      </svg>
    ),
  },
  {
    stat: "5-15 Days",
    label: "Payer Reimbursement",
    description:
      "Slashes the traditional 45-day wait with automated electronic remittance matching.",
    iconBg: "bg-orange-500/15 text-orange-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 3.2 1.9-.8 1.3L11 13.2V7h2v5.4z" />
      </svg>
    ),
  },
  {
    stat: "37%",
    label: "Aged A/R Reduction",
    description:
      "Aggressive appeals recover 90+ day uncollected balances that internal staff rarely reach.",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M16 10c0-2.2-2.7-4-6-4S4 7.8 4 10c0 1.5 1.2 2.8 3 3.4V20h2v-2h2v2h2v-6.6c1.8-.6 3-1.9 3-3.4zm-6 2c-2.2 0-4-.9-4-2s1.8-2 4-2 4 .9 4 2-1.8 2-4 2zm6.5-6C18.9 6 21 7.8 21 10c0 1.5-1 2.8-2.5 3.4V20H16v-2h-1.2c.7-.7 1.2-1.6 1.2-2.6 0-1.4-.7-2.6-1.8-3.5.9-.6 1.5-1.4 1.8-2.4.4.1.8.2 1.3.2z" />
      </svg>
    ),
  },
  {
    stat: "300+",
    label: "Medical Practices",
    description:
      "Serving solo specialty clinics to 40-provider surgical centers with a 99.4% retention rate.",
    iconBg: "bg-sky-500/15 text-sky-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
      </svg>
    ),
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="relative bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
            EMPIRICAL PRACTICE RESULTS
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Performance Measured on 2.1M+ Actual Claims
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
            InterPulse Global transforms unpredictable revenue into dependable,
            automated cash flow for clinical leaders.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {metrics.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 transition duration-300 hover:border-[var(--border)] hover:opacity-95 sm:p-6"
            >
              <div
                className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <p className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-[2rem]">
                {item.stat}
              </p>
              <h3 className="mt-2 text-base font-semibold text-[var(--text)]">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
