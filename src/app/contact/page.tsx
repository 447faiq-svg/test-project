import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | InterPulse Global",
  description:
    "Contact InterPulse Global for consultations, partnerships, or support. Kalispell, Montana office and fax available.",
};

const contactDetails = [
  {
    label: "Address",
    value: "1001 S Main St Ste 600, Kalispell, Montana, United States",
    href: "/locations",
  },
  {
    label: "Phone",
    value: "+1 (662) 664-7181",
    href: "tel:+16626647181",
  },
  {
    label: "Fax",
    value: "+1 (803) 398-4046",
    href: "fax:+18033984046",
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-[360px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/contact-banner.jpg"
          alt="Contact InterPulse Global"
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
            Contact Us
          </h1>
          <div className="mt-5 h-px w-24 bg-white/50" />
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            Reach the InterPulse Global team for consultations, partnerships, or
            support. We&apos;ll respond within one business day.
          </p>
          <div className="mt-9">
            <a
              href="#consult"
              className="inline-flex h-12 items-center justify-center bg-[#FF6B1A] px-7 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      <ConsultForm />

      <section className="bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Our Office
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {contactDetails.map((item) => (
              <li
                key={item.label}
                className="border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-6 text-center"
              >
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[#FF6B1A] uppercase">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  className="mt-3 block text-sm font-medium leading-7 text-[var(--text)] transition hover:text-[#FF6B1A]"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
