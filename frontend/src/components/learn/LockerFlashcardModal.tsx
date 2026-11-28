import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  X, RotateCw, CheckCircle2, RefreshCw, Sparkles, Trophy, Layers, Lightbulb, AlertTriangle
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { LockerItem } from '../../lib/lockerStorage';
import { updateLockerItem } from '../../lib/lockerStorage';

interface LockerFlashcardModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LockerItem[];
  deckTitle?: string;
  onCardsUpdated?: () => void;
}

function extractPromptAndAnswer(item: LockerItem): { frontPrompt: string; backAnswer: string } {
  const raw = (item.content || '').trim();
  const isMistake = item.meta?.mistake === true || item.tags.some(t => t.toLowerCase().includes('mistake'));

  if (isMistake || raw.includes('**Model Answer:**') || raw.includes('**Correct Answer:**') || raw.includes('**Model Solution:**')) {
    const splitMarkers = ['\n\n**Your Wrong Answer:**', '\n\n**Correct Answer:**', '\n\n**Model Answer:**', '\n\n**Model Solution:**'];
    let cutIdx = raw.length;
    for (const marker of splitMarkers) {
      const idx = raw.indexOf(marker);
      if (idx !== -1 && idx < cutIdx) {
        cutIdx = idx;
      }
    }
    const front = raw.slice(0, cutIdx).replace(/^\*\*Question:\*\*\s*/i, '').trim();
    return {
      frontPrompt: front || item.title,
      backAnswer: raw,
    };
  }

  return {
    frontPrompt: item.type === 'FORMULA'
      ? `Recall the exact formula, symbols & SI units for:`
      : item.type === 'QUESTION'
      ? `Solve this question cleanly before flipping:`
      : `Recall the key concepts & takeaways for:`,
    backAnswer: raw,
  };
}

