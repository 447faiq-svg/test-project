import Image from "next/image";

const records = [
  { value: "38%", label: "Reduction in A/R" },
  { value: "7–14 Days", label: "Turnaround Time" },
  { value: "30%", label: "Potential Revenue Increase" },
  { value: "97.95%", label: "Collection Ratio" },
  { value: "98%", label: "First Pass Clean Claims Rate" },
  { value: "30+", label: "Specialties" },
];

export default function CompanyRecords() {
  return (
    <section
      id="company-records"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:min-h-[520px] lg:py-28"
    >
      <Image
        src="/company-records-bg.jpg"
        alt=""
        fill
        priority={false}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* InterPulse navy + orange brand overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, rgba(11,31,51,0.88) 0%, rgba(18,58,92,0.82) 45%, rgba(11,31,51,0.9) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 85% 20%, rgba(255,107,26,0.22), transparent 55%), radial-gradient(ellipse 40% 35% at 10% 90%, rgba(255,107,26,0.1), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col justify-center text-center">
        <p className="text-[12px] font-semibold tracking-[0.2em] text-[#FF9A55] uppercase">
          InterPulse Global
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
          Company Records
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-14 bg-[#FF6B1A]" />

        <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-white/85 sm:text-[17px] sm:leading-8">
          Our data-driven medical billing{" "}
          <strong className="font-bold text-white">
            key performance indicators
          </strong>{" "}
          are precise, results-oriented, and tailored to support your
          practice&apos;s financial success.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-y-12 sm:mt-16 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-14 lg:gap-x-10">
          {records.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <p className="font-[family-name:var(--font-display)] text-[2.75rem] leading-none font-bold tracking-tight text-[#FF9A55] sm:text-5xl md:text-[3.35rem]">
                {item.value}
              </p>
              <p className="mt-3 text-base font-medium text-white sm:text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-[12px] leading-7 text-white/65 sm:mt-16 sm:text-[13px] sm:leading-8">
          Reported performance indicators include up to a 38% reduction in A/R,
          a 7–14-day turnaround time, up to a 30% potential revenue increase, a
          97.95% collection ratio, a 98% first-pass clean claim rate and billing
          support across 30+ specialties. Results may vary by practice,
          specialty, payer mix and claim volume.
        </p>
      </div>
    </section>
  );
}
