"use client";

import { useState } from "react";
import { Check, Link as LinkIcon, MessageCircle } from "lucide-react";

export function ShareButtons({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof window === "undefined") return;
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappHref =
    typeof window === "undefined"
      ? "#"
      : `https://wa.me/?text=${encodeURIComponent(`${name}, Kamba-Dyami Cocktail: ${window.location.href}`)}`;

  return (
    <div className="flex items-center gap-2 border-t border-mist pt-4">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-9 items-center gap-2 rounded-full border border-mist px-3 font-body text-xs text-cream/80 transition-colors hover:border-teal-ilha hover:text-teal-ilha"
      >
        <MessageCircle size={14} />
        WhatsApp
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex h-9 items-center gap-2 rounded-full border border-mist px-3 font-body text-xs text-cream/80 transition-colors hover:border-gold-kamba hover:text-gold-kamba"
      >
        {copied ? <Check size={14} /> : <LinkIcon size={14} />}
        {copied ? "Copiado!" : "Copiar link"}
      </button>
    </div>
  );
}
