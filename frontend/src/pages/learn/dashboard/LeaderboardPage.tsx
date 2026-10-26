import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Medal, Award, Star, Loader2, UserPlus, Zap, Flame, Target, Crown, ArrowRight, Sparkles, TrendingUp, Clock, Copy, Check, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { learnApi } from '../../../lib/learn-api';
import { useAuth } from '../../../features/auth/hooks/useAuth';
import { getStreakData, subscribeToStreakUpdates } from '../../../lib/lockerStorage';

interface RankedUser {
  id: string;
  name: string;
  score: number;
  effectiveXp?: number;
  examGoal?: string;
  isPaidUser?: boolean;
}

interface ReferralLog {
  friendName: string;
  examGoal: string;
  xpEarned: number;
  status: string;
}

interface MyRankData {
  score: number;
  myRank?: number | null;
  rank1Xp?: number;
  rank2Xp?: number;
  rank3Xp?: number;
  gapToPodium?: number;
  daysRemaining?: number;
  referralCode?: string;
  isBanned?: boolean;
  isPaidUser?: boolean;
  referralCount?: number;
  referralXpEarned?: number;
  referralHistory?: ReferralLog[];
}

export function LeaderboardPage() {
  const { user: currentUser } = useAuth();
  const [leaderboard, setLeaderboard] = useState<RankedUser[]>([]);
  const [myRankData, setMyRankData] = useState<MyRankData | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [streakData, setStreakData] = useState(() => getStreakData());

  useEffect(() => {
    const unsub = subscribeToStreakUpdates((latest) => {
      setStreakData(latest);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const globalRes = await learnApi.get('/leaderboard/global');
        setLeaderboard(globalRes.data);
        
        try {
          const myRes = await learnApi.get('/leaderboard/me');
          setMyRankData(myRes.data);
        } catch(e) { } // Ignore if not logged in
        
      } catch (err) {
        console.error("Failed to load leaderboard");
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    const handleXpUpdate = () => {
      fetchData();
    };
    window.addEventListener('preplens_xp_updated', handleXpUpdate);
    return () => {
      window.removeEventListener('preplens_xp_updated', handleXpUpdate);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    );
  }

  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  // Resilient student identity resolution for both Learn students and Dev users
  const checkIsCurrentUser = (user: RankedUser, rankNum: number): boolean => {
    if (myRankData?.myRank && myRankData.myRank === rankNum) {
      return true;
    }
    const localUserId = localStorage.getItem('learn_user_id');
    if (localUserId && String(user.id) === String(localUserId)) return true;
    if (currentUser?.id && String(user.id) === String(currentUser.id)) return true;

    const localName = localStorage.getItem('learn_user_name');
    if (localName && localName.trim().toLowerCase() === (user.name || '').trim().toLowerCase()) {
      return true;
    }
    if (currentUser?.fullName && currentUser.fullName.trim().toLowerCase() === (user.name || '').trim().toLowerCase()) {
      return true;
    }
    return false;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Wall of Fame
        </h1>
        <p className="text-lg text-slate-600">
          Compete with peers nationwide based on your study dedication and progress!
        </p>
      </div>

      {/* Personalized Competitive Standing Card */}
      {myRankData && (
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-indigo-500/20 relative overflow-hidden mb-8">
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-2.5">
              {!myRankData.isPaidUser ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/20">
                  🔒 Unranked (Free Plan)
                </span>
              ) : myRankData.myRank === 1 ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-950 shadow-sm">
                  <Crown className="w-3.5 h-3.5" /> All-India Rank #1
                </span>
              ) : myRankData.myRank === 2 ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-slate-200 text-slate-800 shadow-sm">
                  <Medal className="w-3.5 h-3.5" /> All-India Rank #2
                </span>
              ) : myRankData.myRank === 3 ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-700 text-amber-100 shadow-sm">
                  <Award className="w-3.5 h-3.5" /> All-India Rank #3
                </span>
              ) : myRankData.myRank && myRankData.myRank > 3 ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/30 text-indigo-200 border border-indigo-400/40">
                  <Target className="w-3.5 h-3.5 text-indigo-300" /> All-India Rank #{myRankData.myRank}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/20">
                  🎯 Unranked (Take 1 test to qualify)
                </span>
              )}

              {myRankData.isPaidUser && (
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  PRO
                </span>
              )}
            </div>

            {/* Countdown Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>
                <strong className="text-white font-bold">{myRankData.daysRemaining ?? 0} Days</strong> left in prize cycle
              </span>
            </div>
          </div>

          {/* Body Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 relative z-10 items-center">
            {/* Left 2 Cols: Stats & Motivation */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Your Monthly Study Score</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                    {myRankData.score}
                  </span>
                  <span className="text-lg font-bold text-indigo-300">XP</span>
                </div>
              </div>

              {/* Dynamic Gap & Motivation text */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                {!myRankData.isPaidUser ? (
                  <p className="text-sm text-amber-200 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      You are currently on the <strong>Free Plan</strong>. Upgrade to <strong>PRO</strong> to claim your verified All-India Rank, unlock the Gap-to-Podium tracker, and compete for the <strong>₹3,700 Cash Prize Pool</strong>!
                    </span>
                  </p>
                ) : myRankData.myRank === 1 ? (
                  <p className="text-sm text-amber-200 flex items-start gap-2">
                    <Crown className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Incredible!</strong> You are currently holding <strong>All-India Rank #1</strong> with a <strong>+{myRankData.gapToPodium ?? 0} XP</strong> cushion over 2nd place. Solve today's modules to defend your <strong>₹2,100 cash prize + Trophy</strong>!
                    </span>
                  </p>
                ) : myRankData.myRank === 2 ? (
                  <p className="text-sm text-slate-200 flex items-start gap-2">
                    <Flame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      You're just <strong>{myRankData.gapToPodium ?? 0} XP</strong> away from <strong>Rank #1 (₹2,100)</strong>! Complete 1 mock test to take the lead!
                    </span>
                  </p>
                ) : myRankData.myRank === 3 ? (
                  <p className="text-sm text-amber-100 flex items-start gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      You are in the <strong>Podium Zone (₹500 Prize)</strong>! Keep studying consistently to protect your spot from contenders behind you.
                    </span>
                  </p>
                ) : myRankData.myRank && myRankData.myRank > 3 ? (
                  <p className="text-sm text-indigo-100 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>
                      You need <strong>{myRankData.gapToPodium ?? 0} XP</strong> to break into the <strong>Top 3 Podium (Cash Prize Pool)</strong>. That's approx <strong>~{Math.ceil((myRankData.gapToPodium ?? 0) / 50)} Mock Tests or Daily PYQs</strong>!
                    </span>
                  </p>
                ) : (
                  <p className="text-sm text-slate-300 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      Take your first Mock Test or finish a module today to get ranked on the All-India Leaderboard!
                    </span>
                  </p>
                )}
              </div>

              {/* Fast Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {!myRankData.isPaidUser ? (
                  <Link
                    to="/learn/pricing"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <Crown className="w-4 h-4" />
                    <span>Upgrade to Pro to Qualify</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    to="/learn/tests"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <Flame className="w-4 h-4 text-amber-300" />
                    <span>Take Mock Test (+50 XP)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
                <Link
                  to="/learn/plan"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    streakData.solvedToday
                      ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 shadow-xs'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
                  }`}
                  title={
                    streakData.solvedToday
                      ? "Today's PYQ challenge completed! Click to view question or streak calendar."
                      : "Solve today's question to earn +50 XP and maintain your streak."
                  }
                >
                  {streakData.solvedToday ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Today's PYQ Completed</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                      <span>Daily PYQ Challenge (+50 XP)</span>
                    </>
                  )}
                </Link>
              </div>
            </div>

            {/* Right Col: Podium Target Benchmarks & Referral Boost */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Podium Targets This Month</h4>
              
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-yellow-300 font-semibold">
                    <Crown className="w-3.5 h-3.5" /> #1 Rank
                  </span>
                  <span className="font-mono font-bold text-white">
                    {top3[0]?.score ?? top3[0]?.effectiveXp ?? myRankData.rank1Xp ?? 0} XP
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                    <Medal className="w-3.5 h-3.5" /> #2 Rank
                  </span>
                  <span className="font-mono font-bold text-white">
                    {top3[1]?.score ?? top3[1]?.effectiveXp ?? myRankData.rank2Xp ?? 0} XP
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                    <Award className="w-3.5 h-3.5" /> #3 Cut-off
                  </span>
                  <span className="font-mono font-bold text-white">
                    {top3[2]?.score ?? top3[2]?.effectiveXp ?? myRankData.rank3Xp ?? 0} XP
                  </span>
                </div>
              </div>

              {/* Referral Pill & Live Reward Status */}
              {myRankData.referralCode && (
                <div className="pt-1 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <UserPlus className="w-3.5 h-3.5 text-amber-300" />
                      Referral Code (+200 XP):
                    </span>
                    <span className="text-[10px] text-indigo-300 font-semibold">
                      {myRankData.referralCount ?? 0} Pro Active
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-black/30 border border-white/10 px-3 py-2 rounded-xl">
                    <span className="font-mono font-black tracking-widest text-amber-300 text-sm">
                      {myRankData.referralCode}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(myRankData.referralCode || '');
                        setCopiedCode(true);
                        toast.success('Referral code copied to clipboard!');
                        setTimeout(() => setCopiedCode(false), 2000);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-300">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-300" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Recent Successful Referral Alert */}
                  {myRankData.referralHistory && myRankData.referralHistory.length > 0 ? (
                    <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-[11px] text-emerald-200">
                      <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                        <span>Referral Bonus Credited!</span>
                      </div>
                      <p className="mt-1 text-[11px] text-emerald-100 leading-tight">
                        <strong>{myRankData.referralHistory[0].friendName}</strong> activated PRO using your code. <strong>+200 XP</strong> automatically added to your score!
                      </p>
                    </div>
                  ) : (
                    <p className="text-[10px] text-slate-400 text-center">
                      Give code to friends. Earn +200 XP instantly when they activate PRO!
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Prize Pool Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-2xl p-1 shadow-md">
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                👑 PRO Member Exclusive Prize Pool
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              Monthly Cash Prize Pool: ₹3,700
              <Trophy className="w-6 h-6 text-yellow-500" />
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-yellow-500">₹2,100</span>
                <span className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wider">1st Rank + Trophy</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-slate-400">₹1,100</span>
                <span className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wider">2nd Rank</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-amber-700">₹500</span>
                <span className="text-sm font-semibold text-slate-600 mt-1 uppercase tracking-wider">3rd Rank</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Earn Points Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-12">
        <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
          How to Earn XP & Win Prizes?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-indigo-600 font-bold text-xl">⏱️</span>
            </div>
            <p className="font-bold text-slate-800 text-lg">+1 XP / min</p>
            <p className="text-xs text-slate-500 mt-1">Study Time (1.5x in Deep Focus)</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-amber-600 font-bold text-xl">🔥</span>
            </div>
            <p className="font-bold text-slate-800 text-lg">+50 XP</p>
            <p className="text-xs text-slate-500 mt-1">Daily PYQ Streak (+25 min)</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
            <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-emerald-600 font-bold text-xl">📖</span>
            </div>
            <p className="font-bold text-slate-800 text-lg">+20 to +50 XP</p>
            <p className="text-xs text-slate-500 mt-1">Lectures & Chapter Notes</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl text-center border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold text-xl">🤝</span>
            </div>
            <p className="font-bold text-slate-800 text-lg">+200 XP</p>
            <p className="text-xs text-slate-500 mt-1">Per Pro Referral (Max 25% Cap)</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-400">
            *Note: To ensure fair play, referral points are capped at a maximum of 25% of your study score. The rest must be earned through consistent study and daily challenges!
          </p>
        </div>
      </div>

      {/* Tabs */}
      {leaderboard.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900">Leaderboard is Empty</h2>
          <p className="text-slate-500 mt-2">Be the first to start studying and claim the #1 spot!</p>
        </div>
      ) : (
        <>
          {/* Top 3 Podium */}
          <div className="flex justify-center items-end gap-3 sm:gap-6 md:gap-10 mb-16 pt-8">
            {/* Rank 2 */}
            {top3[1] && (
              <div className="flex flex-col items-center w-28 sm:w-36 md:w-44">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-200 rounded-full flex items-center justify-center border-4 border-slate-300 z-10 relative shadow-sm">
                    <span className="text-2xl font-bold text-slate-500">{top3[1].name.charAt(0)}</span>
                  </div>
                  <Medal className="w-8 h-8 text-slate-400 absolute -bottom-3 -right-3" />
                </div>
                <div className="h-24 md:h-32 w-24 sm:w-28 md:w-32 bg-gradient-to-t from-slate-200 to-slate-100 mt-4 rounded-t-2xl flex flex-col justify-end items-center pb-4 shadow-sm border-t border-x border-slate-300/50">
                  <span className="text-2xl font-black text-slate-400">2</span>
                </div>

                {/* Student Details */}
                <div className="mt-3 text-center w-full px-1">
                  <div className="flex items-center justify-center gap-1.5 flex-wrap">
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight break-words">
                      {top3[1].name}
                    </span>
                    {checkIsCurrentUser(top3[1], 2) && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-indigo-600 text-white shrink-0">
                        YOU
                      </span>
                    )}
                    {top3[1].isPaidUser && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                        PRO
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">
                    {top3[1].score ?? top3[1].effectiveXp ?? 0} XP
                  </p>
                  {top3[1].examGoal && (
                    <span className="inline-block mt-0.5 text-[11px] font-medium text-slate-400 truncate max-w-[140px]">
                      {top3[1].examGoal}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Rank 1 */}
            {top3[0] && (
              <div className="flex flex-col items-center w-32 sm:w-40 md:w-48">
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-400 z-10 relative shadow-md">
                    <span className="text-3xl font-bold text-yellow-600">{top3[0].name.charAt(0)}</span>
                  </div>
                  <Trophy className="w-10 h-10 text-yellow-500 absolute -bottom-4 -right-4 drop-shadow-md" />
                </div>
                <div className="h-32 md:h-40 w-28 sm:w-32 md:w-36 bg-gradient-to-t from-yellow-200 to-yellow-100 mt-4 rounded-t-2xl flex flex-col justify-end items-center pb-4 shadow-inner border-t border-x border-yellow-300">
                  <span className="text-3xl font-black text-yellow-600">1</span>
                </div>

                {/* Student Details */}
                <div className="mt-3 text-center w-full px-1">
                  <div className="flex items-center justify-center gap-1.5 flex-wrap">
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight break-words">
                      {top3[0].name}
                    </span>
                    {checkIsCurrentUser(top3[0], 1) && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-indigo-600 text-white shrink-0">
                        YOU
                      </span>
                    )}
                    {top3[0].isPaidUser && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-amber-400/30 text-amber-950 border border-amber-400 shrink-0">
                        PRO
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-black text-yellow-600 mt-1">
                    {top3[0].score ?? top3[0].effectiveXp ?? 0} XP
                  </p>
                  {top3[0].examGoal && (
                    <span className="inline-block mt-0.5 text-[11px] font-semibold text-yellow-700/80 truncate max-w-[150px]">
                      {top3[0].examGoal}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Rank 3 */}
            {top3[2] && (
              <div className="flex flex-col items-center w-28 sm:w-36 md:w-44">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-50 rounded-full flex items-center justify-center border-4 border-amber-600 z-10 relative shadow-sm">
                    <span className="text-2xl font-bold text-amber-700">{top3[2].name.charAt(0)}</span>
                  </div>
                  <Award className="w-8 h-8 text-amber-600 absolute -bottom-3 -right-3" />
                </div>
                <div className="h-20 md:h-28 w-24 sm:w-28 md:w-32 bg-gradient-to-t from-amber-200 to-amber-100 mt-4 rounded-t-2xl flex flex-col justify-end items-center pb-4 shadow-sm border-t border-x border-amber-300/50">
                  <span className="text-2xl font-black text-amber-700">3</span>
                </div>

                {/* Student Details */}
                <div className="mt-3 text-center w-full px-1">
                  <div className="flex items-center justify-center gap-1.5 flex-wrap">
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight break-words">
                      {top3[2].name}
                    </span>
                    {checkIsCurrentUser(top3[2], 3) && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-indigo-600 text-white shrink-0">
                        YOU
                      </span>
                    )}
                    {top3[2].isPaidUser && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                        PRO
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">
                    {top3[2].score ?? top3[2].effectiveXp ?? 0} XP
                  </p>
                  {top3[2].examGoal && (
                    <span className="inline-block mt-0.5 text-[11px] font-medium text-slate-400 truncate max-w-[140px]">
                      {top3[2].examGoal}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Top 4 to 50 Leaderboard Table */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  Top Contenders (Ranks #4 - #50)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Live All-India gap to the Top 3 Cash Prize Podium.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                {rest.length} Active Contenders
              </span>
            </div>

            {rest.length === 0 ? (
              <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto font-bold text-lg">
                  #4
                </div>
                <h4 className="font-bold text-slate-900 text-base">Top 10 Spots are Open!</h4>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Ranks #4 through #10 are completely unoccupied this month. Complete a mock test or daily challenge right now to claim your spot in the Top 10!
                </p>
                <div className="pt-2">
                  <Link
                    to="/learn/tests"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <Flame className="w-4 h-4 text-amber-300" />
                    <span>Claim Rank #4 Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <div className="col-span-2 sm:col-span-1 text-center">Rank</div>
                  <div className="col-span-6 sm:col-span-6">Student & Goal</div>
                  <div className="hidden sm:block sm:col-span-3 text-center">Distance to Podium</div>
                  <div className="col-span-4 sm:col-span-2 text-right">Total XP</div>
                </div>

                <div className="divide-y divide-slate-100">
                  {rest.map((user, idx) => {
                    const rankNum = idx + 4;
                    const isCurrentUser = checkIsCurrentUser(user, rankNum);
                    const userScore = user.score ?? user.effectiveXp ?? 0;
                    const rank3Score = top3[2] ? (top3[2].score ?? top3[2].effectiveXp ?? 0) : 0;
                    const gapToPodium = Math.max(1, (rank3Score - userScore) + 1);

                    return (
                      <div
                        key={user.id || idx}
                        className={`grid grid-cols-12 gap-2 px-4 py-3.5 items-center transition-colors ${
                          isCurrentUser
                            ? 'bg-indigo-50/90 border-l-4 border-indigo-600 shadow-xs'
                            : 'hover:bg-slate-50/80'
                        }`}
                      >
                        {/* Rank */}
                        <div className="col-span-2 sm:col-span-1 text-center font-black text-slate-600 text-base">
                          #{rankNum}
                        </div>

                        {/* Student Name & Goal */}
                        <div className="col-span-6 sm:col-span-6 flex items-center gap-2.5 min-w-0">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            isCurrentUser
                              ? 'bg-indigo-600 text-white font-extrabold shadow-sm'
                              : 'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}>
                            {user.name ? user.name.charAt(0).toUpperCase() : 'S'}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`text-sm font-bold truncate ${isCurrentUser ? 'text-indigo-950 font-extrabold' : 'text-slate-900'}`}>
                                {user.name}
                              </span>
                              {isCurrentUser && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-indigo-600 text-white shrink-0">
                                  YOU
                                </span>
                              )}
                              {user.isPaidUser && (
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
                                  PRO
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 truncate flex items-center gap-1 mt-0.5">
                              <Star className="w-3 h-3 text-slate-400 shrink-0" />
                              <span>{user.examGoal || 'Competitive Exam'}</span>
                            </p>
                          </div>
                        </div>

                        {/* Distance to Podium */}
                        <div className="hidden sm:flex sm:col-span-3 items-center justify-center">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                            <Flame className="w-3 h-3 text-rose-500" />
                            -{gapToPodium} XP to Podium
                          </span>
                        </div>

                        {/* XP */}
                        <div className="col-span-4 sm:col-span-2 text-right">
                          <p className="font-extrabold text-slate-900 text-sm sm:text-base">
                            {userScore}
                          </p>
                          <p className="text-[10px] uppercase font-bold text-slate-400 -mt-0.5">
                            XP
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
