import { Outlet } from "react-router-dom"
import { ErrorBoundary } from "@/components/layout/ErrorBoundary"

export function CenteredLayout() {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen items-center justify-center bg-background p-4 md:p-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </ErrorBoundary>
  )
}
