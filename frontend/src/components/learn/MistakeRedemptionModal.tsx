import { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  X, Flame, CheckCircle2, XCircle, Trophy, ArrowRight, ShieldCheck, Crown, RefreshCw
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { learnApi } from '../../lib/learn-api';
import { hasAuthToken, updateLockerItem } from '../../lib/lockerStorage';

export interface RedemptionQuestionItem {
  id: string; // locker item UUID or questionId
  lockerItemId?: string; // only present when backed by a Locker item
  title?: string;
  subject?: string;
  chapter?: string;
  questionText: string;
  questionType?: string;
  options?: Record<string, string> | string[];
  correctAnswer?: string;
  modelAnswer?: string;
  explanation?: string;
  reviewStage?: number;
  consecutiveCorrect?: number;
}

interface MistakeRedemptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  questions: RedemptionQuestionItem[];
  onProgressUpdated?: () => void;
  onUpgradeRequested?: () => void;
}

function normalizeOptionsList(raw?: Record<string, string> | string[]): { key: string; label: string }[] {
  if (!raw) return [];
  const cleanLabel = (val: string) => String(val).trim().replace(/^[A-F][).:\]]\s+/i, '');
  if (Array.isArray(raw)) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    return raw.map((val, idx) => ({
      key: letters[idx] || String(idx + 1),
      label: cleanLabel(val),
    }));
  }
  return Object.entries(raw).map(([key, val]) => ({
    key: key.trim(),
    label: cleanLabel(val),
  }));
}

function extractCleanSolution(raw?: string): string {
  if (!raw) return '';
  const modelIdx = raw.indexOf('**Model Solution:**');
  if (modelIdx !== -1) {
    return raw.slice(modelIdx).trim();
  }
  const conceptIdx = raw.indexOf('**Concept & Fix Note:**');
  if (conceptIdx !== -1) {
    return raw.slice(conceptIdx).trim();
  }
  return raw;
}

function evaluateRedemptionAnswer(
  q: RedemptionQuestionItem,
  selectedKeyOrInput: string,
  optionsList: { key: string; label: string }[]
): boolean {
  const corr = (q.correctAnswer || '').trim();
  const user = selectedKeyOrInput.trim();
  if (!corr || !user) return false;
  if (user.toLowerCase() === corr.toLowerCase()) return true;

  // Match either option key ('B') or option text ('3.26 cm' / 'B) Nitrogen dioxide')
  const matchedOpt = optionsList.find(o => o.key.toLowerCase() === user.toLowerCase());
  if (matchedOpt) {
    const lbl = matchedOpt.label.trim().toLowerCase();
    const cLow = corr.toLowerCase();
    if (lbl === cLow || lbl.startsWith(`${cLow})`) || lbl.startsWith(`${cLow}.`)) return true;
  }

  const uNum = Number(user);
  const cNum = Number(corr);
  if (!Number.isNaN(uNum) && !Number.isNaN(cNum) && Number.isFinite(uNum) && Number.isFinite(cNum)) {
    return Math.abs(uNum - cNum) <= 0.01;
  }

  return false;
}

