const specialties = [
  {
    title: "Internal Medicine",
    description:
      "Maximizing complex Chronic Care Management (CCM), Remote Patient Monitoring (RPM), and annual wellness visits paired with problem-oriented encounters.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M3 12h3l2-5 3 10 2-5h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Family Medicine",
    description:
      "Flawless handling of preventive physical exam splits, minor in-office procedures, and documentation of Modifier -25 to eliminate commercial recoupments.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.6 0-.9.1 1.2.9 2 2 2 3.4V19h6v-2.5c0-2.3-4.7-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Pediatrics",
    description:
      "Precise Vaccines for Children (VFC) synchronization, multi-component immunization administration (90460/90461), and developmental screenings.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 10.5h.01M15.5 10.5h.01M8.5 15c1.2 1.3 2.8 2 3.5 2s2.3-.7 3.5-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Obstetrics & Gynecology",
    description:
      "Managing complex global maternity packages (59400/59510), high-risk antepartum splits, colposcopies, and in-office surgical procedures.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="9" r="5" />
        <path d="M12 14v7M9 18h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cardiology & Cath Labs",
    description:
      "Expertise in nuclear stress tests (78452), echocardiography, continuous cardiac telemetry, and complex coronary stent angioplasties.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 21s-6.7-4.4-9.3-8.1C.5 9.9 1.7 6 5.1 5.1 7.1 4.5 9.2 5.2 12 8c2.8-2.8 4.9-3.5 6.9-2.9 3.4.9 4.6 4.8 2.4 7.8C18.7 16.6 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: "Orthopedics & Spine",
    description:
      "Surgical implant invoice carve-outs, multiple procedure discounting (modifier -51), and assistant surgeon coordination for hospital and ASC settings.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5M8 10l4 2 4-2M12 12v4M9 21l3-5 3 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="relative bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
            SUB-SPECIALTY MASTERY
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
            Specialty-Tuned Reimbursement Logic
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[var(--text-dim)] sm:text-base">
            Generic billers miss specialty-specific modifiers. InterPulse
            assigns certified experts trained in your specific clinical field.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {specialties.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5 transition duration-300 hover:border-[var(--border)] hover:opacity-95 sm:p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-[#FF7A3A]">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-dim)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
