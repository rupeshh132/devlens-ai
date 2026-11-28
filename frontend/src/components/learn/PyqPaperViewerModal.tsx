import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, Printer, CheckCircle2, AlertTriangle, Lightbulb, 
  HelpCircle, ChevronDown, ChevronUp, Award, Clock, Bookmark,
  Download, Sparkles, FileText, Maximize2, Minimize2, ExternalLink,
  Play, RotateCcw, Trophy
} from 'lucide-react';
import { saveLockerItem, isItemSaved, removeLockerItemByTitle } from '../../lib/lockerStorage';
import { saveMistakeToLocker } from '../../lib/rankPredictor';
import {
  getPyqQuestionMode,
  getPyqNegativePenalty,
  matchesPyqOption,
  gradePyqPaper,
  type PyqPaperGradeSummary,
} from '../../lib/pyqPractice';
import { toast } from 'sonner';

export interface PyqQuestion {
  id: string;
  qNum: number;
  subject?: string;
  section: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  marks: number;
  topic: string;
  questionText: string;
  options?: string[];
  correctOption?: string;
  modelAnswer: string;
  stepMarking: { step: string; marks: string }[];
  examinerTip: string;
  commonPitfall?: string;
}

export interface PyqPaper {
  id: string;
  title: string;
  subject: string;
  year: number;
  targetClass?: 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12' | 'JEE Mains' | 'JEE Advanced' | 'NEET UG' | 'All';
  paperType: 'BOARD_EXAM' | 'CBSE_SAMPLE' | 'PRE_BOARD' | 'JEE_SHIFT' | 'JEE_ADV_PAPER' | 'NEET_PAPER' | 'COMPETITIVE_SAMPLE';
  paperCode: string;
  totalMarks: number;
  durationMins: number;
  difficulty: 'EASY' | 'MODERATE' | 'CHALLENGING';
  isFree: boolean;
  totalQuestions: number;
  generalInstructions: string[];
  questions: PyqQuestion[];
  pdfUrl?: string;
  solutionPdfUrl?: string;
}

