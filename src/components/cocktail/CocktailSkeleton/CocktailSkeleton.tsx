import { Skeleton } from "@/components/ui/Skeleton";

export function CocktailSkeleton() {
  return (
    <div className="flex h-80 flex-col justify-end gap-3 rounded-2xl border border-mist p-6">
      <Skeleton className="h-5 w-16 rounded-full" />
      <Skeleton className="h-7 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  );
}

export function CocktailSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CocktailSkeleton key={i} />
      ))}
    </div>
  );
}
