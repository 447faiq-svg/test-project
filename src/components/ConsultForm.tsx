"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "mt-1.5 w-full border border-[var(--border)] bg-[var(--input-bg)] px-3 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none transition focus:border-[#FF6B1A]/70";

export default function ConsultForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="consult"
      className="relative border-y border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-5 flex flex-col gap-1 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
              Start here
            </p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--text)] sm:text-2xl">
              Request a consultation
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--text-muted)]">
            Tell us about your practice — we&apos;ll follow up within one
            business day.
          </p>
        </div>

        {submitted ? (
          <p className="py-4 text-center text-sm font-medium text-emerald-600">
            Thanks — we&apos;ll contact you shortly.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end"
          >
            <label className="block text-left text-xs font-semibold text-[var(--text)]">
              First Name *
              <span className="relative mt-1.5 block">
                <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[var(--text-muted)]">
                  <UserIcon />
                </span>
                <input
                  required
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className={`${fieldClass} pl-9`}
                />
              </span>
            </label>

            <label className="block text-left text-xs font-semibold text-[var(--text)]">
              Last Name *
              <span className="relative mt-1.5 block">
                <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[var(--text-muted)]">
                  <UserIcon />
                </span>
                <input
                  required
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className={`${fieldClass} pl-9`}
                />
              </span>
            </label>

            <label className="block text-left text-xs font-semibold text-[var(--text)]">
              Phone *
              <span className="relative mt-1.5 block">
                <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[var(--text-muted)]">
                  <PhoneIcon />
                </span>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className={`${fieldClass} pl-9`}
                />
              </span>
            </label>

            <label className="block text-left text-xs font-semibold text-[var(--text)]">
              Email *
              <span className="relative mt-1.5 block">
                <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[var(--text-muted)]">
                  <MailIcon />
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`${fieldClass} pl-9`}
                />
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex h-[46px] w-full items-center justify-center bg-[#FF6B1A] px-6 text-[12px] font-bold tracking-[0.06em] whitespace-nowrap text-white uppercase transition hover:bg-[#E65200] sm:col-span-2 lg:col-span-1 lg:w-auto"
            >
              Get Consultation
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}
