import { CocktailSkeletonGrid } from "@/components/cocktail/CocktailSkeleton";

export default function MenuLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-96 rounded-2xl border border-mist bg-smoke" />
        <CocktailSkeletonGrid count={6} />
      </div>
    </div>
  );
}
