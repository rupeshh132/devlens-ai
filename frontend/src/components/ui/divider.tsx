import * as React from "react"
import { Separator } from "./separator"

export const Divider = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>((props, ref) => <Separator ref={ref} {...props} />)
Divider.displayName = "Divider"
