import React, { useState } from 'react';
import { 
  X, Printer, CheckCircle2, AlertTriangle, Lightbulb, 
  HelpCircle, ChevronDown, ChevronUp, Award, Clock, Bookmark,
  Download, Sparkles, FileText, Maximize2, Minimize2, ExternalLink
} from 'lucide-react';
import { saveLockerItem, isItemSaved, removeLockerItemByTitle } from '../../lib/lockerStorage';
import { toast } from 'sonner';

export interface PyqQuestion {
  id: string;
  qNum: number;
  section: 'A' | 'B' | 'C' | 'D' | 'E';
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
  targetClass?: 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12' | 'All';
  paperType: 'BOARD_EXAM' | 'CBSE_SAMPLE' | 'PRE_BOARD';
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

interface PyqPaperViewerModalProps {
  paper: PyqPaper | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PyqPaperViewerModal: React.FC<PyqPaperViewerModalProps> = ({ paper, isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'INTERACTIVE' | 'OFFICIAL_PDF'>('INTERACTIVE');
  const [activeSection, setActiveSection] = useState<'ALL' | 'A' | 'B' | 'C' | 'D' | 'E'>('ALL');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [bookmarkedMap, setBookmarkedMap] = useState<Record<string, boolean>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  // If paper has no structured questions, default to Official PDF tab
  React.useEffect(() => {
    if (paper) {
      if (!paper.questions || paper.questions.length === 0) {
        setViewMode('OFFICIAL_PDF');
      } else {
        setViewMode('INTERACTIVE');
      }
    }
  }, [paper]);

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
  const filteredQuestions = activeSection === 'ALL'
    ? questionsList
    : questionsList.filter(q => q.section === activeSection);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-2 sm:p-4'} bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200`}>
      <div className={`bg-slate-900 w-full ${isFullscreen ? 'h-screen w-screen max-w-none rounded-none border-none' : 'max-w-[96vw] xl:max-w-7xl h-[95vh] rounded-2xl shadow-2xl border border-slate-800'} flex flex-col overflow-hidden transition-all duration-200`}>
        
        {/* 1. UNIFIED PRO APPLICATION BAR (Compact 56px height) */}
        <header className="h-14 bg-slate-900 text-white px-3 sm:px-4 flex items-center justify-between gap-3 border-b border-slate-800 shrink-0 select-none">
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
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'INTERACTIVE'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Questions & Solutions</span>
              <span className="sm:hidden">Solutions</span>
              <span className="text-[10px] opacity-75 font-mono">({paper.questions?.length || 0})</span>
            </button>

            <button
              onClick={() => setViewMode('OFFICIAL_PDF')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'OFFICIAL_PDF'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-300" />
              <span className="hidden sm:inline">Original CBSE PDF</span>
              <span className="sm:hidden">Official PDF</span>
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

        {/* 2. INTERACTIVE SUB-HEADER (Sections & Stats - only in Questions mode) */}
        {viewMode === 'INTERACTIVE' && (
          <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0 select-none">
            {/* Section Pills */}
            <div className="flex items-center gap-1">
              <span className="text-slate-400 font-medium mr-1 text-[11px] hidden sm:inline">Sections:</span>
              {(['ALL', 'A', 'B', 'C', 'D', 'E'] as const).map(sec => (
                <button
                  key={sec}
                  onClick={() => setActiveSection(sec)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeSection === sec
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                  }`}
                >
                  {sec === 'ALL' ? 'All Questions' : `Sec ${sec}`}
                </button>
              ))}
            </div>

            {/* Quick Stats & Expand/Collapse */}
            <div className="flex items-center gap-4 text-slate-400">
              <div className="hidden sm:flex items-center gap-3 text-[11px] font-medium border-r border-slate-800 pr-3">
                <span className="flex items-center gap-1 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {Math.floor(paper.durationMins / 60)}h Allowed
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
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50 print:bg-white">
            
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
                    <div className="text-sm font-bold tracking-widest uppercase text-slate-600">Central Board of Secondary Education</div>
                    <h1 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 tracking-tight mt-1">
                      {paper.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-700 mt-2">
                      <span>SUBJECT: {paper.subject.toUpperCase()}</span>
                      <span>•</span>
                      <span>MAX MARKS: {paper.totalMarks}</span>
                      <span>•</span>
                      <span>TIME: {Math.floor(paper.durationMins / 60)} HOURS</span>
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
            /* INTERACTIVE STEP-BY-STEP MARKING VIEW (Current mode) */
            <>
              {/* General Instructions Card */}
              {(paper.generalInstructions || []).length > 0 && (
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs sm:text-sm text-amber-900 space-y-1.5">
                  <div className="font-bold flex items-center gap-2 text-amber-950">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    Official CBSE Exam Instructions:
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
                  <h3 className="text-base font-bold text-slate-800">Original CBSE Official Paper</h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                    This paper was uploaded as an official CBSE Question Paper PDF.
                  </p>
                  <button
                    onClick={() => setViewMode('OFFICIAL_PDF')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                  >
                    <FileText className="w-4 h-4" />
                    Switch to Official PDF Mode
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                {filteredQuestions.map((q) => {
                  const isExpanded = !!expandedSolutions[q.id];
                  return (
                    <div
                      key={q.id}
                      className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-slate-300"
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
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                            {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
                          </span>
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

                        {/* MCQ Options (if Section A) */}
                        {q.options && q.options.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {q.options.map((opt, optIdx) => (
                              <div
                                key={optIdx}
                                className={`p-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-colors ${
                                  isExpanded && q.correctOption && opt.startsWith(q.correctOption)
                                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                                    : 'bg-slate-50 border-slate-200 text-slate-700'
                                }`}
                              >
                                {opt}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Step-by-Step Marking Scheme Drawer */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-slate-200 space-y-4 animate-in slide-in-from-top-2 duration-150">
                            
                            {/* Official Model Answer */}
                            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
                              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm mb-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                Official CBSE Model Answer:
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

        {/* Modal Footer (Only shown in interactive mode) */}
        {viewMode === 'INTERACTIVE' && (
          <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-500" />
              <span>Based on official CBSE Examination Guidelines & Evaluation Schemes</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
            >
              Close Paper
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
