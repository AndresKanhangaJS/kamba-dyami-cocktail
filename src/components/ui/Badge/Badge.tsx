import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

const VARIANT_CLASSES = {
  gold: "bg-gold-kamba/15 text-gold-kamba border-gold-kamba/30",
  coral: "bg-coral-angola/15 text-coral-angola border-coral-angola/30",
  teal: "bg-teal-ilha/15 text-teal-ilha border-teal-ilha/30",
  purple: "bg-purple-night/20 text-cream border-purple-night/40",
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof VARIANT_CLASSES;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "gold", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-3 py-1 font-utility text-xs uppercase tracking-wider",
          VARIANT_CLASSES[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";
