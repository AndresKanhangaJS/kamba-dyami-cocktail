import Link from "next/link";
import Image from "next/image";
import { cocktails } from "@/data/cocktails";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function FeaturedCocktailSection() {
  const featured = cocktails.find((c) => c.is_seasonal) ?? cocktails[0];

  return (
    <section
      className="px-6 py-24"
      style={{
        background:
          "linear-gradient(135deg, var(--color-coral-angola) 0%, var(--color-purple-night) 100%)",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <ScrollReveal className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-cream/20 shadow-lg">
          <Image
            src={featured.images[0].src}
            alt={featured.images[0].alt}
            fill
            sizes="160px"
            className="object-cover"
          />
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-utility text-xs uppercase tracking-[0.3em] text-cream/80">
            Cocktail do Mês
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-cream md:text-5xl">
            {featured.name}
          </h2>
          <p className="mt-2 font-body text-lg text-cream/85">{featured.tagline}</p>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {featured.ingredients.map((ing, i) => (
            <ScrollReveal
              key={ing.name}
              direction="down"
              delay={i * 100}
              className="rounded-full border border-cream/30 bg-obsidian/30 px-4 py-2 font-body text-sm text-cream backdrop-blur-sm"
            >
              {ing.name}
            </ScrollReveal>
          ))}
        </div>

        <Link
          href={`/menu/${featured.slug}`}
          className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-obsidian px-8 font-body font-medium text-cream transition-colors duration-200 hover:bg-smoke"
        >
          Ver Detalhe
        </Link>
      </div>
    </section>
  );
}
