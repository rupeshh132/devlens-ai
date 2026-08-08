import { PublicLayout } from "@/layouts/PublicLayout"
import { CheckCircle2 } from "lucide-react"

export function HowItWorksPage() {
  const steps = [
    { 
      title: "1. Upload Your Profile & Connect", 
      desc: "Connect your GitHub account or upload your resume. Tell us your target role, and DevLens AI instantly understands your current skill level and career aspirations." 
    },
    { 
      title: "2. AI Skill Gap Analysis", 
      desc: "Our advanced engine compares your current profile against industry standards for your target role. We identify precisely what you know and what you're missing." 
    },
    { 
      title: "3. Personalized Learning Roadmap", 
      desc: "Stop guessing what to learn next. Get a step-by-step, actionable roadmap tailored to your specific gaps, complete with curated resources." 
    },
    { 
      title: "4. Practice with AI Mock Interviews", 
      desc: "Put your knowledge to the test. Participate in realistic technical and behavioral interviews with our AI, receiving immediate, constructive feedback." 
    },
    { 
      title: "5. Land the Job", 
      desc: "With optimized resumes, improved skills, and interview confidence, you're ready to secure your dream role faster than ever." 
    }
  ]

  return (
    <PublicLayout>
      <div className="bg-brand-cream py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight mb-6">
              How DevLens AI Works
            </h1>
            <p className="text-xl text-brand-navy/70 leading-relaxed font-normal">
              A streamlined, AI-powered path to accelerate your tech career. From analysis to job offer.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-brand-coral text-white font-black text-xl shadow-md shadow-brand-coral/20">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-brand-navy/70 leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-brand-coral/5 blur-3xl rounded-full" />
              <div className="relative rounded-[2rem] border border-black/[0.05] bg-white p-8 shadow-xl">
                <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-sm text-brand-navy/50 font-mono ml-2">terminal / devlens-ai</span>
                </div>
                <div className="font-mono text-sm sm:text-base space-y-4">
                  <p className="text-brand-navy/70">$ devlens analyze profile --target="Senior Frontend Engineer"</p>
                  <p className="text-brand-coral font-bold">Initializing AI engine...</p>
                  <p className="text-brand-navy/80">Scanning repositories: 14 found.</p>
                  <p className="text-brand-navy/80">Parsing resume data...</p>
                  
                  <div className="flex items-center gap-2 text-green-600 mt-4">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>React / Next.js skills verified (Advanced)</span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-600">
                    <span className="flex items-center justify-center w-5 h-5 bg-yellow-100 text-yellow-700 rounded-full font-bold text-xs">!</span>
                    <span>System Design experience gap detected</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>TypeScript proficiency verified</span>
                  </div>
                  
                  <p className="mt-6 pt-6 border-t border-border/50 text-brand-navy/50">
                    Analysis complete in 2.4s. Generating roadmap...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
