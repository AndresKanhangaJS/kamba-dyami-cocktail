"use client";

import { useCocktailFilter } from "@/hooks/useCocktailFilter";
import { CocktailFilter } from "@/components/cocktail/CocktailFilter";
import { CocktailGrid } from "@/components/cocktail/CocktailGrid";

export function MenuPageContent() {
  const filteredCocktails = useCocktailFilter();

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside>
        <CocktailFilter />
      </aside>
      <div>
        <p className="mb-4 font-utility text-xs uppercase tracking-widest text-cream/50">
          {filteredCocktails.length}{" "}
          {filteredCocktails.length === 1 ? "cocktail encontrado" : "cocktails encontrados"}
        </p>
        <CocktailGrid cocktails={filteredCocktails} />
      </div>
    </div>
  );
}
