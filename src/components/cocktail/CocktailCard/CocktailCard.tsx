import Link from "next/link";
import Image from "next/image";
import type { Cocktail } from "@/types/cocktail.types";
import { CATEGORIES } from "@/constants/categories";
import { Badge } from "@/components/ui/Badge";

const CATEGORY_BADGE_VARIANT: Record<string, "gold" | "coral" | "teal" | "purple"> = {
  assinatura: "gold",
  classicos: "purple",
  "africa-fusion": "coral",
  "sem-alcool": "teal",
  "long-drinks": "purple",
  shots: "coral",
};

export function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  const categoryLabel = CATEGORIES.find((c) => c.value === cocktail.category)?.label ?? cocktail.category;

  return (
    <Link
      href={`/menu/${cocktail.slug}`}
      className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl border border-mist transition-all duration-200 ease-out hover:scale-[1.03] hover:border-coral-angola"
    >
      <Image
        src={cocktail.images[0].src}
        alt={cocktail.images[0].alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 30%, var(--color-obsidian) 95%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <Badge variant={CATEGORY_BADGE_VARIANT[cocktail.category] ?? "gold"}>{categoryLabel}</Badge>
        {!cocktail.is_available && (
          <Badge variant="coral" className="opacity-90">
            Esgotado
          </Badge>
        )}
      </div>

      <div className="relative flex flex-col gap-1 p-6">
        <h3 className="font-display text-2xl font-semibold text-cream">{cocktail.name}</h3>
        <p className="font-body text-sm text-cream/70">{cocktail.tagline}</p>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-obsidian/90 p-6 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100">
        <p className="font-utility text-xs uppercase tracking-widest text-gold-kamba">
          Ingredientes principais
        </p>
        <ul className="mt-2 flex flex-col gap-1 font-body text-sm text-cream/80">
          {cocktail.ingredients.slice(0, 3).map((ing) => (
            <li key={ing.name}>{ing.name}</li>
          ))}
        </ul>
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-coral-angola px-4 py-2 font-body text-sm font-medium text-cream transition-colors group-hover:bg-amber">
          Ver Detalhe
        </span>
      </div>
    </Link>
  );
}
