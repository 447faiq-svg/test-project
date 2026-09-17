"use client";

import { FormEvent, useState } from "react";

const perks = [
  {
    lead: "100% of Recovered Funds",
    rest: " deposit straight into your clinic's bank account.",
  },
  {
    lead: "HIPAA Business Associate Agreement (BAA)",
    rest: " signed immediately upon onboarding.",
  },
  {
    lead: "No Contract Lock-in.",
    rest: " Walk away anytime if we do not outperform your current setup.",
  },
];

const specialties = [
  "Cardiology",
  "Orthopedics & Spine",
  "Internal Medicine",
  "Family Medicine",
  "Pediatrics",
  "Obstetrics & Gynecology",
  "Ambulatory Surgery Center",
  "Other",
];

const volumes = [
  "Under $150,000 / mo",
  "$150,000 - $500,000 / mo",
  "$500,000 - $1,000,000 / mo",
  "$1,000,000+ / mo",
];

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-[var(--border)] bg-[var(--input-bg)] px-3.5 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none transition focus:border-[#FF6B1A]/60";

export default function PilotOffer() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="pilot"
      className="relative overflow-hidden bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(255,107,26,0.12)_0%,transparent_60%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* Left copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B1A]/40 px-3 py-1 text-xs font-medium text-[var(--text)]">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B1A]/15 text-[#FF6B1A]">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
                <path d="M7 7h4V3H7v4zm6 0h4V3h-4v4zM7 13h4V9H7v4zm6 0h4V9h-4v4zM7 21h4v-4H7v4zm6 0h4v-4h-4v4z" />
              </svg>
            </span>
            UNMATCHED PROVIDER PILOT
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
            One Dollar.
            <br />
            Zero Risk.
            <br />
            <span className="text-[#FF6B1A]">Immediate Revenue Surge.</span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--text)]/80 sm:text-base sm:leading-8">
            Test InterPulse Global on your practice&apos;s active claims for just
            $1. We will scrub your next encounter batch, flag missed billable
            codes, and verify cash settlement before you sign any contract.
          </p>

          <ul className="mt-8 space-y-4">
            {perks.map((perk) => (
              <li key={perk.lead} className="flex gap-3 text-[15px] leading-6 text-[var(--text)]/85">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>
                <span>
                  <strong className="font-semibold text-[var(--text)]">{perk.lead}</strong>
                  {perk.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right form */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] sm:text-2xl">
                Activate $1 Practice Trial
              </h3>
              <p className="mt-1.5 text-sm text-[var(--text-muted)]">
                Direct onboarding with a senior RCM auditor within 2 hours
              </p>
            </div>
            <span className="shrink-0 rounded-lg bg-[#FF6B1A] px-2.5 py-1 text-xs font-bold text-white">
              $1.00 Total
            </span>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-6 text-center">
              <p className="text-lg font-semibold text-[var(--text)]">Request received</p>
              <p className="mt-2 text-sm text-emerald-300">
                A senior RCM auditor will contact you shortly.
              </p>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <label className="block text-left text-xs font-medium text-[var(--text-muted)]">
                Practice or Clinic Name*
                <input
                  required
                  name="practice"
                  type="text"
                  placeholder="e.g. Metro Valley Cardiology Assoc"
                  className={fieldClass}
                />
              </label>

              <label className="block text-left text-xs font-medium text-[var(--text-muted)]">
                Specialty*
                <select required name="specialty" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select Specialty
                  </option>
                  {specialties.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-left text-xs font-medium text-[var(--text-muted)]">
                Monthly Billing Volume*
                <select required name="volume" defaultValue={volumes[1]} className={fieldClass}>
                  {volumes.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-left text-xs font-medium text-[var(--text-muted)]">
                Physician or Admin Email*
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="admin@clinic.com"
                  className={fieldClass}
                />
              </label>

              <label className="block text-left text-xs font-medium text-[var(--text-muted)]">
                Direct Phone Number*
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className={fieldClass}
                />
              </label>

              <label className="block text-left text-xs font-medium text-[var(--text-muted)]">
                Current EHR / Billing Software
                <input
                  name="ehr"
                  type="text"
                  placeholder="e.g. Epic, eClinicalWorks, Athena, NextGen..."
                  className={fieldClass}
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B1A] px-4 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(255,107,26,0.35)] transition hover:bg-[#FF7A33]"
              >
                Activate $1 Pilot on Live Claims
                <span aria-hidden>→</span>
              </button>

              <p className="text-center text-[11px] leading-5 text-[var(--text-muted)]">
                🔒 Includes mutual BAA signature. No automatic recurring fees
                without contract.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
