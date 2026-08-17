import type { Cocktail } from "@/types/cocktail.types";
import { CocktailCard } from "@/components/cocktail/CocktailCard";

export function CocktailGrid({ cocktails }: { cocktails: Cocktail[] }) {
  if (cocktails.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-24 text-center">
        <p className="font-display text-2xl text-cream">Nenhum cocktail encontrado</p>
        <p className="font-body text-sm text-cream/60">
          Tenta ajustar os filtros ou a pesquisa.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
}
