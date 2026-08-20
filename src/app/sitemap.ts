import type { MetadataRoute } from "next";
import { cocktails } from "@/data/cocktails";
import { blogPosts } from "@/data/blog";
import { SITE_CONFIG } from "@/constants/config";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/menu", priority: 0.8, changeFrequency: "weekly" },
  { path: "/pacotes", priority: 0.7, changeFrequency: "monthly" },
  { path: "/sobre", priority: 0.5, changeFrequency: "monthly" },
  { path: "/reservas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/galeria", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${SITE_CONFIG.url}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }),
  );

  const cocktailEntries: MetadataRoute.Sitemap = cocktails
    .filter((cocktail) => cocktail.is_available)
    .map((cocktail) => ({
      url: `${SITE_CONFIG.url}/menu/${cocktail.slug}`,
      lastModified: new Date(cocktail.created_at),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticEntries, ...cocktailEntries, ...blogEntries];
}
