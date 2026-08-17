"use client";

import { type HTMLAttributes } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils/cn";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  amount?: number;
  direction?: "up" | "down";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount,
  direction = "up",
  style,
  ...props
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollReveal(amount);
  const animationClass = direction === "up" ? "animate-fade-in-up" : "animate-fade-in-down";

  return (
    <div
      ref={ref}
      className={cn("opacity-0", isInView && animationClass, className)}
      style={{ animationDelay: isInView ? `${delay}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
