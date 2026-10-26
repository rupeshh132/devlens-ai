import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Trophy, Zap, BookOpen, Shield, Users, Crown, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { learnApi } from '@/lib/learn-api';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const plans = [
  {
    id: 'class9-10',
    label: 'Class 9 & 10',
    annualPrice: 999,
    tag: 'Boards Prep',
    validity: 'Valid till May 2027',
  },
  {
    id: 'class11-12',
    label: 'Class 11 & 12',
    annualPrice: 1299,
    tag: 'Senior Boards',
    validity: 'Valid till May 2027',
  },
  {
    id: 'competitive',
    label: 'JEE / NEET / SSC / UPSC',
    annualPrice: 1499,
    tag: 'Competitive & Govt',
    validity: 'Valid till June 2027',
  },
];

const matchPlanToGoal = (planId: string, goal: string | null | undefined): boolean => {
  if (!goal) return false;
  const g = goal.toLowerCase();
  if (planId === 'class9-10') {
    return g.includes('9') || g.includes('10');
  }
  if (planId === 'class11-12') {
    return g.includes('11') || g.includes('12');
  }
  if (planId === 'competitive') {
    return (
      g.includes('jee') ||
      g.includes('neet') ||
      g.includes('ssc') ||
      g.includes('upsc') ||
      g.includes('nda') ||
      g.includes('govt') ||
      g.includes('competitive')
    );
  }
  return false;
};

const formatGoalLabel = (goal: string | null | undefined): string => {
  if (!goal) return '';
  return goal.split('(')[0].split('/')[0].trim();
};

const features = [
  {
    icon: Trophy,
    title: 'Monthly Cash Awards & Trophies',
    desc: 'Top 3 monthly performers earn ₹2,100 (1st) + School/Home Trophy, ₹1,100 (2nd) & ₹500 (3rd).',
    color: 'text-amber-600',
    bg: 'bg-amber-50/80 border-amber-200/60',
  },
  {
    icon: Zap,
    title: 'AI "Self-Healing" Master Roadmap',
    desc: 'Fell sick? Missed days? One click and our AI auto-adjusts your entire study roadmap to fit remaining exam days.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50/80 border-indigo-200/60',
  },
  {
    icon: BookOpen,
    title: 'Unlimited Mock Tests + AI Weakness Detector',
    desc: 'Full access to all tests. After each test, get a personalized report showing weak topics costing you marks.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50/80 border-emerald-200/60',
  },
  {
    icon: Users,
    title: 'Earn XP via Referrals',
    desc: 'Get your unique Referral Code. Every friend you bring earns you +200 XP on the leaderboard automatically.',
    color: 'text-violet-600',
    bg: 'bg-violet-50/80 border-violet-200/60',
  },
  {
    icon: Shield,
    title: '100% Distraction-Free Zone',
    desc: 'Zero ads, zero Shorts, zero popups. PrepLens Learn is built for 100% dedicated learning focus.',
    color: 'text-slate-700',
    bg: 'bg-slate-100/80 border-slate-200/60',
  },
];

