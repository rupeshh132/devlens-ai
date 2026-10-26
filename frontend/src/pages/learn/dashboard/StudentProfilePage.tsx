import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Target, CreditCard, Calendar, Clock, Award, CheckCircle, Loader2, Zap, ArrowRight, ShieldCheck, Trophy, BrainCircuit, X, Check } from 'lucide-react';
import { learnApi } from '../../../lib/learn-api';
import { syncPendingDailyChallengeWithBackend } from '../../../lib/lockerStorage';
import { toast } from 'sonner';

interface Transaction {
  id: string;
  date: string;
  plan: string;
  amount: number;
  status: string;
}

interface UserProfile {
  fullName: string;
  email: string;
  phone?: string | null;
  examGoal: string;
  subscriptionPlan: string;
  subscribedUntil: string | null;
  joinedDate: string;
  totalTestsTaken: number;
  averageAccuracy: number;
  studyHours: number;
  studyMinutes?: number;
  studyTimeFormatted?: string;
  globalRank: string;
  xpPoints: number;
  transactions: Transaction[];
}


// --- Advanced Analytics Widget ---
function AdvancedAnalyticsWidget({ isPremium, testsTaken }: { isPremium: boolean, testsTaken: number }) {
  const [heatmap, setHeatmap] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [generatingTopic, setGeneratingTopic] = useState<string | null>(null);
  const [showPractice, setShowPractice] = useState<{topic: string, q: string} | null>(null);

  useEffect(() => {
    if (!isPremium || testsTaken === 0) return;
    const fetchHeatmap = async () => {
      try {
        setLoading(true);
        const res = await learnApi.get('/profile/analytics/heatmap');
        setHeatmap(res.data || []);
      } catch (e) {
        console.error("Heatmap fetch error", e);
      } finally {
        setLoading(false);
      }
    };
    fetchHeatmap();
  }, [isPremium, testsTaken]);

  const generatePractice = async (topic: string) => {
    try {
      setGeneratingTopic(topic);
      toast.info("AI is generating a targeted practice set for " + topic + "...");
      const res = await learnApi.post('/ai/generate-practice', { topic });
      setShowPractice({ topic, q: res.data.practiceSet });
      toast.success("Practice set ready for " + topic + "!");
    } catch(e) {
      toast.error("Failed to generate practice set.");
    } finally {
      setGeneratingTopic(null);
    }
  };

  if (isPremium && testsTaken === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
            <BrainCircuit className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Deep Weakness Analytics</h3>
          <p className="text-slate-500 max-w-sm mx-auto font-medium">
            Take your first Mock Test to allow our AI engine to analyze your strengths and weaknesses!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center">
            <BrainCircuit className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              Deep Weakness Analytics
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Pro</span>
            </h3>
            <p className="text-xs text-slate-500 font-medium">AI-driven analysis of your test attempts</p>
          </div>
        </div>
      </div>

      <div className="p-6 relative">
        {!isPremium && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-md z-10 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 max-w-sm">
              <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">Unlock Pro Analytics</h4>
              <p className="text-sm text-slate-500 mb-4">Upgrade to Premium to see your real skill heatmap and generate custom AI practice sets for your weak topics.</p>
              <a href="/learn/pricing" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-xl font-bold w-full block shadow-lg hover:scale-105 transition-transform">
                Upgrade to Pro
              </a>
            </div>
          </div>
        )}

        {loading ? (
          <div className="py-8 flex flex-col items-center justify-center gap-3 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
            <p className="text-sm font-medium">Analyzing your test performance across topics...</p>
          </div>
        ) : isPremium && heatmap.length === 0 ? (
          <div className="text-center py-8 text-slate-500 font-medium">
            <BrainCircuit className="w-10 h-10 text-indigo-400 mx-auto mb-2 opacity-60" />
            <p className="text-sm">Complete your submitted mock tests to generate topic-level analytics.</p>
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${!isPremium ? 'opacity-30 pointer-events-none filter blur-[2px]' : ''}`}>
            {(isPremium ? heatmap : [
              {topic: "Algebra", accuracy: 85, status: "STRONG", color: "#10b981", totalQuestions: 20, correctQuestions: 17},
              {topic: "Trigonometry", accuracy: 30, status: "CRITICAL", color: "#e11d48", totalQuestions: 10, correctQuestions: 3},
              {topic: "Calculus", accuracy: 55, status: "WEAK", color: "#f43f5e", totalQuestions: 12, correctQuestions: 6},
              {topic: "Probability", accuracy: 75, status: "GOOD", color: "#3b82f6", totalQuestions: 8, correctQuestions: 6}
            ]).map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl p-4 flex flex-col justify-between bg-slate-50/60 hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-sm">{item.topic}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-semibold" style={{color: item.color}}>{item.status} ({item.accuracy}%)</span>
                      {item.totalQuestions > 0 && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          • {item.correctQuestions}/{item.totalQuestions} correct
                        </span>
                      )}
                    </div>
                  </div>
                  {item.status === 'WEAK' || item.status === 'CRITICAL' ? (
                    <button
                      onClick={() => generatePractice(item.topic)}
                      disabled={generatingTopic === item.topic}
                      className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-slate-800 disabled:opacity-50 flex items-center gap-1.5 shadow-sm"
                    >
                      {generatingTopic === item.topic ? (
                        <>
                          <Loader2 className="w-3 h-3 animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <span>Fix Weakness</span>
                      )}
                    </button>
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{backgroundColor: item.color + '20'}}>
                      <CheckCircle className="w-4 h-4" style={{color: item.color}} />
                    </div>
                  )}
                </div>
                <div className="w-full bg-slate-200/80 rounded-full h-1.5 mt-1 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, Math.max(5, item.accuracy))}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {showPractice && (
          <div className="mt-6 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl animate-in fade-in">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-indigo-950 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-indigo-600" />
                Custom AI Practice Set: {showPractice.topic}
              </h4>
              <button
                onClick={() => setShowPractice(null)}
                className="text-indigo-400 hover:text-indigo-700 p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm text-indigo-900/90 whitespace-pre-wrap font-mono bg-white/70 p-4 rounded-xl border border-indigo-100/60 max-h-80 overflow-y-auto">
              {showPractice.q}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// --- End Advanced Analytics Widget ---

export function StudentProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [isSavingPhone, setIsSavingPhone] = useState(false);
  const navigate = useNavigate();

  const handleSavePhone = async () => {
    const clean = phoneInput.replace(/\D/g, '').slice(0, 10);
    if (clean.length > 0 && clean.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }
    setIsSavingPhone(true);
    try {
      await learnApi.put('/profile/phone', { phone: clean });
      setProfile(prev => prev ? { ...prev, phone: clean || null } : prev);
      setIsEditingPhone(false);
      toast.success(clean ? 'WhatsApp number updated!' : 'Phone number removed');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update phone number');
    } finally {
      setIsSavingPhone(false);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await learnApi.get('/profile');
        setProfile(response.data);
        if (response.data?.phone) {
          setPhoneInput(response.data.phone);
        }
        if (response.data?.examGoal) {
          localStorage.setItem('learn_exam_goal', response.data.examGoal);
        }
      } catch (error: any) {
        console.warn("Real-time profile endpoint fallback mode", error);
        
        // Extract real user details from local storage if available
        let savedUser: any = null;
        try {
          const raw = localStorage.getItem('preplens_user') || localStorage.getItem('user');
          if (raw) savedUser = JSON.parse(raw);
        } catch (e) {}

        const userName = savedUser?.fullName || savedUser?.name || localStorage.getItem('learn_user_name') || 'Student';
        const userEmail = savedUser?.email || localStorage.getItem('learn_user_email') || '';
        const userGoal = localStorage.getItem('learn_exam_goal') || 'Class 10';

        setProfile({
          fullName: userName,
          email: userEmail,
          examGoal: userGoal,
          subscriptionPlan: 'FREE',
          subscribedUntil: null,
          joinedDate: new Date().toISOString(),
          totalTestsTaken: 0,
          averageAccuracy: 0,
          studyHours: 0,
          studyMinutes: 0,
          studyTimeFormatted: '0m',
          globalRank: 'Unranked',
          xpPoints: 0,
          transactions: []
        });
      } finally {
        setIsLoading(false);
      }
    };

    // Reconcile any uncommitted Daily PYQ XP first, then fetch profile
    syncPendingDailyChallengeWithBackend().finally(() => {
      fetchProfile();
    });

    const handleSessionLogged = () => {
      fetchProfile();
    };

    const handleXpUpdated = (e: any) => {
      if (typeof e.detail?.totalXp === 'number') {
        setProfile(prev => prev ? { ...prev, xpPoints: e.detail.totalXp } : prev);
      } else {
        fetchProfile();
      }
    };
    
    window.addEventListener('study_session_logged', handleSessionLogged);
    window.addEventListener('preplens_xp_updated', handleXpUpdated);
    return () => {
      window.removeEventListener('study_session_logged', handleSessionLogged);
      window.removeEventListener('preplens_xp_updated', handleXpUpdated);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  const transactions = profile?.transactions || [];
  const isPremium = !!(profile?.subscriptionPlan && profile.subscriptionPlan !== 'FREE');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-900 font-sans">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Profile</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your personal details, academic progress, and subscription history.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Personal Details & Plan */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-indigo-50 border-2 border-indigo-200/80 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <User className="w-12 h-12 text-indigo-600" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">{profile?.fullName}</h2>
              
              <div className="flex items-center gap-2 mt-2">
                <span className={`px-3 py-1 text-xs font-extrabold rounded-full ${
                  isPremium
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                }`}>
                  {isPremium ? '👑 Premium Member' : '🟢 Active Student'}
                </span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-200/80 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                  {profile?.xpPoints ?? 0} XP
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4 border-t border-slate-100 pt-6">
              <div className="flex items-center text-sm">
                <Mail className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium truncate">{profile?.email}</span>
              </div>

              {/* Phone / WhatsApp */}
              <div className="text-sm">
                {isEditingPhone ? (
                  <div className="space-y-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <label className="text-xs font-semibold text-slate-600 block">WhatsApp / Mobile Number</label>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2 py-1.5 rounded-lg">+91</span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit number"
                        value={phoneInput}
                        onChange={e => setPhoneInput(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="flex-1 text-sm bg-white border border-slate-200 px-2 py-1 rounded-lg outline-none focus:border-indigo-500"
                      />
                      <button
                        onClick={handleSavePhone}
                        disabled={isSavingPhone}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white p-1.5 rounded-lg disabled:opacity-50"
                        title="Save"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => { setIsEditingPhone(false); setPhoneInput(profile?.phone || ''); }}
                        className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">
                        {profile?.phone ? `+91 ${profile.phone}` : <span className="text-slate-400 italic">No phone added</span>}
                      </span>
                    </div>
                    <button
                      onClick={() => setIsEditingPhone(true)}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold px-2 py-1 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      {profile?.phone ? 'Edit' : '+ Add'}
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center text-sm">
                <Target className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{profile?.examGoal} Aspirant</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Joined {new Date(profile?.joinedDate || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
            </div>
          </div>

          {/* Current Plan Card */}
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-3xl shadow-md p-6 text-white relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Award className="w-36 h-36" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full border border-white/30 backdrop-blur-sm">
                  {profile?.subscriptionPlan || 'FREE'} PLAN
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
              </div>

              <h3 className="font-extrabold text-xl mb-1 flex items-center">
                <Award className="w-5 h-5 mr-2 text-amber-300" />
                Current Plan
              </h3>
              <p className="text-indigo-100 text-sm mb-6">
                {isPremium ? 'Full access to AI Roadmaps & Mock Tests' : 'You are currently on the FREE plan.'}
              </p>

              <div className="flex justify-between items-end border-t border-white/20 pt-4">
                <div>
                  <p className="text-[11px] text-indigo-200 uppercase tracking-wider font-semibold">Next Billing</p>
                  <p className="font-bold text-sm">
                    {profile?.subscribedUntil ? new Date(profile.subscribedUntil).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
                <button
                  onClick={() => navigate('/learn/pricing')}
                  className="px-4 py-2 bg-white text-indigo-700 rounded-xl text-xs font-extrabold hover:bg-indigo-50 transition-all shadow-sm hover:scale-105 flex items-center gap-1.5"
                >
                  <span>{isPremium ? 'Manage Plan' : 'Upgrade to Pro'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Academic Stats & Real-Time History */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Real-Time Academic Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center">
              <div className="w-10 h-10 mx-auto bg-indigo-50 rounded-xl flex items-center justify-center mb-2 border border-indigo-100">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{profile?.totalTestsTaken ?? 0}</p>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">Tests Taken</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center">
              <div className="w-10 h-10 mx-auto bg-emerald-50 rounded-xl flex items-center justify-center mb-2 border border-emerald-100">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{(profile?.averageAccuracy ?? 0).toFixed(1)}%</p>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">Avg Accuracy</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center">
              <div className="w-10 h-10 mx-auto bg-purple-50 rounded-xl flex items-center justify-center mb-2 border border-purple-100">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">
                {profile?.studyTimeFormatted || (profile?.studyMinutes ? `${profile.studyMinutes}m` : `${profile?.studyHours ?? 0}h`)}
              </p>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">Study Time</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 mx-auto bg-amber-50 rounded-xl flex items-center justify-center mb-2 border border-amber-100">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {!isPremium ? 'Unranked' : (profile?.globalRank ?? 'Unranked')}
                  </p>
                  {isPremium && profile?.globalRank && profile.globalRank !== 'Unranked' && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-amber-500/20 text-amber-700 border border-amber-400/40">
                      PRO
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">All-India Rank</p>
                {!isPremium ? (
                  <span className="inline-block mt-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/70">
                    Pro Exclusive
                  </span>
                ) : profile?.globalRank === 'Unranked' ? (
                  <span className="inline-block mt-1 text-[10px] font-medium text-slate-400">
                    Take 1 test to qualify
                  </span>
                ) : (
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600">
                    Verified AIR
                  </span>
                )}
              </div>
            </div>
          </div>

          <AdvancedAnalyticsWidget isPremium={isPremium} testsTaken={profile?.totalTestsTaken || 0} />

            {/* Payment & Transaction History Table */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Transaction History</h3>
                  <p className="text-xs text-slate-500 font-medium">Real-time payment records & Razorpay receipts</p>
                </div>
              </div>

              <button
                onClick={() => navigate('/learn/pricing')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-200/80 transition-colors"
              >
                + New Transaction
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-6">Transaction ID</th>
                    <th className="py-3.5 px-6">Date</th>
                    <th className="py-3.5 px-6">Plan</th>
                    <th className="py-3.5 px-6">Amount</th>
                    <th className="py-3.5 px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  {transactions.map((txn, index) => (
                    <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-900 font-mono text-xs">{txn.id}</td>
                      <td className="py-4 px-6 text-slate-600 font-medium">{new Date(txn.date).toLocaleDateString()}</td>
                      <td className="py-4 px-6 text-slate-700 font-semibold">{txn.plan}</td>
                      <td className="py-4 px-6 font-extrabold text-slate-900">₹{txn.amount ? txn.amount.toFixed(2) : '0.00'}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                          txn.status === 'SUCCESS' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}>
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {transactions.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-400 font-medium">
                        No transactions found. Upgrade your plan to view billing receipts.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
