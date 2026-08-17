"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailCheck } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact.schema";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils/cn";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-teal-ilha/40 bg-smoke p-10 text-center">
        <MailCheck size={36} className="text-teal-ilha" />
        <h2 className="font-display text-xl font-semibold text-cream">Mensagem enviada!</h2>
        <p className="font-body text-sm text-cream/70">
          Obrigado pelo contacto. Respondemos o mais brevemente possível.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-mist bg-smoke p-8"
    >
      <Input label="Nome" error={errors.name?.message} {...register("name")} />
      <Input type="email" label="Email" error={errors.email?.message} {...register("email")} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-body text-sm text-cream/80">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Como podemos ajudar?"
          className={cn(
            "h-auto rounded-lg border border-mist bg-obsidian px-4 py-3 font-body text-cream placeholder:text-cream/40 transition-colors duration-200 focus-visible:border-gold-kamba focus-visible:outline-none",
            errors.message && "border-red-angola",
          )}
          {...register("message")}
        />
        {errors.message && (
          <p className="font-body text-xs text-red-angola">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 rounded-full bg-coral-angola font-body font-medium text-cream transition-all duration-200 hover:bg-amber disabled:opacity-50"
      >
        {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
      </button>
    </form>
  );
}
