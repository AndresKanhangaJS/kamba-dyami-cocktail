import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { formatDate } from "@/lib/utils/format";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const revalidate = 3600;
export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover_image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <article>
      <div className="relative h-72 w-full md:h-96">
        <Image
          src={post.cover_image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent 40%, var(--color-obsidian) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16">
        <ScrollReveal>
          <p className="font-utility text-xs uppercase tracking-widest text-gold-kamba">
            {formatDate(post.published_at)} · {post.author}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-cream md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-col gap-5 font-body leading-relaxed text-cream/80">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-mist px-3 py-1 font-utility text-xs uppercase tracking-wide text-cream/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
