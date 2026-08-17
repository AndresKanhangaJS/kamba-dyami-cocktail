"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const newsletterSchema = z.object({
  email: z.string().email("Introduz um email válido"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  };

  return (
    <section
      className="relative overflow-hidden px-6 py-24"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, var(--color-gold-kamba) 0, var(--color-gold-kamba) 1px, transparent 1px, transparent 24px)," +
          "repeating-linear-gradient(-45deg, var(--color-coral-angola) 0, var(--color-coral-angola) 1px, transparent 1px, transparent 24px)",
        backgroundColor: "var(--color-smoke)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "var(--color-smoke)", opacity: 0.9 }}
      />
      <div className="relative mx-auto max-w-xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Recebe receitas exclusivas todo mês
          </h2>
          <p className="mt-3 font-body text-sm text-cream/70">
            Histórias, ingredientes angolanos e cocktails de assinatura direto na tua caixa de
            entrada.
          </p>
        </ScrollReveal>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <div className="w-full sm:max-w-xs">
            <Input
              type="email"
              placeholder="o-teu-email@exemplo.com"
              aria-label="Email para newsletter"
              error={errors.email?.message}
              {...register("email")}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-11 shrink-0 rounded-full bg-coral-angola px-6 font-body font-medium text-cream transition-colors duration-200 hover:bg-amber disabled:opacity-50"
          >
            Subscrever
          </button>
        </form>

        {submitted && (
          <p role="status" className="mt-4 font-body text-sm text-teal-ilha">
            Obrigado! Verifica o teu email para confirmar a subscrição.
          </p>
        )}
      </div>
    </section>
  );
}
