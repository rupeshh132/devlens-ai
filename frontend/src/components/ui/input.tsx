import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label"

export interface InputProps extends Omit<React.ComponentProps<"input">, "prefix"> {
  label?: string;
  error?: string;
  helperText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, prefix, suffix, required, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <Label htmlFor={inputId} className={cn(error && "text-destructive")}>
            {label} {required && <span className="text-destructive">*</span>}
          </Label>
        )}
        <div className="relative flex items-center">
          {prefix && (
            <div className="absolute left-3 flex items-center justify-center text-muted-foreground">
              {prefix}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl border border-input/50 bg-muted/30 px-4 py-2 text-base transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/70 hover:border-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral/20 focus-visible:border-brand-coral disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              prefix && "pl-11",
              suffix && "pr-11",
              error && "border-destructive/80 focus-visible:ring-destructive/20 focus-visible:border-destructive",
              className
            )}
            ref={ref}
            required={required}
            {...props}
          />
          {suffix && (
            <div className="absolute right-3 flex items-center justify-center text-muted-foreground">
              {suffix}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {helperText && !error && <p className="text-sm text-muted-foreground">{helperText}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
