import { getSignatureCocktails } from "@/data/cocktails";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SignatureFlipCard } from "./SignatureFlipCard";

export function SignatureSection() {
  const signatures = getSignatureCocktails();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <ScrollReveal className="text-center">
        <p className="font-accent text-2xl text-gold-kamba">Os nossos favoritos</p>
        <h2 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">
          Assinaturas
        </h2>
      </ScrollReveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {signatures.map((cocktail, i) => (
          <ScrollReveal key={cocktail.id} delay={i * 120}>
            <SignatureFlipCard cocktail={cocktail} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
