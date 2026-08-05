import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  description?: string
  icon?: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendValue,
  className,
  ...props
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-black tracking-tight">{value}</div>
        {(description || trendValue) && (
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
            {trendValue && (
              <span
                className={cn(
                  "font-medium",
                  trend === "up" && "text-emerald-500",
                  trend === "down" && "text-destructive",
                  trend === "neutral" && "text-muted-foreground"
                )}
              >
                {trend === "up" ? "+" : trend === "down" ? "-" : ""}
                {trendValue}
              </span>
            )}
            {description && <span>{description}</span>}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
