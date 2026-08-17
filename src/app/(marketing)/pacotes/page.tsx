import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, CheckCircle2, Clock, GlassWater, UserCog, Users } from "lucide-react";
import { eventPackages, PACKAGE_ADD_ONS } from "@/data/packages";
import { formatAOA } from "@/lib/utils/format";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
  title: "Pacotes de Eventos",
  description:
    "Pacotes de cocktails e mocktails para o teu evento em Luanda: casamentos, festas privadas e eventos corporativos, com orçamento à medida.",
};

const ICON_ITEMS = (pkg: (typeof eventPackages)[number]) => [
  { icon: Users, label: pkg.guests },
  { icon: Clock, label: pkg.duration },
  { icon: UserCog, label: pkg.bartenders },
  { icon: GlassWater, label: pkg.drinkOptions },
];

export default function PacotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="font-accent text-2xl text-gold-kamba">Pacotes de Eventos</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">
          Escolhe a experiência certa para a tua festa
        </h1>
        <p className="mx-auto mt-3 max-w-2xl font-body text-cream/70">
          Cada pacote inclui cocktails e mocktails, para que todos os convidados, com ou sem
          álcool, tenham uma carta à altura da ocasião. Os valores são um ponto de partida: o
          orçamento final depende do número de convidados, duração e local do evento.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {eventPackages.map((pkg, i) => (
          <ScrollReveal key={pkg.id} delay={i * 100}>
            <div
              className={cn(
                "relative flex h-full flex-col gap-6 rounded-2xl border p-8",
                pkg.highlight
                  ? "border-gold-kamba bg-smoke shadow-[0_0_40px_-12px_rgba(212,160,23,0.4)]"
                  : "border-mist bg-smoke",
              )}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold-kamba px-4 py-1 font-utility text-xs uppercase tracking-wide text-obsidian">
                  <BadgeCheck size={14} />
                  Mais Popular
                </span>
              )}

              <div>
                <h2 className="font-display text-2xl font-semibold text-cream">{pkg.name}</h2>
                <p className="mt-1 font-body text-sm text-cream/60">{pkg.tagline}</p>
              </div>

              <div>
                <p className="font-utility text-xs uppercase tracking-widest text-cream/50">
                  A partir de
                </p>
                <p className="mt-1 font-utility text-3xl text-gold-kamba">
                  {formatAOA(pkg.priceFrom)}
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {ICON_ITEMS(pkg).map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 font-body text-sm text-cream/85"
                  >
                    <item.icon size={16} className="shrink-0 text-teal-ilha" />
                    {item.label}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-2 border-t border-mist pt-6">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 font-body text-sm text-cream/70"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-kamba" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/reservas"
                className={cn(
                  "mt-auto inline-flex h-11 items-center justify-center rounded-full font-body font-medium transition-colors duration-200",
                  pkg.highlight
                    ? "bg-coral-angola text-cream hover:bg-amber"
                    : "border border-gold-kamba text-gold-kamba hover:bg-gold-kamba/10",
                )}
              >
                Pedir Este Pacote
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-16 rounded-2xl border border-mist bg-smoke p-8 text-center">
        <h2 className="font-display text-2xl font-semibold text-cream">Extras Disponíveis</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {PACKAGE_ADD_ONS.map((addon) => (
            <span
              key={addon}
              className="rounded-full border border-mist px-4 py-2 font-body text-sm text-cream/80"
            >
              {addon}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-xl font-body text-sm text-cream/60">
          Para grupos acima de 150 convidados ou pedidos muito específicos, fala connosco
          directamente e desenhamos um orçamento à medida.
        </p>
        <Link
          href="/contacto"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-gold-kamba px-6 font-body font-medium text-gold-kamba transition-colors duration-200 hover:bg-gold-kamba/10"
        >
          Pedir Orçamento Personalizado
        </Link>
      </ScrollReveal>
    </div>
  );
}
