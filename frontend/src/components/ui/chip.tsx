
import { Badge, type BadgeProps, badgeVariants } from "./badge"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ChipProps extends BadgeProps {
  onRemove?: () => void
}

export function Chip({ className, variant, onRemove, children, ...props }: ChipProps) {
  return (
    <Badge
      variant={variant}
      className={cn("rounded-full px-3 py-1", onRemove && "pr-1", className)}
      {...props}
    >
        {children}
        {onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onRemove()
            }}
            className="ml-1 rounded-full outline-none hover:bg-black/10 dark:hover:bg-white/10 p-0.5 focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove</span>
          </button>
        )}
      </Badge>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { badgeVariants as chipVariants }
