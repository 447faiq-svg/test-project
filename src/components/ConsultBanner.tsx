import Image from "next/image";
import Link from "next/link";

export default function ConsultBanner() {
  return (
    <section
      aria-label="Consultation banner"
      className="relative overflow-hidden"
    >
      <Image
        src="/medical-billing-banner.jpg"
        alt=""
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(11,31,51,0.88) 0%, rgba(18,58,92,0.78) 42%, rgba(11,31,51,0.62) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 88% 55%, rgba(255,107,26,0.32), transparent 58%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-[1100px] flex-col items-center justify-center gap-6 px-4 py-16 text-center sm:min-h-[380px] sm:px-6 sm:py-20 lg:min-h-[440px] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-display)] text-[13px] font-semibold tracking-[0.2em] text-[#FF9A55] uppercase">
            Free practice review
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] leading-[1.12] font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Ready to tighten claims and accelerate collections?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base sm:leading-8">
            Share a few details below—our billing specialists will map your
            specialty mix, denial patterns, and a practical path to cleaner
            first-pass claims.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#consult"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#FF6B1A] px-8 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200] sm:h-14 sm:px-10 sm:text-[13px]"
          >
            Start Consultation
          </Link>
          <Link
            href="#solutions"
            className="inline-flex h-12 items-center justify-center border border-white/40 px-7 text-[12px] font-semibold tracking-[0.06em] text-white uppercase transition hover:border-[#FF9A55] hover:text-[#FF9A55] sm:h-14"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
