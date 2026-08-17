import Link from "next/link";

const PARTICLES = [
  { left: "8%", top: "22%", size: 8, color: "var(--color-gold-kamba)", delay: "0s", duration: "7s" },
  { left: "18%", top: "68%", size: 5, color: "var(--color-coral-angola)", delay: "1.2s", duration: "6s" },
  { left: "28%", top: "38%", size: 6, color: "var(--color-gold-kamba)", delay: "2.1s", duration: "8s" },
  { left: "40%", top: "78%", size: 4, color: "var(--color-teal-ilha)", delay: "0.6s", duration: "6.5s" },
  { left: "52%", top: "18%", size: 7, color: "var(--color-coral-angola)", delay: "1.8s", duration: "7.5s" },
  { left: "63%", top: "58%", size: 5, color: "var(--color-gold-kamba)", delay: "0.3s", duration: "6s" },
  { left: "74%", top: "30%", size: 6, color: "var(--color-coral-angola)", delay: "2.6s", duration: "8s" },
  { left: "85%", top: "70%", size: 4, color: "var(--color-gold-kamba)", delay: "1s", duration: "7s" },
  { left: "12%", top: "48%", size: 4, color: "var(--color-teal-ilha)", delay: "3s", duration: "6.5s" },
  { left: "92%", top: "24%", size: 5, color: "var(--color-coral-angola)", delay: "0.9s", duration: "7s" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, var(--color-purple-night) 0%, var(--color-obsidian) 65%)",
          opacity: 0.6,
        }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="animate-float absolute rounded-full blur-[1px]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0.5,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <p className="font-accent text-3xl text-gold-kamba md:text-4xl">Kamba-Dyami</p>

      <h1 className="mx-auto mt-4 max-w-4xl text-balance font-display text-5xl font-bold text-cream md:text-7xl">
        O Melhor Copo da Tua Noite
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-balance font-body text-lg text-cream/70 md:text-xl">
        Serviço de cocktails premium para os teus eventos em Luanda.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/menu"
          className="inline-flex h-12 items-center justify-center rounded-full bg-coral-angola px-8 font-body font-medium text-cream transition-all duration-200 hover:bg-amber hover:shadow-[0_0_24px_-4px_rgba(232,80,26,0.6)] active:scale-[0.98]"
        >
          Ver a Carta
        </Link>
        <Link
          href="/reservas"
          className="inline-flex h-12 items-center justify-center rounded-full border border-gold-kamba px-8 font-body font-medium text-gold-kamba transition-colors duration-200 hover:bg-gold-kamba/10"
        >
          Fazer Reserva
        </Link>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-cream/50">
        <svg
          width="20"
          height="32"
          viewBox="0 0 24 36"
          fill="none"
          aria-hidden="true"
          className="text-cream/40"
        >
          <defs>
            <clipPath id="glass-clip">
              <path d="M4 2 L20 2 L13 17 L13 32 L11 32 L11 17 Z" />
            </clipPath>
          </defs>
          <path
            d="M4 2 L20 2 L13 17 L13 32 L11 32 L11 17 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect
            x="0"
            y="0"
            width="24"
            height="36"
            clipPath="url(#glass-clip)"
            className="animate-glass-fill fill-gold-kamba"
          />
        </svg>
        <span className="font-utility text-[10px] uppercase tracking-[0.2em]">Desliza</span>
      </div>
    </section>
  );
}
