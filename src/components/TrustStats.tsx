const stats = [
  {
    label: "Trusted by 150+ Physicians",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M18 8v4M30 8v4" strokeLinecap="round" />
        <path d="M16 12h16v8a10 10 0 0 1-20 0v-8z" strokeLinejoin="round" />
        <path d="M24 30v8M20 38h8" strokeLinecap="round" />
        <circle cx="24" cy="20" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Serving 30+ Medical Specialties",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="10" y="14" width="12" height="22" rx="6" />
        <rect x="26" y="14" width="12" height="22" rx="6" />
        <path d="M16 22h0M16 28h0M32 22h0M32 28h0" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
    ),
  },
  {
    label: "End-to-End Automated Billing",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="12" y="10" width="24" height="28" rx="2" />
        <path d="M18 18h12M18 24h12M18 30h8" strokeLinecap="round" />
        <path d="M30 32l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Up to 98% First-Pass Clean Claims",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="24" cy="24" r="14" />
        <path d="m16 24 5 5 11-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustStats() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 10% 50%, var(--glow), transparent 55%), radial-gradient(ellipse 50% 70% at 90% 50%, var(--glow), transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center"
          >
            <div className="text-[#FF6B1A]">{item.icon}</div>
            <p className="mt-3 max-w-[180px] text-sm font-medium leading-snug text-[var(--text)] sm:text-[15px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="relative mt-10 text-center">
        <a
          href="/about"
          className="inline-flex text-xs font-semibold tracking-[0.06em] text-[#FF6B1A] uppercase transition hover:text-[#E65200]"
        >
          Learn More →
        </a>
      </div>
    </section>
  );
}
