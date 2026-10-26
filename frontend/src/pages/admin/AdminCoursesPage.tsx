import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import { Link } from 'react-router-dom';
import { Plus, Pencil, X, Video, FileText, Code, Trash2, AlertTriangle, BookOpen, CheckCircle2, Clock, Users, ArrowUpRight, Search, RotateCcw, Eye, ChevronUp, ChevronDown, ArrowLeft, Sparkles, Copy, Loader2, Award, ArrowRight, Download } from 'lucide-react';


interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  isPublished: boolean;
  totalModules?: number;
  lessonsCount?: number;
  videosCount?: number;
  projectsCount?: number;
  mockTestsCount?: number;
  enrolledCount?: number;
  certificatesCount?: number;
  pendingSubmissionsCount?: number;
}


interface Module {
  id: string;
  courseId: string;
  title: string;
  orderIndex: number;
  contentUrl: string;
  textContent: string;
  type: string;
}

const extractTechTags = (title: string, desc: string): string[] => {
  const combined = `${title || ''} ${desc || ''}`.toLowerCase();
  const tags: string[] = [];

  if (/\bjava\b/i.test(combined)) tags.push('☕ Java');
  if (/\bspring(\s*boot)?\b/i.test(combined)) tags.push('🌱 Spring Boot');
  if (/\breact(\.js)?\b/i.test(combined)) tags.push('⚛️ React');
  if (/\bdocker\b/i.test(combined)) tags.push('🐳 Docker');
  if (/\b(k8s|kubernetes)\b/i.test(combined)) tags.push('☸️ K8s');
  if (/\b(aws|cloud|gcp|azure)\b/i.test(combined)) tags.push('☁️ Cloud/AWS');
  if (/\bpython\b/i.test(combined)) tags.push('🐍 Python');

  // AI / Data: Only match genuine AI, ML, Data Science/Engineering keywords (excluding "spring data" and "ai-reviewed" / "ai-assisted")
  const sanitizedForAi = combined
    .replace(/spring\s+data/gi, '')
    .replace(/ai[\s-]reviewed/gi, '')
    .replace(/ai[\s-]assisted/gi, '')
    .replace(/ai[\s-]graded/gi, '');
  if (/\b(ai|ml|machine\s+learning|deep\s+learning|data\s+science|llm|genai|gpt|data\s+analytics)\b/i.test(sanitizedForAi)) {
    tags.push('🤖 AI / Data');
  }

  if (/\b(devops|ci\/cd)\b/i.test(combined)) tags.push('🚀 DevOps');
  if (/\b(sql|postgres|postgresql|mysql|mongodb|database)\b/i.test(combined)) tags.push('🗄️ SQL/DB');
  if (/\b(mern|node|nodejs|express)\b/i.test(combined)) tags.push('🟢 Node.js');
  if (/\b(capstone|project-based)\b/i.test(combined)) tags.push('🏆 Capstone');
  if (tags.length === 0) tags.push('💻 Full-Stack');
  return tags.slice(0, 4);
};

