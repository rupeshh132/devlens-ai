import { useEffect, useState, useRef } from "react"
import { motion, type Variants, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Code2, Zap, Search, BarChart3, CheckCircle2, Terminal, Lightbulb, Hexagon, Globe, Box, Layers, Shield } from "lucide-react"

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

  return (
    <section className="relative overflow-hidden pt-8 pb-24 md:pt-10 md:pb-32 lg:pt-12 lg:pb-40 bg-brand-cream">
      <div className="container mx-auto relative z-10 px-4 max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left lg:col-span-6 pr-0 lg:pr-8"
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl font-serif text-brand-navy mb-6 leading-[1.1] tracking-tight"
            >
              Master Your Career on Autopilot
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-brand-navy/70 max-w-xl mb-10 leading-relaxed font-normal"
            >
              Our AI-powered platform accelerates your professional growth, analyzing your skills and optimizing your resume for top opportunities.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Button size="lg" className="h-12 px-8 text-xs rounded-full font-bold bg-brand-coral hover:bg-brand-coral/90 text-white shadow-none transition-all w-full sm:w-auto uppercase tracking-widest">
                Start Building for Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 text-xs rounded-full font-bold border-brand-navy/20 shadow-none bg-transparent hover:bg-black/5 text-brand-navy transition-all w-full sm:w-auto uppercase tracking-widest"
                onClick={() => {
                  const backendBase = (import.meta.env.VITE_API_URL || 
                    'http://localhost:8080/api/v1')
                    .replace('/api/v1', '');
                  
                  window.location.href = 
                    `${backendBase}/oauth2/authorization/github`;
                }}
              >
                <Terminal className="mr-2 h-4 w-4" />
                Sign in with GitHub
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Lifestyle Image + Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:col-span-6 mt-8 lg:mt-0 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px]">
              {/* Lifestyle Image Background */}
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
                  alt="Team collaborating" 
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating Profile Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-12 left-4 right-4 sm:left-12 sm:right-12 bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-black/[0.04]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-serif text-3xl text-brand-navy mb-1">Sarah Chen</h3>
                    <p className="text-sm font-medium text-brand-navy/60">Senior Frontend Engineer</p>
                  </div>
                  <div className="bg-muted px-3 py-1.5 rounded-full text-xs font-bold text-brand-navy/70 tracking-widest uppercase">
                    92% Ready
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-brand-navy/70 uppercase tracking-wider">React Architecture</span>
                      <span className="text-brand-navy font-mono">95/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-brand-cream rounded-full overflow-hidden">
                      <div className="h-full bg-brand-coral rounded-full w-[95%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-brand-navy/70 uppercase tracking-wider">System Design</span>
                      <span className="text-brand-navy font-mono">78/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-brand-cream rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500/80 rounded-full w-[78%]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-brand-cream p-4 rounded-2xl flex gap-3 items-start border border-black/[0.03]">
                  <Lightbulb className="h-5 w-5 text-brand-coral flex-shrink-0 mt-0.5" />
                  <p className="text-[13px] font-medium text-brand-navy/70 leading-relaxed">
                    <strong className="text-brand-navy">AI Insight:</strong> You're highly proficient in React. Focus on improving your <span className="text-brand-coral">System Design</span> scores to unlock Staff-level roles.
                  </p>
                </div>
              </motion.div>
            </div>
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
  const companies = [
    { name: 'ACME Corp', icon: Hexagon },
    { name: 'Globex', icon: Globe },
    { name: 'Soylent', icon: Box },
    { name: 'Initech', icon: Layers },
    { name: 'Massive Dynamic', icon: Shield },
    { name: 'Cyberdyne', icon: Terminal },
    { name: 'Tyrell Corp', icon: Search },
    { name: 'Oscorp', icon: Code2 },
    { name: 'Stark Ind.', icon: Zap },
    { name: 'Wayne Ent.', icon: BarChart3 },
  ];

  // Duplicate the list so the marquee scrolls seamlessly
  const marqueeItems = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-12 border-y border-border bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-screen-xl text-center mb-8">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Trusted by innovative engineering teams worldwide</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {marqueeItems.map((company, idx) => (
            <div key={`${company.name}-${idx}`} className="mx-8 md:mx-16 text-xl font-bold font-mono tracking-tighter text-foreground flex items-center">
              <company.icon className="h-6 w-6 mr-2 text-brand-navy" />
              {company.name}
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
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mock Interviews",
    description: "Practice with our AI interviewer. Get real-time feedback on your answers and perfect your delivery.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Skill Gap Dashboard",
    description: "Compare your current skills against industry standards for your target roles to see exactly what you need to learn.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Dynamic Roadmaps",
    description: "Generate a personalized step-by-step learning journey based on your skill gaps, complete with resources.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80"
  }
]

function FeaturesGridSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy tracking-tight mb-4">Everything you need to land the job</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">A complete suite of AI tools designed to help you prepare, practice, and succeed in your tech career.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex"
            >
              <Card className="h-full w-full bg-card border-2 border-border shadow-none hover:border-brand-coral/50 transition-colors overflow-hidden group flex flex-col rounded-3xl">
                <div className="w-full h-48 sm:h-40 md:h-48 overflow-hidden border-b border-border">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <CardHeader className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-brand-coral/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-brand-coral" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-brand-navy tracking-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-serif text-brand-navy tracking-tight mb-4">A streamlined path to success</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">DevLens AI takes the guesswork out of interview prep. We analyze where you are, tell you where you need to go, and help you practice until you are ready.</p>
            </div>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-brand-navy">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
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
        <h2 className="text-3xl md:text-4xl font-serif text-brand-navy tracking-tight mb-4">Comprehensive Insights</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">Get a bird's-eye view of your career readiness, track your interview scores over time, and drill down into specific skill gaps.</p>
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
                  <h3 className="text-2xl font-serif text-brand-navy tracking-tight">Skill Gap Analysis</h3>
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
function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2 }: { value: number, prefix?: string, suffix?: string, duration?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        setDisplayValue(Math.floor(easeOut * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

function WhyDevLensSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">Why engineering leaders choose DevLens AI</h2>
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
              { label: 'Interview Confidence', prefix: '+', num: 80, suffix: '%' },
              { label: 'Resume ATS Score', prefix: '', num: 95, suffix: '+' },
              { label: 'Prep Time Saved', prefix: '', num: 20, suffix: 'hrs' },
              { label: 'Job Offers', prefix: '', num: 3, suffix: 'x' },
            ].map((stat, i) => (
              <div key={i} className="bg-primary-foreground/10 p-8 rounded-3xl border border-primary-foreground/20">
                <div className="text-5xl font-black tracking-tighter mb-2">
                  <AnimatedCounter value={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
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
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Start for free, upgrade when you need enterprise features.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="flex flex-col border-2 border-border shadow-none rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-brand-navy tracking-tight">Community</CardTitle>
              <CardDescription className="font-medium text-base leading-relaxed">Perfect for open source projects and small teams.</CardDescription>
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
              <CardTitle className="text-3xl font-serif text-brand-navy tracking-tight">Pro</CardTitle>
              <CardDescription className="font-medium text-base leading-relaxed">For professional developers and growing teams.</CardDescription>
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
              <CardTitle className="text-3xl font-serif text-brand-navy tracking-tight">Enterprise</CardTitle>
              <CardDescription className="font-medium text-base leading-relaxed">Custom solutions for large engineering organizations.</CardDescription>
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
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy tracking-tight mb-4">Frequently Asked Questions</h2>
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
        <h2 className="text-5xl md:text-6xl font-serif text-brand-navy tracking-tight mb-6">Ready to land your dream job?</h2>
        <p className="text-xl text-muted-foreground mb-10 font-normal leading-relaxed">Join thousands of developers who are accelerating their careers with DevLens AI.</p>
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
