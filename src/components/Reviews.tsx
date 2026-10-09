const reviews = [
  {
    quote:
      "Reliable, efficient, and always on point—InterPulse Global has helped streamline our revenue cycle and eliminated countless administrative headaches. Our reimbursements come in faster, and we couldn't be happier.",
    name: "Dr. Michael Torres",
    role: "Internal Medicine",
    location: "Austin, Texas, USA",
  },
  {
    quote:
      "Our cardiology group struggled with denials and delayed payments for years. InterPulse rebuilt our claim workflows and now first-pass acceptance is consistently high. Clear reporting, responsive account managers.",
    name: "Dr. Sarah Nguyen",
    role: "Cardiology",
    location: "San Diego, California, USA",
  },
  {
    quote:
      "We needed specialty-aware coding for orthopedics without hiring a larger back-office team. InterPulse delivers clean claims, fast follow-up, and transparent A/R visibility every week.",
    name: "Jennifer Walsh, Practice Administrator",
    role: "Orthopedic Associates",
    location: "Chicago, Illinois, USA",
  },
  {
    quote:
      "Switching billing vendors is stressful, but onboarding was structured and professional. Patient statements improved, underpayments dropped, and our staff finally has time for care coordination.",
    name: "Dr. James Caldwell",
    role: "Family Medicine",
    location: "Charlotte, North Carolina, USA",
  },
  {
    quote:
      "InterPulse understands ENT procedures and payer quirks better than any partner we've used. Prior auth support alone recovered hours every week for our front desk.",
    name: "Dr. Priya Sharma",
    role: "Otolaryngology (ENT)",
    location: "Seattle, Washington, USA",
  },
  {
    quote:
      "From credentialing follow-through to payment posting, the team treats our pediatric clinic like a long-term partner—not a ticket queue. Collections are steadier month over month.",
    name: "Laura Bennett, Office Manager",
    role: "Pediatrics",
    location: "Denver, Colorado, USA",
  },
];

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

      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.08em] text-[var(--text)] uppercase sm:text-3xl">
            Reviews
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#FF6B1A]" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-[15px]">
            What U.S. practices say about partnering with InterPulse Global for
            medical billing and revenue cycle performance.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="flex h-full flex-col border border-[var(--border)] bg-[var(--surface-card)] px-5 py-7 sm:px-6"
            >
              <p className="flex-1 text-[14px] leading-7 text-[var(--text-muted)] italic sm:text-[15px] sm:leading-7">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-[var(--text)]">
                <cite className="not-italic">
                  <span className="font-bold">{review.name}</span>
                  <span className="mt-1 block text-[var(--text-muted)]">
                    {review.role}
                  </span>
                  <span className="mt-0.5 block text-xs text-[var(--text-muted)]">
                    {review.location}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/#consult"
            className="inline-flex text-xs font-semibold tracking-[0.06em] text-[#FF6B1A] uppercase transition hover:text-[#E65200]"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
