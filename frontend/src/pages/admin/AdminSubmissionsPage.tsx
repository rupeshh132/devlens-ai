import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import { 
  Clock, CheckCircle2, AlertCircle, Search, RefreshCw, 
  ExternalLink, Globe, Sparkles, 
  ShieldCheck, Award, BookOpen, Code2, AlertTriangle, 
  X, Check, Send, ChevronRight, Filter, Download
} from 'lucide-react';

function GithubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

interface SubmissionItem {
  id: string;
  userId?: string;
  userName?: string;
  userEmail?: string;
  moduleId?: string;
  moduleTitle?: string;
  courseId?: string;
  courseTitle?: string;
  status: 'PENDING_REVIEW' | 'COMPLETED' | 'REJECTED' | string;
  projectRepoUrl: string;
  projectDeployUrl: string;
  rejectionReason?: string;
  user?: { id?: string; email?: string; fullName?: string };
  module?: { id?: string; title?: string; courseTitle?: string };
}

interface SubmissionStats {
  pendingCount: number;
  approvedCount: number;
  rejectedCount: number;
  totalCount: number;
}

const REJECTION_PRESETS = [
  { 
    label: '🔒 Private / 404 Repo', 
    text: 'GitHub repository is currently private or inaccessible (404). Please ensure the repository is set to Public so the evaluator can review your commits and code.' 
  },
  { 
    label: '🌐 Broken Live Demo', 
    text: 'The live deployment URL is returning a build error, blank page, or 404. Please verify that your frontend & backend builds are passing and APIs are responsive.' 
  },
  { 
    label: '📄 Missing README Docs', 
    text: 'Your repository is missing a comprehensive README.md with setup instructions, environment variable keys, architecture diagram, and feature breakdown.' 
  },
  { 
    label: '🧩 Incomplete Rubric', 
    text: 'Some mandatory features specified in the capstone rubric are incomplete or missing. Please complete all checklist requirements before resubmitting.' 
  },
  { 
    label: '⚠️ Failing Tests / Lint', 
    text: 'Automated test suite or build verification failed. Please make sure all test suites pass cleanly with `npm test` or `mvn test`.' 
  },
];

