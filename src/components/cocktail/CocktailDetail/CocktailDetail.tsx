"use client";

import { Blend, Hammer, Layers3, RotateCw, Shuffle, Star } from "lucide-react";
import type { Cocktail, PreparationMethod } from "@/types/cocktail.types";
import { CATEGORIES } from "@/constants/categories";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ParallaxSection } from "@/components/shared/ParallaxSection";
import { AnimatedNumber } from "@/components/shared/AnimatedText";
import { ShareButtons } from "./ShareButtons";
import { RelatedCocktails } from "./RelatedCocktails";

const METHOD_META: Record<PreparationMethod, { label: string; icon: typeof Shuffle }> = {
  shaken: { label: "Shaken (Agitado)", icon: Shuffle },
  stirred: { label: "Stirred (Mexido)", icon: RotateCw },
  built: { label: "Built (Construído)", icon: Layers3 },
  muddled: { label: "Muddled (Amassado)", icon: Hammer },
  blended: { label: "Blended (Batido)", icon: Blend },
};

export function CocktailDetail({ cocktail }: { cocktail: Cocktail }) {
  const method = METHOD_META[cocktail.method];
  const MethodIcon = method.icon;
  const categoryLabel = CATEGORIES.find((c) => c.value === cocktail.category)?.label ?? cocktail.category;

  return (
    <article>
      <ParallaxSection
        className="flex min-h-[60vh] flex-col items-center justify-end px-6 pb-16 pt-32 text-center"
        backgroundImage={{ src: cocktail.images[0].src, alt: cocktail.images[0].alt }}
        backgroundClassName="bg-[linear-gradient(180deg,rgba(10,10,15,0.35)_0%,var(--color-obsidian)_92%)]"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge variant="gold">{categoryLabel}</Badge>
          {cocktail.is_signature && <Badge variant="coral">Assinatura</Badge>}
          {cocktail.is_seasonal && <Badge variant="teal">Sazonal</Badge>}
          {cocktail.category === "sem-alcool" && <Badge variant="purple">Sem Álcool</Badge>}
        </div>
        <h1 className="mt-4 font-display text-5xl font-bold text-cream md:text-6xl">
          {cocktail.name}
        </h1>
        <p className="mt-3 max-w-xl font-body text-lg text-cream/70">{cocktail.tagline}</p>
      </ParallaxSection>

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-10">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-semibold text-gold-kamba">Ingredientes</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {cocktail.ingredients.map((ing, i) => (
                <ScrollReveal
                  key={ing.name}
                  delay={i * 80}
                  className="flex items-center justify-between border-b border-mist pb-2 font-body text-cream/85"
                >
                  <span>{ing.name}</span>
                  <span className="font-utility text-sm text-cream/50">{ing.quantity}</span>
                </ScrollReveal>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-2xl font-semibold text-gold-kamba">
              A Nossa História
            </h2>
            <p className="mt-4 font-body leading-relaxed text-cream/80">{cocktail.origin_story}</p>
          </ScrollReveal>

          {cocktail.pairings.length > 0 && (
            <ScrollReveal>
              <h2 className="font-display text-2xl font-semibold text-gold-kamba">
                Harmonizações Sugeridas
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {cocktail.pairings.map((pairing) => (
                  <span
                    key={pairing}
                    className="rounded-full border border-mist px-4 py-2 font-body text-sm text-cream/80"
                  >
                    {pairing}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-6 rounded-2xl border border-mist bg-smoke p-6">
            <div>
              <p className="font-utility text-xs uppercase tracking-widest text-cream/50">
                Preço
              </p>
              <p className="mt-1 font-utility text-3xl text-gold-kamba">
                <AnimatedNumber value={cocktail.price} currency />
              </p>
            </div>

            <div>
              <p className="font-utility text-xs uppercase tracking-widest text-cream/50">
                Método
              </p>
              <div className="mt-2 flex items-center gap-2 font-body text-cream/85">
                <MethodIcon size={18} className="text-teal-ilha" />
                {method.label}
              </div>
            </div>

            <div>
              <p className="font-utility text-xs uppercase tracking-widest text-cream/50">
                Dificuldade
              </p>
              <div className="mt-2 flex gap-1">
                {[1, 2, 3].map((level) => (
                  <Star
                    key={level}
                    size={18}
                    className={level <= cocktail.difficulty ? "text-gold-kamba" : "text-mist"}
                    fill={level <= cocktail.difficulty ? "currentColor" : "none"}
                    strokeWidth={level <= cocktail.difficulty ? 0 : 1.5}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="font-utility text-xs uppercase tracking-widest text-cream/50">
                Copo & Guarnição
              </p>
              <p className="mt-2 font-body text-sm text-cream/85">{cocktail.glassware}</p>
              <p className="font-body text-sm text-cream/60">{cocktail.garnish}</p>
            </div>

            <div>
              <p className="font-utility text-xs uppercase tracking-widest text-cream/50">ABV</p>
              <p className="mt-1 font-utility text-sm text-cream/85">{cocktail.abv}%</p>
            </div>

            <ShareButtons name={cocktail.name} />
          </div>
        </ScrollReveal>
      </div>

      <RelatedCocktails current={cocktail} />
    </article>
  );
}
