import { Outlet, Link } from "react-router-dom"
import { ErrorBoundary } from "@/components/layout/ErrorBoundary"
import type { ReactNode } from "react"

export function AuthLayout({ children }: { children?: ReactNode }) {
  return (
    <ErrorBoundary>
      <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex border-r border-border">
          <img src="/images/auth-bg.jpg" alt="Background" className="absolute inset-0 object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/90 via-[#0a0f1d]/40 to-[#0a0f1d]/20" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-5 h-5 bg-brand-coral rounded-sm shadow-[0_0_15px_rgba(255,107,107,0.5)]" />
              <span className="font-black text-2xl text-white tracking-tight drop-shadow-md">DevLens AI</span>
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-3">
              <p className="text-xl font-medium leading-relaxed drop-shadow-md text-gray-100">
                &ldquo;Empowering developers with AI-driven insights. Understand your code, discover skill gaps, and accelerate your career faster than ever before.&rdquo;
              </p>
              <footer className="text-base text-gray-300 font-semibold tracking-wide">The DevLens AI Team</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 w-full flex items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {children || <Outlet />}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