function formatDurationLabel(mins: number): string {
  if (!mins || mins <= 0) return '3 Hrs';
  if (mins < 60) return `${mins} Mins`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h} ${h === 1 ? 'Hr' : 'Hrs'}` : `${h}h ${m}m`;
}

function getExamAuthorityInfo(paper: PyqPaper) {
  const cls = paper.targetClass || '';
  if (cls === 'JEE Mains' || paper.paperType === 'JEE_SHIFT') {
    return {
      boardName: 'National Testing Agency (NTA) — JEE Main Format',
      pdfTabLabel: 'Printable NTA Sheet',
      answerHeading: 'Official NTA Key & Stepwise Solution:',
      footerNote: 'Synchronized with NTA JEE Main Rationalized CBT Format (+4 / -1)',
      sectionNames: {
        A: 'Sec A (SCQ)',
        B: 'Sec B (Numerical)',
        C: 'Sec C',
        D: 'Sec D',
        E: 'Sec E',
        F: 'Sec F'
      } as Record<string, string>
    };
  }
  if (cls === 'NEET UG' || paper.paperType === 'NEET_PAPER') {
    return {
      boardName: 'National Medical Commission (NMC / NTA) — NEET UG Format',
      pdfTabLabel: 'Printable OMR Sheet',
      answerHeading: 'Official NEET Answer Key & NCERT Reference:',
      footerNote: 'Synchronized with NMC 79-Chapter NEET UG Official Format (+4 / -1)',
      sectionNames: {
        A: 'Sec A (Single Choice)',
        B: 'Sec B (Statement / AR)',
        C: 'Sec C',
        D: 'Sec D',
        E: 'Sec E',
        F: 'Sec F'
      } as Record<string, string>
    };
  }
  if (cls === 'JEE Advanced' || paper.paperType === 'JEE_ADV_PAPER') {
    return {
      boardName: 'IIT Joint Admission Board (JAB) — JEE Advanced Format',
      pdfTabLabel: 'Printable IIT Paper',
      answerHeading: 'Official IIT Key, Partial Rubric & Derivation:',
      footerNote: 'Synchronized with IIT JEE Advanced Paper 1 & 2 Partial/Non-Neg Marking',
      sectionNames: {
        A: 'Sec A (SCQ +3/-1)',
        B: 'Sec B (MSQ +4/-2)',
        C: 'Sec C (Numerical +4/0)',
        D: 'Sec D (Para / Matrix)',
        E: 'Sec E',
        F: 'Sec F'
      } as Record<string, string>
    };
  }
  if (paper.paperType === 'COMPETITIVE_SAMPLE') {
    return {
      boardName: 'PrepLens Official Pattern Sample Paper',
      pdfTabLabel: 'Printable Sheet',
      answerHeading: 'Official Solution & Marking Key:',
      footerNote: 'Full Official Exam Pattern Sample Paper with Complete Solutions',
      sectionNames: {
        A: 'Sec A',
        B: 'Sec B',
        C: 'Sec C',
        D: 'Sec D',
        E: 'Sec E',
        F: 'Sec F'
      } as Record<string, string>
    };
  }
  return {
    boardName: 'Central Board of Secondary Education',
    pdfTabLabel: 'Original CBSE PDF',
    answerHeading: 'Official CBSE Model Answer:',
    footerNote: 'Based on official CBSE Examination Guidelines & Evaluation Schemes',
    sectionNames: {
      A: 'Sec A',
      B: 'Sec B',
      C: 'Sec C',
      D: 'Sec D',
      E: 'Sec E',
      F: 'Sec F'
    } as Record<string, string>
  };
}

interface PyqPaperViewerModalProps {
  paper: PyqPaper | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PyqPaperViewerModal: React.FC<PyqPaperViewerModalProps> = ({ paper, isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'INTERACTIVE' | 'SOLVE' | 'OFFICIAL_PDF'>('INTERACTIVE');
  const [activeSection, setActiveSection] = useState<'ALL' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'>('ALL');
  const [activeSubjectFilter, setActiveSubjectFilter] = useState<string>('ALL');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [bookmarkedMap, setBookmarkedMap] = useState<Record<string, boolean>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Interactive Timed Solve Mode state
  const [solveAnswers, setSolveAnswers] = useState<Record<string, string>>({});
  const [subjectiveGrades, setSubjectiveGrades] = useState<Record<string, 'RIGHT' | 'WRONG' | undefined>>({});
  const [revealedSubjective, setRevealedSubjective] = useState<Record<string, boolean>>({});
  const [solveSecondsLeft, setSolveSecondsLeft] = useState<number>(180 * 60);
  const [solveSubmitted, setSolveSubmitted] = useState<boolean>(false);
  const [solveSummary, setSolveSummary] = useState<PyqPaperGradeSummary | null>(null);
  const [mistakesSynced, setMistakesSynced] = useState<boolean>(false);

  const resetSolveSession = (durationMins: number) => {
    setSolveAnswers({});
    setSubjectiveGrades({});
    setRevealedSubjective({});
    setExpandedSolutions({});
    setSolveSecondsLeft((durationMins > 0 ? durationMins : 180) * 60);
    setSolveSubmitted(false);
    setSolveSummary(null);
    setMistakesSynced(false);
  };

  // If paper has no structured questions, default to Official PDF tab
  React.useEffect(() => {
    if (paper) {
      setActiveSection('ALL');
      setActiveSubjectFilter('ALL');
      setExpandedSolutions({});
      resetSolveSession(paper.durationMins || 180);
      if (!paper.questions || paper.questions.length === 0) {
        setViewMode('OFFICIAL_PDF');
      } else {
        setViewMode('INTERACTIVE');
      }
    }
  }, [paper]);

  // Countdown tick ONLY while actively solving
  useEffect(() => {
    if (!isOpen || !paper || viewMode !== 'SOLVE' || solveSubmitted) return;
    const timer = window.setInterval(() => {
      setSolveSecondsLeft(prev => {
        if (prev <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isOpen, paper, viewMode, solveSubmitted]);

  // Isolate print DOM whenever PYQ viewer modal is open
  useEffect(() => {
    if (isOpen && paper) {
      document.body.classList.add('preplens-modal-open');
    } else {
      document.body.classList.remove('preplens-modal-open');
    }
    return () => {
      document.body.classList.remove('preplens-modal-open');
    };
  }, [isOpen, paper]);

  if (!isOpen || !paper) return null;

  const isQuestionSaved = (q: PyqQuestion) => {
    return bookmarkedMap[q.id] !== undefined 
      ? bookmarkedMap[q.id] 
      : isItemSaved(`Q${q.qNum}: ${q.topic}`);
  };

  const handleBookmarkQuestion = (q: PyqQuestion) => {
    const title = `Q${q.qNum}: ${q.topic}`;
    const isSaved = isQuestionSaved(q);
    if (!isSaved) {
      saveLockerItem({
        type: 'QUESTION',
        title,
        subtitle: `${paper.title} [Section ${q.section} - ${q.marks} Mark]`,
        content: `${q.questionText}\n\n**Model Answer:**\n${q.modelAnswer}`,
        tags: [paper.subject, `Section ${q.section}`, 'Board PYQ'],
        personalNote: '',
        meta: {
          paperId: paper.id,
          paperTitle: paper.title,
          paperCode: paper.paperCode,
          subject: paper.subject,
          year: paper.year,
          qNum: q.qNum,
          section: q.section,
          marks: q.marks,
          examinerTip: q.examinerTip,
          commonPitfall: q.commonPitfall,
          stepMarking: q.stepMarking
        }
      });
      setBookmarkedMap(prev => ({ ...prev, [q.id]: true }));
      toast.success(`Question Q${q.qNum} saved to your Revision Locker!`);
    } else {
      removeLockerItemByTitle(title);
      setBookmarkedMap(prev => ({ ...prev, [q.id]: false }));
      toast.info(`Removed Q${q.qNum} from Revision Locker.`);
    }
  };

  const toggleSolution = (qId: string) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    (paper.questions || []).forEach(q => {
      allExpanded[q.id] = true;
    });
    setExpandedSolutions(allExpanded);
  };

  const collapseAll = () => {
    setExpandedSolutions({});
  };

  const questionsList = paper.questions || [];
  const availableSections = (['A', 'B', 'C', 'D', 'E', 'F'] as const).filter(sec =>
    questionsList.some(q => q.section === sec)
  );
  const availableSubjects = Array.from(
    new Set(questionsList.map(q => q.subject).filter((s): s is string => Boolean(s)))
  );
  const filteredQuestions = questionsList.filter(q => {
    if (activeSubjectFilter !== 'ALL' && q.subject !== activeSubjectFilter) return false;
    if (activeSection !== 'ALL' && q.section !== activeSection) return false;
    return true;
  });
  const authority = getExamAuthorityInfo(paper);

  const handleSubmitSolve = () => {
    const graded = gradePyqPaper(paper, solveAnswers, subjectiveGrades);
    setSolveSummary(graded);
    setSolveSubmitted(true);
    const expandedAfterSubmit: Record<string, boolean> = {};
    questionsList.forEach(q => {
      if (graded.gradesById[q.id]?.wrong) {
        expandedAfterSubmit[q.id] = true;
      }
    });
    setExpandedSolutions(expandedAfterSubmit);
    toast.success(`Paper Graded: ${graded.netScore}/${graded.maxMarks} Marks (${graded.accuracy}% Accuracy)`);
  };

  const handleSaveSolveMistakes = () => {
    if (!solveSummary || solveSummary.wrongQuestions.length === 0) return;
    solveSummary.wrongQuestions.forEach(({ question, userAnswer }) => {
      saveMistakeToLocker(
        {
          questionId: question.id,
          subject: question.subject || paper.subject,
          chapter: question.topic,
          questionText: question.questionText,
          options: question.options,
          questionType: question.options && question.options.length > 0 ? 'MCQ' : (question.correctOption ? 'NUMERICAL' : 'SUBJECTIVE'),
          userAnswer,
          correctAnswer: question.correctOption || question.modelAnswer.slice(0, 120),
          modelAnswer: question.modelAnswer,
          explanation: question.examinerTip || question.commonPitfall,
        },
        paper.title
      );
    });
    setMistakesSynced(true);
    toast.success(`Saved ${solveSummary.wrongQuestions.length} mistake${solveSummary.wrongQuestions.length === 1 ? '' : 's'} to Revision Locker!`);
  };

  const formatClock = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const totalDurationSecs = (paper.durationMins > 0 ? paper.durationMins : 180) * 60;
  const solveAttemptedCount = questionsList.filter(q => {
    const m = getPyqQuestionMode(paper, q);
    return m === 'SUBJECTIVE' ? Boolean(subjectiveGrades[q.id]) : Boolean((solveAnswers[q.id] || '').trim());
  }).length;

  const handlePrint = () => {
    window.print();
  };

  return createPortal(
    <div className={`preplens-print-root fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-2 sm:p-4'} bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 print:static print:p-0 print:block print:bg-white`}>
      {/* Print-specific style overrides */}
      <style>{`
        @media print {
          @page {
            margin: 10mm 12mm;
            size: A4 portrait;
          }
          body {
            background: #ffffff !important;
            color: #0f172a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .pyq-print-card {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Printable Centered PrepLens Watermark */}
      <div className="hidden print:flex fixed inset-0 pointer-events-none z-0 items-center justify-center">
        <img 
          src="/images/preplens_round_logo.png" 
          alt="PrepLens Watermark" 
          className="w-[380px] h-[380px] object-contain opacity-[0.11] select-none"
        />
      </div>

      <div className={`bg-slate-900 w-full ${isFullscreen ? 'h-screen w-screen max-w-none rounded-none border-none' : 'max-w-[96vw] xl:max-w-7xl h-[95vh] rounded-2xl shadow-2xl border border-slate-800'} flex flex-col overflow-hidden transition-all duration-200 print:static print:block print:max-w-none print:h-auto print:max-h-none print:w-full print:rounded-none print:border-none print:shadow-none print:overflow-visible print:bg-white relative z-10`}>
        
        {/* 1. UNIFIED PRO APPLICATION BAR (Compact 56px height) */}
        <header className="h-14 bg-slate-900 text-white px-3 sm:px-4 flex items-center justify-between gap-3 border-b border-slate-800 shrink-0 select-none print:hidden">
          {/* Left: Close & Title Details */}
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-4 w-px bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-500/15 text-blue-400 border border-blue-500/25">
                {paper.subject}
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/25">
                {paper.year}
              </span>
              {paper.paperCode && (
                <span className="hidden md:inline px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700/60">
                  {paper.paperCode}
                </span>
              )}
            </div>

            <div className="h-4 w-px bg-slate-800 hidden md:block" />

            <h2 className="text-xs sm:text-sm font-semibold text-slate-200 truncate max-w-[150px] sm:max-w-xs md:max-w-md lg:max-w-lg" title={paper.title}>
              {paper.title}
            </h2>
          </div>

          {/* Center: iOS-style Segmented View Switcher */}
          <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode('INTERACTIVE')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'INTERACTIVE'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Solutions</span>
              <span className="sm:hidden">Keys</span>
              <span className="text-[10px] opacity-75 font-mono">({paper.questions?.length || 0})</span>
            </button>

            {questionsList.length > 0 && (
              <button
                onClick={() => setViewMode('SOLVE')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  viewMode === 'SOLVE'
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Practice Mode</span>
              </button>
            )}

            <button
              onClick={() => setViewMode('OFFICIAL_PDF')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                viewMode === 'OFFICIAL_PDF'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-300" />
              <span className="hidden sm:inline">{authority.pdfTabLabel}</span>
              <span className="sm:hidden">Sheet</span>
            </button>
          </div>

          {/* Right: Actions Toolbar */}
          <div className="flex items-center gap-1.5 shrink-0">
            {paper.pdfUrl && (
              <>
                <a
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700/80 transition-colors"
                  title="Open PDF in a new dedicated browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline">Open in Tab</span>
                </a>
                <a
                  href={paper.pdfUrl}
                  download
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
                  title="Download Official CBSE PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Download</span>
                </a>
              </>
            )}

            {paper.solutionPdfUrl && (
              <a
                href={paper.solutionPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
                title="Official Marking Scheme PDF"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Marking Scheme</span>
              </a>
            )}

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors hidden sm:block"
              title="Print Paper"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsFullscreen(prev => !prev)}
              className={`p-1.5 rounded-lg transition-colors border ${
                isFullscreen
                  ? 'bg-amber-400 text-slate-950 border-amber-300 hover:bg-amber-300 font-bold'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-700'
              }`}
              title={isFullscreen ? "Exit Fullscreen" : "Full Screen View"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* 2. INTERACTIVE SUB-HEADER (Subjects, Sections & Stats - shown in Solutions & Timed Practice modes) */}
        {(viewMode === 'INTERACTIVE' || viewMode === 'SOLVE') && (
          <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0 select-none print:hidden">
            {/* Subject & Section Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {availableSubjects.length > 1 && (
                <div className="flex items-center gap-1 pr-2 border-r border-slate-800">
                  <button
                    onClick={() => setActiveSubjectFilter('ALL')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                      activeSubjectFilter === 'ALL'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700/50'
                    }`}
                  >
                    All ({questionsList.length})
                  </button>
                  {availableSubjects.map(sub => {
                    const cnt = questionsList.filter(q => q.subject === sub).length;
                    return (
                      <button
                        key={sub}
                        onClick={() => setActiveSubjectFilter(sub)}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                          activeSubjectFilter === sub
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700/50'
                        }`}
                      >
                        {sub} ({cnt})
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-slate-400 font-medium mr-1 text-[11px] hidden sm:inline">Sections:</span>
                <button
                  onClick={() => setActiveSection('ALL')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeSection === 'ALL'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                  }`}
                >
                  All ({questionsList.filter(q => activeSubjectFilter === 'ALL' || q.subject === activeSubjectFilter).length})
                </button>
                {availableSections.map(sec => {
                  const secCnt = questionsList.filter(q => (activeSubjectFilter === 'ALL' || q.subject === activeSubjectFilter) && q.section === sec).length;
                  return (
                    <button
                      key={sec}
                      onClick={() => setActiveSection(sec)}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                        activeSection === sec
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                      }`}
                    >
                      {authority.sectionNames[sec] || `Sec ${sec}`} ({secCnt})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats / Practice Controls */}
            {viewMode === 'SOLVE' ? (
              <div className="flex items-center gap-2.5 text-slate-200 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono font-bold border ${
                  solveSecondsLeft < 300 && !solveSubmitted
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                    : 'bg-slate-800 text-amber-300 border-slate-700'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  {formatClock(solveSecondsLeft)}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-bold">
                  {solveAttemptedCount}/{questionsList.length} Attempted
                </span>
                {!solveSubmitted ? (
                  <button
                    type="button"
                    onClick={handleSubmitSolve}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    Submit & Score
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => resetSolveSession(paper.durationMins || 180)}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Retake Paper
                  </button>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4 text-slate-400">
                <div className="hidden sm:flex items-center gap-3 text-[11px] font-medium border-r border-slate-800 pr-3">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {formatDurationLabel(paper.durationMins)} Allowed
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Award className="w-3.5 h-3.5 text-blue-400" />
                    {paper.totalMarks} Marks
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={expandAll} className="text-blue-400 hover:text-blue-300 font-medium hover:underline">
                    Expand All
                  </button>
                  <span className="text-slate-600">|</span>
                  <button onClick={collapseAll} className="text-slate-400 hover:text-slate-200 font-medium hover:underline">
                    Collapse
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. MAIN CONTENT CANVAS */}
        {viewMode === 'OFFICIAL_PDF' && paper.pdfUrl ? (
          /* PURE FULL-VIEW EMBEDDED PDF CANVAS (Edge-to-Edge with native PDF controls) */
          <div className="flex-1 w-full h-full relative bg-slate-950 overflow-hidden">
            <iframe
              src={`${paper.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
              className="w-full h-full border-0 absolute inset-0 bg-slate-950"
              title={paper.title}
            />
          </div>
        ) : (
          /* SCROLLABLE QUESTIONS / OFFICIAL SHEET CONTENT */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50 print:flex-none print:block print:overflow-visible print:bg-white print:p-0 relative">

            {/* Printable Branded Navy Banner for Interactive Solutions Mode */}
            {viewMode === 'INTERACTIVE' && (
              <div className="hidden print:flex items-center justify-between px-4 py-3 mb-4 rounded-xl bg-[#0F2454] text-white">
                <div className="flex items-center gap-3">
                  <img src="/images/preplens_round_logo.png" alt="PrepLens Logo" className="w-11 h-11 object-contain" />
                  <div>
                    <div className="text-base font-black tracking-tight text-white">{paper.title}</div>
                    <div className="text-[11px] text-blue-100 font-semibold">
                      {authority.boardName} • {paper.subject} • {paper.totalMarks} Marks • {formatDurationLabel(paper.durationMins)}
                    </div>
                  </div>
                </div>
                <div className="text-right text-[10px] text-blue-100 font-mono">
                  <div className="font-bold text-white">PREPLENS AI</div>
                  <div>{questionsList.length} Qs Solved Key</div>
                </div>
              </div>
            )}
            
            {/* Subtle Screen Background Watermark for Brand Protection */}
            <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-[0.035] print:hidden">
              <img 
                src="/images/preplens_round_logo.png" 
                alt="" 
                className="w-[480px] h-[480px] object-contain select-none"
              />
            </div>
            
            {viewMode === 'OFFICIAL_PDF' ? (
              /* OFFICIAL PAPER TYPOGRAPHY VIEW (when no PDF is attached) */
              <div className="max-w-4xl mx-auto bg-white border border-slate-300 rounded-xl shadow-lg p-8 sm:p-12 text-slate-900 font-serif space-y-8 print:border-none print:shadow-none print:p-0">
                
                {/* Official CBSE Document Header */}
                <div className="border-b-2 border-slate-900 pb-6 text-center space-y-2 font-sans">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-600">
                    <span>SET: 01</span>
                    <span className="px-3 py-0.5 bg-slate-900 text-white rounded">CODE: {paper.paperCode}</span>
                    <span>ROLL NO: _______________</span>
                  </div>

                  <div className="pt-2">
                    <div className="text-sm font-bold tracking-widest uppercase text-slate-600">{authority.boardName}</div>
                    <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 tracking-tight mt-1">
                      {paper.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-700 mt-2">
                      <span>SUBJECT: {paper.subject.toUpperCase()}</span>
                      <span>•</span>
                      <span>MAX MARKS: {paper.totalMarks}</span>
                      <span>•</span>
                      <span>TIME: {formatDurationLabel(paper.durationMins).toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Questions List */}
                {(paper.questions || []).length > 0 ? (
                  <div className="space-y-8 font-serif">
                    {paper.questions.map((q) => (
                      <div key={q.id} className="space-y-2 border-b border-slate-100 pb-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-2">
                            <span className="font-bold font-sans text-sm text-slate-900">
                              Q.{q.qNum}
                            </span>
                            <p className="text-base text-slate-900 leading-relaxed whitespace-pre-line pl-6 -mt-6">
                              {q.questionText}
                            </p>
                          </div>
                          <span className="font-mono font-bold text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-700 shrink-0">
                            [{q.marks} Mark{q.marks > 1 ? 's' : ''}]
                          </span>
                        </div>

                        {q.options && q.options.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6 pt-1 font-sans text-sm text-slate-800">
                            {q.options.map((opt, oIdx) => (
                              <div key={oIdx} className="bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-md">
                                {opt}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 space-y-3 font-sans">
                    <FileText className="w-12 h-12 text-slate-400 mx-auto" />
                    <h3 className="text-base font-bold text-slate-800">Official CBSE Paper Registered</h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                      This question paper metadata has been created by the Admin. You can view official details above.
                    </p>
                  </div>
                )}

              </div>
            ) : (
            /* INTERACTIVE STEP-BY-STEP MARKING VIEW / PRACTICE SOLVE MODE */
            <>
              {/* Post-Submit Scorecard Summary Banner (SOLVE mode) */}
              {viewMode === 'SOLVE' && solveSubmitted && solveSummary && (
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-5 sm:p-6 text-white shadow-lg border border-indigo-900/60 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                        <Trophy className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-300">
                          Timed Practice Scorecard
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          Score: {solveSummary.netScore} / {solveSummary.maxMarks} Marks ({solveSummary.accuracy}% Accuracy)
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {solveSummary.wrongQuestions.length > 0 && (
                        <button
                          type="button"
                          disabled={mistakesSynced}
                          onClick={handleSaveSolveMistakes}
                          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:bg-emerald-600 text-slate-950 disabled:text-white text-xs font-extrabold transition-colors cursor-pointer"
                        >
                          {mistakesSynced
                            ? `Saved ${solveSummary.wrongQuestions.length} Mistakes to Locker ✓`
                            : `Auto-Save ${solveSummary.wrongQuestions.length} Wrong Qs to Locker`}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => resetSolveSession(paper.durationMins || 180)}
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 cursor-pointer"
                      >
                        Retake Paper
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-lg font-black text-emerald-400">{solveSummary.correctCount}</div>
                      <div className="text-[11px] text-slate-300 font-semibold">Correct Answers</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-lg font-black text-rose-400">{solveSummary.wrongCount}</div>
                      <div className="text-[11px] text-slate-300 font-semibold">Incorrect Answers</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-lg font-black text-slate-300">{solveSummary.skippedCount}</div>
                      <div className="text-[11px] text-slate-300 font-semibold">Skipped</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-lg font-black text-amber-300 font-mono">
                        {formatClock(Math.max(0, totalDurationSecs - solveSecondsLeft))}
                      </div>
                      <div className="text-[11px] text-slate-300 font-semibold">Time Spent</div>
                    </div>
                  </div>
                </div>
              )}

              {/* General Instructions Card */}
              {(paper.generalInstructions || []).length > 0 && (
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs sm:text-sm text-amber-900 space-y-1.5">
                  <div className="font-bold flex items-center gap-2 text-amber-950">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    Official Examination Instructions & Marking Format:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-1">
                    {paper.generalInstructions.map((inst, i) => (
                      <li key={i}>{inst}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Questions List */}
              {filteredQuestions.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3 font-sans">
                  <FileText className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="text-base font-bold text-slate-800">{paper.pdfUrl ? 'Official PDF Question Paper' : 'No Questions Match Selected Filter'}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                    {paper.pdfUrl ? 'This paper was uploaded as an official Question Paper PDF.' : 'Try selecting All Subjects or All Sections above.'}
                  </p>
                  {paper.pdfUrl && (
                    <button
                      onClick={() => setViewMode('OFFICIAL_PDF')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                    >
                      <FileText className="w-4 h-4" />
                      Switch to Official PDF Mode
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                {filteredQuestions.map((q) => {
                  const isSolveMode = viewMode === 'SOLVE';
                  const canShowSolution = !isSolveMode || solveSubmitted;
                  const isExpanded = canShowSolution && !!expandedSolutions[q.id];
                  const qMode = getPyqQuestionMode(paper, q);
                  const negPenalty = getPyqNegativePenalty(paper, q);
                  const userVal = solveAnswers[q.id] || '';
                  const qGrade = isSolveMode && solveSubmitted ? solveSummary?.gradesById[q.id] : undefined;

                  return (
                    <div
                      key={q.id}
                      className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-all pyq-print-card print:shadow-none print:border-slate-300 ${
                        qGrade?.correct
                          ? 'border-emerald-300 ring-1 ring-emerald-200/70'
                          : qGrade?.wrong
                          ? 'border-rose-300 ring-1 ring-rose-200/70'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {/* Question Header Bar */}
                      <div className="bg-slate-50/90 px-4 py-3 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                            Q{q.qNum}
                          </span>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Section {q.section}
                          </span>
                          <span className="text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                            {q.topic}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {qGrade && qGrade.attempted ? (
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${
                              qGrade.correct
                                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                : 'bg-rose-100 text-rose-800 border-rose-300'
                            }`}>
                              {qGrade.deltaMarks > 0 ? `+${qGrade.deltaMarks}` : qGrade.deltaMarks} Marks
                            </span>
                          ) : (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                              +{q.marks} {negPenalty > 0 ? `/ -${negPenalty}` : q.marks === 1 ? 'Mark' : 'Marks'}
                            </span>
                          )}
                          {canShowSolution && (
                            <button
                              onClick={() => toggleSolution(q.id)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                isExpanded
                                  ? 'bg-blue-600 text-white shadow-xs'
                                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                              }`}
                            >
                              {isExpanded ? (
                                <>
                                  Hide Solution <ChevronUp className="w-3.5 h-3.5" />
                                </>
                              ) : (
                                <>
                                  Marking Scheme <ChevronDown className="w-3.5 h-3.5" />
                                </>
                              )}
                            </button>
                          )}
                          <button
                            onClick={() => handleBookmarkQuestion(q)}
                            className={`p-1.5 rounded-lg border transition-all ${
                              isQuestionSaved(q)
                                ? 'bg-amber-100 border-amber-300 text-amber-800'
                                : 'bg-white border-slate-200 text-slate-400 hover:text-amber-600 hover:bg-amber-50'
                            }`}
                            title={isQuestionSaved(q) ? 'Saved in Personal Locker' : 'Save Question to Locker'}
                          >
                            <Bookmark className="w-3.5 h-3.5 fill-current" />
                          </button>
                        </div>
                      </div>

                      {/* Question Body */}
                      <div className="p-4 sm:p-5 text-slate-900 space-y-3">
                        <p className="text-sm sm:text-base font-medium leading-relaxed whitespace-pre-line text-slate-800">
                          {q.questionText}
                        </p>

                        {/* MCQ / MSQ Options */}
                        {q.options && q.options.length > 0 && (
                          <div className="space-y-2 pt-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {q.options.map((opt, optIdx) => {
                                const selectedList = qMode === 'MSQ' ? userVal.split('||').filter(Boolean) : [];
                                const isSelected = qMode === 'MSQ' ? selectedList.includes(opt) : userVal === opt;
                                const isKeyOption = Boolean(
                                  canShowSolution && (isExpanded || (isSolveMode && solveSubmitted)) &&
                                  matchesPyqOption(opt, optIdx, q.correctOption)
                                );
                                const isSelectedWrong = Boolean(
                                  isSolveMode && solveSubmitted && isSelected && !matchesPyqOption(opt, optIdx, q.correctOption)
                                );

                                if (isSolveMode) {
                                  return (
                                    <button
                                      key={optIdx}
                                      type="button"
                                      disabled={solveSubmitted}
                                      onClick={() => {
                                        if (solveSubmitted) return;
                                        if (qMode === 'MSQ') {
                                          const exists = selectedList.includes(opt);
                                          const next = exists ? selectedList.filter(x => x !== opt) : [...selectedList, opt];
                                          setSolveAnswers(prev => ({ ...prev, [q.id]: next.join('||') }));
                                        } else {
                                          setSolveAnswers(prev => ({ ...prev, [q.id]: prev[q.id] === opt ? '' : opt }));
                                        }
                                      }}
                                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-2 ${
                                        solveSubmitted
                                          ? isKeyOption
                                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                                            : isSelectedWrong
                                            ? 'bg-rose-50 border-rose-400 text-rose-900 font-bold'
                                            : 'bg-slate-50 border-slate-200 text-slate-600'
                                          : isSelected
                                          ? 'bg-indigo-50 border-indigo-600 text-indigo-950 font-bold ring-1 ring-indigo-500/30 cursor-pointer'
                                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-white cursor-pointer'
                                      }`}
                                    >
                                      <span>{opt}</span>
                                      {isSolveMode && solveSubmitted && isKeyOption && (
                                        <span className="text-[10px] font-black uppercase text-emerald-700 shrink-0">Key ✓</span>
                                      )}
                                      {isSolveMode && solveSubmitted && isSelectedWrong && (
                                        <span className="text-[10px] font-black uppercase text-rose-700 shrink-0">Yours ✗</span>
                                      )}
                                    </button>
                                  );
                                }

                                return (
                                  <div
                                    key={optIdx}
                                    className={`p-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-colors ${
                                      isKeyOption
                                        ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                                        : 'bg-slate-50 border-slate-200 text-slate-700'
                                    }`}
                                  >
                                    {opt}
                                  </div>
                                );
                              })}
                            </div>
                            {isSolveMode && !solveSubmitted && userVal && (
                              <button
                                type="button"
                                onClick={() => setSolveAnswers(prev => ({ ...prev, [q.id]: '' }))}
                                className="text-[11px] font-bold text-slate-400 hover:text-slate-700"
                              >
                                Clear response
                              </button>
                            )}
                          </div>
                        )}

                        {/* Numerical Input (SOLVE mode without options) */}
                        {isSolveMode && qMode === 'NUMERICAL' && (
                          <div className="pt-1 flex flex-wrap items-center gap-3">
                            <input
                              type="text"
                              disabled={solveSubmitted}
                              value={userVal}
                              onChange={e => setSolveAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                              placeholder="Enter numerical value..."
                              className={`px-3.5 py-2 rounded-xl border text-sm font-mono font-bold outline-none w-56 ${
                                solveSubmitted
                                  ? qGrade?.correct
                                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                                    : 'bg-rose-50 border-rose-400 text-rose-900'
                                  : 'bg-slate-50 border-slate-300 focus:border-indigo-500 text-slate-900'
                              }`}
                            />
                            {solveSubmitted && (
                              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                                Official Key: {q.correctOption}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Subjective Self-Check (CBSE Section B-E in SOLVE mode) */}
                        {isSolveMode && qMode === 'SUBJECTIVE' && (
                          <div className="pt-2 flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setRevealedSubjective(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                            >
                              {revealedSubjective[q.id] ? 'Hide Rubric' : 'Reveal Marking Rubric to Self-Grade'}
                            </button>
                            {revealedSubjective[q.id] && !solveSubmitted && (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setSubjectiveGrades(prev => ({ ...prev, [q.id]: 'RIGHT' }))}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                                    subjectiveGrades[q.id] === 'RIGHT'
                                      ? 'bg-emerald-600 text-white border-emerald-600'
                                      : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                                  }`}
                                >
                                  Got Full Marks (+{q.marks})
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setSubjectiveGrades(prev => ({ ...prev, [q.id]: 'WRONG' }))}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                                    subjectiveGrades[q.id] === 'WRONG'
                                      ? 'bg-rose-600 text-white border-rose-600'
                                      : 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100'
                                  }`}
                                >
                                  Missed Key Steps (0)
                                </button>
                              </>
                            )}
                            {revealedSubjective[q.id] && !solveSubmitted && (
                              <div className="w-full mt-2 p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-800 space-y-1">
                                <div className="font-bold text-blue-900">Marking Scheme Preview:</div>
                                <div className="whitespace-pre-line">{q.modelAnswer}</div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Step-by-Step Marking Scheme Drawer */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-slate-200 space-y-4 animate-in slide-in-from-top-2 duration-150">
                            
                            {/* Official Model Answer */}
                            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
                              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm mb-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                {authority.answerHeading}
                              </div>
                              <p className="text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed font-normal">
                                {q.modelAnswer}
                              </p>
                            </div>

                            {/* Step-by-Step Marks Breakdown */}
                            <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4">
                              <div className="flex items-center gap-2 text-blue-900 font-bold text-xs sm:text-sm mb-2.5">
                                <Award className="w-4 h-4 text-blue-600" />
                                Step-by-Step Marking Scheme (How to score full marks):
                              </div>
                              <div className="space-y-2">
                                {q.stepMarking.map((step, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="flex items-start justify-between gap-3 text-xs sm:text-sm bg-white p-2.5 rounded-lg border border-blue-100"
                                  >
                                    <span className="text-slate-800 font-medium leading-relaxed">
                                      {step.step}
                                    </span>
                                    <span className="shrink-0 px-2 py-0.5 rounded font-extrabold text-blue-800 bg-blue-100 text-xs">
                                      {step.marks}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Examiner Golden Tip */}
                            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3">
                              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <div className="text-xs sm:text-sm">
                                <span className="font-bold text-amber-900">Examiner's Secret Tip: </span>
                                <span className="text-slate-800 font-medium">{q.examinerTip}</span>
                              </div>
                            </div>

                            {/* Common Mistake Alert */}
                            {q.commonPitfall && (
                              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 flex items-start gap-3">
                                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                <div className="text-xs sm:text-sm">
                                  <span className="font-bold text-rose-900">Common Student Mistake: </span>
                                  <span className="text-slate-800 font-medium">{q.commonPitfall}</span>
                                </div>
                              </div>
                            )}

                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            </>
          )}

        </div>
        )}

        {/* Modal Footer (Shown in Solutions & Timed Practice modes) */}
        {(viewMode === 'INTERACTIVE' || viewMode === 'SOLVE') && (
          <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 shrink-0 print:border-slate-300 print:px-0 print:pt-2 print:mt-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-500 print:hidden" />
              <span>{authority.footerNote}</span>
            </div>
            <span className="hidden print:inline text-[10px] font-mono text-slate-400">
              PrepLens - Achieve Your Dreams
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors print:hidden"
            >
              Close Paper
            </button>
          </div>
        )}

      </div>
    </div>,
    document.body
  );
};
