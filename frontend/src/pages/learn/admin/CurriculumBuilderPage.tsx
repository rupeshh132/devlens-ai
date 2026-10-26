import React, { useState, useEffect, useMemo } from 'react';
import { api } from '../../../lib/api';
import { learnApi } from '../../../lib/learn-api';
import { 
  FolderTree, Plus, ChevronRight, ChevronDown, ChevronUp, BookOpen, 
  Layers, FileText, Video, Trash2, Save, RefreshCw, 
  Search, GraduationCap, AlertCircle, X, Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const CATEGORIES = ['ALL', 'SCHOOL', 'ENGINEERING', 'MEDICAL', 'GOVT', 'CUET', 'GRADUATION'] as const;

interface ExamType {
  id: string;
  name: string;
  slug: string;
  fullName?: string;
  category: string;
  subCategory?: string;
  conductingBody?: string;
  requiredPlan?: string;
  iconUrl?: string;
  isActive: boolean;
  displayOrder: number;
}

interface Subject {
  id: string;
  examTypeId: string;
  name: string;
  code?: string;
  orderIndex: number;
  isActive: boolean;
}

interface Chapter {
  id: string;
  subjectId: string;
  title: string;
  orderIndex: number;
  isActive: boolean;
}

interface Topic {
  id: string;
  chapterId: string;
  title: string;
  description?: string;
  orderIndex: number;
  isActive: boolean;
}

type SelectedNode = 
  | { type: 'EXAM'; data: ExamType }
  | { type: 'SUBJECT'; data: Subject; exam: ExamType }
  | { type: 'CHAPTER'; data: Chapter; subject: Subject; exam: ExamType }
  | { type: 'TOPIC'; data: Topic; chapter: Chapter; subject: Subject; exam: ExamType }
  | null;

export function CurriculumBuilderPage() {
  // Tree Data
  const [exams, setExams] = useState<ExamType[]>([]);
  const [subjectsMap, setSubjectsMap] = useState<Record<string, Subject[]>>({});
  const [chaptersMap, setChaptersMap] = useState<Record<string, Chapter[]>>({});
  const [topicsMap, setTopicsMap] = useState<Record<string, Topic[]>>({});

  // Duplicate Exam Disambiguation
  const examNameCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    exams.forEach(e => {
      const key = (e.name || '').trim().toLowerCase();
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }, [exams]);

  // Tree Expansion States
  const [expandedExams, setExpandedExams] = useState<Record<string, boolean>>({});
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  // Loading States
  const [loadingExams, setLoadingExams] = useState(false);
  const [loadingNodes, setLoadingNodes] = useState<Record<string, boolean>>({});

  // Selection for Right Pane
  const [selectedNode, setSelectedNode] = useState<SelectedNode>(null);

  // Search & Category Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // CSV Export state
  const [exportingCsv, setExportingCsv] = useState(false);

  // Modals
  const [createExamModal, setCreateExamModal] = useState(false);
  const [createSubjectModal, setCreateSubjectModal] = useState<{ exam: ExamType } | null>(null);
  const [createChapterModal, setCreateChapterModal] = useState<{ exam: ExamType; subject: Subject } | null>(null);
  const [createTopicModal, setCreateTopicModal] = useState<{ exam: ExamType; subject: Subject; chapter: Chapter } | null>(null);

  // Form states for creation
  const [newExamName, setNewExamName] = useState('');
  const [newExamFullName, setNewExamFullName] = useState('');
  const [newExamCategory, setNewExamCategory] = useState('SCHOOL');
  const [newExamOrder, setNewExamOrder] = useState(1);

  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectCode, setNewSubjectCode] = useState('');
  const [newSubjectOrder, setNewSubjectOrder] = useState(1);

  const [newChapterTitle, setNewChapterTitle] = useState('');
  const [newChapterOrder, setNewChapterOrder] = useState(1);

  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicDesc, setNewTopicDesc] = useState('');
  const [newTopicOrder, setNewTopicOrder] = useState(1);

  const [savingAction, setSavingAction] = useState(false);

  // ─── 1. Load All Exams ─────────────────────────────────────────────────────
  const loadExams = async () => {
    setLoadingExams(true);
    try {
      const res = await learnApi.get('/content/exams');
      setExams(res.data || []);
      if (res.data?.length > 0 && !selectedNode) {
        setSelectedNode({ type: 'EXAM', data: res.data[0] });
        toggleExam(res.data[0].id);
      }
    } catch (err: any) {
      console.error('Failed to load exams:', err);
      toast.error('Failed to load exams');
    } finally {
      setLoadingExams(false);
    }
  };

  useEffect(() => {
    loadExams();
  }, []);

  // ─── Search & Filtering Helpers ───────────────────────────────────────────
  const doesExamMatchSearch = (exam: ExamType, query: string): boolean => {
    if (!query) return true;
    const q = query.toLowerCase().trim();
    if (
      exam.name.toLowerCase().includes(q) ||
      (exam.fullName && exam.fullName.toLowerCase().includes(q)) ||
      exam.slug.toLowerCase().includes(q) ||
      exam.category.toLowerCase().includes(q)
    ) {
      return true;
    }
    const subjects = subjectsMap[exam.id] || [];
    for (const s of subjects) {
      if (s.name.toLowerCase().includes(q) || (s.code && s.code.toLowerCase().includes(q))) {
        return true;
      }
      const chapters = chaptersMap[s.id] || [];
      for (const c of chapters) {
        if (c.title.toLowerCase().includes(q)) {
          return true;
        }
        const topics = topicsMap[c.id] || [];
        for (const t of topics) {
          if (t.title.toLowerCase().includes(q) || (t.description && t.description.toLowerCase().includes(q))) {
            return true;
          }
        }
      }
    }
    return false;
  };

  // Auto-expand matching tree branches when search query changes
  useEffect(() => {
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase().trim();

    const newExpandedExams: Record<string, boolean> = { ...expandedExams };
    const newExpandedSubjects: Record<string, boolean> = { ...expandedSubjects };
    const newExpandedChapters: Record<string, boolean> = { ...expandedChapters };
    let changed = false;

    exams.forEach(exam => {
      const subjects = subjectsMap[exam.id] || [];
      let examHasMatchingChild = false;
      subjects.forEach(s => {
        let subjectHasMatchingChild = false;
        const chapters = chaptersMap[s.id] || [];
        chapters.forEach(c => {
          let chapterHasMatchingChild = false;
          const topics = topicsMap[c.id] || [];
          topics.forEach(t => {
            if (t.title.toLowerCase().includes(q) || (t.description && t.description.toLowerCase().includes(q))) {
              chapterHasMatchingChild = true;
            }
          });
          if (chapterHasMatchingChild || c.title.toLowerCase().includes(q)) {
            subjectHasMatchingChild = true;
            if (chapterHasMatchingChild && !newExpandedChapters[c.id]) {
              newExpandedChapters[c.id] = true;
              changed = true;
            }
          }
        });
        if (subjectHasMatchingChild || s.name.toLowerCase().includes(q) || (s.code && s.code.toLowerCase().includes(q))) {
          examHasMatchingChild = true;
          if (subjectHasMatchingChild && !newExpandedSubjects[s.id]) {
            newExpandedSubjects[s.id] = true;
            changed = true;
          }
        }
      });
      if (examHasMatchingChild && !newExpandedExams[exam.id]) {
        newExpandedExams[exam.id] = true;
        changed = true;
      }
    });

    if (changed) {
      setExpandedExams(newExpandedExams);
      setExpandedSubjects(newExpandedSubjects);
      setExpandedChapters(newExpandedChapters);
    }
  }, [searchQuery, subjectsMap, chaptersMap, topicsMap]);

  // Memoized filtered exams list
  const filteredExams = useMemo(() => {
    return exams.filter(exam => {
      if (selectedCategory !== 'ALL' && exam.category !== selectedCategory) {
        return false;
      }
      return doesExamMatchSearch(exam, searchQuery);
    });
  }, [exams, selectedCategory, searchQuery, subjectsMap, chaptersMap, topicsMap]);

  // ─── 2. Lazy Load Subjects for Exam ────────────────────────────────────────
  const toggleExam = async (examId: string) => {
    setExpandedExams(prev => ({ ...prev, [examId]: !prev[examId] }));
    if (!subjectsMap[examId]) {
      setLoadingNodes(prev => ({ ...prev, [examId]: true }));
      try {
        const res = await learnApi.get(`/content/exams/${examId}/subjects`);
        setSubjectsMap(prev => ({ ...prev, [examId]: res.data || [] }));
      } catch (err: any) {
        console.error('Failed to load subjects:', err);
      } finally {
        setLoadingNodes(prev => ({ ...prev, [examId]: false }));
      }
    }
  };

  // ─── 3. Lazy Load Chapters for Subject ─────────────────────────────────────
  const toggleSubject = async (subjectId: string) => {
    setExpandedSubjects(prev => ({ ...prev, [subjectId]: !prev[subjectId] }));
    if (!chaptersMap[subjectId]) {
      setLoadingNodes(prev => ({ ...prev, [subjectId]: true }));
      try {
        const res = await learnApi.get(`/content/subjects/${subjectId}/chapters`);
        setChaptersMap(prev => ({ ...prev, [subjectId]: res.data || [] }));
      } catch (err: any) {
        console.error('Failed to load chapters:', err);
      } finally {
        setLoadingNodes(prev => ({ ...prev, [subjectId]: false }));
      }
    }
  };

  // ─── 4. Lazy Load Topics for Chapter ───────────────────────────────────────
  const toggleChapter = async (chapterId: string) => {
    setExpandedChapters(prev => ({ ...prev, [chapterId]: !prev[chapterId] }));
    if (!topicsMap[chapterId]) {
      setLoadingNodes(prev => ({ ...prev, [chapterId]: true }));
      try {
        const res = await learnApi.get(`/content/chapters/${chapterId}/topics`);
        setTopicsMap(prev => ({ ...prev, [chapterId]: res.data || [] }));
      } catch (err: any) {
        console.error('Failed to load topics:', err);
      } finally {
        setLoadingNodes(prev => ({ ...prev, [chapterId]: false }));
      }
    }
  };

  // ─── Tree Expand / Collapse All ───────────────────────────────────────────
  const handleExpandAll = () => {
    const newExams: Record<string, boolean> = {};
    const newSubjects: Record<string, boolean> = {};
    const newChapters: Record<string, boolean> = {};

    exams.forEach(exam => {
      newExams[exam.id] = true;
      (subjectsMap[exam.id] || []).forEach(subject => {
        newSubjects[subject.id] = true;
        (chaptersMap[subject.id] || []).forEach(chapter => {
          newChapters[chapter.id] = true;
        });
      });
    });

    setExpandedExams(newExams);
    setExpandedSubjects(newSubjects);
    setExpandedChapters(newChapters);
    toast.info('Expanded all loaded curriculum levels');
  };

  const handleCollapseAll = () => {
    setExpandedExams({});
    setExpandedSubjects({});
    setExpandedChapters({});
    toast.info('Collapsed all curriculum levels');
  };

  // ─── CSV Syllabus Exporter (RFC-4180) ──────────────────────────────────────
  const handleExportCurriculumCSV = async () => {
    if (exams.length === 0) {
      toast.error('No exams available to export.');
      return;
    }

    setExportingCsv(true);
    const toastId = toast.loading('Compiling complete syllabus hierarchy for export...');

    try {
      // Determine target exam: if node selected, use its exam; otherwise use the first active exam or all loaded
      const targetExam = selectedNode 
        ? (selectedNode.type === 'EXAM' ? selectedNode.data : selectedNode.exam)
        : (exams.find(e => e.isActive) || exams[0]);

      // 1. Fetch subjects if not in memory
      let subjects = subjectsMap[targetExam.id];
      if (!subjects) {
        const subRes = await learnApi.get(`/content/exams/${targetExam.id}/subjects`);
        subjects = subRes.data || [];
        setSubjectsMap(prev => ({ ...prev, [targetExam.id]: subjects }));
      }

      // CSV headers RFC-4180
      const headers = [
        'Exam Standard',
        'Category',
        'Exam Slug',
        'Subject Name',
        'Subject Code',
        'Chapter Title',
        'Chapter Order',
        'Topic Title',
        'Topic Order',
        'Topic Description',
        'Topic UUID'
      ];

      const rows: string[][] = [];

      const escapeCsv = (str: any) => {
        if (str === null || str === undefined) return '""';
        const s = String(str).replace(/"/g, '""');
        return `"${s}"`;
      };

      if (subjects.length === 0) {
        rows.push([
          escapeCsv(targetExam.name),
          escapeCsv(targetExam.category),
          escapeCsv(targetExam.slug),
          '""', '""', '""', '""', '""', '""', '""', '""'
        ]);
      } else {
        for (const subject of subjects) {
          // Fetch chapters if not in memory
          let chapters = chaptersMap[subject.id];
          if (!chapters) {
            try {
              const chapRes = await learnApi.get(`/content/subjects/${subject.id}/chapters`);
              chapters = chapRes.data || [];
              setChaptersMap(prev => ({ ...prev, [subject.id]: chapters }));
            } catch {
              chapters = [];
            }
          }

          if (chapters.length === 0) {
            rows.push([
              escapeCsv(targetExam.name),
              escapeCsv(targetExam.category),
              escapeCsv(targetExam.slug),
              escapeCsv(subject.name),
              escapeCsv(subject.code || ''),
              '""', '""', '""', '""', '""', '""'
            ]);
          } else {
            for (const chapter of chapters) {
              // Fetch topics if not in memory
              let topics = topicsMap[chapter.id];
              if (!topics) {
                try {
                  const topRes = await learnApi.get(`/content/chapters/${chapter.id}/topics`);
                  topics = topRes.data || [];
                  setTopicsMap(prev => ({ ...prev, [chapter.id]: topics }));
                } catch {
                  topics = [];
                }
              }

              if (topics.length === 0) {
                rows.push([
                  escapeCsv(targetExam.name),
                  escapeCsv(targetExam.category),
                  escapeCsv(targetExam.slug),
                  escapeCsv(subject.name),
                  escapeCsv(subject.code || ''),
                  escapeCsv(chapter.title),
                  escapeCsv(chapter.orderIndex),
                  '""', '""', '""', '""'
                ]);
              } else {
                for (const topic of topics) {
                  rows.push([
                    escapeCsv(targetExam.name),
                    escapeCsv(targetExam.category),
                    escapeCsv(targetExam.slug),
                    escapeCsv(subject.name),
                    escapeCsv(subject.code || ''),
                    escapeCsv(chapter.title),
                    escapeCsv(chapter.orderIndex),
                    escapeCsv(topic.title),
                    escapeCsv(topic.orderIndex),
                    escapeCsv(topic.description || ''),
                    escapeCsv(topic.id)
                  ]);
                }
              }
            }
          }
        }
      }

      const csvContent = '\uFEFF' + [
        headers.map(escapeCsv).join(','),
        ...rows.map(r => r.join(','))
      ].join('\r\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `devlens_syllabus_${targetExam.slug}_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success(`Exported ${targetExam.name} syllabus (${rows.length} records) successfully!`, { id: toastId });
    } catch (err: any) {
      console.error('CSV export failed:', err);
      toast.error('Failed to export curriculum CSV: ' + (err.message || 'Unknown error'), { id: toastId });
    } finally {
      setExportingCsv(false);
    }
  };

  // ─── Create Handlers ───────────────────────────────────────────────────────
  const handleCreateExam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExamName.trim()) return;
    setSavingAction(true);
    try {
      const res = await api.post('/learn/admin/curriculum/exams', {
        name: newExamName.trim(),
        fullName: newExamFullName.trim() || undefined,
        category: newExamCategory,
        displayOrder: newExamOrder,
        isActive: true,
      });
      toast.success('Exam created successfully');
      setCreateExamModal(false);
      setNewExamName('');
      setNewExamFullName('');
      await loadExams();
      setSelectedNode({ type: 'EXAM', data: res.data });
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to create exam');
    } finally {
      setSavingAction(false);
    }
  };

  const handleCreateSubject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!createSubjectModal || !newSubjectName.trim()) return;
    const examId = createSubjectModal.exam.id;
    setSavingAction(true);
    try {
      const res = await api.post('/learn/admin/curriculum/subjects', {
        examTypeId: examId,
        name: newSubjectName.trim(),
        code: newSubjectCode.trim() || undefined,
        orderIndex: newSubjectOrder,
        isActive: true,
      });
      toast.success('Subject created');
      setCreateSubjectModal(null);
      setNewSubjectName('');
      setNewSubjectCode('');
      // Refresh subjects
      const updated = await learnApi.get(`/content/exams/${examId}/subjects`);
      setSubjectsMap(prev => ({ ...prev, [examId]: updated.data || [] }));
      setSelectedNode({ type: 'SUBJECT', data: res.data, exam: createSubjectModal.exam });
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to create subject');
    } finally {
      setSavingAction(false);
    }
  };

  const handleCreateChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!createChapterModal || !newChapterTitle.trim()) return;
    const subjectId = createChapterModal.subject.id;
    setSavingAction(true);
    try {
      const res = await api.post('/learn/admin/curriculum/chapters', {
        subjectId: subjectId,
        title: newChapterTitle.trim(),
        orderIndex: newChapterOrder,
        isActive: true,
      });
      toast.success('Chapter created');
      setCreateChapterModal(null);
      setNewChapterTitle('');
      // Refresh chapters
      const updated = await learnApi.get(`/content/subjects/${subjectId}/chapters`);
      setChaptersMap(prev => ({ ...prev, [subjectId]: updated.data || [] }));
      setSelectedNode({ 
        type: 'CHAPTER', 
        data: res.data, 
        subject: createChapterModal.subject, 
        exam: createChapterModal.exam 
      });
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to create chapter');
    } finally {
      setSavingAction(false);
    }
  };

  const handleCreateTopic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!createTopicModal || !newTopicTitle.trim()) return;
    const chapterId = createTopicModal.chapter.id;
    setSavingAction(true);
    try {
      const res = await api.post('/learn/admin/curriculum/topics', {
        chapterId: chapterId,
        title: newTopicTitle.trim(),
        description: newTopicDesc.trim() || undefined,
        orderIndex: newTopicOrder,
        isActive: true,
      });
      toast.success('Topic created');
      setCreateTopicModal(null);
      setNewTopicTitle('');
      setNewTopicDesc('');
      // Refresh topics
      const updated = await learnApi.get(`/content/chapters/${chapterId}/topics`);
      setTopicsMap(prev => ({ ...prev, [chapterId]: updated.data || [] }));
      setSelectedNode({
        type: 'TOPIC',
        data: res.data,
        chapter: createTopicModal.chapter,
        subject: createTopicModal.subject,
        exam: createTopicModal.exam,
      });
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to create topic');
    } finally {
      setSavingAction(false);
    }
  };

  // ─── Delete Handlers ───────────────────────────────────────────────────────
  const handleDeleteNode = async () => {
    if (!selectedNode) return;
    if (!window.confirm(`Are you sure you want to delete or deactivate this ${selectedNode.type}?`)) return;

    setSavingAction(true);
    try {
      if (selectedNode.type === 'EXAM') {
        await api.delete(`/learn/admin/curriculum/exams/${selectedNode.data.id}`);
        toast.success('Exam deactivated');
        await loadExams();
        setSelectedNode(null);
      } else if (selectedNode.type === 'SUBJECT') {
        await api.delete(`/learn/admin/curriculum/subjects/${selectedNode.data.id}`);
        toast.success('Subject deleted');
        const examId = selectedNode.exam.id;
        const updated = await learnApi.get(`/content/exams/${examId}/subjects`);
        setSubjectsMap(prev => ({ ...prev, [examId]: updated.data || [] }));
        setSelectedNode({ type: 'EXAM', data: selectedNode.exam });
      } else if (selectedNode.type === 'CHAPTER') {
        await api.delete(`/learn/admin/curriculum/chapters/${selectedNode.data.id}`);
        toast.success('Chapter deleted');
        const subjectId = selectedNode.subject.id;
        const updated = await learnApi.get(`/content/subjects/${subjectId}/chapters`);
        setChaptersMap(prev => ({ ...prev, [subjectId]: updated.data || [] }));
        setSelectedNode({ type: 'SUBJECT', data: selectedNode.subject, exam: selectedNode.exam });
      } else if (selectedNode.type === 'TOPIC') {
        await api.delete(`/learn/admin/curriculum/topics/${selectedNode.data.id}`);
        toast.success('Topic deleted');
        const chapterId = selectedNode.chapter.id;
        const updated = await learnApi.get(`/content/chapters/${chapterId}/topics`);
        setTopicsMap(prev => ({ ...prev, [chapterId]: updated.data || [] }));
        setSelectedNode({ type: 'CHAPTER', data: selectedNode.chapter, subject: selectedNode.subject, exam: selectedNode.exam });
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Delete operation failed');
    } finally {
      setSavingAction(false);
    }
  };

  // ─── Save Edits in Right Pane ──────────────────────────────────────────────
  const handleSaveNodeEdits = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNode) return;
    setSavingAction(true);

    try {
      if (selectedNode.type === 'EXAM') {
        const res = await api.put(`/learn/admin/curriculum/exams/${selectedNode.data.id}`, selectedNode.data);
        toast.success('Exam updated');
        await loadExams();
        setSelectedNode({ type: 'EXAM', data: res.data });
      } else if (selectedNode.type === 'SUBJECT') {
        const res = await api.put(`/learn/admin/curriculum/subjects/${selectedNode.data.id}`, selectedNode.data);
        toast.success('Subject updated');
        const examId = selectedNode.exam.id;
        const updated = await learnApi.get(`/content/exams/${examId}/subjects`);
        setSubjectsMap(prev => ({ ...prev, [examId]: updated.data || [] }));
        setSelectedNode({ type: 'SUBJECT', data: res.data, exam: selectedNode.exam });
      } else if (selectedNode.type === 'CHAPTER') {
        const res = await api.put(`/learn/admin/curriculum/chapters/${selectedNode.data.id}`, selectedNode.data);
        toast.success('Chapter updated');
        const subjectId = selectedNode.subject.id;
        const updated = await learnApi.get(`/content/subjects/${subjectId}/chapters`);
        setChaptersMap(prev => ({ ...prev, [subjectId]: updated.data || [] }));
        setSelectedNode({ type: 'CHAPTER', data: res.data, subject: selectedNode.subject, exam: selectedNode.exam });
      } else if (selectedNode.type === 'TOPIC') {
        const res = await api.put(`/learn/admin/curriculum/topics/${selectedNode.data.id}`, selectedNode.data);
        toast.success('Topic updated');
        const chapterId = selectedNode.chapter.id;
        const updated = await learnApi.get(`/content/chapters/${chapterId}/topics`);
        setTopicsMap(prev => ({ ...prev, [chapterId]: updated.data || [] }));
        setSelectedNode({ type: 'TOPIC', data: res.data, chapter: selectedNode.chapter, subject: selectedNode.subject, exam: selectedNode.exam });
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to save changes');
    } finally {
      setSavingAction(false);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* ─── Top Header ───────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-xs text-foreground">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
              Syllabus Architecture
            </span>
            <span className="text-xs text-muted-foreground">• Full CRUD Engine</span>
          </div>
          <h1 className="text-2xl font-black text-foreground mt-1">Curriculum Hierarchy Builder</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Create, reorganize, rename, and manage Exams, Subjects, Chapters, and Topics in real time.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleExportCurriculumCSV}
            disabled={exportingCsv || exams.length === 0}
            className="px-3.5 py-2 text-xs font-bold bg-muted hover:bg-muted/80 text-foreground border border-border rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            title="Export complete hierarchical syllabus as CSV (RFC-4180)"
          >
            <Download className={`w-4 h-4 text-primary ${exportingCsv ? 'animate-bounce' : ''}`} />
            {exportingCsv ? 'Exporting CSV...' : 'Export Syllabus CSV'}
          </button>
          <button
            onClick={() => setCreateExamModal(true)}
            className="px-3.5 py-2 text-xs font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add New Exam
          </button>
        </div>
      </div>

      {/* ─── Dual-Pane Explorer ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Pane: Interactive Tree View (7 cols) */}
        <div className="lg:col-span-7 bg-card rounded-2xl border border-border shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <FolderTree className="w-4 h-4 text-primary" />
              <h2 className="text-xs font-extrabold text-foreground uppercase tracking-wider">
                Curriculum Explorer Tree
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleExpandAll}
                className="px-2 py-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg cursor-pointer transition-colors flex items-center gap-1"
                title="Expand All Loaded Nodes"
              >
                <ChevronDown className="w-3.5 h-3.5" />
                Expand All
              </button>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="px-2 py-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg cursor-pointer transition-colors flex items-center gap-1"
                title="Collapse All Nodes"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                Collapse All
              </button>
              <div className="h-3.5 w-px bg-border mx-1" />
              <button
                onClick={loadExams}
                className="p-1 text-muted-foreground hover:text-foreground rounded cursor-pointer transition-colors"
                title="Refresh Tree"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingExams ? 'animate-spin text-primary' : ''}`} />
              </button>
            </div>
          </div>

          {/* Category Filter Ribbon */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            {CATEGORIES.map(cat => {
              const count = cat === 'ALL' 
                ? exams.length 
                : exams.filter(e => e.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1 rounded-full ${
                    selectedCategory === cat ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-background/80 text-muted-foreground'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Filter & Deep Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search across exams, subjects, chapters, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-8 pr-8 py-2 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 rounded cursor-pointer transition-colors"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Tree Structure */}
          <div className="space-y-2 max-h-[650px] overflow-y-auto pr-1">
            {loadingExams ? (
              <div className="py-12 text-center text-muted-foreground text-xs">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto text-primary mb-2" />
                Loading curriculum hierarchy...
              </div>
            ) : exams.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground text-xs">
                No exams found. Click "+ Add New Exam" to begin building.
              </div>
            ) : filteredExams.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground text-xs space-y-2">
                <p>No exams match the selected category or search filter.</p>
                {(searchQuery || selectedCategory !== 'ALL') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('ALL');
                    }}
                    className="text-primary hover:underline font-semibold cursor-pointer text-xs"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            ) : (
              filteredExams.map((exam) => (
                  <div key={exam.id} className="border border-border rounded-xl overflow-hidden bg-card">
                    {/* Exam Row */}
                    <div 
                      onClick={() => setSelectedNode({ type: 'EXAM', data: exam })}
                      className={`p-2.5 flex items-center justify-between cursor-pointer transition-all duration-150 hover:translate-x-0.5 ${
                        selectedNode?.type === 'EXAM' && selectedNode.data.id === exam.id
                          ? 'bg-primary/10 border-l-4 border-primary'
                          : 'hover:bg-muted/40'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 flex-wrap sm:flex-nowrap">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExam(exam.id);
                          }}
                          className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                        >
                          {expandedExams[exam.id] ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        {selectedNode?.type === 'EXAM' && selectedNode.data.id === exam.id && (
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                        )}
                        <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-extrabold text-xs text-foreground truncate">{exam.name}</span>

                        {/* Search Match Badge */}
                        {searchQuery && (exam.name.toLowerCase().includes(searchQuery.toLowerCase()) || (exam.fullName && exam.fullName.toLowerCase().includes(searchQuery.toLowerCase())) || exam.slug.toLowerCase().includes(searchQuery.toLowerCase())) && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 shrink-0">
                            Match
                          </span>
                        )}

                        {/* Duplicate Name Disambiguation Badge */}
                        {examNameCounts[(exam.name || '').trim().toLowerCase()] > 1 && (
                          <span 
                            title="Multiple exams exist with this exact title. Use slug to disambiguate."
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1 shrink-0"
                          >
                            <AlertCircle className="w-2.5 h-2.5" />
                            Duplicate Title
                          </span>
                        )}

                        {/* Database Slug Badge */}
                        <span 
                          title={`Database Slug: ${exam.slug}`}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border shrink-0"
                        >
                          {exam.slug}
                        </span>

                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border shrink-0">
                          {exam.category}
                        </span>

                        {!exam.isActive && (
                          <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0">
                            Inactive
                          </span>
                        )}

                        {/* Loaded Child Count Pill */}
                        {subjectsMap[exam.id] !== undefined && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                            {subjectsMap[exam.id].length} {subjectsMap[exam.id].length === 1 ? 'Subject' : 'Subjects'}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 shrink-0 ml-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCreateSubjectModal({ exam });
                          }}
                          className="px-2 py-0.5 text-[10px] font-bold bg-primary/10 hover:bg-primary/20 text-primary rounded-md border border-primary/20 transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                          Subject
                        </button>
                      </div>
                    </div>

                    {/* Subjects Under Exam */}
                    {expandedExams[exam.id] && (
                      <div className="pl-6 pr-2 py-2 space-y-1.5 bg-muted/20 border-t border-border">
                        {loadingNodes[exam.id] ? (
                          <div className="text-[11px] text-muted-foreground py-2 pl-4">Loading subjects...</div>
                        ) : (subjectsMap[exam.id] || []).length === 0 ? (
                          <div className="text-[11px] text-muted-foreground py-1 pl-4">
                            No subjects yet. Click "+ Subject" to add.
                          </div>
                        ) : (
                          (subjectsMap[exam.id] || []).map((subject) => (
                            <div key={subject.id} className="border border-border/80 rounded-lg bg-card overflow-hidden">
                              {/* Subject Row */}
                              <div
                                onClick={() => setSelectedNode({ type: 'SUBJECT', data: subject, exam })}
                                className={`p-2 flex items-center justify-between cursor-pointer transition-all duration-150 hover:translate-x-0.5 ${
                                  selectedNode?.type === 'SUBJECT' && selectedNode.data.id === subject.id
                                    ? 'bg-blue-500/10 border-l-4 border-blue-500 dark:border-blue-400'
                                    : 'hover:bg-muted/40'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0 flex-wrap sm:flex-nowrap">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleSubject(subject.id);
                                    }}
                                    className="p-0.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                                  >
                                    {expandedSubjects[subject.id] ? (
                                      <ChevronDown className="w-3.5 h-3.5" />
                                    ) : (
                                      <ChevronRight className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                  {selectedNode?.type === 'SUBJECT' && selectedNode.data.id === subject.id && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                                  )}
                                  <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                  <span className="font-bold text-xs text-foreground truncate">{subject.name}</span>
                                  {searchQuery && (subject.name.toLowerCase().includes(searchQuery.toLowerCase()) || (subject.code && subject.code.toLowerCase().includes(searchQuery.toLowerCase()))) && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 shrink-0">
                                      Match
                                    </span>
                                  )}
                                  {subject.code && (
                                    <span className="text-[9px] font-mono text-muted-foreground bg-muted px-1 rounded border border-border/50 shrink-0">
                                      {subject.code}
                                    </span>
                                  )}
                                  {!subject.isActive && (
                                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0">
                                      Inactive
                                    </span>
                                  )}
                                  {chaptersMap[subject.id] !== undefined && (
                                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                                      {chaptersMap[subject.id].length} {chaptersMap[subject.id].length === 1 ? 'Chapter' : 'Chapters'}
                                    </span>
                                  )}
                                </div>

                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCreateChapterModal({ exam, subject });
                                  }}
                                  className="px-1.5 py-0.5 text-[10px] font-bold bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded border border-blue-500/20 transition-all flex items-center gap-1 cursor-pointer shrink-0 ml-2"
                                >
                                  <Plus className="w-3 h-3" />
                                  Chapter
                                </button>
                              </div>

                              {/* Chapters Under Subject */}
                              {expandedSubjects[subject.id] && (
                                <div className="pl-6 pr-2 py-1.5 space-y-1 bg-muted/30 border-t border-border">
                                  {loadingNodes[subject.id] ? (
                                    <div className="text-[10px] text-muted-foreground py-1 pl-2">Loading chapters...</div>
                                  ) : (chaptersMap[subject.id] || []).length === 0 ? (
                                    <div className="text-[10px] text-muted-foreground py-1 pl-2">
                                      No chapters yet. Click "+ Chapter".
                                    </div>
                                  ) : (
                                    (chaptersMap[subject.id] || []).map((chapter) => (
                                      <div key={chapter.id} className="border border-border/60 rounded-md bg-card overflow-hidden">
                                        {/* Chapter Row */}
                                        <div
                                          onClick={() => setSelectedNode({ type: 'CHAPTER', data: chapter, subject, exam })}
                                          className={`p-1.5 flex items-center justify-between cursor-pointer transition-all duration-150 hover:translate-x-0.5 ${
                                            selectedNode?.type === 'CHAPTER' && selectedNode.data.id === chapter.id
                                              ? 'bg-purple-500/10 border-l-4 border-purple-500 dark:border-purple-400'
                                              : 'hover:bg-muted/40'
                                          }`}
                                        >
                                          <div className="flex items-center gap-1.5 min-w-0 flex-wrap sm:flex-nowrap">
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                toggleChapter(chapter.id);
                                              }}
                                              className="p-0.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                                            >
                                              {expandedChapters[chapter.id] ? (
                                                <ChevronDown className="w-3 h-3" />
                                              ) : (
                                                <ChevronRight className="w-3 h-3" />
                                              )}
                                            </button>
                                            {selectedNode?.type === 'CHAPTER' && selectedNode.data.id === chapter.id && (
                                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shrink-0" />
                                            )}
                                            <Layers className="w-3 h-3 text-purple-500 shrink-0" />
                                            <span className="font-semibold text-[11px] text-foreground truncate">
                                              {chapter.orderIndex ? `${chapter.orderIndex}. ` : ''}{chapter.title}
                                            </span>
                                            {searchQuery && chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 shrink-0">
                                                Match
                                              </span>
                                            )}
                                            {!chapter.isActive && (
                                              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0">
                                                Inactive
                                              </span>
                                            )}
                                            {topicsMap[chapter.id] !== undefined && (
                                              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 shrink-0">
                                                {topicsMap[chapter.id].length} {topicsMap[chapter.id].length === 1 ? 'Topic' : 'Topics'}
                                              </span>
                                            )}
                                          </div>

                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setCreateTopicModal({ exam, subject, chapter });
                                            }}
                                            className="px-1.5 py-0.5 text-[9px] font-bold bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded border border-purple-500/20 transition-all flex items-center gap-0.5 cursor-pointer shrink-0 ml-2"
                                          >
                                            <Plus className="w-2.5 h-2.5" />
                                            Topic
                                          </button>
                                        </div>

                                        {/* Topics Under Chapter */}
                                        {expandedChapters[chapter.id] && (
                                          <div className="pl-6 pr-2 py-1 space-y-1 bg-muted/40 border-t border-border">
                                            {loadingNodes[chapter.id] ? (
                                              <div className="text-[10px] text-muted-foreground py-1">Loading topics...</div>
                                            ) : (topicsMap[chapter.id] || []).length === 0 ? (
                                              <div className="text-[10px] text-muted-foreground py-1">
                                                No topics yet. Click "+ Topic".
                                              </div>
                                            ) : (
                                              (topicsMap[chapter.id] || []).map((topic) => (
                                                <div
                                                  key={topic.id}
                                                  onClick={() => setSelectedNode({ type: 'TOPIC', data: topic, chapter, subject, exam })}
                                                  className={`p-1.5 rounded-md flex items-center justify-between cursor-pointer text-[11px] transition-all duration-150 hover:translate-x-0.5 ${
                                                    selectedNode?.type === 'TOPIC' && selectedNode.data.id === topic.id
                                                      ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-500/30'
                                                      : 'hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                                                  }`}
                                                >
                                                  <div className="flex items-center gap-1.5 truncate">
                                                    {selectedNode?.type === 'TOPIC' && selectedNode.data.id === topic.id ? (
                                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                                    ) : (
                                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 shrink-0" />
                                                    )}
                                                    <span className="truncate">
                                                      {topic.orderIndex ? `${topic.orderIndex}. ` : ''}{topic.title}
                                                    </span>
                                                    {searchQuery && (topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || (topic.description && topic.description.toLowerCase().includes(searchQuery.toLowerCase()))) && (
                                                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 shrink-0">
                                                        Match
                                                      </span>
                                                    )}
                                                    {!topic.isActive && (
                                                      <span className="text-[9px] font-semibold px-1 py-0.2 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0">
                                                        Inactive
                                                      </span>
                                                    )}
                                                  </div>
                                                  <span className="text-[9px] text-muted-foreground/70 font-mono shrink-0 ml-1">
                                                    #{topic.orderIndex}
                                                  </span>
                                                </div>
                                              ))
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    ))
                                  )}
                                </div>
                              )}
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))
            )}
          </div>
        </div>

        {/* Right Pane: Inspector & Inline Editor (5 cols) */}
        <div className="lg:col-span-5 bg-card rounded-2xl border border-border shadow-xs p-5 space-y-5 sticky top-24">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Hierarchy Node Inspector
              </span>
              <h3 className="text-sm font-black text-foreground">
                {selectedNode ? `${selectedNode.type} Details` : 'Select a Node'}
              </h3>
            </div>
            {selectedNode && (
              <button
                type="button"
                onClick={handleDeleteNode}
                disabled={savingAction}
                className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                title="Delete this entity"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          {selectedNode ? (
            <form onSubmit={handleSaveNodeEdits} className="space-y-4 text-xs">
              {/* Node ID Badge & Hierarchy Breadcrumb */}
              <div className="p-3 bg-muted/30 border border-border rounded-xl space-y-1.5">
                <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                  <span className="font-semibold">UUID:</span>
                  <span className="font-mono text-foreground font-semibold selection:bg-primary/20">{selectedNode.data.id}</span>
                </div>
                {selectedNode.type === 'EXAM' && (
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                    <span className="font-semibold">Database Slug:</span>
                    <span className="font-mono text-foreground font-bold px-1.5 py-0.5 rounded bg-muted border border-border">
                      {selectedNode.data.slug}
                    </span>
                  </div>
                )}
                {selectedNode.type !== 'EXAM' && (
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                    <span className="font-semibold">Exam Standard:</span>
                    <strong className="text-foreground">
                      {selectedNode.exam.name} <span className="font-mono font-normal text-muted-foreground">({selectedNode.exam.slug})</span>
                    </strong>
                  </div>
                )}
                {(selectedNode.type === 'CHAPTER' || selectedNode.type === 'TOPIC') && (
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                    <span className="font-semibold">Parent Subject:</span>
                    <strong className="text-foreground">{selectedNode.subject.name}</strong>
                  </div>
                )}
                {selectedNode.type === 'TOPIC' && (
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                    <span className="font-semibold">Parent Chapter:</span>
                    <strong className="text-foreground">{selectedNode.chapter.title}</strong>
                  </div>
                )}
              </div>

              {/* Dynamic Form Fields based on Type */}
              {selectedNode.type === 'EXAM' && (
                <>
                  <div>
                    <label className="font-bold text-foreground block mb-1">Exam Name:</label>
                    <input
                      type="text"
                      required
                      value={selectedNode.data.name}
                      onChange={(e) => setSelectedNode({
                        ...selectedNode,
                        data: { ...selectedNode.data, name: e.target.value }
                      })}
                      className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-foreground block mb-1">Full Official Name:</label>
                    <input
                      type="text"
                      value={selectedNode.data.fullName || ''}
                      onChange={(e) => setSelectedNode({
                        ...selectedNode,
                        data: { ...selectedNode.data, fullName: e.target.value }
                      })}
                      className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-foreground block mb-1">Category:</label>
                      <select
                        value={selectedNode.data.category}
                        onChange={(e) => setSelectedNode({
                          ...selectedNode,
                          data: { ...selectedNode.data, category: e.target.value }
                        })}
                        className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                      >
                        <option value="SCHOOL">SCHOOL</option>
                        <option value="ENGINEERING">ENGINEERING</option>
                        <option value="MEDICAL">MEDICAL</option>
                        <option value="GOVT">GOVT</option>
                        <option value="CUET">CUET</option>
                        <option value="GRADUATION">GRADUATION</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-foreground block mb-1">Display Order:</label>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            const cur = selectedNode.data.displayOrder || 1;
                            if (cur > 1) {
                              setSelectedNode({
                                ...selectedNode,
                                data: { ...selectedNode.data, displayOrder: cur - 1 }
                              });
                            }
                          }}
                          className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-extrabold rounded-xl border border-border text-xs transition-colors cursor-pointer"
                          title="Decrease Order (-1)"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={selectedNode.data.displayOrder}
                          onChange={(e) => setSelectedNode({
                            ...selectedNode,
                            data: { ...selectedNode.data, displayOrder: Number(e.target.value) }
                          })}
                          className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20 text-center font-bold"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const cur = selectedNode.data.displayOrder || 1;
                            setSelectedNode({
                              ...selectedNode,
                              data: { ...selectedNode.data, displayOrder: cur + 1 }
                            });
                          }}
                          className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-extrabold rounded-xl border border-border text-xs transition-colors cursor-pointer"
                          title="Increase Order (+1)"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedNode.type === 'SUBJECT' && (
                <>
                  <div>
                    <label className="font-bold text-foreground block mb-1">Subject Name:</label>
                    <input
                      type="text"
                      required
                      value={selectedNode.data.name}
                      onChange={(e) => setSelectedNode({
                        ...selectedNode,
                        data: { ...selectedNode.data, name: e.target.value }
                      })}
                      className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-foreground block mb-1">Subject Code:</label>
                      <input
                        type="text"
                        value={selectedNode.data.code || ''}
                        onChange={(e) => setSelectedNode({
                          ...selectedNode,
                          data: { ...selectedNode.data, code: e.target.value }
                        })}
                        className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-mono"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-foreground block mb-1">Order Index:</label>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            const cur = selectedNode.data.orderIndex || 1;
                            if (cur > 1) {
                              setSelectedNode({
                                ...selectedNode,
                                data: { ...selectedNode.data, orderIndex: cur - 1 }
                              });
                            }
                          }}
                          className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-extrabold rounded-xl border border-border text-xs transition-colors cursor-pointer"
                          title="Decrease Order (-1)"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={selectedNode.data.orderIndex}
                          onChange={(e) => setSelectedNode({
                            ...selectedNode,
                            data: { ...selectedNode.data, orderIndex: Number(e.target.value) }
                          })}
                          className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-center font-bold"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const cur = selectedNode.data.orderIndex || 1;
                            setSelectedNode({
                              ...selectedNode,
                              data: { ...selectedNode.data, orderIndex: cur + 1 }
                            });
                          }}
                          className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-extrabold rounded-xl border border-border text-xs transition-colors cursor-pointer"
                          title="Increase Order (+1)"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedNode.type === 'CHAPTER' && (
                <>
                  <div>
                    <label className="font-bold text-foreground block mb-1">Chapter Title:</label>
                    <input
                      type="text"
                      required
                      value={selectedNode.data.title}
                      onChange={(e) => setSelectedNode({
                        ...selectedNode,
                        data: { ...selectedNode.data, title: e.target.value }
                      })}
                      className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-foreground block mb-1">Order Index:</label>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          const cur = selectedNode.data.orderIndex || 1;
                          if (cur > 1) {
                            setSelectedNode({
                              ...selectedNode,
                              data: { ...selectedNode.data, orderIndex: cur - 1 }
                            });
                          }
                        }}
                        className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-extrabold rounded-xl border border-border text-xs transition-colors cursor-pointer"
                        title="Decrease Order (-1)"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={selectedNode.data.orderIndex}
                        onChange={(e) => setSelectedNode({
                          ...selectedNode,
                          data: { ...selectedNode.data, orderIndex: Number(e.target.value) }
                        })}
                        className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-center font-bold"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const cur = selectedNode.data.orderIndex || 1;
                          setSelectedNode({
                            ...selectedNode,
                            data: { ...selectedNode.data, orderIndex: cur + 1 }
                          });
                        }}
                        className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-extrabold rounded-xl border border-border text-xs transition-colors cursor-pointer"
                        title="Increase Order (+1)"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </>
              )}

              {selectedNode.type === 'TOPIC' && (
                <>
                  <div>
                    <label className="font-bold text-foreground block mb-1">Topic Title:</label>
                    <input
                      type="text"
                      required
                      value={selectedNode.data.title}
                      onChange={(e) => setSelectedNode({
                        ...selectedNode,
                        data: { ...selectedNode.data, title: e.target.value }
                      })}
                      className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 font-bold transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-foreground block mb-1">Description / Syllabus Scope:</label>
                    <textarea
                      rows={2}
                      value={selectedNode.data.description || ''}
                      onChange={(e) => setSelectedNode({
                        ...selectedNode,
                        data: { ...selectedNode.data, description: e.target.value }
                      })}
                      className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-foreground block mb-1">Order Index:</label>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          const cur = selectedNode.data.orderIndex || 1;
                          if (cur > 1) {
                            setSelectedNode({
                              ...selectedNode,
                              data: { ...selectedNode.data, orderIndex: cur - 1 }
                            });
                          }
                        }}
                        className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-extrabold rounded-xl border border-border text-xs transition-colors cursor-pointer"
                        title="Decrease Order (-1)"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={selectedNode.data.orderIndex}
                        onChange={(e) => setSelectedNode({
                          ...selectedNode,
                          data: { ...selectedNode.data, orderIndex: Number(e.target.value) }
                        })}
                        className="w-full text-xs p-2.5 bg-background border border-border text-foreground rounded-xl outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-center font-bold"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const cur = selectedNode.data.orderIndex || 1;
                          setSelectedNode({
                            ...selectedNode,
                            data: { ...selectedNode.data, orderIndex: cur + 1 }
                          });
                        }}
                        className="px-3 py-2 bg-muted hover:bg-muted/80 text-foreground font-extrabold rounded-xl border border-border text-xs transition-colors cursor-pointer"
                        title="Increase Order (+1)"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Contextual Action Deep-Links */}
                  <div className="pt-2 border-t border-border space-y-2">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">
                      Direct Actions for this Topic:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/admin/learn/upload?exam=${selectedNode.exam.id}&subject=${selectedNode.subject.id}&chapter=${selectedNode.chapter.id}&topic=${selectedNode.data.id}`}
                        className="p-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                      >
                        <Video className="w-3.5 h-3.5" />
                        Curate Media
                      </Link>
                      <Link
                        to={`/admin/learn/import?exam=${selectedNode.exam.id}&subject=${selectedNode.subject.id}&chapter=${selectedNode.chapter.id}&topic=${selectedNode.data.id}`}
                        className="p-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/20 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Import CSV
                      </Link>
                    </div>
                  </div>
                </>
              )}

              {/* Save Button */}
              <button
                type="submit"
                disabled={savingAction}
                className="w-full py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {savingAction ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    Save Entity Changes
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-16 text-muted-foreground space-y-2">
              <FolderTree className="w-8 h-8 text-muted-foreground/40 mx-auto" />
              <p className="font-bold text-foreground">No Item Selected</p>
              <p className="text-[11px] text-muted-foreground max-w-xs mx-auto">
                Click on any Exam, Subject, Chapter, or Topic in the left explorer to view and modify its properties.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ─── Modal 1: Create Exam ─────────────────────────────────────────── */}
      {createExamModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-border pb-3">
              <h3 className="font-extrabold text-foreground text-base">Add New Exam Standard</h3>
              <button onClick={() => setCreateExamModal(false)} className="text-muted-foreground hover:text-foreground">✕</button>
            </div>
            <form onSubmit={handleCreateExam} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-foreground block mb-1">Exam Name (Short):</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CBSE Class 11"
                  value={newExamName}
                  onChange={(e) => setNewExamName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="font-bold text-foreground block mb-1">Full Name:</label>
                <input
                  type="text"
                  placeholder="e.g. CBSE Senior Secondary Class 11th"
                  value={newExamFullName}
                  onChange={(e) => setNewExamFullName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-foreground block mb-1">Category:</label>
                  <select
                    value={newExamCategory}
                    onChange={(e) => setNewExamCategory(e.target.value)}
                    className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="SCHOOL">SCHOOL</option>
                    <option value="ENGINEERING">ENGINEERING</option>
                    <option value="MEDICAL">MEDICAL</option>
                    <option value="GOVT">GOVT</option>
                    <option value="CUET">CUET</option>
                    <option value="GRADUATION">GRADUATION</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-foreground block mb-1">Display Order:</label>
                  <input
                    type="number"
                    value={newExamOrder}
                    onChange={(e) => setNewExamOrder(Number(e.target.value))}
                    className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setCreateExamModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingAction || !newExamName.trim()}
                  className="px-4 py-2 text-xs font-bold bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground rounded-xl shadow-xs transition-colors"
                >
                  {savingAction ? 'Creating...' : 'Create Exam'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── Modal 2: Create Subject ──────────────────────────────────────── */}
      {createSubjectModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-border pb-3">
              <div>
                <h3 className="font-extrabold text-foreground text-base">Add Subject</h3>
                <p className="text-xs text-muted-foreground">Under: {createSubjectModal.exam.name}</p>
              </div>
              <button onClick={() => setCreateSubjectModal(null)} className="text-muted-foreground hover:text-foreground">✕</button>
            </div>
            <form onSubmit={handleCreateSubject} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-foreground block mb-1">Subject Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Physics"
                  value={newSubjectName}
                  onChange={(e) => setNewSubjectName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-foreground block mb-1">Subject Code:</label>
                  <input
                    type="text"
                    placeholder="e.g. PHY"
                    value={newSubjectCode}
                    onChange={(e) => setNewSubjectCode(e.target.value)}
                    className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none font-mono focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-foreground block mb-1">Order Index:</label>
                  <input
                    type="number"
                    value={newSubjectOrder}
                    onChange={(e) => setNewSubjectOrder(Number(e.target.value))}
                    className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setCreateSubjectModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingAction || !newSubjectName.trim()}
                  className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl shadow-xs transition-colors"
                >
                  {savingAction ? 'Creating...' : 'Create Subject'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── Modal 3: Create Chapter ──────────────────────────────────────── */}
      {createChapterModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-border pb-3">
              <div>
                <h3 className="font-extrabold text-foreground text-base">Add Chapter</h3>
                <p className="text-xs text-muted-foreground">{createChapterModal.exam.name} &rarr; {createChapterModal.subject.name}</p>
              </div>
              <button onClick={() => setCreateChapterModal(null)} className="text-muted-foreground hover:text-foreground">✕</button>
            </div>
            <form onSubmit={handleCreateChapter} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-foreground block mb-1">Chapter Title:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Laws of Motion"
                  value={newChapterTitle}
                  onChange={(e) => setNewChapterTitle(e.target.value)}
                  className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="font-bold text-foreground block mb-1">Order Index:</label>
                <input
                  type="number"
                  value={newChapterOrder}
                  onChange={(e) => setNewChapterOrder(Number(e.target.value))}
                  className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setCreateChapterModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingAction || !newChapterTitle.trim()}
                  className="px-4 py-2 text-xs font-bold bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl shadow-xs transition-colors"
                >
                  {savingAction ? 'Creating...' : 'Create Chapter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── Modal 4: Create Topic ────────────────────────────────────────── */}
      {createTopicModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-border pb-3">
              <div>
                <h3 className="font-extrabold text-foreground text-base">Add Topic</h3>
                <p className="text-xs text-muted-foreground">Under: {createTopicModal.chapter.title}</p>
              </div>
              <button onClick={() => setCreateTopicModal(null)} className="text-muted-foreground hover:text-foreground">✕</button>
            </div>
            <form onSubmit={handleCreateTopic} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-foreground block mb-1">Topic Title:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Newton's Third Law and Action-Reaction Pairs"
                  value={newTopicTitle}
                  onChange={(e) => setNewTopicTitle(e.target.value)}
                  className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="font-bold text-foreground block mb-1">Description / Scope (Optional):</label>
                <textarea
                  rows={2}
                  placeholder="Key concepts, formula overview, and exam scope"
                  value={newTopicDesc}
                  onChange={(e) => setNewTopicDesc(e.target.value)}
                  className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="font-bold text-foreground block mb-1">Order Index:</label>
                <input
                  type="number"
                  value={newTopicOrder}
                  onChange={(e) => setNewTopicOrder(Number(e.target.value))}
                  className="w-full text-xs p-2.5 bg-background border border-border rounded-xl text-foreground outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setCreateTopicModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingAction || !newTopicTitle.trim()}
                  className="px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl shadow-xs transition-colors"
                >
                  {savingAction ? 'Creating...' : 'Create Topic'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
