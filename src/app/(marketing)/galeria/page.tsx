import type { Metadata } from "next";
import { GalleryGrid } from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Momentos do Kamba-Dyami Cocktail: cocktails, bastidores e eventos por toda Luanda.",
};

export default function GaleriaPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="font-accent text-2xl text-gold-kamba">Momentos</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">
          Galeria
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-body text-cream/70">
          Cocktails, bastidores e celebrações: um vislumbre do que te espera no Kamba-Dyami.
        </p>
      </div>

      <div className="mt-12">
        <GalleryGrid />
      </div>
    </div>
  );
}
