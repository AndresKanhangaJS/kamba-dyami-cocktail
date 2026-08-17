import type { BlogPost } from "@/types/blog.types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "mukua-o-ouro-do-baoba",
    title: "Mukua: o ouro do baobá nos nossos cocktails",
    excerpt:
      "Como este fruto ancestral angolano se tornou um dos ingredientes mais distintivos da carta Kamba-Dyami.",
    content:
      "O mukua, fruto do baobá, é colhido em várias regiões de Angola e traz um sabor terroso e levemente ácido...",
    cover_image: "/images/blog/mukua.jpg",
    author: "Equipa Kamba-Dyami",
    published_at: "2026-03-02",
    tags: ["ingredientes", "cultura"],
  },
  {
    id: "2",
    slug: "a-arte-da-kizomba-sour",
    title: "A arte por trás do Kizomba Sour",
    excerpt: "Do mel da Humpata à espuma perfeita: os bastidores de um dos nossos cocktails de assinatura.",
    content: "Cada Kizomba Sour começa com mel puro da região da Humpata...",
    cover_image: "/images/blog/kizomba-sour-story.jpg",
    author: "Equipa Kamba-Dyami",
    published_at: "2026-02-18",
    tags: ["receitas", "assinatura"],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
