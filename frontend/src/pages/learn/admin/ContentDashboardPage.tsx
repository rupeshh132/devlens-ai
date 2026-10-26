import { useState, useEffect, useMemo } from 'react';
import { api } from '../../../lib/api';
import { 
  CheckCircle, Video, FileText, XCircle, AlertCircle, RefreshCw, Filter, 
  ChevronDown, Search, X, ChevronLeft, ChevronRight, Eye, Sparkles, Download, 
  ArrowUpDown, ArrowUp, ArrowDown, ThumbsUp, ThumbsDown, MessageSquare, 
  AlertTriangle, ShieldCheck, ExternalLink, User, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface TopicStatus {
  exam_type_id: string;
  exam_name: string;
  exam_category: string;
  subject_id: string;
  subject_name: string;
  chapter_id: string;
  chapter_title: string;
  topic_id: string;
  topic_title: string;
  video_count: number;
  pdf_count: number;
  helpful_count?: number;
  doubt_count?: number;
  total_ratings?: number;
}

export interface FeedbackSummary {
  totalRatings: number;
  helpfulCount: number;
  doubtCount: number;
  textFeedbackCount: number;
  satisfactionRate: number;
  flaggedTopicsCount: number;
}

export interface StudentFeedbackItem {
  id: string;
  user_id: string;
  student_name: string;
  student_email: string;
  subscription_plan: string;
  content_id: string;
  content_title: string;
  content_type: string;
  topic_id: string;
  topic_title: string;
  chapter_id: string;
  chapter_title: string;
  subject_id: string;
  subject_name: string;
  exam_type_id: string;
  exam_name: string;
  is_helpful: boolean;
  feedback_text: string | null;
  created_at: string;
}

// Color badge per category (dark/light mode compatible)
const CATEGORY_COLORS: Record<string, string> = {
  SCHOOL: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20',
  ENGINEERING: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
  MEDICAL: 'bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-500/20',
  GOVT: 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20',
  CUET: 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20',
  GRADUATION: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20',
  PRIVATE: 'bg-muted text-muted-foreground border-border',
};

type StatusFilterType = 'ALL' | 'COMPLETE' | 'PARTIAL' | 'MISSING_VIDEO' | 'MISSING_PDF' | 'PENDING' | 'NEEDS_REVIEW';
type SortField = 'exam' | 'subject' | 'chapter' | 'topic' | 'video' | 'pdf' | 'status' | 'satisfaction';
type SortDirection = 'asc' | 'desc';

export function ContentDashboardPage() {
  const [data, setData] = useState<TopicStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>('ALL');
  const [selectedExam, setSelectedExam] = useState<string>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedChapter, setSelectedChapter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);
  const [sortField, setSortField] = useState<SortField>('topic');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  // View Mode: 'matrix' | 'feedback' | 'at-risk'
  const [activeView, setActiveView] = useState<'matrix' | 'feedback' | 'at-risk'>('matrix');

  // Feedback Telemetry States
  const [feedbackSummary, setFeedbackSummary] = useState<FeedbackSummary>({
    totalRatings: 0,
    helpfulCount: 0,
    doubtCount: 0,
    textFeedbackCount: 0,
    satisfactionRate: 100,
    flaggedTopicsCount: 0,
  });

  const [feedbackStream, setFeedbackStream] = useState<StudentFeedbackItem[]>([]);
  const [loadingStream, setLoadingStream] = useState(false);
  const [streamFilter, setStreamFilter] = useState<'ALL' | 'DOUBTS' | 'HELPFUL' | 'TEXT_ONLY'>('ALL');

  // Slide-over Topic Feedback Inspection
  const [activeFeedbackTopic, setActiveFeedbackTopic] = useState<TopicStatus | null>(null);
  const [topicFeedbackList, setTopicFeedbackList] = useState<any[]>([]);
  const [loadingTopicFeedback, setLoadingTopicFeedback] = useState(false);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const fetchStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const [resStatus, resSummary] = await Promise.all([
        api.get('/learn/admin/content/status'),
        api.get('/learn/admin/feedback/summary').catch(() => ({ data: null })),
      ]);
      setData(resStatus.data || []);
      if (resSummary?.data) {
        setFeedbackSummary(resSummary.data);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch content status');
    } finally {
      setLoading(false);
    }
  };

  const fetchFeedbackStream = async (filter: 'ALL' | 'DOUBTS' | 'HELPFUL' | 'TEXT_ONLY' = streamFilter) => {
    setLoadingStream(true);
    try {
      const res = await api.get(`/learn/admin/feedback/stream?filter=${filter}`);
      setFeedbackStream(res.data || []);
    } catch (e) {
      console.error('Failed to fetch feedback stream', e);
      toast.error('Failed to load live student feedback stream');
    } finally {
      setLoadingStream(false);
    }
  };

  const openTopicFeedbackDrawer = async (topic: TopicStatus) => {
    setActiveFeedbackTopic(topic);
    setLoadingTopicFeedback(true);
    try {
      const res = await api.get(`/learn/admin/feedback/topic/${topic.topic_id}`);
      setTopicFeedbackList(res.data || []);
    } catch (e) {
      console.error('Failed to fetch topic feedback', e);
      toast.error('Failed to load student feedback for this lesson');
    } finally {
      setLoadingTopicFeedback(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  useEffect(() => {
    if (activeView === 'feedback') {
      fetchFeedbackStream(streamFilter);
    }
  }, [activeView, streamFilter]);

  // Topics with doubts ranked by severity
  const atRiskTopics = useMemo(() => {
    return data
      .filter((t) => (t.doubt_count ?? 0) > 0)
      .sort((a, b) => (b.doubt_count ?? 0) - (a.doubt_count ?? 0));
  }, [data]);

  // Get unique exam types for filter dropdown
  const examOptions = useMemo(() => {
    const seen = new Set<string>();
    const options: { id: string; name: string; category: string }[] = [];
    for (const row of data) {
      if (!seen.has(row.exam_type_id)) {
        seen.add(row.exam_type_id);
        options.push({ id: row.exam_type_id, name: row.exam_name, category: row.exam_category });
      }
    }
    return options;
  }, [data]);

  // Unique subjects (scoped to selected exam if one is chosen)
  const subjectOptions = useMemo(() => {
    const seen = new Set<string>();
    const options: { id: string; name: string }[] = [];
    for (const row of data) {
      if (selectedExam !== 'ALL' && row.exam_type_id !== selectedExam) continue;
      if (!seen.has(row.subject_id)) {
        seen.add(row.subject_id);
        options.push({ id: row.subject_id, name: row.subject_name });
      }
    }
    return options;
  }, [data, selectedExam]);

  // Unique chapters (scoped to selected exam and subject)
  const chapterOptions = useMemo(() => {
    const seen = new Set<string>();
    const options: { id: string; title: string }[] = [];
    for (const row of data) {
      if (selectedExam !== 'ALL' && row.exam_type_id !== selectedExam) continue;
      if (selectedSubject !== 'ALL' && row.subject_id !== selectedSubject) continue;
      if (!seen.has(row.chapter_id)) {
        seen.add(row.chapter_id);
        options.push({ id: row.chapter_id, title: row.chapter_title });
      }
    }
    return options;
  }, [data, selectedExam, selectedSubject]);

  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = data.filter((item) => {
      const hasVideo = item.video_count > 0;
      const hasPdf = item.pdf_count > 0;

      // Cascading Exam, Subject, and Chapter filters
      if (selectedExam !== 'ALL' && item.exam_type_id !== selectedExam) return false;
      if (selectedSubject !== 'ALL' && item.subject_id !== selectedSubject) return false;
      if (selectedChapter !== 'ALL' && item.chapter_id !== selectedChapter) return false;

      // Status filter
      switch (statusFilter) {
        case 'COMPLETE': if (!hasVideo || !hasPdf) return false; break;
        case 'PARTIAL': if ((hasVideo && hasPdf) || (!hasVideo && !hasPdf)) return false; break; // either video or pdf missing
        case 'MISSING_VIDEO': if (hasVideo || !hasPdf) return false; break;
        case 'MISSING_PDF': if (!hasVideo || hasPdf) return false; break;
        case 'PENDING': if (hasVideo || hasPdf) return false; break;
        case 'NEEDS_REVIEW': if ((item.doubt_count || 0) === 0) return false; break;
        default: break;
      }

      // Search filter across topic, chapter, subject, and exam
      if (query) {
        const matchesTopic = item.topic_title?.toLowerCase().includes(query);
        const matchesChapter = item.chapter_title?.toLowerCase().includes(query);
        const matchesSubject = item.subject_name?.toLowerCase().includes(query);
        const matchesExam = item.exam_name?.toLowerCase().includes(query);
        if (!matchesTopic && !matchesChapter && !matchesSubject && !matchesExam) {
          return false;
        }
      }

      return true;
    });

    // Multi-column sorting
    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'exam':
          comparison = (a.exam_name || '').localeCompare(b.exam_name || '');
          break;
        case 'subject':
          comparison = (a.subject_name || '').localeCompare(b.subject_name || '');
          break;
        case 'chapter':
          comparison = (a.chapter_title || '').localeCompare(b.chapter_title || '');
          break;
        case 'topic':
          comparison = (a.topic_title || '').localeCompare(b.topic_title || '');
          break;
        case 'video':
          comparison = a.video_count - b.video_count;
          break;
        case 'pdf':
          comparison = a.pdf_count - b.pdf_count;
          break;
        case 'satisfaction': {
          const aRate = a.total_ratings ? ((a.helpful_count || 0) * 100) / a.total_ratings : 100;
          const bRate = b.total_ratings ? ((b.helpful_count || 0) * 100) / b.total_ratings : 100;
          comparison = aRate - bRate;
          break;
        }
        case 'status': {
          const getStatusRank = (row: TopicStatus) => {
            if (row.video_count > 0 && row.pdf_count > 0) return 3; // Complete
            if (row.video_count === 0 && row.pdf_count === 0) return 1; // Pending
            return 2; // Partial
          };
          comparison = getStatusRank(a) - getStatusRank(b);
          break;
        }
        default:
          comparison = 0;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [data, selectedExam, selectedSubject, selectedChapter, statusFilter, searchQuery, sortField, sortDirection]);

  // Reset page whenever search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedExam, selectedSubject, selectedChapter, statusFilter, pageSize, sortField, sortDirection]);

  // Pagination calculation
  const totalFilteredCount = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalFilteredCount / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, safeCurrentPage, pageSize]);

  // Stats scoped to selected exam, subject, chapter
  const scopedData = useMemo(() => {
    return data.filter((d) => {
      if (selectedExam !== 'ALL' && d.exam_type_id !== selectedExam) return false;
      if (selectedSubject !== 'ALL' && d.subject_id !== selectedSubject) return false;
      if (selectedChapter !== 'ALL' && d.chapter_id !== selectedChapter) return false;
      return true;
    });
  }, [data, selectedExam, selectedSubject, selectedChapter]);

  const totalTopics = scopedData.length;
  const completeTopics = scopedData.filter((i) => i.video_count > 0 && i.pdf_count > 0).length;
  const pendingTopics = scopedData.filter((i) => i.video_count === 0 && i.pdf_count === 0).length;
  const partialTopics = totalTopics - completeTopics - pendingTopics;

  // Category-wise summary for the overview panel
  const categorySummary = useMemo(() => {
    const map = new Map<string, { name: string; category: string; total: number; complete: number; pending: number }>();
    for (const row of data) {
      const key = row.exam_type_id;
      if (!map.has(key)) {
        map.set(key, { name: row.exam_name, category: row.exam_category, total: 0, complete: 0, pending: 0 });
      }
      const entry = map.get(key)!;
      entry.total++;
      if (row.video_count > 0 && row.pdf_count > 0) entry.complete++;
      if (row.video_count === 0 && row.pdf_count === 0) entry.pending++;
    }
    return Array.from(map.values());
  }, [data]);

  // Export filtered curriculum coverage matrix to CSV
  const handleExportCoverageCSV = () => {
    if (filteredData.length === 0) {
      toast.error('No curriculum records available to export with current filters');
      return;
    }

    const headers = [
      'Class / Exam',
      'Exam Category',
      'Subject',
      'Chapter',
      'Topic',
      'Video Count',
      'PDF Count',
      'Coverage Status',
      'Topic ID',
    ];

    const escapeCSV = (val: string | number | undefined | null) => {
      const str = String(val ?? '');
      if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    const rows = filteredData.map((item) => {
      const hasVideo = item.video_count > 0;
      const hasPdf = item.pdf_count > 0;
      const coverage = hasVideo && hasPdf ? 'Complete' : !hasVideo && !hasPdf ? 'Fully Pending' : 'Partial';

      return [
        escapeCSV(item.exam_name),
        escapeCSV(item.exam_category),
        escapeCSV(item.subject_name),
        escapeCSV(item.chapter_title),
        escapeCSV(item.topic_title),
        item.video_count,
        item.pdf_count,
        escapeCSV(coverage),
        escapeCSV(item.topic_id),
      ].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const examSlug = selectedExam !== 'ALL' ? selectedExam.toLowerCase().replace(/[^a-z0-9]/g, '_') : 'all';
    const dateStr = new Date().toISOString().split('T')[0];
    link.setAttribute('download', `devlens_curriculum_coverage_${examSlug}_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`Exported ${filteredData.length} curriculum topics to CSV`);
  };

  const renderSortHeader = (label: string, field: SortField, className = '') => {
    const isActive = sortField === field;
    return (
      <th
        className={`p-4 font-semibold select-none cursor-pointer transition-colors hover:text-foreground ${className}`}
        onClick={() => handleSort(field)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSort(field);
          }
        }}
      >
        <div className={`flex items-center gap-1.5 ${className.includes('text-center') ? 'justify-center' : className.includes('text-right') ? 'justify-end' : ''}`}>
          <span>{label}</span>
          {isActive ? (
            sortDirection === 'asc' ? (
              <ArrowUp className="w-3.5 h-3.5 text-primary shrink-0" />
            ) : (
              <ArrowDown className="w-3.5 h-3.5 text-primary shrink-0" />
            )
          ) : (
            <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground/40 opacity-70 hover:opacity-100 shrink-0" />
          )}
        </div>
      </th>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Content Status Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Track videos, notes & pending topics — grouped by Class / Exam.</p>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={handleExportCoverageCSV}
            className="bg-card hover:bg-muted text-foreground border border-border px-3.5 py-2 rounded-xl font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
            title="Download curriculum coverage ledger as CSV"
          >
            <Download className="w-3.5 h-3.5 text-primary" />
            Export Matrix CSV
          </button>
          <Link to="/admin/learn/pyq" className="bg-card hover:bg-muted text-foreground border border-border px-3.5 py-2 rounded-xl font-medium text-xs flex items-center gap-1.5 shadow-2xs transition-colors">
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            PYQ & Papers Vault
          </Link>
          <Link to="/admin/learn/upload" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-xl font-semibold text-xs transition-colors shadow-2xs">
            Upload Content
          </Link>
          <button 
            onClick={fetchStatus} 
            className="p-2 text-foreground hover:bg-muted bg-card rounded-xl border border-border transition-colors cursor-pointer" 
            title="Refresh Queue"
          >
            <RefreshCw className={`w-4 h-4 text-muted-foreground ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* ─── Modern Feature View Switcher Tabs ─────────────────────────── */}
      <div className="flex items-center gap-2 border-b border-border pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveView('matrix')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
            activeView === 'matrix'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Curriculum Coverage Matrix</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${activeView === 'matrix' ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground'}`}>
            {data.length}
          </span>
        </button>

        <button
          onClick={() => setActiveView('feedback')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
            activeView === 'feedback'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          <span>Live Student Remarks Feed</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${activeView === 'feedback' ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground'}`}>
            {feedbackSummary.totalRatings}
          </span>
        </button>

        <button
          onClick={() => setActiveView('at-risk')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
            activeView === 'at-risk'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          <span>At-Risk Lessons Queue</span>
          {atRiskTopics.length > 0 && (
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${activeView === 'at-risk' ? 'bg-white/20 text-white' : 'bg-rose-500/20 text-rose-700 dark:text-rose-300'}`}>
              {atRiskTopics.length}
            </span>
          )}
        </button>
      </div>

      {/* ─── Quality & Feedback Telemetry Banner ─────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-card border border-border shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Overall Satisfaction</p>
              <p className="text-xl font-black text-foreground">
                {feedbackSummary.satisfactionRate}% <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">({feedbackSummary.helpfulCount} 👍 / {feedbackSummary.doubtCount} 👎)</span>
              </p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground font-semibold">{feedbackSummary.totalRatings} Total Votes</span>
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Lessons with Doubts</p>
              <p className="text-xl font-black text-rose-600 dark:text-rose-400">
                {feedbackSummary.flaggedTopicsCount} <span className="text-xs font-semibold text-muted-foreground">Topics Flagged</span>
              </p>
            </div>
          </div>
          {feedbackSummary.flaggedTopicsCount > 0 && (
            <button
              onClick={() => { setActiveView('matrix'); setStatusFilter('NEEDS_REVIEW'); }}
              className="text-xs text-rose-600 dark:text-rose-400 font-bold hover:underline cursor-pointer"
            >
              Filter Now →
            </button>
          )}
        </div>

        <div className="p-4 rounded-2xl bg-card border border-border shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Written Remarks</p>
              <p className="text-xl font-black text-foreground">
                {feedbackSummary.textFeedbackCount} <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Student Remarks</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveView('feedback')}
            className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer"
          >
            Read Feed →
          </button>
        </div>
      </div>

      {/* ─── TAB 1: Curriculum Coverage Matrix ─────────────────────────── */}
      {activeView === 'matrix' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Category-wise Overview Cards */}
      {!loading && categorySummary.length > 0 && (
        <div>
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">By Class / Exam Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categorySummary.map((cat) => {
              const pct = cat.total > 0 ? Math.round((cat.complete / cat.total) * 100) : 0;
              const colorClass = CATEGORY_COLORS[cat.category] || CATEGORY_COLORS.PRIVATE;
              const examId = examOptions.find((e) => e.name === cat.name)?.id || '';
              const isActive = selectedExam !== 'ALL' && selectedExam === examId;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedExam(isActive ? 'ALL' : examId);
                    setSelectedSubject('ALL');
                    setSelectedChapter('ALL');
                  }}
                  className={`text-left w-full p-4 rounded-2xl border transition-all duration-200 cursor-pointer hover:scale-[1.01] hover:shadow-md active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-primary/40 ${
                    isActive 
                      ? 'border-primary/50 bg-primary/10 shadow-xs ring-2 ring-primary/30' 
                      : 'border-border bg-card hover:border-primary/40 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${colorClass}`}>
                      {cat.category || 'OTHER'}
                    </span>
                    {isActive && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-bold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>
                  <p className="font-extrabold text-foreground text-base leading-tight mb-1">{cat.name}</p>
                  <p className="text-xs text-muted-foreground">{cat.total} Topics</p>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{cat.complete} Complete</span>
                      <span className="font-semibold text-foreground">{pct}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${pct === 100 ? 'bg-emerald-500' : pct > 50 ? 'bg-primary' : 'bg-amber-500'}`}
                        style={{ width: `${Math.max(pct, pct > 0 ? 4 : 0)}%` }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Scoped Stats KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1: Total */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setStatusFilter('ALL')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setStatusFilter('ALL'); } }}
          className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer hover:scale-[1.01] hover:shadow-md active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-primary/40 ${
            statusFilter === 'ALL'
              ? 'bg-primary/10 border-primary/50 ring-2 ring-primary/30 shadow-xs'
              : 'bg-card border-border hover:border-primary/30 shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Total Topics {(selectedExam !== 'ALL' || selectedSubject !== 'ALL' || selectedChapter !== 'ALL') && '(Filtered)'}
            </p>
            {statusFilter === 'ALL' && (
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-md font-extrabold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Active
              </span>
            )}
          </div>
          <p className="text-3xl font-black text-foreground">{totalTopics}</p>
        </div>

        {/* Card 2: Complete */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setStatusFilter(statusFilter === 'COMPLETE' ? 'ALL' : 'COMPLETE')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setStatusFilter(statusFilter === 'COMPLETE' ? 'ALL' : 'COMPLETE'); } }}
          className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer hover:scale-[1.01] hover:shadow-md active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 ${
            statusFilter === 'COMPLETE'
              ? 'bg-emerald-500/15 border-emerald-500/50 ring-2 ring-emerald-500/30 shadow-xs'
              : 'bg-card border-border hover:border-emerald-500/30 shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Complete (Video + PDF)</p>
            {statusFilter === 'COMPLETE' && (
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-md font-extrabold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            )}
          </div>
          <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{completeTopics}</p>
        </div>

        {/* Card 3: Partial */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setStatusFilter(statusFilter === 'PARTIAL' ? 'ALL' : 'PARTIAL')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setStatusFilter(statusFilter === 'PARTIAL' ? 'ALL' : 'PARTIAL'); } }}
          className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer hover:scale-[1.01] hover:shadow-md active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 ${
            statusFilter === 'PARTIAL'
              ? 'bg-amber-500/15 border-amber-500/50 ring-2 ring-amber-500/30 shadow-xs'
              : 'bg-card border-border hover:border-amber-500/30 shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Partial (Missing 1)</p>
            {statusFilter === 'PARTIAL' && (
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-md font-extrabold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Active
              </span>
            )}
          </div>
          <p className="text-3xl font-black text-amber-600 dark:text-amber-400">{partialTopics}</p>
        </div>

        {/* Card 4: Pending */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setStatusFilter(statusFilter === 'PENDING' ? 'ALL' : 'PENDING')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setStatusFilter(statusFilter === 'PENDING' ? 'ALL' : 'PENDING'); } }}
          className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer hover:scale-[1.01] hover:shadow-md active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-rose-500/40 ${
            statusFilter === 'PENDING'
              ? 'bg-rose-500/15 border-rose-500/50 ring-2 ring-rose-500/30 shadow-xs'
              : 'bg-card border-border hover:border-rose-500/30 shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Fully Pending</p>
            {statusFilter === 'PENDING' && (
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-rose-500/20 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded-md font-extrabold">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                Active
              </span>
            )}
          </div>
          <p className="text-3xl font-black text-rose-600 dark:text-rose-400">{pendingTopics}</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-card rounded-2xl border border-border shadow-xs overflow-hidden">
        {/* Filter Bar */}
        <div className="border-b border-border p-4 bg-card/60 flex flex-col gap-3">
          {/* Top Row: Status Chips & Search */}
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex gap-1.5 flex-wrap">
              {(['ALL', 'COMPLETE', 'PARTIAL', 'MISSING_VIDEO', 'MISSING_PDF', 'PENDING', 'NEEDS_REVIEW'] as const).map((f) => {
                const labels: Record<StatusFilterType, string> = {
                  ALL: 'All Topics',
                  COMPLETE: '✅ Complete',
                  PARTIAL: '⚠️ Partial',
                  MISSING_VIDEO: '🎥 Missing Video',
                  MISSING_PDF: '📄 Missing PDF',
                  PENDING: '❌ Fully Pending',
                  NEEDS_REVIEW: `🚨 Has Doubts (${feedbackSummary.flaggedTopicsCount})`,
                };
                const activeColors: Record<StatusFilterType, string> = {
                  ALL: 'bg-primary text-primary-foreground shadow-xs font-bold',
                  COMPLETE: 'bg-emerald-600 text-white shadow-xs font-bold',
                  PARTIAL: 'bg-amber-600 text-white shadow-xs font-bold',
                  MISSING_VIDEO: 'bg-yellow-600 text-white shadow-xs font-bold',
                  MISSING_PDF: 'bg-orange-600 text-white shadow-xs font-bold',
                  PENDING: 'bg-rose-600 text-white shadow-xs font-bold',
                  NEEDS_REVIEW: 'bg-rose-600 text-white shadow-xs font-bold ring-2 ring-rose-400',
                };
                return (
                  <button
                    key={f}
                    onClick={() => setStatusFilter(f)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      statusFilter === f ? activeColors[f] : 'bg-muted/60 text-muted-foreground border border-border/40 hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {labels[f]}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topic, chapter, subject..."
                className="w-full pl-9 pr-8 py-1.5 text-xs bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Cascading Dropdowns: Exam -> Subject -> Chapter */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-border text-xs">
            <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>

            {/* Exam dropdown filter */}
            <div className="relative min-w-[150px] flex-1 sm:flex-initial">
              <select
                value={selectedExam}
                onChange={(e) => {
                  setSelectedExam(e.target.value);
                  setSelectedSubject('ALL');
                  setSelectedChapter('ALL');
                }}
                className="w-full bg-background border border-border rounded-xl px-2.5 py-1.5 pr-7 text-xs text-foreground outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer appearance-none truncate"
              >
                <option value="ALL">All Classes / Exams ({examOptions.length})</option>
                {examOptions.map((e) => (
                  <option key={e.id} value={e.id}>{e.name}</option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>

            {/* Subject dropdown filter */}
            <div className="relative min-w-[150px] flex-1 sm:flex-initial">
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedChapter('ALL');
                }}
                className="w-full bg-background border border-border rounded-xl px-2.5 py-1.5 pr-7 text-xs text-foreground outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer appearance-none truncate"
              >
                <option value="ALL">All Subjects ({subjectOptions.length})</option>
                {subjectOptions.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>

            {/* Chapter dropdown filter */}
            <div className="relative min-w-[160px] flex-1 sm:flex-initial">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-2.5 py-1.5 pr-7 text-xs text-foreground outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer appearance-none truncate"
              >
                <option value="ALL">All Chapters ({chapterOptions.length})</option>
                {chapterOptions.map((c) => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>

            {/* Reset All Filters Button */}
            {(selectedExam !== 'ALL' || selectedSubject !== 'ALL' || selectedChapter !== 'ALL' || statusFilter !== 'ALL' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedExam('ALL');
                  setSelectedSubject('ALL');
                  setSelectedChapter('ALL');
                  setStatusFilter('ALL');
                  setSearchQuery('');
                }}
                className="text-xs text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-semibold px-2.5 py-1 rounded-xl bg-rose-500/10 border border-rose-500/20 transition-colors whitespace-nowrap ml-auto cursor-pointer"
                title="Reset all filters"
              >
                ✕ Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/40 border-b border-border text-muted-foreground text-xs uppercase tracking-wider">
                {renderSortHeader('Class / Exam', 'exam')}
                {renderSortHeader('Subject', 'subject')}
                {renderSortHeader('Chapter', 'chapter')}
                {renderSortHeader('Topic', 'topic')}
                {renderSortHeader('Video', 'video', 'text-center')}
                <th className="p-4 font-semibold text-center select-none">AI Notes</th>
                {renderSortHeader('Notes PDF', 'pdf', 'text-center')}
                {renderSortHeader('Feedback', 'satisfaction', 'text-center')}
                {renderSortHeader('Status', 'status', 'text-center')}
                <th className="p-4 font-semibold text-right select-none">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={10} className="p-12 text-center text-muted-foreground text-sm">Loading curriculum matrix...</td></tr>
              ) : error ? (
                <tr>
                  <td colSpan={10} className="p-12 text-center text-rose-500">
                    <div className="flex items-center justify-center gap-2"><AlertCircle className="w-5 h-5" /> {error}</div>
                  </td>
                </tr>
              ) : filteredData.length === 0 ? (
                <tr>
                  <td colSpan={10} className="p-12 text-center text-muted-foreground text-sm">
                    {searchQuery ? (
                      <div className="flex flex-col items-center justify-center gap-2">
                        <p>No topics matching &ldquo;<span className="font-semibold text-foreground">{searchQuery}</span>&rdquo;</p>
                        <button
                          onClick={() => setSearchQuery('')}
                          className="text-xs text-primary hover:underline font-medium cursor-pointer"
                        >
                          Clear search filter
                        </button>
                      </div>
                    ) : (
                      'No topics found matching the active filter criteria.'
                    )}
                  </td>
                </tr>
              ) : (
                paginatedData.map((item) => {
                  const hasVideo = item.video_count > 0;
                  const hasPdf = item.pdf_count > 0;
                  const isComplete = hasVideo && hasPdf;
                  const isPending = !hasVideo && !hasPdf;
                  const catColor = CATEGORY_COLORS[item.exam_category] || CATEGORY_COLORS.PRIVATE;

                  return (
                    <tr key={item.topic_id} className="border-b border-border/60 hover:bg-muted/30 transition-colors">
                      {/* Class / Exam Badge */}
                      <td className="p-4">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap ${catColor}`}>
                          {item.exam_name}
                        </span>
                      </td>

                      <td className="p-4 text-xs text-muted-foreground whitespace-nowrap">{item.subject_name}</td>
                      <td className="p-4 text-xs text-foreground font-medium">{item.chapter_title}</td>
                      <td className="p-4 text-xs font-semibold text-foreground">{item.topic_title}</td>

                      {/* Video Verification Column */}
                      <td className="p-4 text-center">
                        {hasVideo ? (
                          <Link
                            to={`/learn/topic/${item.topic_id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/20 transition-all text-xs font-bold cursor-pointer"
                            title={`Click to watch & verify ${item.video_count} video lecture(s) in study mode (opens new tab)`}
                          >
                            <Video className="w-3.5 h-3.5" />
                            <span>{item.video_count}</span>
                          </Link>
                        ) : (
                          <Link
                            to={`/admin/learn/upload?exam=${item.exam_type_id}&subject=${item.subject_id}&chapter=${item.chapter_id}&topic=${item.topic_id}`}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted/60 text-muted-foreground hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/30 border border-border transition-all text-[11px] font-medium"
                            title="No video uploaded yet. Click to upload video"
                          >
                            <Video className="w-3.5 h-3.5" />
                            <span>+Add</span>
                          </Link>
                        )}
                      </td>

                      {/* AI Notes Verification Column */}
                      <td className="p-4 text-center">
                        <Link
                          to={`/learn/topic/${item.topic_id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-all text-xs font-semibold cursor-pointer"
                          title="Verified AI Smart Notes & Transcript active (click to preview as student)"
                        >
                          <Sparkles className="w-3 h-3 text-indigo-500 animate-pulse" />
                          <span>Active</span>
                        </Link>
                      </td>

                      {/* Notes PDF Verification Column */}
                      <td className="p-4 text-center">
                        {hasPdf ? (
                          <Link
                            to={`/learn/topic/${item.topic_id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 hover:bg-sky-500/25 border border-sky-500/20 transition-all text-xs font-bold cursor-pointer"
                            title={`Click to preview & verify ${item.pdf_count} notes PDF(s) in study mode (opens new tab)`}
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>{item.pdf_count}</span>
                          </Link>
                        ) : (
                          <Link
                            to={`/admin/learn/upload?exam=${item.exam_type_id}&subject=${item.subject_id}&chapter=${item.chapter_id}&topic=${item.topic_id}`}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted/60 text-muted-foreground hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/30 border border-border transition-all text-[11px] font-medium"
                            title="No notes PDF uploaded yet. Click to upload PDF"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>+Add</span>
                          </Link>
                        )}
                      </td>

                      {/* Student Feedback & Satisfaction Column */}
                      <td className="p-4 text-center">
                        {item.total_ratings && item.total_ratings > 0 ? (
                          <button
                            type="button"
                            onClick={() => openTopicFeedbackDrawer(item)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                              item.doubt_count && item.doubt_count > 0
                                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30 hover:bg-amber-500/25 shadow-2xs'
                                : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25'
                            }`}
                            title={`Click to inspect ${item.total_ratings} student rating(s)`}
                          >
                            {item.doubt_count && item.doubt_count > 0 ? (
                              <>
                                <ThumbsDown className="w-3.5 h-3.5 text-amber-500" />
                                <span>{item.doubt_count} Doubt{item.doubt_count > 1 ? 's' : ''}</span>
                                <span className="opacity-75 text-[10px]">({Math.round(((item.helpful_count || 0) * 100) / item.total_ratings)}%)</span>
                              </>
                            ) : (
                              <>
                                <ThumbsUp className="w-3.5 h-3.5 text-emerald-500" />
                                <span>{item.helpful_count} Helpful (100%)</span>
                              </>
                            )}
                          </button>
                        ) : (
                          <span className="text-[11px] text-muted-foreground/60 italic">No votes yet</span>
                        )}
                      </td>

                      {/* Status Badge */}
                      <td className="p-4 text-center">
                        {isComplete ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                            <CheckCircle className="w-3 h-3" /> Complete
                          </span>
                        ) : isPending ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/20">
                            <XCircle className="w-3 h-3" /> Pending
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                            <AlertCircle className="w-3 h-3" /> Partial
                          </span>
                        )}
                      </td>

                      {/* Smart Action Column */}
                      <td className="p-4 text-right">
                        {isComplete ? (
                          <div className="inline-flex items-center gap-2">
                            <Link
                              to={`/learn/topic/${item.topic_id}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
                              title="Preview student study view in new tab"
                            >
                              <Eye className="w-3.5 h-3.5" /> Preview
                            </Link>
                            <Link
                              to={`/admin/learn/upload?exam=${item.exam_type_id}&subject=${item.subject_id}&chapter=${item.chapter_id}&topic=${item.topic_id}`}
                              className="text-xs text-muted-foreground hover:text-foreground font-medium hover:underline whitespace-nowrap"
                              title="Upload additional materials"
                            >
                              Manage
                            </Link>
                          </div>
                        ) : isPending ? (
                          <Link
                            to={`/admin/learn/upload?exam=${item.exam_type_id}&subject=${item.subject_id}&chapter=${item.chapter_id}&topic=${item.topic_id}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xs transition-colors whitespace-nowrap"
                          >
                            + Add Content
                          </Link>
                        ) : (
                          <div className="inline-flex items-center gap-2">
                            <Link
                              to={`/learn/topic/${item.topic_id}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                              title="Preview uploaded material in new tab"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                              to={`/admin/learn/upload?exam=${item.exam_type_id}&subject=${item.subject_id}&chapter=${item.chapter_id}&topic=${item.topic_id}`}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                                !hasVideo
                                  ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 hover:bg-amber-500/25 border border-amber-500/20'
                                  : 'bg-sky-500/15 text-sky-700 dark:text-sky-300 hover:bg-sky-500/25 border border-sky-500/20'
                              }`}
                            >
                              {!hasVideo ? '+ Add Video' : '+ Add PDF'}
                            </Link>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        {!loading && totalFilteredCount > 0 && (
          <div className="border-t border-border px-4 py-3 bg-muted/20 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>
                Showing <strong className="text-foreground">{Math.min((safeCurrentPage - 1) * pageSize + 1, totalFilteredCount)}</strong> to{' '}
                <strong className="text-foreground">{Math.min(safeCurrentPage * pageSize, totalFilteredCount)}</strong> of{' '}
                <strong className="text-foreground">{totalFilteredCount}</strong> topics
              </span>
              <div className="flex items-center gap-1.5 text-xs">
                <span>Rows:</span>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="bg-background border border-border rounded-lg px-2 py-1 text-foreground outline-hidden focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={safeCurrentPage <= 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground disabled:opacity-40 disabled:cursor-not-allowed font-medium text-xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <span className="text-xs font-semibold px-2 text-foreground">
                Page {safeCurrentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={safeCurrentPage >= totalPages}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground disabled:opacity-40 disabled:cursor-not-allowed font-medium text-xs transition-colors cursor-pointer"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )}

      {/* ─── TAB 2: Live Student Remarks Feed ─────────────────────────── */}
      {activeView === 'feedback' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-card rounded-2xl border border-border p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-extrabold text-foreground">Live Student Feedback Stream</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Every rating and written critique submitted on lecture videos and notes across all classes.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {(['ALL', 'DOUBTS', 'HELPFUL', 'TEXT_ONLY'] as const).map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setStreamFilter(filterOption)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    streamFilter === filterOption
                      ? 'bg-primary text-primary-foreground shadow-xs font-bold'
                      : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {filterOption === 'ALL' && 'All Feedback'}
                  {filterOption === 'DOUBTS' && '⚠️ Had Doubts'}
                  {filterOption === 'HELPFUL' && '👍 Helpful'}
                  {filterOption === 'TEXT_ONLY' && '💬 With Remarks'}
                </button>
              ))}

              <button
                onClick={() => fetchFeedbackStream(streamFilter)}
                className="p-2 text-foreground hover:bg-muted bg-card rounded-xl border border-border transition-colors cursor-pointer"
                title="Refresh Stream"
              >
                <RefreshCw className={`w-4 h-4 text-muted-foreground ${loadingStream ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {loadingStream ? (
            <div className="p-12 text-center text-muted-foreground text-sm bg-card rounded-2xl border border-border">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-primary mb-2" />
              Loading real-time student remarks...
            </div>
          ) : feedbackStream.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground text-sm bg-card rounded-2xl border border-border">
              <p className="font-semibold text-foreground">No student feedback found for this filter.</p>
              <p className="text-xs mt-1">Student ratings submitted from lesson pages will appear here in real-time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feedbackStream.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl border border-border p-5 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header Row: Student info & rating badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                          {item.student_name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-foreground truncate">{item.student_name}</p>
                          <p className="text-[11px] text-muted-foreground truncate">{item.student_email}</p>
                        </div>
                      </div>

                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shrink-0 ${
                        item.is_helpful
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                          : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                      }`}>
                        {item.is_helpful ? <ThumbsUp className="w-3.5 h-3.5" /> : <ThumbsDown className="w-3.5 h-3.5" />}
                        <span>{item.is_helpful ? 'Helpful' : 'Had Doubts'}</span>
                      </span>
                    </div>

                    {/* Lesson breadcrumb */}
                    <div className="mb-3 p-2.5 rounded-xl bg-muted/30 border border-border/60 text-xs">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-0.5">
                        {item.exam_name} • {item.subject_name}
                      </span>
                      <p className="font-semibold text-foreground truncate">{item.topic_title}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{item.content_title} ({item.content_type})</p>
                    </div>

                    {/* Feedback Text Remark */}
                    {item.feedback_text ? (
                      <div className="p-3 rounded-xl bg-background border border-border/80 text-xs text-foreground italic relative mb-4">
                        <span className="text-primary font-serif text-lg leading-none absolute -top-1 left-2">&ldquo;</span>
                        <p className="pl-3">{item.feedback_text}</p>
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground italic mb-4">
                        (Student voted {item.is_helpful ? 'Helpful' : 'Had Doubts'} without written comments)
                      </p>
                    )}
                  </div>

                  {/* Footer actions */}
                  <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>{new Date(item.created_at).toLocaleString()}</span>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/learn/topic/${item.topic_id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                      >
                        Preview <ExternalLink className="w-3 h-3" />
                      </Link>
                      <Link
                        to={`/admin/learn/upload?exam=${item.exam_type_id}&subject=${item.subject_id}&chapter=${item.chapter_id}&topic=${item.topic_id}`}
                        className="text-xs text-muted-foreground hover:text-foreground font-semibold hover:underline"
                      >
                        Edit Topic
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─── TAB 3: At-Risk Lessons Queue ─────────────────────────── */}
      {activeView === 'at-risk' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-card rounded-2xl border border-border p-5 shadow-xs flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                <span>At-Risk Lessons Queue ({atRiskTopics.length} Flagged)</span>
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Topics where students reported doubts or confusion, ranked by highest doubt count. Review instructor quality or re-record lessons.
              </p>
            </div>
          </div>

          {atRiskTopics.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground text-sm bg-card rounded-2xl border border-border">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <p className="font-bold text-foreground">Zero At-Risk Lessons!</p>
              <p className="text-xs mt-1">All student feedback is currently 100% positive with no doubts reported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {atRiskTopics.map((topic) => {
                const total = topic.total_ratings || 0;
                const doubts = topic.doubt_count || 0;
                const helpful = topic.helpful_count || 0;
                const doubtRate = total > 0 ? Math.round((doubts / total) * 100) : 0;
                const satisfactionRate = total > 0 ? Math.round((helpful / total) * 100) : 0;

                return (
                  <div
                    key={topic.topic_id}
                    className="bg-card rounded-2xl border border-rose-500/30 p-5 shadow-xs flex flex-col justify-between hover:border-rose-500/50 transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300">
                          {topic.exam_name} • {topic.subject_name}
                        </span>
                        <span className="text-xs font-extrabold text-rose-600 dark:text-rose-400">
                          {doubtRate}% Doubts
                        </span>
                      </div>

                      <h3 className="font-extrabold text-foreground text-base mb-1">{topic.topic_title}</h3>
                      <p className="text-xs text-muted-foreground mb-4">{topic.chapter_title}</p>

                      {/* Visual Doubt vs Satisfaction Bar */}
                      <div className="space-y-1.5 mb-4">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span className="text-rose-600 dark:text-rose-400 font-bold">{doubts} Reported Doubts</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{helpful} Helpful ({satisfactionRate}%)</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 flex overflow-hidden">
                          <div className="bg-rose-500 h-2 transition-all" style={{ width: `${doubtRate}%` }} />
                          <div className="bg-emerald-500 h-2 transition-all" style={{ width: `${100 - doubtRate}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                      <button
                        onClick={() => openTopicFeedbackDrawer(topic)}
                        className="px-3 py-1.5 rounded-xl font-bold text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 transition-colors cursor-pointer"
                      >
                        Inspect Comments ({total})
                      </button>

                      <div className="flex items-center gap-2">
                        <Link
                          to={`/learn/topic/${topic.topic_id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-xl font-semibold text-xs border border-border hover:bg-muted text-foreground transition-colors"
                        >
                          Preview
                        </Link>
                        <Link
                          to={`/admin/learn/upload?exam=${topic.exam_type_id}&subject=${topic.subject_id}&chapter=${topic.chapter_id}&topic=${topic.topic_id}`}
                          className="px-3 py-1.5 rounded-xl font-bold text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-2xs"
                        >
                          Update Video
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ─── Slide-over Topic Feedback Inspection Drawer ─────────────────────────── */}
      {activeFeedbackTopic && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-end animate-in fade-in duration-200">
          <div className="bg-card w-full max-w-lg h-full border-l border-border shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-6 border-b border-border flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  {activeFeedbackTopic.exam_name} • {activeFeedbackTopic.subject_name}
                </span>
                <h2 className="text-lg font-black text-foreground mt-2">{activeFeedbackTopic.topic_title}</h2>
                <p className="text-xs text-muted-foreground mt-0.5">{activeFeedbackTopic.chapter_title}</p>
              </div>

              <button
                onClick={() => setActiveFeedbackTopic(null)}
                className="p-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                title="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Telemetry Chips */}
            <div className="p-4 bg-muted/30 border-b border-border grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-card border border-border">
                <p className="text-[10px] font-bold text-muted-foreground uppercase">Total Votes</p>
                <p className="text-base font-black text-foreground">{activeFeedbackTopic.total_ratings || 0}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                <p className="text-[10px] font-bold uppercase">Helpful</p>
                <p className="text-base font-black">{activeFeedbackTopic.helpful_count || 0}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400">
                <p className="text-[10px] font-bold uppercase">Doubts</p>
                <p className="text-base font-black">{activeFeedbackTopic.doubt_count || 0}</p>
              </div>
            </div>

            {/* List of Feedback Remarks */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Student Reviews & Criticisms ({topicFeedbackList.length})
              </h3>

              {loadingTopicFeedback ? (
                <div className="py-12 text-center text-xs text-muted-foreground">
                  <RefreshCw className="w-5 h-5 animate-spin mx-auto text-primary mb-2" />
                  Loading student feedback...
                </div>
              ) : topicFeedbackList.length === 0 ? (
                <div className="py-12 text-center text-xs text-muted-foreground bg-muted/20 rounded-2xl p-6">
                  <p className="font-semibold text-foreground">No detailed feedback comments yet.</p>
                  <p className="mt-1">Students have not provided written notes for this topic.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {topicFeedbackList.map((fb: any) => (
                    <div key={fb.id} className="p-4 rounded-2xl bg-muted/20 border border-border/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <User className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="font-bold text-foreground truncate">{fb.student_name}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground uppercase font-bold">
                            {fb.subscription_plan || 'FREE'}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 ${
                          fb.is_helpful
                            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                        }`}>
                          {fb.is_helpful ? '👍 Helpful' : '👎 Had Doubts'}
                        </span>
                      </div>

                      {fb.feedback_text ? (
                        <div className="p-2.5 rounded-xl bg-card border border-border text-foreground italic">
                          &ldquo;{fb.feedback_text}&rdquo;
                        </div>
                      ) : (
                        <p className="text-[11px] text-muted-foreground italic">
                          No written remark provided.
                        </p>
                      )}

                      <p className="text-[10px] text-muted-foreground text-right">
                        {new Date(fb.created_at).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-border bg-muted/20 flex items-center justify-between gap-3">
              <Link
                to={`/learn/topic/${activeFeedbackTopic.topic_id}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold border border-border hover:bg-muted text-foreground transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" /> Preview Lesson
              </Link>
              <Link
                to={`/admin/learn/upload?exam=${activeFeedbackTopic.exam_type_id}&subject=${activeFeedbackTopic.subject_id}&chapter=${activeFeedbackTopic.chapter_id}&topic=${activeFeedbackTopic.topic_id}`}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-2xs"
              >
                Manage & Fix Material
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
