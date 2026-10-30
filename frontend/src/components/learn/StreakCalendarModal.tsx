import { useState, useEffect, useMemo } from 'react';
import { 
  Flame, Trophy, CheckCircle2, Sparkles, 
  ChevronLeft, ChevronRight, X, Calendar as CalendarIcon, 
  Share2, Award, ArrowRight, Zap, RotateCcw
} from 'lucide-react';
import { 
  getStreakData, subscribeToStreakUpdates, 
  getTodayDateString, syncPendingDailyChallengeWithBackend, type StreakState, type DailyActivityRecord 
} from '../../lib/lockerStorage';
import { getQuestionForDate, getQuestionById, type DailyQuestionItem } from '../../lib/dailyQuestionService';

interface StreakCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetClass?: string;
  onSolveTodayClick?: () => void;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function StreakCalendarModal({ 
  isOpen, 
  onClose, 
  targetClass = 'Class 11',
  onSolveTodayClick 
}: StreakCalendarModalProps) {
  const [streakData, setStreakData] = useState<StreakState>(() => getStreakData());
  const todayStr = useMemo(() => getTodayDateString(), []);
  
  // Date navigator: starts on current month & year
  const [viewDate, setViewDate] = useState(() => new Date());
  
  // Selected day in calendar to inspect (defaults to today)
  const [selectedDateStr, setSelectedDateStr] = useState<string>(todayStr);
  const [shareCopied, setShareCopied] = useState(false);

  // Whenever modal opens or mounts, always re-fetch the latest storage state
  useEffect(() => {
    if (isOpen) {
      const fresh = getStreakData();
      setStreakData(fresh);
      const today = getTodayDateString();
      setSelectedDateStr(today);
      setViewDate(new Date());
      // Reconcile any uncommitted Daily PYQ XP with backend database
      syncPendingDailyChallengeWithBackend();
    }
  }, [isOpen]);

  // Keep synced with any background storage updates
  useEffect(() => {
    const unsub = subscribeToStreakUpdates((latest) => {
      setStreakData(latest);
    });
    return unsub;
  }, []);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Real XP sum from history records
  const totalXp = useMemo(() => {
    let sum = 0;
    if (streakData.activityHistory) {
      Object.values(streakData.activityHistory).forEach((rec: DailyActivityRecord) => {
        sum += (typeof rec.xpEarned === 'number' ? rec.xpEarned : 50);
      });
    }
    if (streakData.solvedToday && !streakData.activityHistory?.[todayStr]) {
      sum += 25;
    }
    return sum;
  }, [streakData, todayStr]);

  if (!isOpen) return null;

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();

  const realNow = new Date();
  const currentRealYear = realNow.getFullYear();
  const currentRealMonth = realNow.getMonth();
  const isViewingCurrentMonth = currentYear === currentRealYear && currentMonth === currentRealMonth;

  const handlePrevMonth = () => {
    const nextDate = new Date(currentYear, currentMonth - 1, 1);
    setViewDate(nextDate);
    const nextY = nextDate.getFullYear();
    const nextM = nextDate.getMonth();
    if (nextY === currentRealYear && nextM === currentRealMonth) {
      setSelectedDateStr(todayStr);
    } else {
      setSelectedDateStr(`${nextY}-${String(nextM + 1).padStart(2, '0')}-01`);
    }
  };

  const handleNextMonth = () => {
    const nextDate = new Date(currentYear, currentMonth + 1, 1);
    setViewDate(nextDate);
    const nextY = nextDate.getFullYear();
    const nextM = nextDate.getMonth();
    if (nextY === currentRealYear && nextM === currentRealMonth) {
      setSelectedDateStr(todayStr);
    } else {
      setSelectedDateStr(`${nextY}-${String(nextM + 1).padStart(2, '0')}-01`);
    }
  };

  const handleJumpToToday = () => {
    const todayNow = new Date();
    setViewDate(todayNow);
    setSelectedDateStr(todayStr);
  };

  // Calendar matrix calculations
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sun

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanksArray = Array.from({ length: firstDayIndex }, (_, i) => i);

  // Selected date details
  const selectedRecord: DailyActivityRecord | undefined = streakData.activityHistory?.[selectedDateStr];
  const questionFromRecord = selectedRecord?.questionId ? getQuestionById(selectedRecord.questionId) : undefined;
  const selectedQuestion: DailyQuestionItem = questionFromRecord || getQuestionForDate(selectedDateStr, targetClass);
  const isSelectedDateSolved = !!selectedRecord || (streakData.solvedToday && selectedDateStr === todayStr);
  const isSelectedDateToday = selectedDateStr === todayStr;
  const isSelectedDateFuture = selectedDateStr > todayStr;

  // Real consistent metrics (purging any legacy dummy values)
  const totalActiveDays = Object.keys(streakData.activityHistory || {}).length + (streakData.solvedToday && !streakData.activityHistory?.[todayStr] ? 1 : 0);
  const displayLongestStreak = totalActiveDays > 0 ? Math.max(streakData.longestStreak, streakData.streak) : streakData.streak;
  
  const handleShareStreak = () => {
    const text = `🔥 My PrepLens ${targetClass} PYQ Streak:\n• Current Streak: ${streakData.streak} Days\n• Longest Streak: ${displayLongestStreak} Days\n• Total Active Days: ${totalActiveDays}\n• Habit XP: +${totalXp} XP\nCan you beat my streak? 🚀`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    }
  };

  const handleSolveTodayAction = () => {
    onClose();
    if (onSolveTodayClick) {
      onSolveTodayClick();
    }
    setTimeout(() => {
      const card = document.querySelector('[data-daily-pyq-card]');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog (Max-H constrained with internal scrolling) */}
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-indigo-900/60 rounded-3xl max-w-xl md:max-w-2xl w-full max-h-[92vh] shadow-2xl overflow-hidden flex flex-col text-white my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

        {/* 1. Modal Top Bar (Fixed Header) */}
        <div className="relative z-10 shrink-0 flex items-center justify-between px-5 sm:px-6 py-4 border-b border-indigo-900/40 bg-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  Daily Activity & Streak Calendar
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {targetClass} PYQs
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Track daily consistency, solved PYQs, and habit milestones
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2. Four Hero Stats Strip (Fixed Header) */}
        <div className="relative z-10 shrink-0 grid grid-cols-2 sm:grid-cols-4 gap-2.5 px-5 sm:px-6 py-3 bg-white/[0.02] border-b border-indigo-900/40">
          
          {/* Current Streak */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold text-slate-400 truncate">Current Streak</div>
              <div className="text-base font-black text-white leading-tight">
                {streakData.streak} <span className="text-[10px] font-normal text-slate-400">Days</span>
              </div>
            </div>
          </div>

          {/* Longest Streak */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 flex items-center justify-center shrink-0">
              <Trophy className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold text-slate-400 truncate">Longest Record</div>
              <div className="text-base font-black text-white leading-tight">
                {displayLongestStreak} <span className="text-[10px] font-normal text-slate-400">Days</span>
              </div>
            </div>
          </div>

          {/* Total Solved Days */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold text-slate-400 truncate">Total Active</div>
              <div className="text-base font-black text-white leading-tight">
                {totalActiveDays} <span className="text-[10px] font-normal text-slate-400">Days</span>
              </div>
            </div>
          </div>

          {/* Streak XP */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold text-slate-400 truncate">Habit XP</div>
              <div className="text-base font-black text-white leading-tight">
                +{totalXp} <span className="text-[10px] font-normal text-slate-400">XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Middle Scrollable Content (Calendar Grid & Selected Date Details) */}
        <div className="relative z-10 flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-4 [scrollbar-width:thin] [scrollbar-color:rgba(99,102,241,0.3)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-700/60 [&::-webkit-scrollbar-thumb:hover]:bg-slate-600 [&::-webkit-scrollbar-track]:bg-transparent">
          
          {/* Month Header Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <h4 className="text-base sm:text-lg font-black text-white">
                {MONTH_NAMES[currentMonth]} {currentYear}
              </h4>
              {/* Only show "Jump to Today" when user has navigated to a different month! */}
              {!isViewingCurrentMonth && (
                <button
                  onClick={handleJumpToToday}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition-all cursor-pointer shadow-xs active:scale-95 animate-in fade-in"
                  title="Jump back to current month and today's date"
                >
                  <RotateCcw className="w-3 h-3" />
                  Jump to Today ({new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })})
                </button>
              )}
            </div>

            <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
              <button
                onClick={handlePrevMonth}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextMonth}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Calendar Grid Container */}
          <div className="bg-slate-950/70 rounded-2xl p-3 sm:p-4 border border-indigo-950/90 shadow-inner">
            {/* Weekday Labels */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-2 text-center">
              {WEEKDAY_NAMES.map((d) => (
                <div key={d} className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 uppercase tracking-wider py-0.5">
                  {d}
                </div>
              ))}
            </div>

            {/* Days Matrix */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {/* Blank filler cells */}
              {blanksArray.map((_, i) => (
                <div key={`blank-${i}`} className="h-9 sm:h-10 rounded-xl" />
              ))}

              {/* Real month days */}
              {daysArray.map((day) => {
                const dayMonthStr = String(currentMonth + 1).padStart(2, '0');
                const dayStr = String(day).padStart(2, '0');
                const cellDateStr = `${currentYear}-${dayMonthStr}-${dayStr}`;
                
                const isToday = cellDateStr === todayStr;
                const isSelected = cellDateStr === selectedDateStr;
                const isSolved = !!streakData.activityHistory?.[cellDateStr] || (streakData.solvedToday && isToday);
                const isFuture = cellDateStr > todayStr;
                const isPastMissed = !isSolved && cellDateStr < todayStr;

                let cellClass = 'bg-slate-800/40 text-slate-300 border border-slate-700/50 hover:bg-slate-700/60 hover:text-white';

                if (isSolved) {
                  cellClass = 'bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 text-white font-black shadow-md shadow-orange-500/25 border border-amber-300/60 hover:scale-105 active:scale-95';
                } else if (isToday) {
                  cellClass = 'bg-amber-500/20 border-2 border-amber-400 text-amber-300 font-extrabold shadow-md shadow-amber-500/20 ring-2 ring-amber-400/25 animate-pulse hover:bg-amber-500/30';
                } else if (isPastMissed) {
                  cellClass = 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:bg-slate-800/60 hover:text-slate-200';
                } else if (isFuture) {
                  cellClass = 'bg-slate-950/40 text-slate-600 border border-slate-900/40 cursor-default opacity-40';
                }

                if (isSelected) {
                  cellClass += ' ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-950 scale-105 z-10';
                }

                const cellRecord = streakData.activityHistory?.[cellDateStr];
                const cellXp = cellRecord?.xpEarned || 50;

                return (
                  <button
                    key={cellDateStr}
                    type="button"
                    onClick={() => setSelectedDateStr(cellDateStr)}
                    className={`h-9 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-semibold transition-all relative cursor-pointer ${cellClass}`}
                    title={`${cellDateStr}: ${isSolved ? `Solved (+${cellXp} XP) 🔥` : isToday ? "Today's Pending Challenge" : isPastMissed ? 'Missed' : 'Upcoming'}`}
                  >
                    <span>{day}</span>
                    {isSolved && (
                      <Flame className="w-2.5 h-2.5 text-yellow-200 fill-yellow-200 absolute bottom-1 right-1" />
                    )}
                    {isToday && !isSolved && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Clean Legend Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3 mt-3 border-t border-white/5 text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-gradient-to-tr from-amber-500 to-orange-500 border border-amber-300/50 inline-flex items-center justify-center">
                  <Flame className="w-2 h-2 text-white fill-white" />
                </span>
                Solved & Streak Saved
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-amber-500/20 border border-amber-400 inline-block" />
                Today (Pending)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-slate-900/80 border border-slate-800 inline-block" />
                Past Missed
              </span>
              <span className="flex items-center gap-1.5 opacity-60">
                <span className="w-3 h-3 rounded-md bg-slate-950/40 border border-slate-900 inline-block" />
                Upcoming
              </span>
            </div>
          </div>

          {/* Selected Date Inspector Card (Compact & Interactive) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 sm:p-4 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  {new Date(selectedDateStr + 'T00:00:00').toLocaleDateString(undefined, {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                {isSelectedDateToday && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    TODAY
                  </span>
                )}
              </div>

              {/* Status Badge */}
              {isSelectedDateSolved ? (
                selectedRecord?.xpEarned === 25 ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    <CheckCircle2 className="w-3 h-3 text-amber-400" />
                    Streak Saved (+25 XP)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Completed (+{selectedRecord?.xpEarned || 50} XP)
                  </span>
                )
              ) : isSelectedDateToday ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-400/30 animate-pulse">
                  <Zap className="w-3 h-3" />
                  Pending Challenge
                </span>
              ) : isSelectedDateFuture ? (
                <span className="text-[11px] font-semibold text-slate-500">
                  Upcoming Challenge
                </span>
              ) : (
                <span className="text-[11px] font-semibold text-rose-400/80">
                  Missed Day
                </span>
              )}
            </div>

            {/* Question Details for that day */}
            <div className="bg-slate-950/50 rounded-xl p-3 border border-white/5 space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/20">
                  {selectedQuestion.subject}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedQuestion.topic}
                </span>
                {selectedRecord?.xpEarned && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    selectedRecord.xpEarned === 50
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                  }`}>
                    +{selectedRecord.xpEarned} XP
                  </span>
                )}
              </div>
              <h5 className="text-xs sm:text-sm font-bold text-slate-200">
                {selectedQuestion.title}
              </h5>
              <p className="text-xs text-slate-400 line-clamp-2">
                {selectedQuestion.question}
              </p>
            </div>

            {/* Action Button if today is pending */}
            {isSelectedDateToday && !isSelectedDateSolved && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                <p className="text-xs text-amber-300/90 font-medium">
                  Solve today's question on your dashboard to save your streak!
                </p>
                <button
                  onClick={handleSolveTodayAction}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-orange-500/25 transition-all cursor-pointer shrink-0 active:scale-95"
                >
                  Solve Today's PYQ (+50 XP)
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>

        {/* 4. Modal Footer / Bottom Bar (Fixed Footer) */}
        <div className="relative z-10 shrink-0 px-5 sm:px-6 py-3 bg-slate-950/90 border-t border-indigo-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2 text-slate-400 min-w-0">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">
              <strong className="text-slate-200">Daily Habit:</strong> 1 question daily compounds into 365 CBSE PYQs mastered per year.
            </span>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              onClick={handleShareStreak}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              {shareCopied ? 'Stats Copied!' : 'Share Streak'}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
