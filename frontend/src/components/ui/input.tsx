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
              "flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              prefix && "pl-10",
              suffix && "pr-10",
              error && "border-destructive focus-visible:ring-destructive",
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
