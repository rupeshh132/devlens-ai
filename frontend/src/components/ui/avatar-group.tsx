import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  children: React.ReactNode
}

export function AvatarGroup({ className, max = 4, children, ...props }: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children)
  const validChildren = childrenArray.filter(React.isValidElement)
  const renderChildren = validChildren.slice(0, max)
  const remaining = validChildren.length - max

  return (
    <div className={cn("flex items-center -space-x-3", className)} {...props}>
      {renderChildren.map((child, index) => {
        const childElement = child as React.ReactElement<React.HTMLAttributes<HTMLElement>>
        return React.cloneElement(childElement, {
          className: cn(
            childElement.props.className,
            "ring-2 ring-background z-[1]"
          ),
          style: { zIndex: renderChildren.length - index },
        })
      })}
      {remaining > 0 && (
        <div
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium ring-2 ring-background"
          style={{ zIndex: 0 }}
        >
          +{remaining}
        </div>
      )}
    </div>
  )
}
