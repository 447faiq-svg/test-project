export default function BlogsPage() {
  return (
    <section className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
        Insights
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--text)]">
        Blogs and Articles
      </h1>
      <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
        Articles and practice billing insights are coming soon.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex text-sm font-medium text-[#FF6B1A] hover:underline"
      >
        ← Back to Home
      </a>
    </section>
  );
}
