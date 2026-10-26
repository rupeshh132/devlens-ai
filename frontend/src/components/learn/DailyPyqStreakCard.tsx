import { useState, useEffect, useMemo } from 'react';
import { 
  Flame, Award, CheckCircle2, 
  Share2, Bookmark, AlertCircle, Calendar
} from 'lucide-react';
import { 
  getStreakData, recordDailyChallengeComplete, 
  saveLockerItem, isItemSaved, subscribeToStreakUpdates,
  getTodayDateString, hasAuthToken, syncPendingDailyChallengeWithBackend, type StreakState
} from '../../lib/lockerStorage';
import { getDailyQuestion, type DailyQuestionItem } from '../../lib/dailyQuestionService';
import { learnApi } from '../../lib/learn-api';
import { toast } from 'sonner';

interface DailyPyqStreakCardProps {
  targetClass?: string;
  onOpenCalendar?: () => void;
}

export function DailyPyqStreakCard({ targetClass = 'Class 11', onOpenCalendar }: DailyPyqStreakCardProps) {
  const [streakData, setStreakData] = useState<StreakState>(() => getStreakData());
  const [savedToLocker, setSavedToLocker] = useState<boolean>(false);
  const [shareCopied, setShareCopied] = useState<boolean>(false);

  // Dynamic question of the day for the student's class
  const todayQuestion: DailyQuestionItem = useMemo(() => {
    return getDailyQuestion(targetClass);
  }, [targetClass]);

  const todayStr = useMemo(() => getTodayDateString(), []);
  const todayRecord = streakData.activityHistory?.[todayStr];
  const isAlreadySolvedToday = streakData.solvedToday || !!todayRecord;

  // If already solved today, show the user's selected option or fallback to correct option
  const [selectedOption, setSelectedOption] = useState<string | null>(() => {
    if (todayRecord?.selectedOption) return todayRecord.selectedOption;
    return isAlreadySolvedToday ? todayQuestion.correctOption : null;
  });
  const [showExplanation, setShowExplanation] = useState<boolean>(() => {
    return isAlreadySolvedToday;
  });

  // Keep streak in sync with global store events
  useEffect(() => {
    const unsubscribe = subscribeToStreakUpdates((latest) => {
      setStreakData(latest);
      const today = getTodayDateString();
      const rec = latest.activityHistory?.[today];
      if (rec && rec.questionId === todayQuestion.id) {
        setSelectedOption(rec.selectedOption || todayQuestion.correctOption);
        setShowExplanation(true);
      } else if (latest.solvedToday && latest.lastSolvedDate === today) {
        setSelectedOption(todayQuestion.correctOption);
        setShowExplanation(true);
      } else {
        setSelectedOption(null);
        setShowExplanation(false);
      }
    });
    return unsubscribe;
  }, [todayQuestion.id, todayQuestion.correctOption]);

  useEffect(() => {
    setSavedToLocker(isItemSaved(todayQuestion.title));
  }, [todayQuestion.title]);

  // Sync state when targetClass or question changes
  useEffect(() => {
    const today = getTodayDateString();
    const rec = streakData.activityHistory?.[today];
    if (rec && rec.questionId === todayQuestion.id) {
      setSelectedOption(rec.selectedOption || todayQuestion.correctOption);
      setShowExplanation(true);
    } else if (streakData.solvedToday && streakData.lastSolvedDate === today && rec?.questionId === todayQuestion.id) {
      setSelectedOption(todayQuestion.correctOption);
      setShowExplanation(true);
    } else if (!streakData.solvedToday || streakData.lastSolvedDate !== today) {
      setSelectedOption(null);
      setShowExplanation(false);
    }
  }, [todayQuestion.id, todayQuestion.correctOption, streakData]);

  // Auto-reconcile un-synced daily challenges with server on mount
  useEffect(() => {
    if (isAlreadySolvedToday && todayRecord && !todayRecord.synced && hasAuthToken()) {
      syncPendingDailyChallengeWithBackend();
    }
  }, [isAlreadySolvedToday, todayRecord]);

  const handleSelectOption = (optId: string) => {
    setSelectedOption(optId);
    setShowExplanation(true);

    const isCorrect = optId === todayQuestion.correctOption;
    const xp = isCorrect ? 50 : 25;

    const res = recordDailyChallengeComplete({
      questionId: todayQuestion.id,
      subject: todayQuestion.subject,
      questionTitle: todayQuestion.title,
      xpEarned: xp,
      selectedOption: optId
    });

    setStreakData(prev => ({
      ...prev,
      streak: res.newStreak,
      longestStreak: res.longestStreak,
      solvedToday: true
    }));

    // Asynchronous Cloud XP Synchronization
    if (hasAuthToken()) {
      learnApi.post('/leaderboard/daily-challenge', {
        questionId: todayQuestion.id,
        subject: todayQuestion.subject,
        questionTitle: todayQuestion.title,
        isCorrect,
        selectedOption: optId
      }).then(response => {
        const data = response.data;
        if (data && typeof data.totalXp === 'number') {
          if (data.awardedXp > 0) {
            toast.success(`⚡ +${data.awardedXp} XP added to your Profile!`);
          }
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('preplens_xp_updated', {
              detail: {
                totalXp: data.totalXp,
                awardedXp: data.awardedXp,
                alreadyAwarded: data.alreadyAwarded
              }
            }));
          }
        }
      }).catch(err => {
        console.warn('Could not sync Daily PYQ XP to server:', err);
      });
    }
  };

  const handleSaveToLocker = () => {
    saveLockerItem({
      type: 'QUESTION',
      title: todayQuestion.title,
      subtitle: `${todayQuestion.subject} — ${todayQuestion.topic}`,
      content: `${todayQuestion.question}\n\n**Correct Answer:** ${todayQuestion.correctOptionLabel}\n\n**Official Explanation:**\n${todayQuestion.explanation}\n\n**CBSE Step Marks:**\n${todayQuestion.stepMarks}`,
      tags: ['Daily PYQ', todayQuestion.subject, todayQuestion.topic, targetClass],
      personalNote: `High-yield ${todayQuestion.subject} question. Trap to remember: ${todayQuestion.commonTrap}`
    });
    setSavedToLocker(true);
  };

  const handleShareStreak = () => {
    const text = `🔥 I just solved today's ${todayQuestion.subject} Question ("${todayQuestion.title}") and reached a ${streakData.streak}-Day Streak on PrepLens Learn! Can you solve today's question?`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    }
  };

  const triggerOpenCalendar = () => {
    if (onOpenCalendar) {
      onOpenCalendar();
    } else if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('preplens_open_streak_modal'));
    }
  };

  return (
    <div data-daily-pyq-card="true" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-7 shadow-xl border border-indigo-800/80">
      {/* Background glow flares */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      {/* Card Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-indigo-800/60">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0">
            <Flame className="w-6 h-6 text-white animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                Daily 1-PYQ Habit Loop
              </span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${
                todayRecord?.xpEarned === 25
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/30'
                  : todayRecord?.xpEarned === 50
                  ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
                  : 'bg-amber-400/20 text-amber-300 border-amber-400/30'
              }`}>
                {todayRecord?.xpEarned ? `+${todayRecord.xpEarned} XP` : '+50 XP'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                {targetClass}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white">
              Question of the Day & Streak
            </h2>
          </div>
        </div>

        {/* Streak Counter Pill (Clickable -> Opens LeetCode Calendar Modal) */}
        <button
          onClick={triggerOpenCalendar}
          type="button"
          title="Click to view full Activity Streak Calendar"
          className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 active:scale-95 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 hover:border-amber-400/40 transition-all text-left cursor-pointer"
        >
          <div className="relative">
            <Flame className={`w-6 h-6 ${streakData.solvedToday ? 'text-amber-400 fill-amber-400 animate-pulse' : 'text-orange-400 fill-orange-400'}`} />
            {streakData.solvedToday && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-black text-white leading-none">
                {streakData.streak} Day{streakData.streak !== 1 ? 's' : ''}
              </span>
              <Calendar className="w-3.5 h-3.5 text-amber-300 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[10px] text-slate-300 font-semibold leading-none mt-1">
              {streakData.solvedToday ? '🔥 Streak Saved Today!' : 'Solve to keep streak'}
            </div>
          </div>
        </button>
      </div>

      {/* Question Content */}
      <div className="relative z-10 pt-4 space-y-4">
        
        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            {todayQuestion.subject}
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-400/30">
            {todayQuestion.topic}
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
            {todayQuestion.marks}
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
            Rotates Daily at 00:00
          </span>
        </div>

        {/* Question Text */}
        <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
          {todayQuestion.question}
        </p>

        {/* MCQ Interactive Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {todayQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = opt.id === todayQuestion.correctOption;
            let btnClass = 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200';

            if (showExplanation) {
              if (isCorrect) {
                btnClass = 'bg-emerald-500/25 border-emerald-400 text-emerald-100 font-bold shadow-lg shadow-emerald-500/10';
              } else if (isSelected && !isCorrect) {
                btnClass = 'bg-rose-500/20 border-rose-400 text-rose-200';
              }
            } else if (isSelected) {
              btnClass = 'bg-blue-600/30 border-blue-400 text-white';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-2.5 ${btnClass}`}
              >
                <span className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {opt.id}
                </span>
                <span className="leading-snug">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation & Marking Scheme Reveal */}
        {showExplanation && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold">
                {selectedOption === todayQuestion.correctOption ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    🎉 Brilliant! Correct Answer! (+50 XP Earned & Streak Saved 🔥)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    💡 Concept Mastered! Streak Saved (+25 XP) | Correct: {todayQuestion.correctOptionLabel}
                  </span>
                )}
              </div>
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="text-xs text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer self-end sm:self-auto"
              >
                Toggle Analysis
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
              {todayQuestion.explanation}
            </p>

            <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-3 text-xs text-blue-200 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-blue-300">
                <Award className="w-3.5 h-3.5" />
                Official CBSE Step Marks:
              </div>
              <p>{todayQuestion.stepMarks}</p>
            </div>

            <div className="bg-rose-500/10 border border-rose-400/20 rounded-xl p-3 text-xs text-rose-200 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <p>{todayQuestion.commonTrap}</p>
            </div>

            {/* Quick Actions after solving */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveToLocker}
                  disabled={savedToLocker}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    savedToLocker
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  {savedToLocker ? 'Saved in Personal Locker' : 'Save to Personal Locker'}
                </button>

                <button
                  onClick={triggerOpenCalendar}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  View Streak Calendar
                </button>
              </div>

              <button
                onClick={handleShareStreak}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm hover:from-amber-600 hover:to-orange-600 transition-all cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                {shareCopied ? 'Streak Copied!' : `Share ${streakData.streak}-Day Streak`}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