export function LockerFlashcardModal({
  isOpen,
  onClose,
  items,
  deckTitle = 'Active Recall Deck',
  onCardsUpdated,
}: LockerFlashcardModalProps) {
  const [deck, setDeck] = useState<LockerItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<string[]>([]);
  const [shakyIds, setShakyIds] = useState<string[]>([]);
  const wasOpenRef = useRef(false);

  // Initialize session state ONLY when modal transitions from closed -> open (never reset on parent re-renders)
  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      setDeck(items);
      setCurrentIdx(0);
      setIsFlipped(false);
      setMasteredIds([]);
      setShakyIds([]);
    }
    wasOpenRef.current = isOpen;
  }, [isOpen, items]);

  const isCompleted = deck.length > 0 && currentIdx >= deck.length;
  const currentCard = !isCompleted ? deck[currentIdx] : undefined;

  const { frontPrompt, backAnswer } = useMemo(() => {
    if (!currentCard) return { frontPrompt: '', backAnswer: '' };
    return extractPromptAndAnswer(currentCard);
  }, [currentCard]);

  const handleAssess = useCallback((remembered: boolean) => {
    if (!currentCard) return;
    const prevCount = Number(currentCard.meta?.recallCount || 0);
    const nextMeta = {
      ...(currentCard.meta || {}),
      recallCount: remembered ? prevCount + 1 : 0,
      lastRecall: remembered ? 'MASTERED' : 'SHAKY',
      lastReviewedAt: new Date().toISOString(),
    };
    updateLockerItem(currentCard.id, { meta: nextMeta });
    setDeck(prev => prev.map(c => (c.id === currentCard.id ? { ...c, meta: nextMeta } : c)));
    onCardsUpdated?.();

    if (remembered) {
      setMasteredIds(prev => (prev.includes(currentCard.id) ? prev : [...prev, currentCard.id]));
      setShakyIds(prev => prev.filter(id => id !== currentCard.id));
    } else {
      setShakyIds(prev => (prev.includes(currentCard.id) ? prev : [...prev, currentCard.id]));
    }

    setIsFlipped(false);
    setCurrentIdx(prev => prev + 1);
  }, [currentCard, onCardsUpdated]);

  // Keyboard shortcuts: Space flips, Esc closes
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === ' ' && !isCompleted) {
        e.preventDefault();
        setIsFlipped(v => !v);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, isCompleted, onClose]);

  if (!isOpen) return null;

  const restartShakyOnly = () => {
    const shakyCards = items.filter(i => shakyIds.includes(i.id));
    setDeck(shakyCards.length > 0 ? shakyCards : items);
    setCurrentIdx(0);
    setIsFlipped(false);
    setMasteredIds([]);
    setShakyIds([]);
  };

  const restartAll = () => {
    setDeck(items);
    setCurrentIdx(0);
    setIsFlipped(false);
    setMasteredIds([]);
    setShakyIds([]);
  };

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm print:hidden">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-5 py-4 text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/25 border border-indigo-400/30 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-indigo-200" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-extrabold text-white truncate">{deckTitle}</h3>
              <p className="text-[11px] text-indigo-200 font-medium">
                {deck.length === 0
                  ? 'No cards available'
                  : isCompleted
                  ? `Session Complete • ${masteredIds.length}/${deck.length} Mastered`
                  : `Card ${currentIdx + 1} of ${deck.length} • Press Space to flip`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close flashcards"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slim Progress Track */}
        {deck.length > 0 && (
          <div className="w-full h-1.5 bg-slate-100">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${Math.min(100, Math.round(((isCompleted ? deck.length : currentIdx) / deck.length) * 100))}%` }}
            />
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7">
          {deck.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <Layers className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-bold text-slate-700">No saved cards match this filter.</p>
              <p className="text-xs text-slate-500">Save formulas or mistakes first to run an Active Recall drill.</p>
            </div>
          ) : isCompleted ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">Active Recall Complete!</h4>
                <p className="text-sm text-slate-600 mt-1">
                  You recalled <strong className="text-emerald-700">{masteredIds.length}</strong> of{' '}
                  <strong>{deck.length}</strong> cards cleanly.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="text-2xl font-black text-emerald-700">{masteredIds.length}</div>
                  <div className="text-[11px] font-bold text-emerald-800 uppercase">Got It Cleanly</div>
                </div>
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="text-2xl font-black text-amber-700">{shakyIds.length}</div>
                  <div className="text-[11px] font-bold text-amber-800 uppercase">Needs Revisit</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {shakyIds.length > 0 && (
                  <button
                    type="button"
                    onClick={restartShakyOnly}
                    className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Re-Drill {shakyIds.length} Shaky Cards
                  </button>
                )}
                <button
                  type="button"
                  onClick={restartAll}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" /> Restart Full Deck
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : currentCard ? (
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {currentCard.type}
                  </span>
                  {currentCard.meta?.subject && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {currentCard.meta.subject}
                    </span>
                  )}
                  {Number(currentCard.meta?.recallCount || 0) > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Recalled {Number(currentCard.meta?.recallCount)}×
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {isFlipped ? 'Answer & Notes' : 'Recall Prompt'}
                </span>
              </div>

              {/* Card Container */}
              <div
                onClick={() => !isFlipped && setIsFlipped(true)}
                className={`min-h-[240px] rounded-2xl border p-5 sm:p-6 transition-all ${
                  isFlipped
                    ? 'bg-slate-50/70 border-indigo-200'
                    : 'bg-gradient-to-br from-indigo-50/60 via-white to-blue-50/40 border-slate-200 hover:border-indigo-300 cursor-pointer shadow-xs'
                }`}
              >
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
                  {currentCard.title}
                </h4>

                {!isFlipped ? (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      {frontPrompt}
                    </p>
                    <div className="pt-4 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setIsFlipped(true)}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold inline-flex items-center gap-2 shadow-sm cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Flip to Reveal Answer
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 animate-in fade-in duration-150">
                    <div className="prose prose-sm prose-slate max-w-none text-slate-800 leading-relaxed">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{backAnswer}</ReactMarkdown>
                    </div>
                    {currentCard.meta?.examinerTip && (
                      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>Examiner Tip:</strong> {currentCard.meta.examinerTip}</span>
                      </div>
                    )}
                    {currentCard.personalNote && (
                      <div className="p-2.5 rounded-xl bg-yellow-50 border border-yellow-200 text-xs text-slate-800 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>My Note:</strong> {currentCard.personalNote}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Self-Assessment Bar */}
              {isFlipped && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => handleAssess(false)}
                    className="py-3 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 text-amber-600" /> Still Shaky (Revisit)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAssess(true)}
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Got It Cleanly ✓
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body
  );
}
