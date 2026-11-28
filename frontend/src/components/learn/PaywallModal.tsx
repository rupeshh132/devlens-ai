import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Crown, X, Trophy, Zap, BookOpen, Users, Shield } from 'lucide-react';
import { learnApi } from '../../lib/learn-api';
import { hasAuthToken } from '../../lib/lockerStorage';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: string;
  featureDescription: string;
}

const highlights = [
  { icon: Trophy, label: 'Monthly Topper Award: ₹2,100 Cash + Trophy' },
  { icon: Zap, label: 'Unlimited Mock Tests + AI Weakness Detector' },
  { icon: BookOpen, label: 'AI Self-Healing Master Roadmap' },
  { icon: Users, label: 'Referral Code for Leaderboard XP Boost' },
  { icon: Shield, label: '100% Distraction-Free Zone' },
];

export function PaywallModal({ isOpen, onClose, featureName, featureDescription }: PaywallModalProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && hasAuthToken()) {
      learnApi.post('/profile/paywall-hit').catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden z-10">
        {/* Header gradient */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 pt-8 pb-12 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border border-white/30">
            <Crown className="w-7 h-7 text-yellow-300" />
          </div>
          <h2 className="text-xl font-extrabold mb-1 text-white">Premium Feature</h2>
          <p className="text-blue-100 text-sm font-semibold">{featureName}</p>
        </div>

        {/* Content - overlapping the header */}
        <div className="relative -mt-6 bg-white rounded-t-3xl px-6 pt-5 pb-6">
          <p className="text-slate-600 text-sm text-center mb-5">{featureDescription}</p>

          {/* Highlights */}
          <ul className="space-y-2.5 mb-6">
            {highlights.map((h) => (
              <li key={h.label} className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-4 h-4 text-blue-600" />
                </div>
                {h.label}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => { onClose(); navigate('/learn/pricing'); }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-blue-200 hover:scale-[1.02] transition-all"
          >
            👑 Upgrade to Premium
          </button>
          <button
            onClick={onClose}
            className="w-full text-slate-400 text-sm mt-2 py-2 hover:text-slate-600 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
