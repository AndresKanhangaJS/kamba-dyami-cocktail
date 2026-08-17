"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { formatAOA } from "@/lib/utils/format";

interface AnimatedNumberProps {
  value: number;
  currency?: boolean;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({ value, currency = false, duration = 800, className }: AnimatedNumberProps) {
  const { ref, isInView } = useScrollReveal(0.6);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {currency ? formatAOA(display) : display}
    </span>
  );
}
