import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cocktails, getCocktailBySlug } from "@/data/cocktails";
import { CocktailDetail } from "@/components/cocktail/CocktailDetail";

export const revalidate = 3600;
export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return cocktails.map((cocktail) => ({ slug: cocktail.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cocktail = getCocktailBySlug(slug);

  if (!cocktail) return {};

  return {
    title: cocktail.name,
    description: cocktail.tagline,
    openGraph: {
      title: cocktail.name,
      description: cocktail.tagline,
      images: cocktail.images.map((img) => img.src),
    },
  };
}

export default async function CocktailPage({ params }: PageProps) {
  const { slug } = await params;
  const cocktail = getCocktailBySlug(slug);

  if (!cocktail) notFound();

  return <CocktailDetail cocktail={cocktail} />;
}
