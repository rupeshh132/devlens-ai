import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Target, CreditCard, Calendar, Clock, Award, CheckCircle, Loader2, Zap, ArrowRight, ShieldCheck, Trophy, BrainCircuit, X, Check, RefreshCw, AlertTriangle, Pencil, History, ExternalLink } from 'lucide-react';
import { learnApi, fetchLearnProfileCached, invalidateLearnProfileCache, readCachedLearnProfileSnapshot } from '../../../lib/learn-api';
import { syncPendingDailyChallengeWithBackend, isItemSaved, startRedemptionDrillWithQuota } from '../../../lib/lockerStorage';
import { saveMistakeToLocker } from '../../../lib/rankPredictor';
import { MistakeRedemptionModal, type RedemptionQuestionItem } from '../../../components/learn/MistakeRedemptionModal';
import { PaywallModal } from '../../../components/learn/PaywallModal';
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
  paidUser?: boolean;
  isPaidUser?: boolean;
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
function AdvancedAnalyticsWidget({ isPremium, testsTaken, examGoal }: { isPremium: boolean; testsTaken: number; examGoal?: string }) {
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
            {(isPremium ? heatmap : (
              /neet|bio/i.test(examGoal || '')
                ? [
                    { topic: "Human Physiology", accuracy: 86, status: "STRONG", color: "#10b981", totalQuestions: 22, correctQuestions: 19 },
                    { topic: "Genetics & Evolution", accuracy: 35, status: "CRITICAL", color: "#e11d48", totalQuestions: 14, correctQuestions: 5 },
                    { topic: "Organic Mechanisms", accuracy: 52, status: "WEAK", color: "#f43f5e", totalQuestions: 15, correctQuestions: 8 },
                    { topic: "Electrostatics", accuracy: 74, status: "GOOD", color: "#3b82f6", totalQuestions: 12, correctQuestions: 9 }
                  ]
                : /jee/i.test(examGoal || '')
                ? [
                    { topic: "Electrostatics & Gauss Law", accuracy: 85, status: "STRONG", color: "#10b981", totalQuestions: 20, correctQuestions: 17 },
                    { topic: "Rotational Motion", accuracy: 30, status: "CRITICAL", color: "#e11d48", totalQuestions: 10, correctQuestions: 3 },
                    { topic: "Definite Integration", accuracy: 55, status: "WEAK", color: "#f43f5e", totalQuestions: 12, correctQuestions: 6 },
                    { topic: "Chemical Bonding", accuracy: 75, status: "GOOD", color: "#3b82f6", totalQuestions: 12, correctQuestions: 9 }
                  ]
                : [
                    { topic: "Algebra & Quadratics", accuracy: 85, status: "STRONG", color: "#10b981", totalQuestions: 20, correctQuestions: 17 },
                    { topic: "Trigonometry", accuracy: 30, status: "CRITICAL", color: "#e11d48", totalQuestions: 10, correctQuestions: 3 },
                    { topic: "Light & Optics", accuracy: 55, status: "WEAK", color: "#f43f5e", totalQuestions: 12, correctQuestions: 6 },
                    { topic: "Chemical Reactions", accuracy: 75, status: "GOOD", color: "#3b82f6", totalQuestions: 8, correctQuestions: 6 }
                  ]
            )).map((item, idx) => (
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

// --- Competitive Rank Predictor, Subject Split & Mistake Auto-Heal Card ---
function CompetitiveAnalyticsCard({ examGoal, testsTaken }: { examGoal: string; testsTaken: number }) {
  const navigate = useNavigate();
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [mistakesSaved, setMistakesSaved] = useState(false);
  const [redemptionOpen, setRedemptionOpen] = useState(false);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [startingDrill, setStartingDrill] = useState(false);

  const isCompetitive = /jee|neet/i.test(examGoal || '');

  useEffect(() => {
    if (!isCompetitive && testsTaken === 0) return;
    let active = true;
    setLoading(true);
    learnApi.get('/profile/analytics/competitive-summary')
      .then(res => {
        if (active) setSummary(res.data);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, [examGoal, testsTaken, isCompetitive]);

  if (!isCompetitive && (!summary || summary.completedTests === 0)) return null;

  const pred = summary?.prediction;
  const bestPred = summary?.bestPrediction;
  const subjects: any[] = summary?.subjectBreakdown || [];
  const mistakes: any[] = summary?.recentMistakes || [];
  const history: any[] = summary?.recentHistory || [];

  const getMistakeTitle = (m: any) => {
    const rawText = (m.questionText || m.text || '').trim();
    return `[Mistake] ${(m.subject || 'General')} — ${rawText.slice(0, 68)}${rawText.length > 68 ? '...' : ''}`;
  };

  const allMistakesSynced = mistakes.length > 0 && (mistakesSaved || mistakes.every(m => isItemSaved(getMistakeTitle(m))));

  const handleSaveAllMistakes = () => {
    mistakes.forEach(m => saveMistakeToLocker(m, `${examGoal} Auto-Heal`));
    setMistakesSaved(true);
    toast.success(`Synced ${mistakes.length} mistake${mistakes.length === 1 ? '' : 's'} into Revision Locker → Mistakes!`);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/25 text-indigo-200 border border-indigo-400/30 mb-1.5">
            {examGoal} Analytics Engine
          </span>
          <h3 className="text-lg font-extrabold tracking-tight text-white">Rank Predictor, Subject Split & Mistake Auto-Heal</h3>
        </div>
        {summary?.completedTests > 0 && pred && (
          <div className="flex items-center gap-2 shrink-0">
            <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-right">
              <div className="text-[10px] uppercase tracking-wider text-indigo-200 font-bold">Projected Score</div>
              <div className="text-sm font-black text-white">{pred.scaledScore} / {pred.officialMaxMarks}</div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-right">
              <div className="text-[10px] uppercase tracking-wider text-emerald-200 font-bold">Est. Percentile</div>
              <div className="text-sm font-black text-emerald-300">{pred.predictedPercentile}</div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 space-y-6">
        {loading ? (
          <div className="py-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
            <span>Computing percentile projection & mistake patterns...</span>
          </div>
        ) : !summary || summary.completedTests === 0 ? (
          <div className="text-center py-6 space-y-3">
            <p className="text-sm text-slate-600 font-medium">
              Attempt at least one {examGoal} mock test to unlock your calibrated NTA/IIT/NMC Rank Predictor, subject mastery bars, and Mistake Notebook sync.
            </p>
            <button
              type="button"
              onClick={() => navigate('/learn/tests')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Launch First {examGoal} Mock <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <>
            {pred && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80">
                  <div className="text-[11px] font-bold uppercase text-indigo-700">Avg Predicted AIR Band</div>
                  <div className="text-lg font-black text-slate-900 mt-1">{pred.predictedRankBand}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{pred.targetZone}</div>
                </div>
                {bestPred && summary.completedTests > 1 ? (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="text-[11px] font-bold uppercase text-emerald-700">Peak Performance Potential</div>
                    <div className="text-lg font-black text-slate-900 mt-1">{bestPred.predictedPercentile} ({bestPred.scaledScore}/{bestPred.officialMaxMarks})</div>
                    <div className="text-xs text-slate-600 mt-0.5">{bestPred.predictedRankBand}</div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="text-[11px] font-bold uppercase text-emerald-700">Latest Scaled Score</div>
                    <div className="text-lg font-black text-slate-900 mt-1">{pred.scaledScore} / {pred.officialMaxMarks}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{pred.predictedPercentile} • Single attempt baseline</div>
                  </div>
                )}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-bold uppercase text-slate-500">Mocks Evaluated</div>
                  <div className="text-lg font-black text-slate-900 mt-1">
                    {summary.completedTests} {summary.completedTests === 1 ? 'Paper' : 'Papers'} ({summary.averagePercentage}%)
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">Consistent timed practice boosts accuracy</div>
                </div>
              </div>
            )}

            {subjects.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Subject-Wise Score & Accuracy Split</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {subjects.map((st: any) => (
                    <div key={st.subject} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-slate-900">{st.subject}</span>
                        <span className="font-bold text-indigo-700">{st.netScore}/{st.maxMarks} Marks</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 rounded-full transition-all"
                          style={{ width: `${Math.min(100, Math.max(0, st.accuracy || 0))}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-600 font-semibold">
                        <span>Accuracy: {st.accuracy}%</span>
                        <span>+{st.correct}✓ / {st.wrong}✗</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {summary?.timeAutopsy && (Number(summary.timeAutopsy.totalNegativeMarksLost || 0) > 0 || Number(summary.timeAutopsy.fastWrongCount || 0) > 0) && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-slate-50 to-rose-50/70 border border-indigo-200/80 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-900">
                      What-If Score Simulator & Time-Trap Autopsy
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Skipping impulsive guesses (&lt;25s) directly recovers negative marks without extra study.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Recoverable: +{summary.timeAutopsy.whatIfRecoverableMarks ?? 0} Marks
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-2.5 rounded-xl bg-white border border-rose-200">
                    <div className="text-sm font-black text-rose-700">-{summary.timeAutopsy.totalNegativeMarksLost ?? 0}</div>
                    <div className="text-[11px] text-slate-500 font-semibold">Negative Bleed</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200">
                    <div className="text-sm font-black text-amber-700">{summary.timeAutopsy.fastWrongCount ?? 0}</div>
                    <div className="text-[11px] text-slate-500 font-semibold">Rushed Wrong (&lt;25s)</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-sm font-black text-slate-800">{summary.timeAutopsy.slowWrongCount ?? 0}</div>
                    <div className="text-[11px] text-slate-500 font-semibold">Time Traps (≥2m)</div>
                  </div>
                </div>
              </div>
            )}

            {history.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-indigo-600" /> Recent Attempt History
                  </h4>
                  <button
                    type="button"
                    onClick={() => navigate('/learn/tests')}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    All Tests →
                  </button>
                </div>
                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden">
                  {history.slice(0, 5).map((h: any, idx: number) => {
                    const maxMarks = h.maxMarks ?? h.totalMarks ?? 0;
                    const pct = typeof h.percentage === 'number'
                      ? h.percentage
                      : (maxMarks > 0 ? (Number(h.score ?? 0) / maxMarks) * 100 : 0);
                    return (
                    <div key={h.attemptId || h.testId || idx} className="flex items-center justify-between gap-3 px-4 py-3 text-xs hover:bg-white transition-colors">
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 truncate">{h.testTitle || h.title || 'Mock Assessment'}</p>
                        <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                          Score: {h.score ?? 0}/{maxMarks} ({pct.toFixed(1)}%)
                          {h.submittedAt ? ` • ${new Date(h.submittedAt).toLocaleDateString()}` : ''}
                        </p>
                      </div>
                      {h.testId && (
                        <button
                          type="button"
                          onClick={() => navigate(`/learn/test/${h.testId}`)}
                          className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-indigo-600 hover:bg-indigo-50 font-bold transition-colors"
                        >
                          Review <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  );})}
                </div>
              </div>
            )}

            {mistakes.length > 0 && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-extrabold text-amber-950">Mistake Auto-Heal Queue ({mistakes.length} Recent Errors)</h4>
                    <p className="text-xs text-amber-800">Sync recent wrong answers into your Mistake Notebook and clear weak chapters.</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      type="button"
                      disabled={startingDrill}
                      onClick={async () => {
                        setStartingDrill(true);
                        try {
                          const qRes = await startRedemptionDrillWithQuota();
                          if (!qRes.allowed) {
                            setPaywallOpen(true);
                            return;
                          }
                          setRedemptionOpen(true);
                        } finally {
                          setStartingDrill(false);
                        }
                      }}
                      className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      Redeem Errors ({mistakes.length})
                    </button>
                    <button
                      type="button"
                      disabled={allMistakesSynced}
                      onClick={handleSaveAllMistakes}
                      className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:bg-emerald-600 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      {allMistakesSynced ? 'Synced to Locker ✓' : 'Save All to Mistake Notebook'}
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/learn/locker')}
                      className="px-3.5 py-2 rounded-xl bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Open Locker →
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {mistakes.slice(0, 4).map((m: any, idx: number) => (
                    <div key={m.questionId || idx} className="bg-white p-3 rounded-xl border border-amber-200/80 text-xs space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                        <span className="text-indigo-700">{m.subject} • {m.chapter}</span>
                        <span className="text-rose-600">Yours: {m.userAnswer} → Key: {m.correctAnswer}</span>
                      </div>
                      <p className="text-slate-800 font-medium line-clamp-2">{m.questionText}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {mistakes.length > 0 && (
              <>
              <MistakeRedemptionModal
                isOpen={redemptionOpen}
                onClose={() => setRedemptionOpen(false)}
                title={`${examGoal} Auto-Heal Redemption Drill`}
                questions={mistakes.map((m: any, idx: number): RedemptionQuestionItem => ({
                  id: m.questionId || `m-${idx}`,
                  subject: m.subject,
                  chapter: m.chapter,
                  questionText: m.questionText,
                  questionType: m.questionType,
                  options: m.options,
                  correctAnswer: m.correctAnswer,
                  explanation: m.explanation,
                }))}
                onUpgradeRequested={() => setPaywallOpen(true)}
              />
              <PaywallModal
                isOpen={paywallOpen}
                onClose={() => setPaywallOpen(false)}
                featureName="Unlimited Mistake Redemption Drills"
                featureDescription="Free students get 1 Redemption Drill per day. Upgrade to Pro for unlimited wrong-question drills & adaptive practice!"
              />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export function StudentProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(() => readCachedLearnProfileSnapshot());
  const [isLoading, setIsLoading] = useState<boolean>(() => !readCachedLearnProfileSnapshot());
  const [profileError, setProfileError] = useState<{ status?: number; message: string } | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [isSavingPhone, setIsSavingPhone] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const navigate = useNavigate();

  const handleSaveProfileDetails = async () => {
    const trimmedName = nameInput.trim();
    if (!trimmedName || trimmedName.length < 2) {
      toast.error('Please enter your name (at least 2 characters)');
      return;
    }
    setIsSavingProfile(true);
    try {
      const res = await learnApi.put('/profile', {
        fullName: trimmedName
      });
      invalidateLearnProfileCache();
      const updated = res.data;
      setProfile(prev => updated ? { ...(prev || {}), ...updated } : prev);
      try {
        localStorage.setItem('learn_user_name', updated?.fullName || trimmedName);
        const rawUser = localStorage.getItem('preplens_user');
        if (rawUser) {
          const parsed = JSON.parse(rawUser);
          localStorage.setItem('preplens_user', JSON.stringify({
            ...parsed,
            fullName: updated?.fullName || trimmedName
          }));
        }
      } catch {}
      setIsEditingProfile(false);
      toast.success('Profile name updated!');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update profile name');
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleSavePhone = async () => {
    const clean = phoneInput.replace(/\D/g, '').slice(0, 10);
    if (clean.length > 0 && clean.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }
    setIsSavingPhone(true);
    try {
      await learnApi.put('/profile/phone', { phone: clean });
      invalidateLearnProfileCache();
      setProfile(prev => prev ? { ...prev, phone: clean || null } : prev);
      setIsEditingPhone(false);
      toast.success(clean ? 'WhatsApp number updated!' : 'Phone number removed');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update phone number');
    } finally {
      setIsSavingPhone(false);
    }
  };

  const fetchProfile = useCallback(async (forceRefresh = false) => {
    setIsSyncing(true);
    setProfileError(null);
    try {
      const data = await fetchLearnProfileCached(forceRefresh);
      if (data) {
        setProfile(data);
        if (data.phone) {
          setPhoneInput(data.phone);
        }
        if (data.fullName) {
          setNameInput(data.fullName);
        }
        if (data.examGoal) {
          localStorage.setItem('learn_exam_goal', data.examGoal);
        }
      }
    } catch (error: any) {
      console.warn('Real-time profile endpoint sync failed', error);
      const status = error?.response?.status;
      setProfileError({
        status,
        message:
          status === 401
            ? 'Your login session expired. Please sign in again to load your live records.'
            : 'Unable to sync live profile from server. Showing last saved details.',
      });

      const snapshot = readCachedLearnProfileSnapshot();
      setProfile(prev => {
        if (prev) return prev;
        if (snapshot) return snapshot;

        let savedUser: any = null;
        try {
          const raw = localStorage.getItem('preplens_user') || localStorage.getItem('user');
          if (raw) savedUser = JSON.parse(raw);
        } catch (e) {}

        const userName = savedUser?.fullName || savedUser?.name || localStorage.getItem('learn_user_name') || 'Student';
        const userEmail = savedUser?.email || localStorage.getItem('learn_user_email') || '';
        const userGoal = localStorage.getItem('learn_exam_goal') || 'JEE Mains';

        return {
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
        };
      });
    } finally {
      setIsLoading(false);
      setIsSyncing(false);
    }
  }, []);

  useEffect(() => {
    syncPendingDailyChallengeWithBackend().finally(() => {
      fetchProfile(false);
    });

    const handleSessionLogged = () => {
      fetchProfile(true);
    };

    const handleXpUpdated = (e: any) => {
      if (typeof e.detail?.totalXp === 'number') {
        setProfile(prev => prev ? { ...prev, xpPoints: e.detail.totalXp } : prev);
      } else {
        fetchProfile(true);
      }
    };
    
    window.addEventListener('study_session_logged', handleSessionLogged);
    window.addEventListener('preplens_xp_updated', handleXpUpdated);
    return () => {
      window.removeEventListener('study_session_logged', handleSessionLogged);
      window.removeEventListener('preplens_xp_updated', handleXpUpdated);
    };
  }, [fetchProfile]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  const transactions = profile?.transactions || [];
  const hasPaidPlanName = Boolean(
    profile?.subscriptionPlan && profile.subscriptionPlan.trim().toUpperCase() !== 'FREE'
  );
  const subscribedUntilMs = profile?.subscribedUntil
    ? new Date(profile.subscribedUntil).getTime()
    : null;
  const isNotExpired = subscribedUntilMs === null || subscribedUntilMs > Date.now();
  const isPlanExpired = hasPaidPlanName && subscribedUntilMs !== null && subscribedUntilMs <= Date.now();
  const isPremium = Boolean(
    profile?.paidUser ?? profile?.isPaidUser ?? (hasPaidPlanName && isNotExpired)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-900 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Profile</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your personal details, academic progress, and subscription history.</p>
        </div>
        <button
          type="button"
          onClick={() => fetchProfile(true)}
          disabled={isSyncing}
          className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-60 shadow-xs transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-indigo-600' : ''}`} />
          <span>{isSyncing ? 'Syncing...' : 'Refresh Profile'}</span>
        </button>
      </div>

      {profileError && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5 text-amber-900 text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <span>{profileError.message}</span>
          </div>
          {profileError.status === 401 ? (
            <button
              onClick={() => navigate('/learn/login')}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shrink-0"
            >
              Sign In Again
            </button>
          ) : (
            <button
              onClick={() => fetchProfile(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shrink-0"
            >
              Retry Sync
            </button>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Personal Details & Plan */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-violet-700 border-2 border-indigo-200/80 rounded-full flex items-center justify-center mb-4 shadow-md text-white text-2xl font-black tracking-tight select-none">
                {(() => {
                  const raw = (profile?.fullName || 'S').trim();
                  const parts = raw.split(/\s+/).filter(Boolean);
                  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
                  return raw.slice(0, 2).toUpperCase() || <User className="w-10 h-10" />;
                })()}
              </div>
              {isEditingProfile ? (
                <div className="w-full mt-1 flex items-center gap-1.5 bg-indigo-50/70 p-2 rounded-xl border border-indigo-200/80">
                  <input
                    type="text"
                    maxLength={60}
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    placeholder="Your full name"
                    className="flex-1 min-w-0 text-sm bg-white border border-slate-200 px-2.5 py-1 rounded-lg outline-none focus:border-indigo-500 font-medium"
                  />
                  <button
                    type="button"
                    onClick={handleSaveProfileDetails}
                    disabled={isSavingProfile}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-1.5 rounded-lg disabled:opacity-50"
                    title="Save Name"
                  >
                    {isSavingProfile ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setIsEditingProfile(false); setNameInput(profile?.fullName || ''); }}
                    className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
                    title="Cancel"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 justify-center">
                  <h2 className="text-xl font-extrabold text-slate-900">{profile?.fullName}</h2>
                  <button
                    type="button"
                    onClick={() => {
                      setNameInput(profile?.fullName || '');
                      setIsEditingProfile(true);
                    }}
                    className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="Edit name"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              
              <div className="flex items-center gap-2 mt-2 flex-wrap justify-center">
                <span className={`px-3 py-1 text-xs font-extrabold rounded-full ${
                  isPremium
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : isPlanExpired
                    ? 'bg-rose-50 text-rose-700 border border-rose-200'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                }`}>
                  {isPremium ? '👑 Premium Member' : isPlanExpired ? '⏱️ Plan Expired · Free' : '🟢 Active Student'}
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
          <div className={`rounded-3xl shadow-md p-6 text-white relative overflow-hidden ${
            isPlanExpired
              ? 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900'
              : 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800'
          }`}>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Award className="w-36 h-36" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3 gap-2">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-sm ${
                  isPlanExpired
                    ? 'bg-rose-500/20 text-rose-200 border-rose-400/40'
                    : 'bg-white/20 border-white/30'
                }`}>
                  {isPlanExpired
                    ? `${profile?.subscriptionPlan} · EXPIRED`
                    : `${profile?.subscriptionPlan || 'FREE'} PLAN`}
                </span>
                <ShieldCheck className={`w-5 h-5 shrink-0 ${isPlanExpired ? 'text-rose-300' : 'text-emerald-300'}`} />
              </div>

              <h3 className="font-extrabold text-xl mb-1 flex items-center text-white">
                <Award className="w-5 h-5 mr-2 text-amber-300" />
                Current Plan
              </h3>
              <p className="text-indigo-100 text-sm mb-6">
                {isPremium
                  ? 'Full access to AI Roadmaps & Mock Tests'
                  : isPlanExpired
                  ? 'Your subscription has expired. You are currently on the Free tier.'
                  : 'You are currently on the FREE plan.'}
              </p>

              <div className="flex justify-between items-end border-t border-white/20 pt-4">
                <div>
                  <p className={`text-[11px] uppercase tracking-wider font-semibold ${
                    isPlanExpired ? 'text-rose-200' : 'text-indigo-200'
                  }`}>
                    {isPlanExpired ? 'Expired On' : isPremium ? 'Next Billing' : 'Status'}
                  </p>
                  <p className="font-bold text-sm">
                    {profile?.subscribedUntil
                      ? new Date(profile.subscribedUntil).toLocaleDateString()
                      : isPremium
                      ? 'Lifetime'
                      : 'Free Tier'}
                  </p>
                </div>
                <button
                  onClick={() => navigate('/learn/pricing')}
                  className="px-4 py-2 bg-white text-indigo-700 rounded-xl text-xs font-extrabold hover:bg-indigo-50 transition-all shadow-sm hover:scale-105 flex items-center gap-1.5"
                >
                  <span>{isPremium ? 'Manage Plan' : isPlanExpired ? 'Renew Plan' : 'Upgrade to Pro'}</span>
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
                    {profile?.globalRank ?? 'Unranked'}
                  </p>
                  {isPremium && profile?.globalRank && profile.globalRank !== 'Unranked' && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-amber-500/20 text-amber-700 border border-amber-400/40">
                      PRO
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">Leaderboard Rank</p>
                {!profile?.globalRank || profile.globalRank === 'Unranked' ? (
                  <span className="inline-block mt-1 text-[10px] font-medium text-slate-400">
                    Earn XP to qualify
                  </span>
                ) : (
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600">
                    Monthly XP Standing
                  </span>
                )}
              </div>
            </div>
          </div>

          <CompetitiveAnalyticsCard examGoal={profile?.examGoal || ''} testsTaken={profile?.totalTestsTaken || 0} />

          <AdvancedAnalyticsWidget isPremium={isPremium} testsTaken={profile?.totalTestsTaken || 0} examGoal={profile?.examGoal || ''} />

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
                Upgrade / View Plans
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
