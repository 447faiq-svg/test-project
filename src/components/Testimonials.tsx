const testimonials = [
  {
    quote:
      "Passed our Medicare CMS audit with zero findings. Every modifier is validated against clinical documentation tokens automatically.",
    name: "Sofia Aguilar",
    title: "Compliance Director, Central Cal Health",
    initials: "SA",
  },
  {
    quote:
      "Recovered $340K from an aged backlog we wrote off as uncollectible. Their appeals team is persistent and relentless with payers.",
    name: "Diane Holloway",
    title: "ASC Director, Bay Surgical Centers",
    initials: "DH",
  },
  {
    quote:
      "Collections increased 22% in quarter one. Most importantly, our physicians finished notes and got their evenings back.",
    name: "Dr. Rajiv Mehta, MD",
    title: "Pacific Heart & Vascular",
    initials: "RM",
  },
  {
    quote:
      "Our A/R days dropped from 58 to 31 in just five months. The InterPulse real-time portal gave our board complete visibility.",
    name: "Karen Whitfield",
    title: "Administrator, Orthopedic NorCal",
    initials: "KW",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#FF7A3A]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden
        >
          <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
            CLINICAL & FINANCIAL VALIDATION
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
            Trusted by Healthcare Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
            Here is how medical directors and practice administrators regained
            financial clarity with InterPulse Global.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-5 transition duration-300 hover:border-[var(--border)] hover:opacity-95 sm:p-6"
            >
              <Stars />
              <p className="mt-4 flex-1 text-sm leading-6 text-[var(--text)]/90">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-xs font-semibold text-[#FF7A3A]">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[var(--text)]">
                    {item.name}
                  </p>
                  <p className="truncate text-xs text-[var(--text-muted)]">{item.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
