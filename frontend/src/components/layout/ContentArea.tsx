import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContentAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollable?: boolean
}

const ContentArea = React.forwardRef<HTMLDivElement, ContentAreaProps>(
  ({ className, scrollable = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-1 flex-col w-full h-full",
          scrollable && "overflow-y-auto overflow-x-hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ContentArea.displayName = "ContentArea"

export { ContentArea }
