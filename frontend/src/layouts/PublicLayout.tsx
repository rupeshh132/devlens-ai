import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"
import { Logo } from "@/components/ui/logo"

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <MarketingNavbar />
      <main className="flex-1 pt-14">{children}</main>
      <MarketingFooter />
    </div>
  )
}

function MarketingNavbar() {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        {/* Left Side: Logo */}
        <Logo size="sm" hideTextOnMobile={true} />
        {/* Right Side: Links & Buttons */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
            <Link to="/features" className={`transition-colors hover:text-brand-navy ${location.pathname === '/features' ? 'text-brand-navy' : ''}`}>Features</Link>
            <Link to="/how-it-works" className={`transition-colors hover:text-brand-navy ${location.pathname === '/how-it-works' ? 'text-brand-navy' : ''}`}>How It Works</Link>
            <Link to="/pricing" className={`transition-colors hover:text-brand-navy ${location.pathname === '/pricing' ? 'text-brand-navy' : ''}`}>Pricing</Link>
            <Link to="/faq" className={`transition-colors hover:text-brand-navy ${location.pathname === '/faq' ? 'text-brand-navy' : ''}`}>FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-bold text-brand-navy">Log in</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-brand-coral hover:bg-brand-coral/90 text-white rounded-full font-bold shadow-md shadow-brand-coral/20">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function MarketingFooter() {
  return (
    <footer className="border-t py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-4 max-w-screen-2xl">
        <div className="space-y-4">
          <Logo size="md" />
          <p className="text-sm text-muted-foreground max-w-xs">
            Ship higher quality code faster with AI-powered static analysis and intelligent PR reviews.
          </p>
          <div className="flex items-center space-x-4">
            <Terminal className="h-5 w-5 text-muted-foreground hover:text-brand-coral cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">Product</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/features" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Features</Link></li>
            <li><Link to="/integrations" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Integrations</Link></li>
            <li><Link to="/pricing" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Pricing</Link></li>
            <li><Link to="/changelog" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Changelog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">Resources</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/docs" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Documentation</Link></li>
            <li><Link to="/blog" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Blog</Link></li>
            <li><Link to="/help" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Help Center</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">Legal</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Terms of Service</Link></li>
            <li><Link to="/cookies" className="inline-block hover:text-brand-coral hover:translate-x-1 transition-all duration-300">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground max-w-screen-2xl">
        © {new Date().getFullYear()} DevLens AI, Inc. All rights reserved.
      </div>
    </footer>
  )
}
