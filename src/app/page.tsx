import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getSignatureCocktails } from "@/data/cocktails";
import { formatAOA } from "@/lib/utils/format";

export default function Home() {
  const signatures = getSignatureCocktails();

  return (
    <>
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, var(--color-purple-night) 0%, var(--color-obsidian) 60%)",
            opacity: 0.5,
          }}
        />
        <p className="font-accent text-3xl text-gold-kamba">Kamba-Dyami</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-bold text-cream md:text-6xl">
          O Melhor Copo da Tua Noite
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-cream/70">
          Cocktailaria premium no coração de Luanda.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className="inline-flex h-12 items-center justify-center rounded-full bg-coral-angola px-8 font-body font-medium text-cream transition-colors hover:bg-amber"
          >
            Ver a Carta
          </Link>
          <Link
            href="/reservas"
            className="inline-flex h-12 items-center justify-center rounded-full border border-gold-kamba px-8 font-body font-medium text-gold-kamba transition-colors hover:bg-gold-kamba/10"
          >
            Fazer Reserva
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center font-display text-3xl font-semibold text-cream">
          Assinaturas
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {signatures.map((cocktail) => (
            <Card key={cocktail.id}>
              <CardHeader>
                <Badge variant="gold">{cocktail.category}</Badge>
                <CardTitle className="mt-2">{cocktail.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{cocktail.tagline}</p>
                <p className="mt-4 font-utility text-gold-kamba">
                  {formatAOA(cocktail.price)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
