import { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  Search, X, BookOpen, FileText, Bookmark, Sparkles, Lock, ArrowRight, CornerDownLeft
} from 'lucide-react';
import type { Topic } from '../../data/curriculumData';
import type { FormulaItem } from '../../data/formulaData';
import { getLockerItems } from '../../lib/lockerStorage';
import { normalizeTargetClass } from '../../lib/dailyQuestionService';
import type { PyqPaper } from './PyqPaperViewerModal';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  examGoal: string;
  isPro: boolean;
  onOpenFormula: (subjectId: string, query: string) => void;
}

type SearchCategory = 'ALL' | 'TOPIC' | 'FORMULA' | 'PYQ' | 'LOCKER';

interface SearchEntry {
  id: string;
  category: Exclude<SearchCategory, 'ALL'>;
  title: string;
  subtitle: string;
  keywords: string;
  locked?: boolean;
  onSelect: () => void;
}

export function GlobalSearchModal({
  isOpen,
  onClose,
  examGoal,
  isPro,
  onOpenFormula,
}: GlobalSearchModalProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<SearchCategory>('ALL');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pyqPapers, setPyqPapers] = useState<PyqPaper[]>([]);
  const [topicItems, setTopicItems] = useState<{ topic: Topic; subName: string; chId: string; chTitle: string; allTopics: Topic[]; idx: number }[]>([]);
  const [formulaItems, setFormulaItems] = useState<FormulaItem[]>([]);
  const [loadingVault, setLoadingVault] = useState(false);

  const effectiveGoal = useMemo(() => examGoal || 'JEE Mains', [examGoal]);

  // Lazy-load active track curriculum, formulas & PYQ vault ONLY when modal opens (keeps main bundle slim)
  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    setActiveCategory('ALL');
    setSelectedIndex(0);
    setTimeout(() => inputRef.current?.focus(), 20);

    let active = true;
    const track = normalizeTargetClass(effectiveGoal);
    setLoadingVault(true);

    const loadVault = async () => {
      try {
        const [currMod, formMod] = await Promise.all([
          import('../../data/curriculumData'),
          import('../../data/formulaData'),
        ]);

        const builtTopics: { topic: Topic; subName: string; chId: string; chTitle: string; allTopics: Topic[]; idx: number }[] = [];
        currMod.getSubjectsForClass(effectiveGoal).forEach((sub) => {
          currMod.getCurriculumForClass(effectiveGoal, sub.id).forEach((ch) => {
            const list = ch.topics || [];
            list.forEach((t, idx) => {
              builtTopics.push({ topic: t, subName: sub.name, chId: ch.id, chTitle: ch.title, allTopics: list, idx });
            });
          });
        });

        const builtFormulas = formMod.getFormulasForClass(effectiveGoal);

        let loadedPyqs: PyqPaper[] = [];
        if (track === 'Class 9') {
          loadedPyqs = (await import('../../data/pyqs/class9_pyq')).CLASS_9_PYQ_PAPERS;
        } else if (track === 'Class 10') {
          loadedPyqs = (await import('../../data/pyqs/class10_pyq')).CLASS_10_PYQ_PAPERS;
        } else if (track === 'Class 11') {
          loadedPyqs = (await import('../../data/pyqs/class11_pyq')).CLASS_11_PYQ_PAPERS;
        } else if (track === 'JEE Mains') {
          const [mJee, m12] = await Promise.all([
            import('../../data/pyqs/jee_main_pyq'),
            import('../../data/pyqs/class12_pyq'),
          ]);
          loadedPyqs = [
            ...mJee.JEE_MAINS_PYQ_PAPERS,
            ...m12.CLASS_12_PYQ_PAPERS.filter(p => ['Physics', 'Chemistry', 'Mathematics'].includes(p.subject)),
          ];
        } else if (track === 'NEET UG') {
          const [mNeet, m12] = await Promise.all([
            import('../../data/pyqs/neet_pyq'),
            import('../../data/pyqs/class12_pyq'),
          ]);
          loadedPyqs = [
            ...mNeet.NEET_UG_PYQ_PAPERS,
            ...m12.CLASS_12_PYQ_PAPERS.filter(p => ['Biology', 'Physics', 'Chemistry'].includes(p.subject)),
          ];
        } else if (track === 'JEE Advanced') {
          const [mAdv, mJee] = await Promise.all([
            import('../../data/pyqs/jee_advanced_pyq'),
            import('../../data/pyqs/jee_main_pyq'),
          ]);
          loadedPyqs = [...mAdv.JEE_ADVANCED_PYQ_PAPERS, ...mJee.JEE_MAINS_PYQ_PAPERS.slice(0, 6)];
        } else {
          loadedPyqs = (await import('../../data/pyqs/class12_pyq')).CLASS_12_PYQ_PAPERS;
        }
        if (active) {
          setTopicItems(builtTopics);
          setFormulaItems(builtFormulas);
          setPyqPapers(loadedPyqs);
        }
      } catch {
        // fail quietly if offline
      } finally {
        if (active) setLoadingVault(false);
      }
    };

    loadVault();
    return () => { active = false; };
  }, [isOpen, effectiveGoal]);

  // Build scoped index strictly for active examGoal
  const allEntries = useMemo<SearchEntry[]>(() => {
    if (!isOpen) return [];
    const list: SearchEntry[] = [];

    // 1. Curriculum Topics
    topicItems.forEach(({ topic: t, subName, chId, chTitle, allTopics, idx }) => {
      const locked = !isPro && idx >= 2;
      list.push({
        id: `topic-${chId}-${t.id}`,
        category: 'TOPIC',
        title: t.title,
        subtitle: `${subName} • ${chTitle}`,
        keywords: `${t.title} ${chTitle} ${subName}`.toLowerCase(),
        locked,
        onSelect: () => {
          onClose();
          if (locked) {
            navigate('/learn/pricing');
          } else {
            navigate('/learn/topic/' + t.id, {
              state: {
                topicTitle: t.title,
                chapterTitle: chTitle,
                chapterId: chId,
                allTopics,
              },
            });
          }
        },
      });
    });

    // 2. Formulas
    formulaItems.forEach((f) => {
      list.push({
        id: `formula-${f.id}`,
        category: 'FORMULA',
        title: f.title,
        subtitle: `${f.subjectName} • ${f.domain}`,
        keywords: `${f.title} ${f.domain} ${f.subjectName} ${f.formula} ${f.variables}`.toLowerCase(),
        onSelect: () => {
          onClose();
          onOpenFormula(f.subjectId, f.title);
        },
      });
    });

    // 3. PYQ & Sample Papers
    pyqPapers.forEach((p) => {
      list.push({
        id: `pyq-${p.id}`,
        category: 'PYQ',
        title: p.title,
        subtitle: `${p.subject} • ${p.year} • ${p.totalQuestions} Qs`,
        keywords: `${p.title} ${p.subject} ${p.year} ${p.paperCode || ''}`.toLowerCase(),
        locked: !isPro && p.isFree === false,
        onSelect: () => {
          onClose();
          navigate(`/learn/pyq?paperId=${encodeURIComponent(p.id)}`);
        },
      });
    });

    // 4. Personal Locker Items
    const lockerItems = getLockerItems();
    lockerItems.forEach((item) => {
      list.push({
        id: `locker-${item.id}`,
        category: 'LOCKER',
        title: item.title,
        subtitle: item.subtitle || `${item.type} • My Revision Locker`,
        keywords: `${item.title} ${item.subtitle || ''} ${item.tags.join(' ')} ${item.personalNote || ''}`.toLowerCase(),
        onSelect: () => {
          onClose();
          navigate('/learn/locker');
        },
      });
    });

    return list;
  }, [isOpen, effectiveGoal, isPro, topicItems, formulaItems, pyqPapers, navigate, onClose, onOpenFormula]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const terms = q.split(/\s+/).filter(Boolean);

    const filtered = allEntries.filter((entry) => {
      if (activeCategory !== 'ALL' && entry.category !== activeCategory) return false;
      if (terms.length === 0) return true;
      return terms.every((term) => entry.keywords.includes(term));
    });

    return filtered.slice(0, 24);
  }, [allEntries, activeCategory, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeCategory]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        results[selectedIndex].onSelect();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, results, selectedIndex, onClose]);

  if (!isOpen) return null;

  const categoryMeta: Record<Exclude<SearchCategory, 'ALL'>, { label: string; badge: string; icon: any }> = {
    TOPIC: { label: 'Lesson', badge: 'bg-blue-50 text-blue-700 border-blue-200', icon: BookOpen },
    FORMULA: { label: 'Formula', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', icon: Sparkles },
    PYQ: { label: 'PYQ Paper', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: FileText },
    LOCKER: { label: 'My Locker', badge: 'bg-amber-50 text-amber-800 border-amber-200', icon: Bookmark },
  };

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-14 sm:pt-20 px-4 print:hidden">
      <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[78vh]">
        {/* Search Input Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 bg-white">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${effectiveGoal} topics, formulas, PYQs, or saved mistakes...`}
            className="flex-1 text-sm sm:text-base text-slate-900 placeholder-slate-400 outline-none font-medium bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs font-semibold text-slate-400 hover:text-slate-700 px-2 py-1 rounded-lg hover:bg-slate-100"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-50 border-b border-slate-200 overflow-x-auto overflow-y-hidden shrink-0">
          {(
            [
              { id: 'ALL', label: 'All' },
              { id: 'TOPIC', label: 'Topics & Lessons' },
              { id: 'FORMULA', label: 'Formulas' },
              { id: 'PYQ', label: `PYQ Bank${loadingVault ? '…' : ''}` },
              { id: 'LOCKER', label: 'My Locker' },
            ] as { id: SearchCategory; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                activeCategory === tab.id
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results Feed */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Search className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-bold text-slate-700">No matches found in {effectiveGoal}</p>
              <p className="text-xs text-slate-500 mt-1">
                Try keywords like "Gauss Law", "Mole Concept", "Integrals", or switch tabs above.
              </p>
            </div>
          ) : (
            results.map((item, idx) => {
              const meta = categoryMeta[item.category];
              const Icon = meta.icon;
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={item.onSelect}
                  className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl text-left transition-all ${
                    isSelected
                      ? 'bg-indigo-50/90 border border-indigo-200 shadow-2xs'
                      : 'border border-transparent hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${meta.badge}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-slate-900 truncate">{item.title}</p>
                        {item.locked && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                            <Lock className="w-2.5 h-2.5" /> Pro
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 truncate font-medium mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`hidden sm:inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${meta.badge}`}>
                      {meta.label}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-indigo-600' : 'text-slate-300'}`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Legend */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[10px] font-bold">↑↓</kbd> Navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[10px] font-bold inline-flex items-center">
                <CornerDownLeft className="w-2.5 h-2.5" />
              </kbd> Open
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[10px] font-bold">Esc</kbd> Close
            </span>
          </div>
          <span className="font-bold text-indigo-700">{effectiveGoal} Vault</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
