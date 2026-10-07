import type { ReactNode } from "react";
import Link from "next/link";
import { specialties as specialtyData } from "@/data/specialties";

const iconClass = "h-14 w-14";

const icons: Record<string, ReactNode> = {
  "family-medicine": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 30 32 12l20 18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 26v22h28V26" strokeLinejoin="round" />
      <path d="m26 36 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dentistry: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M22 10c-4 0-8 3-8 8.5 0 9 5.5 16.5 9.5 24.5 1 2 3 4 5.5 4s3.5-1.5 4.5-3.5L38 36l2 7c1 2 2.5 3.5 4.5 3.5s4.5-2 5.5-4c4-8 9.5-15.5 9.5-24.5C59.5 13 55.5 10 51.5 10c-3.5 0-6 2-8 4-2-2-4.5-4-8-4-3 0-5.5 1.5-7.5 3.5C26 11.5 24 10 22 10z" strokeLinejoin="round" />
    </svg>
  ),
  "internal-medicine": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="32" cy="32" r="18" />
      <path d="M32 18v28M18 32h28" strokeLinecap="round" />
      <circle cx="32" cy="32" r="6" />
    </svg>
  ),
  pediatrics: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="32" cy="28" r="14" />
      <path d="M22 26h.02M42 26h.02M24 34c2.5 3 5.5 4.5 8 4.5s5.5-1.5 8-4.5" strokeLinecap="round" />
      <path d="M20 48c2-5 6-8 12-8s10 3 12 8" strokeLinecap="round" />
    </svg>
  ),
  geriatrics: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="32" cy="16" r="7" />
      <path d="M18 52c2-10 6-16 14-16s12 6 14 16" strokeLinecap="round" />
      <path d="M24 34c2.5-4 5-6 8-6s5.5 2 8 6" strokeLinecap="round" />
      <path d="M26 14c2-4 4-5 6-5" strokeLinecap="round" />
    </svg>
  ),
  "general-practice": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M22 16h20v10a12 12 0 0 1-20 0V16z" strokeLinejoin="round" />
      <path d="M26 12v4M38 12v4M32 38v12M26 50h12" strokeLinecap="round" />
      <circle cx="32" cy="26" r="3" fill="currentColor" stroke="none" />
    </svg>
  ),
  "general-surgery": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M18 44 44 18" strokeLinecap="round" />
      <path d="M22 18 16 24l22 22 6-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m38 18 8 8M20 40l-4 8" strokeLinecap="round" />
    </svg>
  ),
  orthopedics: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 8v48" strokeLinecap="round" />
      <path d="M26 14h12M24 22h16M26 30h12M24 38h16M27 46h10" strokeLinecap="round" />
      <circle cx="32" cy="8" r="3" />
      <circle cx="32" cy="56" r="3" />
    </svg>
  ),
  "cardiothoracic-surgery": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 52S16 42 10 32C6 24 10 16 18 14c5-1 10 1 14 8 4-7 9-9 14-8 8 2 12 10 8 18-6 10-22 20-22 20z" strokeLinejoin="round" />
      <path d="M14 34h6l3-6 4 12 3-6h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  neurosurgery: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 10c-10 0-18 7-18 17 0 7 4 13 10 16v7h16v-7c6-3 10-9 10-16 0-10-8-17-18-17z" strokeLinejoin="round" />
      <path d="M26 28c2 4 4 6 6 6s4-2 6-6M28 20c1.5-2 3-3 4-3s2.5 1 4 3" strokeLinecap="round" />
    </svg>
  ),
  "plastic-reconstructive-surgery": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <ellipse cx="32" cy="24" rx="12" ry="14" />
      <path d="M24 22h.02M40 22h.02M28 30c1.5 2 3 3 4 3s2.5-1 4-3" strokeLinecap="round" />
      <path d="M22 38c3 8 6 14 10 16 4-2 7-8 10-16" strokeLinecap="round" />
    </svg>
  ),
  urology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 10c-5 8-14 14-14 24a14 14 0 0 0 28 0c0-10-9-16-14-24z" strokeLinejoin="round" />
      <path d="M26 34c1.5 3 3.5 5 6 5s4.5-2 6-5" strokeLinecap="round" />
    </svg>
  ),
  "otolaryngology-ent": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M28 12c-8 2-14 10-12 20 1 6 5 10 10 12" strokeLinecap="round" />
      <path d="M28 12c4-1 10 0 14 4 5 5 6 14 2 20-2 3-5 5-8 6" strokeLinecap="round" />
      <path d="M30 28c0 4 2 6 4 8v6" strokeLinecap="round" />
      <ellipse cx="22" cy="30" rx="3" ry="5" />
      <path d="M34 48h.02" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  ),
  "vascular-surgery": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 8v14M32 22c-8 4-14 4-18 2M32 22c8 4 14 4 18 2" strokeLinecap="round" />
      <path d="M20 28c-4 6-6 12-4 18M44 28c4 6 6 12 4 18" strokeLinecap="round" />
      <path d="M32 22v10M26 40c2 4 4 8 6 12M38 40c-2 4-4 8-6 12" strokeLinecap="round" />
    </svg>
  ),
  cardiology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 52S16 42 10 32C6 24 10 16 18 14c5-1 10 1 14 8 4-7 9-9 14-8 8 2 12 10 8 18-6 10-22 20-22 20z" strokeLinejoin="round" />
      <path d="M14 32h8l3-7 5 14 4-7h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pulmonology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 12v40" strokeLinecap="round" />
      <path d="M32 22c-8-6-18-4-20 6s4 18 12 22" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 22c8-6 18-4 20 6s-4 18-12 22" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 30c2 2 4 3 6 3M44 30c-2 2-4 3-6 3" strokeLinecap="round" />
    </svg>
  ),
  gastroenterology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M28 12c-2 0-6 2-6 8 0 6 4 8 8 14 2 3 2 6 0 9-3 4-2 9 2 11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 12c6 2 10 8 8 16-1 6-4 8-2 12 2 4 0 10-6 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 28c4 2 8 2 12 0" strokeLinecap="round" />
    </svg>
  ),
  nephrology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M24 12c-4 6-10 10-10 20a12 12 0 0 0 20 4" strokeLinejoin="round" />
      <path d="M40 12c4 6 10 10 10 20a12 12 0 0 1-20 4" strokeLinejoin="round" />
      <path d="M28 36c1.5 4 3 8 4 12M36 36c-1.5 4-3 8-4 12" strokeLinecap="round" />
    </svg>
  ),
  endocrinology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M24 14c0-4 3.5-7 8-7s8 3 8 7v4" strokeLinecap="round" />
      <path d="M20 22c0-2 2-4 5-4h14c3 0 5 2 5 4v6c0 8-5 14-12 14s-12-6-12-14v-6z" strokeLinejoin="round" />
      <path d="M28 28h8M32 24v12" strokeLinecap="round" />
      <path d="M26 46v6M38 46v6" strokeLinecap="round" />
    </svg>
  ),
  rheumatology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M18 40c0-6 4-10 8-12l4-10c1-3 4-4 6-2s1 5-1 7l-3 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 28c2-1 5 0 6 3l4 10c2 4 1 9-3 11s-9 0-11-4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="36" r="3" />
      <circle cx="36" cy="42" r="3" />
    </svg>
  ),
  "infectious-diseases": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 14v36" strokeLinecap="round" />
      <path d="M32 22c-7-5-16-3-18 5s3 16 11 20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 22c7-5 16-3 18 5s-3 16-11 20" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="30" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="42" cy="28" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="26" cy="38" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="40" cy="36" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  "hematology-oncology": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 12c-2 4-8 8-8 14a8 8 0 0 0 16 0c0-6-6-10-8-14z" strokeLinejoin="round" />
      <path d="M22 42c0-4 4-6 10-6s10 2 10 6c0 6-4 12-10 12s-10-6-10-12z" strokeLinejoin="round" />
      <path d="M28 44h8M32 40v8" strokeLinecap="round" />
    </svg>
  ),
  "obstetrics-gynaecology": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="32" cy="18" r="8" />
      <path d="M32 26v10" strokeLinecap="round" />
      <path d="M22 36c2 8 6 14 10 16 4-2 8-8 10-16" strokeLinecap="round" />
      <path d="M24 36h16" strokeLinecap="round" />
    </svg>
  ),
  "maternal-fetal-medicine": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M20 18c0-6 5-10 12-10s12 4 12 10c0 14-8 28-12 34-4-6-12-20-12-34z" strokeLinejoin="round" />
      <circle cx="30" cy="28" r="5" />
      <path d="M30 33v6M27 36h6" strokeLinecap="round" />
    </svg>
  ),
  neurology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M38 14c-6-4-14-3-18 3-3 4-3 10 0 14 2 3 2 6 0 9l-4 6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 14c6 2 10 8 9 15-1 5-4 8-8 10-3 2-4 5-3 8l2 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 28c2 3 5 5 8 5s5-2 7-5" strokeLinecap="round" />
    </svg>
  ),
  psychiatry: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M28 12c-8 1-14 8-13 17 1 6 5 10 10 12v7h10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 14c7 2 12 8 11 16-1 5-4 9-9 11" strokeLinecap="round" />
      <path d="M40 36h10l4 4v8H40z" strokeLinejoin="round" />
      <circle cx="45" cy="44" r="2.5" />
    </svg>
  ),
  "pain-management": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="28" cy="14" r="5" />
      <path d="M28 20v10M20 28l8 4 10-2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 34c-2 6 0 12 4 16M36 30c4 4 6 10 4 16" strokeLinecap="round" />
      <circle cx="42" cy="38" r="8" opacity="0.5" />
      <circle cx="42" cy="38" r="4" />
    </svg>
  ),
  "emergency-medicine-urgent-care": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M14 36c0-6 4-10 10-12 2-6 8-10 14-8 4 1 7 5 8 9 5 1 10 6 10 12 0 7-6 13-14 13H28c-8 0-14-6-14-14z" strokeLinejoin="round" />
      <path d="M32 28v12M26 34h12" strokeLinecap="round" />
    </svg>
  ),
  "critical-care-medicine": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="10" y="18" width="28" height="20" rx="2" />
      <path d="M14 28h4l3-6 4 12 3-6h6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 16v32M40 20h12M40 44h12" strokeLinecap="round" />
      <path d="M48 28v8" strokeLinecap="round" />
    </svg>
  ),
  anesthesiology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="32" cy="22" r="10" />
      <path d="M22 28c-2 2-4 5-4 8 0 4 0 6 6 8h16c6-2 6-4 6-8 0-3-2-6-4-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 36h16M28 40h8" strokeLinecap="round" />
      <path d="M26 48h12" strokeLinecap="round" />
    </svg>
  ),
  radiology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="12" y="14" width="40" height="36" rx="3" />
      <circle cx="32" cy="32" r="10" />
      <path d="M32 22v20M22 32h20" strokeLinecap="round" />
      <circle cx="32" cy="32" r="3" />
    </svg>
  ),
  pathology: (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M24 10h16v14l8 24H16l8-24V10z" strokeLinejoin="round" />
      <path d="M24 10h16M20 36h24" strokeLinecap="round" />
      <circle cx="32" cy="42" r="3" />
    </svg>
  ),
  "physical-medicine-rehabilitation": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="12" y="28" width="40" height="10" rx="2" />
      <path d="M16 28V22h8M48 28V22h-8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="18" r="4" />
      <path d="M28 22v6M22 38v10M42 38v10" strokeLinecap="round" />
    </svg>
  ),
  "chiropractic-medicine": (
    <svg viewBox="0 0 64 64" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M32 8v48" strokeLinecap="round" />
      <path d="M24 14h16M22 22h20M24 30h16M22 38h20M25 46h14" strokeLinecap="round" />
      <path d="M20 18c2 2 4 3 6 3M44 18c-2 2-4 3-6 3M20 34c2 2 4 3 6 3M44 34c-2 2-4 3-6 3" strokeLinecap="round" />
    </svg>
  ),
};

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="relative bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
            Clinical Specialties
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.4rem] md:leading-[1.2]">
            Which Healthcare Specialties Benefit from InterPulse Global Billing
            Expertise
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
            From primary care groups to surgical centers, InterPulse Global
            delivers specialty-aware medical billing for small and mid-sized
            practices that need cleaner claims and steadier cash flow.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-14 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-y-12">
          {specialtyData.map((item) => (
            <Link
              key={item.slug}
              href={`/specialties/${item.slug}`}
              className="group flex flex-col items-center text-center outline-none transition focus-visible:ring-2 focus-visible:ring-[#FF6B1A]/50"
            >
              <div className="scale-90 text-[var(--text-muted)] transition-colors group-hover:text-[#FF6B1A] sm:scale-100">
                {icons[item.slug]}
              </div>
              <p className="mt-3 max-w-[140px] text-xs font-medium leading-snug text-[var(--text)] transition-colors group-hover:text-[#FF6B1A] sm:max-w-[150px] sm:text-sm">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/specialties"
            className="inline-flex text-xs font-semibold tracking-[0.06em] text-[#FF6B1A] uppercase transition hover:text-[#E65200]"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}
