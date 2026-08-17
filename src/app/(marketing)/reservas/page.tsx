import type { Metadata } from "next";
import Link from "next/link";
import { ReservationSection } from "@/components/sections/ReservationSection";

export const metadata: Metadata = {
  title: "Reservas e Eventos",
  description:
    "Marca o Kamba-Dyami para o teu evento em Luanda: casamentos, festas privadas, eventos corporativos e celebrações à medida.",
};

export default function ReservasPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <p className="font-accent text-2xl text-gold-kamba">Marca a tua data</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">
          Reservas e Eventos
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-body text-cream/70">
          Conta-nos onde e quando é a festa, e levamos o Kamba-Dyami até lá. Respondemos por
          email ou telefone para confirmar todos os detalhes.
        </p>
      </div>

      <div className="mt-12">
        <ReservationSection />
      </div>

      <p className="mt-8 text-center font-body text-xs text-cream/40">
        Para eventos corporativos, casamentos ou grupos grandes, contacta-nos directamente
        através da página de{" "}
        <Link href="/contacto" className="underline hover:text-gold-kamba">
          Contacto
        </Link>{" "}
        para um orçamento personalizado.
      </p>
    </div>
  );
}
