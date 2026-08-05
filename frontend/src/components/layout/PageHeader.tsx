import * as React from "react"
import { cn } from "@/lib/utils"

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  breadcrumb?: React.ReactNode
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, title, description, actions, breadcrumb, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4 md:flex-row md:items-start md:justify-between pb-6", className)}
        {...props}
      >
        <div className="flex flex-col gap-2">
          {breadcrumb && <div className="mb-2">{breadcrumb}</div>}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-primary" />
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">{title}</h1>
          </div>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    )
  }
)
PageHeader.displayName = "PageHeader"

export { PageHeader }
