const trustItems = [
  {
    label: "$0 Upfront Cost",
    iconClass: "text-emerald-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm-1.1 13.3-3.2-3.2 1.4-1.4 1.8 1.8 3.8-3.8 1.4 1.4-5.2 5.2z" />
      </svg>
    ),
  },
  {
    label: "5-15 Day Reimbursements",
    iconClass: "text-sky-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
      </svg>
    ),
  },
  {
    label: "Certified AAPC & AHIMA Coders",
    iconClass: "text-sky-400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1.1 14.3-3.2-3.2 1.4-1.4 1.8 1.8 3.8-3.8 1.4 1.4-5.2 5.2z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative flex-1 overflow-hidden bg-[var(--surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-[480px] w-[min(920px,92%)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,107,26,0.12)_0%,transparent_68%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1080px] flex-col items-center px-4 pb-0 pt-10 text-center sm:px-6 sm:pt-12 lg:pt-14">
        {/* Top badge */}
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]/80 px-3.5 py-1.5 text-[11px] text-[var(--text)]/80 sm:gap-x-3 sm:text-xs">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-px bg-teal-400/90" />
            HIPAA Certified &amp; SOC 2 Type II Aligned
          </span>
          <span className="text-[var(--text-muted)]">|</span>
          <span>
            <span className="font-semibold text-[#34D399]">98.3%</span> First-Pass
            Acceptance
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-[900px] text-[2.1rem] leading-[1.08] font-bold tracking-[-0.035em] text-[var(--text)] sm:mt-9 sm:text-5xl md:text-6xl lg:text-[4.1rem]">
          Global Revenue Intelligence for Modern Healthcare{" "}
          <span className="bg-gradient-to-r from-[#FFC08A] via-[#FF9A55] to-[#FF6B1A] bg-clip-text text-transparent">
            Practices.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[var(--text-muted)] sm:text-base md:leading-8">
          InterPulse Global eliminates administrative friction, neutralizes
          claims denials, and accelerates clinical reimbursements across 30+
          medical specialties.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-3.5">
          <a
            href="#pilot"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B1A] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,107,26,0.45)] transition hover:bg-[#FF7A33] sm:w-auto"
          >
            Start $1 Practice Trial
            <span aria-hidden>→</span>
          </a>
          <a
            href="#platform"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-[var(--border)] bg-transparent px-5 py-3.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--border)] sm:w-auto"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#FF6B1A]/70 text-[#FF6B1A]">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-2.5 w-2.5" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
            Explore Platform
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-8 flex w-full max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-2 text-[13px] text-[var(--text)]/85"
            >
              <span className={item.iconClass}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Claims Clearinghouse dashboard */}
        <div className="mt-12 w-full max-w-[980px] sm:mt-14">
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] text-left shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            {/* Header */}
            <div className="flex flex-col gap-3 border-b border-[var(--border)] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] font-medium tracking-[0.08em] text-[var(--text)]/90 uppercase">
                  INTERPULSE CLAIMS CLEARINGHOUSE
                </span>
                <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-400">
                  NODE #US-WEST-RCM
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
                <span>STATUS:</span>
                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-[11px] font-medium text-orange-300">
                  99.8% Scrub Accuracy
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="grid gap-4 p-4 lg:grid-cols-[1.35fr_1fr] lg:gap-5 lg:p-5">
              {/* Encounter cards */}
              <div className="space-y-3">
                {/* ENC 98421 */}
                <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--input-bg)] p-3.5 sm:items-center sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M3 12h3l2-5 3 10 2-5h6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--text)]">ENC #98421</span>
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                          <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                        </svg>
                        First-Pass Approved
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-[13px]">
                      Cardiology • Echo + Doppler (CPT 93306) • BCBS
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold text-[var(--text)]">$1,480.00</p>
                    <p className="mt-0.5 text-xs text-emerald-400">Disbursed in 6 days</p>
                  </div>
                </div>

                {/* ENC 98422 */}
                <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--input-bg)] p-3.5 sm:items-center sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M12 5c-2 3-5 5-5 9a5 5 0 0 0 10 0c0-4-3-6-5-9z" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--text)]">ENC #98422</span>
                      <span className="inline-flex items-center gap-1 text-xs text-orange-400">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.5 13.1-1.4 1.4L12 13.4l-2.1 2.1-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4L12 10.6l2.1-2.1 1.4 1.4-2.1 2.1 2.1 2.1z" />
                        </svg>
                        Auto-Scrubbed &amp; Cleared
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-[13px]">
                      Orthopedic Spine • Modifier -59 Verified • UHC
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold text-[var(--text)]">$4,220.00</p>
                    <p className="mt-0.5 text-xs text-sky-400">Clean Batch #409</p>
                  </div>
                </div>
              </div>

              {/* Volume stats */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--input-bg)] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase">
                    30-DAY DISBURSED VOLUME
                  </p>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M3 17 9 11l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
                  $1,248,500
                </p>
                <p className="mt-1.5 text-sm text-emerald-400">
                  +24.8% net collection yield vs baseline
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-[12px]">
                      <span className="text-[var(--text-muted)]">Clean Claim Acceptance</span>
                      <span className="font-medium text-[var(--text)]">99.8%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[99.8%] rounded-full bg-[#FF6B1A]" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-[12px]">
                      <span className="text-[var(--text-muted)]">A/R Settled &lt; 30 Days</span>
                      <span className="font-medium text-[var(--text)]">91.4%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[91.4%] rounded-full bg-teal-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
