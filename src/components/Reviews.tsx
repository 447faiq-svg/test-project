export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, var(--glow), transparent 55%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[900px] text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.08em] text-[var(--text)] uppercase sm:text-3xl">
          Reviews
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#FF6B1A]" />

        <blockquote className="mt-10 border border-[var(--border)] bg-[var(--surface-card)] px-6 py-10 sm:mt-12 sm:px-12 sm:py-12">
          <p className="text-[15px] leading-8 text-[var(--text-muted)] italic sm:text-lg sm:leading-9">
            &ldquo;Reliable, efficient, and always on point—InterPulse Global
            has helped streamline our revenue cycle and eliminated countless
            administrative headaches. Our reimbursements come in faster, and we
            couldn&apos;t be happier.&rdquo;
          </p>
          <footer className="mt-8 text-sm text-[var(--text)] sm:text-base">
            <cite className="not-italic">
              <span className="font-bold">Dr. Ayesha Khan</span>
              <span className="text-[var(--text-muted)]">
                , Internal Medicine, Lahore, Pakistan
              </span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
