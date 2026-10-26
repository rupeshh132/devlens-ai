import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Flame, Timer, Award, Clock, Users } from 'lucide-react';
import { learnApi } from '../../lib/learn-api';
import { toast } from 'sonner';

const FOCUS_SESSION_STORAGE_KEY = 'preplens_active_focus_session';

// Peaceful 3-tone synthesizer chime via Web Audio API (C5 -> E5 -> G5)
const playCompletionChime = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const playTone = (freq: number, start: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
      gain.gain.setValueAtTime(0.12, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + duration);
    };

    playTone(523.25, 0, 0.35);      // C5
    playTone(659.25, 0.18, 0.35);   // E5
    playTone(783.99, 0.36, 0.75);   // G5
  } catch (e) {
    // Ignore if audio restricted by browser autoplay policy
  }
};

const saveSessionSnapshot = (data: {
  isActive: boolean;
  isPaused: boolean;
  selectedDurationMins: number;
  timeRemaining: number;
  isStrictMode: boolean;
  strictModeFailed: boolean;
  targetEndTime: number | null;
}) => {
  try {
    if (!data.isActive) {
      localStorage.removeItem(FOCUS_SESSION_STORAGE_KEY);
    } else {
      localStorage.setItem(FOCUS_SESSION_STORAGE_KEY, JSON.stringify(data));
    }
  } catch (e) {}
};

