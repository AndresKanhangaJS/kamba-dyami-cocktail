import type { Metadata } from "next";
import { MenuPageContent } from "./MenuPageContent";

export const metadata: Metadata = {
  title: "Carta de Cocktails",
  description:
    "Explora a carta completa de cocktails do Kamba-Dyami: assinaturas, clássicos, África Fusion, sem álcool e mais.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <p className="font-accent text-2xl text-gold-kamba">A Carta</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">
          Cocktails
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-body text-cream/70">
          Da assinatura Kamba-Dyami aos clássicos internacionais, cada copo tem uma história
          angolana para contar.
        </p>
      </div>

      <MenuPageContent />
    </div>
  );
}
