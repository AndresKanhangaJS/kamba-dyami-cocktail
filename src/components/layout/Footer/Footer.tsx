import Link from "next/link";
import { FOOTER_NAV } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-mist/60 bg-smoke">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-gold-kamba">Kamba-Dyami</p>
            <p className="mt-2 font-accent text-lg text-cream/70">O Amigo do Peito</p>
            <p className="mt-4 max-w-xs font-body text-sm text-cream/60">
              Porque os melhores copos bebem-se com quem importa.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-col gap-3">
            {FOOTER_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-cream/70 hover:text-gold-kamba"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="font-body text-sm text-cream/70">
            <p>Luanda, Angola</p>
            <p className="mt-2">contacto@kamba-dyami.ao</p>
          </div>
        </div>

        <p className="mt-10 border-t border-mist/60 pt-6 font-utility text-xs text-cream/40">
          © {new Date().getFullYear()} Kamba-Dyami Cocktail. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
