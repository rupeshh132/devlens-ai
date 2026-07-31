import * as React from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "./input"
import { IconButton } from "./icon-button"
import { cn } from "@/lib/utils"

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
  onClear?: () => void
  isLoading?: boolean
  debounceMs?: number
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, value: externalValue, defaultValue, onChange, onSearch, onClear, isLoading, debounceMs = 300, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "")
    const value = externalValue !== undefined ? externalValue : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (externalValue === undefined) {
        setInternalValue(e.target.value)
      }
      onChange?.(e)
    }

    const handleClear = () => {
      if (externalValue === undefined) {
        setInternalValue("")
      }
      onClear?.()
    }

    // Debounce effect
    React.useEffect(() => {
      if (!onSearch) return

      const timer = setTimeout(() => {
        onSearch(value as string)
      }, debounceMs)

      return () => clearTimeout(timer)
    }, [value, debounceMs, onSearch])

    return (
      <div className={cn("relative flex w-full max-w-sm items-center", className)}>
        <Input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          prefix={
            isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            ) : (
              <Search className="h-4 w-4 text-muted-foreground" />
            )
          }
          suffix={
            value ? (
              <IconButton
                type="button"
                variant="ghost"
                className="h-6 w-6 hover:bg-transparent"
                onClick={handleClear}
                icon={<X className="h-3 w-3" />}
              />
            ) : null
          }
          {...props}
        />
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
