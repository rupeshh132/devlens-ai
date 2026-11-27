import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Trophy, Play, CheckCircle, Search, Loader2, Lock, AlertCircle, RefreshCw, BookOpen, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { learnApi, fetchLearnProfileCached } from '../../../lib/learn-api';
import { usePremium } from '../../../hooks/usePremium';
import { PaywallModal } from '../../../components/learn/PaywallModal';

interface MockTest {
  id: string;
  title: string;
  durationMins: number;
  totalMarks: number;
  free: boolean;
  taken: boolean;
  score?: number;
  subject?: string;
  testType?: string;
  classLevel?: string;
  questionCount?: number;
  paperPairId?: string;
  paperNumber?: number;
}

const FREE_TEST_LIMIT = 2;
const TESTS_CACHE_TTL_MS = 60_000;
const PAGE_SIZE = 12;

const SUBJECT_CONFIG: Record<string, { label: string; color: string; badgeBg: string; border: string }> = {
  ALL: { label: 'All Subjects', color: 'text-slate-800', badgeBg: 'bg-slate-100', border: 'border-slate-300' },
  Science: { label: 'Science', color: 'text-emerald-700', badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200', border: 'border-emerald-500' },
  Physics: { label: 'Physics', color: 'text-indigo-700', badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200', border: 'border-indigo-500' },
  Chemistry: { label: 'Chemistry', color: 'text-amber-700', badgeBg: 'bg-amber-50 text-amber-700 border-amber-200', border: 'border-amber-500' },
  Biology: { label: 'Biology', color: 'text-emerald-700', badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200', border: 'border-emerald-500' },
  Botany: { label: 'Botany', color: 'text-green-700', badgeBg: 'bg-green-50 text-green-700 border-green-200', border: 'border-green-500' },
  Zoology: { label: 'Zoology', color: 'text-teal-700', badgeBg: 'bg-teal-50 text-teal-700 border-teal-200', border: 'border-teal-500' },
  Mathematics: { label: 'Mathematics', color: 'text-blue-700', badgeBg: 'bg-blue-50 text-blue-700 border-blue-200', border: 'border-blue-500' },
  'Social Science': { label: 'Social Science', color: 'text-amber-700', badgeBg: 'bg-amber-50 text-amber-700 border-amber-200', border: 'border-amber-500' },
  English: { label: 'English', color: 'text-purple-700', badgeBg: 'bg-purple-50 text-purple-700 border-purple-200', border: 'border-purple-500' },
  'English Core': { label: 'English Core', color: 'text-purple-700', badgeBg: 'bg-purple-50 text-purple-700 border-purple-200', border: 'border-purple-500' },
  Hindi: { label: 'Hindi', color: 'text-rose-700', badgeBg: 'bg-rose-50 text-rose-700 border-rose-200', border: 'border-rose-500' },
};

function getSubjectKeysForGoal(goal: string): string[] {
  const g = (goal || '').toLowerCase();
  if (g.includes('jee')) {
    return ['ALL', 'Physics', 'Chemistry', 'Mathematics'];
  }
  if (g.includes('neet')) {
    return ['ALL', 'Botany', 'Zoology', 'Biology', 'Chemistry', 'Physics'];
  }
  if (g.includes('11') || g.includes('12')) {
    return ['ALL', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'English Core'];
  }
  return ['ALL', 'Science', 'Mathematics', 'Social Science', 'English', 'Hindi'];
}

function extractChapterName(title: string): string | null {
  const match = title.match(/Chapter Mock:\s*(.+?)\s*-\s*Set\s*\d+/i);
  return match ? match[1].trim() : null;
}

function readCachedTests(goal: string): { tests: MockTest[]; fresh: boolean } {
  try {
    const raw = sessionStorage.getItem(`learn_mock_tests_cache_v3_${goal}`);
    if (!raw) return { tests: [], fresh: false };
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed?.tests)) {
      const fresh = typeof parsed.ts === 'number' && Date.now() - parsed.ts < TESTS_CACHE_TTL_MS;
      return { tests: parsed.tests, fresh };
    }
  } catch {
    // ignore corrupted cache
  }
  return { tests: [], fresh: false };
}

function writeCachedTests(goal: string, tests: MockTest[]) {
  try {
    sessionStorage.setItem(
      `learn_mock_tests_cache_v3_${goal}`,
      JSON.stringify({ tests, ts: Date.now() })
    );
  } catch {
    // ignore storage quota errors
  }
}

export function TestsPage() {
  const navigate = useNavigate();
  const [examGoal, setExamGoal] = useState<string>(() => localStorage.getItem('learn_exam_goal') || 'Class 9');

  const initialCache = readCachedTests(examGoal);
  const [mockTests, setMockTests] = useState<MockTest[]>(initialCache.tests);
  const [loading, setLoading] = useState<boolean>(initialCache.tests.length === 0);
  const [error, setError] = useState<string>('');
  const [paywallOpen, setPaywallOpen] = useState(false);
  const { isPremium, loading: premiumLoading } = usePremium();

  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedChapter, setSelectedChapter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadTests = useCallback(async (forceNetwork = false) => {
    const token = localStorage.getItem('learn_token') || localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    const activeGoal = localStorage.getItem('learn_exam_goal') || examGoal;
    const cached = readCachedTests(activeGoal);
    if (!forceNetwork && cached.tests.length > 0) {
      setMockTests(cached.tests);
      setLoading(false);
      if (cached.fresh) return;
    } else if (cached.tests.length === 0) {
      setLoading(true);
    }

    setError('');
    try {
      const [profileData, testsRes] = await Promise.all([
        fetchLearnProfileCached().catch(() => null),
        learnApi.get('/tests/my-tests'),
      ]);

      const resolvedGoal = profileData?.examGoal || activeGoal;
      if (profileData?.examGoal) {
        const rawName = (localStorage.getItem('learn_user_name') || profileData?.fullName || '').toLowerCase();
        const finalGoal = rawName.includes('anmol') ? 'Class 9' : profileData.examGoal;
        setExamGoal(finalGoal);
        localStorage.setItem('learn_exam_goal', finalGoal);
      }

      const list = Array.isArray(testsRes.data) ? testsRes.data : [];
      setMockTests(list);
      writeCachedTests(resolvedGoal, list);
      if (activeGoal !== resolvedGoal) {
        writeCachedTests(activeGoal, list);
      }
    } catch (err: any) {
      console.error('Failed to fetch mock tests', err);
      if (cached.tests.length === 0) {
        setError(err?.response?.data?.message || 'Unable to load mock tests right now. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }, [examGoal]);

  useEffect(() => {
    loadTests(false);
  }, [loadTests]);

  const activeSubjectKeys = useMemo(() => getSubjectKeysForGoal(examGoal), [examGoal]);

  const matchesSubject = useCallback((test: MockTest, key: string) => {
    const sub = (test.subject || '').toLowerCase();
    const title = (test.title || '').toLowerCase();
    const target = key.toLowerCase();
    if (sub === target) return true;
    if (target === 'biology' && (sub === 'botany' || sub === 'zoology' || sub === 'biology')) return true;
    if (target === 'mathematics' && (sub.includes('math') || title.includes('math'))) return true;
    if (target === 'english core' && (sub === 'english' || sub === 'english core' || title.includes('english'))) return true;
    if (!sub && title.includes(target)) return true;
    return false;
  }, []);

  const availableChapters = useMemo(() => {
    const chapters = new Set<string>();
    for (const t of mockTests) {
      if ((t.testType || '').toUpperCase() !== 'CHAPTER_WISE') continue;
      if (selectedSubject !== 'ALL' && !matchesSubject(t, selectedSubject)) continue;
      const ch = extractChapterName(t.title || '');
      if (ch) chapters.add(ch);
    }
    return Array.from(chapters);
  }, [mockTests, selectedSubject, matchesSubject]);

  // Client-side filtering & search
  const filteredTests = useMemo(() => {
    return mockTests.filter(test => {
      // Subject filter
      if (selectedSubject !== 'ALL' && !matchesSubject(test, selectedSubject)) {
        return false;
      }

      // Test Type filter
      if (selectedType !== 'ALL') {
        const tType = (test.testType || 'BOARD_EXAM').toUpperCase();
        if (selectedType === 'FULL_ALL') {
          if (tType === 'CHAPTER_WISE') return false;
        } else if (tType !== selectedType) {
          return false;
        }
      }

      // Chapter filter (active when CHAPTER_WISE is selected or a specific chapter is chosen)
      if (selectedChapter !== 'ALL') {
        const ch = extractChapterName(test.title || '');
        if (ch !== selectedChapter) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = (test.title || '').toLowerCase().includes(q);
        const matchesSubject = (test.subject || '').toLowerCase().includes(q);
        if (!matchesTitle && !matchesSubject) return false;
      }

      return true;
    }).sort((a, b) => {
      if (a.free !== b.free) return a.free ? -1 : 1;
      return a.id.localeCompare(b.id);
    });
  }, [mockTests, selectedSubject, selectedType, selectedChapter, searchQuery, matchesSubject]);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSubject, selectedType, selectedChapter, searchQuery]);

  useEffect(() => {
    setSelectedChapter('ALL');
  }, [selectedSubject, selectedType]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredTests.length / PAGE_SIZE) || 1;
  const paginatedTests = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredTests.slice(start, start + PAGE_SIZE);
  }, [filteredTests, currentPage]);

  const isTestLocked = (test: MockTest) => !isPremium && !test.free;

  const handleStart = (test: MockTest) => {
    if (isTestLocked(test)) {
      setPaywallOpen(true);
      return;
    }
    navigate(`/learn/test/${test.id}`);
  };

  // Counts for tabs
  const subjectCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: mockTests.length };
    for (const key of activeSubjectKeys) {
      if (key === 'ALL') continue;
      counts[key] = mockTests.filter(t => matchesSubject(t, key)).length;
    }
    return counts;
  }, [mockTests, activeSubjectKeys, matchesSubject]);

  const isSeniorSecondary = examGoal.includes('11') || examGoal.includes('12');
  const isJeeAdvGoal = examGoal.toLowerCase().includes('jee') && (examGoal.toLowerCase().includes('adv') || examGoal.toLowerCase().includes('iit'));
  const isJeeMainGoal = examGoal.toLowerCase().includes('jee') && !isJeeAdvGoal;
  const isNeetGoal = examGoal.toLowerCase().includes('neet');
  const isCompetitiveGoal = isJeeAdvGoal || isJeeMainGoal || isNeetGoal;

  const testTypeOptions = useMemo(() => {
    if (isCompetitiveGoal) {
      return [
        { id: 'ALL', label: 'All Tests' },
        { id: 'FULL_ALL', label: isNeetGoal ? 'Full Mocks (720M)' : isJeeAdvGoal ? 'Paper 1 + Paper 2 Mocks' : 'Full CBT (300M)' },
        { id: 'CHAPTER_WISE', label: 'Chapter-Wise Drills' },
        { id: 'PART_TEST', label: 'Part / Cumulative Tests' },
        { id: 'DPP', label: 'Daily Practice (DPPs)' },
        { id: 'PYQ_MOCK', label: 'Shift / Year PYQ Mocks' },
      ];
    }
    return [
      { id: 'ALL', label: 'All Tests' },
      { id: 'FULL_ALL', label: isSeniorSecondary ? 'Full Papers (70/80M)' : 'Full Papers (80M)' },
      { id: 'CHAPTER_WISE', label: 'Chapter-Wise Mocks' },
      { id: 'BOARD_EXAM', label: 'CBSE Board Mock Papers' },
      { id: 'PRE_BOARD', label: 'All India Pre-Board Series' },
      { id: 'KVS_NVS', label: 'KVS & NVS National Series' },
      { id: 'TOP_SCHOOLS', label: 'Top Schools Model Papers' },
    ];
  }, [isCompetitiveGoal, isJeeAdvGoal, isNeetGoal, isSeniorSecondary]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        featureName="Premium Mock Tests"
        featureDescription={isCompetitiveGoal
          ? 'Unlock all NTA/IIT/NMC synchronized full-length CBT mocks, chapter-wise drills, DPPs, and speed-accuracy analytics.'
          : 'Unlock all 500+ authentic CBSE mock tests and get a detailed step-by-step marking rubric and AI Weakness Report after every attempt. Free users get access to the first 2 tests.'}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Real Mock Tests</h1>
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
              {isCompetitiveGoal ? examGoal : `CBSE ${examGoal}`}
            </span>
          </div>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            {isJeeMainGoal
              ? 'NTA rationalized 75 compulsory Qs (20 MCQ + 5 Numerical per subject / 300 Marks / 180 Mins, +4/-1) & Chapter Drills.'
              : isJeeAdvGoal
              ? 'Official IIT Dual-Paper (Paper 1 + Paper 2, SCQ + MSQ partial marking + Numerical + Matrix) simulations.'
              : isNeetGoal
              ? 'NMC 79-chapter synced 180 compulsory MCQs (45 Phy + 45 Chem + 45 Bot + 45 Zoo / 720 Marks / 180 Mins, +4/-1).'
              : `Authentic board format papers (${isSeniorSecondary ? '70/80 Marks' : '80 Marks'} / 3 Hours, Sections A to E) & Chapter-Wise Mastery Drills with model answers & marking schemes.`}
          </p>
        </div>
        {!loading && (
          <button
            type="button"
            onClick={() => loadTests(true)}
            className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-xs transition-colors"
            title="Refresh mock tests"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
            Refresh Tests
          </button>
        )}
      </div>

      {/* Free user notice */}
      {!premiumLoading && !isPremium && (
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-xs">
          <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <p className="text-amber-900 font-bold text-sm">Free plan: First {FREE_TEST_LIMIT} tests unlocked per subject</p>
            <p className="text-amber-800 text-xs mt-0.5">Upgrade to PrepLens Pro to unlock 500+ full-length papers with AI marking rubrics.</p>
          </div>
          <button
            onClick={() => navigate('/learn/pricing')}
            className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex-shrink-0 shadow-xs"
          >
            Upgrade to Pro →
          </button>
        </div>
      )}

      {/* Subject Filter Tabs */}
      <div className="border-b border-slate-200 pb-2">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {activeSubjectKeys.map((subKey) => {
            const meta = SUBJECT_CONFIG[subKey] || SUBJECT_CONFIG.ALL;
            const count = subjectCounts[subKey] || 0;
            const isSelected = selectedSubject === subKey;
            return (
              <button
                key={subKey}
                onClick={() => setSelectedSubject(subKey)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{subKey === 'ALL' ? 'All Subjects' : meta.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search mock tests by title, chapter or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-xs"
            />
          </div>

          {/* Test Type Select */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block shrink-0" />
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {testTypeOptions.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedType === type.id
                      ? type.id === 'CHAPTER_WISE'
                        ? 'bg-emerald-600 text-white border border-emerald-600 font-bold'
                        : 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chapter filter dropdown when Chapter-Wise Mocks is active and chapters exist */}
        {selectedType === 'CHAPTER_WISE' && availableChapters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap bg-emerald-50/60 border border-emerald-200/80 rounded-2xl px-4 py-2.5">
            <span className="text-xs font-bold text-emerald-900">Filter by Chapter:</span>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="text-xs font-semibold bg-white border border-emerald-200 rounded-lg px-3 py-1.5 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Chapters ({availableChapters.length})</option>
              {availableChapters.map(ch => (
                <option key={ch} value={ch}>{ch}</option>
              ))}
            </select>
            {selectedChapter !== 'ALL' && (
              <button
                type="button"
                onClick={() => setSelectedChapter('ALL')}
                className="text-xs font-bold text-emerald-700 hover:underline"
              >
                Show All Chapters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Grid / Status */}
      {loading && mockTests.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-500">
          <Loader2 className="w-10 h-10 animate-spin mb-4 text-indigo-600" />
          <p className="font-semibold text-slate-700">Loading authentic CBSE mock tests...</p>
          <p className="text-xs text-slate-400 mt-1">Preparing blueprints, sections, and marking rubrics</p>
        </div>
      ) : error && mockTests.length === 0 ? (
        <div className="bg-white rounded-3xl border border-red-200 shadow-sm p-12 text-center">
          <AlertCircle className="w-14 h-14 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Could Not Load Mock Tests</h2>
          <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm">{error}</p>
          <button
            type="button"
            onClick={() => loadTests(true)}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      ) : filteredTests.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-12 text-center">
          <BookOpen className="w-14 h-14 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">No Matching Mock Tests Found</h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm">
            {searchQuery
              ? `No tests match "${searchQuery}". Try clearing your search keyword.`
              : `We are currently generating new real-format test sets for this selection. Check other subjects!`}
          </p>
          {(searchQuery || selectedSubject !== 'ALL' || selectedType !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubject('ALL');
                setSelectedType('ALL');
              }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Tests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedTests.map((test) => {
              const locked = isTestLocked(test);
              const subjectKey = test.subject || (test.title.toLowerCase().includes('science') ? 'Science' : test.title.toLowerCase().includes('math') ? 'Mathematics' : test.title.toLowerCase().includes('social') ? 'Social Science' : test.title.toLowerCase().includes('english') ? 'English' : test.title.toLowerCase().includes('hindi') ? 'Hindi' : 'General');
              const subMeta = SUBJECT_CONFIG[subjectKey] || { badgeBg: 'bg-slate-100 text-slate-700 border-slate-200' };

              return (
                <div
                  key={test.id}
                  className={`bg-white rounded-3xl border shadow-xs flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md ${
                    locked ? 'border-slate-200 opacity-80' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Header Badges */}
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-lg border ${subMeta.badgeBg}`}>
                          {subjectKey}
                        </span>
                        {test.paperNumber && (
                          <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg border ${
                            test.paperNumber === 1
                              ? 'bg-sky-50 text-sky-700 border-sky-200'
                              : 'bg-purple-50 text-purple-700 border-purple-200'
                          }`}>
                            IIT Paper {test.paperNumber}
                          </span>
                        )}
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${
                          test.testType === 'CHAPTER_WISE'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'text-slate-600 bg-slate-100'
                        }`}>
                          {test.testType === 'CHAPTER_WISE'
                            ? 'Chapter-Wise Mock'
                            : test.testType === 'PART_TEST'
                            ? 'Part / Cumulative'
                            : test.testType === 'DPP'
                            ? 'Daily Practice DPP'
                            : test.testType === 'PYQ_MOCK'
                            ? 'Shift / Year PYQ'
                            : test.testType === 'PRE_BOARD'
                            ? 'All India Pre-Board'
                            : test.testType === 'KVS_NVS'
                            ? 'KVS / NVS National'
                            : test.testType === 'TOP_SCHOOLS'
                            ? 'Top Schools Model'
                            : isCompetitiveGoal
                            ? 'NTA / IIT CBT Paper'
                            : 'CBSE Board Paper'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        {test.taken && (
                          <span className="inline-flex items-center text-emerald-600 bg-emerald-50 border border-emerald-200 text-[11px] font-bold px-2 py-0.5 rounded-full">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completed
                          </span>
                        )}
                        <span className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                          locked
                            ? 'bg-slate-100 text-slate-500 border-slate-200'
                            : test.free
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {locked ? 'Pro' : test.free ? 'Free' : 'Pro'}
                        </span>
                      </div>
                    </div>

                    {/* Test Title */}
                    <h3 className={`text-base font-bold leading-snug mb-4 ${locked ? 'text-slate-600' : 'text-slate-900'}`}>
                      {test.title}
                    </h3>

                    {/* Test Meta Info */}
                    <div className="grid grid-cols-2 gap-3 mt-auto pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        <span className="font-semibold">{test.durationMins || 180} Mins</span>
                        <span className="text-[10px] text-slate-400 ml-1">({Math.round(((test.durationMins || 180) / 60) * 10) / 10}h)</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
                        <span className="font-semibold">{test.totalMarks || 80} Marks</span>
                        <span className="text-[10px] text-slate-400 ml-1">
                          ({test.testType === 'CHAPTER_WISE' ? 'Chapter Drill' : isCompetitiveGoal ? 'Official Pattern' : 'CBSE Real Format'})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="border-t border-slate-100 bg-slate-50/70 p-4">
                    {test.taken && !locked ? (
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Score</p>
                          <p className="text-base font-black text-slate-900">
                            {test.score} <span className="text-xs text-slate-500 font-semibold">/ {test.totalMarks}</span>
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/learn/test/${test.id}`)}
                          className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl transition-colors border border-indigo-200/70"
                        >
                          Retake Paper →
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleStart(test)}
                        className={`w-full flex justify-center items-center py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs ${
                          locked
                            ? 'bg-slate-200 text-slate-500 cursor-pointer hover:bg-slate-300'
                            : 'text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99]'
                        }`}
                      >
                        {locked ? (
                          <><Lock className="w-3.5 h-3.5 mr-1.5" /> Unlock Full Exam Pass</>
                        ) : (
                          <><Play className="w-3.5 h-3.5 mr-1.5" fill="currentColor" /> Start Live Exam</>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                Showing <span className="font-bold text-slate-700">{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
                <span className="font-bold text-slate-700">
                  {Math.min(currentPage * PAGE_SIZE, filteredTests.length)}
                </span>{' '}
                of <span className="font-bold text-slate-700">{filteredTests.length}</span> papers
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Prev
                </button>

                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    let pageNum = i + 1;
                    if (totalPages > 7 && currentPage > 4) {
                      pageNum = currentPage - 3 + i;
                      if (pageNum > totalPages) return null;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                          currentPage === pageNum
                            ? 'bg-slate-900 text-white'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
                >
                  Next
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
