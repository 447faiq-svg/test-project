"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Specialties", href: "/specialties" },
  { label: "Blogs and Articles", href: "/blogs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-28 w-full border-b border-[var(--border-strong)] bg-[var(--header-bg)] backdrop-blur transition-all duration-300 supports-[backdrop-filter]:bg-[var(--header-bg)]">
      <div className="mx-auto flex h-28 w-full max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center">
          <span className="theme-logo-frame inline-flex rounded-xl bg-white px-2 py-1">
            <Image
              src="/interpulse-logo.jpg"
              alt="InterPulse Global"
              width={160}
              height={56}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative transition-colors hover:text-[var(--text)] ${
                link.active
                  ? "font-semibold text-[var(--text)]"
                  : "font-normal text-[var(--text-muted)]"
              }`}
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 h-0.5 w-0 bg-[#F06529] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="relative hidden xl:block">
            <a
              href="#pilot"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[var(--border-strong)] bg-transparent px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#F06529] hover:text-[var(--text)]"
            >
              $1 Billing — Start Your Practice
            </a>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F06529] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#F06529]" />
            </span>
          </div>

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
        <div className="border-t border-[var(--border-strong)] bg-[var(--header-bg-solid)] px-4 py-4 backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-sm transition-colors ${
                  link.active
                    ? "font-semibold text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pilot"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md border border-[var(--border-strong)] px-4 py-3 text-sm font-medium text-[var(--text)] hover:bg-[#F06529] hover:text-[var(--text)]"
            >
              $1 Billing — Start Your Practice
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
