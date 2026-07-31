import * as React from "react"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { Label } from "./label"

export interface RadioProps extends React.ComponentPropsWithoutRef<typeof RadioGroupItem> {
  label?: string;
  description?: string;
}

const Radio = React.forwardRef<React.ElementRef<typeof RadioGroupItem>, RadioProps>(
  ({ className, label, description, id, value, ...props }, ref) => {
    const radioId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    return (
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={value ?? ""} id={radioId} ref={ref} className={className} {...props} />
        {label && (
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor={radioId}>
              {label}
            </Label>
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)
Radio.displayName = "Radio"

export { Radio, RadioGroup }
