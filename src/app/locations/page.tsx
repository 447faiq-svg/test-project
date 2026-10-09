import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations | InterPulse Global",
  description:
    "Visit InterPulse Global at 1001 S Main St Ste 600, Kalispell, Montana, United States.",
};

const locations = [
  {
    name: "Kalispell, Montana",
    address: "1001 S Main St Ste 600",
    city: "Kalispell, Montana",
    country: "United States",
    fax: "+1 (803) 398-4046",
    faxHref: "fax:+18033984046",
  },
];

export default function LocationsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[360px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/locations-banner.jpg"
          alt="InterPulse Global office location"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(11,31,51,0.92) 0%, rgba(11,31,51,0.78) 45%, rgba(11,31,51,0.45) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 90% 20%, rgba(255,107,26,0.18), transparent 55%)",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-[#FF9A55] uppercase">
            Company
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Locations
          </h1>
          <div className="mt-5 h-px w-24 bg-white/50" />
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            InterPulse Global supports clinical practices across regions with
            dedicated revenue cycle operations and local partnership coverage.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <article
                key={location.name}
                className="border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-7"
              >
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[#FF6B1A] uppercase">
                  Office
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text)]">
                  {location.name}
                </h2>
                <div className="mt-4 space-y-1 text-sm leading-7 text-[var(--text-muted)]">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                  <p>{location.country}</p>
                </div>
                <p className="mt-5 text-sm text-[var(--text)]">
                  <span className="font-semibold">Fax:</span>{" "}
                  <a
                    href={location.faxHref}
                    className="text-[#FF6B1A] transition hover:text-[#E65200]"
                  >
                    {location.fax}
                  </a>
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-xs font-semibold tracking-[0.06em] text-[#FF6B1A] uppercase transition hover:text-[#E65200]"
                >
                  Contact Us →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
