import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  label?: string;
  animated?: boolean;
  indicatorClassName?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, label, animated, indicatorClassName, ...props }, ref) => (
  <div className="w-full">
    {label && (
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium">{label}</span>
        {value !== undefined && value !== null && (
          <span className="text-sm font-medium">{Math.round(value)}%</span>
        )}
      </div>
    )}
    <ProgressPrimitive.Root
      ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 transition-all",
          indicatorClassName || "bg-primary",
          animated && "transition-all duration-500 ease-in-out"
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  </div>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
