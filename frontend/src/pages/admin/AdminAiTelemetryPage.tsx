import { useState, useEffect } from 'react';
import { api } from '../../lib/api';
import { 
  Bot, Zap, DollarSign, Activity, AlertTriangle, 
  Search, RefreshCw, Flag, CheckCircle2, 
  XCircle, ShieldAlert, Sliders, ChevronLeft, 
  ChevronRight, X, Copy, Check, Sparkles,
  HelpCircle, BarChart3, ArrowUpRight, Cpu, Download
} from 'lucide-react';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';

interface AiStats {
  totalQueries: number;
  todayQueries: number;
  totalPromptTokens: number;
  totalCompletionTokens: number;
  totalTokens: number;
  totalCostUsd: number;
  totalCostInr: number;
  avgLatencyMs: number;
  successRatePercent: number;
  killswitchActive: boolean;
  freeDoubtsDailyLimit: number;
  proDoubtsDailyLimit: number;
  topTopics: { topic: string; count: number }[];
  modelBreakdown: { model: string; count: number }[];
  availableTopics: string[];
}

interface DoubtLogItem {
  id: string;
  userId: string | null;
  userEmail: string | null;
  topic: string;
  questionText: string;
  aiResponse: string | null;
  model: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCostUsd: number;
  estimatedCostInr: number;
  latencyMs: number;
  status: string;
  isFlagged: boolean;
  flagReason: string | null;
  createdAt: string;
}

