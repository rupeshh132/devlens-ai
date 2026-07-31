import * as React from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input, type InputProps } from "./input"
import { IconButton } from "./icon-button"

export type PasswordInputProps = Omit<InputProps, "type" | "suffix">

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <Input
        type={showPassword ? "text" : "password"}
        className={className}
        disabled={disabled}
        ref={ref}
        suffix={
          <IconButton
            type="button"
            variant="ghost"
            className="h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-transparent"
            disabled={disabled}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            icon={showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          />
        }
        {...props}
      />
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
