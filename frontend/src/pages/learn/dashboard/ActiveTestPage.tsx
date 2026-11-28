import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Trophy, ArrowLeft, ArrowRight, BookOpen, Loader2, CheckCircle2, XCircle, FileText, Sparkles, ChevronDown, ChevronUp, Lock, AlertTriangle, Bookmark, Eraser, Delete, CheckSquare, Square } from 'lucide-react';
import { toast } from 'sonner';
import { learnApi } from '../../../lib/learn-api';
import { PaywallModal } from '../../../components/learn/PaywallModal';
import { predictCompetitiveOutcome, saveMistakeToLocker } from '../../../lib/rankPredictor';

interface Question {
  questionId: string;
  text: string;
  marks: number;
  negativeMarks?: number;
  section?: string;
  subject?: string;
  options: Record<string, string>;
  questionType?: string;
  partialMarkingRule?: string;
  syllabusTag?: string;
  casePassage?: string;
  chapter?: string;
  internalChoiceGroup?: string;
  questionSubNum?: string;
  explanation?: string;
  modelAnswer?: string;
  markingSchemeJson?: string;
  correctAnswer?: string;
  userAnswer?: string;
  isCorrect?: boolean;
  isPartial?: boolean;
  earnedMarks?: number;
}

interface TestDetails {
  id: string;
  title: string;
  durationMins: number;
  totalMarks: number;
  negativeMarking?: number;
  isFree?: boolean;
  subject?: string;
  testType?: string;
  classLevel?: string;
}

interface SubjectStat {
  subject: string;
  correct: number;
  wrong: number;
  partial?: number;
  unattempted?: number;
  total: number;
  netScore: number;
  maxMarks: number;
  accuracy: number;
}

interface SubmissionResult {
  score: number;
  totalMarks: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeTakenSeconds: number;
  subjectStats?: SubjectStat[];
}

function isNumericalQuestionType(qType?: string): boolean {
  const t = (qType || '').toUpperCase();
  return t === 'NUMERICAL' || t === 'INTEGER';
}

function isMsqQuestionType(qType?: string): boolean {
  return (qType || '').toUpperCase() === 'MSQ';
}

function isCompetitiveClassLevel(classLevel?: string, title?: string): boolean {
  const s = `${classLevel || ''} ${title || ''}`.toLowerCase();
  return s.includes('jee') || s.includes('neet');
}

// 1. Resilient Test Timer with Session Storage Preservation
const TestTimer = React.memo(({ 
  initialTime, 
  storageKey, 
  paused = false,
  onTimeUp 
}: { 
  initialTime: number; 
  storageKey?: string; 
  paused?: boolean;
  onTimeUp: () => void 
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    if (storageKey && typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed > 0 && parsed <= initialTime) {
          return parsed;
        }
      }
    }
    return initialTime;
  });

  const onTimeUpRef = useRef(onTimeUp);
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          if (storageKey && typeof window !== 'undefined') {
            sessionStorage.removeItem(storageKey);
          }
          if (onTimeUpRef.current) onTimeUpRef.current();
          return 0;
        }
        const next = prev - 1;
        if (storageKey && next % 5 === 0 && typeof window !== 'undefined') {
          sessionStorage.setItem(storageKey, next.toString());
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [storageKey, paused]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const isLowTime = timeLeft < 300; // Under 5 minutes

  return (
    <div className={`flex items-center text-lg font-mono font-bold px-4 py-2 rounded-xl border shadow-xs transition-colors ${
      isLowTime 
        ? 'text-red-700 bg-red-50 border-red-300 animate-pulse' 
        : 'text-indigo-700 bg-indigo-50 border-indigo-200/80'
    }`}>
      <Clock className={`w-5 h-5 mr-2 ${isLowTime ? 'text-red-600' : 'text-indigo-600'}`} />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
});

