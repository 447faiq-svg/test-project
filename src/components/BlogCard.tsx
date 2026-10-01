import Image from "next/image";
import type { BlogPost } from "@/data/blogs";

const doctorImages = [
  "/blog-doctor.jpg",
  "/blog-doctor-2.jpg",
  "/blog-doctor-3.jpg",
];

export function blogImageForIndex(index: number) {
  return doctorImages[index % doctorImages.length];
}

export default function BlogCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  const imageSrc = blogImageForIndex(index);

  return (
    <a
      href={`/blogs/${post.slug}`}
      className="group flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface-card)] transition duration-300 hover:-translate-y-0.5 hover:border-[#FF6B1A]/45"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
        <Image
          src={imageSrc}
          alt="Healthcare professionals reviewing clinical work"
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,31,51,0.15) 0%, rgba(11,31,51,0.25) 40%, rgba(11,31,51,0.92) 100%)",
          }}
        />
        <div className="absolute top-3 left-3 rounded bg-[#FF6B1A] px-2 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
          InterPulse
        </div>
        <div className="absolute inset-x-0 bottom-0 px-4 py-3 sm:px-5 sm:py-4">
          <p className="line-clamp-2 text-sm font-semibold leading-snug text-white">
            {post.title}
          </p>
          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-white/80">
            {post.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug text-[var(--text)] transition group-hover:text-[#FF6B1A]">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">
          {post.excerpt}
        </p>
        <span className="mt-4 text-xs font-semibold tracking-[0.08em] text-[#FF6B1A] uppercase">
          Read More →
        </span>
      </div>
    </a>
  );
}
