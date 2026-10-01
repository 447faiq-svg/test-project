import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <div className="text-center">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
          Resources
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[0.08em] text-[var(--text)] uppercase sm:text-4xl">
          InterPulse Blog
        </h1>
        <div className="mx-auto mt-2 h-1 w-16 bg-[#FF6B1A]" />
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
          Insights on medical billing, denials, revenue cycle performance, and
          specialty reimbursement for modern practices.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
