"use client";

import { type ReactNode, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  backgroundClassName?: string;
  backgroundImage?: { src: string; alt: string };
  /** Fracção do deslocamento do scroll aplicada ao fundo. Regra da spec: 0.15. */
  speed?: number;
}

export function ParallaxSection({
  children,
  className,
  backgroundClassName,
  backgroundImage,
  speed = 0.15,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        aria-hidden="true"
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10 scale-125"
      >
        {backgroundImage && (
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        )}
        <div className={cn("absolute inset-0", backgroundClassName)} />
      </motion.div>
      {children}
    </div>
  );
}
