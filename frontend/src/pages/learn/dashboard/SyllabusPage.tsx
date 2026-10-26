import { useState, useEffect, useMemo } from 'react';
import { 
  Book, ChevronRight, PlayCircle, ChevronDown, Lock, Sparkles, 
  Loader2, Flame, Zap, Star, Search, BookOpen, 
  Bookmark, FileText, CheckCircle2, Circle, Clock,
  GraduationCap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { learnApi } from '../../../lib/learn-api';
import { usePremium } from '../../../hooks/usePremium';
import { PaywallModal } from '../../../components/learn/PaywallModal';
import { FormulaCheatSheetModal } from '../../../components/learn/FormulaCheatSheetModal';
import { 
  getSubjectsForClass, 
  getCurriculumForClass, 
  getChapterWeightage, 
  SUBJECT_METADATA, 
  type Chapter, 
  type Topic, 
  type Subject 
} from '../../../data/curriculumData';

function getCompletedTopicsStorageKey(): string {
  try {
    const email = localStorage.getItem('learn_user_email');
    if (email && email.trim()) {
      return `preplens_completed_topics_${email.trim().toLowerCase()}`;
    }
  } catch {}
  return 'preplens_completed_topics_guest';
}

export function SyllabusPage() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  
  const [examGoal, setExamGoal] = useState<string>(() => localStorage.getItem('learn_exam_goal') || 'Class 11');
  const [activeSubject, setActiveSubject] = useState<string>(() => {
    const goal = (localStorage.getItem('learn_exam_goal') || 'Class 11').toLowerCase();
    if (goal.includes('ssc') || goal.includes('upsc') || goal.includes('govt') || goal.includes('cgl')) return 'quant';
    if (goal.includes('neet')) return 'bio';
    if (goal.includes('jee') || goal.includes('11') || goal.includes('12')) return 'phy';
    return 'sci';
  });
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterTier, setFilterTier] = useState<'ALL' | 'TIER_1' | 'TIER_2' | 'TIER_3'>('ALL');
  
  const { isPremium } = usePremium();
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [smartStudyMode, setSmartStudyMode] = useState(false);
  const [formulaModalOpen, setFormulaModalOpen] = useState(false);

  // Topic completion tracking (persisted in user-scoped localStorage)
  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(getCompletedTopicsStorageKey());
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleTopicCompletion = (topicId: string, topicTitle: string, isLocked: boolean = false, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (isLocked) {
      setPaywallOpen(true);
      toast.info(`"${topicTitle}" is a Pro topic. Upgrade to Pro to access this lesson and track completion.`);
      return;
    }

    const isCompleted = completedTopics.includes(topicId);
    const updated = isCompleted
      ? completedTopics.filter(id => id !== topicId)
      : [...completedTopics, topicId];

    setCompletedTopics(updated);
    localStorage.setItem(getCompletedTopicsStorageKey(), JSON.stringify(updated));

    if (!isCompleted) {
      toast.success(`Completed: "${topicTitle}"`, {
        description: 'Marked as completed in your syllabus checklist.',
        style: { background: '#10b981', color: 'white', border: 'none' }
      });
    } else {
      toast.info(`Marked incomplete: "${topicTitle}"`);
    }
  };

  // Helper to calculate total topics and completion for any subject
  const getSubjectProgress = (subjectId: string) => {
    const subChapters = getCurriculumForClass(examGoal, subjectId);
    let totalTopics = 0;
    let completedCount = 0;
    subChapters.forEach(ch => {
      (ch.topics || []).forEach((top, idx) => {
        totalTopics++;
        const isLocked = !isPremium && idx >= 2;
        if (!isLocked && completedTopics.includes(top.id)) {
          completedCount++;
        }
      });
    });
    return {
      totalTopics,
      completedCount,
      pct: totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0
    };
  };

  // Count only valid completed topics for the hero stat
  const validCompletedCount = useMemo(() => {
    if (isPremium) return completedTopics.length;
    let count = 0;
    subjects.forEach(sub => {
      const subChapters = getCurriculumForClass(examGoal, sub.id);
      subChapters.forEach(ch => {
        (ch.topics || []).forEach((top, idx) => {
          if (idx < 2 && completedTopics.includes(top.id)) {
            count++;
          }
        });
      });
    });
    return count;
  }, [isPremium, completedTopics, subjects, examGoal]);

  const [userName, setUserName] = useState<string>(() => localStorage.getItem('learn_user_name') || 'Student');
  const [loading, setLoading] = useState(false);

  // 1. Fetch user profile
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const profileRes = await learnApi.get('/profile');
        if (profileRes.data) {
          const goal = profileRes.data.examGoal || 'Class 11';
          const name = profileRes.data.fullName || 'Student';
          setExamGoal(goal);
          setUserName(name);
          localStorage.setItem('learn_exam_goal', goal);
          localStorage.setItem('learn_user_name', name);
        }
      } catch (err) {
        console.error('Failed to fetch profile for syllabus', err);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    document.title = `${examGoal || 'Class 11'} Syllabus Hub | PrepLens Learn`;
  }, [examGoal]);

  // 2. Fetch or load subjects & immediately auto-select the first subject
  useEffect(() => {
    const loadSubjectsAndCurriculum = async () => {
      setLoading(true);
      const classSubjects = getSubjectsForClass(examGoal);

      try {
        const examsRes = await learnApi.get('/content/exams');
        if (examsRes.data && examsRes.data.length > 0) {
          const goalClean = examGoal.toLowerCase().replace(/[^a-z0-9]/g, '');
          const matchedExam = examsRes.data.find((e: any) => {
            const nameClean = (e.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            const slugClean = (e.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            return nameClean.includes(goalClean) || goalClean.includes(nameClean) || slugClean.includes(goalClean);
          });

          if (matchedExam) {
            const subjectsRes = await learnApi.get(`/content/exams/${matchedExam.id}/subjects`);
            if (subjectsRes.data && subjectsRes.data.length > 0) {
              setSubjects(subjectsRes.data);
              const firstId = subjectsRes.data[0].id;
              selectSubject(firstId, subjectsRes.data[0].name);
              setLoading(false);
              return;
            }
          }
        }
      } catch (err) {
        // Fallback to rich curated curriculum
      }

      setSubjects(classSubjects);
      if (classSubjects.length > 0) {
        selectSubject(classSubjects[0].id, classSubjects[0].name);
      }
      setLoading(false);
    };

    loadSubjectsAndCurriculum();
  }, [examGoal]);

  const selectSubject = async (subjectId: string, _subjectName?: string) => {
    setActiveSubject(subjectId);
    setActiveChapter(null);

    // Try API first
    try {
      const res = await learnApi.get(`/content/subjects/${subjectId}/chapters`);
      if (res.data && res.data.length > 0) {
        setChapters(res.data);
        // Auto-open first chapter
        if (res.data[0]) {
          handleChapterClick(res.data[0].id, res.data[0].title);
        }
        return;
      }
    } catch (e) {
      // ignore
    }

    // Dynamic Class-Aware Curriculum Fallback
    const fallbackList = getCurriculumForClass(examGoal, subjectId);
    setChapters(fallbackList);
    // Auto-open first chapter so topics are immediately visible
    if (fallbackList.length > 0) {
      setActiveChapter(fallbackList[0].id);
      setTopics(fallbackList[0].topics || []);
    }
  };

  const handleChapterClick = async (chapterId: string, chapterTitle?: string) => {
    if (chapterId === activeChapter) {
      setActiveChapter(null);
      return;
    }

    setActiveChapter(chapterId);

    // Check if topics already present in memory
    const existing = chapters.find(c => c.id === chapterId);
    if (existing && existing.topics && existing.topics.length > 0) {
      setTopics(existing.topics);
      return;
    }

    try {
      const res = await learnApi.get(`/content/chapters/${chapterId}/topics`);
      if (res.data && res.data.length > 0) {
        setTopics(res.data);
        return;
      }
    } catch (err) {
      // ignore
    }

    // Fallback topics from class curriculum
    const classChapters = getCurriculumForClass(examGoal, activeSubject);
    const found = classChapters.find(c => c.id === chapterId || c.title === chapterTitle);
    if (found && found.topics && found.topics.length > 0) {
      setTopics(found.topics);
      return;
    }

    setTopics([
      { id: `${chapterId}-t1`, title: 'Introduction & Core Fundamental Concepts' },
      { id: `${chapterId}-t2`, title: 'Detailed Analysis & Problem Solving' },
      { id: `${chapterId}-t3`, title: 'High-Yield Sure-Shot Board Exam Questions' }
    ]);
  };

  const activeSubjectObj = subjects.find((s) => s.id === activeSubject);

  // Filtered and sorted chapters
  const displayedChapters = useMemo(() => {
    let list = [...chapters];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(c => {
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesTopics = (c.topics || []).some(t => t.title.toLowerCase().includes(q));
        return matchesTitle || matchesTopics;
      });
    }

    // Weightage Tier filter
    if (filterTier !== 'ALL') {
      list = list.filter(c => getChapterWeightage(c.title).tier === filterTier);
    }

    // 80/20 Smart Mode Sorting: Tier 1 first, then Tier 2, then Tier 3
    if (smartStudyMode) {
      list.sort((a, b) => getChapterWeightage(a.title).tierRank - getChapterWeightage(b.title).tierRank);
    }

    return list;
  }, [chapters, searchQuery, filterTier, smartStudyMode]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        featureName="Full Syllabus Access"
        featureDescription="Unlock all chapters, topics, and video lectures. Free users get access to the first 2 topics per subject only."
      />

      {/* ─── Hero Header & Action Bar ───────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white p-6 sm:p-9 shadow-xl border border-indigo-900/60">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <GraduationCap className="w-3.5 h-3.5 text-blue-300" />
                {examGoal?.toLowerCase().includes('ssc') || examGoal?.toLowerCase().includes('upsc') || examGoal?.toLowerCase().includes('govt') ? `${examGoal} Official Syllabus` : `${examGoal || 'Class 11'} Curriculum`}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                <CheckCircle2 className="w-3 h-3" />
                {examGoal?.toLowerCase().includes('ssc') || examGoal?.toLowerCase().includes('upsc') || examGoal?.toLowerCase().includes('govt') ? '100% Exam Pattern Mapped' : '100% NCERT & Board Mapped'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {examGoal || 'Class 11'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300">Syllabus & Master Hub</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hello <strong className="text-white">{userName.split(' ')[0]}</strong>! Explore chapters below to watch targeted lectures, read 2-minute AI smart notes, practice previous years' board papers, and revise formulas.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <Book className="w-4 h-4 text-blue-400" />
                {subjects.length} Core Subjects
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {chapters.length} Chapters Available
              </span>
              {validCompletedCount > 0 ? (
                <span className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1.5 rounded-xl font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {validCompletedCount} Topics Mastered
                </span>
              ) : (
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                  <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  AI Notes & Formulas Included
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons Column */}
          <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0">
            {/* Smart Study Toggle */}
            <button
              onClick={() => setSmartStudyMode(!smartStudyMode)}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all shadow-md active:scale-95 ${
                smartStudyMode
                  ? 'bg-rose-600 text-white shadow-rose-600/30 ring-2 ring-rose-400'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              <Zap className={`w-4 h-4 ${smartStudyMode ? 'fill-current' : 'text-amber-400'}`} />
              <span>{smartStudyMode ? '80/20 Smart Mode: ON' : '⚡ Smart Study (80/20)'}</span>
            </button>

            {/* Formula Sheet Button */}
            <button
              onClick={() => setFormulaModalOpen(true)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md active:scale-95"
            >
              <span className="font-mono text-blue-600 font-black">fx</span>
              <span>Formula Cheat Sheet</span>
            </button>

            {/* Past Year Papers Shortcut */}
            <button
              onClick={() => navigate('/learn/pyq')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600/60 hover:bg-indigo-600 text-white border border-indigo-400/30 transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Past Year Papers (PYQs)</span>
            </button>

            {/* Personal Locker Shortcut */}
            <button
              onClick={() => navigate('/learn/locker')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
            >
              <Bookmark className="w-4 h-4 text-emerald-300 fill-emerald-300" />
              <span>My Revision Locker</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─── Visual Subject Selector Bar ────────────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Select Your Subject
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Click any subject to instantly load its curriculum
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {subjects.map((sub) => {
            const key = sub.id.toLowerCase();
            const meta = SUBJECT_METADATA[key] || (
              key.includes('quant') || key.includes('aptitude') ? SUBJECT_METADATA.quant
              : key.includes('reas') || key.includes('logic') || key.includes('intel') ? SUBJECT_METADATA.reasoning
              : key.includes('ga') || key.includes('aware') || key.includes('gs') ? SUBJECT_METADATA.ga
              : key.includes('phy') ? SUBJECT_METADATA.phy
              : key.includes('chem') ? SUBJECT_METADATA.chem
              : key.includes('bio') ? SUBJECT_METADATA.bio
              : key.includes('math') ? SUBJECT_METADATA.math
              : key.includes('sst') || key.includes('social') ? SUBJECT_METADATA.sst
              : key.includes('eng') ? SUBJECT_METADATA.eng
              : SUBJECT_METADATA.sci
            );
            const IconComponent = sub.icon || meta.icon;
            const isSelected = activeSubject === sub.id;
            const progress = getSubjectProgress(sub.id);

            return (
              <button
                key={sub.id}
                onClick={() => selectSubject(sub.id, sub.name)}
                className={`relative p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-lg shadow-blue-500/10 scale-[1.02]'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
                )}

                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${meta.accentBg} ${meta.color} shadow-xs`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {isSelected ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-600 text-white uppercase tracking-wider">
                      Active
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  )}
                </div>

                <div className="w-full">
                  <h3 className={`text-base sm:text-lg font-black transition-colors ${
                    isSelected ? 'text-blue-600' : 'text-slate-900'
                  }`}>
                    {sub.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {meta.badge}
                  </p>

                  {/* Progress tracker inside subject card */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                      <span>{progress.completedCount}/{progress.totalTopics} Done</span>
                      <span className={progress.pct === 100 ? 'text-emerald-600 font-bold' : isSelected ? 'text-blue-600 font-bold' : 'text-slate-600'}>
                        {progress.pct}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          progress.pct === 100 
                            ? 'bg-emerald-500' 
                            : isSelected 
                              ? 'bg-blue-600' 
                              : 'bg-slate-400'
                        }`}
                        style={{ width: `${progress.pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Chapters & Topics Hub ─────────────────────────────────────────── */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-8 space-y-6">
        
        {/* Chapters Header with Search & Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {activeSubjectObj?.name || 'Science'} Chapters
              </h2>
              {smartStudyMode && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-500 text-white shadow-xs animate-pulse">
                  80/20 High-Yield Mode
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {smartStudyMode
                ? 'Chapters re-ranked by highest board exam marks & repetition probability.'
                : `${displayedChapters.length} chapters mapped according to official CBSE curriculum.`}
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chapter or topic..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Tier Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
              <button
                onClick={() => setFilterTier('ALL')}
                className={`px-2.5 py-1 rounded-lg transition-all ${filterTier === 'ALL' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilterTier('TIER_1')}
                className={`px-2.5 py-1 rounded-lg transition-all ${filterTier === 'TIER_1' ? 'bg-rose-500 text-white shadow-xs' : 'hover:text-slate-900'}`}
              >
                Tier 1 (8-10M)
              </button>
              <button
                onClick={() => setFilterTier('TIER_2')}
                className={`px-2.5 py-1 rounded-lg transition-all ${filterTier === 'TIER_2' ? 'bg-blue-600 text-white shadow-xs' : 'hover:text-slate-900'}`}
              >
                Tier 2 (5-7M)
              </button>
              <button
                onClick={() => setFilterTier('TIER_3')}
                className={`px-2.5 py-1 rounded-lg transition-all ${filterTier === 'TIER_3' ? 'bg-slate-600 text-white shadow-xs' : 'hover:text-slate-900'}`}
              >
                Tier 3 (3-4M)
              </button>
            </div>
          </div>
        </div>

        {/* 80/20 Smart Mode Callout Banner */}
        {smartStudyMode && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 border border-rose-200 text-rose-950 flex items-start gap-3.5 text-xs shadow-xs animate-in fade-in duration-200">
            <div className="h-8 w-8 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Flame className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="font-bold text-rose-950 text-sm">Exam-Time 80/20 High-Yield Rule Active</h4>
              <p className="text-rose-900/80 mt-0.5 leading-relaxed">
                Chapters have been automatically sorted by historical board exam weightage. Mastering <strong>Tier 1 chapters (8–10 Marks)</strong> guarantees full marks on 60%+ of the question paper in 1/3rd of the study time.
              </p>
            </div>
          </div>
        )}

        {/* Chapters Accordion List */}
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-slate-400 space-y-3">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-sm font-semibold">Loading chapters...</p>
          </div>
        ) : displayedChapters.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <Book className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-700">No chapters match your filter</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try clearing your search query or reset the weightage filter.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setFilterTier('ALL'); }}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {displayedChapters.map((chapter, chIdx) => {
              const weightage = getChapterWeightage(chapter.title);
              const isOpen = activeChapter === chapter.id;

              // Completion stats for this chapter
              const chTopics = chapter.topics || [];
              const completedInChapter = chTopics.filter((t, idx) => {
                const isLocked = !isPremium && idx >= 2;
                return !isLocked && completedTopics.includes(t.id);
              }).length;
              const totalInChapter = chTopics.length;
              const chapterProgressPct = totalInChapter > 0 ? Math.round((completedInChapter / totalInChapter) * 100) : 0;
              const isChapterMastered = totalInChapter > 0 && completedInChapter === totalInChapter;

              return (
                <div
                  key={chapter.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-blue-400 shadow-md ring-1 ring-blue-400/20 bg-white'
                      : isChapterMastered
                        ? 'border-emerald-200 bg-white hover:border-emerald-300 shadow-2xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white shadow-2xs'
                  }`}
                >
                  {/* Chapter Header Card */}
                  <button
                    onClick={() => handleChapterClick(chapter.id, chapter.title)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-slate-50/70"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Chapter index badge */}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                        isOpen 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : isChapterMastered
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700'
                      }`}>
                        {String(chIdx + 1).padStart(2, '0')}
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                            {chapter.title}
                          </h3>
                        </div>

                        {/* Badges row */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${weightage.color}`}>
                            {weightage.tag} • {weightage.marks}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-md">
                            {weightage.probability}
                          </span>

                          {totalInChapter > 0 && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border flex items-center gap-1 ${
                              isChapterMastered
                                ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-extrabold'
                                : completedInChapter > 0
                                  ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold'
                                  : 'bg-slate-100 text-slate-500 border-slate-200'
                            }`}>
                              <CheckCircle2 className={`w-3 h-3 ${isChapterMastered ? 'text-emerald-600' : completedInChapter > 0 ? 'text-blue-600' : 'text-slate-400'}`} />
                              {completedInChapter}/{totalInChapter} Done ({chapterProgressPct}%)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <span className="hidden sm:inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                        {isOpen ? 'Close' : 'View Topics'}
                      </span>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-blue-50 text-blue-600' : 'text-slate-400'
                      }`}>
                        {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                      </div>
                    </div>
                  </button>

                  {/* Slim progress bar for chapter */}
                  {totalInChapter > 0 && completedInChapter > 0 && (
                    <div className="w-full bg-slate-100 h-1">
                      <div 
                        className={`h-full transition-all duration-300 ${isChapterMastered ? 'bg-emerald-500' : 'bg-blue-600'}`}
                        style={{ width: `${chapterProgressPct}%` }}
                      />
                    </div>
                  )}

                  {/* Expanded Topics List */}
                  {isOpen && (
                    <div className="p-4 sm:p-6 bg-slate-50/70 border-t border-slate-100 space-y-2.5 animate-in slide-in-from-top-1 duration-150">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 px-1">
                        <span>Topics in this Chapter ({topics.length})</span>
                        <span className="text-blue-600 font-semibold normal-case">
                          ⚡ Click checkmark to mark completed • Click lesson to study
                        </span>
                      </div>

                      {topics.map((topic, tIdx) => {
                        const isLocked = !isPremium && tIdx >= 2;
                        const isSureShot = tIdx === 0 || tIdx === 1;
                        const isDone = !isLocked && completedTopics.includes(topic.id);

                        return (
                          <div
                            key={topic.id}
                            onClick={() => {
                              if (isLocked) {
                                setPaywallOpen(true);
                              } else {
                                navigate('/learn/topic/' + topic.id, { 
                                  state: { 
                                    topicTitle: topic.title, 
                                    chapterTitle: chapter.title,
                                    chapterId: chapter.id,
                                    allTopics: chapter.topics 
                                  } 
                                });
                              }
                            }}
                            className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer group ${
                              isLocked
                                ? 'bg-slate-100/70 border-slate-200 opacity-75 hover:bg-slate-100'
                                : isDone
                                  ? 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-300 hover:shadow-xs'
                                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-sm'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {/* Completion Toggle Button */}
                              <button
                                type="button"
                                onClick={(e) => toggleTopicCompletion(topic.id, topic.title, isLocked, e)}
                                title={
                                  isLocked
                                    ? 'Pro Topic - Upgrade to unlock and mark completed'
                                    : isDone
                                      ? 'Mark as Incomplete'
                                      : 'Mark as Completed'
                                }
                                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                                  isLocked
                                    ? 'bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100 hover:border-amber-300'
                                    : isDone
                                      ? 'bg-emerald-500 text-white shadow-xs hover:bg-emerald-600 ring-2 ring-emerald-200'
                                      : 'bg-slate-100 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 hover:border hover:border-emerald-300'
                                }`}
                              >
                                {isLocked ? (
                                  <Lock className="w-3.5 h-3.5 text-amber-600" />
                                ) : isDone ? (
                                  <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                                ) : (
                                  <Circle className="w-4 h-4" />
                                )}
                              </button>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className={`font-semibold text-xs sm:text-sm block truncate transition-colors ${
                                    isDone 
                                      ? 'text-emerald-950 font-bold' 
                                      : 'text-slate-800 group-hover:text-blue-600'
                                  }`}>
                                    {topic.title}
                                  </span>
                                  {isDone && (
                                    <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                                      Done
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-wrap items-center gap-1.5 mt-1">
                                  {isSureShot && (
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-md">
                                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-500" /> 
                                      Sure-Shot Concept
                                    </span>
                                  )}
                                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-md">
                                    <Clock className="w-2.5 h-2.5 text-slate-400" />
                                    {tIdx === 0 ? '12 Mins' : tIdx === 1 ? '15 Mins' : '10 Mins'}
                                  </span>
                                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-md">
                                    <Sparkles className="w-2.5 h-2.5 text-indigo-500" />
                                    AI Notes
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 ml-3">
                              {isLocked ? (
                                <span className="text-[11px] font-extrabold text-amber-800 bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                                  <Lock className="w-3 h-3 text-amber-600" /> Pro
                                </span>
                              ) : (
                                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all shadow-2xs ${
                                  isDone
                                    ? 'text-emerald-700 bg-emerald-100/70 hover:bg-emerald-200 border border-emerald-200'
                                    : 'text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white'
                                }`}>
                                  <PlayCircle className="w-3.5 h-3.5" />
                                  <span>{isDone ? 'Review Lesson' : 'Study Lesson'}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Formula Cheat Sheet Modal */}
      <FormulaCheatSheetModal
        isOpen={formulaModalOpen}
        onClose={() => setFormulaModalOpen(false)}
        examGoal={examGoal}
        activeSubjectId={activeSubject}
      />
    </div>
  );
}
export default SyllabusPage;
