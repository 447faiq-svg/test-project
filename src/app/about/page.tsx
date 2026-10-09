import ConsultForm from "@/components/ConsultForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | InterPulse Global",
  description:
    "InterPulse Global is a healthcare revenue cycle management company that helps medical practices improve financial performance, reduce billing challenges, and protect cash flow.",
};

const paragraphs = [
  "InterPulse Global is a healthcare revenue cycle management (RCM) company that provides comprehensive billing and financial management solutions to medical practices and healthcare organizations. The company has evolved from being primarily a medical billing provider into a complete RCM partner that supports healthcare providers throughout the entire revenue cycle.",
  "The main goal of InterPulse Global is to help medical practices improve their financial performance, reduce billing challenges, and maintain a smoother cash flow, while allowing doctors and healthcare staff to focus more on delivering quality patient care.",
  "InterPulse Global helps practices manage and optimize their claim workflows. This includes supporting the process from claim preparation and submission to follow-up and payment. By identifying issues that can cause claims to be delayed, rejected, or denied, the company helps practices reduce unnecessary revenue loss and improve the speed at which they receive payments.",
  "Another important area of its services is recovering stalled or unpaid revenue. Healthcare practices can have money tied up in unpaid claims, insurance delays, denials, or outstanding balances. InterPulse Global works to identify these problems and follow up appropriately so that practices can recover revenue that might otherwise remain unpaid.",
  "The company also provides specialty-aware support, meaning its services can be adapted to the specific requirements of different medical specialties. Different specialties may have different coding requirements, payer rules, documentation standards, and billing processes. Understanding these differences allows InterPulse Global to provide more relevant and effective revenue cycle support.",
  "InterPulse Global also works across various EMR/EHR platforms and payer environments. EMR and EHR systems are essential tools used by healthcare providers to manage patient information, clinical documentation, and billing-related data. Because practices may use different systems and work with different insurance companies, having experience across multiple platforms and payer environments can help create a more efficient billing workflow.",
  "Overall, InterPulse Global acts as an extension of a healthcare practice's administrative and financial team. Rather than simply processing medical bills, the company focuses on improving the entire revenue cycle—from claims and billing to payment collection and revenue recovery.",
  "In simple terms, InterPulse Global helps healthcare providers get paid accurately and on time while reducing the administrative burden associated with medical billing. By improving billing processes, addressing claim issues, recovering outstanding revenue, and providing specialty-specific support, the company enables healthcare organizations to operate more efficiently and devote more attention to their patients.",
];

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
              {paragraphs[0]}
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
                  150
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

      {/* Full about story */}
      <section className="relative border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 55% 40% at 10% 0%, var(--glow), transparent 60%), radial-gradient(ellipse 45% 35% at 90% 20%, rgba(0,64,122,0.06), transparent 55%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[860px]">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
            Our Story
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            A complete RCM partner for modern practices
          </h2>
          <div className="mt-8 space-y-6 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
            {paragraphs.slice(1).map((text) => (
              <p key={text.slice(0, 48)}>{text}</p>
            ))}
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
