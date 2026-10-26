import { useState, useEffect, useCallback, useMemo } from 'react';
import { api } from '../../../lib/api';
import {
  FileSpreadsheet, Plus, Trash2, Download, Eye, RefreshCw,
  Upload, X, CheckCircle, AlertCircle, Loader2, FileText,
  BookOpen, Calendar, Award, ChevronDown, Sparkles, ExternalLink,
  Edit2, Lightbulb, AlertTriangle, Check, Layers,
  Search, RotateCcw,
  CheckCircle2, ArrowRight, Database, Cpu
} from 'lucide-react';

interface PyqPaper {
  id: string;
  title: string;
  targetClass: string;
  subject: string;
  year: number;
  paperType: string;
  paperCode: string;
  totalMarks: number;
  durationMins: number;
  difficulty: string;
  free: boolean;
  totalQuestions: number;
  pdfUrl: string | null;
  solutionPdfUrl: string | null;
  createdAt: string;
}

interface ExtractedQuestion {
  id: string;
  paperId: string;
  questionNumber: number;
  section: string;
  marks: number;
  topic?: string;
  questionText: string;
  optionsJson?: string;
  correctOption?: string | null;
  modelAnswer?: string;
  stepMarkingJson?: string;
  examinerTip?: string;
  commonPitfall?: string;
  createdAt?: string;
}

const CLASS_OPTIONS = ['Class 9', 'Class 10', 'Class 11', 'Class 12'];

const SUBJECTS_BY_CLASS: Record<string, string[]> = {
  'Class 9':  ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
  'Class 10': ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
  'Class 11': ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English Core', 'Computer Science', 'Accountancy', 'Business Studies', 'Economics'],
  'Class 12': ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English Core', 'Computer Science', 'Accountancy', 'Business Studies', 'Economics'],
};

const PAPER_TYPES = [
  { value: 'BOARD_EXAM',    label: 'CBSE Board Exam' },
  { value: 'CBSE_SAMPLE',   label: 'Official Sample Paper' },
  { value: 'PRE_BOARD',     label: 'Pre-Board / Practice' },
];

const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019];

const PAPER_TYPE_LABELS: Record<string, string> = {
  BOARD_EXAM: 'Board Exam',
  CBSE_SAMPLE: 'Sample Paper',
  PRE_BOARD: 'Pre-Board',
};

const PAPER_TYPE_COLORS: Record<string, string> = {
  BOARD_EXAM: 'bg-blue-100 text-blue-800',
  CBSE_SAMPLE: 'bg-purple-100 text-purple-800',
  PRE_BOARD: 'bg-orange-100 text-orange-800',
};

interface UploadForm {
  title: string;
  targetClass: string;
  subject: string;
  year: number;
  paperType: string;
  paperCode: string;
  totalMarks: number;
  durationMins: number;
  difficulty: string;
  isFree: boolean;
  paperFile: File | null;
  solutionFile: File | null;
}

const defaultForm: UploadForm = {
  title: '',
  targetClass: 'Class 11',
  subject: '',
  year: 2024,
  paperType: 'BOARD_EXAM',
  paperCode: '',
  totalMarks: 70,
  durationMins: 180,
  difficulty: 'MODERATE',
  isFree: true,
  paperFile: null,
  solutionFile: null,
};

