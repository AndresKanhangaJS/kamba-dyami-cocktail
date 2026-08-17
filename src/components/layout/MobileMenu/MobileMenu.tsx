"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/constants/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-cream hover:text-gold-kamba"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 animate-fade-in-up border-t border-mist bg-obsidian px-6 py-8"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col gap-6">
            {MAIN_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl text-cream hover:text-gold-kamba"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/reservas"
            onClick={() => setIsOpen(false)}
            className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-full bg-coral-angola font-body font-medium text-cream transition-colors hover:bg-amber"
          >
            Fazer Reserva
          </Link>
        </div>
      )}
    </div>
  );
}
