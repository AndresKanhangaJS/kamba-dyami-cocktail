import type { Metadata } from "next";
import Link from "next/link";
import { ReservationSection } from "@/components/sections/ReservationSection";

export const metadata: Metadata = {
  title: "Reservas e Eventos",
  description:
    "Reserva a tua mesa no Kamba-Dyami Cocktail em Luanda. Também organizamos eventos privados e celebrações à medida.",
};

export default function ReservasPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <p className="font-accent text-2xl text-gold-kamba">Reserva a tua noite</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">
          Reservas e Eventos
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-body text-cream/70">
          Conta-nos a ocasião e deixa o resto connosco. Respondemos por email ou telefone para
          confirmar a tua mesa.
        </p>
      </div>

      <div className="mt-12">
        <ReservationSection />
      </div>

      <p className="mt-8 text-center font-body text-xs text-cream/40">
        Para grupos com mais de 20 pessoas ou eventos privados, contacta-nos directamente através
        da página de{" "}
        <Link href="/contacto" className="underline hover:text-gold-kamba">
          Contacto
        </Link>
        .
      </p>
    </div>
  );
}
