import React, { useState, useEffect, useMemo } from 'react';
import { learnApi } from '../../../lib/learn-api';
import { api } from '../../../lib/api';
import { 
  Upload, Video, FileText, CheckCircle, AlertCircle, 
  BookOpen, Trash2, Edit2, RefreshCw, ChevronRight, 
  ExternalLink, Layers, GraduationCap, Sparkles, Lock, Unlock, Play, X, Eye, Clock,
  ChevronUp, ChevronDown, Search, Plus, Pencil
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

interface ExamType {
  id: string;
  name: string;
  fullName?: string;
  category: string;
  slug?: string;
}

interface Subject { 
  id: string; 
  name: string; 
}

interface Chapter { 
  id: string; 
  title: string; 
  orderIndex: number; 
}

interface Topic { 
  id: string; 
  title: string; 
  orderIndex: number; 
  description?: string;
}

export interface ContentItem { 
  id: string; 
  title: string; 
  type: string; 
  contentUrl: string; 
  isFree?: boolean;
  orderIndex?: number;
}

export function getYoutubeId(url: string): string | null {
  if (!url) return null;
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (longMatch) return longMatch[1];
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  return null;
}

export function getYoutubeStartTime(url: string): number {
  if (!url) return 0;
  const match = url.match(/[?&](?:t|start)=([0-9hms]+)/i);
  if (!match) return 0;
  const val = match[1];
  if (/^\d+$/.test(val)) return parseInt(val, 10);
  if (/^\d+s$/i.test(val)) return parseInt(val, 10);
  let total = 0;
  const hours = val.match(/(\d+)h/i);
  const mins = val.match(/(\d+)m/i);
  const secs = val.match(/(\d+)s/i);
  if (hours) total += parseInt(hours[1], 10) * 3600;
  if (mins) total += parseInt(mins[1], 10) * 60;
  if (secs) total += parseInt(secs[1], 10);
  return total;
}

export function formatTimestamp(seconds: number): string {
  if (!seconds || seconds <= 0) return '0:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function parseTimestampToSeconds(input: string): number {
  if (!input) return 0;
  const trimmed = input.trim();
  if (/^\d+$/.test(trimmed)) return parseInt(trimmed, 10);
  if (/^\d+s$/i.test(trimmed)) return parseInt(trimmed, 10);
  
  if (trimmed.includes(':')) {
    const parts = trimmed.split(':').map(p => parseInt(p, 10) || 0);
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }
  }

  let total = 0;
  const hours = trimmed.match(/(\d+)\s*h/i);
  const mins = trimmed.match(/(\d+)\s*m/i);
  const secs = trimmed.match(/(\d+)\s*s/i);
  if (hours) total += parseInt(hours[1], 10) * 3600;
  if (mins) total += parseInt(mins[1], 10) * 60;
  if (secs) total += parseInt(secs[1], 10);
  return total;
}

export function getYoutubeEndTime(url: string): number {
  if (!url) return 0;
  // matches ?end=120 or &end=120s or &end=1h15m20s or &end=47m04s
  const match = url.match(/[?&]end=([0-9hms]+)/i);
  if (!match) return 0;
  const val = match[1];
  if (/^\d+$/.test(val)) return parseInt(val, 10);
  if (/^\d+s$/i.test(val)) return parseInt(val, 10);
  let total = 0;
  const hours = val.match(/(\d+)h/i);
  const mins = val.match(/(\d+)m/i);
  const secs = val.match(/(\d+)s/i);
  if (hours) total += parseInt(hours[1], 10) * 3600;
  if (mins) total += parseInt(mins[1], 10) * 60;
  if (secs) total += parseInt(secs[1], 10);
  return total;
}

