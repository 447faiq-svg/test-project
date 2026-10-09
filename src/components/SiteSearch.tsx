"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import { specialties } from "@/data/specialties";

type SearchItem = {
  label: string;
  href: string;
  group: string;
};

const staticPages: SearchItem[] = [
  { label: "Home", href: "/", group: "Pages" },
  { label: "About", href: "/about", group: "Pages" },
  { label: "Contact", href: "/contact", group: "Pages" },
  { label: "Careers", href: "/careers", group: "Pages" },
  { label: "Locations", href: "/locations", group: "Pages" },
  { label: "EMR / EHR Support", href: "/emr-ehr", group: "Pages" },
  { label: "Blogs", href: "/blogs", group: "Pages" },
  { label: "Specialties", href: "/specialties", group: "Pages" },
  { label: "Privacy Policy", href: "/privacy", group: "Legal" },
  { label: "Terms & Conditions", href: "/terms", group: "Legal" },
  {
    label: "AI Agents",
    href: "/services/ai-agents",
    group: "Services",
  },
  {
    label: "AI-Powered Medical Billing",
    href: "/services/ai-agents",
    group: "Services",
  },
  {
    label: "Medical Billing Services",
    href: "/services/medical-billing",
    group: "Services",
  },
  {
    label: "Medical Billing & Coding",
    href: "/services/medical-billing-coding",
    group: "Services",
  },
  {
    label: "Laboratory Billing Services",
    href: "/services/laboratory-billing",
    group: "Services",
  },
  {
    label: "Medical Credentialing Services",
    href: "/services/medical-credentialing",
    group: "Services",
  },
  {
    label: "MIPS Reporting",
    href: "/services/mips-reporting",
    group: "Services",
  },
  {
    label: "Revenue Cycle Management",
    href: "/services/revenue-cycle-management",
    group: "Services",
  },
  {
    label: "Medical Billing Audit",
    href: "/services/medical-billing-audit",
    group: "Services",
  },
  { label: "Request Consultation", href: "/#consult", group: "Pages" },
];

const catalog: SearchItem[] = [
  ...staticPages,
  ...specialties.map((item) => ({
    label: item.title,
    href: `/specialties/${item.slug}`,
    group: "Specialties",
  })),
  ...blogPosts.map((post) => ({
    label: post.title,
    href: `/blogs/${post.slug}`,
    group: "Blogs",
  })),
];

type SiteSearchProps = {
  onNavigate?: () => void;
  className?: string;
  compact?: boolean;
};

export default function SiteSearch({
  onNavigate,
  className = "",
  compact = false,
}: SiteSearchProps) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return catalog
      .filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          item.group.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(href);
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <label className="sr-only" htmlFor={compact ? "site-search-mobile" : "site-search"}>
        Search site
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-[var(--text-muted)]">
          <SearchIcon />
        </span>
        <input
          id={compact ? "site-search-mobile" : "site-search"}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) {
              e.preventDefault();
              go(results[0].href);
            }
            if (e.key === "Escape") setOpen(false);
          }}
          placeholder="Search…"
          className={`w-full border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[#FF6B1A]/70 ${
            compact
              ? "h-11 rounded-md py-2 pr-3 pl-9 text-sm"
              : "h-9 rounded-md py-1.5 pr-3 pl-8 text-xs lg:w-44 xl:w-52"
          }`}
        />
      </div>

      {open && query.trim() ? (
        <div className="absolute top-full right-0 z-[60] mt-1 w-[min(100vw-2rem,320px)] overflow-hidden border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-xs text-[var(--text-muted)]">
              No matches for &ldquo;{query.trim()}&rdquo;
            </p>
          ) : (
            <ul>
              {results.map((item) => (
                <li key={`${item.group}-${item.href}`}>
                  <button
                    type="button"
                    onClick={() => go(item.href)}
                    className="flex w-full flex-col items-start gap-0.5 border-b border-[var(--border)] px-4 py-2.5 text-left transition last:border-b-0 hover:bg-[#FF6B1A] hover:text-white"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.08em] uppercase opacity-70">
                      {item.group}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
