export type CocktailCategory =
  | "assinatura"
  | "classicos"
  | "africa-fusion"
  | "sem-alcool"
  | "long-drinks"
  | "shots";

export interface Ingredient {
  name: string;
  quantity: string;
}

export type PreparationMethod = "shaken" | "stirred" | "built" | "muddled" | "blended";

export interface ImageAsset {
  src: string;
  alt: string;
  blurDataURL?: string;
}

export interface Cocktail {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: CocktailCategory;
  spirit_base: string;
  ingredients: Ingredient[];
  method: PreparationMethod;
  garnish: string;
  glassware: string;
  abv: number;
  difficulty: 1 | 2 | 3;
  price: number;
  origin_story: string;
  pairings: string[];
  images: ImageAsset[];
  is_signature: boolean;
  is_seasonal: boolean;
  is_available: boolean;
  tags: string[];
  created_at: string;
}
