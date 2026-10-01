export default function EmrEhr() {
  return (
    <section
      id="emr"
      className="relative border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[900px] text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.6rem]">
          EMR/EHR
        </h2>
        <p className="mx-auto mt-5 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
          At InterPulse Global, our medical billing experts provide EMR/EHR
          support to streamline revenue cycle workflows. We have experience
          working with various EHR systems, helping healthcare providers reduce
          claim denials, improve billing efficiency and maximize reimbursements.
        </p>
        <a
          href="/emr-ehr"
          className="mt-8 inline-flex text-xs font-semibold tracking-[0.06em] text-[#FF6B1A] uppercase transition hover:text-[#E65200]"
        >
          Learn More →
        </a>
      </div>
    </section>
  );
}
