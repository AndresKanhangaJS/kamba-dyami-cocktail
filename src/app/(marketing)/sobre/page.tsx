import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Leaf, MapPin, Sparkles } from "lucide-react";
import { team } from "@/data/team";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ParallaxSection } from "@/components/shared/ParallaxSection";

export const metadata: Metadata = {
  title: "Nossa História",
  description:
    "Conhece a história do Kamba-Dyami Cocktail: raízes de Luanda, cultura Kimbundu e a filosofia por trás de cada copo.",
};

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Amizade de Verdade",
    description:
      "Kamba-Dyami significa amigo do peito. Cada mesa é tratada como a de um amigo, não a de um cliente.",
  },
  {
    icon: Leaf,
    title: "Raízes Angolanas",
    description:
      "Mukua, gindungo, mel da Humpata, caju — os nossos ingredientes contam a história da terra.",
  },
  {
    icon: Sparkles,
    title: "Ofício e Detalhe",
    description:
      "Cada cocktail é preparado com técnica internacional e paciência artesanal, copo a copo.",
  },
  {
    icon: MapPin,
    title: "Alma da Ilha",
    description:
      "Inspiramo-nos na Baía de Luanda: cores do pôr do sol, música e o calor das noites angolanas.",
  },
];

export default function SobrePage() {
  return (
    <div>
      <section className="px-6 pb-16 pt-24 text-center">
        <p className="font-accent text-3xl text-gold-kamba">Kamba-Dyami</p>
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-semibold text-cream md:text-5xl">
          O Amigo do Peito
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-cream/70">
          Porque os melhores copos bebem-se com quem importa.
        </p>
      </section>

      <ParallaxSection
        className="px-6 py-24"
        backgroundClassName="bg-[radial-gradient(circle_at_25%_25%,var(--color-purple-night)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,var(--color-teal-ilha)_0%,transparent_45%)] opacity-25"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold text-cream">Nossa História</h2>
            <p className="mt-4 font-body leading-relaxed text-cream/80">
              O Kamba-Dyami nasceu na Ilha de Luanda, entre o som das ondas e as cores de um
              entardecer angolano. O nome vem do Kimbundu — o amigo do peito, aquele com quem
              partilhas os momentos que ficam. Foi com esse espírito que decidimos abrir um lugar
              onde cada cocktail carrega uma parte da nossa cultura.
            </p>
            <p className="mt-4 font-body leading-relaxed text-cream/80">
              Não somos um bar europeu importado para Angola. Somos Luanda, à noite: os panos
              tradicionais que inspiram os nossos padrões, os frutos como o mukua e o caju que
              reinventam clássicos internacionais, e a música que nunca para de tocar ao fundo.
            </p>
            <p className="mt-4 font-body leading-relaxed text-cream/80">
              Cada receita da nossa carta começou como uma conversa entre amigos — sobre memória,
              sabor e lugar. É essa conversa que continua em cada copo que servimos.
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-semibold text-cream">Os Nossos Valores</h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 100}>
              <Card className="h-full hover:scale-100 hover:border-mist">
                <CardHeader>
                  <value.icon size={28} className="text-gold-kamba" />
                  <CardTitle className="mt-2 text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>{value.description}</CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-semibold text-cream">Quem Faz Acontecer</h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {team.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 100} className="text-center">
              <div
                aria-hidden="true"
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full font-display text-2xl font-semibold text-cream"
                style={{
                  background:
                    "linear-gradient(160deg, var(--color-coral-angola) 0%, var(--color-purple-night) 130%)",
                }}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-cream">
                {member.name}
              </h3>
              <p className="font-utility text-xs uppercase tracking-widest text-gold-kamba">
                {member.role}
              </p>
              <p className="mx-auto mt-3 max-w-xs font-body text-sm text-cream/70">
                {member.bio}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 text-center">
        <ScrollReveal>
          <p className="font-accent text-2xl text-teal-ilha">Vem sentir</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-cream">
            A tua noite começa aqui
          </h2>
          <Link
            href="/reservas"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-coral-angola px-8 font-body font-medium text-cream transition-all duration-200 hover:bg-amber"
          >
            Fazer Reserva
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