export function buildTimestampedUrl(url: string, startSeconds: number, endSeconds: number = 0): string {
  if (!url) return '';
  if (startSeconds <= 0 && endSeconds <= 0) return url;
  
  // Strip existing t, start, and end params
  let cleanUrl = url.replace(/[?&](?:t|start|end)=[^&]+/gi, '');
  cleanUrl = cleanUrl.replace(/[?&]$/, '');
  const separator = cleanUrl.includes('?') ? '&' : '?';

  let params: string[] = [];
  if (startSeconds > 0) {
    params.push(`t=${startSeconds}s`);
  }
  if (endSeconds > 0 && endSeconds > startSeconds) {
    params.push(`end=${endSeconds}s`);
  }

  return params.length > 0 ? `${cleanUrl}${separator}${params.join('&')}` : cleanUrl;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

export function ContentUploadPage() {
  const [searchParams] = useSearchParams();
  
  // Hierarchy Data States
  const [exams, setExams] = useState<ExamType[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [existingItems, setExistingItems] = useState<ContentItem[]>([]);
  
  // Selected IDs
  const [selectedExam, setSelectedExam] = useState<string>(searchParams.get('exam') || '');
  const [selectedSubject, setSelectedSubject] = useState<string>(searchParams.get('subject') || '');
  const [selectedChapter, setSelectedChapter] = useState<string>(searchParams.get('chapter') || '');
  const [selectedTopic, setSelectedTopic] = useState<string>(searchParams.get('topic') || '');
  const [topicFeedbacks, setTopicFeedbacks] = useState<any[]>([]);

  // Form States
  const [activeTab, setActiveTab] = useState<'video' | 'pdf'>('video');
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [startTimestamp, setStartTimestamp] = useState('');
  const [endTimestamp, setEndTimestamp] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isVideoFree, setIsVideoFree] = useState<boolean>(true);
  const [isPdfFree, setIsPdfFree] = useState<boolean>(false);
  const [fetchingTitle, setFetchingTitle] = useState<boolean>(false);

  const handleVideoUrlChange = (newUrl: string) => {
    setVideoUrl(newUrl);
    const extractedStart = getYoutubeStartTime(newUrl);
    if (extractedStart > 0 && !startTimestamp) {
      setStartTimestamp(formatTimestamp(extractedStart));
    }
    const extractedEnd = getYoutubeEndTime(newUrl);
    if (extractedEnd > 0 && !endTimestamp) {
      setEndTimestamp(formatTimestamp(extractedEnd));
    }
  };

  const handleFetchYoutubeTitle = async () => {
    const ytid = getYoutubeId(videoUrl);
    if (!ytid) {
      toast.error('Please enter a valid YouTube URL first');
      return;
    }
    setFetchingTitle(true);
    try {
      const res = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(videoUrl.trim())}`);
      const data = await res.json();
      if (data && data.title) {
        setTitle(data.title);
        toast.success('YouTube title auto-fetched!');
      } else {
        toast.error('Could not auto-fetch title. Please enter manually.');
      }
    } catch (err) {
      console.error('Failed to fetch oembed title', err);
      toast.error('Failed to fetch YouTube title.');
    } finally {
      setFetchingTitle(false);
    }
  };

  // Loading & Status
  const [examsLoading, setExamsLoading] = useState(false);
  const [subjectsLoading, setSubjectsLoading] = useState(false);
  const [chaptersLoading, setChaptersLoading] = useState(false);
  const [topicsLoading, setTopicsLoading] = useState(false);
  const [itemsLoading, setItemsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Edit State
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);

  // Preview Modal State
  const [previewItem, setPreviewItem] = useState<ContentItem | null>(null);

  // Curriculum Quick Action Modal State
  type CurriculumModalState = 
    | { mode: 'ADD_CHAPTER'; subjectId: string; subjectName: string }
    | { mode: 'EDIT_CHAPTER'; chapter: Chapter; subjectId: string }
    | { mode: 'DELETE_CHAPTER'; chapter: Chapter }
    | { mode: 'ADD_TOPIC'; chapterId: string; chapterTitle: string }
    | { mode: 'EDIT_TOPIC'; topic: Topic; chapterId: string }
    | { mode: 'DELETE_TOPIC'; topic: Topic }
    | null;

  const [curriculumModal, setCurriculumModal] = useState<CurriculumModalState>(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalOrderIndex, setModalOrderIndex] = useState(1);
  const [modalSubmitting, setModalSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (previewItem) setPreviewItem(null);
        if (curriculumModal) setCurriculumModal(null);
      }
    };
    if (previewItem || curriculumModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewItem, curriculumModal]);

  // Search, Filter & Reorder State
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'ALL' | 'VIDEO' | 'NOTES_PDF'>('ALL');
  const [filterAccess, setFilterAccess] = useState<'ALL' | 'FREE' | 'PREMIUM'>('ALL');
  const [reordering, setReordering] = useState(false);

  // Filtered Attached Materials
  const filteredItems = useMemo(() => {
    return existingItems.filter(item => {
      if (filterType !== 'ALL' && item.type !== filterType) return false;
      if (filterAccess === 'FREE' && !item.isFree) return false;
      if (filterAccess === 'PREMIUM' && item.isFree) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title?.toLowerCase().includes(q);
        const matchesUrl = item.contentUrl?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesUrl) return false;
      }
      return true;
    });
  }, [existingItems, filterType, filterAccess, searchQuery]);

  // Reorder Item Action
  const handleMoveItem = async (index: number, direction: 'UP' | 'DOWN') => {
    const targetIndex = direction === 'UP' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= existingItems.length) return;

    const currentItem = existingItems[index];
    const targetItem = existingItems[targetIndex];

    const currentOrder = currentItem.orderIndex ?? (index + 1);
    const targetOrder = targetItem.orderIndex ?? (targetIndex + 1);

    // Optimistically update local array
    const updated = [...existingItems];
    updated[index] = { ...targetItem, orderIndex: currentOrder };
    updated[targetIndex] = { ...currentItem, orderIndex: targetOrder };
    setExistingItems(updated);

    setReordering(true);
    try {
      await api.put('/learn/admin/content/reorder-batch', [
        { id: currentItem.id, orderIndex: targetOrder },
        { id: targetItem.id, orderIndex: currentOrder }
      ]);
      toast.success('Material sequence updated');
    } catch (err: any) {
      console.error('Reorder failed', err);
      toast.error('Failed to save new order');
      loadExistingItems(); // rollback
    } finally {
      setReordering(false);
    }
  };

  // ─── 1. Load All Exam Types ────────────────────────────────────────────────
  useEffect(() => {
    setExamsLoading(true);
    learnApi.get('/content/exams')
      .then(res => {
        const list = res.data || [];
        setExams(list);
        // If no exam selected in params and list is available, select the first
        if (!searchParams.get('exam') && list.length > 0 && !selectedExam) {
          setSelectedExam(list[0].id);
        }
      })
      .catch(err => {
        console.error('Failed to load exams:', err);
        toast.error('Failed to load exam categories');
      })
      .finally(() => setExamsLoading(false));
  }, []);

  // ─── 2. Load Subjects when Exam changes ────────────────────────────────────
  useEffect(() => {
    if (!selectedExam) {
      setSubjects([]);
      setSelectedSubject('');
      return;
    }

    setSubjectsLoading(true);
    learnApi.get(`/content/exams/${selectedExam}/subjects`)
      .then(res => {
        const list = res.data || [];
        setSubjects(list);
        // Retain subject if param matches, otherwise reset
        const paramSubject = searchParams.get('subject');
        if (paramSubject && list.some((s: Subject) => s.id === paramSubject)) {
          setSelectedSubject(paramSubject);
        } else if (!list.some((s: Subject) => s.id === selectedSubject)) {
          setSelectedSubject('');
        }
      })
      .catch(err => {
        console.error('Failed to load subjects:', err);
        setSubjects([]);
      })
      .finally(() => setSubjectsLoading(false));
  }, [selectedExam]);

  // ─── Helper: Fetch Chapters for selected Subject ───────────────────────────
  const fetchChapters = async (subjectId: string, autoSelectId?: string) => {
    if (!subjectId) {
      setChapters([]);
      setSelectedChapter('');
      return [];
    }

    setChaptersLoading(true);
    try {
      const res = await learnApi.get(`/content/subjects/${subjectId}/chapters`);
      const list = res.data || [];
      setChapters(list);
      if (autoSelectId) {
        setSelectedChapter(autoSelectId);
      } else {
        const paramChapter = searchParams.get('chapter');
        if (paramChapter && list.some((c: Chapter) => c.id === paramChapter)) {
          setSelectedChapter(paramChapter);
        } else if (!list.some((c: Chapter) => c.id === selectedChapter)) {
          setSelectedChapter('');
        }
      }
      return list;
    } catch (err) {
      console.error('Failed to load chapters:', err);
      setChapters([]);
      return [];
    } finally {
      setChaptersLoading(false);
    }
  };

  // ─── Helper: Fetch Topics for selected Chapter ─────────────────────────────
  const fetchTopics = async (chapterId: string, autoSelectId?: string) => {
    if (!chapterId) {
      setTopics([]);
      setSelectedTopic('');
      return [];
    }

    setTopicsLoading(true);
    try {
      const res = await learnApi.get(`/content/chapters/${chapterId}/topics`);
      const list = res.data || [];
      setTopics(list);
      if (autoSelectId) {
        setSelectedTopic(autoSelectId);
      } else {
        const paramTopic = searchParams.get('topic');
        if (paramTopic && list.some((t: Topic) => t.id === paramTopic)) {
          setSelectedTopic(paramTopic);
        } else if (!list.some((t: Topic) => t.id === selectedTopic)) {
          setSelectedTopic('');
        }
      }
      return list;
    } catch (err) {
      console.error('Failed to load topics:', err);
      setTopics([]);
      return [];
    } finally {
      setTopicsLoading(false);
    }
  };

  // ─── 3. Load Chapters when Subject changes ─────────────────────────────────
  useEffect(() => {
    fetchChapters(selectedSubject);
  }, [selectedSubject]);

  // ─── 4. Load Topics when Chapter changes ───────────────────────────────────
  useEffect(() => {
    fetchTopics(selectedChapter);
  }, [selectedChapter]);

  // ─── 5. Load Existing Content Items for Selected Topic ─────────────────────
  const loadExistingItems = () => {
    if (!selectedTopic) {
      setExistingItems([]);
      return;
    }
    setItemsLoading(true);
    learnApi.get(`/content/topics/${selectedTopic}/items`)
      .then(res => setExistingItems(res.data || []))
      .catch(err => {
        console.error('Failed to load items:', err);
        setExistingItems([]);
      })
      .finally(() => setItemsLoading(false));
  };

  useEffect(() => {
    if (selectedTopic) {
      loadExistingItems();
      api.get(`/learn/admin/feedback/topic/${selectedTopic}`)
        .then(res => setTopicFeedbacks(res.data || []))
        .catch(() => setTopicFeedbacks([]));
    } else {
      setExistingItems([]);
      setTopicFeedbacks([]);
    }
  }, [selectedTopic]);

  // ─── Change Handlers ───────────────────────────────────────────────────────
  const handleExamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExam(e.target.value);
    setSelectedSubject('');
    setSelectedChapter('');
    setSelectedTopic('');
    setMessage(null);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
    setSelectedChapter('');
    setSelectedTopic('');
    setMessage(null);
  };

  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChapter(e.target.value);
    setSelectedTopic('');
    setMessage(null);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
    setMessage(null);
  };

  // Current entity names for breadcrumb display & quick action modals
  const currentExam = exams.find(e => e.id === selectedExam);
  const currentSubject = subjects.find(s => s.id === selectedSubject);
  const currentChapter = chapters.find(c => c.id === selectedChapter);
  const currentTopic = topics.find(t => t.id === selectedTopic);

  // ─── Inline Curriculum Actions (Add / Edit / Delete Chapter & Topic) ────────
  const openAddChapterModal = () => {
    if (!selectedSubject) {
      toast.error('Please select a Subject first');
      return;
    }
    setModalTitle('');
    setModalDescription('');
    setModalOrderIndex(chapters.length + 1);
    setCurriculumModal({
      mode: 'ADD_CHAPTER',
      subjectId: selectedSubject,
      subjectName: currentSubject?.name || 'Subject'
    });
  };

  const openEditChapterModal = () => {
    if (!selectedChapter || !currentChapter) return;
    setModalTitle(currentChapter.title);
    setModalDescription('');
    setModalOrderIndex(currentChapter.orderIndex || 1);
    setCurriculumModal({
      mode: 'EDIT_CHAPTER',
      chapter: currentChapter,
      subjectId: selectedSubject
    });
  };

  const openDeleteChapterModal = () => {
    if (!selectedChapter || !currentChapter) return;
    setCurriculumModal({
      mode: 'DELETE_CHAPTER',
      chapter: currentChapter
    });
  };

  const openAddTopicModal = () => {
    if (!selectedChapter) {
      toast.error('Please select a Chapter first');
      return;
    }
    setModalTitle('');
    setModalDescription('');
    setModalOrderIndex(topics.length + 1);
    setCurriculumModal({
      mode: 'ADD_TOPIC',
      chapterId: selectedChapter,
      chapterTitle: currentChapter?.title || 'Chapter'
    });
  };

  const openEditTopicModal = () => {
    if (!selectedTopic || !currentTopic) return;
    setModalTitle(currentTopic.title);
    setModalDescription(currentTopic.description || '');
    setModalOrderIndex(currentTopic.orderIndex || 1);
    setCurriculumModal({
      mode: 'EDIT_TOPIC',
      topic: currentTopic,
      chapterId: selectedChapter
    });
  };

  const openDeleteTopicModal = () => {
    if (!selectedTopic || !currentTopic) return;
    setCurriculumModal({
      mode: 'DELETE_TOPIC',
      topic: currentTopic
    });
  };

  const handleCurriculumModalSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!curriculumModal) return;

    setModalSubmitting(true);
    try {
      if (curriculumModal.mode === 'ADD_CHAPTER') {
        const res = await api.post('/learn/admin/curriculum/chapters', {
          subjectId: curriculumModal.subjectId,
          title: modalTitle.trim(),
          orderIndex: modalOrderIndex,
          isActive: true
        });
        toast.success(`Chapter "${modalTitle.trim()}" created!`);
        const newId = res.data?.id;
        await fetchChapters(curriculumModal.subjectId, newId);
        setCurriculumModal(null);
      } else if (curriculumModal.mode === 'EDIT_CHAPTER') {
        await api.put(`/learn/admin/curriculum/chapters/${curriculumModal.chapter.id}`, {
          subjectId: curriculumModal.subjectId,
          title: modalTitle.trim(),
          orderIndex: modalOrderIndex,
          isActive: true
        });
        toast.success('Chapter updated successfully!');
        await fetchChapters(curriculumModal.subjectId, curriculumModal.chapter.id);
        setCurriculumModal(null);
      } else if (curriculumModal.mode === 'DELETE_CHAPTER') {
        await api.delete(`/learn/admin/curriculum/chapters/${curriculumModal.chapter.id}`);
        toast.success('Chapter deleted');
        setSelectedChapter('');
        setSelectedTopic('');
        await fetchChapters(selectedSubject);
        setCurriculumModal(null);
      } else if (curriculumModal.mode === 'ADD_TOPIC') {
        const res = await api.post('/learn/admin/curriculum/topics', {
          chapterId: curriculumModal.chapterId,
          title: modalTitle.trim(),
          description: modalDescription.trim() || undefined,
          orderIndex: modalOrderIndex,
          isActive: true
        });
        toast.success(`Topic "${modalTitle.trim()}" created & selected!`);
        const newId = res.data?.id;
        await fetchTopics(curriculumModal.chapterId, newId);
        setCurriculumModal(null);
      } else if (curriculumModal.mode === 'EDIT_TOPIC') {
        await api.put(`/learn/admin/curriculum/topics/${curriculumModal.topic.id}`, {
          chapterId: curriculumModal.chapterId,
          title: modalTitle.trim(),
          description: modalDescription.trim() || undefined,
          orderIndex: modalOrderIndex,
          isActive: true
        });
        toast.success('Topic updated successfully!');
        await fetchTopics(curriculumModal.chapterId, curriculumModal.topic.id);
        setCurriculumModal(null);
      } else if (curriculumModal.mode === 'DELETE_TOPIC') {
        await api.delete(`/learn/admin/curriculum/topics/${curriculumModal.topic.id}`);
        toast.success('Topic deleted');
        setSelectedTopic('');
        await fetchTopics(selectedChapter);
        setCurriculumModal(null);
      }
    } catch (err: any) {
      console.error('Curriculum action failed:', err);
      const errMsg = err.response?.data?.message || err.response?.data?.error || 'Operation failed';
      toast.error(errMsg);
    } finally {
      setModalSubmitting(false);
    }
  };

  // ─── Video Submission ──────────────────────────────────────────────────────
  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTopic || !title.trim() || !videoUrl.trim()) {
      toast.error('Please fill in both video title and URL');
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const parsedStart = parseTimestampToSeconds(startTimestamp);
      const parsedEnd = parseTimestampToSeconds(endTimestamp);
      const finalVideoUrl = (parsedStart > 0 || parsedEnd > 0)
        ? buildTimestampedUrl(videoUrl.trim(), parsedStart, parsedEnd) 
        : videoUrl.trim();

      const formData = new URLSearchParams();
      formData.append('title', title.trim());
      formData.append('videoUrl', finalVideoUrl);
      formData.append('isFree', isVideoFree.toString());
      
      await api.post(`/learn/admin/content/video/${selectedTopic}`, formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const segmentMsg = parsedStart > 0 && parsedEnd > parsedStart
        ? `Video linked for segment ${formatTimestamp(parsedStart)} ➔ ${formatTimestamp(parsedEnd)}!`
        : parsedStart > 0
          ? `Video linked with concept start at ${formatTimestamp(parsedStart)}!`
          : 'Video lecture successfully linked!';

      toast.success(segmentMsg);
      setMessage({ type: 'success', text: 'Video successfully linked to this topic.' });
      setTitle('');
      setVideoUrl('');
      setStartTimestamp('');
      setEndTimestamp('');
      setIsVideoFree(true);
      loadExistingItems();
    } catch (err: any) {
      const errMsg = err.response?.data?.error || err.response?.data?.message || 'Failed to link video lecture';
      toast.error(errMsg);
      setMessage({ type: 'error', text: errMsg });
    } finally {
      setLoading(false);
    }
  };

  // ─── PDF Submission ────────────────────────────────────────────────────────
  const handlePdfSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTopic || !title.trim() || !pdfFile) {
      toast.error('Please specify title and choose a PDF file');
      return;
    }
    setLoading(true);
    setMessage(null);
    const formData = new FormData();
    formData.append('title', title.trim());
    formData.append('file', pdfFile);
    formData.append('isFree', isPdfFree.toString());

    try {
      await api.post(`/learn/admin/content/upload/${selectedTopic}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Smart PDF Notes uploaded successfully!');
      setMessage({ type: 'success', text: 'PDF Notes successfully uploaded.' });
      setTitle('');
      setPdfFile(null);
      setIsPdfFree(false);
      loadExistingItems();
    } catch (err: any) {
      const errMsg = err.response?.data?.error || err.response?.data?.message || 'Failed to upload PDF notes';
      toast.error(errMsg);
      setMessage({ type: 'error', text: errMsg });
    } finally {
      setLoading(false);
    }
  };

  // ─── Delete Item ───────────────────────────────────────────────────────────
  const handleDelete = async (itemId: string, itemTitle: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete "${itemTitle}"?`)) return;
    
    try {
      await api.delete(`/learn/admin/content/${itemId}/hard`);
      toast.success('Content item deleted');
      setMessage({ type: 'success', text: 'Content deleted successfully.' });
      loadExistingItems();
    } catch (err: any) {
      const errMsg = err.response?.data?.error || err.response?.data?.message || 'Failed to delete content';
      toast.error(errMsg);
      setMessage({ type: 'error', text: errMsg });
    }
  };

  // ─── Update Item ───────────────────────────────────────────────────────────
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    
    try {
      await api.put(`/learn/admin/content/${editingItem.id}`, {
        title: editingItem.title,
        videoUrl: editingItem.contentUrl,
        isFree: editingItem.isFree
      });
      toast.success('Content updated successfully');
      setMessage({ type: 'success', text: 'Content updated successfully.' });
      setEditingItem(null);
      loadExistingItems();
    } catch (err: any) {
      const errMsg = err.response?.data?.error || err.response?.data?.message || 'Failed to update content';
      toast.error(errMsg);
      setMessage({ type: 'error', text: errMsg });
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16">
      {/* ─── Header & Top Actions ─────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              Universal Curator
            </span>
            <span className="text-xs text-slate-400">• PrepLens Learn</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-1">Video & Notes Curator</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Attach high-yield Video Lectures and Smart PDF Notes across all Exams and Syllabi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link 
            to="/admin/learn/status" 
            className="px-3.5 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-slate-500" />
            Content Matrix
          </Link>
          <Link 
            to="/admin/learn/import" 
            className="px-3.5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs transition-all flex items-center gap-1.5"
          >
            <Upload className="w-3.5 h-3.5" />
            Import Questions
          </Link>
        </div>
      </div>

      {/* ─── 4-Step Dynamic Hierarchy Selector ────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
              <BookOpen className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-extrabold text-slate-900">
              Select Curriculum Hierarchy
            </h2>
          </div>
          <span className="text-[11px] text-slate-400">
            Exam &rarr; Subject &rarr; Chapter &rarr; Topic
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* 1. Exam Category */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span>1. Exam / Grade</span>
              {examsLoading && <RefreshCw className="w-3 h-3 text-indigo-500 animate-spin" />}
            </label>
            <select 
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-indigo-500 focus:bg-white transition-all"
              value={selectedExam} 
              onChange={handleExamChange}
            >
              <option value="">Select Exam / Standard...</option>
              {exams.map(e => (
                <option key={e.id} value={e.id}>
                  {e.name} {e.fullName ? `(${e.fullName})` : ''}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Subject */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span>2. Subject</span>
              {subjectsLoading && <RefreshCw className="w-3 h-3 text-indigo-500 animate-spin" />}
            </label>
            <select 
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-indigo-500 focus:bg-white transition-all disabled:opacity-50"
              value={selectedSubject} 
              onChange={handleSubjectChange} 
              disabled={!selectedExam || subjectsLoading}
            >
              <option value="">Select Subject...</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* 3. Chapter */}
          <div>
            <div className="flex items-center justify-between mb-1.5 min-h-[22px]">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <span>3. Chapter</span>
                {chaptersLoading && <RefreshCw className="w-3 h-3 text-indigo-500 animate-spin" />}
              </label>

              <div className="flex items-center gap-1">
                {/* Add Chapter button (enabled when Subject is selected) */}
                <button
                  type="button"
                  disabled={!selectedSubject || chaptersLoading}
                  onClick={openAddChapterModal}
                  className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-0.5 transition-colors cursor-pointer border border-indigo-200/60"
                  title="Add new chapter to this subject"
                >
                  <Plus className="w-2.5 h-2.5" />
                  <span>Chapter</span>
                </button>

                {/* Edit & Delete Chapter (visible when a Chapter is selected) */}
                {selectedChapter && currentChapter && (
                  <>
                    <button
                      type="button"
                      onClick={openEditChapterModal}
                      className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors cursor-pointer"
                      title="Rename / Edit selected Chapter"
                    >
                      <Pencil className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={openDeleteChapterModal}
                      className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors cursor-pointer"
                      title="Delete selected Chapter"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </>
                )}
              </div>
            </div>

            <select 
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-indigo-500 focus:bg-white transition-all disabled:opacity-50"
              value={selectedChapter} 
              onChange={handleChapterChange} 
              disabled={!selectedSubject || chaptersLoading}
            >
              <option value="">Select Chapter...</option>
              {chapters.map(c => (
                <option key={c.id} value={c.id}>
                  {c.orderIndex ? `${c.orderIndex}. ` : ''}{c.title}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Topic */}
          <div>
            <div className="flex items-center justify-between mb-1.5 min-h-[22px]">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <span>4. Target Topic</span>
                {topicsLoading && <RefreshCw className="w-3 h-3 text-indigo-500 animate-spin" />}
              </label>

              <div className="flex items-center gap-1">
                {/* Add Topic button (enabled when Chapter is selected) */}
                <button
                  type="button"
                  disabled={!selectedChapter || topicsLoading}
                  onClick={openAddTopicModal}
                  className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-700 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-0.5 transition-colors cursor-pointer border border-emerald-200/60"
                  title="Add new topic to this chapter"
                >
                  <Plus className="w-2.5 h-2.5" />
                  <span>Topic</span>
                </button>

                {/* Edit & Delete Topic (visible when a Topic is selected) */}
                {selectedTopic && currentTopic && (
                  <>
                    <button
                      type="button"
                      onClick={openEditTopicModal}
                      className="p-1 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors cursor-pointer"
                      title="Rename / Edit selected Topic"
                    >
                      <Pencil className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={openDeleteTopicModal}
                      className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors cursor-pointer"
                      title="Delete selected Topic"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </>
                )}
              </div>
            </div>

            <select 
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-indigo-500 focus:bg-white transition-all disabled:opacity-50"
              value={selectedTopic} 
              onChange={handleTopicChange} 
              disabled={!selectedChapter || topicsLoading}
            >
              <option value="">Select Topic...</option>
              {topics.map(t => (
                <option key={t.id} value={t.id}>
                  {t.orderIndex ? `${t.orderIndex}. ` : ''}{t.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Breadcrumb Trail */}
        {selectedTopic && (
          <div className="mt-3 p-3 bg-indigo-50/60 border border-indigo-100 rounded-xl flex flex-wrap items-center gap-1.5 text-xs text-indigo-950 font-medium">
            <span className="text-indigo-600 font-bold uppercase text-[10px] tracking-wider mr-1">Active Target:</span>
            <span className="px-2 py-0.5 bg-white border border-indigo-200 rounded-md font-bold">{currentExam?.name || 'Exam'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
            <span className="px-2 py-0.5 bg-white border border-indigo-200 rounded-md">{currentSubject?.name || 'Subject'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
            <span className="px-2 py-0.5 bg-white border border-indigo-200 rounded-md truncate max-w-[200px]">{currentChapter?.title || 'Chapter'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
            <span className="px-2 py-0.5 bg-indigo-600 text-white font-bold rounded-md truncate max-w-[220px]">{currentTopic?.title || 'Topic'}</span>
            <span className="ml-auto text-[10px] text-indigo-500 font-mono">UUID: {selectedTopic}</span>
          </div>
        )}
      </div>

      {/* ─── Upload Forms & Existing Content Section ──────────────────────── */}
      {selectedTopic ? (
        <div className="space-y-6">
          {/* Live Student Feedback Quality Banner */}
          {topicFeedbacks.length > 0 && (
            <div className={`p-4 rounded-2xl border text-xs flex items-start gap-3.5 transition-all shadow-xs ${
              topicFeedbacks.some(f => !f.is_helpful)
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-900'
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900'
            }`}>
              <div className={`p-2 rounded-xl shrink-0 ${
                topicFeedbacks.some(f => !f.is_helpful)
                  ? 'bg-amber-500/20 text-amber-700'
                  : 'bg-emerald-500/20 text-emerald-700'
              }`}>
                {topicFeedbacks.some(f => !f.is_helpful) ? (
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <p className="font-bold text-sm">
                    Student Quality Feedback: {topicFeedbacks.filter(f => f.is_helpful).length} Helpful 👍 • {topicFeedbacks.filter(f => !f.is_helpful).length} Reported Doubts ⚠️
                  </p>
                  <span className="font-extrabold text-[11px] px-2 py-0.5 rounded-full bg-white/80 border border-current shadow-2xs">
                    {Math.round((topicFeedbacks.filter(f => f.is_helpful).length * 100) / topicFeedbacks.length)}% Satisfaction Rate
                  </span>
                </div>

                {topicFeedbacks.find(f => f.feedback_text) ? (
                  <p className="italic text-xs text-slate-800 mt-1">
                    Latest Student Remark: &ldquo;{topicFeedbacks.find(f => f.feedback_text)?.feedback_text}&rdquo;
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Students have rated this lecture. Maintain high video clarity and concise study notes.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Uploader Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="flex border-b border-slate-100 bg-slate-50/50">
              <button
                type="button"
                onClick={() => setActiveTab('video')}
                className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                  activeTab === 'video'
                    ? 'border-rose-600 text-rose-700 bg-white shadow-2xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                <Video className="w-4 h-4 text-rose-500" />
                Embed Video Lecture
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pdf')}
                className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                  activeTab === 'pdf'
                    ? 'border-blue-600 text-blue-700 bg-white shadow-2xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                <FileText className="w-4 h-4 text-blue-500" />
                Upload PDF Notes
              </button>
            </div>

            <div className="p-6">
              {message && (
                <div className={`p-3.5 rounded-xl mb-5 flex items-center gap-2.5 text-xs font-medium ${
                  message.type === 'success' 
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' 
                    : 'bg-rose-50 border border-rose-200 text-rose-800'
                }`}>
                  {message.type === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span>{message.text}</span>
                </div>
              )}

              {activeTab === 'video' ? (
                <form onSubmit={handleVideoSubmit} className="space-y-4">
                  {/* Lecture Title with YouTube Auto-Fetch */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-slate-700">Lecture Title:</label>
                      {getYoutubeId(videoUrl) && (
                        <button 
                          type="button"
                          onClick={handleFetchYoutubeTitle}
                          disabled={fetchingTitle}
                          className="text-[11px] font-bold text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1 transition-all disabled:opacity-50"
                        >
                          <Sparkles className={`w-3 h-3 ${fetchingTitle ? 'animate-spin' : ''}`} />
                          {fetchingTitle ? 'Auto-fetching title...' : 'Auto-Fetch from YouTube'}
                        </button>
                      )}
                    </div>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Complete Kinematics in 1 Shot by Alakh Sir" 
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-rose-500 focus:bg-white transition-all font-medium text-slate-900"
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)} 
                    />
                  </div>

                  {/* Video URL with Live YouTube Detection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Video URL (YouTube or Direct MP4):</label>
                    <input 
                      type="url" 
                      required 
                      placeholder="https://www.youtube.com/watch?v=... or https://cdn.storage.../video.mp4" 
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-rose-500 focus:bg-white font-mono text-slate-800 transition-all"
                      value={videoUrl} 
                      onChange={(e) => handleVideoUrlChange(e.target.value)} 
                    />
                    
                    {/* Live YouTube Thumbnail & Video Detection Card */}
                    {getYoutubeId(videoUrl) ? (
                      <div className="mt-2.5 p-3 bg-gradient-to-r from-rose-50 to-slate-50 border border-rose-200/80 rounded-xl flex items-center gap-3.5 shadow-2xs">
                        <div className="relative w-28 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-rose-200 shadow-2xs group">
                          <img 
                            src={`https://img.youtube.com/vi/${getYoutubeId(videoUrl)}/hqdefault.jpg`} 
                            alt="YouTube Thumbnail" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${getYoutubeId(videoUrl)}/0.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-rose-600/90 text-white flex items-center justify-center">
                              <Play className="w-3 h-3 ml-0.5 fill-current" />
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-rose-600 text-white tracking-wide">
                              YOUTUBE DETECTED
                            </span>
                            <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 shrink-0" /> Ready to Embed
                            </span>
                          </div>
                          <p className="text-[11px] font-mono text-slate-500 mt-1 truncate">
                            Video ID: {getYoutubeId(videoUrl)}
                          </p>
                          <p className="text-xs font-semibold text-slate-800 truncate mt-0.5">
                            {title.trim() || 'Click "Auto-Fetch from YouTube" to fetch official title'}
                          </p>
                          {(parseTimestampToSeconds(startTimestamp) > 0 || parseTimestampToSeconds(endTimestamp) > 0) && (
                            <div className="flex items-center gap-1.5 mt-1 text-[11px] font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded border border-rose-200 w-fit">
                              <Clock className="w-3 h-3 text-rose-600" />
                              <span>
                                {parseTimestampToSeconds(endTimestamp) > parseTimestampToSeconds(startTimestamp)
                                  ? `Segment: ${formatTimestamp(parseTimestampToSeconds(startTimestamp))} ➔ ${formatTimestamp(parseTimestampToSeconds(endTimestamp))}`
                                  : `Starts at ${formatTimestamp(parseTimestampToSeconds(startTimestamp))}`}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : videoUrl.trim().toLowerCase().endsWith('.mp4') ? (
                      <div className="mt-2 p-2.5 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-2 text-xs text-blue-700 font-medium">
                        <Video className="w-4 h-4 text-blue-600" />
                        <span>Direct MP4 Video Stream recognized (Native HTML5 playback enabled)</span>
                      </div>
                    ) : (
                      <p className="text-[11px] text-slate-400 mt-1">
                        PrepLens supports standard YouTube video embeds as well as direct MP4 links with seamless full-screen mode.
                      </p>
                    )}
                  </div>

                  {/* Start & End Timestamp Grid (Topic Concept Segment) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-rose-600" />
                          <span>Start Video At:</span>
                        </label>
                        <span className="text-[10px] text-slate-400 font-mono">
                          e.g. <span className="text-slate-600 font-semibold bg-slate-100 px-1 py-0.2 rounded">02:22</span>
                        </span>
                      </div>
                      <input 
                        type="text" 
                        placeholder="e.g. 02:22 (or 142s)" 
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-rose-500 focus:bg-white font-mono text-slate-800 transition-all"
                        value={startTimestamp} 
                        onChange={(e) => setStartTimestamp(e.target.value)} 
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>End Video At (Optional):</span>
                        </label>
                        <span className="text-[10px] text-slate-400 font-mono">
                          e.g. <span className="text-slate-600 font-semibold bg-slate-100 px-1 py-0.2 rounded">47:04</span>
                        </span>
                      </div>
                      <input 
                        type="text" 
                        placeholder="e.g. 47:04 (Auto-stops here)" 
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-amber-500 focus:bg-white font-mono text-slate-800 transition-all"
                        value={endTimestamp} 
                        onChange={(e) => setEndTimestamp(e.target.value)} 
                      />
                    </div>
                  </div>

                  {/* Calculated Segment Duration Preview */}
                  {parseTimestampToSeconds(startTimestamp) > 0 && (
                    <div className="p-2.5 bg-rose-50/70 border border-rose-200/80 rounded-xl flex items-center justify-between text-xs text-rose-900 font-medium">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>
                          {parseTimestampToSeconds(endTimestamp) > parseTimestampToSeconds(startTimestamp)
                            ? `Active Segment: ${formatTimestamp(parseTimestampToSeconds(startTimestamp))} ➔ ${formatTimestamp(parseTimestampToSeconds(endTimestamp))} (${Math.round((parseTimestampToSeconds(endTimestamp) - parseTimestampToSeconds(startTimestamp)) / 60)} mins)`
                            : `Starts at ${formatTimestamp(parseTimestampToSeconds(startTimestamp))} (Plays to end of video)`}
                        </span>
                      </div>
                      {parseTimestampToSeconds(endTimestamp) > parseTimestampToSeconds(startTimestamp) && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-600 text-white shadow-2xs">
                          Auto-Stop Active
                        </span>
                      )}
                    </div>
                  )}

                  {/* Access Level Toggle (Free vs Premium) */}
                  <div className="p-3 bg-slate-50/80 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${isVideoFree ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {isVideoFree ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-800">Access Level</span>
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${
                            isVideoFree 
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}>
                            {isVideoFree ? 'FREE PREVIEW' : 'PREMIUM LOCKED'}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          {isVideoFree 
                            ? 'Open to all students enrolled in this topic (Free Sample Lecture)' 
                            : 'Requires active plan subscription to view'}
                        </span>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={isVideoFree} 
                        onChange={(e) => setIsVideoFree(e.target.checked)} 
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <button 
                    disabled={loading || !title.trim() || !videoUrl.trim()} 
                    type="submit" 
                    className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Linking Video...
                      </>
                    ) : (
                      <>
                        <Video className="w-3.5 h-3.5" />
                        Link Video to Topic
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handlePdfSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Document Title:</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Master Handwritten Formula Cheatsheet & Notes" 
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-900"
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">PDF Study Material:</label>
                    {pdfFile ? (
                      <div className="p-4 bg-blue-50/70 border-2 border-blue-200 rounded-xl flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2.5 bg-blue-600 text-white rounded-xl shrink-0 shadow-2xs">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-xs font-bold text-slate-900 truncate max-w-[280px] sm:max-w-md">{pdfFile.name}</p>
                              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-100 text-blue-800 shrink-0">
                                {formatFileSize(pdfFile.size)}
                              </span>
                            </div>
                            <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                              <CheckCircle className="w-3 h-3" /> Ready for encrypted Cloud Storage upload
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPdfFile(null)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0 ml-2"
                          title="Remove and choose another file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-blue-50/40 hover:border-blue-400 transition-colors cursor-pointer group">
                        <input 
                          type="file" 
                          accept=".pdf" 
                          id="pdf-upload" 
                          className="hidden" 
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            setPdfFile(file);
                            if (file && !title.trim()) {
                              const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
                              setTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
                            }
                          }} 
                        />
                        <label htmlFor="pdf-upload" className="cursor-pointer flex flex-col items-center">
                          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-2 group-hover:scale-110 transition-transform">
                            <Upload className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-bold text-blue-600 group-hover:underline">
                            Click to select or drop a PDF file
                          </span>
                          <span className="text-[10px] text-slate-400 mt-1">PDF document up to 50MB</span>
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Access Level Toggle (Free vs Premium) */}
                  <div className="p-3 bg-slate-50/80 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${isPdfFree ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {isPdfFree ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-800">Access Level</span>
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${
                            isPdfFree 
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}>
                            {isPdfFree ? 'FREE PREVIEW' : 'PREMIUM LOCKED'}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          {isPdfFree 
                            ? 'Open to all students enrolled in this topic (Free Sample Notes)' 
                            : 'Requires active plan subscription to access or download'}
                        </span>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={isPdfFree} 
                        onChange={(e) => setIsPdfFree(e.target.checked)} 
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  <button 
                    disabled={loading || !pdfFile || !title.trim()} 
                    type="submit" 
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Uploading to Cloud Storage...
                      </>
                    ) : (
                      <>
                        <FileText className="w-3.5 h-3.5" />
                        Upload PDF Notes
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ─── Existing Content Items for Selected Topic ──────────────────── */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <span>Attached Study Materials</span>
                  <span className="px-2 py-0.5 text-[11px] font-bold bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                    {existingItems.length}
                  </span>
                </h3>
                <p className="text-xs text-slate-500">Live materials visible to students enrolled in this topic.</p>
              </div>
              <button 
                onClick={loadExistingItems} 
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all"
                title="Refresh materials"
              >
                <RefreshCw className={`w-4 h-4 ${itemsLoading || reordering ? 'animate-spin text-indigo-600' : ''}`} />
              </button>
            </div>

            {/* Search and Filters Bar */}
            {existingItems.length > 0 && (
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-2 pb-1 border-t border-slate-100">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search materials by title or URL..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs pl-8 pr-7 py-1.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-indigo-500 transition-all font-medium text-slate-800"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Type Filter */}
                  <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200/80">
                    <button
                      type="button"
                      onClick={() => setFilterType('ALL')}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                        filterType === 'ALL' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      All ({existingItems.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('VIDEO')}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                        filterType === 'VIDEO' ? 'bg-rose-600 text-white shadow-2xs' : 'text-slate-600 hover:text-rose-700'
                      }`}
                    >
                      Videos ({existingItems.filter(i => i.type === 'VIDEO').length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('NOTES_PDF')}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                        filterType === 'NOTES_PDF' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-blue-700'
                      }`}
                    >
                      PDFs ({existingItems.filter(i => i.type === 'NOTES_PDF').length})
                    </button>
                  </div>

                  {/* Access Filter */}
                  <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200/80">
                    <button
                      type="button"
                      onClick={() => setFilterAccess('ALL')}
                      className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                        filterAccess === 'ALL' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      All Access
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterAccess('FREE')}
                      className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                        filterAccess === 'FREE' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-600 hover:text-emerald-700'
                      }`}
                    >
                      Free ({existingItems.filter(i => i.isFree).length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterAccess('PREMIUM')}
                      className={`px-2 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                        filterAccess === 'PREMIUM' ? 'bg-amber-600 text-white shadow-2xs' : 'text-slate-600 hover:text-amber-700'
                      }`}
                    >
                      Premium ({existingItems.filter(i => !i.isFree).length})
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {existingItems.length === 0 && !itemsLoading ? (
              <div className="text-center py-10 border-2 border-dashed border-slate-100 rounded-xl">
                <Sparkles className="w-7 h-7 text-slate-300 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-700">No content items attached yet</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Use the forms above to add a video lecture or upload handwritten notes.</p>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center py-8 border border-slate-200 rounded-xl bg-slate-50/50">
                <Search className="w-6 h-6 text-slate-300 mx-auto mb-1.5" />
                <p className="text-xs font-bold text-slate-700">No matching materials found</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Try clearing your search query or reset type and access filters.</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setFilterType('ALL'); setFilterAccess('ALL'); }}
                  className="mt-2 text-[11px] font-bold text-indigo-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredItems.map(item => {
                  const realIndex = existingItems.findIndex(i => i.id === item.id);
                  const isFirst = realIndex === 0;
                  const isLast = realIndex === existingItems.length - 1;
                  const isFilterActive = filterType !== 'ALL' || filterAccess !== 'ALL' || !!searchQuery.trim();

                  return (
                    <div 
                      key={item.id} 
                      className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-300 bg-white transition-all shadow-2xs"
                    >
                      {editingItem?.id === item.id ? (
                        <form onSubmit={handleUpdate} className="flex-1 w-full space-y-2.5 p-3 bg-slate-50/80 rounded-xl border border-indigo-200">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1">Lecture / Note Title:</label>
                            <input
                              type="text"
                              required
                              value={editingItem.title}
                              onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                              className="w-full rounded-lg border border-slate-300 p-2 text-xs font-bold text-slate-900 outline-none focus:border-indigo-500 bg-white"
                              placeholder="Title"
                            />
                          </div>
                          {item.type === 'VIDEO' && (
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-1">Video URL:</label>
                              <input
                                type="url"
                                required
                                value={editingItem.contentUrl}
                                onChange={(e) => setEditingItem({ ...editingItem, contentUrl: e.target.value })}
                                className="w-full rounded-lg border border-slate-300 p-2 text-xs font-mono text-slate-800 outline-none focus:border-indigo-500 bg-white"
                                placeholder="Video URL"
                              />
                            </div>
                          )}
                          <div className="flex items-center gap-2 pt-0.5">
                            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                              <input
                                type="checkbox"
                                checked={editingItem.isFree ?? false}
                                onChange={(e) => setEditingItem({ ...editingItem, isFree: e.target.checked })}
                                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                              />
                              <span>Free Preview Material (Accessible without paid subscription)</span>
                            </label>
                          </div>
                          <div className="flex gap-2 pt-1">
                            <button 
                              type="submit" 
                              className="px-3.5 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 shadow-2xs"
                            >
                              Save Changes
                            </button>
                            <button 
                              type="button" 
                              onClick={() => setEditingItem(null)} 
                              className="px-3.5 py-1.5 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      ) : (
                        <>
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            {/* Sequence & Move Controls */}
                            <div className="flex flex-col items-center justify-center shrink-0 pr-1.5 border-r border-slate-100">
                              <button
                                type="button"
                                onClick={() => handleMoveItem(realIndex, 'UP')}
                                disabled={isFirst || reordering || isFilterActive}
                                className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors disabled:opacity-20 disabled:hover:text-slate-400 disabled:hover:bg-transparent"
                                title={isFilterActive ? 'Clear search/filter to reorder' : isFirst ? 'First item' : 'Move Up in Sequence'}
                              >
                                <ChevronUp className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-[10px] font-mono text-slate-400 font-bold">
                                #{realIndex + 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleMoveItem(realIndex, 'DOWN')}
                                disabled={isLast || reordering || isFilterActive}
                                className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors disabled:opacity-20 disabled:hover:text-slate-400 disabled:hover:bg-transparent"
                                title={isFilterActive ? 'Clear search/filter to reorder' : isLast ? 'Last item' : 'Move Down in Sequence'}
                              >
                                <ChevronDown className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <div className={`p-2 rounded-xl shrink-0 ${item.type === 'VIDEO' ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-600'}`}>
                              {item.type === 'VIDEO' ? (
                                <Video className="w-4 h-4" />
                              ) : (
                                <FileText className="w-4 h-4" />
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs font-extrabold text-slate-900 truncate">{item.title}</h4>
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.type === 'VIDEO' ? 'bg-rose-50 text-rose-700' : 'bg-blue-50 text-blue-700'}`}>
                                  {item.type}
                                </span>
                                <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${
                                  item.isFree 
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                                }`}>
                                  {item.isFree ? 'FREE PREVIEW' : 'PREMIUM'}
                                </span>
                                {item.type === 'VIDEO' && getYoutubeStartTime(item.contentUrl) > 0 && (
                                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                                    <Clock className="w-2.5 h-2.5 text-rose-600" />
                                    <span>
                                      {getYoutubeEndTime(item.contentUrl) > getYoutubeStartTime(item.contentUrl)
                                        ? `${formatTimestamp(getYoutubeStartTime(item.contentUrl))} ➔ ${formatTimestamp(getYoutubeEndTime(item.contentUrl))}`
                                        : `Starts at ${formatTimestamp(getYoutubeStartTime(item.contentUrl))}`}
                                    </span>
                                  </span>
                                )}
                              </div>
                              <a 
                                href={item.contentUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[11px] text-blue-600 hover:underline truncate max-w-md flex items-center gap-1 mt-0.5"
                              >
                                <span className="truncate">{item.contentUrl}</span>
                                <ExternalLink className="w-3 h-3 shrink-0" />
                              </a>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                            <button 
                              type="button"
                              onClick={() => setPreviewItem(item)}
                              className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Quick In-Page Preview"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              type="button"
                              onClick={() => setEditingItem(item)}
                              className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                              title="Edit Title / URL / Access Level"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              type="button"
                              onClick={() => handleDelete(item.id, item.title)}
                              className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              title="Delete Item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-10 text-center">
          <GraduationCap className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-sm font-extrabold text-slate-700">No Topic Selected</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Please pick an Exam, Subject, Chapter, and Topic in the selector above to manage or upload study materials.
          </p>
        </div>
      )}

      {/* ─── In-Page Quick Preview Modal ────────────────────────────────────── */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewItem(null)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 px-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-2.5 min-w-0 pr-4">
                <div className={`p-2 rounded-xl shrink-0 ${previewItem.type === 'VIDEO' ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'}`}>
                  {previewItem.type === 'VIDEO' ? <Video className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold text-slate-900 truncate">
                      {previewItem.title}
                    </h3>
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                      previewItem.type === 'VIDEO' ? 'bg-rose-50 text-rose-700' : 'bg-blue-50 text-blue-700'
                    }`}>
                      {previewItem.type}
                    </span>
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                      previewItem.isFree 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {previewItem.isFree ? 'FREE PREVIEW' : 'PREMIUM'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5 font-mono">
                    {previewItem.contentUrl}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewItem.contentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
                  title="Open in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setPreviewItem(null)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Close Preview (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto bg-slate-950/5 flex items-center justify-center min-h-[420px]">
              {previewItem.type === 'VIDEO' ? (
                getYoutubeId(previewItem.contentUrl) ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black border border-slate-800">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYoutubeId(previewItem.contentUrl)}?autoplay=1&rel=0&modestbranding=1`}
                      title={previewItem.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="w-full rounded-xl overflow-hidden shadow-lg bg-black border border-slate-800">
                    <video
                      src={previewItem.contentUrl}
                      controls
                      autoPlay
                      className="w-full max-h-[65vh] object-contain mx-auto"
                    >
                      Your browser does not support HTML5 video streaming.
                    </video>
                  </div>
                )
              ) : (
                <div className="w-full h-[650px] bg-white rounded-xl shadow-inner border border-slate-200 overflow-hidden flex flex-col">
                  <iframe
                    src={previewItem.contentUrl}
                    title={previewItem.title}
                    className="w-full flex-1"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 px-6 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                Live preview verified from production cloud storage / YouTube CDN
              </span>
              <button
                onClick={() => setPreviewItem(null)}
                className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Curriculum Quick Action Modal (Add / Edit / Delete Chapter & Topic) ─── */}
      {curriculumModal && (() => {
        const isDelete = curriculumModal.mode === 'DELETE_CHAPTER' || curriculumModal.mode === 'DELETE_TOPIC';
        const isChapter = curriculumModal.mode === 'ADD_CHAPTER' || curriculumModal.mode === 'EDIT_CHAPTER' || curriculumModal.mode === 'DELETE_CHAPTER';
        const isEdit = curriculumModal.mode === 'EDIT_CHAPTER' || curriculumModal.mode === 'EDIT_TOPIC';
        const isAdd = curriculumModal.mode === 'ADD_CHAPTER' || curriculumModal.mode === 'ADD_TOPIC';

        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setCurriculumModal(null)}
          >
            <div 
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-xl ${
                    isDelete 
                      ? 'bg-rose-50 text-rose-600' 
                      : isChapter
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    {isDelete ? (
                      <Trash2 className="w-4 h-4" />
                    ) : isEdit ? (
                      <Pencil className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {curriculumModal.mode === 'ADD_CHAPTER' && 'Add New Chapter'}
                      {curriculumModal.mode === 'EDIT_CHAPTER' && 'Edit Chapter'}
                      {curriculumModal.mode === 'DELETE_CHAPTER' && 'Delete Chapter'}
                      {curriculumModal.mode === 'ADD_TOPIC' && 'Add New Topic'}
                      {curriculumModal.mode === 'EDIT_TOPIC' && 'Edit Topic'}
                      {curriculumModal.mode === 'DELETE_TOPIC' && 'Delete Topic'}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {curriculumModal.mode === 'ADD_CHAPTER' && `Subject: ${curriculumModal.subjectName}`}
                      {curriculumModal.mode === 'EDIT_CHAPTER' && `Subject: ${currentSubject?.name || 'Subject'}`}
                      {curriculumModal.mode === 'DELETE_CHAPTER' && `Confirm deletion`}
                      {curriculumModal.mode === 'ADD_TOPIC' && `Chapter: ${curriculumModal.chapterTitle}`}
                      {curriculumModal.mode === 'EDIT_TOPIC' && `Chapter: ${currentChapter?.title || 'Chapter'}`}
                      {curriculumModal.mode === 'DELETE_TOPIC' && `Confirm deletion`}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurriculumModal(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              {isDelete ? (
                <div className="p-5 space-y-4">
                  <div className="p-3.5 bg-rose-50 border border-rose-200/80 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-rose-950 space-y-1">
                      <p className="font-bold">Are you sure you want to delete this?</p>
                      <p className="text-rose-800 leading-relaxed">
                        {curriculumModal.mode === 'DELETE_CHAPTER' ? (
                          <>
                            You are deleting <strong>"{curriculumModal.chapter.title}"</strong>. All topics, attached video lectures, and study notes under this chapter will also be removed.
                          </>
                        ) : curriculumModal.mode === 'DELETE_TOPIC' ? (
                          <>
                            You are deleting <strong>"{curriculumModal.topic.title}"</strong>. Any attached video lectures and study notes for this topic will be unlinked.
                          </>
                        ) : null}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurriculumModal(null)}
                      disabled={modalSubmitting}
                      className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleCurriculumModalSubmit}
                      disabled={modalSubmitting}
                      className="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      {modalSubmitting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                      <span>Yes, Delete</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCurriculumModalSubmit} className="p-5 space-y-4">
                  {/* Title Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {isChapter ? 'Chapter Title' : 'Topic Title'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      autoFocus
                      value={modalTitle}
                      onChange={(e) => setModalTitle(e.target.value)}
                      placeholder={isChapter ? 'e.g. Matter in Our Surroundings' : 'e.g. Evaporation and Factors Affecting It'}
                      className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-indigo-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Topic Description (Only for topics) */}
                  {!isChapter && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                        <span>Description / Summary</span>
                        <span className="text-[10px] text-slate-400 font-normal">Optional</span>
                      </label>
                      <textarea
                        rows={2}
                        value={modalDescription}
                        onChange={(e) => setModalDescription(e.target.value)}
                        placeholder="Brief topic summary or syllabus outline..."
                        className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-indigo-500 focus:bg-white transition-all resize-none"
                      />
                    </div>
                  )}

                  {/* Order Index */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Sequence / Order Index
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={modalOrderIndex}
                      onChange={(e) => setModalOrderIndex(parseInt(e.target.value) || 1)}
                      className="w-24 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 outline-none focus:border-indigo-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setCurriculumModal(null)}
                      disabled={modalSubmitting}
                      className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={modalSubmitting || !modalTitle.trim()}
                      className={`px-4 py-2 text-xs font-bold text-white rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 ${
                        isChapter
                          ? 'bg-indigo-600 hover:bg-indigo-700'
                          : 'bg-emerald-600 hover:bg-emerald-700'
                      }`}
                    >
                      {modalSubmitting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle className="w-3.5 h-3.5" />}
                      <span>
                        {isAdd ? 'Create & Select' : 'Save Changes'}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
