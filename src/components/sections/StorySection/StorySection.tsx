import { team } from "@/data/team";
import { ParallaxSection } from "@/components/shared/ParallaxSection";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function StorySection() {
  const founder = team[0];

  return (
    <ParallaxSection
      className="px-6 py-28"
      backgroundClassName="bg-[radial-gradient(circle_at_20%_30%,var(--color-teal-ilha)_0%,transparent_45%),radial-gradient(circle_at_80%_70%,var(--color-coral-angola)_0%,transparent_45%)] opacity-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <p className="font-accent text-2xl text-teal-ilha">Nossa História</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">
            Raízes de Luanda, alma Kamba-Dyami
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-cream/70">
            Cada copo que servimos carrega um pouco de Kimbundu, da Ilha de Luanda e dos panos
            tradicionais angolanos que inspiram os nossos padrões e cores. Não somos um bar
            europeu — somos Luanda, à noite, com música, cor e amigos de coração.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="flex flex-col items-start gap-4">
          <blockquote className="border-l-2 border-gold-kamba pl-6 font-accent text-3xl leading-snug text-gold-kamba md:text-4xl">
            &ldquo;Kamba-Dyami é o amigo do peito — aquele com quem partilhas os melhores
            momentos da vida.&rdquo;
          </blockquote>
          <p className="font-body text-sm text-cream/60">
            {founder.name} · {founder.role}
          </p>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
}
