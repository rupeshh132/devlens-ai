import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Zap, Shield, Search, BarChart3, CheckCircle2, Terminal } from "lucide-react"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <MarketingNavbar />
      <main className="flex-1">
        <HeroSection />
        <TrustedStatsSection />
        <FeaturesGridSection />
        <HowItWorksSection />
        <PreviewsSection />
        <WhyDevLensSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <MarketingFooter />
    </div>
  )
}

// ---------------------------------------------------------
// Navigation & Footer
// ---------------------------------------------------------
function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-primary" />
            <span className="font-black tracking-tight hidden sm:inline-block">DevLens AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">How it Works</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link to="/register">
            <Button size="sm">Get Started</Button>
          </Link>
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
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">DevLens AI</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Ship higher quality code faster with AI-powered static analysis and intelligent PR reviews.
          </p>
          <div className="flex items-center space-x-4">
            <Terminal className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            {/* Other social icons can go here */}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm">Product</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm">Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground max-w-screen-2xl">
        © {new Date().getFullYear()} DevLens AI, Inc. All rights reserved.
      </div>
    </footer>
  )
}

// ---------------------------------------------------------
// 1. Hero Section
// ---------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="container mx-auto relative z-10 px-4 max-w-screen-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 border-border uppercase tracking-widest font-bold text-[10px]">
            DevLens AI 2.0 is now available
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter max-w-5xl mx-auto mb-6 leading-[1.05]">
            Code Reviews on <span className="text-primary">Autopilot</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your codebase with AI-powered static analysis, automated PR reviews, and actionable insights. Ship faster without compromising quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base w-full sm:w-auto rounded-full font-bold">
              Start Building for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base w-full sm:w-auto rounded-full font-bold">
              <Terminal className="mr-2 h-4 w-4" />
              Sign in with GitHub
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required. Free forever for open source.</p>
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 2. Trusted Stats
// ---------------------------------------------------------
function TrustedStatsSection() {
  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl text-center">
        <p className="text-xs font-bold text-muted-foreground mb-8 uppercase tracking-widest">Trusted by innovative engineering teams worldwide</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Dummy logos using text for now */}
          {['ACME Corp', 'Globex', 'Soylent', 'Initech', 'Massive Dynamic'].map((company) => (
            <div key={company} className="text-xl font-bold font-mono tracking-tighter text-foreground flex items-center">
              <Zap className="h-5 w-5 mr-1" />
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 3. Features Grid
// ---------------------------------------------------------
const features = [
  {
    title: "Deep Static Analysis",
    description: "Detect bugs, vulnerabilities, and code smells before they hit production with our advanced AST analysis engine.",
    icon: Search,
  },
  {
    title: "Automated PR Reviews",
    description: "Connect your GitHub repository and let DevLens AI automatically review every pull request within seconds.",
    icon: Zap,
  },
  {
    title: "Security Scanning",
    description: "Identify potential security vulnerabilities and secrets exposed in your codebase with enterprise-grade scanning.",
    icon: Shield,
  },
  {
    title: "Performance Metrics",
    description: "Track code complexity, test coverage, and duplication over time with comprehensive dashboard charts.",
    icon: BarChart3,
  }
]

function FeaturesGridSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to ship quality code</h2>
          <p className="text-lg text-muted-foreground">A complete suite of tools designed to help engineering teams maintain high standards without slowing down.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full bg-card border-2 border-border shadow-none hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 4. How It Works
// ---------------------------------------------------------
function HowItWorksSection() {
  const steps = [
    { title: "Connect Repository", desc: "Link your GitHub or GitLab account in one click." },
    { title: "Configure Rules", desc: "Customize analysis rules or use our recommended defaults." },
    { title: "Get Insights", desc: "Receive instant feedback on every commit and pull request." }
  ]
  return (
    <section id="how-it-works" className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Seamless integration into your workflow</h2>
              <p className="text-lg text-muted-foreground">DevLens AI sits quietly in the background, analyzing code as you write it, and reporting issues exactly where you need them.</p>
            </div>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{step.title}</h4>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border-2 border-border bg-card p-6 shadow-none">
              {/* Mock Terminal/Integration UI */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground font-mono ml-2">github-actions / devlens-check</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-muted-foreground">$ devlens analyze ./src</p>
                <p className="text-primary">Scanning 142 files...</p>
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Syntax check passed</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-500">
                  <span className="w-4 h-4 text-center">!</span>
                  <span>Found 2 complexity warnings in App.tsx</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Security scan passed (0 vulnerabilities)</span>
                </div>
                <p className="mt-4 pt-4 border-t text-muted-foreground">Analysis complete in 1.2s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 5. & 6. AI Analysis & Dashboard Previews
// ---------------------------------------------------------
function PreviewsSection() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-screen-xl text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Enterprise-grade Dashboard</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get a bird's-eye view of your codebase health, track metrics over time, and drill down into specific issues.</p>
      </div>
      
      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-border bg-card shadow-none overflow-hidden"
        >
          {/* Mock Dashboard UI */}
          <div className="flex flex-col h-[500px]">
            <div className="h-12 border-b flex items-center px-4 gap-4 bg-muted/40">
              <div className="w-48 h-6 bg-muted rounded-md hidden md:block animate-pulse" />
              <div className="flex-1" />
              <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
            </div>
            <div className="flex flex-1 overflow-hidden">
              <div className="w-64 border-r p-4 hidden lg:flex flex-col gap-2">
                {[1,2,3,4].map(i => <div key={i} className="h-8 bg-muted rounded-md w-full animate-pulse opacity-50" />)}
              </div>
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-24 rounded-lg border bg-background p-4 flex flex-col justify-between">
                      <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                      <div className="h-8 w-16 bg-primary/20 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
                <div className="h-64 rounded-lg border bg-background p-4 flex items-center justify-center">
                  {/* Mock Chart Area */}
                  <div className="text-muted-foreground flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Interactive Analysis Charts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 7. Why DevLens AI
// ---------------------------------------------------------
function WhyDevLensSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why engineering leaders choose DevLens AI</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              We built DevLens AI because traditional static analysis tools are too noisy, too slow, and require too much configuration. Our AI-driven approach understands context, reducing false positives by up to 80%.
            </p>
            <ul className="space-y-4">
              {['Zero-configuration setup', 'Context-aware AI analysis', 'Real-time feedback in IDEs', 'Enterprise-grade security'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Time Saved', val: '40%' },
              { label: 'False Positives', val: '-80%' },
              { label: 'Code Quality', val: '+2.5x' },
              { label: 'Review Speed', val: '5x' },
            ].map((stat, i) => (
              <div key={i} className="bg-primary-foreground/10 p-8 rounded-3xl border border-primary-foreground/20">
                <div className="text-5xl font-black tracking-tighter mb-2">{stat.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 8. Pricing
// ---------------------------------------------------------
function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">Start for free, upgrade when you need enterprise features.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="flex flex-col border-2 border-border shadow-none rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl font-black tracking-tight">Community</CardTitle>
              <CardDescription className="font-medium text-base">Perfect for open source projects and small teams.</CardDescription>
              <div className="mt-4">
                <span className="text-6xl font-black tracking-tighter">$0</span>
                <span className="text-muted-foreground font-medium">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 flex-1 mb-8">
                {['Public repositories only', 'Standard AI analysis', 'Basic dashboard', 'Community support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardContent>
          </Card>
          
          {/* Pro Plan */}
          <Card className="flex flex-col border-2 border-primary relative shadow-none rounded-3xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground uppercase tracking-widest text-[10px] font-bold px-4 py-1">Most Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-3xl font-black tracking-tight">Pro</CardTitle>
              <CardDescription className="font-medium text-base">For professional developers and growing teams.</CardDescription>
              <div className="mt-4">
                <span className="text-6xl font-black tracking-tighter">$29</span>
                <span className="text-muted-foreground font-medium">/user/mo</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 flex-1 mb-8">
                {['Unlimited private repositories', 'Advanced context-aware AI', 'Detailed metrics & reporting', 'Priority email support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Start 14-day Free Trial</Button>
            </CardContent>
          </Card>
          
          {/* Enterprise Plan */}
          <Card className="flex flex-col md:col-span-2 lg:col-span-1 border-2 border-border shadow-none rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl font-black tracking-tight">Enterprise</CardTitle>
              <CardDescription className="font-medium text-base">Custom solutions for large engineering organizations.</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-black tracking-tighter">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 flex-1 mb-8">
                {['Self-hosted deployment options', 'Custom analysis rules', 'SSO / SAML integration', 'Dedicated success manager'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 9. FAQ
// ---------------------------------------------------------
function FaqSection() {
  const faqs = [
    { q: "How is DevLens AI different from ESLint or SonarQube?", a: "While traditional linters rely on static rule-matching, DevLens AI uses large language models to understand the context of your code. It catches logical errors and anti-patterns that standard linters miss, while producing significantly fewer false positives." },
    { q: "Do you store our source code?", a: "No. For cloud plans, code is processed in-memory during analysis and immediately discarded. We do not use your proprietary code to train our base models. Enterprise plans offer self-hosted options where code never leaves your VPC." },
    { q: "Which languages do you support?", a: "DevLens AI currently supports JavaScript, TypeScript, Python, Go, Rust, Java, and C++. We are continuously adding support for new languages based on community feedback." },
    { q: "Can I use DevLens AI on my personal open-source projects?", a: "Yes! DevLens AI is completely free for public open-source repositories forever." }
  ]
  
  return (
    <section id="faq" className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4 max-w-screen-md">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

// ---------------------------------------------------------
// 10. CTA
// ---------------------------------------------------------
function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-background text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Ready to write better code?</h2>
        <p className="text-xl text-muted-foreground mb-10 font-medium">Join thousands of developers who are shipping high-quality code faster with DevLens AI.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full font-bold">
            Start Building for Free
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full font-bold">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  )
}