export function MistakeRedemptionModal({
  isOpen,
  onClose,
  title = 'Mistake Redemption Drill',
  questions,
  onProgressUpdated,
  onUpgradeRequested,
}: MistakeRedemptionModalProps) {
  const [deck, setDeck] = useState<RedemptionQuestionItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [checkedState, setCheckedState] = useState<'IDLE' | 'RIGHT' | 'WRONG'>('IDLE');
  const [healedCountInSession, setHealedCountInSession] = useState(0);
  const [redeemedCount, setRedeemedCount] = useState(0);
  const [missedCount, setMissedCount] = useState(0);
  const [savingReview, setSavingReview] = useState(false);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      setDeck(questions);
      setIdx(0);
      setUserInput('');
      setCheckedState('IDLE');
      setHealedCountInSession(0);
      setRedeemedCount(0);
      setMissedCount(0);
    }
    wasOpenRef.current = isOpen;
  }, [isOpen, questions]);

  const isCompleted = deck.length > 0 && idx >= deck.length;
  const current = !isCompleted ? deck[idx] : undefined;

  const optionsList = useMemo(() => {
    return current ? normalizeOptionsList(current.options) : [];
  }, [current]);

  if (!isOpen) return null;

  const persistOutcome = async (item: RedemptionQuestionItem, remembered: boolean) => {
    const prevStage = item.reviewStage ?? 0;
    const prevConsec = item.consecutiveCorrect ?? 0;
    const nextConsec = remembered ? prevConsec + 1 : 0;
    const nextStage = remembered ? (nextConsec >= 2 || prevStage >= 3 ? 4 : Math.min(3, prevStage + 1)) : 1;

    if (item.lockerItemId) {
      updateLockerItem(item.lockerItemId, {
        reviewStage: nextStage,
        consecutiveCorrect: nextConsec,
        lastReviewedAt: new Date().toISOString(),
      });

      if (hasAuthToken()) {
        setSavingReview(true);
        try {
          const res = await learnApi.post(`/locker/${item.lockerItemId}/review`, { remembered });
          if (res.data && typeof res.data.reviewStage === 'number') {
            updateLockerItem(item.lockerItemId, {
              reviewStage: res.data.reviewStage,
              consecutiveCorrect: res.data.consecutiveCorrect,
              nextReviewAt: res.data.nextReviewAt,
              lastReviewedAt: res.data.lastReviewedAt,
            });
            if (res.data.reviewStage >= 4) {
              setHealedCountInSession(c => c + 1);
            }
          }
        } catch {
          // offline fallback already updated locally
        } finally {
          setSavingReview(false);
        }
      } else if (nextStage >= 4) {
        setHealedCountInSession(c => c + 1);
      }
      onProgressUpdated?.();
    }
  };

  const handleCheckAnswer = async () => {
    if (!current || !userInput.trim()) return;
    const ok = evaluateRedemptionAnswer(current, userInput, optionsList);
    setCheckedState(ok ? 'RIGHT' : 'WRONG');
    if (ok) {
      setRedeemedCount(c => c + 1);
    } else {
      setMissedCount(c => c + 1);
    }
    await persistOutcome(current, ok);
  };

  const handleSelfCheck = async (remembered: boolean) => {
    if (!current) return;
    setCheckedState(remembered ? 'RIGHT' : 'WRONG');
    if (remembered) {
      setRedeemedCount(c => c + 1);
    } else {
      setMissedCount(c => c + 1);
    }
    await persistOutcome(current, remembered);
  };

  const handleNext = () => {
    setUserInput('');
    setCheckedState('IDLE');
    setIdx(prev => prev + 1);
  };

  const hasInteractiveKey = Boolean(
    current &&
      (optionsList.length > 0 || (current.correctAnswer && current.correctAnswer.trim().length > 0))
  );

  return createPortal(
    <div className="fixed inset-0 z-[75] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm print:hidden">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 px-5 py-4 text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-amber-500/25 border border-amber-400/40 flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 text-amber-300" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-extrabold text-white truncate">{title}</h3>
              <p className="text-[11px] text-amber-200 font-medium">
                {deck.length === 0
                  ? 'Zero errors pending redemption'
                  : isCompleted
                  ? `Drill Complete • ${redeemedCount}/${deck.length} Redeemed`
                  : `Error ${idx + 1} of ${deck.length} • Solve cleanly twice to mark HEALED`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close drill"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {deck.length > 0 && (
          <div className="w-full h-1.5 bg-slate-100">
            <div
              className="h-full bg-amber-500 transition-all duration-300"
              style={{
                width: `${Math.min(100, Math.round(((isCompleted ? deck.length : idx) / deck.length) * 100))}%`,
              }}
            />
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {deck.length === 0 ? (
            <div className="py-10 text-center space-y-2">
              <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-base font-extrabold text-slate-900">All Caught Up!</h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                You have no due mistakes waiting for redemption right now. Solve mock tests or PYQs to build your mastery loop.
              </p>
            </div>
          ) : isCompleted ? (
            <div className="py-5 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">Redemption Drill Complete!</h4>
                <p className="text-sm text-slate-600 mt-1">
                  You redeemed <strong className="text-emerald-700">{redeemedCount}</strong> error
                  {redeemedCount === 1 ? '' : 's'} cleanly
                  {healedCountInSession > 0 ? ` (${healedCountInSession} permanently marked HEALED ✓)` : ''}.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="text-2xl font-black text-emerald-700">{redeemedCount}</div>
                  <div className="text-[11px] font-bold text-emerald-800 uppercase">Redeemed ✓</div>
                </div>
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
                  <div className="text-2xl font-black text-rose-700">{missedCount}</div>
                  <div className="text-[11px] font-bold text-rose-800 uppercase">Day-1 Reset</div>
                </div>
                <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200">
                  <div className="text-2xl font-black text-indigo-700">{healedCountInSession}</div>
                  <div className="text-[11px] font-bold text-indigo-800 uppercase">Healed</div>
                </div>
              </div>

              {onUpgradeRequested && (
                <div className="max-w-md mx-auto p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-left">
                  <div className="text-xs text-amber-950">
                    <span className="font-extrabold flex items-center gap-1">
                      <Crown className="w-3.5 h-3.5 text-amber-600" /> Want Unlimited Daily Drills?
                    </span>
                    <span className="text-amber-800">Pro members get unlimited Redemption & Custom Tests daily.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onUpgradeRequested();
                    }}
                    className="shrink-0 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold cursor-pointer"
                  >
                    View Pro
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setDeck(questions);
                    setIdx(0);
                    setUserInput('');
                    setCheckedState('IDLE');
                    setRedeemedCount(0);
                    setMissedCount(0);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Re-Run Drill
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : current ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {current.subject && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {current.subject}
                    </span>
                  )}
                  {current.chapter && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {current.chapter}
                    </span>
                  )}
                </div>
                {typeof current.consecutiveCorrect === 'number' && (
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    Streak: {current.consecutiveCorrect}/2 to Heal
                  </span>
                )}
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm sm:text-base font-semibold text-slate-900 whitespace-pre-line leading-relaxed">
                  {current.questionText}
                </p>
              </div>

              {/* Interactive MCQ Options */}
              {optionsList.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {optionsList.map((opt) => {
                    const isSelected = userInput === opt.key;
                    const isKey = checkedState !== 'IDLE' && evaluateRedemptionAnswer(current, opt.key, optionsList);
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        disabled={checkedState !== 'IDLE'}
                        onClick={() => setUserInput(opt.key)}
                        className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-2.5 ${
                          checkedState !== 'IDLE'
                            ? isKey
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                              : isSelected
                              ? 'bg-rose-50 border-rose-400 text-rose-900 font-bold'
                              : 'bg-white border-slate-200 text-slate-500'
                            : isSelected
                            ? 'bg-indigo-50 border-indigo-600 text-indigo-950 font-bold ring-1 ring-indigo-500/30 cursor-pointer'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 cursor-pointer'
                        }`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                          {opt.key}
                        </span>
                        <span className="pt-0.5">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Numerical Answer Box when no options */}
              {optionsList.length === 0 && hasInteractiveKey && (
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1.5">Enter Numerical Answer:</label>
                  <input
                    type="text"
                    disabled={checkedState !== 'IDLE'}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="e.g. 2.50 or 14"
                    className="w-full sm:w-64 px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 font-mono text-sm font-bold outline-none"
                  />
                </div>
              )}

              {/* Verification Result & Solution Drawer */}
              {checkedState !== 'IDLE' && (
                <div className={`p-4 rounded-2xl border space-y-2 ${
                  checkedState === 'RIGHT' ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
                }`}>
                  <div className={`flex items-center gap-2 text-sm font-extrabold ${
                    checkedState === 'RIGHT' ? 'text-emerald-900' : 'text-rose-900'
                  }`}>
                    {checkedState === 'RIGHT' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Redeemed Cleanly!
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" /> Missed Again — Scheduled Back to Day 1
                      </>
                    )}
                  </div>
                  {current.correctAnswer && (
                    <p className="text-xs font-bold text-slate-800">Correct Key: {current.correctAnswer}</p>
                  )}
                  {(current.modelAnswer || current.explanation) && (
                    <div className="prose prose-xs max-w-none text-slate-700 text-xs leading-relaxed">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {extractCleanSolution(current.modelAnswer || current.explanation || '')}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* Sticky Modal Action Footer (never clipped at 1280x800) */}
        {!isCompleted && current && (
          <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5 shrink-0">
            {checkedState === 'IDLE' ? (
              hasInteractiveKey ? (
                <button
                  type="button"
                  disabled={!userInput.trim() || savingReview}
                  onClick={handleCheckAnswer}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs sm:text-sm font-bold cursor-pointer"
                >
                  Verify Answer
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    disabled={savingReview}
                    onClick={() => handleSelfCheck(false)}
                    className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold cursor-pointer"
                  >
                    Still Tricky (Reset Day 1)
                  </button>
                  <button
                    type="button"
                    disabled={savingReview}
                    onClick={() => handleSelfCheck(true)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer"
                  >
                    Solved Cleanly ✓
                  </button>
                </>
              )
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>{idx + 1 >= deck.length ? 'Finish Drill' : 'Next Error'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
