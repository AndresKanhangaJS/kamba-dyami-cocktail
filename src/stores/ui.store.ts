import { create } from "zustand";
import type { CocktailCategory } from "@/types/cocktail.types";

interface MenuFiltersState {
  categories: CocktailCategory[];
  spiritBases: string[];
  difficulties: number[];
  search: string;
  toggleCategory: (category: CocktailCategory) => void;
  toggleSpiritBase: (spiritBase: string) => void;
  toggleDifficulty: (difficulty: number) => void;
  setSearch: (search: string) => void;
  resetFilters: () => void;
}

function toggleItem<T>(list: T[], item: T): T[] {
  return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
}

export const useUiStore = create<MenuFiltersState>((set) => ({
  categories: [],
  spiritBases: [],
  difficulties: [],
  search: "",
  toggleCategory: (category) =>
    set((state) => ({ categories: toggleItem(state.categories, category) })),
  toggleSpiritBase: (spiritBase) =>
    set((state) => ({ spiritBases: toggleItem(state.spiritBases, spiritBase) })),
  toggleDifficulty: (difficulty) =>
    set((state) => ({ difficulties: toggleItem(state.difficulties, difficulty) })),
  setSearch: (search) => set({ search }),
  resetFilters: () =>
    set({
      categories: [],
      spiritBases: [],
      difficulties: [],
      search: "",
    }),
}));
