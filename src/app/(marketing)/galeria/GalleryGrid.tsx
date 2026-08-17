"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { Modal } from "@/components/ui/Modal";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils/cn";

const FILTERS: { value: GalleryItem["category"] | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "cocktails", label: "Cocktails" },
  { value: "ambiente", label: "Ambiente" },
  { value: "eventos", label: "Eventos" },
];

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryItem["category"] | "todos">("todos");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = galleryItems.filter((item) => filter === "todos" || item.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={cn(
              "rounded-full border px-4 py-1.5 font-body text-sm transition-colors duration-200",
              filter === f.value
                ? "border-gold-kamba bg-gold-kamba text-obsidian"
                : "border-mist text-cream/70 hover:border-gold-kamba/60 hover:text-cream",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 60} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setSelected(item)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-2xl border border-mist transition-all duration-200 hover:border-coral-angola",
                item.tall ? "h-96" : "h-56",
              )}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 55%, rgba(10,10,15,0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-obsidian/0 opacity-0 transition-all duration-200 group-hover:bg-obsidian/50 group-hover:opacity-100">
                <ZoomIn size={24} className="text-cream" />
              </div>
              <p className="absolute inset-x-0 bottom-0 p-4 text-left font-body text-sm text-cream/90">
                {item.caption}
              </p>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="relative h-72 w-full overflow-hidden rounded-xl">
              <Image
                src={selected.image}
                alt={selected.caption}
                fill
                sizes="(min-width: 768px) 700px, 90vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-display text-xl text-cream">{selected.caption}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
