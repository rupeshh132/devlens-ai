import * as React from "react"
import { cn } from "@/lib/utils"

const PageActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap items-center gap-2", className)}
        {...props}
      />
    )
  }
)
PageActions.displayName = "PageActions"

export { PageActions }
