import { useState, useEffect } from 'react';
import { Target, BookOpen, Loader2, Sparkles, AlertCircle, CheckCircle2, Clock, Lock } from 'lucide-react';
import { learnApi } from '../../../lib/learn-api';
import { usePremium } from '../../../hooks/usePremium';
import { PaywallModal } from '../../../components/learn/PaywallModal';
import { DailyPyqStreakCard } from '../../../components/learn/DailyPyqStreakCard';
import { normalizeTargetClass } from '../../../lib/dailyQuestionService';

interface RoadmapTask {
  id: string;
  title: string;
  completed: boolean;
}

interface RoadmapModule {
  module_name: string;
  duration: string;
  tasks: RoadmapTask[];
}

interface MasterRoadmapResponse {
  plan_title: string;
  estimated_duration: string;
  modules: RoadmapModule[];
}

export function StudyPlanDashboard() {
  // Always initialize plan as null - NEVER read from localStorage
  const [plan, setPlan] = useState<MasterRoadmapResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dailyHours, setDailyHours] = useState('2');
  const [paywallOpen, setPaywallOpen] = useState(false);
  const { isPremium, loading: premiumLoading } = usePremium();
  const [examGoal, setExamGoal] = useState<string>(() => localStorage.getItem('learn_exam_goal') || 'Class 11');

  // Purge any stale client-side roadmap cache on mount
  useEffect(() => {
    localStorage.removeItem('learn_study_plan');
  }, []);

  // Fetch real examGoal from server
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await learnApi.get('/profile');
        if (res.data?.examGoal) setExamGoal(res.data.examGoal);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProfile();
  }, []);

  // Fetch plan ONLY for paid users
  useEffect(() => {
    if (!isPremium) {
      setPlan(null);
      return;
    }

    const fetchPlan = async () => {
      setLoading(true);
      try {
        const res = await learnApi.get('/profile/study-plan');
        if (res.data) {
          const serverPlan = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
          setPlan(serverPlan);
        }
      } catch (err: any) {
        if (err.response?.status !== 403 && err.response?.status !== 404) {
          console.error('Error fetching study plan', err);
        }
        setPlan(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [isPremium]);

  const generatePlan = async () => {
    if (!isPremium) {
      setPaywallOpen(true);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await learnApi.post('/ai/study-plan/generate', {
        weakTopics: '',
        strongTopics: '',
        dailyHours: dailyHours,
      });
      const newPlan = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
      setPlan(newPlan);
    } catch (err: any) {
      if (err.response?.status === 403) {
        setPaywallOpen(true);
      } else {
        setError(err.response?.data?.message || 'Failed to generate study plan. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (moduleIndex: number, taskId: string) => {
    if (!plan) return;

    const newPlan = { ...plan };
    const task = newPlan.modules[moduleIndex].tasks.find((t) => t.id === taskId);
    if (task) {
      const prevCompleted = task.completed;
      task.completed = !task.completed;
      setPlan(newPlan);

      try {
        await learnApi.put('/profile/study-plan/task', {
          taskId: taskId,
          completed: task.completed,
        });
      } catch (err) {
        console.error('Failed to sync progress to server', err);
        task.completed = prevCompleted;
        setPlan({ ...newPlan });
      }
    }
  };

  // Calculate progress
  let totalTasks = 0;
  let completedTasks = 0;
  if (plan && plan.modules) {
    plan.modules.forEach((m) => {
      if (m.tasks) {
        totalTasks += m.tasks.length;
        completedTasks += m.tasks.filter((t) => t.completed).length;
      }
    });
  }
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const isValidPlan = plan && Array.isArray(plan.modules);

  const resetPlan = () => {
    if (!isPremium) {
      setPaywallOpen(true);
      return;
    }
    if (confirm('Are you sure you want to reset your roadmap? All progress will be lost.')) {
      setPlan(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        featureName="AI Master Roadmaps (Pro)"
        featureDescription="Upgrade to Pro to unlock personalized AI syllabus roadmaps, weekly auto-healing schedules, and progress tracking for your target exam."
      />

      {/* Daily 1-PYQ Habit & Streak Challenge */}
      <DailyPyqStreakCard targetClass={normalizeTargetClass(examGoal || 'Class 11')} />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Master Syllabus Roadmap</h1>
          <p className="text-slate-600 mt-2">Your personalized path to mastering {examGoal}.</p>
        </div>
        {isPremium && isValidPlan && (
          <button
            onClick={resetPlan}
            className="text-sm font-medium text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
          >
            Reset & Re-generate Roadmap
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Free User Locked State */}
      {!premiumLoading && !isPremium && (
        <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm text-center max-w-2xl mx-auto my-12">
          <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-200">
            <Lock className="w-8 h-8 text-amber-600" />
          </div>
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Pro Feature
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Study Plan is available on Pro
          </h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
            AI-generated Master Roadmap, auto-healing daily study schedule, and topic-wise progress tracking for <strong className="text-slate-900">{examGoal}</strong> are exclusively available to Pro members.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Full syllabus breakdown tailored to {examGoal}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Milestone tracking and per-task completion sync</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Adaptive rescheduling whenever you miss study days</span>
            </div>
          </div>

          <button
            onClick={() => setPaywallOpen(true)}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            Upgrade to Pro
          </button>
        </div>
      )}

      {/* Paid User Content */}
      {isPremium && (
        <>
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Target Goal</p>
                <p className="text-xl font-bold text-slate-900">{examGoal}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-4 bg-emerald-50 rounded-xl">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Roadmap Progress</p>
                <p className="text-xl font-bold text-slate-900">{progressPercent}% Completed</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="p-4 bg-purple-50 rounded-xl">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Estimated Duration</p>
                <p className="text-xl font-bold text-slate-900">{isValidPlan ? plan.estimated_duration : 'N/A'}</p>
              </div>
            </div>
          </div>

          {isValidPlan && totalTasks > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-700">Overall Progress</span>
                <span className="font-bold text-blue-600">{completedTasks} / {totalTasks} Tasks</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          )}

          {/* Plan Render */}
          {isValidPlan && (
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">{plan.plan_title}</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {plan.modules?.map((mod, modIdx) => (
                  <div key={modIdx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-slate-900">{mod.module_name}</h3>
                      <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">{mod.duration}</span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {mod.tasks?.map((task) => (
                        <li
                          key={task.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${task.completed ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200 hover:border-blue-300'}`}
                          onClick={() => toggleTask(modIdx, task.id)}
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            {task.completed ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                            )}
                          </div>
                          <span className={`text-sm leading-snug ${task.completed ? 'text-slate-500 line-through' : 'text-slate-700 font-medium'}`}>
                            {task.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Plan Generated Yet: Show Generator for Paid Users */}
          {!isValidPlan && !loading && (
            <div className="mt-12 bg-white border border-slate-200 shadow-sm rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <Sparkles className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Create Your Master Roadmap</h3>
              <p className="text-slate-500 mb-8">
                Tell us how much time you can dedicate daily, and our AI will generate a comprehensive syllabus roadmap tailored to {examGoal}.
              </p>

              <div className="max-w-xs mx-auto space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 text-left">Daily Study Hours Available</label>
                  <select
                    value={dailyHours}
                    onChange={(e) => setDailyHours(e.target.value)}
                    className="w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50 p-3 outline-none border"
                  >
                    <option value="1">1 Hour / Day</option>
                    <option value="2">2 Hours / Day</option>
                    <option value="3">3 Hours / Day</option>
                    <option value="4">4+ Hours / Day</option>
                  </select>
                </div>

                <button
                  onClick={generatePlan}
                  disabled={loading}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-75"
                >
                  {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : 'Generate Master Roadmap'}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}