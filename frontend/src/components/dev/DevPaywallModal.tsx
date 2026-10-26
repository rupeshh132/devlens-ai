import { useNavigate } from 'react-router-dom';
import { Crown, X, Code2, FileCheck, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';

interface DevPaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: string;
  featureDescription: string;
}

const devHighlights = [
  { icon: Code2, label: 'Unlimited GitHub Repository & Codebase Scans' },
  { icon: FileCheck, label: 'AI Job-Specific Resume Tailoring (Match any JD)' },
  { icon: BrainCircuit, label: 'Unlimited AI Technical Mock Interviews + Scoring' },
  { icon: ShieldCheck, label: 'Deep AI Code Security & Vulnerability Audits' },
  { icon: Zap, label: 'Unlimited Skill Gap Reports & Custom Project Roadmaps' },
];

export function DevPaywallModal({ isOpen, onClose, featureName, featureDescription }: DevPaywallModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden border border-slate-200">
        {/* Header gradient */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 px-6 pt-8 pb-12 text-white text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border border-white/20">
            <Crown className="w-7 h-7 text-amber-400" />
          </div>
          <h2 className="text-xl font-extrabold mb-1">Dev Pro Feature</h2>
          <p className="text-indigo-200 text-sm font-semibold">{featureName}</p>
        </div>

        {/* Content */}
        <div className="relative -mt-6 bg-white rounded-t-3xl px-6 pt-5 pb-6">
          <p className="text-slate-600 text-sm text-center mb-5">{featureDescription}</p>

          {/* Highlights */}
          <ul className="space-y-2.5 mb-6">
            {devHighlights.map((h) => (
              <li key={h.label} className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-4 h-4 text-indigo-600" />
                </div>
                {h.label}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => { onClose(); navigate('/dev-pricing'); }}
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-indigo-200 hover:scale-[1.02] transition-all"
          >
            👑 Upgrade to Dev Pro (₹499/mo)
          </button>
          <button
            onClick={onClose}
            className="w-full text-slate-400 text-sm mt-2 py-2 hover:text-slate-600 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