// 2. Question Palette (Supports NTA 5-state tracking: Current, Answered, Marked, Answered+Marked, Visited Unanswered, Not Visited)
const QuestionPalette = React.memo(({ 
  questions, 
  answers, 
  visitedIds,
  markedIds,
  currentIdx, 
  isReviewMode = false,
  setCurrentIdx 
}: { 
  questions: Question[]; 
  answers: Record<string, string>; 
  visitedIds: Set<string>;
  markedIds: Set<string>;
  currentIdx: number; 
  isReviewMode?: boolean;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>; 
}) => {
  const counts = useMemo(() => {
    let answered = 0, marked = 0, answeredMarked = 0, notAnswered = 0, notVisited = 0;
    for (const q of questions) {
      const hasAns = !!answers[q.questionId] && answers[q.questionId].trim().length > 0;
      const isMarked = markedIds.has(q.questionId);
      const isVisited = visitedIds.has(q.questionId);
      if (hasAns && isMarked) answeredMarked++;
      else if (isMarked) marked++;
      else if (hasAns) answered++;
      else if (isVisited) notAnswered++;
      else notVisited++;
    }
    return { answered, marked, answeredMarked, notAnswered, notVisited };
  }, [questions, answers, visitedIds, markedIds]);

  return (
    <div className="w-full lg:w-72 xl:w-80 bg-white rounded-2xl shadow-xs border border-slate-200 p-4 flex flex-col shrink-0 lg:min-h-0">
      <div className="flex items-center justify-between mb-3 shrink-0">
        <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Question Palette</h3>
        <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
          {counts.answered + counts.answeredMarked}/{questions.length} done
        </span>
      </div>

      <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-5 gap-1.5 max-h-60 lg:max-h-none lg:flex-1 lg:min-h-0 overflow-y-auto pr-1 content-start">
        {questions.map((q, idx) => {
          const isAnswered = !!answers[q.questionId] && answers[q.questionId].trim().length > 0;
          const isMarked = markedIds.has(q.questionId);
          const isVisited = visitedIds.has(q.questionId);
          const isCurrent = currentIdx === idx;
          
          let btnClass = "relative h-9 w-full rounded-lg flex items-center justify-center font-bold text-xs border-2 transition-all cursor-pointer ";
          if (isReviewMode && q.isCorrect !== undefined) {
            if (q.isCorrect) {
              btnClass += "border-emerald-500 bg-emerald-500 text-white shadow-xs";
            } else if (q.userAnswer) {
              btnClass += "border-rose-500 bg-rose-500 text-white shadow-xs";
            } else {
              btnClass += "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100";
            }
          } else if (isAnswered && isMarked) {
            btnClass += "border-purple-600 bg-purple-600 text-white shadow-xs";
          } else if (isMarked) {
            btnClass += "border-purple-500 bg-purple-100 text-purple-800";
          } else if (isAnswered) {
            btnClass += "border-emerald-500 bg-emerald-500 text-white shadow-xs";
          } else if (isVisited) {
            btnClass += "border-rose-300 bg-rose-50 text-rose-700";
          } else {
            btnClass += "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100";
          }

          if (isCurrent) {
            btnClass += " ring-2 ring-indigo-600 ring-offset-1 border-indigo-700";
          }

          return (
            <button 
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={btnClass}
              title={`Question ${idx + 1} (${q.subject || q.section || 'General'})`}
            >
              {idx + 1}
              {isAnswered && isMarked && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white" />
              )}
            </button>
          );
        })}
      </div>
      
      <div className="mt-3 grid grid-cols-2 gap-1.5 pt-3 border-t border-slate-100 shrink-0">
        <div className="flex items-center text-[11px] font-semibold text-slate-600">
          <div className="w-3 h-3 rounded bg-emerald-500 mr-1.5 shrink-0" /> Answered ({counts.answered})
        </div>
        <div className="flex items-center text-[11px] font-semibold text-slate-600">
          <div className="w-3 h-3 rounded bg-rose-100 border border-rose-300 mr-1.5 shrink-0" /> Not Answered ({counts.notAnswered})
        </div>
        <div className="flex items-center text-[11px] font-semibold text-slate-600">
          <div className="w-3 h-3 rounded bg-purple-500 mr-1.5 shrink-0" /> Marked ({counts.marked + counts.answeredMarked})
        </div>
        <div className="flex items-center text-[11px] font-semibold text-slate-600">
          <div className="w-3 h-3 rounded bg-slate-200 mr-1.5 shrink-0" /> Not Visited ({counts.notVisited})
        </div>
      </div>
    </div>
  );
});

// 3. NTA On-Screen Virtual Numeric Keypad for JEE Main Sec B & JEE Advanced Numericals
function NumericalKeypadInput({
  value,
  onChange,
  negativeMarks,
}: {
  value: string;
  onChange: (val: string) => void;
  negativeMarks?: number;
}) {
  const appendChar = (ch: string) => {
    if (ch === '-' && value.length > 0) return;
    if (ch === '.' && value.includes('.')) return;
    if (value.length >= 12) return;
    onChange(value + ch);
  };

  const handleBackspace = () => {
    onChange(value.slice(0, -1));
  };

  const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '-', '0', '.'];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-sm space-y-4">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Enter Numerical / Integer Value</span>
          {negativeMarks && negativeMarks > 0 ? (
            <span className="text-rose-600">-{negativeMarks} Negative Marking</span>
          ) : (
            <span className="text-emerald-600">No Negative Marking</span>
          )}
        </div>
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => {
            const sanitized = e.target.value.replace(/[^0-9.-]/g, '');
            onChange(sanitized);
          }}
          placeholder="e.g. 12 or 2.50"
          className="w-full px-4 py-3 text-lg font-mono font-bold tracking-wide bg-white border-2 border-indigo-200 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-hidden text-slate-900"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {keys.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => appendChar(k)}
            className="py-2.5 bg-white hover:bg-indigo-50 active:scale-95 border border-slate-200 rounded-xl font-mono font-bold text-base text-slate-800 shadow-2xs transition-all cursor-pointer"
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleBackspace}
          className="py-2 px-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Delete className="w-3.5 h-3.5" /> Backspace
        </button>
        <button
          type="button"
          onClick={() => onChange('')}
          className="py-2 px-3 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl text-xs font-bold text-rose-700 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Eraser className="w-3.5 h-3.5" /> Clear Value
        </button>
      </div>
    </div>
  );
}

