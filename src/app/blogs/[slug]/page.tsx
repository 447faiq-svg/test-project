import { blogImageForIndex } from "@/components/BlogCard";
import { blogPosts, getBlogBySlug } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = getBlogBySlug(slug);
  if (!post || postIndex < 0) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.14em] text-[#FF6B1A] uppercase">
        InterPulse Blog
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl md:leading-[1.2]">
        {post.title}
      </h1>
      <p className="mt-4 text-sm font-medium text-[var(--text-muted)]">
        {post.tagline}
      </p>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden border border-[var(--border)]">
        <Image
          src={blogImageForIndex(postIndex)}
          alt="Healthcare professionals"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(11,31,51,0.55) 100%)",
          }}
        />
      </div>

      <div className="mt-10 space-y-5 text-[15px] leading-8 text-[var(--text-muted)] sm:text-base sm:leading-8">
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4 border-t border-[var(--border)] pt-8">
        <Link
          href="/blogs"
          className="text-sm font-medium text-[#FF6B1A] hover:underline"
        >
          ← All Blogs
        </Link>
        <Link
          href="/#consult"
          className="text-sm font-medium text-[var(--text-muted)] hover:text-[#FF6B1A]"
        >
          Get Consultation →
        </Link>
      </div>
    </article>
  );
}
