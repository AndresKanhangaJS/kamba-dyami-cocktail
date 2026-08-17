"use client";

import { type ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/90 p-6 animate-fade-in-up"
      style={{ animationDuration: "0.2s" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative max-h-[85vh] w-full max-w-3xl overflow-auto rounded-2xl border border-mist bg-smoke p-6",
          className,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-cream/70 transition-colors hover:bg-mist hover:text-cream"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
