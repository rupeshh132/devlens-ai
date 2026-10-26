import React, { useState, useMemo } from 'react';
import { 
  Bookmark, Search, Printer, Trash2, Edit3, 
  Check, Flame, Copy, CheckCheck, BookOpen, Plus,
  ExternalLink, X, Lightbulb, AlertTriangle, 
  Maximize2, ChevronRight, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { toast } from 'sonner';
import { 
  getLockerItems, saveLockerItem, removeLockerItem, updatePersonalNote, 
  getStreakData, subscribeToStreakUpdates, fetchCloudLockerItems, hasAuthToken 
} from '../../../lib/lockerStorage';
import type { LockerItem } from '../../../lib/lockerStorage';

export function PersonalLockerPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<LockerItem[]>(() => getLockerItems());
  const [activeTab, setActiveTab] = useState<'ALL' | 'NOTE' | 'QUESTION' | 'FORMULA'>('ALL');
  const [activeSubject, setActiveSubject] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const isCloudConnected = useMemo(() => hasAuthToken(), []);

  // Fetch and sync cloud locker items on mount
  React.useEffect(() => {
    fetchCloudLockerItems().then(synced => {
      if (Array.isArray(synced) && synced.length > 0) {
        setItems(synced);
      }
    });
  }, []);
  
  // Modals & Editing states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewModalItem, setViewModalItem] = useState<LockerItem | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New Item Form State
  const defaultSubjectForUser = useMemo(() => {
    const goal = (localStorage.getItem('learn_exam_goal') || 'Class 11').toLowerCase();
    if (goal.includes('ssc') || goal.includes('upsc') || goal.includes('govt') || goal.includes('cgl')) return 'Quantitative Aptitude';
    if (goal.includes('neet')) return 'Biology';
    return 'Physics';
  }, []);

  const [newItemForm, setNewItemForm] = useState({
    type: 'FORMULA' as 'NOTE' | 'QUESTION' | 'FORMULA',
    title: '',
    subject: defaultSubjectForUser,
    subtitle: '',
    content: '',
    tags: '',
    personalNote: ''
  });

  const [streakData, setStreakData] = useState(() => getStreakData());

  React.useEffect(() => {
    const unsub = subscribeToStreakUpdates((latest) => {
      setStreakData(latest);
    });
    return unsub;
  }, []);

  // Compute Subject list dynamically from items
  const uniqueSubjects = useMemo(() => {
    const subs = new Set<string>();
    items.forEach(item => {
      const s = item.meta?.subject || item.tags.find(t => 
        ['physics', 'chemistry', 'mathematics', 'maths', 'biology', 'science', 'english', 'quantitative aptitude', 'quant', 'reasoning', 'general awareness', 'polity'].includes(t.toLowerCase())
      ) || (item.tags.length > 0 ? item.tags[0] : null);
      if (s) {
        let norm = s.trim();
        if (norm.toLowerCase() === 'maths') norm = 'Mathematics';
        if (norm.toLowerCase() === 'quant') norm = 'Quantitative Aptitude';
        subs.add(norm);
      }
    });
    return Array.from(subs);
  }, [items]);

  // Counts for tabs & hero
  const countNotes = items.filter(i => i.type === 'NOTE').length;
  const countQuestions = items.filter(i => i.type === 'QUESTION').length;
  const countFormulas = items.filter(i => i.type === 'FORMULA').length;

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // 1. Type filter
      if (activeTab !== 'ALL' && item.type !== activeTab) {
        return false;
      }

      // 2. Subject filter
      if (activeSubject !== 'ALL') {
        const itemSub = (item.meta?.subject || '').toLowerCase();
        const hasTag = item.tags.some(t => t.toLowerCase() === activeSubject.toLowerCase());
        const subInSubtitle = (item.subtitle || '').toLowerCase().includes(activeSubject.toLowerCase());
        const subInTitle = item.title.toLowerCase().includes(activeSubject.toLowerCase());
        if (!itemSub.includes(activeSubject.toLowerCase()) && !hasTag && !subInSubtitle && !subInTitle) {
          return false;
        }
      }

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSub = item.subtitle?.toLowerCase().includes(q);
        const matchesContent = item.content.toLowerCase().includes(q);
        const matchesNote = item.personalNote?.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSub && !matchesContent && !matchesNote && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [items, activeTab, activeSubject, searchQuery]);

  const handleDelete = (id: string) => {
    removeLockerItem(id);
    setItems(getLockerItems());
    toast.info('Item removed from your Revision Locker.');
  };

  const handleStartEdit = (item: LockerItem) => {
    setEditingId(item.id);
    setEditingText(item.personalNote || '');
  };

  const handleSaveEdit = (id: string) => {
    updatePersonalNote(id, editingText);
    setItems(getLockerItems());
    setEditingId(null);
    toast.success('Personal sticky note updated!');
  };

  const handleCopyContent = (item: LockerItem) => {
    const text = `${item.title}\n${item.subtitle ? item.subtitle + '\n' : ''}\n${item.content}\n${item.personalNote ? '\nMy Note: ' + item.personalNote : ''}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(item.id);
      toast.success('Revision card copied to clipboard!');
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleCreateNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemForm.title.trim() || !newItemForm.content.trim()) {
      toast.error('Please enter a title and content for this revision card.');
      return;
    }

    const tagsArray = newItemForm.tags
      ? newItemForm.tags.split(',').map(t => t.trim()).filter(Boolean)
      : [newItemForm.subject];

    if (!tagsArray.includes(newItemForm.subject)) {
      tagsArray.unshift(newItemForm.subject);
    }

    saveLockerItem({
      type: newItemForm.type,
      title: newItemForm.title.trim(),
      subtitle: newItemForm.subtitle.trim() || `${newItemForm.subject} — Custom Revision Note`,
      content: newItemForm.content.trim(),
      tags: tagsArray,
      personalNote: newItemForm.personalNote.trim(),
      meta: {
        subject: newItemForm.subject,
        isCustom: true
      }
    });

    setItems(getLockerItems());
    setIsAddModalOpen(false);
    setNewItemForm({
      type: 'FORMULA',
      title: '',
      subject: 'Physics',
      subtitle: '',
      content: '',
      tags: '',
      personalNote: ''
    });
    toast.success('New revision card added to your Locker!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      
      {/* 1. Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white p-6 sm:p-10 shadow-xl border border-indigo-900/60 print:bg-white print:text-black print:p-0 print:border-none">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Bookmark className="w-3.5 h-3.5 fill-amber-300" />
                Personal Revision Locker
              </div>
              {isCloudConnected ? (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Supabase Cloud Synced
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-500/20 text-slate-300 border border-slate-500/30">
                  Local Vault (Login to Cloud Sync)
                </div>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              My Exam Revision <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-blue-300">Binder & Locker</span>
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Your personalized collection of saved lecture takeaways, bookmarked board questions, and quick formula cards. Everything stays saved here so you can do rapid revisions without watching hours of videos.
            </p>

            {/* Quick Metrics: 5 Balanced Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-black text-amber-400">{items.length}</div>
                <div className="text-[11px] text-slate-300 font-medium">Total Saved</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-black text-blue-400">{countNotes}</div>
                <div className="text-[11px] text-slate-300 font-medium">Lecture Notes</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">{countQuestions}</div>
                <div className="text-[11px] text-slate-300 font-medium">Board PYQs</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-xl sm:text-2xl font-black text-purple-400">{countFormulas}</div>
                <div className="text-[11px] text-slate-300 font-medium">Formulas</div>
              </div>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('preplens_open_streak_modal'))}
                title="Click to view Activity Streak Calendar"
                className="bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 hover:border-amber-400/40 rounded-xl p-3 col-span-2 sm:col-span-1 text-left transition-all cursor-pointer group"
              >
                <div className="text-xl sm:text-2xl font-black text-orange-400 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Flame className="w-5 h-5 fill-orange-400 group-hover:scale-110 transition-transform" /> {streakData.streak}d
                  </span>
                  <span className="text-[10px] text-amber-300 bg-amber-400/15 px-1.5 py-0.5 rounded border border-amber-400/30 font-bold">
                    Calendar
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 font-medium mt-0.5">Daily Streak 📅</div>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 shrink-0 print:hidden">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/30 active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              + Add Custom Note / Formula
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-700" />
              Print Revision Binder (PDF)
            </button>
            <button
              onClick={() => navigate('/learn/pyq')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              Practice More PYQs
            </button>
          </div>
        </div>
      </div>

      {/* 2. Filter and Search Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4 print:hidden">
        
        {/* Search & Type Tabs */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in saved formulas, exam questions, definitions, or notes..."
              className="w-full pl-10 pr-12 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
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

          {/* Type Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 shrink-0">
            {[
              { id: 'ALL', label: `All (${items.length})` },
              { id: 'NOTE', label: `📝 Notes (${countNotes})` },
              { id: 'QUESTION', label: `⭐ Questions (${countQuestions})` },
              { id: 'FORMULA', label: `📐 Formulas (${countFormulas})` },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Filter Pills */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-semibold text-[11px] shrink-0">Subject:</span>
          <button
            onClick={() => setActiveSubject('ALL')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeSubject === 'ALL'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Subjects
          </button>
          {uniqueSubjects.map(sub => (
            <button
              key={sub}
              onClick={() => setActiveSubject(sub)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                activeSubject === sub
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

      </div>

      {/* 3. Saved Items Grid */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
            <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">Your revision locker is empty for this filter</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
              Save key concepts from video lecture transcripts, bookmark board questions while practicing, or add your own custom formulas!
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
              >
                + Add Custom Note
              </button>
              <button
                onClick={() => navigate('/learn/pyq')}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                Browse PYQs
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 print:grid-cols-1">
            {filteredItems.map((item) => {
              const isEditing = editingId === item.id;
              const isCopied = copiedId === item.id;
              const subjectTag = item.meta?.subject || item.tags.find(t => 
                ['physics', 'chemistry', 'mathematics', 'maths', 'biology', 'science'].includes(t.toLowerCase())
              );

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all p-5 flex flex-col justify-between space-y-4 print:border-slate-300 print:shadow-none break-inside-avoid"
                >
                  <div className="space-y-3">
                    
                    {/* Item Top Badges & Actions */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                          item.type === 'NOTE'
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : item.type === 'QUESTION'
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : 'bg-purple-100 text-purple-900 border border-purple-200'
                        }`}>
                          {item.type === 'NOTE' ? 'AI Lecture Takeaway' : item.type === 'QUESTION' ? 'Board PYQ' : 'Formula Card'}
                        </span>
                        
                        {subjectTag && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {subjectTag}
                          </span>
                        )}

                        {item.tags.filter(t => t.toLowerCase() !== subjectTag?.toLowerCase()).map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-50 text-slate-500 border border-slate-200/60">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Card Action Buttons */}
                      <div className="flex items-center gap-1 text-slate-400 print:hidden shrink-0">
                        {/* Open in Paper Link */}
                        {item.meta?.paperId && (
                          <button
                            onClick={() => navigate(`/learn/pyq?paperId=${item.meta?.paperId}`)}
                            className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold text-blue-600"
                            title="Open in official CBSE Paper Viewer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline text-[11px]">Paper</span>
                          </button>
                        )}

                        {/* Open in Topic Link */}
                        {item.meta?.topicId && (
                          <button
                            onClick={() => navigate(`/learn/topic/${item.meta?.topicId}`)}
                            className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold text-blue-600"
                            title="Open topic study notes"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline text-[11px]">Topic</span>
                          </button>
                        )}

                        {/* Expand Details */}
                        <button
                          onClick={() => setViewModalItem(item)}
                          className="p-1.5 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                          title="View full solution & details"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>

                        {/* Copy */}
                        <button
                          onClick={() => handleCopyContent(item)}
                          className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Copy content"
                        >
                          {isCopied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Remove from locker"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Content Box (Rich Markdown / Typography instead of Monospace) */}
                    {item.type === 'FORMULA' ? (
                      <div className="p-4 bg-gradient-to-br from-indigo-50/70 via-blue-50/30 to-slate-50 border border-indigo-100 rounded-xl">
                        <div className="prose prose-sm prose-slate max-w-none text-slate-800 leading-relaxed font-sans">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3.5 bg-slate-50/80 border border-slate-200/80 rounded-xl">
                        <div className="prose prose-sm prose-slate max-w-none text-slate-800 leading-relaxed font-sans line-clamp-6">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
                        </div>
                        {item.content.length > 250 && (
                          <button
                            onClick={() => setViewModalItem(item)}
                            className="text-[11px] text-blue-600 hover:text-blue-700 font-bold mt-2 hover:underline inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>Read full derivation & solution</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    )}

                    {/* Examiner's Secret Tip (if stored in metadata) */}
                    {item.meta?.examinerTip && (
                      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-2.5 flex items-start gap-2 text-xs">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-amber-900">Examiner's Tip: </span>
                          <span className="text-slate-800">{item.meta.examinerTip}</span>
                        </div>
                      </div>
                    )}

                    {/* Common Pitfall (if stored in metadata) */}
                    {item.meta?.commonPitfall && (
                      <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-2.5 flex items-start gap-2 text-xs">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-rose-900">Common Student Trap: </span>
                          <span className="text-slate-800">{item.meta.commonPitfall}</span>
                        </div>
                      </div>
                    )}

                    {/* Personal Sticky Note Drawer */}
                    <div className="bg-amber-50/60 border border-amber-200/70 rounded-xl p-3 text-xs space-y-1.5">
                      <div className="flex items-center justify-between text-amber-950 font-bold">
                        <span className="flex items-center gap-1.5">
                          <Edit3 className="w-3.5 h-3.5 text-amber-600" />
                          My Personal Revision Sticky Note:
                        </span>
                        {!isEditing && (
                          <button
                            onClick={() => handleStartEdit(item)}
                            className="text-[11px] text-amber-700 hover:underline font-semibold cursor-pointer"
                          >
                            Edit
                          </button>
                        )}
                      </div>

                      {isEditing ? (
                        <div className="space-y-2 pt-1">
                          <textarea
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            placeholder="Type your personal teacher tip, doubt, or reminder..."
                            className="w-full p-2 text-xs bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-slate-800"
                            rows={2}
                          />
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setEditingId(null)}
                              className="px-2.5 py-1 text-slate-600 text-xs font-semibold hover:bg-amber-100 rounded-md cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSaveEdit(item.id)}
                              className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-md hover:bg-amber-700 flex items-center gap-1 cursor-pointer"
                            >
                              <Check className="w-3 h-3" /> Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-slate-700 italic font-medium">
                          {item.personalNote || 'Click edit to add your own secret reminder or formula mnemonic!'}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span>Saved {new Date(item.savedAt).toLocaleDateString()}</span>
                    <span className="text-slate-500 font-medium">PrepLens Revision Vault</span>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. MODAL: "+ Add Custom Note / Formula" */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">Add New Card to Revision Locker</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateNewItem} className="p-5 space-y-4 text-xs">
              {/* Type Switcher */}
              <div>
                <label className="block text-slate-700 font-bold mb-1.5">Card Category:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'FORMULA', label: '📐 Formula Card' },
                    { id: 'NOTE', label: '📝 Lecture Note' },
                    { id: 'QUESTION', label: '⭐ Board PYQ' },
                  ].map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setNewItemForm(prev => ({ ...prev, type: t.id as any }))}
                      className={`p-2 rounded-xl text-center font-bold border transition-all cursor-pointer ${
                        newItemForm.type === t.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lens Maker's Formula"
                    value={newItemForm.title}
                    onChange={(e) => setNewItemForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Subject *</label>
                  <select
                    value={newItemForm.subject}
                    onChange={(e) => setNewItemForm(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium"
                  >
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Biology">Biology</option>
                    <option value="Quantitative Aptitude">Quantitative Aptitude</option>
                    <option value="Reasoning">Reasoning & Intelligence</option>
                    <option value="General Awareness">General Awareness (GS)</option>
                    <option value="Science">General Science</option>
                    <option value="English">English</option>
                  </select>
                </div>
              </div>

              {/* Subtitle / Chapter */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">Chapter / Subtitle (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Ray Optics & Optical Instruments"
                  value={newItemForm.subtitle}
                  onChange={(e) => setNewItemForm(prev => ({ ...prev, subtitle: e.target.value }))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              {/* Content / Markdown Textarea */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Formula / Definition / Content * (Markdown supported)
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Enter formula, key law, or derivation steps...&#10;e.g. 1/f = (μ - 1) * (1/R1 - 1/R2)"
                  value={newItemForm.content}
                  onChange={(e) => setNewItemForm(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-sans"
                />
              </div>

              {/* Personal Sticky Tip */}
              <div>
                <label className="block text-amber-900 font-bold mb-1">
                  Personal Reminder / Exam Tip (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Always remember sign convention for R1 and R2!"
                  value={newItemForm.personalNote}
                  onChange={(e) => setNewItemForm(prev => ({ ...prev, personalNote: e.target.value }))}
                  className="w-full p-2.5 bg-amber-50/50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">Tags (Comma-separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Optics, Sure Shot, 3 Marks"
                  value={newItemForm.tags}
                  onChange={(e) => setNewItemForm(prev => ({ ...prev, tags: e.target.value }))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-slate-600 font-semibold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Save to Locker
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* 5. MODAL: "View Full Card / Derivation Details" */}
      {viewModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-sm">Full Revision Details</span>
                {viewModalItem.meta?.subject && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {viewModalItem.meta.subject}
                  </span>
                )}
              </div>
              <button
                onClick={() => setViewModalItem(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <h2 className="text-xl font-black text-slate-900">{viewModalItem.title}</h2>
                {viewModalItem.subtitle && (
                  <p className="text-xs text-slate-500 font-medium mt-1">{viewModalItem.subtitle}</p>
                )}
              </div>

              {/* Full Content */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="prose prose-sm prose-slate max-w-none text-slate-900 leading-relaxed font-sans">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{viewModalItem.content}</ReactMarkdown>
                </div>
              </div>

              {/* Step-by-Step Marking Breakdown if available */}
              {viewModalItem.meta?.stepMarking && viewModalItem.meta.stepMarking.length > 0 && (
                <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-xs sm:text-sm">
                    <Award className="w-4 h-4 text-blue-600" />
                    Official Step-by-Step CBSE Marking Scheme:
                  </div>
                  <div className="space-y-1.5">
                    {viewModalItem.meta.stepMarking.map((step: any, idx: number) => (
                      <div key={idx} className="flex items-start justify-between gap-3 text-xs bg-white p-2.5 rounded-lg border border-blue-100">
                        <span className="text-slate-800 font-medium">{step.step}</span>
                        <span className="shrink-0 px-2 py-0.5 rounded font-extrabold text-blue-800 bg-blue-100 text-[11px]">
                          {step.marks}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Examiner Tip */}
              {viewModalItem.meta?.examinerTip && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-900">Examiner's Secret Tip: </span>
                    <span className="text-slate-800">{viewModalItem.meta.examinerTip}</span>
                  </div>
                </div>
              )}

              {/* Personal Sticky Note */}
              {viewModalItem.personalNote && (
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 text-xs">
                  <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                    <Edit3 className="w-3.5 h-3.5 text-amber-600" />
                    My Personal Reminder:
                  </div>
                  <p className="text-slate-700 italic font-medium">{viewModalItem.personalNote}</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between shrink-0">
              {viewModalItem.meta?.paperId ? (
                <button
                  onClick={() => {
                    setViewModalItem(null);
                    navigate(`/learn/pyq?paperId=${viewModalItem.meta?.paperId}`);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Question Paper</span>
                </button>
              ) : (
                <span className="text-xs text-slate-400">PrepLens Revision Vault</span>
              )}

              <button
                onClick={() => setViewModalItem(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default PersonalLockerPage;
