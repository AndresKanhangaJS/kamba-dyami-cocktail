"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils/cn";

const AUTOPLAY_MS = 5000;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = testimonials[index];

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <ScrollReveal>
        <p className="font-accent text-2xl text-gold-kamba">Vozes de Luanda</p>
        <h2 className="mt-2 font-display text-4xl font-semibold text-cream">Testemunhos</h2>
      </ScrollReveal>

      <div
        className="relative mt-12 min-h-48"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex justify-center gap-1 text-gold-kamba">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 font-display text-2xl italic text-cream md:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="mt-4 font-body text-sm text-cream/60">{current.name}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            aria-label={`Ver testemunho de ${t.name}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors duration-200",
              i === index ? "bg-gold-kamba" : "bg-mist hover:bg-cream/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
