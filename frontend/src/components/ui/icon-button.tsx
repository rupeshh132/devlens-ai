import * as React from "react"
import { Button, type ButtonProps } from "./button"
import { cn } from "@/lib/utils"

export type IconButtonProps = Omit<ButtonProps, "size"> & {
  icon?: React.ReactNode
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="icon"
        className={cn("rounded-full", className)}
        {...props}
      >
        {icon || children}
      </Button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton }
