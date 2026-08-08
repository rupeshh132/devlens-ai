
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Code2, Zap, Search, BarChart3, CheckCircle2, Terminal } from "lucide-react"

import { PublicLayout } from "@/layouts/PublicLayout"

export function LandingPage() {
  return (
    <PublicLayout>
      <HeroSection />
      <TrustedStatsSection />
      <FeaturesGridSection />
      <HowItWorksSection />
      <PreviewsSection />
      <WhyDevLensSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </PublicLayout>
  )
}

// ---------------------------------------------------------
// 1. Hero Section
// ---------------------------------------------------------
function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    },
  }

  const headline = "Master Your Career on Autopilot".split(" ")

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-[#FAFAFA]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="container mx-auto relative z-10 px-4 max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-brand-navy mb-6 leading-[1.05] flex flex-wrap gap-x-[0.3em] gap-y-2">
              {headline.map((word, idx) => (
                <motion.span key={idx} variants={itemVariants} className="inline-block relative">
                  <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                      delay: idx * 0.2 + 0.8, // start floating after initial fade-in
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </motion.span>
              ))}
            </h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-medium"
            >
              Our AI-powered platform accelerates your professional growth, analyzing your skills and optimizing your resume for top opportunities.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Button size="lg" className="h-14 px-8 text-base rounded-full font-bold bg-brand-coral hover:bg-brand-coral/90 text-white shadow-none transition-all w-full sm:w-auto">
                Start Building for Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base rounded-full font-bold border-border shadow-none bg-white hover:bg-muted/50 transition-all w-full sm:w-auto"
                onClick={() => {
                  const backendBase = (import.meta.env.VITE_API_URL || 
                    'http://localhost:8080/api/v1')
                    .replace('/api/v1', '');
                  
                  window.location.href = 
                    `${backendBase}/oauth2/authorization/github`;
                }}
              >
                <Terminal className="mr-2 h-5 w-5" />
                Sign in with GitHub
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:pl-10"
          >
            {/* Clean UI Mockup instead of 3D Neon Image */}
            <div className="relative z-10 w-full max-w-[500px] mx-auto bg-white rounded-[2rem] shadow-xl border border-border/60 overflow-hidden ring-1 ring-black/5">
              {/* Window Header */}
              <div className="bg-[#FAFAFA] border-b border-border/60 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  devlens-ai / profile
                </div>
              </div>
              
              {/* Profile Card Mockup */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/40">
                  <div className="w-16 h-16 rounded-full bg-brand-coral/10 flex items-center justify-center text-brand-coral font-black text-xl">
                    SC
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-navy">Sarah Chen</h3>
                    <p className="text-sm font-medium text-muted-foreground">Senior Frontend Engineer</p>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 font-bold px-3 py-1 rounded-full">
                      92% Ready
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-brand-navy">React Architecture</span>
                    <span className="font-mono font-medium text-muted-foreground">95/100</span>
                  </div>
                  <div className="h-2 w-full bg-[#FAFAFA] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full w-[95%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm pt-2">
                    <span className="font-bold text-brand-navy">System Design</span>
                    <span className="font-mono font-medium text-muted-foreground">78/100</span>
                  </div>
                  <div className="h-2 w-full bg-[#FAFAFA] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[78%]"></div>
                  </div>
                </div>

                <div className="mt-8 bg-[#FAFAFA] p-4 rounded-xl border border-border/40 flex gap-3 items-start">
                  <Zap className="h-5 w-5 text-brand-coral flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                    <strong className="text-brand-navy">AI Insight:</strong> You're highly proficient in React. Focus on improving your <span className="text-brand-coral">System Design</span> scores to unlock Staff-level roles.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Soft background glow instead of harsh gradients */}
            <div className="absolute inset-0 bg-brand-coral/5 blur-3xl rounded-full transform scale-110 -z-10"></div>
          </motion.div>
        </div>
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
    title: "AI Resume Analysis",
    description: "Get instant, ATS-friendly feedback on your resume. Identify missing keywords and actionable improvements.",
    icon: Search,
  },
  {
    title: "Mock Interviews",
    description: "Practice with our AI interviewer. Get real-time feedback on your answers and perfect your delivery.",
    icon: Zap,
  },
  {
    title: "Skill Gap Dashboard",
    description: "Compare your current skills against industry standards for your target roles to see exactly what you need to learn.",
    icon: BarChart3,
  },
  {
    title: "Dynamic Roadmaps",
    description: "Generate a personalized step-by-step learning journey based on your skill gaps, complete with resources.",
    icon: Code2,
  }
]

function FeaturesGridSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to land the job</h2>
          <p className="text-lg text-muted-foreground">A complete suite of AI tools designed to help you prepare, practice, and succeed in your tech career.</p>
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
    { title: "Upload Profile", desc: "Upload your resume and enter your target tech role." },
    { title: "Identify Gaps", desc: "Our AI analyzes your skills and points out what you need to learn." },
    { title: "Practice & Improve", desc: "Follow your roadmap and practice with AI mock interviews." }
  ]
  return (
    <section id="how-it-works" className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">A streamlined path to success</h2>
              <p className="text-lg text-muted-foreground">DevLens AI takes the guesswork out of interview prep. We analyze where you are, tell you where you need to go, and help you practice until you are ready.</p>
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comprehensive Insights</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get a bird's-eye view of your career readiness, track your interview scores over time, and drill down into specific skill gaps.</p>
      </div>
      
      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-border/60 bg-white shadow-2xl overflow-hidden ring-1 ring-black/5 max-w-5xl mx-auto"
        >
          {/* Mock Dashboard UI */}
          <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
            {/* Sidebar (Hidden on very small screens, visible as scrollable row or normal sidebar) */}
            <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border/60 p-4 md:p-6 bg-[#FAFAFA]">
              <div className="hidden md:flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-coral/10 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-brand-coral" />
                </div>
                <span className="font-bold text-lg tracking-tight">DevLens AI</span>
              </div>
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
                {[
                  { icon: BarChart3, label: 'Overview', active: true },
                  { icon: Search, label: 'Skill Gaps' },
                  { icon: Code2, label: 'Roadmap' },
                  { icon: Terminal, label: 'Interviews' },
                ].map((item, i) => (
                  <div key={i} className={`flex-shrink-0 flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-default ${item.active ? 'bg-white shadow-sm text-brand-navy ring-1 ring-border/50' : 'text-muted-foreground hover:text-foreground hover:bg-white/50'}`}>
                    <item.icon className={`h-4 w-4 ${item.active ? 'text-brand-coral' : ''}`} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-5 md:p-8 overflow-y-auto bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-brand-navy">Skill Gap Analysis</h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">Target Role: Senior Frontend Engineer</p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 font-bold px-3 py-1 rounded-full shadow-sm">
                    85% Match
                  </Badge>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Technical Score', value: '92', max: '/100', trend: '+5%', color: 'text-brand-coral' },
                  { label: 'System Design', value: '78', max: '/100', trend: '+12%', color: 'text-blue-500' },
                  { label: 'Communication', value: '88', max: '/100', trend: '+2%', color: 'text-purple-500' },
                ].map((metric, i) => (
                  <div key={i} className="bg-[#FAFAFA] p-5 rounded-[1.25rem] border border-border/60 flex flex-col justify-between">
                    <span className="text-sm font-bold text-muted-foreground mb-3">{metric.label}</span>
                    <div className="flex items-baseline gap-2">
                      <div className="flex items-baseline">
                        <span className={`text-4xl font-black tracking-tighter ${metric.color}`}>{metric.value}</span>
                        <span className="text-base font-bold text-muted-foreground/50">{metric.max}</span>
                      </div>
                      <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skill Bars */}
              <div className="bg-white p-6 rounded-[1.25rem] border border-border/60">
                <h4 className="font-bold text-lg mb-6 text-brand-navy">Core Competencies</h4>
                <div className="space-y-6">
                  {[
                    { skill: 'React & Next.js Ecosystem', score: 95 },
                    { skill: 'TypeScript & Type Safety', score: 88 },
                    { skill: 'Web Performance & CWV', score: 72 },
                    { skill: 'System Architecture', score: 65 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2 font-bold">
                        <span className="text-brand-navy">{item.skill}</span>
                        <span className="text-muted-foreground">{item.score}%</span>
                      </div>
                      <div className="h-3 w-full bg-[#FAFAFA] rounded-full overflow-hidden inset-ring-1 inset-ring-black/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.score}%` }}
                          transition={{ duration: 1.2, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                          className={`h-full rounded-full ${item.score > 80 ? 'bg-green-500' : item.score > 70 ? 'bg-brand-coral' : 'bg-yellow-500'}`}
                        />
                      </div>
                    </div>
                  ))}
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
              We built DevLens AI because traditional interview prep is too fragmented. Our unified AI platform brings resume analysis, skill mapping, and mock interviews into one seamless experience.
            </p>
            <ul className="space-y-4">
              {['Zero-configuration setup', 'Context-aware AI feedback', 'Real-time interview practice', 'Personalized learning paths'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Interview Confidence', val: '+80%' },
              { label: 'Resume ATS Score', val: '95+' },
              { label: 'Prep Time Saved', val: '20hrs' },
              { label: 'Job Offers', val: '3x' },
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
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Ready to land your dream job?</h2>
        <p className="text-xl text-muted-foreground mb-10 font-medium">Join thousands of developers who are accelerating their careers with DevLens AI.</p>
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
