const services = [
  {
    title: "AI Agents",
    description:
      "Intelligent workflows that accelerate prior authorizations, flag denial risk early, and keep your revenue cycle moving without constant manual oversight.",
    comingSoon: true,
    href: "/#consult",
  },
  {
    title: "Medical Billing Services",
    description:
      "End-to-end claim handling—from charge capture through payer follow-up—so your team spends less time chasing payments and more time caring for patients.",
    href: "/services/medical-billing",
  },
  {
    title: "Laboratory Billing Services",
    description:
      "Specialty lab billing built to capture specimen complexity, payer nuances, and compliance requirements while protecting test-level reimbursement.",
    href: "/#consult",
  },
  {
    title: "Medical Credentialing Services",
    description:
      "Provider enrollment and payer-panel setup handled with careful follow-through, so clinicians can practice without enrollment bottlenecks.",
    href: "/#consult",
  },
  {
    title: "Medical Billing & Coding Services",
    description:
      "Surface lost revenue, coding gaps, and denial patterns across your current workflow—without disrupting day-to-day operations.",
    href: "/services/medical-billing-coding",
  },
  {
    title: "MIPS Reporting",
    description:
      "Accurate MIPS support that helps eligible Medicare providers protect reimbursement and document quality performance with confidence.",
    href: "/#consult",
  },
  {
    title: "Revenue Cycle Management",
    description:
      "Every stage of the revenue cycle managed with discipline—improving collections, shortening delays, and strengthening financial outcomes.",
    href: "/services/revenue-cycle-management",
  },
  {
    title: "Medical Billing Audit",
    description:
      "Targeted audits that expose revenue leakage, coding weaknesses, and denial trends—then convert findings into cleaner claims and stronger recovery.",
    href: "/services/medical-billing-audit",
  },
];

export default function Services() {
  return (
    <section
      id="solutions"
      className="relative bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
            Modular Service Suite
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
            Your Partner in High-Performance Medical Billing
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
            InterPulse Global removes the friction from{" "}
            <strong className="font-semibold text-[var(--text)]">
              medical billing services
            </strong>{" "}
            so clinicians can stay focused on care. We combine specialty-aware
            coding, disciplined claim management, and clear reporting to protect
            revenue and shorten the path from encounter to payment.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative flex flex-col border border-[var(--border)] bg-[var(--surface-card)] p-5 transition duration-300 hover:border-[#FF6B1A]/35 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug text-[var(--text)] sm:text-[1.15rem]">
                  <a
                    href={service.href}
                    className="transition hover:text-[#FF6B1A]"
                  >
                    {service.title}
                  </a>
                </h3>
                {service.comingSoon && (
                  <span className="shrink-0 bg-[#FF6B1A]/15 px-2 py-1 text-[10px] font-bold tracking-[0.06em] text-[#FF6B1A] uppercase">
                    Coming Soon
                  </span>
                )}
              </div>
              <div className="mt-3 h-px w-full bg-[var(--border-strong)]" />
              <p className="mt-4 flex-1 text-sm leading-6 text-[var(--text-muted)]">
                {service.description}
              </p>
              <a
                href={service.href}
                className="mt-6 inline-flex text-xs font-semibold tracking-[0.06em] text-[#FF6B1A] uppercase transition hover:text-[#E65200]"
              >
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
