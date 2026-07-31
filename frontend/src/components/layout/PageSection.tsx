import * as React from "react"
import { cn } from "@/lib/utils"

export interface PageSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
}

const PageSection = React.forwardRef<HTMLElement, PageSectionProps>(
  ({ className, title, description, actions, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("flex flex-col gap-6 py-6", className)} {...props}>
        {(title || description || actions) && (
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b pb-4">
            <div className="flex flex-col gap-1">
              {title && <h2 className="text-xl font-semibold tracking-tight">{title}</h2>}
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            {actions && <div className="flex items-center gap-2 mt-4 md:mt-0">{actions}</div>}
          </div>
        )}
        <div className="flex-1">{children}</div>
      </section>
    )
  }
)
PageSection.displayName = "PageSection"

export { PageSection }
