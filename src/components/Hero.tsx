export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 85% 20%, rgba(0,64,122,0.08), transparent 55%), radial-gradient(ellipse 70% 50% at 10% 90%, rgba(255,107,26,0.07), transparent 50%), linear-gradient(180deg, var(--surface) 0%, var(--surface-elevated) 100%)",
        }}
      />
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.35]"
      />

      <div className="relative mx-auto w-full max-w-[900px] px-4 pt-12 pb-10 text-center sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-12">
        <div className="hero-fade-up">
          <p className="font-[family-name:var(--font-display)] text-[13px] font-semibold tracking-[0.22em] text-[#FF6B1A] uppercase">
            InterPulse Global
          </p>

          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.08] font-bold tracking-[-0.03em] text-[var(--text)] sm:text-5xl lg:text-[3.25rem]">
            Global Revenue Intelligence for Modern Healthcare Practices.
          </h1>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
            InterPulse Global eliminates administrative friction, neutralizes
            claims denials, and accelerates clinical reimbursements across 30+
            medical specialties.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
            <a
              href="#solutions"
              className="inline-flex h-12 items-center justify-center border border-[var(--border-strong)] bg-transparent px-6 text-[12px] font-semibold tracking-[0.06em] text-[var(--text)] uppercase transition hover:border-[#FF6B1A]/50 hover:text-[#FF6B1A]"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
