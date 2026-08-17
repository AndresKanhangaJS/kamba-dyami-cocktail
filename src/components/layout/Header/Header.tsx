import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mist/60 bg-obsidian/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold-kamba focus:px-4 focus:py-2 focus:text-obsidian"
      >
        Saltar para o conteúdo
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-display text-xl font-semibold text-gold-kamba">
          Kamba-Dyami
        </Link>

        <Navigation />

        <div className="flex items-center gap-4">
          <Link
            href="/reservas"
            className="hidden h-9 items-center justify-center rounded-full bg-coral-angola px-4 font-body text-sm font-medium text-cream transition-colors hover:bg-amber md:inline-flex"
          >
            Fazer Reserva
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
