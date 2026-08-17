import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "244900000000";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre o Kamba-Dyami para o meu evento.";

export function WhatsAppFloatButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal-ilha text-cream shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-gold-kamba focus-visible:outline-offset-2"
    >
      <MessageCircle size={26} />
      <span className="sr-only">Falar connosco no WhatsApp</span>
    </a>
  );
}
