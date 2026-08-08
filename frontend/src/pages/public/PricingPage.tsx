import { PublicLayout } from "@/layouts/PublicLayout"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function PricingPage() {
  return (
    <PublicLayout>
      <div className="bg-brand-cream py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-navy tracking-tight mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-brand-navy/70 leading-relaxed font-normal">
              Invest in your career. Choose the plan that fits your goals, whether you're just starting out or ready to land a senior role.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Basic</h3>
                <p className="text-brand-navy/70 text-sm h-10">Essential tools to evaluate your current standing.</p>
                <div className="mt-6 flex items-baseline text-brand-navy">
                  <span className="text-4xl font-black tracking-tight">$0</span>
                  <span className="text-muted-foreground ml-1 font-medium">/forever</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>1 Resume Analysis per month</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Basic GitHub repository sync</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Static Skill Gap Report</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground/50">
                  <X className="w-5 h-5 shrink-0" />
                  <span>AI Mock Interviews</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground/50">
                  <X className="w-5 h-5 shrink-0" />
                  <span>Dynamic Learning Roadmaps</span>
                </li>
              </ul>
              <Link to="/register">
                <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-brand-navy/20 hover:bg-brand-navy/5 text-brand-navy">
                  Get Started for Free
                </Button>
              </Link>
            </div>

            {/* Pro Tier (Highlighted) */}
            <div className="bg-brand-navy text-white rounded-3xl p-8 border border-brand-navy shadow-xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-coral text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Pro Developer</h3>
                <p className="text-white/70 text-sm h-10">Everything you need to rapidly upskill and ace interviews.</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-black tracking-tight">$19</span>
                  <span className="text-white/60 ml-1 font-medium">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="w-5 h-5 text-brand-coral shrink-0" />
                  <span>Unlimited Resume Analysis</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="w-5 h-5 text-brand-coral shrink-0" />
                  <span>Deep GitHub architecture analysis</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="w-5 h-5 text-brand-coral shrink-0" />
                  <span>10 AI Mock Interviews per month</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="w-5 h-5 text-brand-coral shrink-0" />
                  <span>Personalized Learning Roadmaps</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="w-5 h-5 text-brand-coral shrink-0" />
                  <span>Priority email support</span>
                </li>
              </ul>
              <Link to="/register">
                <Button className="w-full h-12 rounded-xl font-bold bg-brand-coral hover:bg-brand-coral/90 text-white shadow-none">
                  Start 7-Day Free Trial
                </Button>
              </Link>
            </div>

            {/* Team Tier */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Teams</h3>
                <p className="text-brand-navy/70 text-sm h-10">Upskill your entire engineering team and track progress.</p>
                <div className="mt-6 flex items-baseline text-brand-navy">
                  <span className="text-4xl font-black tracking-tight">$49</span>
                  <span className="text-muted-foreground ml-1 font-medium">/user/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Team Analytics Dashboard</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Unlimited Mock Interviews</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Custom roadmap templates</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Link to="/register">
                <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-brand-navy/20 hover:bg-brand-navy/5 text-brand-navy">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
