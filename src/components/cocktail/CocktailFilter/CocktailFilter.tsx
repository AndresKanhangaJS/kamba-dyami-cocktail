"use client";

import { Search, Star, X } from "lucide-react";
import { CATEGORIES, SPIRIT_BASES } from "@/constants/categories";
import { useUiStore } from "@/stores/ui.store";
import { cn } from "@/lib/utils/cn";

function FilterToggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 font-body text-sm transition-colors duration-200",
        active
          ? "border-gold-kamba bg-gold-kamba text-obsidian"
          : "border-mist text-cream/70 hover:border-gold-kamba/60 hover:text-cream",
      )}
    >
      {children}
    </button>
  );
}

export function CocktailFilter() {
  const categories = useUiStore((s) => s.categories);
  const spiritBases = useUiStore((s) => s.spiritBases);
  const difficulties = useUiStore((s) => s.difficulties);
  const search = useUiStore((s) => s.search);
  const toggleCategory = useUiStore((s) => s.toggleCategory);
  const toggleSpiritBase = useUiStore((s) => s.toggleSpiritBase);
  const toggleDifficulty = useUiStore((s) => s.toggleDifficulty);
  const setSearch = useUiStore((s) => s.setSearch);
  const resetFilters = useUiStore((s) => s.resetFilters);

  const hasActiveFilters =
    categories.length > 0 ||
    spiritBases.length > 0 ||
    difficulties.length > 0 ||
    search.trim() !== "";

  const activeChips: { label: string; onRemove: () => void }[] = [
    ...categories.map((c) => ({
      label: CATEGORIES.find((cat) => cat.value === c)?.label ?? c,
      onRemove: () => toggleCategory(c),
    })),
    ...spiritBases.map((s) => ({ label: s, onRemove: () => toggleSpiritBase(s) })),
    ...difficulties.map((d) => ({
      label: `${"★".repeat(d)} dificuldade`,
      onRemove: () => toggleDifficulty(d),
    })),
  ];

  if (search.trim() !== "") {
    activeChips.push({ label: `"${search}"`, onRemove: () => setSearch("") });
  }

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-mist bg-smoke p-6">
      <div className="relative">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cream/40"
        />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por nome ou ingrediente..."
          aria-label="Pesquisar cocktails"
          className="h-11 w-full rounded-lg border border-mist bg-obsidian pl-11 pr-4 font-body text-cream placeholder:text-cream/40 focus-visible:border-gold-kamba focus-visible:outline-none"
        />
      </div>

      <div>
        <p className="font-utility text-xs uppercase tracking-widest text-cream/50">Categoria</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <FilterToggle
              key={cat.value}
              active={categories.includes(cat.value)}
              onClick={() => toggleCategory(cat.value)}
            >
              {cat.label}
            </FilterToggle>
          ))}
        </div>
      </div>

      <div>
        <p className="font-utility text-xs uppercase tracking-widest text-cream/50">
          Base Alcoólica
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SPIRIT_BASES.map((base) => (
            <FilterToggle
              key={base}
              active={spiritBases.includes(base)}
              onClick={() => toggleSpiritBase(base)}
            >
              {base}
            </FilterToggle>
          ))}
        </div>
      </div>

      <div>
        <p className="font-utility text-xs uppercase tracking-widest text-cream/50">Dificuldade</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[1, 2, 3].map((level) => (
            <FilterToggle
              key={level}
              active={difficulties.includes(level)}
              onClick={() => toggleDifficulty(level)}
            >
              <span className="flex items-center gap-1">
                {Array.from({ length: level }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
            </FilterToggle>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-col gap-2 border-t border-mist pt-4">
          <div className="flex flex-wrap gap-2">
            {activeChips.map((chip, i) => (
              <button
                key={i}
                type="button"
                onClick={chip.onRemove}
                className="inline-flex items-center gap-1.5 rounded-full border border-coral-angola/40 bg-coral-angola/15 px-3 py-1 font-utility text-xs text-coral-angola"
              >
                {chip.label}
                <X size={12} />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="w-fit font-body text-xs text-cream/50 underline-offset-2 hover:text-cream hover:underline"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}
    </div>
  );
}
