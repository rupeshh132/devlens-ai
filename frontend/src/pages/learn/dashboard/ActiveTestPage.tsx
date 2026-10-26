import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Trophy, ArrowLeft, ArrowRight, BookOpen, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { learnApi } from '../../../lib/learn-api';

interface Question {
  questionId: string;
  text: string;
  marks: number;
  section?: string;
  options: Record<string, string>;
}

interface TestDetails {
  id: string;
  title: string;
  durationMins: number;
  totalMarks: number;
  negativeMarking?: number;
  isFree?: boolean;
}

interface SubmissionResult {
  score: number;
  totalMarks: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeTakenSeconds: number;
}

// 1. Resilient Test Timer with Session Storage Preservation
const TestTimer = React.memo(({ 
  initialTime, 
  storageKey, 
  onTimeUp 
}: { 
  initialTime: number; 
  storageKey?: string; 
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
  }, [storageKey]);

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
    <div className={`flex items-center text-lg font-mono font-bold px-4 py-2 rounded-xl border shadow-sm transition-colors ${
      isLowTime 
        ? 'text-red-700 bg-red-50 border-red-300 animate-pulse' 
        : 'text-indigo-700 bg-indigo-50 border-indigo-200/80'
    }`}>
      <Clock className={`w-5 h-5 mr-2 ${isLowTime ? 'text-red-600' : 'text-indigo-600'}`} />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
});

