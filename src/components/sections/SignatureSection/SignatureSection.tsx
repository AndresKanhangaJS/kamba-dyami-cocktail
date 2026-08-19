import Image from "next/image";
import { getSignatureCocktails } from "@/data/cocktails";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

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

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {signatures.map((cocktail, i) => (
          <ScrollReveal key={cocktail.id} delay={i * 120} className="[perspective:1200px]">
            <div className="relative h-96 w-full [transform-style:preserve-3d] transition-transform duration-700 ease-out hover:[transform:rotateY(180deg)]">
              {/* Frente */}
              <div className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-2xl border border-mist p-6 [backface-visibility:hidden]">
                <Image
                  src={cocktail.images[0].src}
                  alt={cocktail.images[0].alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 25%, var(--color-obsidian) 95%)",
                  }}
                />
                <Badge variant="gold" className="relative w-fit">
                  Assinatura
                </Badge>
                <h3 className="mt-3 font-display text-3xl font-semibold text-cream">
                  {cocktail.name}
                </h3>
                <p className="mt-1 font-body text-sm text-cream/70">{cocktail.tagline}</p>
              </div>

              {/* Verso */}
              <div
                className="absolute inset-0 flex flex-col justify-start rounded-2xl border border-gold-kamba/40 bg-smoke p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                <div>
                  <h4 className="font-display text-xl font-semibold text-gold-kamba">
                    Ingredientes
                  </h4>
                  <ul className="mt-3 flex flex-col gap-1.5 font-body text-sm text-cream/80">
                    {cocktail.ingredients.map((ing) => (
                      <li key={ing.name} className="flex justify-between gap-2">
                        <span>{ing.name}</span>
                        <span className="font-utility text-cream/50">{ing.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
