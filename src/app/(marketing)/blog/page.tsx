import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils/format";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Histórias, receitas e cultura por trás dos cocktails do Kamba-Dyami. Ingredientes angolanos, bastidores e dicas para o teu evento.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="font-accent text-2xl text-gold-kamba">Histórias</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">Blog</h1>
        <p className="mx-auto mt-3 max-w-xl font-body text-cream/70">
          Ingredientes angolanos, bastidores e a cultura por trás de cada copo.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 100}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist transition-all duration-200 hover:scale-[1.03] hover:border-coral-angola"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 bg-smoke p-6">
                <p className="font-utility text-xs uppercase tracking-widest text-cream/50">
                  {formatDate(post.published_at)}
                </p>
                <h2 className="font-display text-xl font-semibold text-cream">{post.title}</h2>
                <p className="font-body text-sm text-cream/70">{post.excerpt}</p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
