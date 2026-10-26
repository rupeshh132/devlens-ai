import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Map, Trophy, Zap, LogOut, Crown, X, FileText, Bookmark, Flame, Menu } from 'lucide-react';
import { cn } from '../lib/utils';
import { FocusTimerWidget } from '../components/learn/FocusTimerWidget';
import { learnApi } from '../lib/learn-api';
import { getStreakData, subscribeToStreakUpdates, resetStreakStateForLogout, syncPendingDailyChallengeWithBackend } from '../lib/lockerStorage';
import { StreakCalendarModal } from '../components/learn/StreakCalendarModal';
import { normalizeTargetClass } from '../lib/dailyQuestionService';

export function LearnLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [showPhoneBanner, setShowPhoneBanner] = useState(false);
  const [bannerPhone, setBannerPhone] = useState('');
  const [savingBannerPhone, setSavingBannerPhone] = useState(false);
  const [streak, setStreak] = useState(() => getStreakData().streak);
  const [streakCalendarOpen, setStreakCalendarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);

    // Dynamic Route Title for Learn Section
    const path = location.pathname;
    const examGoal = localStorage.getItem('learn_exam_goal') || 'Class 11';
    let title = 'PrepLens Learn';

    if (path.includes('/learn/syllabus')) {
      title = `${examGoal} Syllabus Hub | PrepLens Learn`;
    } else if (path.includes('/learn/pyq')) {
      title = `${examGoal} PYQ Bank & Solutions | PrepLens Learn`;
    } else if (path.includes('/learn/locker')) {
      title = 'My Revision Locker | PrepLens Learn';
    } else if (path.includes('/learn/plan')) {
      title = 'AI Study Plan | PrepLens Learn';
    } else if (path.includes('/learn/tests')) {
      title = `${examGoal} Mock Tests & Quizzes | PrepLens Learn`;
    } else if (path.includes('/learn/leaderboard')) {
      title = 'National Leaderboard | PrepLens Learn';
    } else if (path.includes('/learn/topic/')) {
      title = 'Study Lesson & Notes | PrepLens Learn';
    } else {
      title = 'PrepLens Learn — CBSE Smart Learning';
    }

    document.title = title;
  }, [location.pathname]);

  useEffect(() => {
    // Check if token exists on mount or location change
    const token = localStorage.getItem('learn_token');
    setIsAuthenticated(!!token);
    
    const streakInfo = getStreakData();
    setStreak(streakInfo.streak);
    
    const plan = localStorage.getItem('learn_subscription_plan');
    if (plan) {
      setIsPro(plan !== 'FREE');
    }

    if (token) {
      // Auto-reconcile uncommitted Daily PYQ XP with PostgreSQL
      syncPendingDailyChallengeWithBackend();

      const dismissed = localStorage.getItem('dismissed_phone_banner');
      learnApi.get('/profile').then(res => {
        if (res.data?.subscriptionPlan) {
          localStorage.setItem('learn_subscription_plan', res.data.subscriptionPlan);
          setIsPro(res.data.subscriptionPlan !== 'FREE');
        }
        if (!res.data?.phone && !dismissed) {
          setShowPhoneBanner(true);
        } else {
          setShowPhoneBanner(false);
        }
      }).catch(() => {});
    } else {
      setIsPro(false);
      setShowPhoneBanner(false);
    }
  }, [location]);

  const handleSaveBannerPhone = async () => {
    const clean = bannerPhone.replace(/\D/g, '').slice(0, 10);
    if (clean.length !== 10) return;
    setSavingBannerPhone(true);
    try {
      await learnApi.put('/profile/phone', { phone: clean });
      setShowPhoneBanner(false);
      localStorage.setItem('dismissed_phone_banner', 'true');
    } catch (e) {
      // ignore
    } finally {
      setSavingBannerPhone(false);
    }
  };

  const handleDismissBanner = () => {
    setShowPhoneBanner(false);
    localStorage.setItem('dismissed_phone_banner', 'true');
  };

  const handleLogout = () => {
    localStorage.removeItem('learn_token');
    localStorage.removeItem('learn_user_email');
    localStorage.removeItem('learn_user_name');
    localStorage.removeItem('learn_user_phone');
    localStorage.removeItem('learn_study_plan');
    localStorage.removeItem('learn_exam_goal');
    localStorage.removeItem('learn_subscription_plan');
    setIsAuthenticated(false);
    setShowPhoneBanner(false);
    setStreak(0);
    resetStreakStateForLogout();
    navigate('/learn/login');
  };

  // Real-time synchronization for daily streak and modal opening
  useEffect(() => {
    const unsub = subscribeToStreakUpdates((latest) => {
      setStreak(latest.streak);
    });

    const handleOpenCalendar = () => setStreakCalendarOpen(true);
    window.addEventListener('preplens_open_streak_modal', handleOpenCalendar);

    return () => {
      unsub();
      window.removeEventListener('preplens_open_streak_modal', handleOpenCalendar);
    };
  }, []);

  const navItems = [
    { name: 'Syllabus', href: '/learn/syllabus', icon: BookOpen },
    { name: 'Smart PYQs', href: '/learn/pyq', icon: FileText },
    { name: 'My Locker', href: '/learn/locker', icon: Bookmark },
    { name: 'Study Plan', href: '/learn/plan', icon: Map },
    { name: 'Tests', href: '/learn/tests', icon: Zap },
    { name: 'Leaderboard', href: '/learn/leaderboard', icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* 1. Left: Brand Logo (Ekdum left side) */}
            <div className="flex items-center shrink-0">
              <Link to="/learn" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">
                  PrepLens <span className="text-blue-600">Learn</span>
                </span>
              </Link>
            </div>

            {/* 2. Middle: Navigation Links (Clean spacing, never overlapping) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "inline-flex items-center px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap",
                    location.pathname === item.href
                      ? "bg-blue-50 text-blue-700 font-bold shadow-xs border border-blue-200/60"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <item.icon className={cn("h-4 w-4 mr-1.5 shrink-0", 
                    location.pathname === item.href ? "text-blue-600" : "text-slate-400"
                  )} />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* 3. Right: Action Badges & Student Profile (Ekdum right side) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {!isPro && (
                <Link 
                  to="/learn/pricing" 
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xs hover:shadow-orange-200 hover:scale-105 transition-all whitespace-nowrap"
                >
                  <Crown className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">Upgrade to Pro</span>
                  <span className="sm:hidden">Pro</span>
                </Link>
              )}
              
              <button
                type="button"
                onClick={() => setStreakCalendarOpen(true)}
                className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 hover:border-amber-300 text-amber-800 px-2.5 py-1.5 rounded-full text-xs font-black transition-all shadow-xs whitespace-nowrap cursor-pointer active:scale-95"
                title="Click to view Activity Streak Calendar"
              >
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse shrink-0" />
                <span>{streak}d Streak</span>
              </button>

              {isAuthenticated ? (
                <div className="flex items-center gap-1.5">
                  <Link 
                    to="/learn/profile" 
                    className="flex items-center gap-2 text-xs xl:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full border border-slate-200 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                      {(localStorage.getItem('learn_user_name') || 'S').charAt(0).toUpperCase()}
                    </div>
                    <span className="max-w-[100px] truncate">
                      {(localStorage.getItem('learn_user_name') || 'Student').split(' ')[0]}
                    </span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center text-slate-400 hover:text-red-600 transition-colors p-1.5 rounded-lg hover:bg-red-50"
                    title="Logout"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="flex-shrink-0">
                  <Link
                    to="/learn/login"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign In
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 ml-1"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
                  location.pathname === item.href
                    ? "bg-blue-50 text-blue-700 font-bold"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <item.icon className={cn("h-4 w-4 mr-2.5 shrink-0", 
                  location.pathname === item.href ? "text-blue-600" : "text-slate-400"
                )} />
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Optional WhatsApp Opt-in Banner for Existing Users */}
      {showPhoneBanner && isAuthenticated && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white text-xs sm:text-sm px-4 py-2 shadow-sm flex flex-wrap items-center justify-between gap-3 z-20">
          <div className="flex items-center gap-2">
            <span className="text-base">📲</span>
            <span className="font-medium">Get study roadmap updates & test reminders on WhatsApp:</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/15 rounded-lg px-2 py-1 text-white border border-white/25">
              <span className="text-xs text-emerald-100 mr-1.5 font-semibold">+91</span>
              <input
                type="tel"
                maxLength={10}
                placeholder="10-digit number"
                value={bannerPhone}
                onChange={e => setBannerPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="bg-transparent text-white placeholder-emerald-100/60 text-xs outline-none w-28 font-medium"
              />
            </div>
            <button
              onClick={handleSaveBannerPhone}
              disabled={bannerPhone.length !== 10 || savingBannerPhone}
              className="bg-white text-emerald-800 px-3 py-1 rounded-lg text-xs font-bold hover:bg-emerald-50 disabled:opacity-50 transition-all shadow-sm"
            >
              {savingBannerPhone ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={handleDismissBanner}
              className="text-emerald-100 hover:text-white p-1 rounded-lg transition-colors ml-1"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <FocusTimerWidget />
      
      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} PrepLens Learn. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Global Activity Streak Calendar Modal */}
      {streakCalendarOpen && (
        <StreakCalendarModal
          isOpen={streakCalendarOpen}
          onClose={() => setStreakCalendarOpen(false)}
          targetClass={normalizeTargetClass(localStorage.getItem('learn_exam_goal') || 'Class 11')}
          onSolveTodayClick={() => {
            setStreakCalendarOpen(false);
            navigate('/learn/plan');
          }}
        />
      )}
    </div>
  );
}
