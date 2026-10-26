import { useState, useEffect } from 'react';
import { 
  X, Copy, Check, Printer, Sparkles, 
  Search, BookOpen, Layers, GraduationCap
} from 'lucide-react';
import { toast } from 'sonner';
import { 
  type FormulaItem, 
  getFormulasForClass, 
  getSubjectsForFormulaClass 
} from '../../data/formulaData';

export interface FormulaCheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  examGoal?: string;
  activeSubjectId?: string;
}

export function FormulaCheatSheetModal({ 
  isOpen, 
  onClose, 
  examGoal, 
  activeSubjectId 
}: FormulaCheatSheetModalProps) {
  // Helper to determine initial class from goal string
  const resolveClass = (goal?: string): '9' | '10' | '11' | '12' => {
    const g = (goal || '').toLowerCase();
    if (g.includes('12') || g.includes('jee') || g.includes('neet')) return '12';
    if (g.includes('11')) return '11';
    if (g.includes('10')) return '10';
    if (g.includes('9')) return '9';
    return '11';
  };

  const resolveSubject = (subId?: string, classLvl?: string): string => {
    if (!subId) return 'ALL';
    const s = subId.toLowerCase();
    if (s.includes('phy')) return 'phy';
    if (s.includes('chem')) return 'chem';
    if (s.includes('math')) return 'math';
    if (s.includes('sci')) return 'sci';
    // If user was on Class 9/10 Science, but viewing 11/12
    if ((classLvl === '11' || classLvl === '12') && s.includes('sci')) return 'phy';
    return 'ALL';
  };

  const [selectedClass, setSelectedClass] = useState<'9' | '10' | '11' | '12'>(() => resolveClass(examGoal));
  const [selectedSubject, setSelectedSubject] = useState<string>(() => resolveSubject(activeSubjectId, resolveClass(examGoal)));
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync state whenever modal opens or props change
  useEffect(() => {
    if (isOpen) {
      const cls = resolveClass(examGoal);
      setSelectedClass(cls);
      setSelectedSubject(resolveSubject(activeSubjectId, cls));
      setSearchQuery('');
    }
  }, [isOpen, examGoal, activeSubjectId]);

  // When class changes, ensure selectedSubject is valid for the new class
  const handleClassChange = (newClass: '9' | '10' | '11' | '12') => {
    setSelectedClass(newClass);
    const validSubs = getSubjectsForFormulaClass(newClass).map(s => s.id);
    if (!validSubs.includes(selectedSubject)) {
      setSelectedSubject('ALL');
    }
  };

  if (!isOpen) return null;

  // Filter formulas for the currently active class
  const classFormulas = getFormulasForClass(selectedClass);
  const availableSubjects = getSubjectsForFormulaClass(selectedClass);

  const filteredFormulas = classFormulas.filter((item) => {
    const matchesSubject = selectedSubject === 'ALL' || item.subjectId === selectedSubject;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = q === '' || 
      item.title.toLowerCase().includes(q) ||
      item.domain.toLowerCase().includes(q) ||
      item.formula.toLowerCase().includes(q) ||
      item.variables.toLowerCase().includes(q) ||
      item.examTip.toLowerCase().includes(q);
    return matchesSubject && matchesSearch;
  });

  const handleCopyFormula = (item: FormulaItem) => {
    const text = `${item.title} (${item.domain})\n${item.formula}\nWhere: ${item.variables}\nExam Tip: ${item.examTip}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    toast.success(`Copied "${item.title}" to clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const classBadges: Record<string, { label: string; badge: string; color: string }> = {
    '11': { label: 'Class 11', badge: 'CBSE & JEE/NEET Stream', color: 'bg-indigo-500 text-white' },
    '12': { label: 'Class 12', badge: 'Board & Entrance Exam', color: 'bg-rose-500 text-white' },
    '10': { label: 'Class 10', badge: 'CBSE Board Examination', color: 'bg-amber-400 text-slate-950' },
    '9': { label: 'Class 9', badge: 'NCERT Foundation', color: 'bg-emerald-400 text-slate-950' },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-white/10 text-white flex items-center justify-center font-mono font-bold text-xl shadow-inner border border-white/15">
              fx
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black tracking-tight">Smart Formula & Laws Cheat Sheet</h2>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${classBadges[selectedClass]?.color || 'bg-amber-400 text-slate-900'}`}>
                  {classBadges[selectedClass]?.label} • {classBadges[selectedClass]?.badge}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Authentic NCERT formulas, variable keys, and high-probability board examiner tips.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
              title="Print cheat sheet or Save as PDF"
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter & Subheader Bar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col gap-3">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Class Switcher Quick Pills */}
            <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl self-start">
              <span className="text-[11px] font-extrabold text-slate-500 uppercase px-2 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" /> Grade:
              </span>
              {(['9', '10', '11', '12'] as const).map((cls) => (
                <button
                  key={cls}
                  onClick={() => handleClassChange(cls)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedClass === cls
                      ? 'bg-white text-indigo-700 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  Class {cls}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formula, law, or keyword..."
                className="w-full pl-9 pr-8 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-slate-800"
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
          </div>

          {/* Subject Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200/60">
            {availableSubjects.map((sub) => {
              const count = sub.id === 'ALL'
                ? classFormulas.length
                : classFormulas.filter(f => f.subjectId === sub.id).length;
              const isSelected = selectedSubject === sub.id;

              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{sub.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Formulas Grid Feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredFormulas.length === 0 ? (
            <div className="py-20 text-center text-slate-400">
              <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-30" />
              <p className="text-sm font-bold text-slate-700">No formulas match your search or filter.</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for keywords like "momentum", "mole", "integrals", or switch subject.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredFormulas.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-4 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {item.subjectName}
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                          {item.domain}
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopyFormula(item)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                        title="Copy formula"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors mb-2">
                      {item.title}
                    </h4>

                    {/* Formula Callout */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs font-bold text-slate-900 whitespace-pre-line leading-relaxed shadow-2xs">
                      {item.formula}
                    </div>

                    {/* Variables */}
                    <p className="text-[11px] text-slate-600 mt-2 font-medium leading-relaxed">
                      <span className="font-bold text-slate-800">Symbols:</span> {item.variables}
                    </p>
                  </div>

                  {/* Exam Tip */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-amber-900 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong className="font-bold">Examiner Tip:</strong> {item.examTip}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Showing <strong>{filteredFormulas.length}</strong> high-yield formulas for Class {selectedClass}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-colors shadow-xs"
          >
            Close Sheet
          </button>
        </div>

      </div>
    </div>
  );
}
