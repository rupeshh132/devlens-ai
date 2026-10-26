import { useState, useEffect } from 'react';
import { 
  Trophy, AlertTriangle, ChevronLeft, ChevronRight, 
  UserX, UserCheck, Crown, X, CheckCircle2, Zap, ShieldAlert,
  ListOrdered, ShieldCheck, Scale, History, Clock, Shield
} from 'lucide-react';
import { api } from '../../lib/api';
import { toast } from 'sonner';

interface AdminRankedUser {
  id: string;
  name: string;
  score: number;
  effectiveXp: number;
  earnedXp: number;
  referralXp: number;
  acceptedReferralXp?: number;
  isReferralCapped?: boolean;
  studyMinutes: number;
  isBanned?: boolean;
  isPaidUser?: boolean;
  subscriptionPlan?: string;
  isTied?: boolean;
  tieResolution?: string;
  anomaly?: 'HIGH_XP_ZERO_STUDY' | 'REFERRAL_SPIKE' | null;
}

interface PastWinner {
  rank: number;
  totalXp: number;
  studyMinutes: number;
  name?: string;
}

export function AdminLeaderboardPage() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [users, setUsers] = useState<AdminRankedUser[]>([]);
  const [pastWinners, setPastWinners] = useState<PastWinner[]>([]);
  const [minXp, setMinXp] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [overrideConfirmed, setOverrideConfirmed] = useState(false);
  const [activeTab, setActiveTab] = useState<'COMPETITORS' | 'ANTI_CHEAT' | 'TIE_BREAKER' | 'WALL_OF_FAME'>('COMPETITORS');

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const [res, winnersRes] = await Promise.all([
        api.get(`/learn/admin/gamification/leaderboard?month=${month}&year=${year}`),
        api.get(`/learn/leaderboard/past-winners?month=${month}&year=${year}`).catch(() => ({ data: [] }))
      ]);
      setUsers(Array.isArray(res.data) ? res.data : []);
      setPastWinners(Array.isArray(winnersRes.data) ? winnersRes.data : []);
    } catch (e) {
      toast.error('Failed to load leaderboard data');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [month, year]);

  const handlePrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };

  const handleNextMonth = () => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    if (year === currentYear && month >= currentMonth) return;

    if (month === 12) {
      setMonth(1);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  const isCurrentOrFutureMonth = () => {
    const now = new Date();
    return year > now.getFullYear() || (year === now.getFullYear() && month >= now.getMonth() + 1);
  };

  const handleBanToggle = async (userId: string, isCurrentlyBanned: boolean) => {
    try {
      if (isCurrentlyBanned) {
        await api.post(`/learn/admin/gamification/unban/${userId}`);
        toast.success("User unbanned successfully.");
      } else {
        const confirmBan = window.confirm("Are you sure you want to disqualify this user from the leaderboard?");
        if (!confirmBan) return;
        await api.post(`/learn/admin/gamification/ban/${userId}`);
        toast.success("User has been disqualified.");
      }
      fetchLeaderboard(); // Refresh list
    } catch (e) {
      toast.error("Failed to update user status");
    }
  };

  const handleConfirmPublish = async () => {
    setPublishing(true);
    try {
      await api.post(`/learn/admin/gamification/publish?month=${month}&year=${year}&minXp=${minXp}`);
      toast.success('Winners published successfully! They are now live on the Wall of Fame.');
      setShowPublishModal(false);
      fetchLeaderboard();
    } catch (e: any) {
      toast.error(e.response?.data?.error || 'Failed to publish winners');
    } finally {
      setPublishing(false);
    }
  };

  const formatHours = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
  };

  const filteredUsers = users.filter(u => u.effectiveXp >= minXp);

  // Compute eligible active students and podium composition
  const eligibleActiveUsers = users.filter(u => u.effectiveXp >= minXp && !u.isBanned);
  const top3Overall = eligibleActiveUsers.slice(0, 3);
  const freeUsersInTop3 = top3Overall.filter(u => !u.isPaidUser);
  const eligibleProWinners = eligibleActiveUsers.filter(u => u.isPaidUser).slice(0, 3);
  const tiedUsersCount = users.filter(u => u.isTied && !u.isBanned).length;
  const anomalyUsers = users.filter(u => u.anomaly && !u.isBanned);

  const isAlreadyPublished = pastWinners.length > 0;
  const now = new Date();
  const isCurrentActiveMonth = year === now.getFullYear() && month === (now.getMonth() + 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysRemainingInMonth = Math.max(0, daysInMonth - now.getDate());

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Leaderboard Resolution</h1>
          <p className="text-slate-500 mt-1">Review tie-breakers, detect cheating, and publish monthly winners.</p>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
            <span className="text-sm font-semibold text-slate-500 pl-2">Min XP:</span>
            <input 
              type="number" 
              value={minXp} 
              onChange={e => setMinXp(Math.max(0, Number(e.target.value)))}
              className="w-20 border-none outline-none font-bold text-indigo-600 bg-transparent text-right pr-2"
              title="Minimum XP required to appear or qualify for awards"
            />
          </div>
          
          <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
            <button 
              onClick={handlePrevMonth}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              title="Previous month"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="font-bold min-w-[130px] text-center select-none">
              {new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })}
            </div>
            <button 
              onClick={handleNextMonth}
              className="p-2 hover:bg-slate-100 rounded-lg disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
              disabled={isCurrentOrFutureMonth()}
              title="Next month"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Cycle Notice */}
      {isCurrentActiveMonth && !isAlreadyPublished && (
        <div className="mb-6 p-3.5 px-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex items-center justify-between flex-wrap gap-2 text-xs text-indigo-950 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping" />
            <span>
              <strong>Active Competition Cycle:</strong> {new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })} has <strong>{daysRemainingInMonth} days remaining</strong>. Results should normally be finalized and published after the cycle concludes on month-end.
            </span>
          </div>
          <span className="font-mono text-[11px] font-bold bg-white px-2.5 py-0.5 rounded-lg border border-indigo-200 text-indigo-700 shadow-2xs">
            {daysRemainingInMonth} Days Left
          </span>
        </div>
      )}

      {/* Free Tier Podium Alert Banner */}
      {freeUsersInTop3.length > 0 && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5 text-amber-950 dark:text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-bold text-sm text-amber-900 dark:text-amber-100">
              Podium Notice: {freeUsersInTop3.length} Free-tier student{freeUsersInTop3.length > 1 ? 's' : ''} currently in Top 3
            </p>
            <p className="text-amber-800/90 dark:text-amber-300/90 leading-relaxed">
              <strong>{freeUsersInTop3.map(u => u.name).join(', ')}</strong> {freeUsersInTop3.length > 1 ? 'are' : 'is'} in the Podium Zone but on the <strong>Free tier</strong>.
              DevLens competition rules specify that <strong>only verified PRO members</strong> qualify for the <strong>₹3,700 Cash Prize Pool</strong>.
              When publishing winners, Free tier students are skipped and prizes are awarded to the highest-ranking PRO members.
            </p>
          </div>
        </div>
      )}

      {/* 3 Top Telemetry Cards (Review tie-breakers, detect cheating, and publish monthly winners) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Card 1: Prize Pool & PRO Qualification */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-amber-500 fill-amber-500/20" /> Monthly Prize Pool
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-amber-100 text-amber-900 border border-amber-300">
                ₹3,700 Total
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-amber-50/60 border border-amber-200/50">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-amber-500 text-white font-black text-[10px] flex items-center justify-center">1</span>
                  {eligibleProWinners[0] ? eligibleProWinners[0].name : 'No PRO Qualifier'}
                </span>
                <span className="font-extrabold text-amber-800">₹2,100 + Trophy</span>
              </div>
              <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200/60">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-slate-400 text-white font-black text-[10px] flex items-center justify-center">2</span>
                  {eligibleProWinners[1] ? eligibleProWinners[1].name : 'No PRO Qualifier'}
                </span>
                <span className="font-extrabold text-slate-700">₹1,100</span>
              </div>
              <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-orange-50/60 border border-orange-200/50">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-orange-500 text-white font-black text-[10px] flex items-center justify-center">3</span>
                  {eligibleProWinners[2] ? eligibleProWinners[2].name : 'No PRO Qualifier'}
                </span>
                <span className="font-extrabold text-orange-800">₹500</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            {freeUsersInTop3.length > 0 ? (
              <span className="text-amber-700 font-semibold flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> {freeUsersInTop3.length} Free in Top 3 (Bypassed)
              </span>
            ) : (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> All 3 Top Spots Verified PRO
              </span>
            )}
            <span className="text-slate-400">PRO-Exclusive</span>
          </div>
        </div>

        {/* Card 2: Anti-Cheat & Security Shield */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-600" /> Anti-Cheat & Security
              </span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-black border ${
                anomalyUsers.length === 0 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
                  : 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
              }`}>
                {anomalyUsers.length === 0 ? '✓ 0 Anomalies' : `⚠️ ${anomalyUsers.length} Flagged`}
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-600 font-medium">Multi-Tab Script Spam</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 10s Limiter
                </span>
              </div>
              <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-600 font-medium">Referral Anti-Fraud</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 25% Cap Active
                </span>
              </div>
              <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-600 font-medium">Daily XP Velocity Ceiling</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 1,000 XP/Day Max
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span className="text-slate-600 font-semibold">
              {filteredUsers.length} Competitors Audited
            </span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Shield Active
            </span>
          </div>
        </div>

        {/* Card 3: Tie-Breaker Resolution Engine */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-indigo-600 fill-indigo-600/20" /> Tie-Breaker Engine
              </span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-black border ${
                tiedUsersCount === 0 
                  ? 'bg-blue-50 text-blue-700 border-blue-300' 
                  : 'bg-amber-50 text-amber-800 border-amber-300'
              }`}>
                {tiedUsersCount === 0 ? '✓ 0 Ties (All Distinct)' : `⚡ ${tiedUsersCount} Tied Resolved`}
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-indigo-50/50 border border-indigo-100">
                <span className="text-slate-700 font-semibold flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-indigo-600 text-white font-black text-[10px] flex items-center justify-center">1</span>
                  Tier 1 Rule
                </span>
                <span className="font-bold text-indigo-900">Monthly Study Time</span>
              </div>
              <div className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-indigo-50/50 border border-indigo-100">
                <span className="text-slate-700 font-semibold flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-indigo-600 text-white font-black text-[10px] flex items-center justify-center">2</span>
                  Tier 2 Rule
                </span>
                <span className="font-bold text-indigo-900">Completion Speed</span>
              </div>
              <div className="p-1.5 px-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-500">
                Tied scores auto-sorted by verified platform study sessions.
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span className="text-slate-600 font-semibold">
              Live Resolution Matrix
            </span>
            <span className="text-indigo-600 font-bold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-indigo-600" /> Automated
            </span>
          </div>
        </div>
      </div>

      {/* Feature Tabs Switcher (Review tie-breakers, detect cheating, and publish monthly winners) */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('COMPETITORS')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'COMPETITORS'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          <span>Competitors & Resolution ({filteredUsers.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('ANTI_CHEAT')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'ANTI_CHEAT'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-emerald-500" />
          <span>Anti-Cheat & Fraud Radar</span>
          {anomalyUsers.length > 0 ? (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-rose-500 text-white font-black animate-pulse">
              {anomalyUsers.length} Flagged
            </span>
          ) : (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-700 font-bold">
              Clean
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('TIE_BREAKER')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'TIE_BREAKER'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Scale className="w-4 h-4 text-indigo-500" />
          <span>Tie-Breaker Console</span>
          {tiedUsersCount > 0 ? (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-blue-500 text-white font-black">
              {tiedUsersCount} Resolved
            </span>
          ) : (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-600 font-bold">
              0 Ties
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('WALL_OF_FAME')}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'WALL_OF_FAME'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <History className="w-4 h-4 text-amber-500" />
          <span>Wall of Fame & Payouts</span>
          {isAlreadyPublished && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-500 text-white font-black">
              Locked
            </span>
          )}
        </button>
      </div>

      {activeTab === 'COMPETITORS' && (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="font-bold text-slate-700 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-indigo-600" /> Competitor Resolution Table
            </h3>
            {tiedUsersCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-500/15 text-blue-700 border border-blue-300 flex items-center gap-1 shadow-2xs">
                <Zap className="w-3 h-3 text-blue-600" />
                {tiedUsersCount} Tied Scores Resolved
              </span>
            )}
            {anomalyUsers.length > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500/15 text-rose-700 border border-rose-300 flex items-center gap-1 animate-pulse shadow-2xs">
                <ShieldAlert className="w-3 h-3 text-rose-600" />
                {anomalyUsers.length} Anomaly Flagged
              </span>
            )}
          </div>
          {isAlreadyPublished ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Winners Published & Locked
            </span>
          ) : (
            <button 
              onClick={() => {
                setOverrideConfirmed(false);
                setShowPublishModal(true);
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" /> Publish Winners
            </button>
          )}
        </div>

        {/* Official Locked Podium Showcase */}
        {isAlreadyPublished && pastWinners.length > 0 && (
          <div className="p-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border-b border-emerald-200/80">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="font-bold text-sm text-slate-800">
                  Official Published Podium ({new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })})
                </span>
              </div>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                Immutable Database Record
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pastWinners.map(w => (
                <div key={w.rank} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-7 h-7 rounded-xl text-white font-black text-xs flex items-center justify-center shadow-xs ${
                      w.rank === 1 ? 'bg-amber-500' : w.rank === 2 ? 'bg-slate-400' : 'bg-orange-500'
                    }`}>
                      {w.rank === 1 ? '1st' : w.rank === 2 ? '2nd' : '3rd'}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{w.name || 'Student'}</p>
                      <p className="text-[11px] text-slate-500">{w.totalXp} XP • {formatHours(w.studyMinutes)}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                    {w.rank === 1 ? '₹2,100 + Trophy' : w.rank === 2 ? '₹1,100' : '₹500'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tie-Breaker Engine Active Banner */}
        {tiedUsersCount > 0 && (
          <div className="p-3 px-4 bg-blue-50/70 border-b border-blue-100 flex items-center gap-2.5 text-xs text-blue-900">
            <Zap className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Automated Tie-Breaker Engine Active:</strong> Equal XP scores were detected among competitors. 
              Ties were systematically resolved using <strong>Tier 1: Verified Monthly Study Time</strong> & <strong>Tier 2: Activity Completion Speed</strong>.
            </span>
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/50 text-slate-500 text-sm border-b border-slate-200">
                <th className="p-4 font-semibold">Rank</th>
                <th className="p-4 font-semibold">Student Name</th>
                <th className="p-4 font-semibold">Total XP (Effective)</th>
                <th className="p-4 font-semibold text-green-600">Earned via Study</th>
                <th className="p-4 font-semibold text-blue-600">Earned via Referral</th>
                <th className="p-4 font-semibold text-purple-600">Monthly Study Time</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={7} className="text-center p-8 text-slate-500">Loading...</td></tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center p-8 text-slate-500">
                    No study activity recorded for {new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })}.
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center p-8 text-slate-600">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span>Found <strong>{users.length}</strong> student(s), but none meet the <strong>{minXp} Min XP</strong> cutoff.</span>
                      <button 
                        onClick={() => setMinXp(0)}
                        className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold px-3 py-1.5 rounded-lg border border-indigo-200 transition-colors"
                      >
                        Reset Min XP to 0 to view all {users.length} student(s)
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u, i) => (
                  <tr 
                    key={u.id} 
                    className={`border-b border-slate-100 transition-colors ${
                      u.isBanned 
                        ? 'bg-rose-50/70 border-rose-200' 
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="p-4">
                      {u.isBanned ? (
                        <span className="bg-slate-200 text-slate-500 px-2 py-1 rounded-md font-bold text-xs">
                          DQ
                        </span>
                      ) : i === 0 ? (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md font-bold">1st</span>
                      ) : i === 1 ? (
                        <span className="bg-slate-200 text-slate-800 px-2 py-1 rounded-md font-bold">2nd</span>
                      ) : i === 2 ? (
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-md font-bold">3rd</span>
                      ) : (
                        <span className="font-medium text-slate-500">{i + 1}</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-bold ${u.isBanned ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                          {u.name}
                        </span>
                        {u.isBanned ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300">
                            Disqualified
                          </span>
                        ) : u.isPaidUser ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
                            <Crown className="w-3 h-3 text-amber-600" /> PRO
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                            FREE
                          </span>
                        )}
                        {u.anomaly === 'HIGH_XP_ZERO_STUDY' && (
                          <span 
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-300 cursor-help"
                            title="Anti-Cheat Warning: User accumulated >= 100 XP with 0 logged monthly study minutes. Review account activity."
                          >
                            <ShieldAlert className="w-3 h-3 text-rose-600" /> 0m Study Anomaly
                          </span>
                        )}
                        {u.anomaly === 'REFERRAL_SPIKE' && (
                          <span 
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 cursor-help"
                            title="Anti-Cheat Warning: Disproportionately high referral points compared to actual study activity."
                          >
                            <AlertTriangle className="w-3 h-3 text-amber-600" /> Referral Farm Spike
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-black text-slate-800">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span>{u.effectiveXp} XP</span>
                        {u.isTied && (
                          <span 
                            className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-200 cursor-help flex items-center gap-0.5"
                            title={u.tieResolution || "Rank decided by tie-breaker rules"}
                          >
                            <Zap className="w-2.5 h-2.5 text-blue-600" /> Tie Broken
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-green-600">{u.earnedXp} XP</td>
                    <td className="p-4 font-semibold text-blue-600">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span>{u.acceptedReferralXp !== undefined ? u.acceptedReferralXp : u.referralXp} XP</span>
                        {u.isReferralCapped && (
                          <span 
                            className="px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 cursor-help"
                            title={`Raw Referral XP: ${u.referralXp} XP. Capped at 25% of Study XP (${u.acceptedReferralXp} XP) by platform anti-fraud rules.`}
                          >
                            Capped 25%
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-purple-600">
                      <span title="Logged study time during this calendar month">{formatHours(u.studyMinutes)}</span>
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleBanToggle(u.id, u.isBanned || false)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          u.isBanned 
                            ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-xs' 
                            : 'text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200'
                        }`}
                        title={u.isBanned ? "Restore student to leaderboard" : "Disqualify student from leaderboard"}
                      >
                        {u.isBanned ? (
                          <>
                            <UserCheck className="w-4 h-4 text-emerald-600" />
                            <span>Unban</span>
                          </>
                        ) : (
                          <>
                            <UserX className="w-4 h-4 text-rose-500" />
                            <span>Disqualify</span>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      )}

      {/* ─── TAB 2: Anti-Cheat & Fraud Inspection Console ──────────────────── */}
      {activeTab === 'ANTI_CHEAT' && (
        <div className="space-y-6">
          {/* Security Architecture & Rules Banner */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Automated Platform Security & Anti-Fraud Engines</h3>
                  <p className="text-xs text-slate-500">Continuous telemetry verification protecting the ₹3,700 prize pool from bots and referral farming</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                All 4 Systems Active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" /> 10s Spam Limiter
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Rejects multi-tab script spamming if sessions are logged less than 10 seconds apart.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-blue-600" /> 25% Referral Cap
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Referral points are mathematically capped at 25% of study points. Prevents referral-only farming.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-600" /> 1,000 XP Daily Max
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Hard velocity cap on study XP per 24h cycle (~16 hours max study threshold).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-600" /> 0m Study Detector
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Flags any student with ≥100 XP who has 0 logged study minutes for immediate admin audit.
                </p>
              </div>
            </div>
          </div>

          {/* Competitor Audit Ledger Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center flex-wrap gap-2">
              <h3 className="font-bold text-slate-700 text-sm flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-600" /> Competitor Integrity Audit Matrix
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Auditing {filteredUsers.length} Competitors for {new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100/50 text-slate-500 border-b border-slate-200 font-semibold">
                    <th className="p-3.5">Student</th>
                    <th className="p-3.5">Effective XP</th>
                    <th className="p-3.5">Study XP</th>
                    <th className="p-3.5">Referral Audit</th>
                    <th className="p-3.5">Monthly Study Time</th>
                    <th className="p-3.5">Risk Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u, idx) => {
                    const maxAllowedRef = Math.floor(u.earnedXp * 0.25);
                    return (
                      <tr key={u.id} className={`border-b border-slate-100 hover:bg-slate-50/80 transition-colors ${u.isBanned ? 'bg-rose-50/50' : ''}`}>
                        <td className="p-3.5 font-bold text-slate-900">
                          <div className="flex items-center gap-2">
                            <span>#{idx + 1}</span>
                            <span className={u.isBanned ? 'line-through text-slate-400' : ''}>{u.name}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold ${u.isPaidUser ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>
                              {u.isPaidUser ? 'PRO' : 'FREE'}
                            </span>
                          </div>
                        </td>
                        <td className="p-3.5 font-extrabold text-slate-900">{u.effectiveXp} XP</td>
                        <td className="p-3.5 text-green-600 font-semibold">{u.earnedXp} XP</td>
                        <td className="p-3.5">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-semibold text-blue-600">{u.acceptedReferralXp !== undefined ? u.acceptedReferralXp : u.referralXp} XP</span>
                            <span className="text-[10px] text-slate-400">(Max 25%: {maxAllowedRef} XP)</span>
                            {u.isReferralCapped && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-amber-100 text-amber-800 border border-amber-300">
                                Capped
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-3.5 text-purple-600 font-semibold">{formatHours(u.studyMinutes)}</td>
                        <td className="p-3.5">
                          {u.isBanned ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-800 border border-rose-300">
                              DISQUALIFIED
                            </span>
                          ) : u.anomaly === 'HIGH_XP_ZERO_STUDY' ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-800 border border-rose-300 animate-pulse">
                              ⚠️ 0m Study Anomaly
                            </span>
                          ) : u.anomaly === 'REFERRAL_SPIKE' ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-800 border border-rose-300 animate-pulse">
                              ⚠️ Referral Farm Spike
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center gap-1 w-fit">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Clean
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => handleBanToggle(u.id, u.isBanned || false)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                              u.isBanned 
                                ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-xs' 
                                : 'text-rose-600 hover:bg-rose-50 border border-slate-200 hover:border-rose-300'
                            }`}
                          >
                            {u.isBanned ? 'Unban' : 'Disqualify'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ─── TAB 3: Tie-Breaker Rules & Adjudication Matrix ─────────────────── */}
      {activeTab === 'TIE_BREAKER' && (
        <div className="space-y-6">
          {/* Tie-Breaker Logic Explainer */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/60">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">2-Tier Automated Tie-Breaker Resolution Engine</h3>
                  <p className="text-xs text-slate-500">Official adjudication protocol when multiple competitors reach equal Effective XP scores</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-indigo-600" /> Automated Algorithm
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/70 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-indigo-950 text-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center">1</span>
                    Tier 1: Verified Monthly Study Time (Primary)
                  </span>
                  <span className="text-[10px] font-black bg-indigo-200/70 text-indigo-800 px-2 py-0.5 rounded-full">Weight: Highest</span>
                </div>
                <p className="text-xs text-indigo-900/80 leading-relaxed">
                  If two competitors have identical Effective XP, the student with the higher sum of verified platform study minutes in the calendar month takes the higher rank.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 text-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-500 text-white font-black text-xs flex items-center justify-center">2</span>
                    Tier 2: Activity Completion Speed (Secondary)
                  </span>
                  <span className="text-[10px] font-black bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">Tie Safeguard</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If both XP and monthly study duration are identical, the competitor who completed their study modules and daily challenges earlier in time is awarded the winning position.
                </p>
              </div>
            </div>
          </div>

          {/* Current Score Collision Status */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" /> Active Month Collision Scan ({new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })})
            </h3>

            {tiedUsersCount === 0 ? (
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto" />
                <p className="font-bold text-slate-900 text-sm">No Equal-Score Collisions Detected</p>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  All {filteredUsers.length} competitors currently have distinct Effective XP scores. All ranks (1st through {filteredUsers.length}th) are directly determined by point differences without requiring tie-break intervention.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    <strong>{tiedUsersCount} Tied Scores Detected & Auto-Resolved:</strong> The following competitors achieved identical XP. Tier 1 Study Time was evaluated to determine the final rank.
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {users.filter(u => u.isTied).map(u => (
                    <div key={u.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between items-center">
                      <div>
                        <p className="font-bold text-slate-900">{u.name}</p>
                        <p className="text-[11px] text-indigo-600 font-semibold">{u.effectiveXp} XP • {formatHours(u.studyMinutes)} Study</p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                        {u.tieResolution || 'Tier 1 Decided'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── TAB 4: Wall of Fame & Prize Archive ───────────────────────────── */}
      {activeTab === 'WALL_OF_FAME' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-200">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Wall of Fame & Prize Payout Archive</h3>
                <p className="text-xs text-slate-500">Official recorded winners and cash prize settlement records for {new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
            {isAlreadyPublished ? (
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Month Published & Locked
              </span>
            ) : (
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300 flex items-center gap-1.5 shadow-2xs">
                <Clock className="w-4 h-4 text-amber-600" />
                Cycle In Progress (Unpublished)
              </span>
            )}
          </div>

          {isAlreadyPublished && pastWinners.length > 0 ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pastWinners.map(w => {
                  const prize = w.rank === 1 ? '₹2,100 + Trophy' : w.rank === 2 ? '₹1,100' : '₹500';
                  const bg = w.rank === 1 ? 'from-amber-500/20 via-amber-500/5 to-white border-amber-300' : w.rank === 2 ? 'from-slate-300/30 via-slate-100 to-white border-slate-300' : 'from-orange-500/20 via-orange-500/5 to-white border-orange-300';
                  const badgeColor = w.rank === 1 ? 'bg-amber-500' : w.rank === 2 ? 'bg-slate-400' : 'bg-orange-500';

                  return (
                    <div key={w.rank} className={`p-5 rounded-2xl bg-gradient-to-b ${bg} border shadow-xs flex flex-col justify-between space-y-4`}>
                      <div className="flex justify-between items-start">
                        <span className={`w-8 h-8 rounded-xl ${badgeColor} text-white font-black text-sm flex items-center justify-center shadow-xs`}>
                          {w.rank === 1 ? '1st' : w.rank === 2 ? '2nd' : '3rd'}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-white text-slate-800 border border-slate-200 shadow-2xs">
                          {prize}
                        </span>
                      </div>
                      <div>
                        <p className="font-extrabold text-slate-900 text-base">{w.name || 'Verified PRO Winner'}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{w.totalXp} Effective XP • {formatHours(w.studyMinutes)} Study</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> PRO Qualified
                        </span>
                        <span className="text-slate-400">UPI Payout Ready</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 text-xs text-slate-600 space-y-2">
                <p className="font-bold text-slate-800 text-sm">Payout Settlement Guidelines:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Official winners have been locked in the database (`learn_leaderboard_winners`).</li>
                  <li>Admin can contact the top 3 winners via their registered email on the Students CRM tab to disburse the ₹3,700 prize pool via UPI.</li>
                  <li>1st rank winner is additionally entitled to the DevLens Prep School/Home Trophy shipment.</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
              <Trophy className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-900 text-base">No Published Wall of Fame for {new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                This competition cycle is either currently active or has not been officially resolved yet. You can review competitors in the <strong>Competitors tab</strong> and click <strong>Publish Winners</strong> when ready, or use the month navigator at the top to view past resolved months.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Publish Winners Confirmation & Preview Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shadow-xs">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Confirm Winner Publication</h3>
                  <p className="text-xs text-slate-500">{new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })} Prize Cycle</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPublishModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Review the qualifying <strong>PRO Member</strong> winners who will receive official cash prizes (₹3,700 Total Pool) and be immortalized on the student Wall of Fame. 
                <span className="text-rose-600 font-bold ml-1">This action permanently locks the month.</span>
              </p>

              {/* Prize Allocation Cards */}
              <div className="space-y-2.5">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-amber-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      1st
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {eligibleProWinners[0] ? eligibleProWinners[0].name : 'No eligible PRO member'}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {eligibleProWinners[0] ? `${eligibleProWinners[0].effectiveXp} XP • PRO Member` : 'Cutoff not met'}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-200">
                    ₹2,100 + Trophy
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      2nd
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {eligibleProWinners[1] ? eligibleProWinners[1].name : 'No eligible PRO member'}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {eligibleProWinners[1] ? `${eligibleProWinners[1].effectiveXp} XP • PRO Member` : 'Cutoff not met'}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-slate-700 bg-slate-200 px-2.5 py-1 rounded-lg border border-slate-300">
                    ₹1,100 Prize
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-orange-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      3rd
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {eligibleProWinners[2] ? eligibleProWinners[2].name : 'No eligible PRO member'}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {eligibleProWinners[2] ? `${eligibleProWinners[2].effectiveXp} XP • PRO Member` : 'Cutoff not met'}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-orange-800 bg-orange-100 px-2.5 py-1 rounded-lg border border-orange-200">
                    ₹500 Prize
                  </span>
                </div>
              </div>

              {freeUsersInTop3.length > 0 && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    Note: <strong>{freeUsersInTop3.map(u => u.name).join(', ')}</strong> {freeUsersInTop3.length > 1 ? 'are' : 'is'} excluded from cash prize allocation because they are on the Free tier.
                  </span>
                </div>
              )}

              {/* Active Cycle Warning & Confirmation Checkbox */}
              {isCurrentActiveMonth && (
                <label className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={overrideConfirmed}
                    onChange={e => setOverrideConfirmed(e.target.checked)}
                    className="mt-0.5 rounded border-amber-400 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>
                    <strong>Early Publication Override:</strong> {new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' })} is still an <strong>ongoing competition cycle ({daysRemainingInMonth} days left)</strong>. I confirm immediate lock of results.
                  </span>
                </label>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowPublishModal(false)}
                disabled={publishing}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200/70 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmPublish}
                disabled={publishing || eligibleProWinners.length === 0 || (isCurrentActiveMonth && !overrideConfirmed)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                {publishing ? (
                  <span>Publishing...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Confirm & Lock Winners</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