export function AdminPyqManagePage() {
  const [papers, setPapers] = useState<PyqPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeClass, setActiveClass] = useState<string>('ALL');

  // Upload modal state
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<UploadForm>(defaultForm);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Delete state
  const [deletingId, setDeletingId] = useState<string | null>(null);
  // AI extraction state
  const [extractingId, setExtractingId] = useState<string | null>(null);

  // In-Browser PDF Previewer Modal State
  const [previewPaper, setPreviewPaper] = useState<PyqPaper | null>(null);
  const [previewTab, setPreviewTab] = useState<'paper' | 'solution'>('paper');
  const [previewReplacing, setPreviewReplacing] = useState(false);

  const handlePreviewUpload = async (file: File) => {
    if (!previewPaper) return;
    setPreviewReplacing(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      if (previewTab === 'paper') {
        const res = await api.post(`/learn/admin/pyq/${previewPaper.id}/upload-pdf?autoExtract=true`, fd);
        const updated = res.data;
        setPreviewPaper(prev => prev ? { ...prev, pdfUrl: updated.pdfUrl, totalQuestions: updated.totalQuestions ?? prev.totalQuestions } : null);
      } else {
        const res = await api.post(`/learn/admin/pyq/${previewPaper.id}/upload-solution`, fd);
        const updated = res.data;
        setPreviewPaper(prev => prev ? { ...prev, solutionPdfUrl: updated.solutionPdfUrl } : null);
      }
      fetchPapers();
    } catch (err: any) {
      alert(err.response?.data?.error || err.message || 'Failed to upload PDF');
    } finally {
      setPreviewReplacing(false);
    }
  };

  // Live AI Extraction Telemetry Modal State
  const [extractionModal, setExtractionModal] = useState<{
    isOpen: boolean;
    paperId: string;
    paperTitle: string;
    currentStep: number;
    status: 'running' | 'completed' | 'error';
    errorMessage?: string;
    result?: {
      totalQuestions: number;
      sectionCounts: Record<string, number>;
      mcqCount: number;
      shortAnswerCount: number;
      longAnswerCount: number;
      caseStudyCount: number;
    };
  }>({
    isOpen: false,
    paperId: '',
    paperTitle: '',
    currentStep: 1,
    status: 'running'
  });

  // Questions Inspector Modal State
  const [inspectPaper, setInspectPaper] = useState<PyqPaper | null>(null);
  const [inspectQuestions, setInspectQuestions] = useState<ExtractedQuestion[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>('ALL');

  // Edit Question Modal State
  const [editingQuestion, setEditingQuestion] = useState<ExtractedQuestion | null>(null);
  const [savingEdit, setSavingEdit] = useState(false);

  const handleOpenQuestionsInspector = async (paper: PyqPaper) => {
    setInspectPaper(paper);
    setSelectedSection('ALL');
    setLoadingQuestions(true);
    try {
      const res = await api.get(`/learn/admin/pyq/${paper.id}/questions`);
      const qs = res.data?.questions || [];
      setInspectQuestions(qs);
    } catch (err: any) {
      console.error('Failed to load questions for paper:', err);
      alert(err.response?.data?.error || 'Failed to load questions for this paper');
    } finally {
      setLoadingQuestions(false);
    }
  };

  const handleDeleteQuestion = async (qId: string) => {
    if (!window.confirm('Delete this question permanently?')) return;
    try {
      await api.delete(`/learn/admin/pyq/questions/${qId}`);
      setInspectQuestions(prev => prev.filter(q => q.id !== qId));
      fetchPapers();
      if (inspectPaper) {
        setInspectPaper(prev => prev ? { ...prev, totalQuestions: Math.max(0, prev.totalQuestions - 1) } : null);
      }
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to delete question');
    }
  };

  const handleSaveEditQuestion = async () => {
    if (!editingQuestion) return;
    setSavingEdit(true);
    try {
      let parsedOptions: any = [];
      if (editingQuestion.optionsJson) {
        try {
          parsedOptions = typeof editingQuestion.optionsJson === 'string' ? JSON.parse(editingQuestion.optionsJson) : editingQuestion.optionsJson;
        } catch {
          parsedOptions = [];
        }
      }

      let parsedStepMarking: any = [];
      if (editingQuestion.stepMarkingJson) {
        try {
          parsedStepMarking = typeof editingQuestion.stepMarkingJson === 'string' ? JSON.parse(editingQuestion.stepMarkingJson) : editingQuestion.stepMarkingJson;
        } catch {
          parsedStepMarking = [];
        }
      }

      const res = await api.put(`/learn/admin/pyq/questions/${editingQuestion.id}`, {
        questionText: editingQuestion.questionText,
        marks: editingQuestion.marks,
        section: editingQuestion.section,
        topic: editingQuestion.topic,
        correctOption: editingQuestion.correctOption,
        options: parsedOptions,
        modelAnswer: editingQuestion.modelAnswer,
        stepMarking: parsedStepMarking,
        examinerTip: editingQuestion.examinerTip,
        commonPitfall: editingQuestion.commonPitfall
      });
      const updated = res.data;
      setInspectQuestions(prev => prev.map(q => q.id === updated.id ? { ...q, ...updated } : q));
      setEditingQuestion(null);
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to update question');
    } finally {
      setSavingEdit(false);
    }
  };

  const handleAiExtract = async (id: string, title: string) => {
    setExtractingId(id);
    setExtractionModal({
      isOpen: true,
      paperId: id,
      paperTitle: title,
      currentStep: 1,
      status: 'running',
      errorMessage: undefined,
      result: undefined,
    });

    const stepTimer1 = setTimeout(() => {
      setExtractionModal(prev => (prev.isOpen && prev.status === 'running') ? { ...prev, currentStep: 2 } : prev);
    }, 1600);

    const stepTimer2 = setTimeout(() => {
      setExtractionModal(prev => (prev.isOpen && prev.status === 'running') ? { ...prev, currentStep: 3 } : prev);
    }, 3800);

    try {
      const res = await api.post(`/learn/admin/pyq/${id}/extract-ai`);
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);

      const qs: ExtractedQuestion[] = res.data?.questions || [];
      const totalQ = res.data?.totalQuestions || qs.length || 0;

      const sectionCounts: Record<string, number> = {};
      let mcqs = 0;
      let shortAns = 0;
      let longAns = 0;
      let caseStudies = 0;

      qs.forEach(q => {
        const sec = (q.section || 'A').toUpperCase().trim();
        sectionCounts[sec] = (sectionCounts[sec] || 0) + 1;
        if (sec === 'A' || q.marks === 1 || q.optionsJson) {
          mcqs++;
        } else if (sec === 'E' || q.marks === 4) {
          caseStudies++;
        } else if (sec === 'D' || q.marks >= 5) {
          longAns++;
        } else {
          shortAns++;
        }
      });

      setExtractionModal({
        isOpen: true,
        paperId: id,
        paperTitle: title,
        currentStep: 4,
        status: 'completed',
        result: {
          totalQuestions: totalQ,
          sectionCounts,
          mcqCount: mcqs,
          shortAnswerCount: shortAns,
          longAnswerCount: longAns,
          caseStudyCount: caseStudies,
        }
      });

      fetchPapers();
    } catch (err: any) {
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
      setExtractionModal({
        isOpen: true,
        paperId: id,
        paperTitle: title,
        currentStep: 1,
        status: 'error',
        errorMessage: err.response?.data?.error || err.message || 'AI extraction failed. Make sure the question paper PDF is valid and readable.'
      });
    } finally {
      setExtractingId(null);
    }
  };

  const fetchPapers = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string> = {};
      if (activeClass !== 'ALL') params.targetClass = activeClass;
      const res = await api.get('/learn/pyq', { params });
      setPapers(res.data || []);
    } catch (err) {
      console.error('Failed to fetch PYQ papers:', err);
    } finally {
      setLoading(false);
    }
  }, [activeClass]);

  useEffect(() => { fetchPapers(); }, [fetchPapers]);

  // Auto-fill title when class/subject/year/type changes
  useEffect(() => {
    if (form.subject && form.targetClass && form.year && form.paperType) {
      const typeLabel = PAPER_TYPES.find(t => t.value === form.paperType)?.label || '';
      setForm(prev => ({
        ...prev,
        title: `CBSE ${prev.targetClass} ${prev.subject} ${typeLabel} ${prev.year}`
      }));
    }
  }, [form.subject, form.targetClass, form.year, form.paperType]);

  const handleClassChange = (cls: string) => {
    setForm(prev => ({ ...prev, targetClass: cls, subject: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.targetClass || !form.subject) {
      setUploadMsg({ type: 'error', text: 'Title, Class and Subject are required.' });
      return;
    }
    setUploading(true);
    setUploadMsg(null);
    try {
      // Step 1: Create paper metadata
      const createRes = await api.post('/learn/admin/pyq', {
        title: form.title,
        targetClass: form.targetClass,
        subject: form.subject,
        year: form.year,
        paperType: form.paperType,
        paperCode: form.paperCode,
        totalMarks: form.totalMarks,
        durationMins: form.durationMins,
        difficulty: form.difficulty,
        isFree: form.isFree,
      });
      const paperId: string = createRes.data.id;

      // Step 2: Upload PDFs if provided
      if (form.paperFile) {
        const fd = new FormData();
        fd.append('file', form.paperFile);
        await api.post(`/learn/admin/pyq/${paperId}/upload-pdf?autoExtract=true`, fd);
      }
      if (form.solutionFile) {
        const fd = new FormData();
        fd.append('file', form.solutionFile);
        await api.post(`/learn/admin/pyq/${paperId}/upload-solution`, fd);
      }

      setUploadMsg({ type: 'success', text: `✅ "${form.title}" uploaded! Questions extracted and ready for students.` });
      setForm(defaultForm);
      fetchPapers();
      setTimeout(() => { setShowModal(false); setUploadMsg(null); }, 2000);
    } catch (err: any) {
      const errMsg = err.response?.data?.error || err.response?.data?.message || err.message || 'Upload failed';
      setUploadMsg({ type: 'error', text: `Error: ${errMsg}` });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      await api.delete(`/learn/admin/pyq/${id}`);
      fetchPapers();
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to delete paper');
    } finally {
      setDeletingId(null);
    }
  };

  // Stats
  const totalPapers = papers.length;
  const withPdf = papers.filter(p => p.pdfUrl).length;
  const withSolution = papers.filter(p => p.solutionPdfUrl).length;
  const classCounts = CLASS_OPTIONS.reduce((acc, cls) => {
    acc[cls] = papers.filter(p => p.targetClass === cls).length;
    return acc;
  }, {} as Record<string, number>);

  // ─── Multi-Filter & Search State ───
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [filterTier, setFilterTier] = useState('ALL');
  const [sortBy, setSortBy] = useState<'newest_year' | 'oldest_year' | 'recently_added' | 'most_questions'>('newest_year');

  const isAnyFilterActive = Boolean(
    searchQuery.trim() ||
    activeClass !== 'ALL' ||
    filterType !== 'ALL' ||
    filterStatus !== 'ALL' ||
    filterTier !== 'ALL' ||
    sortBy !== 'newest_year'
  );

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveClass('ALL');
    setFilterType('ALL');
    setFilterStatus('ALL');
    setFilterTier('ALL');
    setSortBy('newest_year');
  };

  const displayedPapers = useMemo(() => {
    let result = [...papers];

    // 1. Class Filter
    if (activeClass !== 'ALL') {
      result = result.filter(p => p.targetClass === activeClass);
    }

    // 2. Paper Type Filter
    if (filterType !== 'ALL') {
      result = result.filter(p => p.paperType === filterType);
    }

    // 3. Status Filter
    if (filterStatus === 'HAS_QUESTIONS') {
      result = result.filter(p => (p.totalQuestions || 0) > 0);
    } else if (filterStatus === 'NEEDS_EXTRACTION') {
      result = result.filter(p => p.pdfUrl && (p.totalQuestions || 0) === 0);
    } else if (filterStatus === 'MISSING_PDF') {
      result = result.filter(p => !p.pdfUrl);
    } else if (filterStatus === 'MISSING_SOLUTION') {
      result = result.filter(p => !p.solutionPdfUrl);
    }

    // 4. Access Tier
    if (filterTier === 'FREE') {
      result = result.filter(p => p.free);
    } else if (filterTier === 'PAID') {
      result = result.filter(p => !p.free);
    }

    // 5. Search Query (Title, Subject, Paper Code, Year)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        (p.title || '').toLowerCase().includes(q) ||
        (p.subject || '').toLowerCase().includes(q) ||
        (p.paperCode || '').toLowerCase().includes(q) ||
        p.year.toString().includes(q)
      );
    }

    // 6. Sorting
    result.sort((a, b) => {
      if (sortBy === 'newest_year') return (b.year || 0) - (a.year || 0);
      if (sortBy === 'oldest_year') return (a.year || 0) - (b.year || 0);
      if (sortBy === 'most_questions') return (b.totalQuestions || 0) - (a.totalQuestions || 0);
      if (sortBy === 'recently_added') {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      }
      return 0;
    });

    return result;
  }, [papers, activeClass, filterType, filterStatus, filterTier, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* ─── Header ─── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileSpreadsheet className="w-6 h-6 text-amber-500" />
            <h1 className="text-2xl font-bold text-slate-900">PYQ & Question Papers Vault</h1>
          </div>
          <p className="text-slate-500 text-sm">Manage official CBSE Board Papers, Sample Papers & Marking Schemes by Class.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchPapers} className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg border border-slate-200" title="Refresh">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => { setForm(defaultForm); setUploadMsg(null); setShowModal(true); }}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            Upload Question Paper
          </button>
        </div>
      </div>

      {/* ─── KPI Cards ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Papers', value: totalPapers, icon: BookOpen, color: 'text-blue-600 bg-blue-50 border-blue-200' },
          { label: 'With Official PDF', value: withPdf, icon: FileText, color: 'text-green-600 bg-green-50 border-green-200' },
          { label: 'With Solution PDF', value: withSolution, icon: Award, color: 'text-purple-600 bg-purple-50 border-purple-200' },
          { label: 'Classes Covered', value: Object.values(classCounts).filter(c => c > 0).length, icon: Calendar, color: 'text-amber-600 bg-amber-50 border-amber-200' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className={`p-4 rounded-xl border ${color} flex items-center gap-3`}>
            <Icon className="w-8 h-8 opacity-70 shrink-0" />
            <div>
              <p className="text-2xl font-extrabold">{value}</p>
              <p className="text-xs font-semibold opacity-70 mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Class Filter Tabs ─── */}
      <div className="flex flex-wrap gap-2">
        {['ALL', ...CLASS_OPTIONS].map(cls => (
          <button
            key={cls}
            onClick={() => setActiveClass(cls)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
              activeClass === cls
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-300 hover:border-slate-500'
            }`}
          >
            {cls === 'ALL' ? 'All Classes' : cls}
            {cls !== 'ALL' && classCounts[cls] > 0 && (
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold ${activeClass === cls ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'}`}>
                {classCounts[cls]}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ─── Search, Multi-Filter & Sort Control Bar ─── */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by paper title, subject, year, or set code (e.g. 07/08, Physics)..."
              className="w-full pl-10 pr-9 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-200 text-slate-800 transition-all placeholder:text-slate-400 font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 p-0.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Counter & Clear Filters Button */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-2 rounded-xl">
              Showing <span className="font-bold text-slate-800">{displayedPapers.length}</span> of {papers.length} papers
            </span>
            {isAnyFilterActive && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-all cursor-pointer border border-rose-200"
                title="Reset all search and filter dropdowns"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Dropdown Filters Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-slate-100 text-xs">
          {/* Paper Type Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Paper Type:</label>
            <div className="relative">
              <select
                value={filterType}
                onChange={e => setFilterType(e.target.value)}
                className="w-full appearance-none text-xs p-2 pr-7 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 text-slate-800 font-medium cursor-pointer"
              >
                <option value="ALL">All Paper Types</option>
                {PAPER_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
              <ChevronDown className="absolute right-2 top-2.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Content Status:</label>
            <div className="relative">
              <select
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="w-full appearance-none text-xs p-2 pr-7 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 text-slate-800 font-medium cursor-pointer"
              >
                <option value="ALL">All Status</option>
                <option value="HAS_QUESTIONS">Ready (Has Questions)</option>
                <option value="NEEDS_EXTRACTION">Needs AI Extraction (0 Qs)</option>
                <option value="MISSING_PDF">Missing Question PDF</option>
                <option value="MISSING_SOLUTION">Missing Solution PDF</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Access Tier */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Access Tier:</label>
            <div className="relative">
              <select
                value={filterTier}
                onChange={e => setFilterTier(e.target.value)}
                className="w-full appearance-none text-xs p-2 pr-7 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 text-slate-800 font-medium cursor-pointer"
              >
                <option value="ALL">All Access Tiers</option>
                <option value="FREE">🟢 Free for All</option>
                <option value="PAID">🔒 Paid / Premium</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Sort Papers:</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="w-full appearance-none text-xs p-2 pr-7 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 text-slate-800 font-medium cursor-pointer"
              >
                <option value="newest_year">Year: Newest (2025 → 2019)</option>
                <option value="oldest_year">Year: Oldest (2019 → 2025)</option>
                <option value="most_questions">Most Extracted Questions</option>
                <option value="recently_added">Recently Added</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Papers Table ─── */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center h-48">
            <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
          </div>
        ) : displayedPapers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-3">
            <FileSpreadsheet className="w-12 h-12 opacity-30 text-amber-500" />
            {isAnyFilterActive ? (
              <>
                <p className="text-sm font-semibold text-slate-700">No question papers match your active search or filters.</p>
                <p className="text-xs text-slate-400">Try adjusting your keywords or clearing the active filters.</p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-2 px-4 py-2 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </>
            ) : (
              <>
                <p className="text-sm font-medium">No papers uploaded yet for {activeClass === 'ALL' ? 'any class' : activeClass}.</p>
                <button
                  onClick={() => { setForm(prev => ({ ...prev, targetClass: activeClass === 'ALL' ? 'Class 11' : activeClass })); setShowModal(true); }}
                  className="text-amber-600 text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Upload your first paper
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Paper Details</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Class · Subject</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">PDFs</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Info</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedPapers.map(paper => (
                  <tr key={paper.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-slate-900 leading-tight line-clamp-1 max-w-xs">{paper.title}</p>
                      {paper.paperCode && (
                        <p className="text-xs text-slate-400 mt-0.5">Code: {paper.paperCode}</p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1">
                        <span className="font-semibold text-slate-800">{paper.targetClass}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-600">{paper.subject}</span>
                      </span>
                      <p className="text-xs text-slate-400 mt-0.5">{paper.year}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${PAPER_TYPE_COLORS[paper.paperType] || 'bg-slate-100 text-slate-700'}`}>
                        {PAPER_TYPE_LABELS[paper.paperType] || paper.paperType}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <button
                          type="button"
                          onClick={() => { setPreviewPaper(paper); setPreviewTab('paper'); }}
                          className={`text-xs flex items-center gap-1 font-medium hover:underline text-left cursor-pointer transition-colors ${paper.pdfUrl ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-slate-400 hover:text-slate-600'}`}
                          title={paper.pdfUrl ? "Click to preview Question Paper in browser" : "Click to upload Question Paper"}
                        >
                          {paper.pdfUrl ? <CheckCircle className="w-3 h-3 text-green-600 shrink-0" /> : <AlertCircle className="w-3 h-3 text-slate-400 shrink-0" />}
                          Question Paper
                        </button>
                        <button
                          type="button"
                          onClick={() => { setPreviewPaper(paper); setPreviewTab('solution'); }}
                          className={`text-xs flex items-center gap-1 font-medium hover:underline text-left cursor-pointer transition-colors ${paper.solutionPdfUrl ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-400 hover:text-slate-600'}`}
                          title={paper.solutionPdfUrl ? "Click to preview Marking Scheme in browser" : "Click to upload Marking Scheme"}
                        >
                          {paper.solutionPdfUrl ? <CheckCircle className="w-3 h-3 text-purple-600 shrink-0" /> : <AlertCircle className="w-3 h-3 text-slate-400 shrink-0" />}
                          Marking Scheme
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      <p>{paper.totalMarks} Marks · {paper.durationMins} Min</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span>{paper.free ? '🟢 Free' : '🔒 Paid'}</span>
                        <button
                          type="button"
                          onClick={() => handleOpenQuestionsInspector(paper)}
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-all hover:scale-105 ${
                            paper.totalQuestions > 0
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                          }`}
                          title="Click to inspect & edit extracted questions"
                        >
                          {paper.totalQuestions || 0} Qs
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleOpenQuestionsInspector(paper)}
                          className="p-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-300 transition-colors cursor-pointer"
                          title="Inspect & Edit Extracted Questions"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                        </button>
                        {paper.pdfUrl && (
                          <button
                            onClick={() => handleAiExtract(paper.id, paper.title)}
                            disabled={extractingId === paper.id}
                            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-300 transition-colors disabled:opacity-50"
                            title="Extract questions into text format using AI"
                          >
                            {extractingId === paper.id ? (
                              <>
                                <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600" />
                                <span className="hidden sm:inline">Extracting...</span>
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                <span className="hidden sm:inline">AI Extract</span>
                              </>
                            )}
                          </button>
                        )}
                        {(paper.pdfUrl || paper.solutionPdfUrl) && (
                          <button
                            type="button"
                            onClick={() => { setPreviewPaper(paper); setPreviewTab(paper.pdfUrl ? 'paper' : 'solution'); }}
                            className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg border border-indigo-200 transition-colors cursor-pointer"
                            title="Preview PDF in browser"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {paper.pdfUrl ? (
                          <a href={paper.pdfUrl} target="_blank" rel="noreferrer" download
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-200 transition-colors" title="Download Question Paper PDF">
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <label className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg border border-amber-200 transition-colors cursor-pointer" title="Upload Question Paper PDF">
                            <Upload className="w-3.5 h-3.5" />
                            <input
                              type="file"
                              accept="application/pdf"
                              className="hidden"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const fd = new FormData();
                                fd.append('file', file);
                                try {
                                  await api.post(`/learn/admin/pyq/${paper.id}/upload-pdf?autoExtract=true`, fd);
                                  fetchPapers();
                                } catch (err: any) {
                                  alert(err.response?.data?.error || 'Failed to upload PDF');
                                }
                              }}
                            />
                          </label>
                        )}
                        {paper.solutionPdfUrl ? (
                          <a href={paper.solutionPdfUrl} target="_blank" rel="noreferrer" download
                            className="p-1.5 text-purple-600 hover:bg-purple-50 rounded-lg border border-purple-200 transition-colors" title="Download Marking Scheme PDF">
                            <FileText className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <label className="p-1.5 text-purple-600 hover:bg-purple-50 rounded-lg border border-purple-200 transition-colors cursor-pointer" title="Upload Marking Scheme PDF">
                            <FileText className="w-3.5 h-3.5" />
                            <input
                              type="file"
                              accept="application/pdf"
                              className="hidden"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const fd = new FormData();
                                fd.append('file', file);
                                try {
                                  await api.post(`/learn/admin/pyq/${paper.id}/upload-solution`, fd);
                                  fetchPapers();
                                } catch (err: any) {
                                  alert(err.response?.data?.error || 'Failed to upload solution PDF');
                                }
                              }}
                            />
                          </label>
                        )}
                        <button
                          onClick={() => handleDelete(paper.id, paper.title)}
                          disabled={deletingId === paper.id}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg border border-red-200 transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          {deletingId === paper.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─── In-Browser Dual PDF Previewer Modal ─── */}
      {previewPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden border border-slate-200">
            {/* Modal Top Bar */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50/80">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${PAPER_TYPE_COLORS[previewPaper.paperType] || 'bg-slate-100 text-slate-700'}`}>
                    {PAPER_TYPE_LABELS[previewPaper.paperType] || previewPaper.paperType}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {previewPaper.targetClass} · {previewPaper.subject} · {previewPaper.year}
                  </span>
                  {previewPaper.paperCode && (
                    <span className="text-xs text-slate-400 font-mono">({previewPaper.paperCode})</span>
                  )}
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 truncate" title={previewPaper.title}>
                  {previewPaper.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {previewPaper.pdfUrl && (
                  <button
                    onClick={() => handleAiExtract(previewPaper.id, previewPaper.title)}
                    disabled={extractingId === previewPaper.id}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl transition-all disabled:opacity-50 cursor-pointer"
                    title="Extract questions via AI"
                  >
                    {extractingId === previewPaper.id ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600" />
                        <span>Extracting...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Extract AI Questions</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  onClick={() => setPreviewPaper(null)}
                  className="p-2 hover:bg-slate-200 rounded-xl text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tab Navigation & Context Actions Bar */}
            <div className="px-6 py-2.5 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              {/* Dual Tabs */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewTab('paper')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    previewTab === 'paper'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Question Paper</span>
                  {previewPaper.pdfUrl ? (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="PDF Attached" />
                  ) : (
                    <span className="text-[10px] text-amber-600 font-normal">(Missing)</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setPreviewTab('solution')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    previewTab === 'solution'
                      ? 'bg-white text-purple-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Marking Scheme / Solution</span>
                  {previewPaper.solutionPdfUrl ? (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="PDF Attached" />
                  ) : (
                    <span className="text-[10px] text-amber-600 font-normal">(Missing)</span>
                  )}
                </button>
              </div>

              {/* Action Buttons for active PDF */}
              <div className="flex items-center gap-2">
                {(previewTab === 'paper' ? previewPaper.pdfUrl : previewPaper.solutionPdfUrl) && (
                  <>
                    <a
                      href={(previewTab === 'paper' ? previewPaper.pdfUrl : previewPaper.solutionPdfUrl) || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 font-medium"
                      title="Open in a new browser tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      <span>Open New Tab</span>
                    </a>
                    <a
                      href={(previewTab === 'paper' ? previewPaper.pdfUrl : previewPaper.solutionPdfUrl) || '#'}
                      download
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 font-medium"
                      title="Download PDF"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-500" />
                      <span>Download</span>
                    </a>
                  </>
                )}

                {/* AI Extract Questions Button (when viewing paper) */}
                {previewTab === 'paper' && previewPaper.pdfUrl && (
                  <button
                    type="button"
                    onClick={() => handleAiExtract(previewPaper.id, previewPaper.title)}
                    disabled={extractingId === previewPaper.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs transition-colors disabled:opacity-50 cursor-pointer shadow-xs"
                    title="Extract CBSE Questions using AI"
                  >
                    {extractingId === previewPaper.id ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Extracting...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI Extract</span>
                      </>
                    )}
                  </button>
                )}

                {/* Replace / Upload PDF button */}
                <label className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold cursor-pointer transition-colors">
                  {previewReplacing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                  <span>
                    {(previewTab === 'paper' ? previewPaper.pdfUrl : previewPaper.solutionPdfUrl)
                      ? 'Replace PDF'
                      : 'Upload PDF'}
                  </span>
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    disabled={previewReplacing}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handlePreviewUpload(file);
                    }}
                  />
                </label>
              </div>
            </div>

            {/* Embedded PDF Viewer Body */}
            <div className="flex-1 bg-slate-100 relative overflow-hidden flex items-center justify-center">
              {(previewTab === 'paper' ? previewPaper.pdfUrl : previewPaper.solutionPdfUrl) ? (
                <iframe
                  src={`${(previewTab === 'paper' ? previewPaper.pdfUrl : previewPaper.solutionPdfUrl)}#toolbar=1&navpanes=0`}
                  title={`${previewPaper.title} - ${previewTab === 'paper' ? 'Question Paper' : 'Solution'}`}
                  className="w-full h-full border-none"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center max-w-md">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-4 border border-amber-200">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">
                    No {previewTab === 'paper' ? 'Question Paper' : 'Marking Scheme'} PDF Uploaded
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    {previewTab === 'paper'
                      ? 'An official Question Paper PDF is required for students to practice and for AI question extraction.'
                      : 'Upload the official CBSE marking scheme or solution PDF to help students understand step-by-step scoring.'}
                  </p>
                  <label className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold cursor-pointer transition-all shadow-sm">
                    <Upload className="w-4 h-4" />
                    <span>Upload {previewTab === 'paper' ? 'Question Paper' : 'Marking Scheme'} PDF</span>
                    <input
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handlePreviewUpload(file);
                      }}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── In-Browser Questions Inspector Drawer/Modal ─── */}
      {inspectPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50/80">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Questions Vault
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {inspectPaper.targetClass} · {inspectPaper.subject} · {inspectPaper.year}
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded-md">
                    {inspectQuestions.length} Questions
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 truncate" title={inspectPaper.title}>
                  {inspectPaper.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {inspectPaper.pdfUrl && (
                  <button
                    onClick={() => handleAiExtract(inspectPaper.id, inspectPaper.title)}
                    disabled={extractingId === inspectPaper.id}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl transition-all disabled:opacity-50 cursor-pointer"
                    title="Re-extract questions from PDF using AI"
                  >
                    {extractingId === inspectPaper.id ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600" />
                        <span>Re-Extracting...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Re-Extract with AI</span>
                      </>
                    )}
                  </button>
                )}
                <button
                  onClick={() => setInspectPaper(null)}
                  className="p-2 hover:bg-slate-200 rounded-xl text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Section Filter Pills */}
            <div className="px-6 py-2.5 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center gap-2 text-xs overflow-x-auto">
              <span className="font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Sections:
              </span>
              {[
                { id: 'ALL', label: 'All Questions', count: inspectQuestions.length },
                { id: 'A', label: 'Section A (1M)', count: inspectQuestions.filter(q => q.section === 'A').length },
                { id: 'B', label: 'Section B (2M)', count: inspectQuestions.filter(q => q.section === 'B').length },
                { id: 'C', label: 'Section C (3M)', count: inspectQuestions.filter(q => q.section === 'C').length },
                { id: 'D', label: 'Section D (5M)', count: inspectQuestions.filter(q => q.section === 'D').length },
                { id: 'E', label: 'Section E (Case Study)', count: inspectQuestions.filter(q => q.section === 'E').length },
              ].map(sec => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedSection === sec.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>{sec.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    selectedSection === sec.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {sec.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Questions List Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
              {loadingQuestions ? (
                <div className="flex flex-col items-center justify-center h-64 gap-2 text-slate-400">
                  <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
                  <p className="text-sm font-semibold">Loading questions from Question Bank...</p>
                </div>
              ) : inspectQuestions.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-3 border border-amber-200">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">No Questions Extracted Yet</h3>
                  <p className="text-xs text-slate-500 mb-5">
                    {inspectPaper.pdfUrl
                      ? 'The Question Paper PDF is attached. Click the button below to parse and extract CBSE Section A-E questions using AI.'
                      : 'Upload a Question Paper PDF first, then click "AI Extract" to structure the questions.'}
                  </p>
                  {inspectPaper.pdfUrl && (
                    <button
                      onClick={() => handleAiExtract(inspectPaper.id, inspectPaper.title)}
                      disabled={extractingId === inspectPaper.id}
                      className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer disabled:opacity-50"
                    >
                      {extractingId === inspectPaper.id ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Extracting Questions with Groq AI...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Extract Questions with AI Now</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              ) : (
                inspectQuestions
                  .filter(q => selectedSection === 'ALL' || q.section === selectedSection)
                  .map((q) => {
                    let parsedOptions: string[] = [];
                    if (q.optionsJson) {
                      try {
                        parsedOptions = typeof q.optionsJson === 'string' ? JSON.parse(q.optionsJson) : q.optionsJson;
                      } catch {
                        parsedOptions = [];
                      }
                    }

                    let parsedStepMarking: { step: string; marks: string }[] = [];
                    if (q.stepMarkingJson) {
                      try {
                        parsedStepMarking = typeof q.stepMarkingJson === 'string' ? JSON.parse(q.stepMarkingJson) : q.stepMarkingJson;
                      } catch {
                        parsedStepMarking = [];
                      }
                    }

                    return (
                      <div key={q.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs transition-all hover:border-slate-300">
                        {/* Question Header */}
                        <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-slate-900 text-white">
                              Q{q.questionNumber}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                              Section {q.section}
                            </span>
                            <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                              {q.marks} Mark{q.marks > 1 ? 's' : ''}
                            </span>
                            {q.topic && (
                              <span className="px-2 py-0.5 rounded-md text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200">
                                📌 {q.topic}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => setEditingQuestion(q)}
                              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-200 transition-colors cursor-pointer"
                              title="Edit this question"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteQuestion(q.id)}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg border border-red-200 transition-colors cursor-pointer"
                              title="Delete this question"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Question Text */}
                        <div className="text-sm font-semibold text-slate-900 whitespace-pre-line leading-relaxed mb-3">
                          {q.questionText}
                        </div>

                        {/* MCQ Options (if available) */}
                        {parsedOptions.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            {parsedOptions.map((opt, optIdx) => {
                              const optLetter = String.fromCharCode(65 + optIdx);
                              const isCorrect = q.correctOption?.toUpperCase() === optLetter;
                              return (
                                <div
                                  key={optIdx}
                                  className={`p-2.5 rounded-lg text-xs flex items-start gap-2 border transition-all ${
                                    isCorrect
                                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold shadow-2xs'
                                      : 'bg-slate-50/60 border-slate-200 text-slate-700'
                                  }`}
                                >
                                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                    isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                                  }`}>
                                    {isCorrect ? <Check className="w-3 h-3" /> : optLetter}
                                  </span>
                                  <span className="mt-0.5 leading-normal">{opt}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Model Answer / Walkthrough */}
                        {q.modelAnswer && (
                          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs mb-3">
                            <span className="font-bold text-slate-700 block mb-1 text-[11px] uppercase tracking-wider">
                              📝 CBSE Model Answer / Scoring Solution:
                            </span>
                            <p className="text-slate-800 leading-relaxed whitespace-pre-line font-mono text-[12px]">
                              {q.modelAnswer}
                            </p>
                          </div>
                        )}

                        {/* Step Marking Breakdown Chips */}
                        {parsedStepMarking.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 mb-3 text-xs">
                            <span className="font-bold text-slate-500 text-[11px] mr-1">⚖️ Step Marking:</span>
                            {parsedStepMarking.map((step, sIdx) => (
                              <span key={sIdx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px] font-medium">
                                <span>{step.step}</span>
                                <span className="font-bold text-indigo-900">[{step.marks}]</span>
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Examiner Tips & Common Pitfalls */}
                        {(q.examinerTip || q.commonPitfall) && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100">
                            {q.examinerTip && (
                              <div className="flex items-start gap-2 bg-amber-50/70 border border-amber-200 rounded-lg p-2.5 text-amber-900">
                                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold block text-[10px] uppercase tracking-wide text-amber-700">Examiner Advice:</span>
                                  <span className="text-[11px] leading-snug">{q.examinerTip}</span>
                                </div>
                              </div>
                            )}
                            {q.commonPitfall && (
                              <div className="flex items-start gap-2 bg-rose-50/70 border border-rose-200 rounded-lg p-2.5 text-rose-900">
                                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold block text-[10px] uppercase tracking-wide text-rose-700">Common Student Slip:</span>
                                  <span className="text-[11px] leading-snug">{q.commonPitfall}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── Edit Question Modal ─── */}
      {editingQuestion && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Edit2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Edit Question #{editingQuestion.questionNumber} (Section {editingQuestion.section})
                </h3>
              </div>
              <button onClick={() => setEditingQuestion(null)} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Question Text <span className="text-red-500">*</span></label>
                <textarea
                  rows={4}
                  value={editingQuestion.questionText}
                  onChange={e => setEditingQuestion({ ...editingQuestion, questionText: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Section</label>
                  <select
                    value={editingQuestion.section}
                    onChange={e => setEditingQuestion({ ...editingQuestion, section: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg p-2 text-xs bg-white outline-none"
                  >
                    {['A', 'B', 'C', 'D', 'E'].map(s => <option key={s} value={s}>Section {s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Marks</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={editingQuestion.marks}
                    onChange={e => setEditingQuestion({ ...editingQuestion, marks: Number(e.target.value) })}
                    className="w-full border border-slate-300 rounded-lg p-2 text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Topic</label>
                  <input
                    type="text"
                    value={editingQuestion.topic || ''}
                    onChange={e => setEditingQuestion({ ...editingQuestion, topic: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg p-2 text-xs outline-none"
                    placeholder="e.g. Laws of Motion"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Correct Option (for Section A MCQs)</label>
                <input
                  type="text"
                  maxLength={1}
                  value={editingQuestion.correctOption || ''}
                  onChange={e => setEditingQuestion({ ...editingQuestion, correctOption: e.target.value.toUpperCase() })}
                  placeholder="e.g. A, B, C, or D (leave empty if subjective)"
                  className="w-full border border-slate-300 rounded-lg p-2 text-xs outline-none uppercase font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Model Answer / Solution Explanation</label>
                <textarea
                  rows={4}
                  value={editingQuestion.modelAnswer || ''}
                  onChange={e => setEditingQuestion({ ...editingQuestion, modelAnswer: e.target.value })}
                  placeholder="Step-by-step scoring model answer..."
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs outline-none font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Examiner Tip</label>
                  <input
                    type="text"
                    value={editingQuestion.examinerTip || ''}
                    onChange={e => setEditingQuestion({ ...editingQuestion, examinerTip: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg p-2 text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Common Pitfall</label>
                  <input
                    type="text"
                    value={editingQuestion.commonPitfall || ''}
                    onChange={e => setEditingQuestion({ ...editingQuestion, commonPitfall: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg p-2 text-xs outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setEditingQuestion(null)}
                  className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={savingEdit || !editingQuestion.questionText.trim()}
                  onClick={handleSaveEditQuestion}
                  className="px-5 py-2 font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {savingEdit ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Upload Modal ─── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-bold text-slate-900">Upload Question Paper</h2>
              </div>
              <button onClick={() => setShowModal(false)} className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
              {/* Class + Subject Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Class <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select
                      value={form.targetClass}
                      onChange={e => handleClassChange(e.target.value)}
                      className="w-full appearance-none border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white pr-8"
                    >
                      {CLASS_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subject <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select
                      value={form.subject}
                      onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full appearance-none border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white pr-8"
                      required
                    >
                      <option value="">-- Select Subject --</option>
                      {(SUBJECTS_BY_CLASS[form.targetClass] || []).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Paper Type + Year Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Paper Type</label>
                  <div className="relative">
                    <select
                      value={form.paperType}
                      onChange={e => setForm(prev => ({ ...prev, paperType: e.target.value }))}
                      className="w-full appearance-none border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white pr-8"
                    >
                      {PAPER_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                    <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Year</label>
                  <div className="relative">
                    <select
                      value={form.year}
                      onChange={e => setForm(prev => ({ ...prev, year: Number(e.target.value) }))}
                      className="w-full appearance-none border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white pr-8"
                    >
                      {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Paper Title <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={form.title}
                  onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g. CBSE Class 11 Physics Board Exam 2024"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>

              {/* Paper Code + Marks + Duration */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Paper Code / Set</label>
                  <input
                    type="text"
                    value={form.paperCode}
                    onChange={e => setForm(prev => ({ ...prev, paperCode: e.target.value }))}
                    placeholder="55/1/1"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Total Marks</label>
                  <input
                    type="number"
                    value={form.totalMarks}
                    onChange={e => setForm(prev => ({ ...prev, totalMarks: Number(e.target.value) }))}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Duration (mins)</label>
                  <input
                    type="number"
                    value={form.durationMins}
                    onChange={e => setForm(prev => ({ ...prev, durationMins: Number(e.target.value) }))}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Free toggle */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, isFree: !prev.isFree }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${form.isFree ? 'bg-green-500' : 'bg-slate-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow ${form.isFree ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className="text-sm font-medium text-slate-700">{form.isFree ? '🟢 Free for all students' : '🔒 Paid / Premium only'}</span>
              </div>

              {/* PDF Uploads */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">📄 Official Question Paper PDF</label>
                  <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-4 cursor-pointer transition-colors ${form.paperFile ? 'border-green-400 bg-green-50' : 'border-slate-300 hover:border-amber-400 hover:bg-amber-50/40'}`}>
                    {form.paperFile ? (
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium truncate max-w-[160px]">{form.paperFile.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1.5 text-slate-400">
                        <Upload className="w-6 h-6" />
                        <span className="text-xs font-medium">Click to upload PDF</span>
                        <span className="text-[10px]">Max 25MB · .pdf only</span>
                      </div>
                    )}
                    <input type="file" accept=".pdf" className="hidden"
                      onChange={e => setForm(prev => ({ ...prev, paperFile: e.target.files?.[0] || null }))} />
                  </label>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">📑 Marking Scheme PDF <span className="text-slate-400">(Optional)</span></label>
                  <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-4 cursor-pointer transition-colors ${form.solutionFile ? 'border-purple-400 bg-purple-50' : 'border-slate-300 hover:border-purple-400 hover:bg-purple-50/40'}`}>
                    {form.solutionFile ? (
                      <div className="flex items-center gap-2 text-purple-700">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium truncate max-w-[160px]">{form.solutionFile.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1.5 text-slate-400">
                        <Upload className="w-6 h-6" />
                        <span className="text-xs font-medium">Click to upload PDF</span>
                        <span className="text-[10px]">Max 25MB · .pdf only</span>
                      </div>
                    )}
                    <input type="file" accept=".pdf" className="hidden"
                      onChange={e => setForm(prev => ({ ...prev, solutionFile: e.target.files?.[0] || null }))} />
                  </label>
                </div>
              </div>

              {/* Message */}
              {uploadMsg && (
                <div className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${uploadMsg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {uploadMsg.type === 'success' ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                  {uploadMsg.text}
                </div>
              )}

              {/* Submit */}
              <div className="flex justify-end gap-3 pt-2 border-t border-slate-200">
                <button type="button" onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={uploading}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-60 shadow-sm">
                  {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                  {uploading ? 'Uploading…' : 'Upload Paper'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── Live AI Extraction Telemetry Modal ─── */}
      {extractionModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden border border-slate-200 flex flex-col">
            {/* Header */}
            <div className={`px-6 py-5 border-b flex items-start justify-between gap-4 ${
              extractionModal.status === 'completed'
                ? 'bg-emerald-50/80 border-emerald-200'
                : extractionModal.status === 'error'
                ? 'bg-rose-50/80 border-rose-200'
                : 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                  extractionModal.status === 'completed'
                    ? 'bg-emerald-500 text-white'
                    : extractionModal.status === 'error'
                    ? 'bg-rose-500 text-white'
                    : 'bg-amber-500 text-white relative'
                }`}>
                  {extractionModal.status === 'completed' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : extractionModal.status === 'error' ? (
                    <AlertTriangle className="w-6 h-6" />
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6 animate-pulse" />
                      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-600"></span>
                      </span>
                    </>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {extractionModal.status === 'completed'
                      ? 'AI Extraction Completed!'
                      : extractionModal.status === 'error'
                      ? 'AI Extraction Failed'
                      : 'Live AI Question Extraction'}
                  </h3>
                  <p className="text-xs font-medium text-slate-600 truncate max-w-sm mt-0.5" title={extractionModal.paperTitle}>
                    {extractionModal.paperTitle}
                  </p>
                </div>
              </div>

              {extractionModal.status !== 'running' && (
                <button
                  type="button"
                  onClick={() => setExtractionModal(prev => ({ ...prev, isOpen: false }))}
                  className="p-1.5 hover:bg-slate-200/80 rounded-xl text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* RUNNING STATE */}
              {extractionModal.status === 'running' && (
                <div className="space-y-5">
                  {/* Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
                      <span>Telemetry Pipeline</span>
                      <span className="text-amber-600 font-bold">
                        {extractionModal.currentStep === 1 ? 'Step 1 of 3 (30%)' : extractionModal.currentStep === 2 ? 'Step 2 of 3 (65%)' : 'Step 3 of 3 (90%)'}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: extractionModal.currentStep === 1 ? '30%' : extractionModal.currentStep === 2 ? '65%' : '90%'
                        }}
                      />
                    </div>
                  </div>

                  {/* 3 Stepper Stages */}
                  <div className="space-y-3 pt-1">
                    {/* Stage 1 */}
                    <div className={`p-3.5 rounded-2xl border transition-all ${
                      extractionModal.currentStep > 1
                        ? 'bg-emerald-50/50 border-emerald-200'
                        : extractionModal.currentStep === 1
                        ? 'bg-amber-50/60 border-amber-300 ring-2 ring-amber-100'
                        : 'bg-slate-50/60 border-slate-200 opacity-60'
                    } flex items-start gap-3.5`}>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        extractionModal.currentStep > 1
                          ? 'bg-emerald-500 text-white'
                          : extractionModal.currentStep === 1
                          ? 'bg-amber-500 text-white animate-bounce'
                          : 'bg-slate-200 text-slate-500'
                      }`}>
                        {extractionModal.currentStep > 1 ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : extractionModal.currentStep === 1 ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900">Step 1: Document Stream & Text Ingestion</h4>
                          {extractionModal.currentStep > 1 ? (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Done</span>
                          ) : extractionModal.currentStep === 1 ? (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full animate-pulse">Active</span>
                          ) : null}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Reading PDF via Apache Tika. Extracting mathematical equations, formulas, and structural layouts.
                        </p>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className={`p-3.5 rounded-2xl border transition-all ${
                      extractionModal.currentStep > 2
                        ? 'bg-emerald-50/50 border-emerald-200'
                        : extractionModal.currentStep === 2
                        ? 'bg-amber-50/60 border-amber-300 ring-2 ring-amber-100'
                        : 'bg-slate-50/60 border-slate-200 opacity-60'
                    } flex items-start gap-3.5`}>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        extractionModal.currentStep > 2
                          ? 'bg-emerald-500 text-white'
                          : extractionModal.currentStep === 2
                          ? 'bg-amber-500 text-white animate-bounce'
                          : 'bg-slate-200 text-slate-500'
                      }`}>
                        {extractionModal.currentStep > 2 ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : extractionModal.currentStep === 2 ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Cpu className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900">Step 2: AI Section & Question Structuring</h4>
                          {extractionModal.currentStep > 2 ? (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Done</span>
                          ) : extractionModal.currentStep === 2 ? (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full animate-pulse">Active</span>
                          ) : (
                            <span className="text-[10px] font-semibold text-slate-400">Waiting...</span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Groq AI (Llama 3.3 70B) parses CBSE Section A (MCQs), Section B-D questions, and Section E case studies.
                        </p>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className={`p-3.5 rounded-2xl border transition-all ${
                      extractionModal.currentStep > 3
                        ? 'bg-emerald-50/50 border-emerald-200'
                        : extractionModal.currentStep === 3
                        ? 'bg-amber-50/60 border-amber-300 ring-2 ring-amber-100'
                        : 'bg-slate-50/60 border-slate-200 opacity-60'
                    } flex items-start gap-3.5`}>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        extractionModal.currentStep > 3
                          ? 'bg-emerald-500 text-white'
                          : extractionModal.currentStep === 3
                          ? 'bg-amber-500 text-white animate-bounce'
                          : 'bg-slate-200 text-slate-500'
                      }`}>
                        {extractionModal.currentStep > 3 ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : extractionModal.currentStep === 3 ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Database className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900">Step 3: Step-Marking & Database Persistence</h4>
                          {extractionModal.currentStep > 3 ? (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Done</span>
                          ) : extractionModal.currentStep === 3 ? (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full animate-pulse">Active</span>
                          ) : (
                            <span className="text-[10px] font-semibold text-slate-400">Waiting...</span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Synthesizing examiner scoring tips, common pitfalls, and saving normalized question rows in database.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50/50 border border-amber-200/80 rounded-xl flex items-center gap-2.5 text-xs text-amber-800">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Please keep this window open. Average extraction finishes in 3–8 seconds.</span>
                  </div>
                </div>
              )}

              {/* COMPLETED STATE */}
              {extractionModal.status === 'completed' && extractionModal.result && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="text-center py-2">
                    <p className="text-sm font-semibold text-emerald-800">
                      Successfully processed and structured <span className="font-extrabold text-emerald-950 text-base">{extractionModal.result.totalQuestions} questions</span>!
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Ready in DevLens Student Practice Vault with CBSE Section breakdowns.
                    </p>
                  </div>

                  {/* KPI Mini Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                      <p className="text-xl font-black text-slate-900">{extractionModal.result.totalQuestions}</p>
                      <p className="text-[10px] font-bold text-slate-500 mt-0.5">Total Questions</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 text-center">
                      <p className="text-xl font-black text-blue-700">{extractionModal.result.mcqCount}</p>
                      <p className="text-[10px] font-bold text-blue-600 mt-0.5">MCQs (1 Mark)</p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-200 text-center">
                      <p className="text-xl font-black text-indigo-700">{extractionModal.result.shortAnswerCount}</p>
                      <p className="text-[10px] font-bold text-indigo-600 mt-0.5">Short Ans (2-3M)</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-xl border border-purple-200 text-center">
                      <p className="text-xl font-black text-purple-700">
                        {extractionModal.result.longAnswerCount + extractionModal.result.caseStudyCount}
                      </p>
                      <p className="text-[10px] font-bold text-purple-600 mt-0.5">Long & Case (4-5M)</p>
                    </div>
                  </div>

                  {/* Section Breakdown Pills */}
                  {Object.keys(extractionModal.result.sectionCounts).length > 0 && (
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        CBSE Section Breakdown
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(extractionModal.result.sectionCounts).map(([sec, cnt]) => (
                          <div
                            key={sec}
                            className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
                          >
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            <span>Section {sec}:</span>
                            <span className="font-extrabold text-amber-700">{cnt} Qs</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions Footer */}
                  <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => setExtractionModal(prev => ({ ...prev, isOpen: false }))}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const targetPaper = papers.find(p => p.id === extractionModal.paperId) || {
                          id: extractionModal.paperId,
                          title: extractionModal.paperTitle,
                          targetClass: '',
                          subject: '',
                          year: 0,
                          paperType: '',
                          paperCode: '',
                          totalMarks: 0,
                          durationMins: 0,
                          difficulty: '',
                          free: true,
                          totalQuestions: extractionModal.result?.totalQuestions || 0,
                          pdfUrl: null,
                          solutionPdfUrl: null,
                          createdAt: new Date().toISOString()
                        };
                        setExtractionModal(prev => ({ ...prev, isOpen: false }));
                        handleOpenQuestionsInspector(targetPaper as PyqPaper);
                      }}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Inspect Extracted Questions Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ERROR STATE */}
              {extractionModal.status === 'error' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-rose-900">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Extraction Error Details:</span>
                    </div>
                    <p className="font-mono text-[11px] bg-white/70 p-2.5 rounded-lg border border-rose-200 text-rose-900 break-words">
                      {extractionModal.errorMessage || 'Unknown error occurred during AI extraction.'}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
                    <p className="font-bold text-slate-800">💡 Troubleshooting Suggestions:</p>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-500">
                      <li>Ensure a valid Question Paper PDF has been uploaded for this paper.</li>
                      <li>Check that the PDF contains selectable text or legible CBSE questions.</li>
                      <li>Try uploading the PDF again using the "Replace PDF" action in the viewer.</li>
                    </ul>
                  </div>

                  <div className="pt-2 flex justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => setExtractionModal(prev => ({ ...prev, isOpen: false }))}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAiExtract(extractionModal.paperId, extractionModal.paperTitle)}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retry Extraction</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPyqManagePage;
