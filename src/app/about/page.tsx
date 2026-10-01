import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | InterPulse Global",
  description:
    "InterPulse Global has grown from a medical billing provider into a full revenue cycle management partner—helping practices protect revenue for 10+ years.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* About Us */}
      <section className="overflow-hidden bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
              Company
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
              About Us
            </h1>
            <p className="mt-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
              InterPulse Global has grown from a medical billing provider into a
              comprehensive revenue cycle management partner. We help practices
              tighten claim workflows, recover stalled revenue, and stay focused
              on patient care—with specialty-aware support across EMR/EHR
              platforms and payer environments.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-[var(--text)]">
                  We&apos;re In Business
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#FF6B1A] sm:text-5xl">
                  10+ Years
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text)]">
                  Satisfied Clients
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#FF6B1A] sm:text-5xl">
                  100
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none">
            <div
              className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]"
              style={{
                clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 14%)",
              }}
            >
              <Image
                src="/about-hero.jpg"
                alt="InterPulse Global team member supporting practice operations"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 border-2 border-[#FF6B1A]/50"
              style={{
                clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 14%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Elevate CTA */}
      <section
        className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20"
        style={{
          background:
            "linear-gradient(120deg, #0B1F33 0%, #123A5C 55%, #0B1F33 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,26,0.28), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Elevate Your Practice Together.
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-white/85 sm:text-base">
            Take the stress out of medical billing and strengthen your
            practice&apos;s financial health with InterPulse Global. Contact us
            today for a free consultation and see how we can help your practice
            thrive.
          </p>
        </div>
      </section>

      <ConsultForm />
    </main>
  );
}
