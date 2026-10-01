import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogs";
import Link from "next/link";

const featured = blogPosts.slice(0, 3);

export default function BlogSection() {
  return (
    <section
      id="blogs"
      className="relative bg-[var(--surface)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, var(--glow), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#FF6B1A] uppercase">
            Resources
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.08em] text-[var(--text)] uppercase sm:text-3xl">
            InterPulse Blog
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-[#FF6B1A]" />
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {featured.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-[#FF6B1A] px-6 py-3 text-[12px] font-bold tracking-[0.08em] text-white uppercase transition hover:bg-[#E65200]"
          >
            View All Blogs
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
