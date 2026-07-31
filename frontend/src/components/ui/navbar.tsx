import * as React from "react"
import { cn } from "@/lib/utils"

const Navbar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      {...props}
    >
      <div className="container flex h-14 items-center px-4 md:px-6">
        {props.children}
      </div>
    </header>
  )
)
Navbar.displayName = "Navbar"

const NavbarBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mr-4 hidden md:flex", className)}
      {...props}
    />
  )
)
NavbarBrand.displayName = "NavbarBrand"

const NavbarActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-1 items-center justify-between space-x-2 md:justify-end", className)}
      {...props}
    />
  )
)
NavbarActions.displayName = "NavbarActions"

export { Navbar, NavbarBrand, NavbarActions }
