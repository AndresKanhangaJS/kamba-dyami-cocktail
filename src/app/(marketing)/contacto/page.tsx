import type { Metadata } from "next";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Fala com o Kamba-Dyami Cocktail: localização, horário e contactos em Luanda, Angola.",
};

const INFO_ITEMS = [
  { icon: MapPin, label: "Localização", value: "Ilha de Luanda, Luanda, Angola" },
  { icon: Clock, label: "Horário", value: "Terça a Domingo · 18h00 – 02h00" },
  { icon: Phone, label: "Telefone", value: "+244 900 000 000" },
  { icon: Mail, label: "Email", value: "contacto@kamba-dyami.ao" },
  { icon: Instagram, label: "Instagram", value: "@kambadyamicocktail" },
];

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="font-accent text-2xl text-gold-kamba">Fala Connosco</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-cream md:text-5xl">
          Contacto
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-body text-cream/70">
          Dúvidas, eventos privados ou só para dizer olá — estamos por aqui.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div
            aria-hidden="true"
            className="flex h-56 flex-col items-center justify-center gap-2 rounded-2xl border border-mist"
            style={{
              background:
                "linear-gradient(160deg, var(--color-smoke) 0%, var(--color-purple-night) 140%)",
            }}
          >
            <MapPin size={32} className="text-gold-kamba" />
            <p className="font-body text-sm text-cream/70">Ilha de Luanda, Angola</p>
          </div>

          <ul className="flex flex-col gap-5">
            {INFO_ITEMS.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-mist text-gold-kamba">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="font-utility text-xs uppercase tracking-widest text-cream/50">
                    {item.label}
                  </p>
                  <p className="font-body text-cream/85">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/244900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-full border border-teal-ilha px-6 font-body font-medium text-teal-ilha transition-colors duration-200 hover:bg-teal-ilha/10"
          >
            <MessageCircle size={18} />
            Fala connosco no WhatsApp
          </a>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