export function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<SubmissionItem[]>([]);
  const [stats, setStats] = useState<SubmissionStats>({
    pendingCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
    totalCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);

  // Deep link params
  const [searchParams] = useSearchParams();
  const submissionIdParam = searchParams.get('submissionId');
  const statusParam = searchParams.get('status');

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<string>('ALL');
  const [activeTab, setActiveTab] = useState<'PENDING_REVIEW' | 'COMPLETED' | 'REJECTED' | 'ALL'>(
    (statusParam as any) || 'PENDING_REVIEW'
  );
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Sync tab if status query parameter changes
  useEffect(() => {
    const qStatus = searchParams.get('status');
    if (qStatus) {
      setActiveTab(qStatus as any);
    }
  }, [searchParams]);

  // Rejection Modal
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<SubmissionItem | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  // Fetch data
  const fetchData = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    try {
      // 1. Fetch submissions based on active tab
      const statusParam = activeTab === 'ALL' ? 'ALL' : activeTab;
      const res = await api.get(`/admin/submissions?status=${statusParam}`);
      if (res && res.data) {
        setSubmissions(Array.isArray(res.data) ? res.data : []);
      }

      // 2. Fetch stats
      try {
        const statsRes = await api.get('/admin/submissions/stats');
        if (statsRes && statsRes.data) {
          setStats({
            pendingCount: Number(statsRes.data.pendingCount || 0),
            approvedCount: Number(statsRes.data.approvedCount || 0),
            rejectedCount: Number(statsRes.data.rejectedCount || 0),
            totalCount: Number(statsRes.data.totalCount || 0),
          });
        }
      } catch (e) {
        // Fallback calculation if stats endpoint not reachable
        const rawList = Array.isArray(res?.data) ? res.data : [];
        setStats({
          pendingCount: rawList.filter((s: any) => s.status === 'PENDING_REVIEW').length,
          approvedCount: rawList.filter((s: any) => s.status === 'COMPLETED').length,
          rejectedCount: rawList.filter((s: any) => s.status === 'REJECTED').length,
          totalCount: rawList.length,
        });
      }

      setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    } catch (error) {
      console.error("Failed to fetch submissions", error);
      toast.error("Failed to load capstone submissions");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  // Auto-scroll to target submission if navigated via deep link
  useEffect(() => {
    if (submissionIdParam && submissions.length > 0) {
      const el = document.getElementById(`submission-${submissionIdParam}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [submissions, submissionIdParam]);

  // Handle Approve
  const handleApprove = async (sub: SubmissionItem) => {
    setProcessingId(sub.id);
    try {
      await api.post(`/admin/submissions/${sub.id}/approve`);
      toast.success(
        `Approved! 🏆 Awarded +100 XP to ${sub.userName || sub.userEmail || 'Student'} and issued certificate if track completed.`
      );
      await fetchData();
    } catch (error: any) {
      if (error?.response?.status === 409) {
        toast.info("This submission was already processed.");
      } else {
        toast.error("Failed to approve submission. Please try again.");
      }
      await fetchData();
    } finally {
      setProcessingId(null);
    }
  };

  // Open Rejection Modal
  const handleRejectClick = (sub: SubmissionItem) => {
    setSelectedSubmission(sub);
    setRejectionReason('');
    setRejectModalOpen(true);
  };

  // Handle Rejection Submit
  const handleRejectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubmission) return;
    if (!rejectionReason.trim()) {
      toast.error("Please enter a reason or select a preset feedback reason.");
      return;
    }

    setProcessingId(selectedSubmission.id);
    try {
      await api.post(`/admin/submissions/${selectedSubmission.id}/reject`, { reason: rejectionReason });
      toast.success(`Feedback sent to ${selectedSubmission.userName || selectedSubmission.userEmail || 'student'}. Status updated to Revision Requested.`);
      setRejectModalOpen(false);
      setSelectedSubmission(null);
      await fetchData();
    } catch (error: any) {
      if (error?.response?.status === 409) {
        toast.info("This submission was already processed.");
        setRejectModalOpen(false);
      } else {
        toast.error("Failed to reject submission.");
      }
      await fetchData();
    } finally {
      setProcessingId(null);
    }
  };

  // Seed Demo / Test Submission
  const handleSeedSample = async () => {
    setSeeding(true);
    try {
      await api.post('/admin/submissions/seed-sample');
      toast.success("Created a demo capstone submission! Ready for evaluation.");
      setActiveTab('PENDING_REVIEW');
      await fetchData();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to create sample submission. Ensure at least one user and project module exist.");
    } finally {
      setSeeding(false);
    }
  };

  // Export Submissions Evaluation Ledger to CSV (RFC-4180 standard)
  const handleExportCSV = () => {
    const listToExport = filteredSubmissions.length > 0 ? filteredSubmissions : submissions;
    if (!listToExport || listToExport.length === 0) {
      toast.info("No submissions found to export.");
      return;
    }

    const headers = [
      "Submission ID",
      "Student Name",
      "Student Email",
      "Career Track",
      "Capstone Project Module",
      "Status",
      "GitHub Repository",
      "Live Deployment URL",
      "Reviewer Feedback / Rejection Reason"
    ];

    const escapeCSV = (val: any) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = listToExport.map(item => [
      escapeCSV(item.id),
      escapeCSV(item.userName || item.user?.fullName || 'Anonymous Student'),
      escapeCSV(item.userEmail || item.user?.email || 'N/A'),
      escapeCSV(item.courseTitle || item.module?.courseTitle || 'Career Track'),
      escapeCSV(item.moduleTitle || item.module?.title || 'Capstone Project'),
      escapeCSV(item.status),
      escapeCSV(item.projectRepoUrl || ''),
      escapeCSV(item.projectDeployUrl || ''),
      escapeCSV(item.rejectionReason || '')
    ].join(','));

    const csvContent = [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    link.href = url;
    link.setAttribute('download', `devlens_capstone_submissions_${activeTab.toLowerCase()}_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`Exported ${listToExport.length} capstone submissions to CSV`);
  };

  // Dynamic list of unique Career Tracks for filtering
  const availableTracks = useMemo(() => {
    const tracks = new Set<string>();
    submissions.forEach(sub => {
      const track = sub.courseTitle || sub.module?.courseTitle;
      if (track) tracks.add(track);
    });
    return Array.from(tracks).sort();
  }, [submissions]);

  // Filtered Submissions by Search Query & Career Track
  const filteredSubmissions = useMemo(() => {
    return submissions.filter(item => {
      const courseTitle = item.courseTitle || item.module?.courseTitle || '';
      if (selectedTrack !== 'ALL' && courseTitle !== selectedTrack) {
        return false;
      }

      const email = (item.userEmail || item.user?.email || '').toLowerCase();
      const name = (item.userName || item.user?.fullName || '').toLowerCase();
      const moduleTitle = (item.moduleTitle || item.module?.title || '').toLowerCase();
      const trackTitle = courseTitle.toLowerCase();
      const repo = (item.projectRepoUrl || '').toLowerCase();
      const term = searchTerm.toLowerCase();

      return email.includes(term) || name.includes(term) || moduleTitle.includes(term) || trackTitle.includes(term) || repo.includes(term);
    });
  }, [submissions, searchTerm, selectedTrack]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      
      {/* ─── Top Header Banner ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              DevLens Academy & LMS
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="text-xs font-medium text-muted-foreground">
              Capstone Evaluations & Certifications
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Capstone Project Submissions
          </h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            Evaluate student GitHub repositories, test live cloud deployments against project rubrics, and award verified credentials with +100 XP.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-all shadow-2xs cursor-pointer"
            title="Download CSV evaluation ledger of current submissions"
          >
            <Download className="h-3.5 w-3.5 text-primary" />
            Export CSV
          </button>

          <button
            onClick={handleSeedSample}
            disabled={seeding}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-card hover:bg-muted text-foreground border border-border/80 transition-all shadow-2xs disabled:opacity-50 cursor-pointer"
            title="Create a realistic mock submission for review workflow testing"
          >
            {seeding ? (
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            )}
            Simulate Demo Submission
          </button>

          <button
            onClick={() => fetchData(true)}
            disabled={refreshing}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-all shadow-2xs cursor-pointer"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-muted-foreground ${refreshing ? 'animate-spin' : ''}`} />
            Refresh Queue
            {lastUpdated && (
              <span className="text-[10px] text-muted-foreground font-mono hidden sm:inline">
                ({lastUpdated})
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ─── 4 Top KPI Metrics ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Pending Reviews */}
        <div 
          role="button"
          tabIndex={0}
          onClick={() => setActiveTab('PENDING_REVIEW')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab('PENDING_REVIEW'); } }}
          className={`rounded-2xl border p-5 shadow-xs relative overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 ${
            activeTab === 'PENDING_REVIEW'
              ? 'bg-amber-500/10 border-amber-500/50 ring-2 ring-amber-500/30'
              : 'bg-card border-border hover:border-amber-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              Pending in Queue
              {activeTab === 'PENDING_REVIEW' && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              )}
            </span>
            <div className={`p-2 rounded-xl border ${
              stats.pendingCount > 0 
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' 
                : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
            }`}>
              {stats.pendingCount > 0 ? (
                <Clock className="h-5 w-5" />
              ) : (
                <CheckCircle2 className="h-5 w-5" />
              )}
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-foreground">
              {stats.pendingCount}
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
              stats.pendingCount > 0 
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20' 
                : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
            }`}>
              {stats.pendingCount > 0 ? 'Needs Evaluation' : 'Inbox Zero 🎉'}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {stats.pendingCount > 0 
              ? `${stats.pendingCount} capstone project(s) awaiting mentor decision` 
              : 'All submitted projects have been processed'}
          </p>
        </div>

        {/* Metric 2: Approved & Certified */}
        <div 
          role="button"
          tabIndex={0}
          onClick={() => setActiveTab('COMPLETED')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab('COMPLETED'); } }}
          className={`rounded-2xl border p-5 shadow-xs relative overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 ${
            activeTab === 'COMPLETED'
              ? 'bg-emerald-500/10 border-emerald-500/50 ring-2 ring-emerald-500/30'
              : 'bg-card border-border hover:border-emerald-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              Certified & Approved
              {activeTab === 'COMPLETED' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Award className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-foreground">
              {stats.approvedCount}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              +100 XP & Cert Issued
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Successfully verified projects with accredited credentials
          </p>
        </div>

        {/* Metric 3: Changes Requested */}
        <div 
          role="button"
          tabIndex={0}
          onClick={() => setActiveTab('REJECTED')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab('REJECTED'); } }}
          className={`rounded-2xl border p-5 shadow-xs relative overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-rose-500/40 ${
            activeTab === 'REJECTED'
              ? 'bg-rose-500/10 border-rose-500/50 ring-2 ring-rose-500/30'
              : 'bg-card border-border hover:border-rose-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              Changes Requested
              {activeTab === 'REJECTED' && (
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              )}
            </span>
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-foreground">
              {stats.rejectedCount}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/20">
              Awaiting Revisions
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Returned to students with specific code feedback
          </p>
        </div>

        {/* Metric 4: Review SLA & All Submissions */}
        <div 
          role="button"
          tabIndex={0}
          onClick={() => setActiveTab('ALL')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab('ALL'); } }}
          className={`rounded-2xl border p-5 shadow-xs relative overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-primary/40 ${
            activeTab === 'ALL'
              ? 'bg-primary/10 border-primary/50 ring-2 ring-primary/30'
              : 'bg-card border-border hover:border-primary/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              All Submissions / SLA
              {activeTab === 'ALL' && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              )}
            </span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-foreground">
              {stats.totalCount}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/20">
              SLA &lt; 24h
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {stats.totalCount} total submissions recorded • Click to view all
          </p>
        </div>

      </div>

      {/* ─── Search & Status Segmented Toolbar ────────────────────────────── */}
      <div className="bg-card rounded-2xl border border-border p-4 shadow-xs flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4">
        
        {/* Search & Career Track Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1 max-w-2xl">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by student, email, capstone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-8 py-2 text-sm bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Track Filter Dropdown */}
          <div className="relative min-w-[210px]">
            <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="w-full pl-8 pr-7 py-2 text-xs font-semibold bg-background border border-border rounded-xl text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
            >
              <option value="ALL">All Career Tracks {availableTracks.length > 0 ? `(${availableTracks.length})` : ''}</option>
              {availableTracks.map(track => (
                <option key={track} value={track}>
                  {track}
                </option>
              ))}
            </select>
            <ChevronRight className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground rotate-90 pointer-events-none" />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setActiveTab('PENDING_REVIEW')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'PENDING_REVIEW'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40'
            }`}
          >
            <Clock className="h-3.5 w-3.5" />
            Pending Review
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
              activeTab === 'PENDING_REVIEW' ? 'bg-amber-700 text-white' : 'bg-muted text-foreground'
            }`}>
              {stats.pendingCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('COMPLETED')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'COMPLETED'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40'
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            Approved & Certified
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
              activeTab === 'COMPLETED' ? 'bg-emerald-800 text-white' : 'bg-muted text-foreground'
            }`}>
              {stats.approvedCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('REJECTED')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'REJECTED'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40'
            }`}
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            Changes Requested
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
              activeTab === 'REJECTED' ? 'bg-rose-800 text-white' : 'bg-muted text-foreground'
            }`}>
              {stats.rejectedCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('ALL')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'ALL'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40'
            }`}
          >
            <Filter className="h-3.5 w-3.5" />
            All History
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
              activeTab === 'ALL' ? 'bg-primary/80 text-primary-foreground' : 'bg-muted text-foreground'
            }`}>
              {stats.totalCount}
            </span>
          </button>
        </div>

      </div>

      {/* ─── Main Submissions Content Area ─────────────────────────────────── */}
      {loading ? (
        <div className="bg-card rounded-2xl border border-border p-16 text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-3" />
          <p className="text-sm font-semibold text-foreground">Loading submissions...</p>
        </div>
      ) : filteredSubmissions.length === 0 ? (
        
        /* ─── Premium Empty State ─── */
        <div className="bg-card rounded-3xl border border-border p-12 text-center shadow-xs">
          <div className="mx-auto w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5 shadow-inner">
            {activeTab === 'PENDING_REVIEW' ? (
              <Sparkles className="h-8 w-8" />
            ) : (
              <CheckCircle2 className="h-8 w-8" />
            )}
          </div>

          <h3 className="text-xl font-bold text-foreground">
            {searchTerm || selectedTrack !== 'ALL'
              ? `No submissions found matching active search/track filter`
              : activeTab === 'PENDING_REVIEW' 
                ? 'All Caught Up! Inbox Zero 🎉'
                : `No ${activeTab.toLowerCase().replace('_', ' ')} submissions found.`
            }
          </h3>

          <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2 leading-relaxed">
            {searchTerm || selectedTrack !== 'ALL'
              ? 'Try modifying your search keywords or resetting your career track filter.'
              : activeTab === 'PENDING_REVIEW'
                ? 'There are currently no student projects waiting for evaluation. All submitted capstones have been verified and processed within SLA.'
                : 'Submissions under this status will appear here as students work through their career track capstones.'
            }
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {(searchTerm || selectedTrack !== 'ALL') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTrack('ALL');
                }}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all cursor-pointer"
              >
                Reset Search & Track Filters
              </button>
            )}
            <button
              onClick={handleSeedSample}
              disabled={seeding}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              Simulate Demo Submission for Testing
            </button>
          </div>
        </div>

      ) : (

        /* ─── Submissions List Cards ─── */
        <div className="space-y-4">
          {filteredSubmissions.map((sub) => {
            const email = sub.userEmail || sub.user?.email || 'student@devlens.ai';
            const name = sub.userName || sub.user?.fullName || email.split('@')[0];
            const initials = name
              .split(' ')
              .map(n => n[0])
              .slice(0, 2)
              .join('')
              .toUpperCase();
            
            const moduleTitle = sub.moduleTitle || sub.module?.title || 'Capstone Project';
            const courseTitle = sub.courseTitle || sub.module?.courseTitle || 'Developer Academy Track';

            const isPending = sub.status === 'PENDING_REVIEW';
            const isCompleted = sub.status === 'COMPLETED';
            const isRejected = sub.status === 'REJECTED';
            const isProcessing = processingId === sub.id;
            const isTarget = submissionIdParam === sub.id;

            return (
              <div 
                key={sub.id} 
                id={`submission-${sub.id}`}
                className={`bg-card rounded-2xl border p-6 shadow-xs transition-all relative overflow-hidden ${
                  isTarget 
                    ? 'border-primary ring-2 ring-primary/40 bg-primary/5 shadow-md' 
                    : 'border-border hover:border-primary/40'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Student & Module Details */}
                  <div className="flex items-start gap-4 flex-1">
                    {/* Student Initials Avatar */}
                    <Link
                      to={`/admin/developers?search=${encodeURIComponent(email)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-base shadow-sm shrink-0 hover:opacity-90 transition-opacity"
                      title="Open developer profile in new tab"
                    >
                      {initials}
                    </Link>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          to={`/admin/developers?search=${encodeURIComponent(email)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="font-extrabold text-foreground text-base hover:text-primary transition-colors flex items-center gap-1 group/user"
                          title="Open developer profile in new tab"
                        >
                          <span>{name}</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground group-hover/user:text-primary transition-colors opacity-70 group-hover/user:opacity-100" />
                        </Link>
                        <Link
                          to={`/admin/developers?search=${encodeURIComponent(email)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-muted-foreground bg-muted/60 hover:bg-muted hover:text-foreground px-2 py-0.5 rounded-md border border-border transition-colors"
                          title="Search this developer in Developer Directory"
                        >
                          {email}
                        </Link>

                        {/* Status Badge */}
                        {isPending && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            Pending Review
                          </span>
                        )}
                        {isCompleted && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                            <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                            Approved & Certified (+100 XP)
                          </span>
                        )}
                        {isRejected && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
                            <AlertTriangle className="h-3 w-3 text-rose-600 dark:text-rose-400" />
                            Revision Requested
                          </span>
                        )}
                      </div>

                      {/* Course Track & Capstone Module Info */}
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 font-semibold text-foreground bg-muted/60 px-2.5 py-1 rounded-lg border border-border">
                          <BookOpen className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                          {courseTitle}
                        </span>
                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                        <span className="inline-flex items-center gap-1 font-bold text-purple-700 dark:text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                          <Code2 className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                          {moduleTitle}
                        </span>
                      </div>

                      {/* Rejection Reason Box if Rejected */}
                      {isRejected && sub.rejectionReason && (
                        <div className="mt-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-800 dark:text-rose-200 leading-relaxed">
                          <span className="font-bold flex items-center gap-1 mb-1 text-rose-700 dark:text-rose-300">
                            <AlertCircle className="h-3.5 w-3.5" />
                            Feedback sent to student:
                          </span>
                          "{sub.rejectionReason}"
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Middle / Right: Links & Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:shrink-0">
                    
                    {/* Project Links */}
                    <div className="flex items-center gap-2">
                      {sub.projectRepoUrl ? (
                        <a
                          href={sub.projectRepoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-colors cursor-pointer"
                          title="Open GitHub Repository in new tab"
                        >
                          <GithubIcon className="h-3.5 w-3.5 text-foreground" />
                          GitHub Code
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground italic">No Repo URL</span>
                      )}

                      {sub.projectDeployUrl ? (
                        <a
                          href={sub.projectDeployUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 border border-blue-500/20 transition-colors cursor-pointer"
                          title="Open Live Production App in new tab"
                        >
                          <Globe className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                          Live Demo
                          <ExternalLink className="h-3 w-3 text-blue-500" />
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground italic">No Demo URL</span>
                      )}
                    </div>

                    {/* Action Buttons for Pending items */}
                    {isPending ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleApprove(sub)}
                          disabled={isProcessing}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                        >
                          {isProcessing ? (
                            <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          )}
                          Approve (+100 XP)
                        </button>

                        <button
                          onClick={() => handleRejectClick(sub)}
                          disabled={isProcessing}
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 transition-all disabled:opacity-50 cursor-pointer"
                        >
                          <AlertTriangle className="h-3.5 w-3.5" />
                          Request Changes
                        </button>
                      </div>
                    ) : isCompleted ? (
                      <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                        Evaluated & Passed
                      </div>
                    ) : (
                      <button
                        onClick={() => handleRejectClick(sub)}
                        className="px-3 py-1.5 rounded-xl border border-border hover:bg-muted text-xs font-semibold text-foreground transition-colors cursor-pointer"
                      >
                        Update Feedback
                      </button>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ─── Modern Reject & Request Changes Modal ─────────────────────────── */}
      {rejectModalOpen && selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-card w-full max-w-xl rounded-3xl shadow-2xl border border-border p-6 md:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Request Changes / Reject Submission
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    For {selectedSubmission.userName || selectedSubmission.userEmail} • {selectedSubmission.moduleTitle || 'Capstone'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setRejectModalOpen(false)}
                className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Feedback Presets (1-Click Chips) */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                1-Click Feedback Presets
              </label>
              <div className="flex flex-wrap gap-2">
                {REJECTION_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (rejectionReason.trim()) {
                        setRejectionReason(prev => prev + '\n\n' + preset.text);
                      } else {
                        setRejectionReason(preset.text);
                      }
                    }}
                    className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-muted hover:bg-muted/80 text-foreground border border-border transition-all text-left cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleRejectSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Detailed Student Feedback <span className="text-rose-500">*</span>
                </label>
                <textarea
                  className="w-full px-3.5 py-2.5 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed transition-all"
                  value={rejectionReason}
                  onChange={e => setRejectionReason(e.target.value)}
                  rows={5}
                  required
                  placeholder="Explain exactly what is missing, broken, or needs to be revised before certification can be granted..."
                />
                <p className="text-[11px] text-muted-foreground mt-1">
                  This guidance will be sent to the student and displayed on their capstone dashboard.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
                <button
                  type="button"
                  onClick={() => setRejectModalOpen(false)}
                  className="px-4 py-2.5 text-xs font-bold text-foreground hover:bg-muted rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={processingId !== null}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {processingId !== null ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                  Send Feedback & Request Revision
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
