import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Zap, BarChart3, GitMerge, Bot, ArrowRight, Code } from "lucide-react";

export function FeaturesPage() {
  const features = [
    {
      title: "AI Resume Analysis",
      description: "Our proprietary ATS-matching engine analyzes your resume against thousands of job descriptions. We don't just find missing keywords; we suggest contextual rephrasing to maximize your match score.",
      icon: Search,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Interactive Mock Interviews",
      description: "Practice technical and behavioral rounds with an AI interviewer tailored to your specific role. Get real-time feedback on your delivery, technical accuracy, and confidence markers.",
      icon: Bot,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Skill Gap Intelligence",
      description: "Visualize exactly what's standing between you and your dream role. We map your current skills against industry requirements and highlight the high-ROI topics you need to learn next.",
      icon: BarChart3,
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      title: "Dynamic Learning Roadmaps",
      description: "Stop guessing what to learn. DevLens AI generates step-by-step personalized roadmaps complete with curated resources, practical projects, and milestone checks based on your skill gaps.",
      icon: Zap,
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      title: "Automated Code Reviews",
      description: "Connect your GitHub repositories and get instant feedback on your code quality, architecture patterns, and potential bugs before you even open a PR. It's like having a senior engineer reviewing every commit.",
      icon: Code,
      color: "bg-brand-coral/10 text-brand-coral",
    },
    {
      title: "Continuous GitHub Sync",
      description: "Your dashboard stays up-to-date automatically as you push code. We analyze your active repositories to continuously update your skill profile and prove your expertise to employers.",
      icon: GitMerge,
      color: "bg-indigo-500/10 text-indigo-600",
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-coral/30">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-brand-coral" />
            <span className="font-black tracking-tight text-brand-navy">DevLens AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
            <Link to="/features" className="text-brand-navy">Features</Link>
            <Link to="/#how-it-works" className="transition-colors hover:text-brand-navy">How it Works</Link>
            <Link to="/#pricing" className="transition-colors hover:text-brand-navy">Pricing</Link>
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
      </header>

      <main className="pb-24 pt-16 md:pt-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-brand-coral/10 blur-[100px] -z-10 rounded-full" />
        
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-brand-navy mb-6">
              Everything You Need to <span className="text-brand-coral">Ship Yourself</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              DevLens AI is a unified platform combining deep code analysis, intelligent resume optimization, and dynamic interview prep. We turn your raw potential into an undeniable engineering profile.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-card border-2 border-border/50 hover:border-brand-navy/20 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-navy/5">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-brand-navy mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32 text-center"
          >
            <div className="bg-brand-navy text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Stop applying blindly.</h2>
                <p className="text-xl opacity-80 mb-10">Get the insights and tools you need to secure your next role with confidence.</p>
                <Link to="/register">
                  <Button size="lg" className="h-14 px-10 text-lg rounded-full font-bold bg-brand-coral hover:bg-brand-coral/90 text-white shadow-xl shadow-brand-coral/20">
                    Create Your Profile <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
