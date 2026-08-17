import { Skeleton } from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-mist">
            <Skeleton className="h-48 w-full rounded-none" />
            <div className="flex flex-col gap-3 p-6">
              <Skeleton className="h-3 w-1/3" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