export function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(false);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PUBLISHED' | 'DRAFT'>('ALL');
  const [techFilter, setTechFilter] = useState<string>('ALL');
  
  // Developer Academy Stats
  const [adminStats, setAdminStats] = useState<{
    totalUsers?: number;
    activeCourses?: number;
    pendingSubmissions?: number;
    successfulPayments?: number;
  }>({});

  // Delete States
  const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);
  const [moduleToDelete, setModuleToDelete] = useState<Module | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);
  const [cloningCourseId, setCloningCourseId] = useState<string | null>(null);
  
  // Course Form
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    price: 999, // User types ₹999
    isPublished: false
  });

  // Module Form
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null);
  const [moduleForm, setModuleForm] = useState({
    title: '',
    type: 'LESSON',
    contentUrl: '',
    textContent: ''
  });

  useEffect(() => {
    fetchCourses();
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await api.get('/admin/stats').catch(() => ({ data: {} }));
      if (res?.data) setAdminStats(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await api.get('/admin/courses').catch(() => ({ data: [] }));
      if (res?.data) setCourses(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSeedOfficialTracks = async () => {
    setIsSeeding(true);
    try {
      const res = await api.post('/admin/courses/seed-official-tracks');
      if (res?.data) {
        setCourses(res.data);
      }
      toast.success("Official DevLens Master Tracks & Curriculum seeded successfully! 🎉");
      fetchCourses();
      fetchStats();
    } catch (e) {
      console.error(e);
      toast.error("Failed to seed official tracks");
    } finally {
      setIsSeeding(false);
    }
  };

  const handleTogglePublish = async (course: Course, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const newStatus = !course.isPublished;

    // Optimistic UI update
    setCourses(prev => prev.map(c => c.id === course.id ? { ...c, isPublished: newStatus } : c));
    if (selectedCourse?.id === course.id) {
      setSelectedCourse(prev => prev ? { ...prev, isPublished: newStatus } : null);
    }

    try {
      const res = await api.patch(`/admin/courses/${course.id}/toggle-publish`);
      toast.success(newStatus ? `"${course.title}" is now Live!` : `"${course.title}" set to Draft`);
      if (res?.data) {
        setCourses(prev => prev.map(c => c.id === course.id ? { ...c, ...res.data } : c));
        if (selectedCourse?.id === course.id) {
          setSelectedCourse(prev => prev ? { ...prev, ...res.data } : null);
        }
      }
    } catch (err) {
      // Revert optimistic update
      setCourses(prev => prev.map(c => c.id === course.id ? { ...c, isPublished: !newStatus } : c));
      if (selectedCourse?.id === course.id) {
        setSelectedCourse(prev => prev ? { ...prev, isPublished: !newStatus } : null);
      }
      toast.error("Failed to update publish status");
    }
  };

  const handleCloneCourse = async (course: Course, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (cloningCourseId) return;

    setCloningCourseId(course.id);
    const toastId = toast.loading(`Cloning "${course.title}" and its curriculum modules...`);
    try {
      const res = await api.post(`/admin/courses/${course.id}/clone`);
      toast.success(`Track duplicated successfully as "${res.data?.title || 'Copy'}"! 📑`, { id: toastId });
      fetchCourses();
      fetchStats();
    } catch (err) {
      console.error(err);
      toast.error("Failed to clone track", { id: toastId });
    } finally {
      setCloningCourseId(null);
    }
  };

  const fetchModules = async (courseId: string) => {
    try {
      const res = await api.get(`/admin/courses/${courseId}/modules`);
      if (res?.data) setModules(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load modules");
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    setIsDeleting(true);
    try {
      await api.delete(`/admin/courses/${courseId}`);
      toast.success("Course deleted successfully!");
      setCourseToDelete(null);
      fetchCourses();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete course");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteModule = async (moduleId: string) => {
    if (!selectedCourse) return;
    setIsDeleting(true);
    try {
      await api.delete(`/admin/modules/${moduleId}`);
      toast.success("Module deleted successfully!");
      setModuleToDelete(null);
      fetchModules(selectedCourse.id);
      fetchCourses();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete module");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleReorderModule = async (index: number, direction: 'UP' | 'DOWN') => {
    if (!selectedCourse) return;
    const targetIndex = direction === 'UP' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= modules.length) return;

    const currentMod = modules[index];
    const targetMod = modules[targetIndex];

    try {
      const currentOrder = currentMod.orderIndex;
      const targetOrder = targetMod.orderIndex;

      // Optimistic UI reordering
      const newModules = [...modules];
      newModules[index] = { ...targetMod, orderIndex: currentOrder };
      newModules[targetIndex] = { ...currentMod, orderIndex: targetOrder };
      setModules(newModules.sort((a, b) => a.orderIndex - b.orderIndex));

      await Promise.all([
        api.put(`/admin/modules/${currentMod.id}`, {
          courseId: selectedCourse.id,
          title: currentMod.title,
          type: currentMod.type,
          contentUrl: currentMod.contentUrl,
          textContent: currentMod.textContent,
          orderIndex: targetOrder
        }),
        api.put(`/admin/modules/${targetMod.id}`, {
          courseId: selectedCourse.id,
          title: targetMod.title,
          type: targetMod.type,
          contentUrl: targetMod.contentUrl,
          textContent: targetMod.textContent,
          orderIndex: currentOrder
        })
      ]);

      toast.success("Module order updated");
      fetchModules(selectedCourse.id);
    } catch (e) {
      console.error(e);
      toast.error("Failed to reorder module");
      fetchModules(selectedCourse.id);
    }
  };

  const handleCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      ...courseForm,
      price: courseForm.price * 100 // Convert ₹ to paise
    };

    try {
      if (editingCourseId) {
        await api.put(`/admin/courses/${editingCourseId}`, payload);
        toast.success("Course updated!");
      } else {
        await api.post('/admin/courses', payload);
        toast.success("Course created!");
      }
      setIsCourseModalOpen(false);
      fetchCourses();
    } catch (error) {
      toast.error("Failed to save course");
    } finally {
      setLoading(false);
    }
  };

  const handleModuleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    setLoading(true);
    
    const payload = {
      courseId: selectedCourse.id,
      ...moduleForm,
      orderIndex: editingModuleId ? modules.find(m => m.id === editingModuleId)?.orderIndex : modules.length + 1
    };

    try {
      if (editingModuleId) {
        await api.put(`/admin/modules/${editingModuleId}`, payload);
        toast.success("Module updated!");
      } else {
        await api.post('/admin/modules', payload);
        toast.success("Module added!");
      }
      setIsModuleModalOpen(false);
      fetchModules(selectedCourse.id);
      fetchCourses();
    } catch (error) {
      toast.error("Failed to save module");
    } finally {
      setLoading(false);
    }
  };

  const openCourseModal = (course?: Course) => {
    if (course) {
      setEditingCourseId(course.id);
      setCourseForm({
        title: course.title,
        description: course.description,
        price: course.price / 100,
        isPublished: course.isPublished
      });
    } else {
      setEditingCourseId(null);
      setCourseForm({ title: '', description: '', price: 999, isPublished: false });
    }
    setIsCourseModalOpen(true);
  };

  const openModuleModal = (module?: Module) => {
    if (module) {
      setEditingModuleId(module.id);
      setModuleForm({
        title: module.title,
        type: module.type,
        contentUrl: module.contentUrl || '',
        textContent: module.textContent || ''
      });
    } else {
      setEditingModuleId(null);
      setModuleForm({ title: '', type: 'LESSON', contentUrl: '', textContent: '' });
    }
    setIsModuleModalOpen(true);
  };

  const handleExportTracksCSV = () => {
    if (courses.length === 0) {
      toast.error('No courses to export');
      return;
    }

    const headers = [
      'Track ID',
      'Title',
      'Status',
      'Price (INR)',
      'Total Modules',
      'Videos Count',
      'Lessons Count',
      'Capstone Projects',
      'Mock Tests',
      'Enrolled Developers',
      'Certified Developers',
      'Pending Submissions',
      'Tech Tags',
      'Description'
    ];

    const escapeCsv = (val: unknown): string => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = filteredCourses.map(course => {
      const tags = extractTechTags(course.title, course.description).join('; ');
      return [
        escapeCsv(course.id),
        escapeCsv(course.title),
        escapeCsv(course.isPublished ? 'Published Live' : 'Draft'),
        escapeCsv((course.price || 0) / 100),
        escapeCsv(course.totalModules ?? 0),
        escapeCsv(course.videosCount ?? 0),
        escapeCsv(course.lessonsCount ?? 0),
        escapeCsv(course.projectsCount ?? 0),
        escapeCsv(course.mockTestsCount ?? 0),
        escapeCsv(course.enrolledCount ?? 0),
        escapeCsv(course.certificatesCount ?? 0),
        escapeCsv(course.pendingSubmissionsCount ?? 0),
        escapeCsv(tags),
        escapeCsv(course.description || '')
      ].join(',');
    });

    const csvContent = [headers.map(h => `"${h}"`).join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    link.href = url;
    link.setAttribute('download', `devlens_academy_tracks_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`Exported ${filteredCourses.length} tracks to CSV!`);
  };

  const handleExportCurriculumCSV = () => {
    if (!selectedCourse || modules.length === 0) {
      toast.error('No modules to export');
      return;
    }

    const headers = ['Order', 'Module ID', 'Title', 'Type', 'Content URL / Repo', 'Text Notes Length (Chars)', 'Track Title'];
    const escapeCsv = (val: unknown): string => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = modules.map((m, idx) => [
      escapeCsv(idx + 1),
      escapeCsv(m.id),
      escapeCsv(m.title),
      escapeCsv(m.type),
      escapeCsv(m.contentUrl || ''),
      escapeCsv((m.textContent || '').length),
      escapeCsv(selectedCourse.title)
    ].join(','));

    const csvContent = [headers.map(h => `"${h}"`).join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeTitle = selectedCourse.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    link.href = url;
    link.setAttribute('download', `${safeTitle}_curriculum_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`Exported ${modules.length} modules to CSV!`);
  };

  const totalCourses = courses.length;
  const publishedCourses = courses.filter(c => c.isPublished).length;
  const draftCourses = totalCourses - publishedCourses;
  const pendingSubmissions = adminStats.pendingSubmissions ?? 0;
  const totalDevs = adminStats.totalUsers ?? 0;

  // Filtered tracks calculation
  const filteredCourses = courses.filter(course => {
    // Status filter
    if (statusFilter === 'PUBLISHED' && !course.isPublished) return false;
    if (statusFilter === 'DRAFT' && course.isPublished) return false;

    // Tech stack filter
    if (techFilter !== 'ALL') {
      const text = `${course.title} ${course.description}`.toLowerCase();
      if (techFilter === 'Java' && !text.includes('java') && !text.includes('spring')) return false;
      if (techFilter === 'React' && !text.includes('react') && !text.includes('mern') && !text.includes('frontend') && !text.includes('web') && !text.includes('next')) return false;
      if (techFilter === 'Cloud' && !text.includes('cloud') && !text.includes('devops') && !text.includes('aws') && !text.includes('docker') && !text.includes('kubernetes')) return false;
      if (techFilter === 'Python / AI') {
        const sanitized = text
          .replace(/spring\s+data/gi, '')
          .replace(/ai[\s-]reviewed/gi, '')
          .replace(/ai[\s-]assisted/gi, '')
          .replace(/ai[\s-]graded/gi, '');
        const isAi = /\b(python|ai|ml|machine\s+learning|deep\s+learning|data\s+science|llm|genai|gpt|data\s+analytics)\b/i.test(sanitized);
        if (!isAi) return false;
      }
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = course.title?.toLowerCase().includes(q);
      const matchDesc = course.description?.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc) return false;
    }

    return true;
  });

  return (
    <div className="px-6 py-6 md:px-8 md:py-8 max-w-7xl mx-auto space-y-6 pb-24">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold mb-2">
            <BookOpen className="h-3.5 w-3.5" />
            <span>DevLens Academy • Admin Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Manage Developer Tracks</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Production-grade Career Tracks, Capstone GitHub Projects & Industry Certifications.
          </p>
        </div>
        {!selectedCourse && (
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleExportTracksCSV}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border rounded-xl text-xs font-semibold shadow-2xs transition-all cursor-pointer"
              title="Export current tracks catalog to CSV"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              type="button"
              onClick={handleSeedOfficialTracks}
              disabled={isSeeding}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-card hover:bg-muted text-foreground border border-border/80 rounded-xl text-xs font-semibold shadow-xs transition-all cursor-pointer disabled:opacity-50"
              title="Align and populate official DevLens Master Tracks & curriculum modules in DB"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>{isSeeding ? "Syncing Tracks..." : "Seed Official Tracks"}</span>
            </button>
            <button
              type="button"
              onClick={() => openCourseModal()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>New Track</span>
            </button>
          </div>
        )}
      </div>

      {/* Developer Academy KPI Metrics Ribbon */}
      {!selectedCourse && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Tracks */}
          <div
            onClick={() => { setStatusFilter('ALL'); setTechFilter('ALL'); setSearchQuery(''); }}
            className={`bg-card border rounded-2xl p-4.5 shadow-xs flex items-center gap-3.5 cursor-pointer transition-all hover:shadow-sm ${
              statusFilter === 'ALL' && techFilter === 'ALL' && !searchQuery
                ? 'border-blue-500/50 bg-blue-500/5 ring-2 ring-blue-500/20 shadow-xs'
                : 'border-border hover:border-primary/40'
            }`}
            title="Click to show all tracks"
          >
            <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl shrink-0 border border-blue-500/20">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Career Tracks</p>
              <h3 className="text-2xl font-black text-foreground mt-0.5 leading-none">{totalCourses}</h3>
              <p className="text-xs text-muted-foreground mt-1 truncate">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{publishedCourses} Live</span> • {draftCourses} Draft
              </p>
            </div>
          </div>

          {/* Card 2: Live Published */}
          <div
            onClick={() => setStatusFilter(statusFilter === 'PUBLISHED' ? 'ALL' : 'PUBLISHED')}
            className={`bg-card border rounded-2xl p-4.5 shadow-xs flex items-center gap-3.5 cursor-pointer transition-all hover:shadow-sm ${
              statusFilter === 'PUBLISHED'
                ? 'border-emerald-500/50 bg-emerald-500/5 ring-2 ring-emerald-500/20 shadow-xs'
                : 'border-border hover:border-primary/40'
            }`}
            title="Click to toggle published live tracks"
          >
            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0 border border-emerald-500/20">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Published Live</p>
              <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5 leading-none">{publishedCourses}</h3>
              <p className="text-xs text-muted-foreground mt-1 truncate font-medium">Active in Student Library</p>
            </div>
          </div>

          {/* Card 3: Pending Capstone Submissions */}
          <Link
            to="/admin/submissions"
            className={`border rounded-2xl p-4.5 shadow-xs flex items-center justify-between gap-3 transition-all hover:shadow-sm group cursor-pointer ${
              pendingSubmissions > 0
                ? 'bg-amber-500/10 border-amber-500/40 hover:border-amber-500/60'
                : 'bg-card border-border hover:border-primary/40'
            }`}
            title="Click to review developer capstone submissions queue"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className={`p-3 rounded-xl shrink-0 border transition-transform group-hover:scale-105 ${
                pendingSubmissions > 0
                  ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30'
                  : 'bg-muted text-muted-foreground border-border'
              }`}>
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Pending Reviews</p>
                <h3 className={`text-2xl font-black mt-0.5 leading-none ${pendingSubmissions > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-foreground'}`}>
                  {pendingSubmissions}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 truncate font-medium">Capstone Submissions</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap shrink-0">
              <span className="hidden sm:inline">Queue</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>

          {/* Card 4: Registered Developers & Paid Enrollments */}
          <Link
            to="/admin/developers"
            className="bg-card border border-border rounded-2xl p-4.5 shadow-xs flex items-center justify-between gap-3 hover:shadow-sm hover:border-primary/40 transition-all group cursor-pointer"
            title="Click to manage platform developers directory"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl shrink-0 border border-purple-500/20 transition-transform group-hover:scale-105">
                <Users className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Dev Community</p>
                <h3 className="text-2xl font-black text-foreground mt-0.5 leading-none">
                  {totalDevs}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 truncate font-medium">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">{adminStats.successfulPayments || 0}</span> Paid Enrollments
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap shrink-0">
              <span className="hidden sm:inline">Directory</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>
      )}

      {/* Search & Filter Toolbar */}
      {!selectedCourse && (
        <div className="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-3">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tracks by title, keywords or stack (Java, Docker, React, AWS)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground text-foreground font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
                  title="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Status Segmented Tabs */}
            <div className="flex items-center gap-1 shrink-0 bg-muted/60 p-1 rounded-xl border border-border">
              <button
                type="button"
                onClick={() => setStatusFilter('ALL')}
                className={`px-3 py-1.5 text-xs rounded-lg transition-all cursor-pointer ${
                  statusFilter === 'ALL'
                    ? 'bg-background text-foreground shadow-xs font-bold border border-border'
                    : 'text-muted-foreground hover:text-foreground font-semibold'
                }`}
              >
                All ({totalCourses})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('PUBLISHED')}
                className={`px-3 py-1.5 text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  statusFilter === 'PUBLISHED'
                    ? 'bg-emerald-600 text-white shadow-xs font-bold'
                    : 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 font-semibold'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${statusFilter === 'PUBLISHED' ? 'bg-white' : 'bg-emerald-600'}`} />
                Live ({publishedCourses})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('DRAFT')}
                className={`px-3 py-1.5 text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  statusFilter === 'DRAFT'
                    ? 'bg-amber-600 text-white shadow-xs font-bold'
                    : 'text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 font-semibold'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${statusFilter === 'DRAFT' ? 'bg-white' : 'bg-amber-600'}`} />
                Drafts ({draftCourses})
              </button>
            </div>
          </div>

          {/* Quick Tech Stack Filter Chips & Counter */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-border/50 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-muted-foreground font-semibold mr-1">Filter Stack:</span>
              {[
                { id: 'ALL', label: 'All Stacks' },
                { id: 'Java', label: '☕ Java / Spring' },
                { id: 'React', label: '⚛️ React / Web' },
                { id: 'Cloud', label: '☁️ Cloud & DevOps' },
                { id: 'Python / AI', label: '🤖 AI & Python' },
              ].map(chip => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setTechFilter(chip.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    techFilter === chip.id
                      ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                      : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/40'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-muted-foreground text-xs">
                Showing <strong className="text-foreground">{filteredCourses.length}</strong> of {totalCourses} tracks
              </span>
              <button
                type="button"
                onClick={handleExportTracksCSV}
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground font-semibold cursor-pointer text-xs transition-colors"
                title="Download CSV of current tracks"
              >
                <Download className="h-3 w-3" /> Export CSV
              </button>
              {(searchQuery || statusFilter !== 'ALL' || techFilter !== 'ALL') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setStatusFilter('ALL');
                    setTechFilter('ALL');
                  }}
                  className="inline-flex items-center gap-1 text-primary hover:underline font-semibold cursor-pointer text-xs"
                >
                  <RotateCcw className="h-3 w-3" /> Reset
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedCourse ? (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-border p-5 rounded-2xl shadow-xs">
            <div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground mb-2 cursor-pointer transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to All Tracks
              </button>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">{selectedCourse.title}</h2>
                <button
                  type="button"
                  onClick={() => handleTogglePublish(selectedCourse)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-all hover:scale-105 active:scale-95 border ${
                    selectedCourse.isPublished
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20'
                  }`}
                  title={selectedCourse.isPublished ? "Click to set Draft" : "Click to Publish Live"}
                >
                  <span className={`w-2 h-2 rounded-full ${selectedCourse.isPublished ? 'bg-emerald-500 shadow-xs' : 'bg-amber-500'}`} />
                  {selectedCourse.isPublished ? '● Published Live' : '○ Draft Mode'}
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-1.5 flex flex-wrap items-center gap-3 font-medium">
                <span><strong className="text-foreground">{modules.length}</strong> Modules</span>
                <span>•</span>
                <span><strong className="text-foreground">{modules.filter(m => m.type === 'VIDEO').length}</strong> Videos</span>
                <span>•</span>
                <span><strong className="text-foreground">{modules.filter(m => m.type === 'LESSON').length}</strong> Lessons</span>
                <span>•</span>
                <span><strong className="text-foreground">{modules.filter(m => m.type === 'PROJECT').length}</strong> Capstones</span>
                <span className="text-border">|</span>
                <span className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-bold">
                  <Users className="h-3.5 w-3.5" /> {selectedCourse.enrolledCount ?? 0} Enrolled
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
                  <Award className="h-3.5 w-3.5" /> {selectedCourse.certificatesCount ?? 0} Certified
                </span>
                {(selectedCourse.pendingSubmissionsCount ?? 0) > 0 && (
                  <>
                    <span>•</span>
                    <Link
                      to="/admin/submissions"
                      className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 font-bold hover:underline"
                    >
                      <Clock className="h-3.5 w-3.5" /> {selectedCourse.pendingSubmissionsCount} Pending Review{selectedCourse.pendingSubmissionsCount !== 1 ? 's' : ''}
                    </Link>
                  </>
                )}
              </p>
            </div>


            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                type="button"
                onClick={handleExportCurriculumCSV}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-colors shadow-2xs cursor-pointer"
                title="Export this track's curriculum modules to CSV"
              >
                <Download className="h-3.5 w-3.5" />
                Curriculum CSV
              </button>
              <button
                type="button"
                disabled={cloningCourseId === selectedCourse.id}
                onClick={() => handleCloneCourse(selectedCourse)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
                title="Duplicate this entire track and its curriculum modules"
              >
                {cloningCourseId === selectedCourse.id ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-600" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-blue-600" />
                )}
                Clone Track
              </button>
              <a
                href={`/course/${selectedCourse.id}/play`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-colors shadow-2xs"
                title="Preview Student Experience in Focus Player"
              >
                <Eye className="h-3.5 w-3.5" /> Preview Player
              </a>
              <button
                onClick={() => openModuleModal()}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold hover:bg-primary/90 shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="h-4 w-4" /> Add Module
              </button>
            </div>

          </div>

          <div className="space-y-3">
            {modules.length === 0 ? (
              <div className="p-12 text-center bg-card border-2 border-dashed border-border rounded-2xl text-muted-foreground">
                <Code className="h-10 w-10 mx-auto mb-3 opacity-40 text-muted-foreground" />
                <h4 className="font-semibold text-lg text-foreground">No curriculum modules yet</h4>
                <p className="text-sm mt-1 max-w-sm mx-auto text-muted-foreground">
                  Add video lectures, interactive lessons, or capstone GitHub projects to build this track.
                </p>
                <button
                  onClick={() => openModuleModal()}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold hover:bg-primary/90 cursor-pointer"
                >
                  <Plus className="h-4 w-4" /> Add First Module
                </button>
              </div>
            ) : (
              modules.map((mod, index) => (
                <div
                  key={mod.id}
                  className="p-4 bg-card border border-border rounded-xl shadow-xs hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    {/* Reordering Controls */}
                    <div className="flex flex-col items-center justify-center bg-muted/60 p-1 rounded-lg border border-border/50 shrink-0">
                      <button
                        onClick={() => handleReorderModule(index, 'UP')}
                        disabled={index === 0}
                        className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        title="Move Up"
                      >
                        <ChevronUp className="h-3.5 w-3.5" />
                      </button>
                      <span className="text-[11px] font-bold text-muted-foreground px-1">{index + 1}</span>
                      <button
                        onClick={() => handleReorderModule(index, 'DOWN')}
                        disabled={index === modules.length - 1}
                        className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        title="Move Down"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Type Icon Badge */}
                    <div className={`p-2.5 rounded-xl shrink-0 border ${
                      mod.type === 'VIDEO'
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                        : mod.type === 'PROJECT'
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
                        : mod.type === 'MOCK_TEST'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                    }`}>
                      {mod.type === 'VIDEO' ? <Video className="h-5 w-5" /> : mod.type === 'PROJECT' ? <Code className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                    </div>

                    {/* Module Title & Metadata */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-base text-foreground">{mod.title}</h4>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border ${
                          mod.type === 'VIDEO'
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                            : mod.type === 'PROJECT'
                            ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
                            : mod.type === 'MOCK_TEST'
                            ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                            : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                        }`}>
                          {mod.type}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 flex flex-wrap items-center gap-3">
                        {mod.contentUrl ? (
                          <span className="text-primary font-medium truncate max-w-xs inline-block" title={mod.contentUrl}>
                            🔗 {mod.type === 'PROJECT' ? 'Repo: ' : 'Stream: '}{mod.contentUrl}
                          </span>
                        ) : (
                          <span className="text-muted-foreground/60">No URL link</span>
                        )}
                        <span>•</span>
                        <span>{mod.textContent ? `${mod.textContent.length} chars markdown` : 'No text notes'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Row Actions */}
                  <div className="flex items-center gap-1 self-end sm:self-center">
                    <button
                      onClick={() => openModuleModal(mod)}
                      className="text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                      title="Edit Module"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setModuleToDelete(mod)}
                      className="text-muted-foreground hover:text-red-600 dark:hover:text-red-400 p-2 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                      title="Delete Module"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => {
            const techTags = extractTechTags(course.title, course.description);
            const videosCount = course.videosCount ?? 0;
            const lessonsCount = course.lessonsCount ?? 0;
            const projectsCount = course.projectsCount ?? 0;
            const totalModules = course.totalModules ?? 0;
            const hasModules = totalModules > 0;

            return (
              <div
                key={course.id}
                className="group relative bg-card border border-border hover:border-primary/40 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Status pill + iOS Toggle switch + Action Icon Group */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-colors ${
                          course.isPublished
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${course.isPublished ? 'bg-emerald-600' : 'bg-amber-600'}`} />
                        {course.isPublished ? 'Live in Library' : 'Draft Mode'}
                      </span>

                      {/* iOS-style toggle */}
                      <button
                        type="button"
                        onClick={(e) => handleTogglePublish(course, e)}
                        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                          course.isPublished ? 'bg-emerald-600' : 'bg-muted-foreground/30'
                        }`}
                        role="switch"
                        aria-checked={course.isPublished}
                        title={course.isPublished ? "Switch to Draft" : "Switch to Live"}
                      >
                        <span
                          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out mt-0.5 ml-0.5 ${
                            course.isPublished ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Quick action buttons */}
                    <div className="flex items-center gap-0.5 bg-muted/60 p-0.5 rounded-lg border border-border">
                      <button
                        type="button"
                        disabled={cloningCourseId === course.id}
                        onClick={(e) => handleCloneCourse(course, e)}
                        className="text-muted-foreground hover:text-blue-500 p-1.5 rounded-md hover:bg-blue-500/10 transition-colors cursor-pointer disabled:opacity-50"
                        title="Duplicate track & curriculum"
                      >
                        {cloningCourseId === course.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => openCourseModal(course)}
                        className="text-muted-foreground hover:text-foreground p-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer"
                        title="Edit track details"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCourseToDelete(course)}
                        className="text-muted-foreground hover:text-red-500 p-1.5 rounded-md hover:bg-red-500/10 transition-colors cursor-pointer"
                        title="Delete track"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Track Title */}
                  <h3
                    onClick={() => { setSelectedCourse(course); fetchModules(course.id); }}
                    className="text-base font-bold tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-2 min-h-[2.85rem] leading-snug mb-2"
                    title={course.title}
                  >
                    {course.title}
                  </h3>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5 min-h-[24px]">
                    {techTags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-muted text-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Module Breakdown Stats */}
                  {hasModules ? (
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground mb-3 bg-muted/40 px-2.5 py-1.5 rounded-xl border border-border">
                      <BookOpen className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <span className="font-bold text-foreground">{totalModules} Modules</span>
                      <span className="text-border">•</span>
                      <span className="font-medium">{lessonsCount} Lessons</span>
                      <span className="text-border">•</span>
                      <span className="font-medium">{videosCount} {videosCount === 1 ? 'Video' : 'Videos'}</span>
                      <span className="text-border">•</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">{projectsCount} Capstone{projectsCount !== 1 ? 's' : ''}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1.5 rounded-xl mb-3 font-semibold">
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                      <span>Curriculum modules pending</span>
                    </div>
                  )}

                  {/* Track Description */}
                  <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed min-h-[2.25rem] mb-4">
                    {course.description || "Comprehensive career track designed for production software engineers."}
                  </p>
                </div>

                {/* Footer Section: Analytics Microbar + Price + Action Buttons */}
                <div className="pt-3 border-t border-border flex flex-col gap-3">
                  {/* Track-Level Developer Analytics Row */}
                  <div className="grid grid-cols-3 gap-1 py-1.5 px-2 bg-muted/40 rounded-xl border border-border text-center">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1">
                        <Users className="h-3 w-3 text-purple-500" /> Devs
                      </span>
                      <span className="text-xs font-black text-foreground mt-0.5">
                        {course.enrolledCount ?? 0}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center border-x border-border">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1">
                        <Award className="h-3 w-3 text-amber-500" /> Certified
                      </span>
                      <span className="text-xs font-black text-foreground mt-0.5">
                        {course.certificatesCount ?? 0}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3 text-emerald-500" /> Pending
                      </span>
                      <span className={`text-xs font-black mt-0.5 ${(course.pendingSubmissionsCount ?? 0) > 0 ? 'text-amber-600 dark:text-amber-400 font-extrabold' : 'text-foreground'}`}>
                        {course.pendingSubmissionsCount ?? 0}
                      </span>
                    </div>
                  </div>

                  {/* Price & Review Status Row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-black text-foreground leading-none">
                        ₹{(course.price / 100).toLocaleString('en-IN')}
                      </div>
                      <p className="text-[10px] font-semibold text-muted-foreground mt-1">Lifetime Curriculum</p>
                    </div>

                    {(course.pendingSubmissionsCount ?? 0) > 0 ? (
                      <Link
                        to="/admin/submissions"
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 px-2.5 py-1 rounded-md transition-colors"
                        title="Review Student Capstones"
                      >
                        {course.pendingSubmissionsCount} Review{course.pendingSubmissionsCount !== 1 ? 's' : ''} <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                        Curriculum Ready
                      </span>
                    )}
                  </div>

                  {/* 2 Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`/course/${course.id}/play`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/80 transition-all shadow-2xs"
                      title="Open Student Focus Player in new tab (bypasses enrollment)"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Preview</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => { setSelectedCourse(course); fetchModules(course.id); }}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-2xs cursor-pointer"
                      title="Manage modules, lessons & videos"
                    >
                      <span>Curriculum</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {filteredCourses.length === 0 && (
            <div className="col-span-full p-12 text-center border-2 border-dashed border-border rounded-xl bg-card/40">
              <div className="p-3 bg-muted rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-lg text-foreground">
                {courses.length === 0 ? "No courses created yet" : "No tracks matching your filters"}
              </h4>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
                {courses.length === 0
                  ? 'Click "New Track" above to start building your Developer Academy.'
                  : 'Try clearing your search query or switching status / tech filter chips.'}
              </p>
              {courses.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setStatusFilter('ALL');
                    setTechFilter('ALL');
                  }}
                  className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 inline-flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <RotateCcw className="h-4 w-4" /> Reset Filters
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Course Modal */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h2 className="text-lg font-bold">{editingCourseId ? 'Edit Developer Track' : 'Create Developer Track'}</h2>
              <button onClick={() => setIsCourseModalOpen(false)}><X className="h-5 w-5 text-muted-foreground" /></button>
            </div>
            <form onSubmit={handleCourseSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Track Title</label>
                <input required type="text" placeholder="e.g. Master in Full Stack Java Development" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" value={courseForm.title} onChange={e => setCourseForm({...courseForm, title: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea rows={3} placeholder="Comprehensive description of the career track and skills acquired..." className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" value={courseForm.description} onChange={e => setCourseForm({...courseForm, description: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price (₹)</label>
                <input required type="number" min="0" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" value={courseForm.price} onChange={e => setCourseForm({...courseForm, price: parseInt(e.target.value) || 0})} />
              </div>
              <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                <input type="checkbox" checked={courseForm.isPublished} onChange={e => setCourseForm({...courseForm, isPublished: e.target.checked})} className="h-4 w-4 rounded-sm border-primary text-primary focus:ring-primary accent-primary" />
                Publish Live in Student Library
              </label>
              <button disabled={loading} type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer">{loading ? 'Saving Track...' : 'Save Developer Track'}</button>
            </form>
          </div>
        </div>
      )}

      {/* Module Modal */}
      {isModuleModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-border flex justify-between items-center sticky top-0 bg-card z-10">
              <h2 className="text-lg font-bold">{editingModuleId ? 'Edit Module' : 'Add Module'}</h2>
              <button type="button" onClick={() => setIsModuleModalOpen(false)}><X className="h-5 w-5 text-muted-foreground" /></button>
            </div>
            <form onSubmit={handleModuleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input required type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" value={moduleForm.title} onChange={e => setModuleForm({...moduleForm, title: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={moduleForm.type}
                    onChange={e => setModuleForm({...moduleForm, type: e.target.value})}
                  >
                    <option value="LESSON">Lesson (Video + Markdown Notes)</option>
                    <option value="VIDEO">Video Only (Lecture / Walkthrough)</option>
                    <option value="PROJECT">Capstone Project / GitHub Assessment</option>
                    <option value="MOCK_TEST">Mock Assessment / Test</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {moduleForm.type === 'PROJECT'
                    ? 'GitHub Starter Template URL (Optional)'
                    : moduleForm.type === 'VIDEO'
                    ? 'YouTube / Stream Embed URL (Required)'
                    : 'Video Stream / Embed URL (Optional)'}
                </label>
                <input
                  type="url"
                  placeholder={
                    moduleForm.type === 'PROJECT'
                      ? 'https://github.com/devlens-ai/spring-boot-starter-template'
                      : 'https://www.youtube.com/embed/...'
                  }
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={moduleForm.contentUrl}
                  onChange={e => setModuleForm({...moduleForm, contentUrl: e.target.value})}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {moduleForm.type === 'PROJECT'
                    ? 'Starter repository that developers will clone and fork to submit their work.'
                    : 'Right click on YouTube video &rarr; Copy embed code &rarr; Extract src URL (e.g. https://www.youtube.com/embed/xyz).'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  {moduleForm.type === 'PROJECT'
                    ? 'Project Architecture, Requirements & Rubric (Markdown)'
                    : 'Markdown Lesson Notes / Documentation (Optional)'}
                </label>
                <textarea 
                  rows={8} 
                  placeholder={
                    moduleForm.type === 'PROJECT'
                      ? "# Capstone Project: Enterprise Microservice\n\n### Requirements:\n1. Build REST APIs with Spring Boot 3\n2. Add Docker Compose with PostgreSQL\n3. Push repo to GitHub and submit live URL for admin review."
                      : "# Chapter Notes\nWrite markdown notes, code snippets, or key takeaways here..."
                  } 
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono" 
                  value={moduleForm.textContent} 
                  onChange={e => setModuleForm({...moduleForm, textContent: e.target.value})} 
                />
              </div>
              <button disabled={loading} type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm cursor-pointer">
                {editingModuleId ? 'Update Module' : 'Add Module to Track'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Course Delete Confirmation Modal */}
      {courseToDelete && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full border border-red-500/20">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Delete Course Track?</h3>
                <p className="text-xs text-muted-foreground">Action cannot be undone</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Are you sure you want to delete <strong className="text-foreground font-semibold">&ldquo;{courseToDelete.title}&rdquo;</strong>? 
              All modules and student progress associated with this track will be permanently removed.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setCourseToDelete(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => handleDeleteCourse(courseToDelete.id)}
                className="px-4 py-2 rounded-lg text-sm font-bold bg-red-600 text-white hover:bg-red-700 shadow-sm transition-colors flex items-center gap-1.5"
              >
                {isDeleting ? 'Deleting...' : 'Delete Course'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Module Delete Confirmation Modal */}
      {moduleToDelete && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full border border-red-500/20">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Delete Module?</h3>
                <p className="text-xs text-muted-foreground">Action cannot be undone</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Are you sure you want to delete module <strong className="text-foreground font-semibold">&ldquo;{moduleToDelete.title}&rdquo;</strong>?
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setModuleToDelete(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => handleDeleteModule(moduleToDelete.id)}
                className="px-4 py-2 rounded-lg text-sm font-bold bg-red-600 text-white hover:bg-red-700 shadow-sm transition-colors flex items-center gap-1.5"
              >
                {isDeleting ? 'Deleting...' : 'Delete Module'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
