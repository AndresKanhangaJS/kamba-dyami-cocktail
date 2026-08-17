import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

const VARIANT_CLASSES = {
  primary:
    "bg-coral-angola text-cream hover:bg-amber active:scale-[0.98] shadow-[0_0_0_0_rgba(232,80,26,0)] hover:shadow-[0_0_24px_-4px_rgba(232,80,26,0.6)]",
  outline:
    "border border-gold-kamba text-gold-kamba bg-transparent hover:bg-gold-kamba/10",
  ghost: "bg-transparent text-cream hover:bg-mist",
} as const;

const SIZE_CLASSES = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANT_CLASSES;
  size?: keyof typeof SIZE_CLASSES;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide transition-all duration-200 ease-out",
          "disabled:opacity-40 disabled:pointer-events-none",
          "focus-visible:outline-2 focus-visible:outline-gold-kamba focus-visible:outline-offset-2",
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
