import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: React.ReactNode
  fullscreen?: boolean
}

const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ className, message, fullscreen = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-50",
          fullscreen ? "fixed inset-0" : "absolute inset-0",
          className
        )}
        {...props}
      >
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        {message && <p className="text-sm text-muted-foreground">{message}</p>}
      </div>
    )
  }
)
LoadingOverlay.displayName = "LoadingOverlay"

export { LoadingOverlay }
