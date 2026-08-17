import { type InputHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="font-body text-sm text-cream/80">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "h-11 rounded-lg border border-mist bg-obsidian px-4 font-body text-cream placeholder:text-cream/40",
            "transition-colors duration-200 focus-visible:border-gold-kamba focus-visible:outline-none",
            error && "border-red-angola",
            className,
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="font-body text-xs text-red-angola">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