export function FocusTimerWidget() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedDurationMins, setSelectedDurationMins] = useState(25);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Strict Mode State & Toggle
  const [isStrictMode, setIsStrictMode] = useState(false);
  const [strictModeFailed, setStrictModeFailed] = useState(false);
  const graceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Live Stats State
  const [liveCount, setLiveCount] = useState(1);
  const [liveNames, setLiveNames] = useState<string[]>([]);
  
  const lastActivityRef = useRef<number>(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Restore session from localStorage on mount (survives F5 / page reload)
  useEffect(() => {
    try {
      const savedRaw = localStorage.getItem(FOCUS_SESSION_STORAGE_KEY);
      if (!savedRaw) return;
      const saved = JSON.parse(savedRaw);
      if (saved && saved.isActive) {
        setSelectedDurationMins(saved.selectedDurationMins || 25);
        setIsStrictMode(!!saved.isStrictMode);
        setStrictModeFailed(!!saved.strictModeFailed);

        if (saved.isPaused) {
          setIsActive(true);
          setIsPaused(true);
          setTimeRemaining(saved.timeRemaining || 25 * 60);
        } else if (saved.targetEndTime) {
          const now = Date.now();
          const remaining = Math.floor((saved.targetEndTime - now) / 1000);
          if (remaining > 0) {
            setIsActive(true);
            setIsPaused(false);
            setTimeRemaining(remaining);
          } else {
            // Finished while away!
            localStorage.removeItem(FOCUS_SESSION_STORAGE_KEY);
            const wasStrict = saved.isStrictMode && !saved.strictModeFailed;
            logSessionToBackend(saved.selectedDurationMins, 'FOCUS_TIMER', wasStrict);
            playCompletionChime();
          }
        }
      }
    } catch (e) {
      localStorage.removeItem(FOCUS_SESSION_STORAGE_KEY);
    }
  }, []);

  // Focus Timer Logic with Anti-AFK (Idle) Detection & Periodic State Sync
  useEffect(() => {
    if (isActive && !isPaused && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        // Anti-Cheat: If user is inactive for 5 minutes (no mouse/keyboard), pause the timer!
        if (Date.now() - lastActivityRef.current > 5 * 60 * 1000) {
            setIsPaused(true);
            saveSessionSnapshot({
              isActive: true,
              isPaused: true,
              selectedDurationMins,
              timeRemaining,
              isStrictMode,
              strictModeFailed,
              targetEndTime: null
            });
            toast.error("Timer Paused 💤 Are you still studying? You went AFK!");
        } else {
            setTimeRemaining((prev) => {
              const next = prev - 1;
              // Sync to localStorage every 5 seconds
              if (next % 5 === 0) {
                saveSessionSnapshot({
                  isActive: true,
                  isPaused: false,
                  selectedDurationMins,
                  timeRemaining: next,
                  isStrictMode,
                  strictModeFailed,
                  targetEndTime: Date.now() + next * 1000
                });
              }
              return next;
            });
        }
      }, 1000);
    } else if (isActive && timeRemaining === 0) {
      handleCompleteFocusSession();
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, isPaused, timeRemaining, selectedDurationMins, isStrictMode, strictModeFailed]);
  
  // Strict Mode Visibility Tracking (with 5-second Grace Window)
  useEffect(() => {
    const handleVisibility = async () => {
      // If Strict Mode is OFF, tab switching is completely safe!
      if (!isStrictMode || !isActive || isPaused || strictModeFailed) return;

      if (document.hidden) {
        // Tab hidden: Start 5-second grace window before penalty
        toast.warning("⚠️ Warning: Leaving this tab will break focus in 5 seconds!", {
          id: 'focus-grace-toast',
          duration: 5000,
        });

        graceTimerRef.current = setTimeout(async () => {
          setStrictModeFailed(true);
          try {
            await learnApi.post('/analytics/session/penalty');
            toast.error("Focus Broken! 💔 Switched tabs for >5s. -20 XP Penalty & 1.5x Multiplier lost!");
          } catch (e) {
            toast.error("Focus Broken! 💔 Switched tabs for >5s. 1.5x Multiplier lost!");
          }
        }, 5000);
      } else {
        // Returned before 5 seconds!
        if (graceTimerRef.current) {
          clearTimeout(graceTimerRef.current);
          graceTimerRef.current = null;
          toast.dismiss('focus-grace-toast');
          toast.success("Focus saved! Stay on this tab to protect your 1.5x boost.", { duration: 3000 });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      if (graceTimerRef.current) clearTimeout(graceTimerRef.current);
    };
  }, [isActive, isPaused, strictModeFailed, isStrictMode]);

  // Live Stats Polling
  useEffect(() => {
    const fetchLiveStats = async () => {
      if (!isActive && !isExpanded) return;
      try {
        await learnApi.post('/analytics/session/ping');
        const res = await learnApi.get('/analytics/session/live-stats');
        if (res.data) {
          setLiveCount(res.data.activeCount);
          setLiveNames(res.data.activeNames || []);
        }
      } catch (e) {
        // silently fail
      }
    };
    
    fetchLiveStats();
    const interval = setInterval(fetchLiveStats, 30000);
    return () => clearInterval(interval);
  }, [isActive, isExpanded]);

  // Activity Tracking for AFK Detection during Active Focus Session
  useEffect(() => {
    const handleActivity = () => {
      lastActivityRef.current = Date.now();
    };
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);
    
    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, []);

  const logSessionToBackend = async (minutes: number, type: 'FOCUS_TIMER', wasStrict: boolean) => {
    try {
      const response = await learnApi.post('/analytics/session/log', {
        durationMinutes: minutes,
        sessionType: type,
        wasStrict: wasStrict
      });
      if (wasStrict) {
        toast.success('🎉 +' + response.data.earnedXp + ' XP! Perfect Deep Focus Session (1.5x Multiplier)!');
      } else if (isStrictMode && strictModeFailed) {
        toast.success('+' + response.data.earnedXp + ' XP. Session completed, but strict multiplier was lost.');
      } else {
        toast.success('+' + response.data.earnedXp + ' XP. Study session completed!');
      }
      window.dispatchEvent(new Event('study_session_logged'));
    } catch (error) {
      console.error('Failed to log session', error);
    }
  };

  const setDuration = (mins: number) => {
    if (isActive && !isPaused) return; 
    setSelectedDurationMins(mins);
    setTimeRemaining(mins * 60);
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    lastActivityRef.current = Date.now(); // reset activity when manually playing
    const resetFailed = timeRemaining === selectedDurationMins * 60;
    if (resetFailed) {
      setStrictModeFailed(false); // reset strict mode on fresh start
    }
    saveSessionSnapshot({
      isActive: true,
      isPaused: false,
      selectedDurationMins,
      timeRemaining,
      isStrictMode,
      strictModeFailed: resetFailed ? false : strictModeFailed,
      targetEndTime: Date.now() + timeRemaining * 1000
    });
  };

  const handlePause = () => {
    setIsPaused(true);
    saveSessionSnapshot({
      isActive: true,
      isPaused: true,
      selectedDurationMins,
      timeRemaining,
      isStrictMode,
      strictModeFailed,
      targetEndTime: null
    });
  };

  const handleStop = () => {
    // Partial Credit logic: If active and user focused for >= 5 minutes, award partial XP!
    const elapsedSeconds = (selectedDurationMins * 60) - timeRemaining;
    const elapsedMins = Math.floor(elapsedSeconds / 60);

    if (isActive && elapsedMins >= 5) {
      const wasStrictSuccess = isStrictMode && !strictModeFailed;
      logSessionToBackend(elapsedMins, 'FOCUS_TIMER', wasStrictSuccess);
      toast.info(`Early stop: Saved ${elapsedMins} mins of study XP! 🎯`);
    }

    setIsActive(false);
    setIsPaused(false);
    if (graceTimerRef.current) {
      clearTimeout(graceTimerRef.current);
      graceTimerRef.current = null;
      toast.dismiss('focus-grace-toast');
    }
    setTimeRemaining(selectedDurationMins * 60);
    setStrictModeFailed(false);
    saveSessionSnapshot({
      isActive: false,
      isPaused: false,
      selectedDurationMins,
      timeRemaining: selectedDurationMins * 60,
      isStrictMode,
      strictModeFailed: false,
      targetEndTime: null
    });
  };

  const handleCompleteFocusSession = () => {
    setIsActive(false);
    if (graceTimerRef.current) {
      clearTimeout(graceTimerRef.current);
      graceTimerRef.current = null;
      toast.dismiss('focus-grace-toast');
    }
    playCompletionChime();
    const wasStrictSuccess = isStrictMode && !strictModeFailed;
    logSessionToBackend(selectedDurationMins, 'FOCUS_TIMER', wasStrictSuccess);
    setTimeRemaining(selectedDurationMins * 60);
    setStrictModeFailed(false);
    saveSessionSnapshot({
      isActive: false,
      isPaused: false,
      selectedDurationMins,
      timeRemaining: selectedDurationMins * 60,
      isStrictMode,
      strictModeFailed: false,
      targetEndTime: null
    });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0');
  };

  if (!isExpanded) {
    return (
      <div 
        onClick={() => setIsExpanded(true)}
        className={"fixed bottom-6 left-6 text-white rounded-full p-4 shadow-xl cursor-pointer transition-all z-50 flex items-center gap-2 group " + (strictModeFailed ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700')}
      >
        <Timer className="w-6 h-6" />
        {isActive && <span className="font-mono font-bold pr-2">{formatTime(timeRemaining)}</span>}
        <div className="absolute left-full ml-4 bg-gray-900 text-white px-3 py-1.5 rounded text-sm opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
          {isActive ? 'Timer Running' : 'Focus Mode'}
        </div>
      </div>
    );
  }

  const btnClass = isActive ? 'bg-rose-100 text-rose-600 hover:bg-rose-200' : 'bg-slate-100 text-slate-400';
  const durations = [15, 25, 50, 120];

  return (
    <div className="fixed bottom-6 left-6 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in slide-in-from-bottom-5">
      <div className={"p-4 text-white flex justify-between items-center cursor-pointer " + (strictModeFailed ? 'bg-red-500' : isStrictMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-indigo-600')} onClick={() => setIsExpanded(false)}>
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-200" />
          <h3 className="font-bold">PrepLens Focus Mode</h3>
        </div>
        <button className="hover:bg-black/20 p-1 rounded-md text-sm transition-colors">Close</button>
      </div>
      
      <div className="p-5 text-center relative">
        
        {/* Live Together Ticker */}
        <div className="absolute top-2 left-0 w-full flex justify-center">
            <div className="bg-slate-100 rounded-full px-3 py-1 flex items-center gap-2 shadow-sm border border-slate-200">
                <div className="flex -space-x-1.5">
                    {liveNames.slice(0, 3).map((n, i) => (
                        <img key={i} src={"https://api.dicebear.com/7.x/initials/svg?seed=" + n} className="w-5 h-5 rounded-full border border-white" alt="avatar" />
                    ))}
                    {liveNames.length === 0 && (
                        <Users className="w-4 h-4 text-slate-500 ml-1" />
                    )}
                </div>
                <span className="text-[10px] font-bold text-slate-600 tracking-wide uppercase">
                    {liveCount} {liveCount === 1 ? 'student' : 'students'} focusing
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
            </div>
        </div>

        <div className="mt-8 mb-4">
            {!isActive ? (
            <div className="flex flex-col gap-2.5">
                <div className="flex justify-center gap-2">
                    {durations.map(m => (
                    <button 
                        key={m}
                        onClick={() => setDuration(m)}
                        className={"px-3 py-1 text-xs font-bold rounded-full transition-colors " + (selectedDurationMins === m ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}
                    >
                        {m}m
                    </button>
                    ))}
                </div>

                {/* Strict Mode Toggle Switch */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="flex items-center gap-2 text-left">
                        <Flame className={`w-4 h-4 ${isStrictMode ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
                        <div>
                            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                                Strict Mode
                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-black uppercase ${isStrictMode ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-slate-200 text-slate-600'}`}>
                                    {isStrictMode ? '1.5x Boost' : 'Standard'}
                                </span>
                            </div>
                            <div className="text-[10px] text-slate-500">
                                {isStrictMode ? '5s grace window if you leave tab' : 'Tab switching allowed without penalty'}
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsStrictMode(!isStrictMode)}
                        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${isStrictMode ? 'bg-amber-500' : 'bg-slate-300'}`}
                    >
                        <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${isStrictMode ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                </div>
            </div>
            ) : (
                <div className="flex items-center justify-center">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5 ${isStrictMode ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                        <Flame className={`w-3.5 h-3.5 ${isStrictMode ? 'text-amber-500 fill-amber-500' : 'text-blue-500'}`} />
                        {isStrictMode ? 'Strict Mode (1.5x Boost Active)' : 'Standard Focus (Tab Switch Allowed)'}
                    </span>
                </div>
            )}
        </div>

        <div className={"text-5xl font-extrabold font-mono mb-6 tracking-tight flex items-center justify-center gap-3 " + (strictModeFailed ? 'text-red-500' : 'text-slate-800')}>
          <Clock className={"w-8 h-8 opacity-50 " + (strictModeFailed ? 'text-red-300' : 'text-indigo-400')} />
          {formatTime(timeRemaining)}
        </div>
        
        <div className="flex justify-center gap-4 mb-6">
          {!isActive || isPaused ? (
            <button onClick={handleStart} className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-200 transition-colors">
              <Play className="w-5 h-5 ml-1" />
            </button>
          ) : (
            <button onClick={handlePause} className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-colors">
              <Pause className="w-5 h-5" />
            </button>
          )}
          
          <button onClick={handleStop} disabled={!isActive} className={"w-12 h-12 rounded-full flex items-center justify-center transition-colors " + btnClass}>
            <Square className="w-4 h-4" />
          </button>
        </div>
        
        <div className={"rounded-xl p-3 flex items-start gap-3 text-left transition-colors " + (strictModeFailed ? 'bg-red-50 border border-red-200' : isStrictMode ? 'bg-amber-50/70 border border-amber-200/80' : 'bg-indigo-50 border border-indigo-100')}>
          <Award className={"w-5 h-5 shrink-0 mt-0.5 " + (strictModeFailed ? 'text-red-500' : isStrictMode ? 'text-amber-600' : 'text-indigo-600')} />
          <div>
            <p className={"text-sm font-semibold " + (strictModeFailed ? 'text-red-800' : isStrictMode ? 'text-amber-900' : 'text-indigo-900')}>
                {strictModeFailed ? 'Focus Broken' : isStrictMode ? 'Deep Focus (High Stakes)' : 'Standard Study Session'}
            </p>
            <p className={"text-xs mt-0.5 " + (strictModeFailed ? 'text-red-600' : isStrictMode ? 'text-amber-700' : 'text-indigo-700')}>
                {strictModeFailed 
                    ? 'Multiplier lost due to tab switch. Restart timer to try again.' 
                    : isStrictMode
                        ? `Complete ${selectedDurationMins} mins without switching tabs for a 1.5x XP Boost (+${Math.round(selectedDurationMins * 1.5)} XP)!`
                        : `Earn 1 XP per minute (+${selectedDurationMins} XP). Switching tabs is allowed.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
