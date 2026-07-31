import { Outlet } from "react-router-dom"
import { ErrorBoundary } from "@/components/layout/ErrorBoundary"

export function BlankLayout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background flex flex-col">
        <Outlet />
      </div>
    </ErrorBoundary>
  )
}
