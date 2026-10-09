"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { specialties as specialtyData, type Specialty } from "@/data/specialties";

function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export default function Specialties() {
  const [items, setItems] = useState<Specialty[]>(specialtyData);

  useEffect(() => {
    setItems(shuffle(specialtyData));
  }, []);

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
            Specialty-Specific Medical Billing Services for Healthcare Providers
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
            Comprehensive billing solutions designed to meet the unique needs of
            primary care practices, specialty clinics, and surgical centers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-14 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-y-12">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/specialties/${item.slug}`}
              className="group flex flex-col items-center text-center outline-none transition focus-visible:ring-2 focus-visible:ring-[#FF6B1A]/50"
            >
              <Image
                src={`/specialties/${item.slug}.png`}
                alt=""
                width={88}
                height={88}
                className="h-[72px] w-[72px] object-contain transition group-hover:scale-105 sm:h-[88px] sm:w-[88px]"
              />
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
