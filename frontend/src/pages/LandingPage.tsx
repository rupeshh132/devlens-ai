
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Terminal, MessageSquare, GraduationCap, Award, Trophy, Briefcase, ArrowRight, Star, Flame } from "lucide-react"
import { Link } from "react-router-dom"

import { PublicLayout } from "@/layouts/PublicLayout"

export function LandingPage() {
  return (
    <PublicLayout>
      <HeroSection />
      <TrustedStatsSection />
      <InternshipBannerSection />
      <FeaturesGridSection />
      <AcademyHighlightSection />
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-brand-cream">
      <div className="container mx-auto relative z-10 px-4 max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left lg:col-span-6 pr-0 lg:pr-8"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <Badge className="bg-brand-coral/10 text-brand-coral border-none uppercase tracking-widest px-4 py-1.5 font-bold">New: PrepLens Academy LMS</Badge>
            </motion.div>
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-navy mb-6 leading-[1.1] tracking-tight"
            >
              Analyze. Learn. Graduate.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-brand-navy/70 max-w-xl mb-10 leading-relaxed font-normal"
            >
              The ultimate AI platform for developers. Analyze your GitHub repos, find skill gaps, practice interviews, and master new skills through our premium Academy.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Button
                size="lg"
                className="h-14 px-8 text-sm rounded-full font-bold bg-brand-navy hover:bg-black text-white shadow-none transition-all w-full sm:w-auto uppercase tracking-widest"
                onClick={() => {
                  if (!import.meta.env.VITE_API_URL) throw new Error("VITE_API_URL is missing!");
                  const backendBase = import.meta.env.VITE_API_URL.replace('/api/v1', '');
                  window.location.href = `${backendBase}/oauth2/authorization/github`;
                }}
              >
                <Terminal className="mr-2 h-5 w-5" />
                Sign in with GitHub
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-sm rounded-full font-bold border-brand-navy/20 bg-transparent text-brand-navy w-full sm:w-auto uppercase tracking-widest">
                Explore Academy
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:col-span-6 mt-8 lg:mt-0 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px]">
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-brand-navy to-black border-4 border-white">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <GraduationCap className="h-24 w-24 text-brand-coral mb-6" />
                  <h2 className="text-4xl font-serif text-white mb-4 tracking-tight">PrepLens Academy</h2>
                  <p className="text-white/70 text-lg">Your personalized journey from junior to senior engineer.</p>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-12 left-4 right-4 sm:left-12 sm:right-12 bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-black/[0.04]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-serif text-2xl text-brand-navy mb-1">Advanced React</h3>
                    <p className="text-sm font-medium text-brand-navy/60">Module 4: Performance Hooks</p>
                  </div>
                  <div className="bg-brand-coral/10 text-brand-coral px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1">
                    <Trophy className="h-3 w-3" /> +100 PTS
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-brand-navy/70 uppercase tracking-wider">Course Progress</span>
                    <span className="text-brand-navy font-mono">75%</span>
                  </div>
                  <div className="h-2 w-full bg-brand-cream rounded-full overflow-hidden">
                    <div className="h-full bg-brand-coral rounded-full w-[75%]"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TrustedStatsSection() {
  const companies = [{ name: 'Amazon' }, { name: 'Google' }, { name: 'Meta' }, { name: 'Netflix' }, { name: 'Microsoft' }];
  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl text-center mb-8">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Our students work at top tech companies</p>
      </div>
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, idx) => (
            <div key={idx} className="text-2xl font-bold font-serif tracking-tighter text-foreground">
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesGridSection() {
  const features = [
    {
      title: "GitHub Repo AI",
      description: "Connect your GitHub and let our AI analyze your code structure, security flaws, and suggest architecture improvements.",
      icon: Terminal,
    },
    {
      title: "AI Mock Interviews",
      description: "Practice technical and behavioral interviews with a lifelike AI that grades your responses in real-time.",
      icon: MessageSquare,
    },
    {
      title: "PrepLens Academy",
      description: "Enroll in premium, interactive courses tailored to close your specific skill gaps. Project-based learning.",
      icon: GraduationCap,
    },
    {
      title: "Verified Certificates",
      description: "Complete courses and get your projects reviewed by human admins to earn verifiable certificates for your LinkedIn.",
      icon: Award,
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy tracking-tight mb-4">A complete ecosystem for developers</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">From analyzing your first commit to handing you your graduation certificate, we are with you every step of the way.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="flex">
              <Card className="h-full w-full bg-card border-2 border-border shadow-none hover:border-brand-coral/50 transition-colors group flex flex-col rounded-3xl p-2">
                <CardHeader className="pt-6">
                  <div className="h-12 w-12 rounded-xl bg-brand-cream flex items-center justify-center mb-4 group-hover:bg-brand-coral/10 transition-colors">
                    <feature.icon className="h-6 w-6 text-brand-navy group-hover:text-brand-coral transition-colors" />
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

function AcademyHighlightSection() {
  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <Badge className="bg-brand-coral/20 text-brand-coral hover:bg-brand-coral/30 border-none uppercase tracking-widest px-4 py-1.5 font-bold">Gamified Learning</Badge>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">Learn. Code. Earn.</h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              PrepLens Academy isn't just about watching videos. You will submit real GitHub repositories for your final projects, get human reviews, earn leaderboard points, and unlock stunning digital certificates.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Focus Mode blocks distractions while learning",
                "Earn +100 points for every approved project",
                "Climb the global developer leaderboard",
                "Secure payments via Razorpay integration"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-coral" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-brand-coral/20 blur-[100px] rounded-full"></div>
              {/* Abstract Certificate/Trophy representation */}
              <div className="relative h-full w-full bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm p-12">
                <div className="h-full w-full rounded-full border border-brand-coral/30 border-dashed flex flex-col items-center justify-center animate-[spin_60s_linear_infinite]">
                  <Trophy className="h-32 w-32 text-yellow-500 animate-[spin_60s_linear_infinite_reverse]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy tracking-tight mb-4">Invest in your career</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Start analyzing code for free, unlock premium courses when you're ready to level up.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="flex flex-col border-2 border-border shadow-none rounded-3xl p-4">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-brand-navy tracking-tight">Basic Learner</CardTitle>
              <CardDescription className="font-medium text-base leading-relaxed">Perfect for discovering your skill gaps.</CardDescription>
              <div className="mt-4">
                <span className="text-6xl font-black tracking-tighter">Free</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-4 flex-1 mb-8 mt-4">
                {['Basic GitHub Repo Analysis', 'Resume & Skill Gap Scanning', 'Limited AI Mock Interviews', 'Access to Free Academy Courses'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full h-12 rounded-full font-bold uppercase tracking-widest text-xs" variant="outline">Start Free</Button>
            </CardContent>
          </Card>
          
          {/* Premium Plan */}
          <Card className="flex flex-col border-2 border-brand-coral relative shadow-[0_20px_40px_-15px_rgba(255,107,107,0.2)] rounded-3xl p-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-brand-coral text-white uppercase tracking-widest text-[10px] font-bold px-4 py-1 border-none">Most Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-brand-navy tracking-tight">Academy Pro</CardTitle>
              <CardDescription className="font-medium text-base leading-relaxed">For developers serious about landing senior roles.</CardDescription>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-6xl font-black tracking-tighter text-brand-coral">Pay</span>
                <span className="text-muted-foreground font-medium pb-2">per course</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-4 flex-1 mb-8 mt-4">
                {['Unlock Premium Academy Courses', 'Human Review on Final Projects', 'Verifiable Digital Certificates', 'Ad-Free Focus Mode Player'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-brand-coral shrink-0" />
                    <span className="text-brand-navy font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full h-12 rounded-full font-bold uppercase tracking-widest text-xs bg-brand-coral hover:bg-brand-coral/90 text-white">Browse Courses</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    { q: "How does PrepLens Academy work?", a: "You can browse free and premium courses in our library. Premium courses are unlocked via secure Razorpay checkout. Once enrolled, you watch videos in Focus Mode and submit a GitHub repository as your final project for admin review." },
    { q: "Are the certificates verified?", a: "Yes! Every certificate has a unique ID and is issued only after a human admin approves your final project submission." },
    { q: "Do you store our source code for analysis?", a: "No. For repo analysis, code is processed in-memory and immediately discarded. We do not use your proprietary code to train models." },
    { q: "What happens if my project is rejected?", a: "If an admin rejects your final project, they will provide a reason. You can fix your code and resubmit the repository link as many times as needed." }
  ]
  
  return (
    <section id="faq" className="py-24 bg-muted/30 border-y">
      <div className="container mx-auto px-4 max-w-screen-md">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy tracking-tight mb-4">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b-border">
              <AccordionTrigger className="text-left text-lg font-serif text-brand-navy hover:text-brand-coral">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2 pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-serif text-brand-navy tracking-tight mb-6">Start your journey today.</h2>
        <p className="text-xl text-brand-navy/70 mb-10 font-normal leading-relaxed">Join thousands of developers using PrepLens to accelerate their careers and master new skills.</p>
        <div className="flex justify-center">
          <Button size="lg" className="h-14 px-12 text-sm rounded-full font-bold bg-brand-coral hover:bg-brand-coral/90 text-white uppercase tracking-widest">
            Create Free Account
          </Button>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// INTERNSHIP BANNER SECTION — Main selling section
// ═══════════════════════════════════════════════════════════
function InternshipBannerSection() {
  const steps = [
    { step: "01", icon: Briefcase, title: "Pay Once", desc: "₹999 one-time mentorship fee via Razorpay. Secure & instant." },
    { step: "02", icon: Terminal, title: "Build Your Project", desc: "Follow the brief, code your project, push to GitHub." },
    { step: "03", icon: CheckCircle2, title: "Admin Reviews", desc: "Our team reviews your submission and approves within 48 hrs." },
    { step: "04", icon: Award, title: "Get Certified", desc: "Receive your official Virtual Internship Certificate. Share on LinkedIn." },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background noise/grid */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <Flame className="w-3.5 h-3.5" />
            Limited Seats · Cohort 1 · Now Open
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight mb-5">
            Earn a Real<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #818cf8)' }}>
              Internship Certificate
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Not just a course. A complete <strong className="text-white/90">Virtual Internship Program</strong> — build a real project, get it reviewed by a human, and walk away with a certificate you can proudly share on LinkedIn.
          </p>
        </motion.div>

        {/* 4-Step Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black px-3 py-0.5 rounded-full tracking-widest">
                {s.step}
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-blue-400/50" />
                </div>
              )}
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4 mt-3 group-hover:bg-blue-600/30 transition-all">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-2 text-sm tracking-wide uppercase">{s.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-10 text-center shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Certificate Included · One-Time Fee
          </div>

          <div className="mb-2">
            <span className="text-5xl font-black text-gray-900">₹999</span>
            <span className="text-gray-400 text-sm ml-2 line-through">₹2,499</span>
          </div>
          <p className="text-xs text-gray-400 mb-6 tracking-wider uppercase">Mentorship Fee — Pay Once, Learn Forever</p>

          <ul className="text-sm text-gray-600 space-y-2 mb-8 text-left max-w-sm mx-auto">
            {[
              "Access to full Internship curriculum",
              "1 GitHub project submission + human review",
              "Official Virtual Internship Certificate",
              "Certificate Verification ID (LinkedIn ready)",
              "Leaderboard points + PrepLens profile badge",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <Link to="/courses">
            <Button size="lg" className="w-full h-13 text-base font-bold rounded-2xl bg-blue-700 hover:bg-blue-800 text-white shadow-none uppercase tracking-widest">
              Enroll Now — ₹999 Only
            </Button>
          </Link>

          <p className="text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            Secure payment via Razorpay · 100% refund if not approved within 7 days
          </p>
        </motion.div>

      </div>
    </section>
  )
}
