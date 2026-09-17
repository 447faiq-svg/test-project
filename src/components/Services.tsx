const services = [
  {
    title: "Medical Billing & Coding",
    description:
      "Certified AAPC & AHIMA coders translate provider notes into clean CPT, ICD-10-CM, and HCPCS codes with 98%+ clean accuracy.",
    iconBg: "bg-orange-500/15 text-orange-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M16 18 22 12 16 6M8 6 2 12l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "End-to-End RCM",
    description:
      "Total operational ownership: patient registration, charge entry, claim submission, payment posting, and gentle patient collection follow-ups.",
    iconBg: "bg-amber-700/20 text-amber-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M7 16 3 12l4-4M17 8l4 4-4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Prior-Authorization Fast-Track",
    description:
      "Dedicated clinical liaisons accelerate insurance approvals and peer-to-peer discussions so surgical procedures are never delayed.",
    iconBg: "bg-teal-500/15 text-teal-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Denial Recovery & Aged A/R",
    description:
      "Relentless audit and recovery teams targeting 60, 90, and 120+ day balances through comprehensive clinical appeal packages.",
    iconBg: "bg-red-500/15 text-red-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 3 4 7v5c0 5 3.5 9.4 8 11 4.5-1.6 8-6 8-11V7l-8-4z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "ASC Facility & Dual Billing",
    description:
      "Synchronized submission of professional physician services (CMS-1500) and surgery center facility overhead (UB-04) without unbundling penalties.",
    iconBg: "bg-sky-500/15 text-sky-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
      </svg>
    ),
  },
  {
    title: "EHR Integration Matrix",
    description:
      "Seamless native synchronization with Epic, Cerner, eClinicalWorks, Athenahealth, NextGen, and Kareo. No messy data migration required.",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="2" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="19" cy="7" r="2" />
        <circle cx="5" cy="17" r="2" />
        <circle cx="19" cy="17" r="2" />
        <path d="M7 8.5 10 11M14 11l3-2.5M7 15.5 10 13M14 13l3 2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="solutions"
      className="relative bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
              MODULAR SERVICE SUITE
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
              Complete Practice Infrastructure
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
              Adopt our full end-to-end revenue cycle or deploy modular
              capabilities to power your internal administrative teams.
            </p>
          </div>

          <a
            href="#services"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold tracking-[0.08em] text-[#FF7A3A] uppercase transition hover:text-[#FF9A55]"
          >
            EXPLORE ALL SERVICES
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 transition duration-300 hover:border-[var(--border)] hover:opacity-95 sm:p-6"
            >
              <div
                className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl ${service.iconBg}`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
