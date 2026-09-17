import Image from "next/image";

const clinicalSpecialties = [
  "Cardiology & Cath Labs",
  "Orthopedic & Spine Surgery",
  "Internal & Family Medicine",
  "Pediatrics & VFC",
  "Ambulatory Surgery Centers",
];

const platformSolutions = [
  "End-to-End Billing & Coding",
  "Denial Prevention Engine",
  "Prior-Authorization Fast-Track",
  "EHR Connectivity Matrix",
  "Executive A/R Analytics",
];

const legalLinks = [
  { label: "HIPAA Privacy Policy", href: "#" },
  { label: "SOC 2 Compliance", href: "#" },
  { label: "Terms of Service", href: "#" },
];

function InterPulseLogo() {
  return (
    <div className="inline-flex items-center rounded-[10px] bg-white px-3 py-2 shadow-sm">
      <Image
        src="/interpulse-logo.jpg"
        alt="InterPulse Global"
        width={160}
        height={48}
        className="h-10 w-auto object-contain sm:h-11"
        priority
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[var(--surface)] text-[var(--text)] border-t border-[var(--border)]">
      {/* Soft top glow — matches design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.22)_0%,rgba(88,28,135,0.12)_35%,transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[1.15fr_1fr_1fr_1fr] lg:gap-x-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <InterPulseLogo />

            <p className="mt-5 max-w-[320px] text-[13px] leading-[1.65] text-[var(--text-dim)] sm:text-sm">
              InterPulse Global powers clinical practices with high-performance
              revenue cycle intelligence, denial mitigation, and seamless
              clearinghouse integration.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 px-3 py-1 text-[11px] font-medium text-emerald-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0"
                  fill="currentColor"
                >
                  <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm-1.1 13.3-3.2-3.2 1.4-1.4 1.8 1.8 3.8-3.8 1.4 1.4-5.2 5.2z" />
                </svg>
                HIPAA Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 px-3 py-1 text-[11px] font-medium text-emerald-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0"
                  fill="currentColor"
                >
                  <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                SOC 2 Type II
              </span>
            </div>
          </div>

          {/* Clinical Specialties */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold tracking-[0.04em] text-[var(--text)] sm:text-[13px]">
              CLINICAL SPECIALTIES
            </h3>
            <ul className="space-y-3 text-[13px] text-[var(--text-dim)] sm:text-sm">
              {clinicalSpecialties.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-[var(--text)]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Solutions */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold tracking-[0.04em] text-[var(--text)] sm:text-[13px]">
              PLATFORM SOLUTIONS
            </h3>
            <ul className="space-y-3 text-[13px] text-[var(--text-dim)] sm:text-sm">
              {platformSolutions.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-[var(--text)]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters & Support */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold tracking-[0.04em] text-[var(--text)] sm:text-[13px]">
              HEADQUARTERS & SUPPORT
            </h3>
            <div className="space-y-3 text-[13px] text-[var(--text-dim)] sm:text-sm">
              <p className="font-medium text-[#E5E7EB]">
                Sacramento US Headquarters
              </p>
              <p className="max-w-[220px] leading-[1.65]">
                1425 River Park Dr, Suite 300
                <br />
                Sacramento, CA 95815
              </p>
              <p>
                <a
                  href="tel:+16626647181"
                  className="transition-colors hover:text-[var(--text)]"
                >
                  +1 662 664 7181
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@interpulseglobal.com"
                  className="break-all transition-colors hover:text-[var(--text)] sm:break-normal"
                >
                  contact@interpulseglobal.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 pt-2 text-[11px] leading-5 text-[#6B7280] sm:mt-16 sm:text-xs md:flex-row md:items-center md:justify-between md:gap-8">
          <p>
            © 2025 InterPulse Global. All clinical algorithms and trademarks
            reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-gray-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