// 2. High Performance Question Palette
const QuestionPalette = React.memo(({ 
  questions, 
  answers, 
  currentIdx, 
  setCurrentIdx 
}: { 
  questions: Question[]; 
  answers: Record<string, string>; 
  currentIdx: number; 
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>; 
}) => {
  return (
    <div className="w-80 bg-white rounded-3xl shadow-sm border border-slate-200 p-6 flex flex-col shrink-0">
      <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-slate-500">Question Palette</h3>
      <div className="grid grid-cols-5 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
        {questions.map((q, idx) => {
          const isAnswered = !!answers[q.questionId];
          const isCurrent = currentIdx === idx;
          
          let btnClass = "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border-2 transition-all ";
          if (isCurrent) {
            btnClass += "border-indigo-600 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-200";
          } else if (isAnswered) {
            btnClass += "border-emerald-500 bg-emerald-500 text-white shadow-sm";
          } else {
            btnClass += "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100";
          }

          return (
            <button 
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={btnClass}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
      
      <div className="mt-auto space-y-2.5 pt-6 border-t border-slate-100">
        <div className="flex items-center text-xs font-semibold text-slate-600">
          <div className="w-3.5 h-3.5 rounded-md bg-emerald-500 mr-2.5"></div> Answered ({Object.keys(answers).length})
        </div>
        <div className="flex items-center text-xs font-semibold text-slate-600">
          <div className="w-3.5 h-3.5 rounded-md bg-slate-200 mr-2.5"></div> Unanswered ({questions.length - Object.keys(answers).length})
        </div>
      </div>
    </div>
  );
});

export function ActiveTestPage() {
  const { testId } = useParams();
  const navigate = useNavigate();
  
  const [testDetails, setTestDetails] = useState<TestDetails | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [attemptId, setAttemptId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scorecard, setScorecard] = useState<SubmissionResult | null>(null);
  const [isScorecardOpen, setIsScorecardOpen] = useState(false);

  useEffect(() => {
    const loadTest = async () => {
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
          setQuestions([]); // Empty state handled elegantly without elementary fallback questions
        }
      } catch (err: any) {
        console.error('Failed to load real test', err);
        toast.error(err.response?.data?.message || 'Failed to initialize test.');
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };
    
    loadTest();
  }, [testId]);

  const handleSelectOption = useCallback((qId: string, optionKey: string) => {
    setAnswers(prev => ({ ...prev, [qId]: optionKey }));
  }, []);

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
        await new Promise(r => setTimeout(r, 700));
        const res = await learnApi.get(`/tests/attempt/${attemptId}`);
        resultData = res.data;
      } catch (e) {}

      const totalMarks = testDetails?.totalMarks || questions.reduce((sum, q) => sum + (q.marks || 4), 0);
      const score = resultData?.score != null ? resultData.score : 0;
      const correct = resultData?.correctAnswers != null ? resultData.correctAnswers : 0;
      const wrong = resultData?.wrongAnswers != null ? resultData.wrongAnswers : 0;
      const timeTaken = resultData?.timeTakenSeconds || 0;

      setScorecard({
        score,
        totalMarks,
        correctAnswers: correct,
        wrongAnswers: wrong,
        timeTakenSeconds: timeTaken,
      });
      setIsScorecardOpen(true);
      toast.success('🎉 Test submitted and evaluated successfully!');
    } catch (err: any) {
      console.error('Failed to submit test', err);
      toast.error(err.response?.data?.message || 'Failed to submit test.');
      setIsSubmitting(false);
    }
  }, [attemptId, answers, testId, isSubmitting, testDetails, questions]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-600">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600 mb-4" />
        <h2 className="text-xl font-bold text-slate-800">Setting Up Test Environment...</h2>
        <p className="text-slate-500 text-sm mt-1">Preparing verified assessment questions.</p>
      </div>
    );
  }

  // Graceful Empty State (Eliminates confusing elementary fallback questions for senior students)
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

  const currentQ = questions[currentIdx];
  const initialSeconds = (testDetails?.durationMins || 45) * 60;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Test Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 px-6 py-4 flex justify-between items-center shadow-xs">
        <div>
          <h1 className="text-lg md:text-xl font-extrabold text-slate-900 line-clamp-1">
            {testDetails?.title || `Mock Test #${testId?.slice(0, 8)}`}
          </h1>
          <p className="text-xs text-slate-500 font-medium">PrepLens Verified Assessment Engine</p>
        </div>
        
        <div className="flex items-center gap-4">
          <TestTimer 
            initialTime={initialSeconds} 
            storageKey={`preplens_test_timer_${testId}`} 
            onTimeUp={handleSubmit} 
          />
          
          <button 
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-sm rounded-xl transition-colors shadow-sm flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Test</span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
        
        {/* Question Panel */}
        <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {currentQ?.section ? `Section: ${currentQ.section}` : 'General Section'}
              </span>
              <h2 className="text-base font-extrabold text-slate-800">
                Question {currentIdx + 1} of {questions.length}
              </h2>
            </div>
            <span className="bg-indigo-50 border border-indigo-200/80 text-indigo-700 px-3 py-1 rounded-full text-xs font-extrabold">
              +{currentQ?.marks || 4} Marks
            </span>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-900 font-medium mb-8 leading-relaxed">
            {currentQ?.text}
          </div>

          <div className="space-y-3.5">
            {currentQ?.options && Object.entries(currentQ.options).map(([key, val]) => (
              <label 
                key={key} 
                className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
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
                  className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                />
                <span className="ml-3 text-base font-bold text-indigo-700 w-7">{key}.</span>
                <span className="text-slate-800 text-sm md:text-base font-medium">{val}</span>
              </label>
            ))}
          </div>

          <div className="mt-auto pt-8 flex justify-between items-center border-t border-slate-100">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(i => i - 1)}
              className="px-5 py-2.5 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold text-sm disabled:opacity-40 flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              disabled={currentIdx === questions.length - 1}
              onClick={() => setCurrentIdx(i => i + 1)}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 font-semibold text-sm disabled:opacity-40 flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Save & Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Memoized Sidebar Nav */}
        <QuestionPalette 
          questions={questions}
          answers={answers}
          currentIdx={currentIdx}
          setCurrentIdx={setCurrentIdx}
        />
      </div>

      {/* Modern Interactive Scorecard Modal */}
      {isScorecardOpen && scorecard && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 md:p-8 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 border-2 border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Trophy className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Assessment Completed
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-3">Your Scorecard</h2>
              <p className="text-slate-500 text-sm mt-1">
                {testDetails?.title || 'Diagnostic Assessment'}
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-5">
              <div className="text-3xl font-black text-indigo-600">
                {scorecard.score} <span className="text-lg font-medium text-slate-400">/ {scorecard.totalMarks} Marks</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 text-center">
                <div className="text-emerald-700 font-extrabold text-xl">{scorecard.correctAnswers}</div>
                <div className="text-emerald-600 text-xs font-bold mt-0.5">Correct</div>
              </div>

              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-3 text-center">
                <div className="text-rose-700 font-extrabold text-xl">{scorecard.wrongAnswers}</div>
                <div className="text-rose-600 text-xs font-bold mt-0.5">Incorrect</div>
              </div>

              <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-3 text-center">
                <div className="text-indigo-700 font-extrabold text-xl">
                  {scorecard.correctAnswers + scorecard.wrongAnswers > 0
                    ? Math.round((scorecard.correctAnswers / (scorecard.correctAnswers + scorecard.wrongAnswers)) * 100)
                    : 0}%
                </div>
                <div className="text-indigo-600 text-xs font-bold mt-0.5">Accuracy</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => navigate('/learn/tests')}
                className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
              >
                Back to Tests
              </button>
              <button
                onClick={() => navigate('/learn/syllabus')}
                className="flex-1 py-3 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-sm rounded-xl transition-colors"
              >
                Study Roadmap
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
