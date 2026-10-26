import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  FileText, Search, Lock, 
  Crown, Filter, CheckCircle2, Printer, BookOpen, 
  Flame, ChevronRight, GraduationCap, Loader2, Download
} from 'lucide-react';
import { PYQ_PAPERS_DATA } from '../../../data/pyqPapersData';
import type { PyqPaper } from '../../../components/learn/PyqPaperViewerModal';
import { PyqPaperViewerModal } from '../../../components/learn/PyqPaperViewerModal';
import { usePremium } from '../../../hooks/usePremium';
import { PaywallModal } from '../../../components/learn/PaywallModal';
import { getSubjectsForClass } from '../../../data/curriculumData';
import { learnApi } from '../../../lib/learn-api';

export function PyqHubPage() {
  const [searchParams] = useSearchParams();
  const targetPaperId = searchParams.get('paperId');
  const [selectedClass, setSelectedClass] = useState<string>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [activePaper, setActivePaper] = useState<PyqPaper | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [paywallOpen, setPaywallOpen] = useState<boolean>(false);

  const { isPremium } = usePremium();
  const [backendPapers, setBackendPapers] = useState<PyqPaper[]>([]);
  const [loadingPapers, setLoadingPapers] = useState<boolean>(false);

  // Fetch all live papers uploaded by Admin from backend
  useEffect(() => {
    let isMounted = true;
    setLoadingPapers(true);
    learnApi.get('/pyq')
      .then(res => {
        if (!isMounted) return;
        const apiPapers: PyqPaper[] = (res.data || []).map((p: any) => ({
          id: p.id,
          title: p.title,
          targetClass: p.targetClass,
          subject: p.subject,
          year: p.year,
          paperType: p.paperType || 'BOARD_EXAM',
          paperCode: p.paperCode || '',
          totalMarks: p.totalMarks || 80,
          durationMins: p.durationMins || 180,
          difficulty: p.difficulty || 'MODERATE',
          isFree: p.free !== false,
          totalQuestions: p.totalQuestions || (p.pdfUrl ? 1 : 0),
          generalInstructions: p.generalInstructions
            ? (typeof p.generalInstructions === 'string' ? JSON.parse(p.generalInstructions) : p.generalInstructions)
            : [],
          questions: [],
          pdfUrl: p.pdfUrl || undefined,
          solutionPdfUrl: p.solutionPdfUrl || undefined
        }));
        setBackendPapers(apiPapers);
      })
      .catch(err => {
        console.warn('Failed to load live PYQ papers from backend, falling back to local vault data:', err);
      })
      .finally(() => {
        if (isMounted) setLoadingPapers(false);
      });

    return () => { isMounted = false; };
  }, []);

  // Combine live backend papers with curated local papers
  const allPapers = useMemo(() => {
    const existingTitles = new Set(backendPapers.map(p => p.title.toLowerCase().trim()));
    const remainingLocal = PYQ_PAPERS_DATA.filter(p => !existingTitles.has(p.title.toLowerCase().trim()));
    return [...backendPapers, ...remainingLocal];
  }, [backendPapers]);

  // Paper count per class for badges
  const classPaperCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: allPapers.length, 'Class 9': 0, 'Class 10': 0, 'Class 11': 0, 'Class 12': 0 };
    allPapers.forEach(p => {
      const cls = p.targetClass || 'Class 10';
      if (counts[cls] !== undefined) counts[cls]++;
    });
    return counts;
  }, [allPapers]);

  // Dynamic subjects based on selected class
  const classSubjects = useMemo(() => {
    if (selectedClass === 'ALL') {
      return [
        { id: 'ALL', label: 'All Subjects' },
        { id: 'Physics', label: 'Physics' },
        { id: 'Chemistry', label: 'Chemistry' },
        { id: 'Mathematics', label: 'Mathematics' },
        { id: 'Biology', label: 'Biology' },
        { id: 'Science', label: 'Science' },
        { id: 'Social Science', label: 'Social Science' },
        { id: 'English Core', label: 'English' },
      ];
    }
    const list = getSubjectsForClass(selectedClass);
    return [
      { id: 'ALL', label: 'All Subjects' },
      ...list.map(s => ({
        id: s.name,
        label: s.name
      }))
    ];
  }, [selectedClass]);

  const filteredPapers = useMemo(() => {
    return allPapers.filter(paper => {
      // 1. Class Filter
      if (selectedClass !== 'ALL') {
        const paperClass = paper.targetClass || 'Class 10';
        if (paperClass !== selectedClass) return false;
      }

      // 2. Subject Filter
      if (selectedSubject !== 'ALL') {
        const sSub = selectedSubject.toLowerCase();
        const pSub = (paper.subject || '').toLowerCase();
        if (sSub !== pSub && !pSub.includes(sSub) && !sSub.includes(pSub)) {
          return false;
        }
      }

      // 3. Category Filter
      if (selectedType !== 'ALL' && paper.paperType !== selectedType) {
        return false;
      }

      // 4. Year Filter
      if (selectedYear !== 'ALL' && paper.year.toString() !== selectedYear) {
        return false;
      }

      // 5. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = (paper.title || '').toLowerCase().includes(q);
        const matchesSubject = (paper.subject || '').toLowerCase().includes(q);
        const matchesCode = (paper.paperCode || '').toLowerCase().includes(q);
        const matchesClass = (paper.targetClass || '').toLowerCase().includes(q);
        const matchesQuestions = (paper.questions || []).some(qn => 
          (qn.questionText || '').toLowerCase().includes(q) || (qn.topic || '').toLowerCase().includes(q)
        );
        if (!matchesTitle && !matchesSubject && !matchesCode && !matchesClass && !matchesQuestions) {
          return false;
        }
      }
      return true;
    });
  }, [allPapers, selectedClass, selectedSubject, selectedType, selectedYear, searchQuery]);

  const handleOpenPaper = async (paper: PyqPaper) => {
    if (!paper.isFree && !isPremium) {
      setPaywallOpen(true);
      return;
    }
    setActivePaper(paper);
    setIsViewerOpen(true);

    // If questions are not yet loaded (e.g. backend paper), fetch full details dynamically
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(paper.id);
    if ((paper.questions || []).length === 0 && paper.id && isUuid) {
      try {
        const res = await learnApi.get(`/pyq/${paper.id}`);
        if (res.data && res.data.questions && res.data.questions.length > 0) {
          const loadedQuestions = (res.data.questions || []).map((q: any) => ({
            id: q.id,
            qNum: q.questionNumber || q.qNum,
            section: q.section || 'A',
            marks: q.marks || 1,
            topic: q.topic || paper.subject,
            questionText: q.questionText || '',
            options: q.optionsJson ? (typeof q.optionsJson === 'string' ? JSON.parse(q.optionsJson) : q.optionsJson) : [],
            correctOption: q.correctOption,
            modelAnswer: q.modelAnswer || '',
            stepMarking: q.stepMarkingJson ? (typeof q.stepMarkingJson === 'string' ? JSON.parse(q.stepMarkingJson) : q.stepMarkingJson) : [],
            examinerTip: q.examinerTip || '',
            commonPitfall: q.commonPitfall || ''
          }));

          const updatedPaper: PyqPaper = {
            ...paper,
            questions: loadedQuestions,
            totalQuestions: loadedQuestions.length || paper.totalQuestions
          };
          setActivePaper(updatedPaper);
        }
      } catch (err) {
        console.warn('Could not load detailed questions for paper:', err);
      }
    }
  };

  // Auto-open paper if navigated from Locker with ?paperId=...
  useEffect(() => {
    if (targetPaperId && allPapers.length > 0) {
      const match = allPapers.find(p => p.id === targetPaperId);
      if (match) {
        handleOpenPaper(match);
      }
    }
  }, [targetPaperId, allPapers]);

  const handleQuickPrint = (e: React.MouseEvent, paper: PyqPaper) => {
    e.stopPropagation();
    if (!paper.isFree && !isPremium) {
      setPaywallOpen(true);
      return;
    }
    setActivePaper(paper);
    setIsViewerOpen(true);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white p-6 sm:p-10 shadow-xl border border-indigo-900/60">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
            CBSE {selectedClass === 'ALL' ? 'Exam' : selectedClass} Vault
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Previous Years' Papers & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300">Model Question Papers</span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Practice actual CBSE Board Exam Papers with <strong>official step-by-step marking schemes</strong>, examiner tips, and common pitfalls so you know exactly where every half-mark is won or lost.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="text-xl sm:text-2xl font-black text-amber-400">100%</div>
              <div className="text-xs text-slate-300 font-medium">CBSE Step Marking</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="text-xl sm:text-2xl font-black text-blue-400">5+ Years</div>
              <div className="text-xs text-slate-300 font-medium">Board Exam Archive</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">80/80</div>
              <div className="text-xs text-slate-300 font-medium">Full Standard Format</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="text-xl sm:text-2xl font-black text-purple-400">1-Click</div>
              <div className="text-xs text-slate-300 font-medium">Print & PDF Download</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
        
        {/* Class Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-blue-600" /> Filter by Class:
          </span>
          {[
            { id: 'ALL', label: 'All Classes' },
            { id: 'Class 11', label: 'Class 11' },
            { id: 'Class 12', label: 'Class 12' },
            { id: 'Class 10', label: 'Class 10' },
            { id: 'Class 9', label: 'Class 9' }
          ].map(cls => (
            <button
              key={cls.id}
              onClick={() => {
                setSelectedClass(cls.id);
                setSelectedSubject('ALL');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedClass === cls.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{cls.label}</span>
              {(classPaperCounts[cls.id] || 0) > 0 && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  selectedClass === cls.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {classPaperCounts[cls.id]}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Top Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, concept, set code, or keyword (e.g. motion, vectors, friction)..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Year Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Year:
            </span>
            {(['ALL', '2024', '2023', '2022'] as const).map(yr => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedYear === yr
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {yr === 'ALL' ? 'All Years' : yr}
              </button>
            ))}
          </div>

        </div>

        {/* Second Filter Row: Subject & Paper Type */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
          
          {/* Subject Pills (Dynamic based on Class) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-1">Subject:</span>
            {classSubjects.map(sub => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedSubject === sub.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Paper Type Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-1">Category:</span>
            {[
              { id: 'ALL', label: 'All Papers' },
              { id: 'BOARD_EXAM', label: 'Board Exams' },
              { id: 'CBSE_SAMPLE', label: 'Official SQPs' },
              { id: 'PRE_BOARD', label: 'Pre-Boards' }
            ].map(pt => (
              <button
                key={pt.id}
                onClick={() => setSelectedType(pt.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedType === pt.id
                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {pt.label}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Papers Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Available Question Papers ({filteredPapers.length})
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Showing all verified CBSE question papers
          </span>
        </div>

        {loadingPapers ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-200 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-xs font-semibold text-slate-500">Loading verified CBSE question papers...</p>
          </div>
        ) : filteredPapers.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
            <FileText className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No question papers found</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              Try adjusting your search query or subject filters to find matching question papers.
            </p>
            <button
              onClick={() => { setSelectedSubject('ALL'); setSelectedType('ALL'); setSelectedYear('ALL'); setSearchQuery(''); }}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPapers.map((paper) => {
              const isLocked = !paper.isFree && !isPremium;
              return (
                <div
                  key={paper.id}
                  onClick={() => handleOpenPaper(paper)}
                  className={`group relative bg-white rounded-2xl border transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between ${
                    isLocked 
                      ? 'border-amber-200/90 hover:border-amber-400 hover:shadow-md'
                      : 'border-slate-200 hover:border-blue-400 hover:shadow-lg'
                  }`}
                >
                  {/* Top Color Accent Strip */}
                  <div className={`h-1.5 w-full ${
                    paper.subject === 'Physics'
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-600'
                      : paper.subject === 'Chemistry'
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600'
                        : paper.subject === 'Biology'
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600'
                          : paper.subject === 'Mathematics'
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                  }`} />

                  {/* Card Main Body */}
                  <div className="p-5 space-y-4">
                    
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200">
                          {paper.targetClass || 'Class 10'}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-slate-100 text-slate-700">
                          {paper.subject}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                          Year {paper.year}
                        </span>
                        {paper.paperCode && (
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-50 text-slate-500 border border-slate-200">
                            Code {paper.paperCode}
                          </span>
                        )}
                        {paper.pdfUrl && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                            <FileText className="w-3 h-3 text-emerald-600" />
                            Official PDF
                          </span>
                        )}
                      </div>

                      {/* Free or PRO Badge */}
                      {paper.isFree ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          FREE
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shrink-0">
                          <Crown className="w-3 h-3 text-amber-600" />
                          PRO
                        </span>
                      )}
                    </div>

                    {/* Paper Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {paper.title}
                    </h3>

                    {/* Exam Specs */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-slate-50 rounded-xl text-center border border-slate-100">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Marks</div>
                        <div className="text-xs font-black text-slate-800">{paper.totalMarks} M</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
                        <div className="text-xs font-black text-slate-800">{Math.floor(paper.durationMins / 60)} Hrs</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Questions</div>
                        <div className="text-xs font-black text-slate-800">
                          {paper.totalQuestions > 0 ? `${paper.totalQuestions} Qs` : (paper.pdfUrl ? 'Official PDF' : 'Full Paper')}
                        </div>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        Full Step-by-Step Marking Scheme
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        Examiner Golden Tips & Common Traps
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                        Sections A (MCQ) to E (Case Studies)
                      </li>
                    </ul>

                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                    {isLocked ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPaywallOpen(true);
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs hover:from-amber-600 hover:to-orange-600 shadow-sm flex items-center justify-center gap-2 transition-all"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        Unlock 5-Year Vault with PRO
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleOpenPaper(paper)}
                          className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                        >
                          {paper.pdfUrl ? 'View Paper & PDF' : 'View Solutions'}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        {paper.pdfUrl && (
                          <a
                            href={paper.pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            download
                            className="py-2 px-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1 transition-all"
                            title="Download PDF"
                          >
                            <Download className="w-3.5 h-3.5 text-emerald-600" />
                          </a>
                        )}
                        <button
                          onClick={(e) => handleQuickPrint(e, paper)}
                          className="py-2 px-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1 transition-all"
                          title="Print / Save PDF"
                        >
                          <Printer className="w-3.5 h-3.5 text-slate-500" />
                        </button>
                      </>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Topper's Exam Strategy Callout */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-900 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-orange-600" />
            CBSE 80/20 Board Strategy
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-amber-950">
            Why solving last 5 years' papers is worth 25+ extra marks:
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Over <strong>75% of CBSE Board questions</strong> repeat standard problem archetypes with just different numerical values. When you master the step-by-step marking scheme, you guarantee full marks in formulas, derivations, and SI units even if calculation gets tricky.
          </p>
        </div>

        <button
          onClick={() => {
            const firstFree = PYQ_PAPERS_DATA.find(p => p.isFree);
            if (firstFree) handleOpenPaper(firstFree);
          }}
          className="shrink-0 px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs sm:text-sm font-black hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4 text-amber-400" />
          Solve Model Paper 2024 Now
        </button>
      </div>

      {/* PYQ Paper Viewer Modal */}
      <PyqPaperViewerModal
        paper={activePaper}
        isOpen={isViewerOpen}
        onClose={() => {
          setIsViewerOpen(false);
          setActivePaper(null);
        }}
      />

      {/* Paywall Modal for Locked Papers */}
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        featureName="5-Year PYQ Solution Vault & Marking Schemes"
        featureDescription="Unlock the complete 5-Year past board examination papers with step-by-step examiner scoring keys, CBSE top-ranker answer analysis, and unlimited PDF print downloads."
      />

    </div>
  );
}
export default PyqHubPage;
