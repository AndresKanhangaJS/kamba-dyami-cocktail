import type { CocktailCategory } from "@/types/cocktail.types";

export interface CategoryMeta {
  value: CocktailCategory;
  label: string;
  accent: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { value: "assinatura", label: "Assinaturas", accent: "var(--color-gold-kamba)" },
  { value: "classicos", label: "Clássicos", accent: "var(--color-cream)" },
  { value: "africa-fusion", label: "África Fusion", accent: "var(--color-coral-angola)" },
  { value: "sem-alcool", label: "Sem Álcool", accent: "var(--color-teal-ilha)" },
  { value: "long-drinks", label: "Long Drinks", accent: "var(--color-purple-night)" },
  { value: "shots", label: "Shots", accent: "var(--color-amber)" },
];

export const SPIRIT_BASES = ["Gin", "Rum", "Vodka", "Whisky", "Tequila", "Kapuka"] as const;
