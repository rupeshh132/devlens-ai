import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Crown, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DevPricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </button>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white shadow-sm">
                <Crown className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                PrepLens <span className="text-blue-600">Dev Pro</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-amber-600" /> Power Tools for Software Engineers
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Supercharge Your Engineering Career
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Automate codebase security audits, tailor ATS resumes for any job description, and master technical mock interviews.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-slate-200/70 p-1 rounded-xl border border-slate-300">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${
                billing === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${
                billing === 'yearly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly Billing
              <span className="bg-emerald-600 text-white text-xs px-2.5 py-0.5 rounded-full font-extrabold">
                Save 33%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Tier Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Free Tier</span>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">Developer Free</h3>
              <p className="text-slate-500 text-sm mt-2">Essential tools for students & exploring dev tools.</p>
              <div className="mt-6 mb-8">
                <span className="text-5xl font-extrabold text-slate-900">₹0</span>
                <span className="text-slate-500 text-sm"> / forever</span>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> 1 Repository Scan (Max 3 files)</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> 1 Basic ATS Resume Review</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> 1 Skill Gap & Roadmap Report</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0" /> 1 AI Mock Interview Session</li>
                <li className="flex items-center gap-3 text-slate-400 line-through">AI Job Description Resume Tailoring</li>
                <li className="flex items-center gap-3 text-slate-400 line-through">Deep Code Security Audit</li>
              </ul>
            </div>

            <Button
              onClick={() => navigate('/dashboard')}
              variant="outline"
              className="w-full mt-8 py-6 rounded-xl font-bold text-slate-700 border-slate-300 hover:bg-slate-50"
            >
              Continue Free
            </Button>
          </div>

          {/* Dev Pro Card */}
          <div className="relative bg-white border-2 border-blue-600 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-blue-100">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              👑 RECOMMENDED FOR ENGINEERS
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pro Tier</span>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">Dev Pro</h3>
              <p className="text-slate-600 text-sm mt-2">Unlimited access to full developer suite & AI tools.</p>
              <div className="mt-6 mb-8">
                <span className="text-5xl font-extrabold text-slate-900">
                  ₹{billing === 'yearly' ? '3,999' : '499'}
                </span>
                <span className="text-slate-500 text-sm">
                  {billing === 'yearly' ? ' / year' : ' / month'}
                </span>
                {billing === 'yearly' && (
                  <p className="text-xs text-emerald-600 font-bold mt-1">
                    ≈ ₹333/month · Billed once annually
                  </p>
                )}
              </div>

              <ul className="space-y-3.5 text-sm text-slate-800 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-600 flex-shrink-0 font-bold" /> <strong>Unlimited</strong> Repository Code Scans</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-600 flex-shrink-0 font-bold" /> <strong>Deep AI Code Security</strong> & Bug Audits</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-600 flex-shrink-0 font-bold" /> <strong>AI Resume Tailoring</strong> for Any Job Description</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-600 flex-shrink-0 font-bold" /> <strong>Unlimited AI Technical Mock Interviews</strong></li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-600 flex-shrink-0 font-bold" /> <strong>Unlimited Skill Gap Reports</strong> & Project Ideas</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-600 flex-shrink-0 font-bold" /> Priority AI Queue (Fastest Generation)</li>
              </ul>
            </div>

            <Button
              onClick={() => navigate('/login')}
              className="w-full mt-8 py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-200 hover:scale-[1.01] transition-all"
            >
              🚀 Upgrade to Dev Pro Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