export function ActiveTestPage() {
  const { testId } = useParams();
  const navigate = useNavigate();
  
  const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [visitedIds, setVisitedIds] = useState<Set<string>>(() => new Set());
  const [markedIds, setMarkedIds] = useState<Set<string>>(() => new Set());
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<{ status: number; message: string } | null>(null);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [attemptId, setAttemptId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scorecard, setScorecard] = useState<SubmissionResult | null>(null);
  const [isScorecardOpen, setIsScorecardOpen] = useState(false);
  const initializedTestIdRef = useRef<string | null>(null);
  
  // Post-submission review mode
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewQuestions, setReviewQuestions] = useState<Question[]>([]);
  const [showMarkingScheme, setShowMarkingScheme] = useState(true);
  const [syncingMistakes, setSyncingMistakes] = useState(false);
  const [mistakesSynced, setMistakesSynced] = useState(false);

  const loadTest = useCallback(async (force = false) => {
    if (!testId) return;
    if (!force && initializedTestIdRef.current === testId) return;
    initializedTestIdRef.current = testId;

    setLoading(true);
    setLoadError(null);
    try {
      // 1. Fetch test metadata
      try {
        const detailsRes = await learnApi.get(`/tests/${testId}`);
        if (detailsRes.data) {
          setTestDetails(detailsRes.data);
        }
      } catch (e) {
        console.warn('Failed to load specific test details, continuing with defaults');
      }

      // 2. Start attempt
      const startRes = await learnApi.post(`/tests/${testId}/start`);
      setAttemptId(startRes.data.id);
      
      // 3. Fetch authentic test questions
      const qRes = await learnApi.get(`/tests/${testId}/questions`);
      if (qRes.data && Array.isArray(qRes.data) && qRes.data.length > 0) {
        setQuestions(qRes.data);
      } else {
        setQuestions([]);
      }
    } catch (err: any) {
      console.error('Failed to load real test', err);
      const status = err.response?.status || 500;
      const message =
        err.response?.data?.message ||
        (status === 403
          ? 'Premium Mock Test! Please upgrade your Exam Pass to unlock all full-length papers.'
          : 'Unable to initialize this mock test right now. Please try again.');
      setLoadError({ status, message });
      if (status !== 403) {
        toast.error(message);
      }
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  }, [testId]);

  useEffect(() => {
    loadTest(false);
  }, [loadTest]);

  const handleSelectOption = useCallback((qId: string, optionKey: string) => {
    setAnswers(prev => ({ ...prev, [qId]: optionKey }));
  }, []);

  const handleToggleMsqOption = useCallback((qId: string, optionKey: string) => {
    setAnswers(prev => {
      const currentRaw = prev[qId] || '';
      const currentSet = new Set(
        currentRaw.split(',').map(s => s.trim().toUpperCase()).filter(Boolean)
      );
      if (currentSet.has(optionKey)) {
        currentSet.delete(optionKey);
      } else {
        currentSet.add(optionKey);
      }
      const nextVal = Array.from(currentSet).sort().join(',');
      if (!nextVal) {
        const copy = { ...prev };
        delete copy[qId];
        return copy;
      }
      return { ...prev, [qId]: nextVal };
    });
  }, []);

  const handleTextAnswerChange = useCallback((qId: string, text: string) => {
    setAnswers(prev => {
      if (!text) {
        const copy = { ...prev };
        delete copy[qId];
        return copy;
      }
      return { ...prev, [qId]: text };
    });
  }, []);

  const handleClearResponse = useCallback((qId: string) => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  }, []);

  const handleToggleMark = useCallback((qId: string) => {
    setMarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  }, []);

  // Subject switcher breakdown (useful for JEE PCM / NEET PCB)
  const subjectTabs = useMemo(() => {
    const map = new Map<string, { name: string; count: number; answered: number; firstIndex: number }>();
    questions.forEach((q, idx) => {
      const sub = q.subject || 'General';
      const isAns = !!answers[q.questionId] && answers[q.questionId].trim().length > 0;
      if (!map.has(sub)) {
        map.set(sub, { name: sub, count: 1, answered: isAns ? 1 : 0, firstIndex: idx });
      } else {
        const entry = map.get(sub)!;
        entry.count++;
        if (isAns) entry.answered++;
      }
    });
    return Array.from(map.values());
  }, [questions, answers]);

  // Sections breakdown (scoped with subject for multi-subject competitive exams)
  const sections = useMemo(() => {
    const map = new Map<string, { name: string; subject: string; count: number; firstIndex: number }>();
    questions.forEach((q, idx) => {
      const sec = q.section || 'General';
      const sub = q.subject || 'General';
      if (!map.has(sec)) {
        map.set(sec, { name: sec, subject: sub, count: 1, firstIndex: idx });
      } else {
        map.get(sec)!.count++;
      }
    });
    return Array.from(map.values());
  }, [questions]);

  const handleSubmit = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      if (attemptId) {
        await learnApi.post(`/tests/attempt/${attemptId}/submit`, answers);
      }
      if (testId && typeof window !== 'undefined') {
        sessionStorage.removeItem(`preplens_test_timer_${testId}`);
      }

      // Allow background evaluation thread to complete
      let resultData: any = null;
      try {
        await new Promise(r => setTimeout(r, 800));
        const res = await learnApi.get(`/tests/attempt/${attemptId}`);
        resultData = res.data;
      } catch (e) {}

      const totalMarks = testDetails?.totalMarks || questions.reduce((sum, q) => sum + (q.marks || 1), 0);
      const score = resultData?.score != null ? resultData.score : 0;
      const correct = resultData?.correctAnswers != null ? resultData.correctAnswers : 0;
      const wrong = resultData?.wrongAnswers != null ? resultData.wrongAnswers : 0;
      const timeTaken = resultData?.timeTakenSeconds || 0;
      let parsedSubjectStats: SubjectStat[] | undefined;
      if (resultData?.subjectStatsJson) {
        try {
          parsedSubjectStats = typeof resultData.subjectStatsJson === 'string'
            ? JSON.parse(resultData.subjectStatsJson)
            : resultData.subjectStatsJson;
        } catch {}
      }

      setScorecard({
        score,
        totalMarks,
        correctAnswers: correct,
        wrongAnswers: wrong,
        timeTakenSeconds: timeTaken,
        subjectStats: parsedSubjectStats,
      });
      setIsScorecardOpen(true);
      toast.success('🎉 Exam submitted and evaluated successfully!');
    } catch (err: any) {
      console.error('Failed to submit test', err);
      toast.error(err.response?.data?.message || 'Failed to submit test.');
    } finally {
      setIsSubmitting(false);
    }
  }, [attemptId, answers, testId, isSubmitting, testDetails, questions]);

  const enterReviewMode = async () => {
    setIsScorecardOpen(false);
    setIsReviewMode(true);
    setCurrentIdx(0);
    if (reviewQuestions.length > 0) return;
    try {
      const res = await learnApi.get(`/tests/attempt/${attemptId}/review`);
      if (res.data?.questions && Array.isArray(res.data.questions)) {
        setReviewQuestions(res.data.questions);
      }
    } catch (e) {
      console.warn('Could not fetch review details, using in-memory questions', e);
    }
  };

  const handleSyncMistakesToLocker = async () => {
    if (!attemptId || syncingMistakes) return;
    setSyncingMistakes(true);
    try {
      let rqs = reviewQuestions;
      if (rqs.length === 0) {
        const res = await learnApi.get(`/tests/attempt/${attemptId}/review`);
        if (res.data?.questions && Array.isArray(res.data.questions)) {
          rqs = res.data.questions;
          setReviewQuestions(rqs);
        }
      }
      const wrongQs = rqs.filter(q => q.isCorrect === false);
      wrongQs.forEach(q => saveMistakeToLocker(q, testDetails?.title));
      setMistakesSynced(true);
      toast.success(
        wrongQs.length > 0
          ? `Saved ${wrongQs.length} wrong question${wrongQs.length === 1 ? '' : 's'} to your Mistake Notebook!`
          : 'Zero mistakes found in this attempt!'
      );
    } catch {
      toast.error('Could not sync mistakes right now.');
    } finally {
      setSyncingMistakes(false);
    }
  };

  const activeQuestions = isReviewMode && reviewQuestions.length > 0 ? reviewQuestions : questions;
  const currentQ = activeQuestions[currentIdx];

  useEffect(() => {
    if (currentQ?.questionId) {
      setVisitedIds(prev => {
        if (prev.has(currentQ.questionId)) return prev;
        const next = new Set(prev);
        next.add(currentQ.questionId);
        return next;
      });
    }
  }, [currentQ?.questionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-600">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600 mb-4" />
        <h2 className="text-xl font-bold text-slate-800">Setting Up PrepLens Examination Environment...</h2>
        <p className="text-slate-500 text-sm mt-1">Preparing verified blueprint questions, rubrics & test timer.</p>
      </div>
    );
  }

  // Error / Premium Gate State
  if (!loading && loadError) {
    const isForbidden = loadError.status === 403;
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <PaywallModal
          isOpen={paywallOpen}
          onClose={() => setPaywallOpen(false)}
          featureName="Full CBSE Mock Test Pass"
                    featureDescription="Unlock all authentic CBSE mock tests, detailed step-by-step marking rubrics, and AI weakness analysis."
        />
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 max-w-lg w-full text-center space-y-5">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-sm border ${
            isForbidden
              ? 'bg-indigo-50 text-indigo-600 border-indigo-200/80'
              : 'bg-rose-50 text-rose-600 border-rose-200/80'
          }`}>
            {isForbidden ? <Lock className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {isForbidden ? 'Premium Mock Paper' : 'Unable to Start Exam'}
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              {loadError.message}
            </p>
          </div>
          <div className="space-y-2.5">
            {isForbidden ? (
              <button
                onClick={() => setPaywallOpen(true)}
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
              >
                Unlock Full Exam Pass
              </button>
            ) : (
              <button
                onClick={() => loadTest(true)}
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
              >
                Retry Loading Exam
              </button>
            )}
            <button
              onClick={() => navigate('/learn/tests')}
              className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
            >
              Return to Mock Tests
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Graceful Empty State
  if (!loading && questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 max-w-lg w-full text-center space-y-5">
          <div className="w-16 h-16 bg-amber-50 text-amber-600 border border-amber-200/80 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Questions Being Prepared</h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              This mock test paper is currently being updated with verified syllabus questions by PrepLens educators. Please select another active paper from your target list.
            </p>
          </div>
          <button
            onClick={() => navigate('/learn/tests')}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
          >
            Return to Mock Tests
          </button>
        </div>
      </div>
    );
  }

  const initialSeconds = (testDetails?.durationMins || 180) * 60;
  const hasOptions = currentQ?.options && Object.keys(currentQ.options).length > 0;
  const isCompetitive = isCompetitiveClassLevel(testDetails?.classLevel, testDetails?.title);
  const isNumericalQ = isNumericalQuestionType(currentQ?.questionType);
  const isMsqQ = isMsqQuestionType(currentQ?.questionType);
  const effectiveNeg = currentQ?.negativeMarks ?? testDetails?.negativeMarking ?? 0;

  const activeSubjectName = currentQ?.subject || 'General';
  const visibleSections = subjectTabs.length > 1
    ? sections.filter(s => s.subject === activeSubjectName)
    : sections;

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-slate-50 flex flex-col font-sans text-slate-900 overflow-x-hidden">
      {/* Test Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 px-4 lg:px-6 py-2.5 flex justify-between items-center gap-3 shadow-xs shrink-0">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 truncate">
              {testDetails?.title || `Mock Test #${testId?.slice(0, 8)}`}
            </h1>
            {isReviewMode && (
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-purple-200 shrink-0">
                Review Mode
              </span>
            )}
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
            {isCompetitive ? (testDetails?.classLevel || 'Competitive') : `CBSE ${testDetails?.classLevel || 'Board'}`}{' '}
            {testDetails?.testType === 'CHAPTER_WISE'
              ? 'Chapter-Wise Mastery Mock'
              : testDetails?.testType === 'DPP'
              ? 'Daily Practice Drill'
              : 'Official Exam Simulation'}
          </p>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {!isReviewMode ? (
            <>
              <TestTimer 
                initialTime={initialSeconds} 
                storageKey={`preplens_test_timer_${testId}`} 
                paused={!!scorecard}
                onTimeUp={handleSubmit} 
              />
              
              {scorecard ? (
                <button
                  type="button"
                  onClick={() => setIsScorecardOpen(true)}
                  className="px-4 sm:px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <Trophy className="w-4 h-4" />
                  <span>View Scorecard</span>
                </button>
              ) : (
                <button 
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="px-4 sm:px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Exam</span>
                  )}
                </button>
              )}
            </>
          ) : (
            <div className="flex items-center gap-2">
              {scorecard && (
                <button
                  type="button"
                  onClick={() => setIsScorecardOpen(true)}
                  className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Scorecard
                </button>
              )}
              <button
                onClick={() => navigate('/learn/tests')}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Exit to Tests
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row max-w-[1440px] w-full mx-auto p-3 lg:p-4 gap-3 lg:gap-4 overflow-x-hidden">
        
        {/* Question Panel */}
        <div className="flex-1 min-w-0 bg-white rounded-2xl shadow-xs border border-slate-200 p-4 sm:p-5 flex flex-col lg:min-h-0">
          
          {/* Subject Switcher Tabs (When multi-subject exam like JEE PCM or NEET PCB) */}
          {subjectTabs.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 pb-2.5 mb-2.5 border-b border-slate-100 shrink-0">
              <span className="text-[11px] font-extrabold text-indigo-500 uppercase tracking-wider shrink-0 mr-1">Subjects:</span>
              {subjectTabs.map(sub => {
                const isSubActive = activeSubjectName === sub.name;
                return (
                  <button
                    key={sub.name}
                    type="button"
                    onClick={() => setCurrentIdx(sub.firstIndex)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSubActive
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-indigo-50/70 hover:bg-indigo-100 text-indigo-800 border border-indigo-200/60'
                    }`}
                  >
                    <span>{sub.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                      isSubActive ? 'bg-white/20 text-white' : 'bg-white text-indigo-700'
                    }`}>
                      {sub.answered}/{sub.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Section Navigation Pills (Scoped cleanly to current subject) */}
          {visibleSections.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 pb-2.5 mb-2.5 border-b border-slate-100 shrink-0">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">Sections:</span>
              {visibleSections.map(sec => {
                const isSecActive = (currentQ?.section || 'General') === sec.name;
                return (
                  <button
                    key={sec.name}
                    onClick={() => setCurrentIdx(sec.firstIndex)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      isSecActive
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {sec.name} ({sec.count} Qs)
                  </button>
                );
              })}
            </div>
          )}

          {/* Question Metadata Header */}
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-100 gap-2 flex-wrap shrink-0">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                  {currentQ?.section || 'Section A'}
                </span>
                {currentQ?.questionType && (
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                    {isMsqQ ? 'MSQ (Multiple Correct)' : isNumericalQ ? 'Numerical Value' : currentQ.questionType}
                  </span>
                )}
                {currentQ?.syllabusTag === 'ADV_ONLY' && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200">
                    IIT Adv Exclusive
                  </span>
                )}
                {currentQ?.chapter && (
                  <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                    • {currentQ.chapter}
                  </span>
                )}
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 mt-1">
                Question {currentIdx + 1} of {activeQuestions.length}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap shrink-0">
              {isReviewMode && currentQ?.isCorrect === false && (
                <button
                  type="button"
                  onClick={() => {
                    saveMistakeToLocker(currentQ, testDetails?.title);
                    toast.success('Saved to Mistake Notebook in Revision Locker!');
                  }}
                  className="bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 px-2.5 py-1 rounded-full text-xs font-extrabold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Bookmark className="w-3 h-3" /> Save Mistake
                </button>
              )}
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-extrabold whitespace-nowrap">
                +{currentQ?.marks || 1} {currentQ?.marks === 1 ? 'Mark' : 'Marks'}
              </span>
              {effectiveNeg > 0 && (
                <span className="bg-rose-50 border border-rose-200 text-rose-700 px-2.5 py-1 rounded-full text-xs font-extrabold whitespace-nowrap">
                  -{effectiveNeg} Wrong
                </span>
              )}
            </div>
          </div>

          {/* Scrollable Question Body */}
          <div className="lg:flex-1 lg:min-h-0 lg:overflow-y-auto pr-1 space-y-4">

          {/* Case Study Passage Box (If Present) */}
          {currentQ?.casePassage && (
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-slate-800 text-sm leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-amber-900 mb-1.5">
                <FileText className="w-4 h-4 text-amber-700" />
                <span>Case Passage / Contextual Study</span>
              </div>
              <p className="whitespace-pre-line text-slate-800">{currentQ.casePassage}</p>
            </div>
          )}
          
          {/* Question Text */}
          <div className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed">
            {currentQ?.text}
          </div>

          {/* Answering Interface */}
          {!isReviewMode ? (
            hasOptions && isMsqQ ? (
              // Multiple-Correct Checkboxes (JEE Advanced MSQ)
              <div className="space-y-2.5">
                <div className="px-3.5 py-2 rounded-xl bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-900 flex items-center justify-between gap-2">
                  <span>One or More Than One Option Correct (Select all applicable options)</span>
                  <span className="font-bold text-purple-700">Partial Marking Enabled</span>
                </div>
                {Object.entries(currentQ.options).map(([key, val]) => {
                  const selectedTokens = (answers[currentQ.questionId] || '')
                    .split(',')
                    .map(s => s.trim().toUpperCase())
                    .filter(Boolean);
                  const isChecked = selectedTokens.includes(key.toUpperCase());
                  return (
                    <label
                      key={key}
                      onClick={() => handleToggleMsqOption(currentQ.questionId, key.toUpperCase())}
                      className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        isChecked
                          ? 'border-purple-600 bg-purple-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-purple-600 shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                      <span className="ml-3 text-sm sm:text-base font-bold text-purple-700 w-6 shrink-0">{key}.</span>
                      <span className="text-slate-800 text-sm sm:text-base font-medium">{val}</span>
                    </label>
                  );
                })}
              </div>
            ) : hasOptions ? (
              // Single-Choice Multiple Choice Options
              <div className="space-y-2.5">
                {Object.entries(currentQ.options).map(([key, val]) => (
                  <label 
                    key={key} 
                    className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      answers[currentQ.questionId] === key 
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-xs' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <input 
                      type="radio"
                      name={`question-${currentQ.questionId}`}
                      value={key}
                      checked={answers[currentQ.questionId] === key}
                      onChange={() => handleSelectOption(currentQ.questionId, key)}
                      className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500 shrink-0"
                    />
                    <span className="ml-3 text-sm sm:text-base font-bold text-indigo-700 w-6 shrink-0">{key}.</span>
                    <span className="text-slate-800 text-sm sm:text-base font-medium">{val}</span>
                  </label>
                ))}
              </div>
            ) : isNumericalQ ? (
              // Numerical Value Virtual Keypad (JEE Main Sec B & JEE Advanced Integers/Decimals)
              <NumericalKeypadInput
                value={answers[currentQ.questionId] || ''}
                onChange={(val) => handleTextAnswerChange(currentQ.questionId, val)}
                negativeMarks={effectiveNeg}
              />
            ) : (
              // Subjective Drafting Workspace (VSA / SA / LA / Case)
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">Draft your response / key exam points:</span>
                  <span>Word Limit: {currentQ.marks === 2 ? '30-40 words' : currentQ.marks === 3 ? '50-60 words' : '100-120 words'}</span>
                </div>
                <textarea
                  rows={6}
                  value={answers[currentQ.questionId] || ''}
                  onChange={(e) => handleTextAnswerChange(currentQ.questionId, e.target.value)}
                  placeholder="Type your answer, formulas, and step-by-step points here for self-evaluation..."
                  className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-800 text-sm placeholder-slate-400 outline-hidden transition-all"
                />
                <p className="text-xs text-slate-400">
                  Tip: After submitting the test, you will review official model answers with step-by-step marking rubrics.
                </p>
              </div>
            )
          ) : (
            // REVIEW MODE: Showing Student Answer + Model Answer & Rubric
            <div className="space-y-6">
              {/* If MCQ / MSQ */}
              {hasOptions && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Options:</p>
                    {currentQ.earnedMarks !== undefined && (
                      <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                        currentQ.isCorrect
                          ? 'bg-emerald-100 text-emerald-700'
                          : currentQ.isPartial
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-700'
                      }`}>
                        {currentQ.isPartial ? `Partial Credit: +${currentQ.earnedMarks}` : `Marks: ${currentQ.earnedMarks >= 0 ? `+${currentQ.earnedMarks}` : currentQ.earnedMarks}`}
                      </span>
                    )}
                  </div>
                  {Object.entries(currentQ.options).map(([key, val]) => {
                    const correctTokens = (currentQ.correctAnswer || '')
                      .split(',')
                      .map(s => s.trim().toUpperCase())
                      .filter(Boolean);
                    const userTokens = (currentQ.userAnswer || '')
                      .split(',')
                      .map(s => s.trim().toUpperCase())
                      .filter(Boolean);
                    const isStudentChoice = userTokens.includes(key.toUpperCase());
                    const isCorrect = correctTokens.includes(key.toUpperCase());

                    let rowClass = "p-3.5 rounded-xl border flex items-center text-sm ";
                    if (isCorrect) {
                      rowClass += "bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold";
                    } else if (isStudentChoice && !isCorrect) {
                      rowClass += "bg-rose-50 border-rose-300 text-rose-900";
                    } else {
                      rowClass += "bg-slate-50 border-slate-200 text-slate-700";
                    }

                    return (
                      <div key={key} className={rowClass}>
                        <span className="font-bold w-7">{key}.</span>
                        <span className="flex-1">{val}</span>
                        {isCorrect && (
                          <span className="flex items-center text-xs font-bold text-emerald-700 gap-1 ml-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {isStudentChoice ? 'Matched' : 'Correct Answer'}
                          </span>
                        )}
                        {isStudentChoice && !isCorrect && (
                          <span className="flex items-center text-xs font-bold text-rose-700 gap-1 ml-2">
                            <XCircle className="w-4 h-4 text-rose-600" /> Your Choice
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Numerical Answer Comparison (Review Mode) */}
              {!hasOptions && isNumericalQ && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-2xl border ${
                    currentQ.isCorrect
                      ? 'bg-emerald-50 border-emerald-200'
                      : currentQ.userAnswer
                      ? 'bg-rose-50 border-rose-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Numerical Answer:</span>
                    <p className="text-lg font-mono font-extrabold text-slate-900 mt-1">
                      {currentQ.userAnswer || 'Unattempted'}
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Official Answer Key:</span>
                    <p className="text-lg font-mono font-extrabold text-emerald-900 mt-1">
                      {currentQ.correctAnswer || currentQ.modelAnswer || '—'}
                    </p>
                  </div>
                </div>
              )}

              {/* Subjective Student Answer (if typed) */}
              {!hasOptions && !isNumericalQ && currentQ.userAnswer && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Submitted Response:</span>
                  <p className="text-slate-800 text-sm mt-1 whitespace-pre-line font-medium">{currentQ.userAnswer}</p>
                </div>
              )}

              {/* Solution & Concept Analysis */}
              <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-800">
                      {isCompetitive ? 'Official Solution & Concept Analysis' : 'CBSE Model Answer & Marking Rubric'}
                    </span>
                  </div>
                  <button
                    onClick={() => setShowMarkingScheme(s => !s)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    {showMarkingScheme ? <><ChevronUp className="w-3.5 h-3.5" /> Collapse</> : <><ChevronDown className="w-3.5 h-3.5" /> Expand</>}
                  </button>
                </div>

                {showMarkingScheme && (
                  <div className="space-y-3 text-sm text-slate-800">
                    {currentQ.modelAnswer ? (
                      <div>
                        <p className="text-xs font-bold text-indigo-900 mb-1">Model Answer:</p>
                        <p className="whitespace-pre-line text-slate-900 bg-white p-3.5 rounded-xl border border-indigo-100">
                          {currentQ.modelAnswer}
                        </p>
                      </div>
                    ) : null}

                    {currentQ.explanation && (
                      <div>
                        <p className="text-xs font-bold text-indigo-900 mb-1">Pedagogical Explanation & Concept:</p>
                        <p className="whitespace-pre-line text-slate-700 bg-white p-3.5 rounded-xl border border-indigo-100">
                          {currentQ.explanation}
                        </p>
                      </div>
                    )}

                    {currentQ.markingSchemeJson && (
                      <div>
                        <p className="text-xs font-bold text-indigo-900 mb-1">Step-Wise Marking Breakdown:</p>
                        <p className="whitespace-pre-line text-slate-700 bg-white p-3.5 rounded-xl border border-indigo-100 font-mono text-xs">
                          {currentQ.markingSchemeJson}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          </div>

          {/* Navigation Controls (Always anchored visibly at bottom of Question Panel) */}
          <div className="mt-3 pt-3 flex flex-wrap justify-between items-center gap-2 border-t border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(i => i - 1)}
                className="px-4 py-2.5 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold text-sm disabled:opacity-40 flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              {!isReviewMode && currentQ && (
                <>
                  <button
                    type="button"
                    disabled={!answers[currentQ.questionId]}
                    onClick={() => handleClearResponse(currentQ.questionId)}
                    className="px-3.5 py-2.5 border border-slate-200 text-slate-600 rounded-xl hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 font-semibold text-xs disabled:opacity-40 flex items-center gap-1.5 transition-colors"
                  >
                    <Eraser className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Clear Response</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleToggleMark(currentQ.questionId);
                      if (currentIdx < activeQuestions.length - 1) {
                        setCurrentIdx(i => i + 1);
                      }
                    }}
                    className={`px-3.5 py-2.5 border rounded-xl font-semibold text-xs flex items-center gap-1.5 transition-colors ${
                      markedIds.has(currentQ.questionId)
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{markedIds.has(currentQ.questionId) ? 'Unmark' : 'Mark for Review & Next'}</span>
                  </button>
                </>
              )}
            </div>
            <button
              disabled={currentIdx === activeQuestions.length - 1}
              onClick={() => setCurrentIdx(i => i + 1)}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 font-semibold text-sm disabled:opacity-40 flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>{isReviewMode ? 'Next Question' : 'Save & Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sidebar Nav */}
        <QuestionPalette 
          questions={activeQuestions}
          answers={answers}
          visitedIds={visitedIds}
          markedIds={markedIds}
          currentIdx={currentIdx}
          isReviewMode={isReviewMode}
          setCurrentIdx={setCurrentIdx}
        />
      </div>

      {/* Modern Interactive Scorecard Modal */}
      {isScorecardOpen && scorecard && (() => {
        const attemptedCount = scorecard.correctAnswers + scorecard.wrongAnswers;
        const skippedCount = Math.max(0, activeQuestions.length - attemptedCount);
        const accuracyPct = attemptedCount > 0
          ? Math.round((scorecard.correctAnswers / attemptedCount) * 100)
          : 0;
        return (
        <div className="fixed inset-0 z-50 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-6 space-y-3.5 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border-2 border-emerald-200 rounded-full flex items-center justify-center shadow-xs">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Assessment Completed
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Your Scorecard</h2>
              <p className="text-slate-500 text-xs sm:text-sm line-clamp-1">
                {testDetails?.title || 'CBSE Real Format Examination'}
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-3.5">
              <div className="text-2xl sm:text-3xl font-black text-indigo-600">
                {scorecard.score} <span className="text-base sm:text-lg font-medium text-slate-400">/ {scorecard.totalMarks} Marks</span>
              </div>
              {isCompetitive && (() => {
                const pred = predictCompetitiveOutcome(
                  testDetails?.classLevel || testDetails?.title || '',
                  scorecard.score,
                  scorecard.totalMarks
                );
                return (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold border border-indigo-200">
                      Est. {pred.predictedPercentile}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-extrabold border border-amber-200">
                      {pred.predictedRankBand}
                    </span>
                    <p className="w-full text-[11px] font-semibold text-slate-600">{pred.targetZone}</p>
                  </div>
                );
              })()}
            </div>

            <div className="grid grid-cols-4 gap-2">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-2.5 text-center">
                <div className="text-emerald-700 font-extrabold text-lg">{scorecard.correctAnswers}</div>
                <div className="text-emerald-600 text-[11px] font-bold">Correct</div>
              </div>

              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-2.5 text-center">
                <div className="text-rose-700 font-extrabold text-lg">{scorecard.wrongAnswers}</div>
                <div className="text-rose-600 text-[11px] font-bold">Incorrect</div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-xl p-2.5 text-center">
                <div className="text-slate-700 font-extrabold text-lg">{skippedCount}</div>
                <div className="text-slate-500 text-[11px] font-bold">Skipped</div>
              </div>

              <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-2.5 text-center">
                <div className="text-indigo-700 font-extrabold text-lg">{accuracyPct}%</div>
                <div className="text-indigo-600 text-[11px] font-bold">Accuracy</div>
              </div>
            </div>

            {scorecard.subjectStats && scorecard.subjectStats.length > 1 && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-left space-y-1.5">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Subject-Wise Split</p>
                <div className="space-y-1">
                  {scorecard.subjectStats.map((st) => (
                    <div key={st.subject} className="flex items-center justify-between text-xs bg-white px-3 py-1.5 rounded-xl border border-slate-100">
                      <span className="font-bold text-slate-800">{st.subject}</span>
                      <div className="flex items-center gap-3 text-[11px]">
                        <span className="text-emerald-600 font-bold">+{st.correct}✓</span>
                        <span className="text-rose-600 font-bold">{st.wrong}✗</span>
                        <span className="font-extrabold text-indigo-700">{st.netScore}/{st.maxMarks}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2 pt-1">
              {scorecard.wrongAnswers > 0 && (
                <button
                  type="button"
                  disabled={syncingMistakes || mistakesSynced}
                  onClick={handleSyncMistakesToLocker}
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 disabled:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Bookmark className="w-4 h-4" />
                  <span>
                    {syncingMistakes
                      ? 'Syncing Wrong Answers...'
                      : mistakesSynced
                      ? 'Saved to Mistake Notebook ✓'
                      : `Auto-Save ${scorecard.wrongAnswers} Mistake${scorecard.wrongAnswers === 1 ? '' : 's'} to Revision Locker`}
                  </span>
                </button>
              )}
              <button
                onClick={enterReviewMode}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Review Model Answers & Marking Scheme</span>
              </button>

              <div className="flex gap-2.5">
                <button
                  onClick={() => navigate('/learn/tests')}
                  className="flex-1 py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Back to Tests
                </button>
                <button
                  onClick={() => navigate('/learn/syllabus')}
                  className="flex-1 py-2 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Study Roadmap
                </button>
              </div>
            </div>
          </div>
        </div>
        );
      })()}
    </div>
  );
}