export function AdminAiTelemetryPage() {
  const [stats, setStats] = useState<AiStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  // Doubts stream state
  const [doubts, setDoubts] = useState<DoubtLogItem[]>([]);
  const [tableLoading, setTableLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'SUCCESS' | 'FAILED'>('ALL');
  const [flagFilter, setFlagFilter] = useState<'ALL' | 'FLAGGED'>('ALL');
  const [exportingCsv, setExportingCsv] = useState(false);

  // Drawer / Inspection
  const [selectedDoubt, setSelectedDoubt] = useState<DoubtLogItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [editFlagReason, setEditFlagReason] = useState('');

  // Dynamic Settings form state
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [freeLimitInput, setFreeLimitInput] = useState<number>(5);
  const [proLimitInput, setProLimitInput] = useState<number>(100);
  const [dailyXpCapInput, setDailyXpCapInput] = useState<number>(1000);
  const [savingSettings, setSavingSettings] = useState(false);

  // Killswitch modal
  const [killswitchModalOpen, setKillswitchModalOpen] = useState(false);
  const [togglingKillswitch, setTogglingKillswitch] = useState(false);

  // 1. Fetch Stats
  const fetchStats = async () => {
    try {
      setStatsLoading(true);
      const res = await api.get('/learn/admin/ai/stats');
      setStats(res.data);
      if (res.data) {
        setFreeLimitInput(res.data.freeDoubtsDailyLimit ?? 5);
        setProLimitInput(res.data.proDoubtsDailyLimit ?? 100);
      }
    } catch (err: any) {
      toast.error('Failed to load AI telemetry statistics');
    } finally {
      setStatsLoading(false);
    }
  };

  // 2. Fetch Doubts Table
  const fetchDoubts = async () => {
    try {
      setTableLoading(true);
      const params: Record<string, any> = {
        page,
        size: 15,
      };
      if (searchQuery.trim()) params.query = searchQuery.trim();
      if (selectedTopic !== 'ALL') params.topic = selectedTopic;
      if (flagFilter === 'FLAGGED') params.isFlagged = true;
      if (statusFilter !== 'ALL') params.status = statusFilter;

      const res = await api.get('/learn/admin/ai/doubts', { params });
      setDoubts(res.data.content || []);
      setTotalPages(res.data.totalPages || 1);
      setTotalElements(res.data.totalElements || 0);
    } catch (err: any) {
      toast.error('Failed to fetch doubts log');
    } finally {
      setTableLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    fetchDoubts();
  }, [page, selectedTopic, flagFilter, statusFilter]);

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      setPage(0);
      fetchDoubts();
    }, 350);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Handle Killswitch Toggle
  const handleToggleKillswitch = async () => {
    if (!stats) return;
    try {
      setTogglingKillswitch(true);
      const nextState = !stats.killswitchActive;
      const res = await api.post('/learn/admin/ai/killswitch', { active: nextState });
      toast.success(res.data.message || 'Killswitch status updated');
      setKillswitchModalOpen(false);
      fetchStats();
    } catch (err: any) {
      toast.error('Failed to toggle emergency killswitch');
    } finally {
      setTogglingKillswitch(false);
    }
  };

  // Handle Save Settings
  const handleSaveSettings = async () => {
    try {
      setSavingSettings(true);
      await api.put('/learn/admin/ai/settings', {
        freeDoubtsDailyLimit: freeLimitInput,
        proDoubtsDailyLimit: proLimitInput,
        dailyXpCap: dailyXpCapInput
      });
      toast.success('Platform limits updated successfully!');
      setSettingsOpen(false);
      fetchStats();
    } catch (err: any) {
      toast.error('Failed to update platform settings');
    } finally {
      setSavingSettings(false);
    }
  };

  // Toggle Flag on Doubt
  const handleToggleFlag = async (doubt: DoubtLogItem) => {
    try {
      const nextFlag = !doubt.isFlagged;
      const reason = nextFlag ? (editFlagReason || 'Flagged by Admin for quality review') : '';
      await api.patch(`/learn/admin/ai/doubts/${doubt.id}/flag`, {
        isFlagged: nextFlag,
        flagReason: reason
      });
      
      toast.success(nextFlag ? 'Doubt flagged for review' : 'Doubt unflagged');
      
      // Update local state
      setDoubts(prev => prev.map(d => d.id === doubt.id ? { ...d, isFlagged: nextFlag, flagReason: reason } : d));
      if (selectedDoubt?.id === doubt.id) {
        setSelectedDoubt(prev => prev ? { ...prev, isFlagged: nextFlag, flagReason: reason } : null);
      }
    } catch (err: any) {
      toast.error('Failed to update flag status');
    }
  };

  // CSV Telemetry Export Handler
  const handleExportCsv = async () => {
    try {
      setExportingCsv(true);
      const params: Record<string, any> = {
        page: 0,
        size: 500, // Export up to 500 records matching current filter scope
      };
      if (searchQuery.trim()) params.query = searchQuery.trim();
      if (selectedTopic !== 'ALL') params.topic = selectedTopic;
      if (flagFilter === 'FLAGGED') params.isFlagged = true;
      if (statusFilter !== 'ALL') params.status = statusFilter;

      const res = await api.get('/learn/admin/ai/doubts', { params });
      const exportItems: DoubtLogItem[] = res.data?.content || doubts;

      if (exportItems.length === 0) {
        toast.error('No doubt telemetry data available to export');
        return;
      }

      const rows: (string | number)[][] = [
        [
          'Doubt ID',
          'Timestamp',
          'Student Email',
          'Curriculum Topic',
          'Student Question',
          'AI Pedagogical Response',
          'Model Used',
          'Prompt Tokens',
          'Completion Tokens',
          'Total Tokens',
          'Latency (ms)',
          'Cost (USD)',
          'Cost (INR)',
          'Execution Status',
          'Flagged',
          'Flag Reason'
        ],
        ...exportItems.map(item => [
          item.id,
          item.createdAt ? new Date(item.createdAt).toISOString() : '',
          item.userEmail || 'Anonymous',
          item.topic || 'General',
          item.questionText || '',
          item.aiResponse || '',
          item.model || 'Unknown',
          item.promptTokens || 0,
          item.completionTokens || 0,
          item.totalTokens || 0,
          item.latencyMs || 0,
          item.estimatedCostUsd || 0,
          item.estimatedCostInr || 0,
          item.status || '',
          item.isFlagged ? 'YES' : 'NO',
          item.flagReason || ''
        ])
      ];

      const csvContent = rows
        .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        .join('\r\n');

      const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      const filenameDate = new Date().toISOString().slice(0, 10);
      link.setAttribute('download', `devlens_ai_doubts_telemetry_${filenameDate}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success(`Exported ${exportItems.length} AI telemetry records to CSV`);
    } catch (err: any) {
      toast.error('Failed to export AI telemetry CSV');
    } finally {
      setExportingCsv(false);
    }
  };

  // Copy helper
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const formatCompact = (num: number = 0) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'k';
    return num.toLocaleString();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* ─── Top Header & Controls ────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              AI Doubt Telemetry & LLM Cost Console
            </h1>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time student queries, Groq token burn analytics, cost accounting & dynamic guardrails.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Settings Trigger Button */}
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-all shadow-xs"
          >
            <Sliders className="h-4 w-4 text-primary" />
            <span>Platform Limits</span>
          </button>

          {/* Export CSV Button */}
          <button
            onClick={handleExportCsv}
            disabled={exportingCsv}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-all shadow-xs disabled:opacity-50"
          >
            <Download className={`h-4 w-4 text-primary ${exportingCsv ? 'animate-bounce' : ''}`} />
            <span>{exportingCsv ? 'Exporting...' : 'Export CSV'}</span>
          </button>

          {/* Refresh Button */}
          <button
            onClick={() => { fetchStats(); fetchDoubts(); }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-all shadow-xs"
          >
            <RefreshCw className={`h-4 w-4 ${statsLoading || tableLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          {/* Emergency Killswitch Toggle Button */}
          <button
            onClick={() => setKillswitchModalOpen(true)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs border ${
              stats?.killswitchActive
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600'
                : 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border-rose-500/30'
            }`}
          >
            <ShieldAlert className="h-4 w-4" />
            <span>{stats?.killswitchActive ? 'Restore AI Service' : 'Emergency Killswitch'}</span>
          </button>
        </div>
      </div>

      {/* ─── Killswitch Active Emergency Alert Banner ─────────────────────── */}
      {stats?.killswitchActive && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border-2 border-rose-500/30 flex items-center justify-between gap-4 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-rose-500 tracking-tight">
                EMERGENCY KILLSWITCH ACTIVE — AI Doubt Solver is OFFLINE
              </h3>
              <p className="text-xs text-rose-400/90 mt-0.5">
                Students are currently receiving a scheduled maintenance notice. No API tokens are burning.
              </p>
            </div>
          </div>
          <button
            onClick={() => setKillswitchModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shrink-0 transition-colors shadow-sm"
          >
            Deactivate Now
          </button>
        </div>
      )}

      {/* ─── Dynamic Platform Settings Drawer / Panel ─────────────────────── */}
      {settingsOpen && (
        <div className="p-5 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sliders className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-bold text-foreground">Dynamic Platform Limits & LLM Guardrails</h3>
            </div>
            <button 
              onClick={() => setSettingsOpen(false)}
              className="p-1 rounded-lg hover:bg-muted text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl border border-border bg-card">
              <label className="text-xs font-bold text-foreground block">
                Free Daily Doubts Limit
              </label>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Max doubts a non-paying student can ask each day.
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={freeLimitInput}
                  onChange={(e) => setFreeLimitInput(parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-sm font-bold text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
                <span className="text-xs text-muted-foreground font-semibold">doubts/day</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-border bg-card">
              <label className="text-xs font-bold text-foreground block">
                Pro Daily Doubts Cap
              </label>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Safety limit for Pro subscribers to prevent abuse.
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <input
                  type="number"
                  min="10"
                  max="500"
                  value={proLimitInput}
                  onChange={(e) => setProLimitInput(parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-sm font-bold text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
                <span className="text-xs text-muted-foreground font-semibold">doubts/day</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-border bg-card">
              <label className="text-xs font-bold text-foreground block">
                Daily Study XP Cap
              </label>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Max XP from sessions to prevent leaderboard gaming.
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <input
                  type="number"
                  min="100"
                  max="10000"
                  step="50"
                  value={dailyXpCapInput}
                  onChange={(e) => setDailyXpCapInput(parseInt(e.target.value) || 1000)}
                  className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-sm font-bold text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
                <span className="text-xs text-muted-foreground font-semibold">XP/day</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={() => setSettingsOpen(false)}
              className="px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSettings}
              disabled={savingSettings}
              className="px-5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold flex items-center gap-2 shadow-xs transition-all disabled:opacity-50"
            >
              {savingSettings && <RefreshCw className="h-3.5 w-3.5 animate-spin" />}
              <span>Save Guardrails</span>
            </button>
          </div>
        </div>
      )}

      {/* ─── 4 Top KPI Telemetry Cards ────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Total Doubts */}
        <div className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">Total Doubts Solved</span>
            <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Bot className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              {statsLoading ? '...' : (stats?.totalQueries ?? 0).toLocaleString()}
            </h3>
            {stats && (
              <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                +{stats.todayQueries} today
              </span>
            )}
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>{stats?.successRatePercent ?? 100}% solver success rate</span>
          </div>
        </div>

        {/* Metric 2: Token Burn */}
        <div className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">LLM Token Burn</span>
            <div className="h-8 w-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Zap className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              {statsLoading ? '...' : formatCompact(stats?.totalTokens)}
            </h3>
            <span className="text-xs font-semibold text-muted-foreground">tokens</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground flex items-center justify-between">
            <span>In: {formatCompact(stats?.totalPromptTokens)}</span>
            <span>•</span>
            <span>Out: {formatCompact(stats?.totalCompletionTokens)}</span>
          </div>
        </div>

        {/* Metric 3: Cost Burn */}
        <div className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">Estimated LLM Cost</span>
            <div className="h-8 w-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <DollarSign className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              {statsLoading ? '...' : `₹${(stats?.totalCostInr ?? 0).toFixed(2)}`}
            </h3>
            <span className="text-xs font-semibold text-muted-foreground">
              (${stats?.totalCostUsd?.toFixed(4)} USD)
            </span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            {stats?.totalQueries && stats.totalQueries > 0
              ? `Approx ₹${((stats.totalCostInr || 0) / stats.totalQueries).toFixed(3)} per doubt solved`
              : 'Approx ₹0.00 per doubt solved'}
          </div>
        </div>

        {/* Metric 4: Latency & Health */}
        <div className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm relative overflow-hidden shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">Average Latency</span>
            <div className="h-8 w-8 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500">
              <Activity className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-foreground tracking-tight">
              {statsLoading ? '...' : `${Math.round(stats?.avgLatencyMs ?? 0)} ms`}
            </h3>
            <span className="text-xs font-bold text-sky-500 bg-sky-500/10 px-2 py-0.5 rounded-full">
              Instant
            </span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Dual-model Groq architecture</span>
          </div>
        </div>
      </div>

      {/* ─── Model Breakdown & Architecture Distribution ──────────────────── */}
      {stats?.modelBreakdown && stats.modelBreakdown.length > 0 && (
        <div className="p-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground">Groq Dual-Model Serving Breakdown</h4>
              <p className="text-[11px] text-muted-foreground">Inference distribution between Heavy (70B/120B) & Fast models</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {stats.modelBreakdown.map((item, idx) => {
              const totalQueries = stats.totalQueries || 1;
              const pct = Math.round((item.count / totalQueries) * 100);
              return (
                <div key={item.model || idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-background text-xs">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="font-semibold text-foreground font-mono text-[11px]">
                    {item.model && item.model.includes('/') ? item.model.split('/').pop() : item.model}
                  </span>
                  <span className="font-bold text-purple-600 bg-purple-500/10 px-1.5 py-0.5 rounded-md text-[10px]">
                    {item.count} ({pct}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── Topic Friction Radar (Most Asked Concepts) ───────────────────── */}
      {stats && stats.topTopics && stats.topTopics.length > 0 && (
        <div className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-bold text-foreground">Topic Friction Radar — Student Struggle Heatmap</h3>
            </div>
            <span className="text-xs text-muted-foreground">
              Curriculum chapters receiving highest doubts
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 pt-1">
            {stats.topTopics.slice(0, 6).map((item, idx) => (
              <button
                key={item.topic || idx}
                onClick={() => { setSelectedTopic(item.topic); setPage(0); }}
                className="p-3 rounded-xl border border-border/70 hover:border-primary/50 bg-background/80 hover:bg-muted text-left transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-muted-foreground">#{idx + 1}</span>
                  <span className="text-xs font-black text-primary bg-primary/10 px-1.5 py-0.5 rounded-md">
                    {item.count}
                  </span>
                </div>
                <div className="text-xs font-bold text-foreground mt-1.5 truncate group-hover:text-primary transition-colors">
                  {item.topic}
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">
                  <span>Filter stream</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── Live Doubt Stream Section ────────────────────────────────────── */}
      <div className="rounded-2xl border border-border bg-card shadow-2xs overflow-hidden">
        {/* Table Filters Header */}
        <div className="p-4 border-b border-border flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-muted/20">
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions or student email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-background text-xs font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value as any); setPage(0); }}
              className="px-3 py-2 rounded-xl border border-border bg-background text-xs font-semibold text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
            >
              <option value="ALL">All Statuses</option>
              <option value="SUCCESS">Success Only</option>
              <option value="FAILED">Failed Only</option>
            </select>

            {/* Topic Filter */}
            <select
              value={selectedTopic}
              onChange={(e) => { setSelectedTopic(e.target.value); setPage(0); }}
              className="px-3 py-2 rounded-xl border border-border bg-background text-xs font-semibold text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
            >
              <option value="ALL">All Curriculum Topics</option>
              {stats?.availableTopics?.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {/* Flagged Filter */}
            <div className="flex items-center rounded-xl border border-border bg-background p-0.5">
              <button
                onClick={() => { setFlagFilter('ALL'); setPage(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  flagFilter === 'ALL'
                    ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                All Queries
              </button>
              <button
                onClick={() => { setFlagFilter('FLAGGED'); setPage(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  flagFilter === 'FLAGGED'
                    ? 'bg-rose-500 text-white font-bold shadow-xs'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Flag className="h-3 w-3" />
                <span>Flagged Only</span>
              </button>
            </div>
          </div>
        </div>

        {/* Doubts Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/40 font-bold text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Topic</th>
                <th className="px-4 py-3">Student Doubt</th>
                <th className="px-4 py-3">Tokens</th>
                <th className="px-4 py-3">Latency</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tableLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={8} className="px-4 py-4 text-center text-muted-foreground">
                      Loading real-time telemetry stream...
                    </td>
                  </tr>
                ))
              ) : doubts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-muted-foreground">
                    <Bot className="h-10 w-10 mx-auto text-muted-foreground/40 mb-2" />
                    <p className="font-semibold">No AI doubts recorded matching current filters</p>
                    <p className="text-[11px] mt-0.5">As students ask questions to PrepLens AI, they will stream here live.</p>
                  </td>
                </tr>
              ) : (
                doubts.map((doubt) => (
                  <tr 
                    key={doubt.id} 
                    className="hover:bg-muted/40 transition-colors cursor-pointer group"
                    onClick={() => { setSelectedDoubt(doubt); setDrawerOpen(true); }}
                  >
                    {/* Time */}
                    <td className="px-4 py-3.5 whitespace-nowrap text-muted-foreground">
                      <div className="font-medium text-foreground">
                        {new Date(doubt.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        {new Date(doubt.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                      </div>
                    </td>

                    {/* Student */}
                    <td className="px-4 py-3.5 max-w-[160px] truncate">
                      <div className="font-semibold text-foreground truncate">
                        {doubt.userEmail || 'Anonymous'}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono">
                        {doubt.userId ? doubt.userId.substring(0, 8) + '...' : 'Guest'}
                      </div>
                    </td>

                    {/* Topic */}
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-primary/10 text-primary">
                        {doubt.topic || 'General'}
                      </span>
                    </td>

                    {/* Question */}
                    <td className="px-4 py-3.5 max-w-[320px]">
                      <div className="line-clamp-2 text-foreground font-medium">
                        {doubt.questionText}
                      </div>
                    </td>

                    {/* Tokens */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="font-bold text-foreground">
                        {doubt.totalTokens.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        ₹{(doubt.estimatedCostInr || 0).toFixed(3)}
                      </div>
                    </td>

                    {/* Latency */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="text-foreground font-medium">
                        {doubt.latencyMs} ms
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {doubt.status === 'SUCCESS' ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Success</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-500">
                          <XCircle className="h-3 w-3" />
                          <span>{doubt.status}</span>
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3.5 whitespace-nowrap text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleToggleFlag(doubt)}
                          title={doubt.isFlagged ? "Unflag doubt" : "Flag for review"}
                          className={`p-1.5 rounded-lg border transition-all ${
                            doubt.isFlagged
                              ? 'bg-rose-500/10 border-rose-500/30 text-rose-500'
                              : 'border-transparent text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`}
                        >
                          <Flag className={`h-3.5 w-3.5 ${doubt.isFlagged ? 'fill-rose-500' : ''}`} />
                        </button>

                        <button
                          onClick={() => { setSelectedDoubt(doubt); setDrawerOpen(true); }}
                          className="px-2.5 py-1 rounded-lg border border-border bg-background hover:bg-muted text-[11px] font-semibold text-foreground transition-colors"
                        >
                          Inspect
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-border flex items-center justify-between gap-4 bg-muted/10 text-xs text-muted-foreground">
          <span>
            Showing {doubts.length} of {totalElements.toLocaleString()} doubts
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-semibold text-foreground">
              Page {page + 1} of {totalPages || 1}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-40 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Slide-over Drawer for Question Inspection ─────────────────────── */}
      {drawerOpen && selectedDoubt && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-card border-l border-border h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-5 border-b border-border flex items-center justify-between bg-muted/20">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Doubt Telemetry Inspector</h3>
                  <p className="text-[11px] text-muted-foreground">ID: {selectedDoubt.id}</p>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Telemetry Stats Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl border border-border bg-muted/30">
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase">Total Tokens</span>
                  <p className="text-base font-black text-foreground mt-0.5">{selectedDoubt.totalTokens.toLocaleString()}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">In: {selectedDoubt.promptTokens} | Out: {selectedDoubt.completionTokens}</p>
                </div>

                <div className="p-3 rounded-xl border border-border bg-muted/30">
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase">Cost (INR)</span>
                  <p className="text-base font-black text-emerald-500 mt-0.5">₹{(selectedDoubt.estimatedCostInr || 0).toFixed(4)}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">${(selectedDoubt.estimatedCostUsd || 0).toFixed(6)} USD</p>
                </div>

                <div className="p-3 rounded-xl border border-border bg-muted/30">
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase">Latency</span>
                  <p className="text-base font-black text-sky-500 mt-0.5">{selectedDoubt.latencyMs} ms</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{selectedDoubt.model || 'Groq Fast'}</p>
                </div>

                <div className="p-3 rounded-xl border border-border bg-muted/30">
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase">Status</span>
                  <p className={`text-base font-black mt-0.5 ${selectedDoubt.status === 'SUCCESS' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {selectedDoubt.status}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {new Date(selectedDoubt.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>

              {/* Student Metadata Card */}
              <div className="p-4 rounded-xl border border-border bg-background flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Student Email</span>
                  <p className="text-sm font-bold text-foreground mt-0.5">{selectedDoubt.userEmail || 'Anonymous'}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Topic</span>
                  <p className="text-xs font-bold text-primary mt-0.5 bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
                    {selectedDoubt.topic}
                  </p>
                </div>
              </div>

              {/* Student Question Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <HelpCircle className="h-4 w-4 text-amber-500" />
                    Student's Typed Doubt
                  </span>
                  <button
                    onClick={() => handleCopy(selectedDoubt.questionText)}
                    className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground font-semibold"
                  >
                    {isCopied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                    <span>{isCopied ? 'Copied' : 'Copy Question'}</span>
                  </button>
                </div>
                <div className="p-4 rounded-xl border border-border bg-muted/20 text-xs text-foreground font-medium whitespace-pre-wrap leading-relaxed">
                  {selectedDoubt.questionText}
                </div>
              </div>

              {/* AI Markdown Response Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <Bot className="h-4 w-4 text-primary" />
                      AI Tutor Pedagogical Response
                    </span>
                    {selectedDoubt.model && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 font-bold border border-purple-200">
                        {selectedDoubt.model.includes('/') ? selectedDoubt.model.split('/').pop() : selectedDoubt.model}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleCopy(selectedDoubt.aiResponse || '')}
                    className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground font-semibold px-2 py-1 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Copy className="h-3 w-3" />
                    <span>Copy Answer</span>
                  </button>
                </div>

                <div className="p-5 rounded-2xl border border-border bg-background/90 max-h-[440px] overflow-y-auto shadow-inner">
                  {selectedDoubt.aiResponse ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none text-foreground leading-relaxed text-xs space-y-2.5">
                      <ReactMarkdown>{selectedDoubt.aiResponse}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      <Bot className="w-8 h-8 mx-auto opacity-40 mb-2" />
                      <p className="text-xs font-semibold">No response returned from model.</p>
                      <p className="text-[10px] opacity-70 mt-0.5">The query might have timed out or failed before completion.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Admin Flagging Section */}
              <div className="p-4 rounded-xl border border-border bg-muted/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <Flag className={`h-4 w-4 ${selectedDoubt.isFlagged ? 'text-rose-500 fill-rose-500' : 'text-muted-foreground'}`} />
                    Audit & Quality Flag
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    selectedDoubt.isFlagged ? 'bg-rose-500/10 text-rose-500' : 'bg-muted text-muted-foreground'
                  }`}>
                    {selectedDoubt.isFlagged ? 'Flagged for Review' : 'Unflagged'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-muted-foreground font-semibold">Quick reasons:</span>
                  {['Hallucination', 'Calculation error', 'Off-topic', 'Vague answer'].map(reason => (
                    <button
                      key={reason}
                      type="button"
                      onClick={() => setEditFlagReason(reason)}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-background border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {reason}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  placeholder="Flag reason (e.g. Hallucination, Incomplete formula, Inappropriate question)..."
                  value={editFlagReason || selectedDoubt.flagReason || ''}
                  onChange={(e) => setEditFlagReason(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    onClick={() => handleToggleFlag(selectedDoubt)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                      selectedDoubt.isFlagged
                        ? 'bg-muted hover:bg-muted/80 text-foreground border border-border'
                        : 'bg-rose-600 hover:bg-rose-700 text-white'
                    }`}
                  >
                    {selectedDoubt.isFlagged ? 'Remove Flag' : 'Flag This Doubt'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Killswitch Confirmation Modal ─────────────────────────────────── */}
      {killswitchModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${
                stats?.killswitchActive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
              }`}>
                {stats?.killswitchActive ? <CheckCircle2 className="h-6 w-6" /> : <AlertTriangle className="h-6 w-6" />}
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {stats?.killswitchActive ? 'Restore AI Doubt Solver?' : 'Activate Emergency Killswitch?'}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {stats?.killswitchActive ? 'Re-enable AI services' : 'Instant platform-wide shutdown'}
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {stats?.killswitchActive
                ? 'This will immediately bring the AI Doubt Solver back online for all students. Free daily quota and Pro limits will resume normal operation.'
                : 'This will IMMEDIATELY block all students from sending prompts to the LLM tutor. Students will be shown a polite maintenance message. Use this if token spend spikes unexpectedly or during model outage.'}
            </p>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setKillswitchModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleToggleKillswitch}
                disabled={togglingKillswitch}
                className={`px-5 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-xs flex items-center gap-2 ${
                  stats?.killswitchActive
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-rose-600 hover:bg-rose-700'
                }`}
              >
                {togglingKillswitch && <RefreshCw className="h-3.5 w-3.5 animate-spin" />}
                <span>{stats?.killswitchActive ? 'Confirm Restore' : 'Confirm Killswitch'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
