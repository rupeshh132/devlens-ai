import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pageContainerVariants = cva("mx-auto w-full", {
  variants: {
    maxWidth: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    },
    padding: {
      none: "p-0",
      sm: "p-4 sm:p-6",
      md: "p-6 sm:p-8",
      lg: "p-8 sm:p-12",
    },
  },
  defaultVariants: {
    maxWidth: "xl",
    padding: "md",
  },
})

export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageContainerVariants> {}

const PageContainer = React.forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, maxWidth, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pageContainerVariants({ maxWidth, padding, className }))}
        {...props}
      />
    )
  }
)
PageContainer.displayName = "PageContainer"

// eslint-disable-next-line react-refresh/only-export-components
export { PageContainer, pageContainerVariants }
