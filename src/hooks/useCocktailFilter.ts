"use client";

import { useMemo } from "react";
import { cocktails } from "@/data/cocktails";
import { useUiStore } from "@/stores/ui.store";

export function useCocktailFilter() {
  const categories = useUiStore((s) => s.categories);
  const spiritBases = useUiStore((s) => s.spiritBases);
  const difficulties = useUiStore((s) => s.difficulties);
  const priceRange = useUiStore((s) => s.priceRange);
  const search = useUiStore((s) => s.search);

  return useMemo(() => {
    const query = search.trim().toLowerCase();

    return cocktails.filter((cocktail) => {
      if (categories.length > 0 && !categories.includes(cocktail.category)) return false;
      if (spiritBases.length > 0 && !spiritBases.includes(cocktail.spirit_base)) return false;
      if (difficulties.length > 0 && !difficulties.includes(cocktail.difficulty)) return false;
      if (cocktail.price < priceRange[0] || cocktail.price > priceRange[1]) return false;

      if (query) {
        const haystack = [
          cocktail.name,
          ...cocktail.ingredients.map((i) => i.name),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      return true;
    });
  }, [categories, spiritBases, difficulties, priceRange, search]);
}
