"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const servicesDropdown = [
  { label: "AI Agents", href: "/#solutions", comingSoon: true },
  { label: "Medical Billing Services", href: "/services/medical-billing" },
  {
    label: "Medical Billing and Coding Services",
    href: "/services/medical-billing-coding",
  },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
  { label: "Medical Billing Audit", href: "/services/medical-billing-audit" },
];

const specialitiesDropdown = [
  { label: "Cardiology", href: "/specialties" },
  { label: "Endocrinology", href: "/specialties" },
  { label: "Gastroenterology", href: "/specialties" },
  { label: "Obstetrics & Gynaecology", href: "/specialties" },
  { label: "Orthopedics", href: "/specialties" },
  { label: "Otolaryngology (ENT)", href: "/specialties" },
  { label: "Dentistry", href: "/specialties" },
  { label: "Pediatrics", href: "/specialties" },
  { label: "Nephrology", href: "/specialties" },
  { label: "Explore More...", href: "/specialties" },
];

const resourcesDropdown = [
  { label: "Blog", href: "/blogs" },
];

const companyDropdown = [
  { label: "Contact Us", href: "/contact" },
  { label: "Locations", href: "/locations" },
  { label: "Careers", href: "/careers" },
];

const navLinks = [
  { label: "Home", href: "/", active: true },
  {
    label: "Services",
    href: "/#solutions",
    hasDropdown: true,
    items: servicesDropdown,
  },
  { label: "EMR/EHR", href: "/emr-ehr" },
  {
    label: "Specialities",
    href: "/specialties",
    hasDropdown: true,
    items: specialitiesDropdown,
  },
  {
    label: "Resources",
    href: "/blogs",
    hasDropdown: true,
    items: resourcesDropdown,
  },
  {
    label: "Company",
    href: "/about",
    hasDropdown: true,
    items: companyDropdown,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-strong)] bg-[var(--header-bg)] backdrop-blur transition-all duration-300 supports-[backdrop-filter]:bg-[var(--header-bg)]">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-2 px-4 sm:h-20 sm:gap-3 sm:px-6 lg:h-24 lg:px-8">
        <Link
          href="/"
          aria-label="InterPulse Global"
          className="flex min-w-0 shrink-0 items-center self-center gap-2 sm:gap-2.5"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
            className="h-8 w-8 shrink-0 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
          >
            <path
              d="M18 34c0-10 8-18 18-18"
              stroke="#00407A"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M46 30c0 10-8 18-18 18"
              stroke="#F37021"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M22 40A16 16 0 0 1 18 30"
              stroke="#2563EB"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M42 24A16 16 0 0 1 46 34"
              stroke="#FB923C"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M14 33h12l3-7 4 14 3-7h8l6-4"
              stroke="#F37021"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M48 29l8-5-2 9"
              stroke="#F37021"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-tight text-[var(--text)] sm:text-[17px] lg:text-[18px]">
              InterPulse
            </span>
            <span className="block text-[10px] font-medium tracking-[0.22em] text-[var(--text-muted)] uppercase sm:text-[11px]">
              Global
            </span>
          </span>
        </Link>

        <nav
          ref={navRef}
          className="hidden items-center gap-5 text-[13px] font-semibold tracking-[0.04em] uppercase lg:flex xl:gap-6"
        >
          {navLinks.map((link) =>
            link.items ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  aria-expanded={openDropdown === link.label}
                  aria-haspopup="true"
                  className={`group relative inline-flex items-center gap-1 transition-colors hover:text-[#FF6B1A] ${
                    openDropdown === link.label
                      ? "text-[#FF6B1A]"
                      : "text-[var(--text)]"
                  }`}
                >
                  {link.label}
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className={`h-3.5 w-3.5 opacity-70 transition-transform ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <span className="absolute bottom-[-6px] left-0 h-0.5 w-0 bg-[#FF6B1A] transition-all duration-300 group-hover:w-full" />
                </a>

                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 z-50 min-w-[260px] max-w-[min(340px,calc(100vw-2rem))] pt-2 xl:min-w-[300px]">
                    <div className="max-h-[70vh] overflow-y-auto border border-[var(--border)] bg-[var(--surface-elevated)] py-1 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-5 py-3 text-[12px] font-semibold tracking-[0.06em] text-[var(--text)] uppercase transition-colors last:border-b-0 hover:bg-[#FF6B1A] hover:text-white"
                        >
                          <span>{item.label}</span>
                          {"comingSoon" in item && item.comingSoon ? (
                            <span className="shrink-0 text-[9px] tracking-[0.04em] opacity-90">
                              Coming Soon
                            </span>
                          ) : null}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`group relative inline-flex items-center gap-1 transition-colors hover:text-[#FF6B1A] ${
                  link.active ? "text-[#FF6B1A]" : "text-[var(--text)]"
                }`}
              >
                {link.label}
                <span className="absolute bottom-[-6px] left-0 h-0.5 w-0 bg-[#FF6B1A] transition-all duration-300 group-hover:w-full" />
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href="#consult"
            className="hidden items-center justify-center rounded-md bg-[#FF6B1A] px-4 py-2.5 text-[12px] font-bold tracking-[0.06em] text-white uppercase transition hover:bg-[#E65200] sm:inline-flex"
          >
            Get Consultation
          </a>

          <button
            type="button"
            aria-label="Toggle Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--text)] transition-colors hover:bg-[var(--border)] lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[var(--border-strong)] bg-[var(--header-bg-solid)] px-4 py-4 backdrop-blur sm:max-h-[calc(100dvh-5rem)] lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.items ? (
                <div key={link.label}>
                  <div className="flex items-center">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-md px-3 py-3 text-sm font-semibold tracking-[0.04em] text-[var(--text)] uppercase transition-colors hover:text-[#FF6B1A]"
                    >
                      {link.label}
                    </a>
                    <button
                      type="button"
                      aria-label={`${link.label} submenu`}
                      aria-expanded={mobileDropdown === link.label}
                      onClick={() =>
                        setMobileDropdown((v) =>
                          v === link.label ? null : link.label,
                        )
                      }
                      className="inline-flex h-10 w-10 items-center justify-center text-[var(--text)] transition-colors hover:text-[#FF6B1A]"
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 opacity-70 transition-transform ${
                          mobileDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  {mobileDropdown === link.label && (
                    <div className="mb-2 overflow-hidden border border-[var(--border)] bg-[var(--surface-elevated)]">
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileDropdown(null);
                          }}
                          className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3 text-[12px] font-semibold tracking-[0.06em] text-[var(--text)] uppercase transition-colors last:border-b-0 hover:bg-[#FF6B1A] hover:text-white"
                        >
                          <span>{item.label}</span>
                          {"comingSoon" in item && item.comingSoon ? (
                            <span className="shrink-0 text-[9px] tracking-[0.04em] text-[#FF6B1A]">
                              Coming Soon
                            </span>
                          ) : null}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-semibold tracking-[0.04em] uppercase transition-colors ${
                    link.active
                      ? "text-[#FF6B1A]"
                      : "text-[var(--text)] hover:text-[#FF6B1A]"
                  }`}
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href="#consult"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#FF6B1A] px-4 py-3 text-[12px] font-bold tracking-[0.06em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
