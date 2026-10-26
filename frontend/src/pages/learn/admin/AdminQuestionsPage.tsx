import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { api } from '../../../lib/api';
import { learnApi } from '../../../lib/learn-api';
import { 
  HelpCircle, Plus, Search, Trash2, Edit2, RefreshCw, 
  ChevronRight, ChevronLeft, Check, CheckCircle2,
  UploadCloud, FolderTree, Download, X, Eye, FileEdit
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

interface QuestionStats {
  totalQuestions: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  totalTopicsCovered: number;
}

interface QuestionItem {
  id: string;
  topicId: string;
  topicTitle: string;
  chapterId: string;
  chapterTitle: string;
  subjectId: string;
  subjectName: string;
  examTypeId: string;
  examName: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  explanation: string | null;
  difficulty: string;
  sourceYear: string | null;
  isVerified: boolean;
  createdAt: string;
}

interface ExamType { id: string; name: string; }
interface Subject { id: string; name: string; }
interface Chapter { id: string; title: string; }
interface Topic { id: string; title: string; }

export function AdminQuestionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [stats, setStats] = useState<QuestionStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [tableLoading, setTableLoading] = useState(true);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(15);

  // Bulk Selection State
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkDeleting, setBulkDeleting] = useState(false);
  const isAllSelected = questions.length > 0 && questions.every(q => selectedIds.has(q.id));

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('ALL');
  const [sortFilter, setSortFilter] = useState<'newest' | 'oldest'>('newest');
  const [verifiedFilter, setVerifiedFilter] = useState<'ALL' | 'VERIFIED' | 'UNVERIFIED'>('ALL');
  
  // Cascading Filter Hierarchy with Deep Link SearchParams
  const [exams, setExams] = useState<ExamType[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  const [filterExam, setFilterExam] = useState(searchParams.get('exam') || '');
  const [filterSubject, setFilterSubject] = useState(searchParams.get('subject') || '');
  const [filterChapter, setFilterChapter] = useState(searchParams.get('chapter') || '');
  const [filterTopic, setFilterTopic] = useState(searchParams.get('topic') || '');

  const isAnyFilterActive = Boolean(
    searchQuery.trim() ||
    difficultyFilter !== 'ALL' ||
    sortFilter !== 'newest' ||
    verifiedFilter !== 'ALL' ||
    filterExam ||
    filterSubject ||
    filterChapter ||
    filterTopic
  );

  const handleResetFilters = () => {
    setSearchQuery('');
    setDifficultyFilter('ALL');
    setSortFilter('newest');
    setVerifiedFilter('ALL');
    setFilterExam('');
    setFilterSubject('');
    setFilterChapter('');
    setFilterTopic('');
    setPage(0);
    setSearchParams({});
  };

  // Creation / Edit Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<QuestionItem | null>(null);
  const [modalTab, setModalTab] = useState<'editor' | 'preview'>('editor');

  // Modal Form Fields
  const [modalExam, setModalExam] = useState('');
  const [modalSubject, setModalSubject] = useState('');
  const [modalChapter, setModalChapter] = useState('');
  const [modalTopic, setModalTopic] = useState('');

  const [modalSubjects, setModalSubjects] = useState<Subject[]>([]);
  const [modalChapters, setModalChapters] = useState<Chapter[]>([]);
  const [modalTopics, setModalTopics] = useState<Topic[]>([]);

  const [qText, setQText] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctOpt, setCorrectOpt] = useState('A');
  const [explanation, setExplanation] = useState('');
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [sourceYear, setSourceYear] = useState('');
  const [savingQuestion, setSavingQuestion] = useState(false);

  // ─── 1. Load Stats ─────────────────────────────────────────────────────────
  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const res = await api.get('/learn/admin/questions/stats');
      setStats(res.data);
    } catch (err: any) {
      console.error('Failed to load stats:', err);
    } finally {
      setStatsLoading(false);
    }
  };

  // ─── 2. Load Questions ─────────────────────────────────────────────────────
  const fetchQuestions = async () => {
    setTableLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        size: pageSize.toString(),
        difficulty: difficultyFilter,
      });
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (sortFilter) params.append('sort', sortFilter);
      if (verifiedFilter === 'VERIFIED') params.append('isVerified', 'true');
      if (verifiedFilter === 'UNVERIFIED') params.append('isVerified', 'false');
      if (filterExam) params.append('examId', filterExam);
      if (filterSubject) params.append('subjectId', filterSubject);
      if (filterChapter) params.append('chapterId', filterChapter);
      if (filterTopic) params.append('topicId', filterTopic);

      const res = await api.get(`/learn/admin/questions?${params.toString()}`);
      setQuestions(res.data?.content || []);
      setTotalElements(res.data?.totalElements || 0);
      setTotalPages(res.data?.totalPages || 1);
    } catch (err: any) {
      console.error('Failed to load questions:', err);
      toast.error('Failed to load questions list');
    } finally {
      setTableLoading(false);
    }
  };

  // ─── 3. Load Hierarchy for Filter Dropdowns ────────────────────────────────
  useEffect(() => {
    learnApi.get('/content/exams')
      .then(res => setExams(res.data || []))
      .catch(console.error);
    fetchStats();
  }, []);

  // Synchronize state if URL query params change dynamically
  useEffect(() => {
    const pExam = searchParams.get('exam');
    const pSubject = searchParams.get('subject');
    const pChapter = searchParams.get('chapter');
    const pTopic = searchParams.get('topic');
    if (pExam && pExam !== filterExam) setFilterExam(pExam);
    if (pSubject && pSubject !== filterSubject) setFilterSubject(pSubject);
    if (pChapter && pChapter !== filterChapter) setFilterChapter(pChapter);
    if (pTopic && pTopic !== filterTopic) setFilterTopic(pTopic);
  }, [searchParams]);

  useEffect(() => {
    if (filterExam) {
      learnApi.get(`/content/exams/${filterExam}/subjects`)
        .then(res => {
          const list = res.data || [];
          setSubjects(list);
          const pSub = searchParams.get('subject');
          if (pSub && list.some((s: Subject) => s.id === pSub)) {
            setFilterSubject(pSub);
          } else if (filterSubject && !list.some((s: Subject) => s.id === filterSubject)) {
            setFilterSubject('');
          }
        })
        .catch(console.error);
    } else {
      setSubjects([]);
      setFilterSubject('');
    }
  }, [filterExam]);

  useEffect(() => {
    if (filterSubject) {
      learnApi.get(`/content/subjects/${filterSubject}/chapters`)
        .then(res => {
          const list = res.data || [];
          setChapters(list);
          const pChap = searchParams.get('chapter');
          if (pChap && list.some((c: Chapter) => c.id === pChap)) {
            setFilterChapter(pChap);
          } else if (filterChapter && !list.some((c: Chapter) => c.id === filterChapter)) {
            setFilterChapter('');
          }
        })
        .catch(console.error);
    } else {
      setChapters([]);
      setFilterChapter('');
    }
  }, [filterSubject]);

  useEffect(() => {
    if (filterChapter) {
      learnApi.get(`/content/chapters/${filterChapter}/topics`)
        .then(res => {
          const list = res.data || [];
          setTopics(list);
          const pTop = searchParams.get('topic');
          if (pTop && list.some((t: Topic) => t.id === pTop)) {
            setFilterTopic(pTop);
          } else if (filterTopic && !list.some((t: Topic) => t.id === filterTopic)) {
            setFilterTopic('');
          }
        })
        .catch(console.error);
    } else {
      setTopics([]);
      setFilterTopic('');
    }
  }, [filterChapter]);

  useEffect(() => {
    fetchQuestions();
  }, [page, pageSize, difficultyFilter, filterExam, filterSubject, filterChapter, filterTopic, sortFilter, verifiedFilter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(0);
      fetchQuestions();
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // ─── Hierarchy for Modal (Create / Edit) ───────────────────────────────────
  useEffect(() => {
    if (modalExam) {
      learnApi.get(`/content/exams/${modalExam}/subjects`)
        .then(res => setModalSubjects(res.data || []))
        .catch(console.error);
    } else {
      setModalSubjects([]);
      setModalSubject('');
    }
  }, [modalExam]);

  useEffect(() => {
    if (modalSubject) {
      learnApi.get(`/content/subjects/${modalSubject}/chapters`)
        .then(res => setModalChapters(res.data || []))
        .catch(console.error);
    } else {
      setModalChapters([]);
      setModalChapter('');
    }
  }, [modalSubject]);

  useEffect(() => {
    if (modalChapter) {
      learnApi.get(`/content/chapters/${modalChapter}/topics`)
        .then(res => setModalTopics(res.data || []))
        .catch(console.error);
    } else {
      setModalTopics([]);
      setModalTopic('');
    }
  }, [modalChapter]);

  // ─── Open Modal for New Question ───────────────────────────────────────────
  const handleOpenCreateModal = () => {
    setEditingQuestion(null);
    setModalExam(filterExam || (exams[0]?.id || ''));
    setModalSubject(filterSubject || '');
    setModalChapter(filterChapter || '');
    setModalTopic(filterTopic || '');
    setQText('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setCorrectOpt('A');
    setExplanation('');
    setDifficulty('MEDIUM');
    setSourceYear('');
    setModalTab('editor');
    setModalOpen(true);
  };

  // ─── Open Modal for Edit ───────────────────────────────────────────────────
  const handleOpenEditModal = (q: QuestionItem) => {
    setEditingQuestion(q);
    setModalExam(q.examTypeId);
    setModalSubject(q.subjectId);
    setModalChapter(q.chapterId);
    setModalTopic(q.topicId);
    setQText(q.questionText);
    setOptA(q.optionA);
    setOptB(q.optionB);
    setOptC(q.optionC);
    setOptD(q.optionD);
    setCorrectOpt(q.correctAnswer || 'A');
    setExplanation(q.explanation || '');
    setDifficulty(q.difficulty || 'MEDIUM');
    setSourceYear(q.sourceYear || '');
    setModalTab('editor');
    setModalOpen(true);
  };

  // ─── Save Question (Create or Edit) ────────────────────────────────────────
  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalTopic) {
      toast.error('Please choose a Target Topic');
      return;
    }
    if (!qText.trim() || !optA.trim() || !optB.trim() || !optC.trim() || !optD.trim()) {
      toast.error('Please enter the question text and all 4 options');
      return;
    }

    setSavingQuestion(true);
    const payload = {
      topicId: modalTopic,
      questionText: qText.trim(),
      optionA: optA.trim(),
      optionB: optB.trim(),
      optionC: optC.trim(),
      optionD: optD.trim(),
      correctAnswer: correctOpt,
      explanation: explanation.trim() || null,
      difficulty: difficulty,
      sourceYear: sourceYear.trim() || null,
      isVerified: true,
    };

    try {
      if (editingQuestion) {
        await api.put(`/learn/admin/questions/${editingQuestion.id}`, payload);
        toast.success('Question updated successfully');
      } else {
        await api.post('/learn/admin/questions', payload);
        toast.success('Question created in Question Bank');
      }
      setModalOpen(false);
      fetchStats();
      fetchQuestions();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to save question');
    } finally {
      setSavingQuestion(false);
    }
  };

  // ─── Delete Question ───────────────────────────────────────────────────────
  const handleDeleteQuestion = async (id: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this question?')) return;
    try {
      await api.delete(`/learn/admin/questions/${id}`);
      toast.success('Question deleted');
      setSelectedIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      fetchStats();
      fetchQuestions();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Delete failed');
    }
  };

  // ─── Bulk Selection Handlers ────────────────────────────────────────────────
  const handleToggleSelect = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(prev => {
        const next = new Set(prev);
        questions.forEach(q => next.delete(q.id));
        return next;
      });
    } else {
      setSelectedIds(prev => {
        const next = new Set(prev);
        questions.forEach(q => next.add(q.id));
        return next;
      });
    }
  };

  const handleClearSelection = () => {
    setSelectedIds(new Set());
  };

  const handleDeleteBatch = async () => {
    const count = selectedIds.size;
    if (count === 0) return;
    if (!window.confirm(`Are you sure you want to permanently delete these ${count} questions? This action cannot be undone.`)) {
      return;
    }
    setBulkDeleting(true);
    try {
      await api.delete('/learn/admin/questions/batch', {
        data: { ids: Array.from(selectedIds) }
      });
      toast.success(`${count} question(s) deleted successfully`);
      setSelectedIds(new Set());
      fetchStats();
      fetchQuestions();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to delete selected questions');
    } finally {
      setBulkDeleting(false);
    }
  };

  // ─── CSV Export Engine ──────────────────────────────────────────────────────
  const exportQuestionsToCSV = (items: QuestionItem[], filename: string) => {
    if (!items.length) {
      toast.error('No questions to export');
      return;
    }

    const headers = [
      'ID',
      'Exam',
      'Subject',
      'Chapter',
      'Topic',
      'Question Text',
      'Option A',
      'Option B',
      'Option C',
      'Option D',
      'Correct Answer',
      'Explanation',
      'Difficulty',
      'Source Year',
      'Created At'
    ];

    const escapeCSV = (val: string | null | undefined) => {
      if (val == null) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = items.map(q => [
      escapeCSV(q.id),
      escapeCSV(q.examName),
      escapeCSV(q.subjectName),
      escapeCSV(q.chapterTitle),
      escapeCSV(q.topicTitle),
      escapeCSV(q.questionText),
      escapeCSV(q.optionA),
      escapeCSV(q.optionB),
      escapeCSV(q.optionC),
      escapeCSV(q.optionD),
      escapeCSV(q.correctAnswer),
      escapeCSV(q.explanation),
      escapeCSV(q.difficulty),
      escapeCSV(q.sourceYear),
      escapeCSV(q.createdAt)
    ].join(','));

    const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`Exported ${items.length} question(s) to CSV`);
  };

  const handleExportSelected = () => {
    const selectedList = questions.filter(q => selectedIds.has(q.id));
    if (!selectedList.length) {
      toast.error('No selected questions found on current page to export');
      return;
    }
    const dateStr = new Date().toISOString().split('T')[0];
    exportQuestionsToCSV(selectedList, `questions_selected_${dateStr}.csv`);
  };

  const handleExportCurrentPage = () => {
    if (!questions.length) {
      toast.error('No questions available in the current view to export');
      return;
    }
    const dateStr = new Date().toISOString().split('T')[0];
    exportQuestionsToCSV(questions, `questions_page_${page + 1}_${dateStr}.csv`);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* ─── Top Header ───────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60">
              Exam Engine
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">• Universal Question Bank</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">Question Bank & In-Browser Editor</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Search, preview, author, and edit verified MCQs with options, difficulty levels, and solution walkthroughs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleExportCurrentPage}
            disabled={tableLoading || questions.length === 0}
            className="px-3.5 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 rounded-xl border border-transparent dark:border-slate-700/60 transition-all flex items-center gap-1.5 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            title="Export current page of questions to CSV"
          >
            <Download className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            Export CSV
          </button>
          <Link
            to={`/admin/learn/import${filterTopic ? `?exam=${filterExam}&subject=${filterSubject}&chapter=${filterChapter}&topic=${filterTopic}` : (filterExam ? `?exam=${filterExam}` : '')}`}
            className="px-3.5 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 rounded-xl border border-transparent dark:border-slate-700/60 transition-all flex items-center gap-1.5"
            title={filterTopic ? "Bulk import questions for selected topic" : "Bulk question import"}
          >
            <UploadCloud className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            Bulk Import
          </Link>
          <Link
            to="/admin/learn/curriculum"
            className="px-3.5 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 rounded-xl border border-transparent dark:border-slate-700/60 transition-all flex items-center gap-1.5"
          >
            <FolderTree className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            Curriculum Builder
          </Link>
          <button
            onClick={handleOpenCreateModal}
            className="px-3.5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add New Question
          </button>
        </div>
      </div>

      {/* ─── KPI Stats Bar ────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Total Questions</p>
          <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">{statsLoading ? '...' : stats?.totalQuestions ?? 0}</h3>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Across all syllabus topics</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Easy Questions</p>
          <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">{statsLoading ? '...' : stats?.easyCount ?? 0}</h3>
          <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Concept builders</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <p className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Medium Questions</p>
          <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">{statsLoading ? '...' : stats?.mediumCount ?? 0}</h3>
          <p className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold mt-0.5">Standard exam level</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <p className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Hard Questions</p>
          <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">{statsLoading ? '...' : stats?.hardCount ?? 0}</h3>
          <p className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold mt-0.5">Advanced rank deciders</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Topics Covered</p>
          <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">{statsLoading ? '...' : stats?.totalTopicsCovered ?? 0}</h3>
          <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">With verified MCQs</p>
        </div>
      </div>

      {/* ─── Search and Cascading Filters ─────────────────────────────────── */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3.5">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search in question text, options, or solution explanations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={difficultyFilter}
              onChange={(e) => {
                setDifficultyFilter(e.target.value);
                setPage(0);
              }}
              className="text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl px-2.5 py-2 outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            >
              <option value="ALL">All Difficulties</option>
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
            </select>

            <select
              value={verifiedFilter}
              onChange={(e) => {
                setVerifiedFilter(e.target.value as any);
                setPage(0);
              }}
              className="text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl px-2.5 py-2 outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            >
              <option value="ALL">All Verification</option>
              <option value="VERIFIED">Verified Only</option>
              <option value="UNVERIFIED">Pending Review</option>
            </select>

            <select
              value={sortFilter}
              onChange={(e) => {
                setSortFilter(e.target.value as any);
                setPage(0);
              }}
              className="text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl px-2.5 py-2 outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>

            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(0);
              }}
              className="text-xs font-bold bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl px-2.5 py-2 outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            >
              <option value="10">10 / page</option>
              <option value="15">15 / page</option>
              <option value="30">30 / page</option>
              <option value="50">50 / page</option>
            </select>

            {isAnyFilterActive && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-3 py-2 text-xs font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60 rounded-xl hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                title="Reset all filters to default"
              >
                <X className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Chained Hierarchy Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div>
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mb-1">Filter by Exam:</label>
            <select
              value={filterExam}
              onChange={(e) => {
                setFilterExam(e.target.value);
                setFilterSubject('');
                setFilterChapter('');
                setFilterTopic('');
                setPage(0);
              }}
              className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            >
              <option value="">All Exams / Standards</option>
              {exams.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mb-1">Filter by Subject:</label>
            <select
              value={filterSubject}
              onChange={(e) => {
                setFilterSubject(e.target.value);
                setFilterChapter('');
                setFilterTopic('');
                setPage(0);
              }}
              disabled={!filterExam}
              className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500 dark:focus:border-indigo-400 disabled:opacity-40 dark:disabled:opacity-30"
            >
              <option value="">All Subjects</option>
              {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mb-1">Filter by Chapter:</label>
            <select
              value={filterChapter}
              onChange={(e) => {
                setFilterChapter(e.target.value);
                setFilterTopic('');
                setPage(0);
              }}
              disabled={!filterSubject}
              className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500 dark:focus:border-indigo-400 disabled:opacity-40 dark:disabled:opacity-30"
            >
              <option value="">All Chapters</option>
              {chapters.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mb-1">Filter by Topic:</label>
            <select
              value={filterTopic}
              onChange={(e) => {
                setFilterTopic(e.target.value);
                setPage(0);
              }}
              disabled={!filterChapter}
              className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500 dark:focus:border-indigo-400 disabled:opacity-40 dark:disabled:opacity-30"
            >
              <option value="">All Topics</option>
              {topics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* ─── Bulk Select Bar ──────────────────────────────────────────────── */}
      {!tableLoading && questions.length > 0 && (
        <div className="flex items-center justify-between px-2 text-xs">
          <label className="flex items-center gap-2 cursor-pointer select-none font-semibold text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleToggleSelectAll}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800 cursor-pointer"
            />
            <span>Select all on page ({questions.length})</span>
          </label>

          {selectedIds.size > 0 && (
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
              {selectedIds.size} question{selectedIds.size > 1 ? 's' : ''} selected
            </span>
          )}
        </div>
      )}

      {/* ─── Questions List ───────────────────────────────────────────────── */}
      <div className="space-y-4">
        {tableLoading ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center text-slate-400 dark:text-slate-500 text-xs">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-indigo-500 dark:text-indigo-400 mb-2" />
            Loading Question Bank...
          </div>
        ) : questions.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center text-slate-400 dark:text-slate-500 text-xs space-y-3.5">
            <HelpCircle className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
            <div>
              <p className="font-bold text-slate-700 dark:text-slate-300 text-sm">No questions found</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 max-w-sm mx-auto">
                No MCQs matched your active search query, syllabus filters, or difficulty criteria.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {isAnyFilterActive && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3.5 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  Reset All Filters
                </button>
              )}
              <button
                type="button"
                onClick={handleOpenCreateModal}
                className="px-3.5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add New Question
              </button>
            </div>
          </div>
        ) : (
          questions.map((q, idx) => (
            <div 
              key={q.id} 
              className={`bg-white dark:bg-slate-900 rounded-2xl border p-5 shadow-xs transition-all space-y-3.5 ${
                selectedIds.has(q.id)
                  ? 'border-indigo-400 dark:border-indigo-600 ring-1 ring-indigo-400/30'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Question Header & Breadcrumb */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    aria-label={`Select question ${q.id}`}
                    checked={selectedIds.has(q.id)}
                    onChange={() => handleToggleSelect(q.id)}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800 cursor-pointer"
                  />
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 text-[10px]">
                      {q.examName}
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">{q.subjectName}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 truncate max-w-[180px]">{q.chapterTitle}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
                    <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 truncate max-w-[200px]">{q.topicTitle}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {q.sourceYear && (
                    <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-[10px] font-bold rounded-md border border-blue-200 dark:border-blue-800/60">
                      {q.sourceYear}
                    </span>
                  )}
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md uppercase ${
                    q.difficulty === 'EASY' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60' :
                    q.difficulty === 'HARD' ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60' :
                    'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60'
                  }`}>
                    {q.difficulty}
                  </span>

                  <button
                    onClick={() => handleOpenEditModal(q)}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded-lg transition-colors ml-1 cursor-pointer"
                    title="Edit Question"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDeleteQuestion(q.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition-colors cursor-pointer"
                    title="Delete Question"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed flex items-start gap-2">
                <span className="text-slate-400 dark:text-slate-500 shrink-0 font-bold">Q{page * pageSize + idx + 1}.</span>
                <div className="prose prose-xs sm:prose-sm dark:prose-invert max-w-none flex-1 leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.questionText}</ReactMarkdown>
                </div>
              </div>

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { label: 'A', text: q.optionA },
                  { label: 'B', text: q.optionB },
                  { label: 'C', text: q.optionC },
                  { label: 'D', text: q.optionD },
                ].map((opt) => {
                  const isCorrect = q.correctAnswer === opt.label;
                  return (
                    <div
                      key={opt.label}
                      className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                        isCorrect
                          ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700/80 text-emerald-950 dark:text-emerald-200 font-bold shadow-2xs'
                          : 'bg-slate-50/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 ${
                        isCorrect
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                      }`}>
                        {opt.label}
                      </span>
                      <span className="flex-1">{opt.text}</span>
                      {isCorrect && (
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-auto" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation Note */}
              {q.explanation && (
                <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 rounded-xl text-[11px] text-indigo-950 dark:text-indigo-200 leading-relaxed flex items-start gap-2">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 shrink-0 uppercase tracking-wide text-[10px] mt-0.5">Solution:</span>
                  <div className="prose prose-xs dark:prose-invert max-w-none flex-1 text-[11px] leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.explanation}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          ))
        )}

        {/* Pagination Bar */}
        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div>
            Showing <strong className="text-slate-800 dark:text-slate-200">{questions.length}</strong> of{' '}
            <strong className="text-slate-800 dark:text-slate-200">{totalElements}</strong> total verified questions
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={page === 0 || tableLoading}
              onClick={() => setPage(prev => Math.max(0, prev - 1))}
              className="p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-750 disabled:opacity-40 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="px-3 py-1 font-bold text-slate-700 dark:text-slate-300">
              Page {page + 1} of {Math.max(1, totalPages)}
            </span>
            <button
              type="button"
              disabled={page >= totalPages - 1 || tableLoading}
              onClick={() => setPage(prev => prev + 1)}
              className="p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-750 disabled:opacity-40 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Floating Bulk Actions Bar ────────────────────────────────────── */}
      {selectedIds.size > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 dark:bg-slate-800 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700/80 dark:border-slate-600 flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center gap-2 text-xs font-bold">
            <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-black">
              {selectedIds.size}
            </span>
            <span>Selected</span>
          </div>

          <div className="h-4 w-px bg-slate-700 dark:bg-slate-600" />

          <button
            onClick={handleExportSelected}
            className="flex items-center gap-1.5 text-xs font-semibold hover:text-indigo-400 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            Export CSV
          </button>

          <div className="h-4 w-px bg-slate-700 dark:bg-slate-600" />

          <button
            onClick={handleDeleteBatch}
            disabled={bulkDeleting}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {bulkDeleting ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Trash2 className="w-3.5 h-3.5" />
            )}
            Delete Selected
          </button>

          <div className="h-4 w-px bg-slate-700 dark:bg-slate-600" />

          <button
            onClick={handleClearSelection}
            className="p-1 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Clear Selection"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* ─── Question Creator & Editor Modal ──────────────────────────────── */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-base">
                  {editingQuestion ? 'Edit Question' : 'Author New MCQ'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Universal Question Bank Repository</p>
              </div>

              <div className="flex items-center gap-2">
                {/* Tab Switch: Editor vs Live Preview */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => setModalTab('editor')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      modalTab === 'editor'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-2xs'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                  >
                    <FileEdit className="w-3.5 h-3.5" />
                    Editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalTab('preview')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      modalTab === 'preview'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Student Preview
                  </button>
                </div>

                <button 
                  onClick={() => setModalOpen(false)} 
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            <form 
              onSubmit={handleSaveQuestion} 
              onKeyDown={(e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                  e.preventDefault();
                  if (!savingQuestion && modalTopic && qText.trim() && optA.trim() && optB.trim() && optC.trim() && optD.trim()) {
                    handleSaveQuestion(e);
                  }
                }
              }}
              className="space-y-4 text-xs"
            >
              {modalTab === 'preview' ? (
                /* ─── Live Student Preview Mode ────────────────────────────── */
                <div className="space-y-4 py-1">
                  {/* Meta summary pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {exams.find(e => e.id === modalExam)?.name || 'Exam Standard'}
                      </span>
                      <span>•</span>
                      <span>{modalSubjects.find(s => s.id === modalSubject)?.name || 'Subject'}</span>
                      <span>•</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                        {modalTopics.find(t => t.id === modalTopic)?.title || 'Target Topic'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {sourceYear && (
                        <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-[10px] font-bold rounded-md border border-blue-200 dark:border-blue-800/60">
                          {sourceYear}
                        </span>
                      )}
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md uppercase ${
                        difficulty === 'EASY' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60' :
                        difficulty === 'HARD' ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60' :
                        'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60'
                      }`}>
                        {difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Formatted Question Prompt */}
                  <div className="p-4 bg-white dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Question Formulation:</span>
                    <div className="prose prose-xs sm:prose-sm dark:prose-invert max-w-none text-slate-900 dark:text-slate-100 font-medium">
                      {qText.trim() ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{qText}</ReactMarkdown>
                      ) : (
                        <span className="text-slate-400 italic">No question prompt text entered yet.</span>
                      )}
                    </div>
                  </div>

                  {/* 4 Answer Choices preview */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Answer Choices:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        { label: 'A', text: optA },
                        { label: 'B', text: optB },
                        { label: 'C', text: optC },
                        { label: 'D', text: optD },
                      ].map(opt => {
                        const isCorrect = correctOpt === opt.label;
                        return (
                          <div
                            key={opt.label}
                            className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                              isCorrect
                                ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700/80 text-emerald-950 dark:text-emerald-200 font-bold'
                                : 'bg-slate-50/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 ${
                              isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                            }`}>
                              {opt.label}
                            </span>
                            <span className="flex-1">{opt.text || <span className="text-slate-400 italic">Empty option</span>}</span>
                            {isCorrect && (
                              <span className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-emerald-600 text-white shrink-0">
                                CORRECT
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Solution Walkthrough preview */}
                  <div className="p-3.5 bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 rounded-xl space-y-1.5 text-xs text-indigo-950 dark:text-indigo-200">
                    <div className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400 font-bold uppercase tracking-wider text-[10px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Step-by-Step Solution Walkthrough
                    </div>
                    <div className="prose prose-xs dark:prose-invert max-w-none text-[11px] leading-relaxed">
                      {explanation.trim() ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{explanation}</ReactMarkdown>
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500 italic">No solution explanation entered.</span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* ─── Editor Form Mode ─────────────────────────────────────── */
                <>
                  {/* Hierarchy Chained Selectors */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block mb-1">Exam:</label>
                      <select
                        value={modalExam}
                        onChange={(e) => {
                          setModalExam(e.target.value);
                          setModalSubject('');
                          setModalChapter('');
                          setModalTopic('');
                        }}
                        className="w-full text-xs p-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500"
                      >
                        <option value="">Select Exam</option>
                        {exams.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block mb-1">Subject:</label>
                      <select
                        value={modalSubject}
                        onChange={(e) => {
                          setModalSubject(e.target.value);
                          setModalChapter('');
                          setModalTopic('');
                        }}
                        disabled={!modalExam}
                        className="w-full text-xs p-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500 disabled:opacity-40"
                      >
                        <option value="">Select Subject</option>
                        {modalSubjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block mb-1">Chapter:</label>
                      <select
                        value={modalChapter}
                        onChange={(e) => {
                          setModalChapter(e.target.value);
                          setModalTopic('');
                        }}
                        disabled={!modalSubject}
                        className="w-full text-xs p-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500 disabled:opacity-40"
                      >
                        <option value="">Select Chapter</option>
                        {modalChapters.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block mb-1">Topic *:</label>
                      <select
                        value={modalTopic}
                        onChange={(e) => setModalTopic(e.target.value)}
                        disabled={!modalChapter}
                        className="w-full text-xs p-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500 disabled:opacity-40 font-bold"
                      >
                        <option value="">Select Topic</option>
                        {modalTopics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">
                        Question Prompt (Text / Markdown / LaTeX):
                      </label>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500">
                        {qText.length} chars
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Enter the question formulation. LaTeX equations like $E = mc^2$ or $\frac{a}{b}$ are supported."
                      value={qText}
                      onChange={(e) => setQText(e.target.value)}
                      className="w-full text-xs p-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800"
                    />
                  </div>

                  {/* 4 Options */}
                  <div className="space-y-2">
                    <label className="font-bold text-slate-700 dark:text-slate-300 block">Answer Choices & Correct Option:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { label: 'A', val: optA, set: setOptA },
                        { label: 'B', val: optB, set: setOptB },
                        { label: 'C', val: optC, set: setOptC },
                        { label: 'D', val: optD, set: setOptD },
                      ].map((item) => (
                        <div 
                          key={item.label} 
                          className={`flex items-center gap-2 p-2 rounded-xl border transition-all ${
                            correctOpt === item.label
                              ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700/80'
                              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <input
                            type="radio"
                            id={`opt-radio-${item.label}`}
                            name="correct-opt"
                            checked={correctOpt === item.label}
                            onChange={() => setCorrectOpt(item.label)}
                            className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                          />
                          <label htmlFor={`opt-radio-${item.label}`} className="font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            {item.label}:
                          </label>
                          <input
                            type="text"
                            required
                            placeholder={`Option ${item.label} text`}
                            value={item.val}
                            onChange={(e) => item.set(e.target.value)}
                            className="w-full text-xs p-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg outline-none focus:border-indigo-500"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500">
                      Select the radio button next to Option {correctOpt} to mark it as the correct answer.
                    </p>
                  </div>

                  {/* Difficulty & Source Year */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Difficulty Level:</label>
                      <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl outline-none focus:border-indigo-500"
                      >
                        <option value="EASY">EASY (Foundational)</option>
                        <option value="MEDIUM">MEDIUM (Standard)</option>
                        <option value="HARD">HARD (Challenger)</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Source / Exam Year:</label>
                      <input
                        type="text"
                        placeholder="e.g. JEE Main 2024, CBSE 2023, NCERT Exemplar"
                        value={sourceYear}
                        onChange={(e) => setSourceYear(e.target.value)}
                        className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Solution / Explanation */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">
                        Step-by-Step Solution Walkthrough:
                      </label>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500">
                        {explanation.length} chars
                      </span>
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Detailed explanation, formula application, and hints shown to students after answering."
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      className="w-full text-xs p-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800"
                    />
                  </div>
                </>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 hidden sm:inline">
                  Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[9px] border border-slate-200 dark:border-slate-700">Ctrl + Enter</kbd> to save
                </span>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingQuestion || !modalTopic || !qText.trim()}
                    className="px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {savingQuestion ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Saving Question...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {editingQuestion ? 'Update Question' : 'Save to Question Bank'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