export function LearnPricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState('');
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [userExamGoal, setUserExamGoal] = useState<string | null>(() => {
    return localStorage.getItem('learn_exam_goal');
  });
  const [codeDetails, setCodeDetails] = useState<{
    valid: boolean;
    type: string;
    referrerName?: string;
    discountPercentage?: number;
    message: string;
  } | null>(null);
  const [isValidatingCode, setIsValidatingCode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      localStorage.getItem('preplens_access_token') ||
      localStorage.getItem('token') ||
      localStorage.getItem('learn_token') ||
      sessionStorage.getItem('token');

    if (token) {
      learnApi.get('/profile').then((res) => {
        if (res.data?.examGoal) {
          setUserExamGoal(res.data.examGoal);
          localStorage.setItem('learn_exam_goal', res.data.examGoal);
        }
      }).catch(() => {
        // Silently retain localStorage value
      });
    }
  }, []);

  const handleApplyCode = async () => {
    if (!referralCode.trim()) {
      toast.error('Please enter a referral or promo code');
      return;
    }
    setIsValidatingCode(true);
    try {
      const res = await learnApi.get(`/payments/validate-code?code=${encodeURIComponent(referralCode.trim())}`);
      if (res.data?.valid) {
        setAppliedCode(referralCode.trim().toUpperCase());
        setCodeDetails(res.data);
        toast.success(res.data.message || 'Code applied successfully!');
      } else {
        setCodeDetails(null);
        setAppliedCode(null);
        toast.error(res.data?.message || 'Invalid referral or promo code');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to validate code');
    } finally {
      setIsValidatingCode(false);
    }
  };

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlanCheckout = async (plan: (typeof plans)[0]) => {
    // Check authentication
    const token =
      localStorage.getItem('preplens_access_token') ||
      localStorage.getItem('token') ||
      localStorage.getItem('learn_token') ||
      sessionStorage.getItem('token');

    if (!token) {
      toast.info('Please log in to select your plan');
      navigate('/learn/login');
      return;
    }

    try {
      setLoadingPlan(plan.tag);
      const isLoaded = await loadRazorpayScript();

      if (!isLoaded) {
        toast.error('Failed to load Razorpay payment gateway. Check internet connection.');
        setLoadingPlan(null);
        return;
      }

      const price = plan.annualPrice;
      
      let orderId = '';
      let authoritativeAmount = price;
      try {
        const response = await learnApi.post('/payments/create-order', {
          planName: `${plan.tag} (${plan.label}) - Full Academic Pass`,
          billingCycle: 'yearly',
          amount: price,
          promoCode: appliedCode || '',
        });

        if (response.data && (response.data.orderId || response.data.id)) {
          orderId = response.data.orderId || response.data.id;
          if (response.data.amount) {
            authoritativeAmount = response.data.amount;
          }
        } else {
          throw new Error('Invalid response from server');
        }
      } catch (e: any) {
        console.error('Payment initialization failed:', e);
        toast.error(e.response?.data?.error || 'Payment initialization failed. Please try again.');
        setLoadingPlan(null);
        return; // Abort payment flow completely
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_dummy',
        amount: authoritativeAmount * 100,
        currency: 'INR',
        name: 'PrepLens Learn AI',
        description: `${plan.label} - ${plan.tag} (Full Academic Pass)`,
        order_id: orderId.startsWith('order_mock_') ? undefined : orderId,
        handler: async function (response: any) {
          try {
            const verifyRes = await learnApi.post('/payments/verify', {
              razorpay_order_id: response.razorpay_order_id || orderId,
              razorpay_payment_id: response.razorpay_payment_id || 'pay_mock_' + Date.now(),
              razorpay_signature: response.razorpay_signature || 'mock_signature',
            });

            if (verifyRes.status === 200) {
              localStorage.setItem('learn_subscription_plan', 'PRO');
              toast.success(`🎉 Payment Successful! ${plan.label} Premium Unlocked!`);
              navigate('/learn/syllabus');
            } else {
              toast.error('Payment verification failed from server.');
            }
          } catch (e) {
            toast.error('Network error during payment verification.');
          }
        },
        prefill: {
          name: localStorage.getItem('learn_user_name') || 'PrepLens Student',
          email: localStorage.getItem('learn_user_email') || '',
          contact: localStorage.getItem('learn_user_phone') || '',
        },
        theme: {
          color: '#4f46e5',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', function () {
        toast.error('Payment was cancelled or failed.');
      });
      razorpay.open();
    } catch (err) {
      toast.error('Error starting checkout. Please try again.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Sleek PrepLens Theme Hero Section */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80 pt-10 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-200/80 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Crown className="w-4 h-4 text-indigo-600" />
            <span>PrepLens Learn Plans</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Learning Plan</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Select your class or competitive target to unlock AI Study Roadmaps, Unlimited Mock Tests, and Monthly Topper Awards.
          </p>

          {/* Academic Session Pass Indicator */}
          <div className="mt-6 inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-5 py-2 rounded-2xl text-xs sm:text-sm font-bold shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Full Academic Session Pass (2026 – 2027) · Complete Exam Preparation</span>
          </div>
        </div>
      </div>

      {/* Referral & Promo Code Box */}
      <div className="max-w-xl mx-auto px-4 -mt-4 mb-2">
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <span>🎟️ Have a Friend's Referral or Promo Code?</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                placeholder="Enter Code (e.g. CHINT3952)"
                disabled={Boolean(appliedCode)}
                className="w-full px-3.5 py-2.5 text-sm font-mono uppercase bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100 disabled:text-slate-500"
              />
              {appliedCode ? (
                <button
                  type="button"
                  onClick={() => {
                    setAppliedCode(null);
                    setCodeDetails(null);
                    setReferralCode('');
                  }}
                  className="px-4 py-2.5 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl whitespace-nowrap transition-colors"
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleApplyCode}
                  disabled={isValidatingCode || !referralCode.trim()}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-xl whitespace-nowrap shadow-xs transition-colors flex items-center gap-1.5"
                >
                  {isValidatingCode ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Apply'}
                </button>
              )}
            </div>
          </div>
        </div>

        {codeDetails && appliedCode && (
          <div className="mt-2.5 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{codeDetails.message}</span>
            </span>
            <span className="font-mono font-black text-emerald-700 px-2 py-0.5 rounded bg-emerald-100/80 border border-emerald-300">
              {appliedCode}
            </span>
          </div>
        )}
      </div>

      {/* Pricing Cards Grid - 3 High-Converting Tiers */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isLoading = loadingPlan === plan.tag;
            const isTargetPlan = matchPlanToGoal(plan.id, userExamGoal);

            return (
              <div
                key={plan.label}
                className={`bg-white rounded-3xl p-7 border transition-all duration-200 flex flex-col justify-between relative ${
                  isTargetPlan
                    ? 'border-indigo-500 shadow-xl ring-2 ring-indigo-500/20 shadow-indigo-100'
                    : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300/80'
                }`}
              >
                {isTargetPlan && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap ring-2 ring-white">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span>Recommended for You · {formatGoalLabel(userExamGoal)}</span>
                  </div>
                )}
                <div>
                  {/* Category Pill */}
                  <div className="mb-3">
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg ${
                      isTargetPlan
                        ? 'bg-indigo-100 text-indigo-800 border border-indigo-300 font-extrabold'
                        : 'bg-indigo-50 text-indigo-700 border border-indigo-200/80'
                    }`}>
                      {plan.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{plan.label}</h3>

                  {/* Price */}
                  <div className="mt-5 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        ₹{plan.annualPrice}
                      </span>
                      <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                        / academic year
                      </span>
                    </div>
                    <p className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>≈ ₹{Math.round(plan.annualPrice / 12)}/month · {plan.validity}</span>
                    </p>
                  </div>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-3 mb-8 border-t border-slate-100 pt-5">
                    {[
                      'AI Master Roadmap',
                      'Unlimited Mock Tests',
                      'Cash Prize & Trophy Eligible',
                      'AI Weakness Detector',
                      'Referral Code (XP Boost)',
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Started / Payment Trigger Button */}
                <button
                  onClick={() => handlePlanCheckout(plan)}
                  disabled={isLoading}
                  className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 text-white shadow-sm hover:scale-[1.01] ${
                    isTargetPlan || !userExamGoal
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-indigo-200'
                      : 'bg-slate-900 hover:bg-slate-800 shadow-slate-200'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Initiating Payment...</span>
                    </>
                  ) : (
                    <>
                      <span>{isTargetPlan ? `Enroll in ${plan.label}` : 'Get Started'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Premium is Worth Every Rupee */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Premium is Worth Every Rupee
          </h2>
          <p className="text-slate-500 text-sm mt-2">Designed specifically for top marks & stress-free exam prep</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f) => (
            <div key={f.title} className={`flex gap-4 p-5 rounded-2xl border ${f.bg} bg-white shadow-sm`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-slate-200/80 shadow-sm">
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">{f.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Free vs Premium Table */}
        <div className="mt-14 bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 text-center bg-slate-100/70 border-b border-slate-200 px-6 py-4">
            <div className="text-sm font-bold text-slate-600 text-left">Feature</div>
            <div className="text-sm font-bold text-slate-500">Free Tier</div>
            <div className="text-sm font-extrabold text-indigo-600">PrepLens Premium</div>
          </div>
          {[
            ['AI Study Roadmap', '1 (Basic)', 'Unlimited + Auto-Adjust'],
            ['Mock Tests', '2 Free Tests', 'Unlimited'],
            ['AI Weakness Report', '❌ Not Available', '✅ After Every Test'],
            ['Cash Prize & Trophies', '❌ Excluded', '✅ Monthly Topper Award + Trophy'],
            ['Referral XP Code', '❌ Standard', '✅ +200 XP Per Friend'],
            ['Ads & Distractions', 'Standard', '❌ 100% Distraction Free'],
          ].map(([feature, free, premium]) => (
            <div key={feature} className="grid grid-cols-3 text-center border-b border-slate-100 last:border-0 px-6 py-4 items-center">
              <div className="text-sm font-semibold text-slate-800 text-left">{feature}</div>
              <div className="text-sm text-slate-500 font-medium">{free}</div>
              <div className="text-sm font-bold text-indigo-600">{premium}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
