import { cocktails } from "@/data/cocktails";
import type { Cocktail } from "@/types/cocktail.types";
import { CocktailCard } from "@/components/cocktail/CocktailCard";

export function RelatedCocktails({ current }: { current: Cocktail }) {
  const related = cocktails
    .filter(
      (c) =>
        c.id !== current.id &&
        (c.category === current.category || c.spirit_base === current.spirit_base),
    )
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <h2 className="font-display text-2xl font-semibold text-cream">Também Vais Gostar</h2>
      <div className="mt-6 flex snap-x gap-6 overflow-x-auto pb-4">
        {related.map((cocktail) => (
          <div key={cocktail.id} className="w-72 shrink-0 snap-start">
            <CocktailCard cocktail={cocktail} />
          </div>
        ))}
      </div>
    </section>
  );
}
