import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api } from '../../lib/api';
import { 
  Users, Crown, MessageSquare, Search, RefreshCw, AlertTriangle, 
  Flame, Clock, Award, X, FileText, ChevronRight, ChevronLeft, Mail, Download,
  KeyRound, ShieldAlert, ShieldCheck, Check, Copy, UserCheck, UserX, Sparkles,
  Edit3, Code2, GraduationCap, Zap, ThumbsUp
} from 'lucide-react';
import { toast } from 'sonner';

interface Student {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  examGoal: string;
  subscriptionPlan: string;
  isPaidUser: boolean;
  paidUser?: boolean;
  subscribedUntil: string | null;
  createdAt: string;
  lastLogin: string | null;
  totalStudyMinutes: number;
  totalXp: number;
  testsTaken: number;
  averageScore: number | null;
  crmStatus: string;
  crmNotes: string | null;
  lastContactedAt: string | null;
  paywallHitCount: number;
  isLowScore: boolean;
  lowScore?: boolean;
  isHotLead: boolean;
  hotLead?: boolean;
  isGhost: boolean;
  ghost?: boolean;
  isAtRisk: boolean;
  atRisk?: boolean;
  isNewStudent: boolean;
  newStudent?: boolean;
  isActive?: boolean;
  active?: boolean;
  isLeaderboardBanned?: boolean;
  leaderboardBanned?: boolean;
}

// Resilient accessor helpers to handle both "isX" and "x" Jackson field names seamlessly
export const isStudentPaid = (s: Student | null | undefined): boolean => 
  Boolean(s?.isPaidUser ?? (s as any)?.paidUser);
export const isStudentHotLead = (s: Student | null | undefined): boolean => 
  Boolean(s?.isHotLead ?? (s as any)?.hotLead);
export const isStudentAtRisk = (s: Student | null | undefined): boolean => 
  Boolean(s?.isAtRisk ?? (s as any)?.atRisk);
export const isStudentLowScore = (s: Student | null | undefined): boolean => 
  Boolean(s?.isLowScore ?? (s as any)?.lowScore);
export const isStudentGhost = (s: Student | null | undefined): boolean => 
  Boolean(s?.isGhost ?? (s as any)?.ghost);
export const isStudentNew = (s: Student | null | undefined): boolean => 
  Boolean(s?.isNewStudent ?? (s as any)?.newStudent);
export const isStudentActive = (s: Student | null | undefined): boolean => {
  if (!s) return true;
  if (s.isActive !== undefined) return s.isActive;
  if ((s as any).active !== undefined) return (s as any).active;
  return true;
};

// Clean plan badge formatter so lengthy database names don't stretch or crush table columns
export const formatPlanBadge = (rawPlan: string | null | undefined): { title: string; subtitle?: string } => {
  if (!rawPlan || rawPlan.toUpperCase() === 'FREE') return { title: 'FREE' };
  const p = rawPlan.trim();
  if (p.includes('Senior Boards')) {
    return { 
      title: 'Senior Boards', 
      subtitle: p.includes('Full Academic Pass') ? 'Full Pass' : p.includes('MONTHLY') ? 'Monthly' : 'Class 11 & 12' 
    };
  }
  if (p.includes('Boards Prep')) {
    return { 
      title: 'Boards Prep', 
      subtitle: p.includes('Full Academic Pass') ? 'Full Pass' : p.includes('MONTHLY') ? 'Monthly' : 'Class 9 & 10' 
    };
  }
  if (p.includes('Competitive') || p.includes('Govt') || p.includes('JEE') || p.includes('NEET') || p.includes('SSC') || p.includes('UPSC')) {
    return { 
      title: 'Competitive & Govt', 
      subtitle: 'Exam Pass' 
    };
  }
  if (p.includes('Foundation')) {
    return { title: 'Foundation', subtitle: 'Class 6 - 8' };
  }
  return { title: p };
};

interface Stats {
  totalStudents: number;
  paidStudents: number;
  freeStudents: number;
  hotLeads: number;
  strugglingStudents: number;
  atRiskStudents: number;
}

const CRM_STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  NEW_LEAD: { label: 'New Lead', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  CONTACTED: { label: 'Contacted', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  INTERESTED: { label: 'Interested', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  CONVERTED_PRO: { label: 'Converted PRO', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  NOT_INTERESTED: { label: 'Not Interested', color: 'bg-slate-100 text-slate-600 border-slate-200' },
};

export function AdminStudentsPage() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialIntent = (searchParams.get('intent') as any) || 'ALL';
  const initialPlan = (searchParams.get('plan') as any) || 'ALL';
  const targetStudentId = searchParams.get('studentId') || '';

  const [students, setStudents] = useState<Student[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Filters & Controls
  const [planFilter, setPlanFilter] = useState<'ALL' | 'PAID' | 'FREE'>(initialPlan);
  const [crmFilter, setCrmFilter] = useState<string>('ALL');
  const [goalFilter, setGoalFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'SUSPENDED'>('ALL');
  const [intentFilter, setIntentFilter] = useState<'ALL' | 'HOT_LEAD' | 'AT_RISK' | 'LOW_SCORE' | 'NO_ACTIVITY' | 'NEW_STUDENT'>(initialIntent);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [hideTestAccounts, setHideTestAccounts] = useState(false);
  const [sortBy, setSortBy] = useState<'NEWEST' | 'OLDEST' | 'STUDY_TIME' | 'XP' | 'LOW_SCORE' | 'HIGH_SCORE' | 'PAYWALL_HITS'>('NEWEST');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Modals & Drawers
  const [selectedStudentForDrawer, setSelectedStudentForDrawer] = useState<Student | null>(null);
  const [activityData, setActivityData] = useState<any | null>(null);
  const [loadingActivity, setLoadingActivity] = useState(false);
  const [drawerNotes, setDrawerNotes] = useState('');
  const [savingDrawerNotes, setSavingDrawerNotes] = useState(false);

  // Notes Modal
  const [editingNotesStudent, setEditingNotesStudent] = useState<Student | null>(null);
  const [noteText, setNoteText] = useState('');
  const [savingNotes, setSavingNotes] = useState(false);

  // Executive Action Modals
  // 1. Subscription Modal State
  const [subModalStudent, setSubModalStudent] = useState<Student | null>(null);
  const [subPlan, setSubPlan] = useState<'FREE' | 'PRO' | 'UNLIMITED'>('PRO');
  const [subDurationDays, setSubDurationDays] = useState<number>(30);
  const [subExpiryDate, setSubExpiryDate] = useState<string>('');
  const [subReason, setSubReason] = useState<string>('Offline Bank / Direct Educator Grant');
  const [isSavingSub, setIsSavingSub] = useState(false);

  // 2. Status / Ban Modal State
  const [statusModalStudent, setStatusModalStudent] = useState<Student | null>(null);
  const [banReason, setBanReason] = useState<string>('Violation of community guidelines or abusive automated requests.');
  const [isSavingStatus, setIsSavingStatus] = useState(false);

  // 3. Edit Profile Modal State
  const [profileModalStudent, setProfileModalStudent] = useState<Student | null>(null);
  const [editFullName, setEditFullName] = useState<string>('');
  const [editPhone, setEditPhone] = useState<string>('');
  const [editExamGoal, setEditExamGoal] = useState<string>('');
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  // 4. Reset Password Modal State
  const [passwordModalStudent, setPasswordModalStudent] = useState<Student | null>(null);
  const [customPassword, setCustomPassword] = useState<string>('');
  const [generateRandom, setGenerateRandom] = useState<boolean>(true);
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [generatedPasswordResult, setGeneratedPasswordResult] = useState<string | null>(null);
  const [hasCopiedPassword, setHasCopiedPassword] = useState(false);

  // 5. XP Adjust Modal State
  const [xpModalStudent, setXpModalStudent] = useState<Student | null>(null);
  const [xpDelta, setXpDelta] = useState<number>(50);
  const [xpReason, setXpReason] = useState<string>('Quiz glitch compensation / Leaderboard audit');
  const [isSavingXp, setIsSavingXp] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [studentsRes, statsRes] = await Promise.all([
        api.get('/learn/admin/students', {
          params: {
            plan: planFilter,
            crmStatus: crmFilter,
            examGoal: goalFilter,
            status: statusFilter,
            size: 200
          }
        }),
        api.get('/learn/admin/students/stats')
      ]);
      setStudents(studentsRes.data || []);
      setStats(statsRes.data || null);
    } catch (e: any) {
      toast.error('Failed to load student directory');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [planFilter, crmFilter, goalFilter, statusFilter]);

  // Synchronize state when navigating into the page via deep links or notifications
  useEffect(() => {
    const qSearch = searchParams.get('search');
    const qIntent = searchParams.get('intent');
    const qPlan = searchParams.get('plan');
    if (qSearch !== null) setSearchTerm(qSearch);
    if (qIntent !== null) setIntentFilter(qIntent as any);
    if (qPlan !== null) setPlanFilter(qPlan as any);
  }, [searchParams]);

  const availableGoals = useMemo(() => {
    const preset = ['Class 9', 'Class 10', 'Class 11', 'Class 12', 'JEE Mains', 'NEET UG', 'SSC CGL', 'UPSC', 'CUET', 'Banking'];
    const fromData = students.map(s => s.examGoal).filter(Boolean);
    return Array.from(new Set([...preset, ...fromData]));
  }, [students]);

  const processedStudents = useMemo(() => {
    const list = students.filter(s => {
      if (hideTestAccounts) {
        const lowerEmail = (s.email || '').toLowerCase();
        if (lowerEmail.startsWith('test_') || lowerEmail.includes('@test.') || lowerEmail.includes('test_task')) {
          return false;
        }
      }
      if (searchTerm.trim()) {
        const term = searchTerm.trim().toLowerCase();
        const cleanTerm = term.replace(/\D/g, '');
        const nameMatch = (s.fullName || '').toLowerCase().includes(term);
        const emailMatch = (s.email || '').toLowerCase().includes(term);
        const phoneMatch = cleanTerm.length > 0 && (s.phone || '').replace(/\D/g, '').includes(cleanTerm);
        const goalMatch = (s.examGoal || '').toLowerCase().includes(term);
        if (!nameMatch && !emailMatch && !phoneMatch && !goalMatch) return false;
      }
      if (intentFilter === 'HOT_LEAD') return isStudentHotLead(s);
      if (intentFilter === 'AT_RISK') return isStudentAtRisk(s);
      if (intentFilter === 'LOW_SCORE') return isStudentLowScore(s);
      if (intentFilter === 'NO_ACTIVITY') return isStudentGhost(s);
      if (intentFilter === 'NEW_STUDENT') return isStudentNew(s);
      return true;
    });

    return [...list].sort((a, b) => {
      switch (sortBy) {
        case 'OLDEST':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'STUDY_TIME':
          return b.totalStudyMinutes - a.totalStudyMinutes;
        case 'XP':
          return b.totalXp - a.totalXp;
        case 'LOW_SCORE':
          return (a.averageScore ?? 999) - (b.averageScore ?? 999);
        case 'HIGH_SCORE':
          return (b.averageScore ?? 0) - (a.averageScore ?? 0);
        case 'PAYWALL_HITS':
          return (b.paywallHitCount - a.paywallHitCount) || (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        case 'NEWEST':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  }, [students, intentFilter, hideTestAccounts, sortBy, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(processedStudents.length / pageSize));
  const paginatedStudents = useMemo(() => {
    const start = (page - 1) * pageSize;
    return processedStudents.slice(start, start + pageSize);
  }, [processedStudents, page]);

  useEffect(() => {
    setPage(1);
  }, [planFilter, crmFilter, goalFilter, intentFilter, hideTestAccounts, sortBy]);

  const resetAllFilters = () => {
    setPlanFilter('ALL');
    setCrmFilter('ALL');
    setGoalFilter('ALL');
    setIntentFilter('ALL');
    setSearchTerm('');
    setHideTestAccounts(false);
    setSortBy('NEWEST');
  };

  const hasActiveFilters = 
    planFilter !== 'ALL' || 
    crmFilter !== 'ALL' || 
    goalFilter !== 'ALL' || 
    intentFilter !== 'ALL' || 
    hideTestAccounts || 
    searchTerm.trim().length > 0;

  const hasOtherFilters = 
    planFilter !== 'ALL' || 
    crmFilter !== 'ALL' || 
    goalFilter !== 'ALL' || 
    intentFilter !== 'ALL' || 
    hideTestAccounts;


  const handleCrmStatusChange = async (studentId: string, newStatus: string) => {
    try {
      await api.patch(`/learn/admin/students/${studentId}/crm`, {
        crmStatus: newStatus
      });
      setStudents(prev => prev.map(s => s.id === studentId ? { ...s, crmStatus: newStatus } : s));
      toast.success('CRM status updated');
    } catch (e) {
      toast.error('Failed to update status');
    }
  };

  const handleOpenNotes = (student: Student) => {
    setEditingNotesStudent(student);
    setNoteText(student.crmNotes || '');
  };

  const handleSaveNotes = async () => {
    if (!editingNotesStudent) return;
    setSavingNotes(true);
    try {
      await api.patch(`/learn/admin/students/${editingNotesStudent.id}/crm`, {
        crmStatus: editingNotesStudent.crmStatus || 'NEW_LEAD',
        crmNotes: noteText
      });
      setStudents(prev => prev.map(s => s.id === editingNotesStudent.id ? { ...s, crmNotes: noteText } : s));
      toast.success('Remarks saved');
      setEditingNotesStudent(null);
    } catch (e) {
      toast.error('Failed to save remarks');
    } finally {
      setSavingNotes(false);
    }
  };

  const handleOpenActivity = async (student: Student) => {
    setSelectedStudentForDrawer(student);
    setDrawerNotes(student.crmNotes || '');
    setLoadingActivity(true);
    try {
      const res = await api.get(`/learn/admin/students/${student.id}/activity`);
      setActivityData(res.data);
      if (res.data?.crmNotes) {
        setDrawerNotes(res.data.crmNotes);
      }
    } catch (e) {
      toast.error('Failed to load activity logs');
    } finally {
      setLoadingActivity(false);
    }
  };

  // Auto-open activity drawer if directed via notification deep link with studentId or single target search match
  useEffect(() => {
    if (students.length > 0 && !selectedStudentForDrawer) {
      if (targetStudentId) {
        const match = students.find(s => s.id === targetStudentId);
        if (match) {
          handleOpenActivity(match);
          return;
        }
      }
      if (initialSearch && students.length === 1) {
        handleOpenActivity(students[0]);
      }
    }
  }, [students, targetStudentId]);

  const handleSaveDrawerNotes = async () => {
    if (!selectedStudentForDrawer) return;
    setSavingDrawerNotes(true);
    try {
      await api.patch(`/learn/admin/students/${selectedStudentForDrawer.id}/crm`, {
        crmStatus: selectedStudentForDrawer.crmStatus || 'NEW_LEAD',
        crmNotes: drawerNotes
      });
      setStudents(prev => prev.map(s => s.id === selectedStudentForDrawer.id ? { ...s, crmNotes: drawerNotes } : s));
      setSelectedStudentForDrawer(prev => prev ? { ...prev, crmNotes: drawerNotes } : null);
      toast.success('Remarks saved');
    } catch (e) {
      toast.error('Failed to save remarks');
    } finally {
      setSavingDrawerNotes(false);
    }
  };

  const handleDrawerCrmStatusChange = async (newStatus: string) => {
    if (!selectedStudentForDrawer) return;
    await handleCrmStatusChange(selectedStudentForDrawer.id, newStatus);
    setSelectedStudentForDrawer(prev => prev ? { ...prev, crmStatus: newStatus } : null);
  };

  // 1. Subscription Management Handlers
  const handleOpenSubscriptionModal = (student: Student) => {
    setSubModalStudent(student);
    setSubPlan(isStudentPaid(student) ? (student.subscriptionPlan as any) : 'PRO');
    setSubDurationDays(30);
    setSubExpiryDate(student.subscribedUntil ? student.subscribedUntil.split('T')[0] : '');
    setSubReason('Offline UPI / Direct Educator Grant');
  };

  const handleSaveSubscription = async () => {
    if (!subModalStudent) return;
    setIsSavingSub(true);
    try {
      await api.patch(`/learn/admin/students/${subModalStudent.id}/subscription`, {
        plan: subPlan,
        durationDays: subDurationDays > 0 ? subDurationDays : undefined,
        expiryDate: subExpiryDate || undefined,
        reason: subReason
      });
      toast.success(`Subscription updated to ${subPlan}`);
      setSubModalStudent(null);
      fetchData();
    } catch (e: any) {
      toast.error(e.response?.data?.message || 'Failed to update subscription');
    } finally {
      setIsSavingSub(false);
    }
  };

  // 2. Account Status / Ban Handlers
  const handleOpenStatusModal = (student: Student) => {
    setStatusModalStudent(student);
    setBanReason(isStudentActive(student) === false ? 'Reactivating verified student account' : 'Violation of community guidelines or abusive automated requests.');
  };

  const handleSaveStatus = async () => {
    if (!statusModalStudent) return;
    setIsSavingStatus(true);
    const newActiveState = isStudentActive(statusModalStudent) === false;
    try {
      await api.patch(`/learn/admin/students/${statusModalStudent.id}/status`, {
        active: newActiveState,
        banReason
      });
      toast.success(`Account successfully ${newActiveState ? 'Reactivated' : 'Suspended'}`);
      setStatusModalStudent(null);
      fetchData();
    } catch (e: any) {
      toast.error(e.response?.data?.message || 'Failed to update account status');
    } finally {
      setIsSavingStatus(false);
    }
  };

  // 3. Edit Profile Handlers
  const handleOpenProfileModal = (student: Student) => {
    setProfileModalStudent(student);
    setEditFullName(student.fullName || '');
    setEditPhone(student.phone || '');
    setEditExamGoal(student.examGoal || '');
  };

  const handleSaveProfile = async () => {
    if (!profileModalStudent) return;
    setIsSavingProfile(true);
    try {
      await api.put(`/learn/admin/students/${profileModalStudent.id}/profile`, {
        fullName: editFullName,
        phone: editPhone,
        examGoal: editExamGoal
      });
      toast.success('Student profile updated');
      setProfileModalStudent(null);
      fetchData();
    } catch (e: any) {
      toast.error(e.response?.data?.message || 'Failed to update profile');
    } finally {
      setIsSavingProfile(false);
    }
  };

  // 4. Password Reset Handlers
  const handleOpenPasswordModal = (student: Student) => {
    setPasswordModalStudent(student);
    setCustomPassword('');
    setGenerateRandom(true);
    setGeneratedPasswordResult(null);
    setHasCopiedPassword(false);
  };

  const handleSavePassword = async () => {
    if (!passwordModalStudent) return;
    setIsSavingPassword(true);
    try {
      const res = await api.post(`/learn/admin/students/${passwordModalStudent.id}/reset-password`, {
        newPassword: generateRandom ? undefined : customPassword,
        generateRandom
      });
      setGeneratedPasswordResult(res.data.temporaryPassword);
      toast.success('Password reset successfully!');
    } catch (e: any) {
      toast.error(e.response?.data?.message || 'Failed to reset password');
    } finally {
      setIsSavingPassword(false);
    }
  };

  // 5. XP Adjustment Handlers
  const handleOpenXpModal = (student: Student) => {
    setXpModalStudent(student);
    setXpDelta(50);
    setXpReason('Quiz glitch compensation / Leaderboard audit');
  };

  const handleSaveXp = async () => {
    if (!xpModalStudent) return;
    setIsSavingXp(true);
    try {
      const res = await api.post(`/learn/admin/students/${xpModalStudent.id}/adjust-xp`, {
        xpDelta,
        reason: xpReason
      });
      toast.success(`XP adjusted: ${res.data.newXp} total XP`);
      setXpModalStudent(null);
      fetchData();
    } catch (e: any) {
      toast.error(e.response?.data?.message || 'Failed to adjust XP');
    } finally {
      setIsSavingXp(false);
    }
  };

  const handleWhatsAppClick = (student: Student) => {
    if (!student.phone) return;
    const cleanPhone = student.phone.replace(/\D/g, '');
    const message = encodeURIComponent(
      `Hi ${student.fullName}! I noticed you are preparing for ${student.examGoal} on PrepLens. How is your preparation going? Let me know if you have any questions or need study material!`
    );
    window.open(`https://wa.me/91${cleanPhone}?text=${message}`, '_blank');
  };

  const handleEmailClick = (student: Student) => {
    const subject = encodeURIComponent(`PrepLens Support - Need help with your ${student.examGoal} preparation?`);
    const body = encodeURIComponent(
      `Hi ${student.fullName},\n\nI noticed you signed up for PrepLens to prepare for ${student.examGoal}.\n\nHow is your study progress going? If you need personalized study material, practice tests, or guidance, reply directly to this email.\n\nBest regards,\nPrepLens Team`
    );
    window.location.href = `mailto:${student.email}?subject=${subject}&body=${body}`;
  };

  const handleExportCsv = () => {
    if (processedStudents.length === 0) {
      toast.error('No students to export with current filters');
      return;
    }

    const headers = [
      'Full Name',
      'Email',
      'Phone',
      'Exam Goal',
      'Plan',
      'CRM Status',
      'Study Minutes',
      'Total XP',
      'Mock Tests Taken',
      'Average Test Score',
      'Paywall Hits',
      'CRM Remarks',
      'Joined Date',
      'Last Login'
    ];

    const escapeCsv = (val: any) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = processedStudents.map(s => [
      escapeCsv(s.fullName),
      escapeCsv(s.email),
      escapeCsv(s.phone ? `+91 ${s.phone}` : ''),
      escapeCsv(s.examGoal),
      escapeCsv(isStudentPaid(s) ? (s.subscriptionPlan || 'PRO') : 'FREE'),
      escapeCsv(s.crmStatus || 'NEW_LEAD'),
      escapeCsv(s.totalStudyMinutes),
      escapeCsv(s.totalXp),
      escapeCsv(s.testsTaken),
      escapeCsv(s.averageScore !== null ? `${s.averageScore}%` : 'N/A'),
      escapeCsv(s.paywallHitCount),
      escapeCsv(s.crmNotes || ''),
      escapeCsv(s.createdAt ? new Date(s.createdAt).toLocaleString() : ''),
      escapeCsv(s.lastLogin ? new Date(s.lastLogin).toLocaleString() : '')
    ].join(','));

    const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const dateStr = new Date().toISOString().slice(0, 10);
    link.download = `preplens_students_${dateStr}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`Exported ${processedStudents.length} students to CSV`);
  };

  const formatStudyTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h === 0) return `${m}m`;
    return `${h}h ${m}m`;
  };

  return (
    <div className="w-full space-y-6 pb-12 font-sans text-slate-900">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Students & Conversion CRM</h1>
          <p className="text-slate-500 text-sm mt-1">Track student engagement, follow up with free leads, and resolve academic struggle points.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {/* Vertical Switcher Pill */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-900 shadow-xs border border-slate-200">
              <GraduationCap className="h-3.5 w-3.5 text-blue-600" />
              <span>PrepLens Students</span>
            </div>
            <Link
              to="/admin/users"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all"
            >
              <Code2 className="h-3.5 w-3.5 text-slate-500" />
              <span>DevLens Developers</span>
            </Link>
          </div>

          <button 
            onClick={fetchData} 
            className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 shadow-sm transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh Data
          </button>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div 
          onClick={() => { setPlanFilter('ALL'); setCrmFilter('ALL'); setGoalFilter('ALL'); setIntentFilter('ALL'); }}
          className={`p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            planFilter === 'ALL' && crmFilter === 'ALL' && goalFilter === 'ALL' && intentFilter === 'ALL'
              ? 'bg-slate-100 border-slate-400 ring-2 ring-slate-400'
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
          title="Click to reset all filters"
        >
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Students</span>
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <p className="text-3xl font-black text-slate-900">{stats?.totalStudents ?? 0}</p>
        </div>

        <div 
          onClick={() => { setPlanFilter(planFilter === 'PAID' ? 'ALL' : 'PAID'); setIntentFilter('ALL'); }}
          className={`p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            planFilter === 'PAID' 
              ? 'bg-emerald-100 border-emerald-400 ring-2 ring-emerald-500' 
              : 'bg-emerald-50/60 border-emerald-200/80 hover:bg-emerald-100/50'
          }`}
          title="Click to filter Paid (PRO) students"
        >
          <div className="flex items-center justify-between text-emerald-700 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Paid (PRO)</span>
            <Crown className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-3xl font-black text-emerald-800">{stats?.paidStudents ?? 0}</p>
        </div>

        <div 
          onClick={() => { setPlanFilter(planFilter === 'FREE' ? 'ALL' : 'FREE'); setIntentFilter('ALL'); }}
          className={`p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            planFilter === 'FREE' 
              ? 'bg-blue-100 border-blue-400 ring-2 ring-blue-500' 
              : 'bg-blue-50/60 border-blue-200/80 hover:bg-blue-100/50'
          }`}
          title="Click to filter Free leads"
        >
          <div className="flex items-center justify-between text-blue-700 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Free (Leads)</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-3xl font-black text-blue-800">{stats?.freeStudents ?? 0}</p>
        </div>

        <div 
          onClick={() => setIntentFilter(intentFilter === 'HOT_LEAD' ? 'ALL' : 'HOT_LEAD')}
          className={`p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            intentFilter === 'HOT_LEAD' 
              ? 'bg-amber-100 border-amber-400 ring-2 ring-amber-500' 
              : 'bg-amber-50/60 border-amber-200/80 hover:bg-amber-100/50'
          }`}
          title="Click to filter Hot Leads (multiple paywall hits)"
        >
          <div className="flex items-center justify-between text-amber-700 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Hot Leads</span>
            <Flame className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-3xl font-black text-amber-800">{stats?.hotLeads ?? 0}</p>
        </div>

        <div 
          onClick={() => setIntentFilter(intentFilter === 'AT_RISK' ? 'ALL' : 'AT_RISK')}
          className={`p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            intentFilter === 'AT_RISK' 
              ? 'bg-rose-100 border-rose-400 ring-2 ring-rose-500' 
              : 'bg-rose-50/60 border-rose-200/80 hover:bg-rose-100/50'
          }`}
          title="Click to filter At-Risk students (7+ days inactive)"
        >
          <div className="flex items-center justify-between text-rose-700 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">At Risk (7d+ Inactive)</span>
            <AlertTriangle className="w-4 h-4 text-rose-600" />
          </div>
          <p className="text-3xl font-black text-rose-800">{stats?.atRiskStudents ?? 0}</p>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Filter Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3">
          {/* Row 1: Plan Pills, Action Buttons & Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Left: Plan Pills & Action Toggles */}
            <div className="flex flex-wrap items-center gap-2">
              {(['ALL', 'PAID', 'FREE'] as const).map(p => (
                <button
                  key={p}
                  onClick={() => { setPlanFilter(p); setIntentFilter('ALL'); }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                    planFilter === p && intentFilter === 'ALL'
                      ? 'bg-slate-900 text-white shadow-xs' 
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {p === 'ALL' ? `All Students (${stats?.totalStudents ?? 0})` : p === 'PAID' ? `👑 Paid Only (${stats?.paidStudents ?? 0})` : `Free Leads (${stats?.freeStudents ?? 0})`}
                </button>
              ))}

              <div className="h-5 w-px bg-slate-300 mx-1 hidden sm:block" />

              {/* Test Accounts Toggle */}
              <button
                type="button"
                onClick={() => setHideTestAccounts(!hideTestAccounts)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border shadow-2xs ${
                  hideTestAccounts 
                    ? 'bg-purple-100 text-purple-900 border-purple-300' 
                    : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                }`}
                title="Filter out automated test accounts (test_task_...)"
              >
                {hideTestAccounts ? '✓ Test Accounts Hidden' : 'Hide Tests'}
              </button>

              {/* Export CSV Button */}
              <button
                type="button"
                onClick={handleExportCsv}
                disabled={processedStudents.length === 0}
                className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1.5 shadow-2xs"
                title="Export currently filtered students to CSV"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Export CSV</span>
              </button>
            </div>

            {/* Right: Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <input
                type="text"
                placeholder="Search by name, email, phone..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-white border border-slate-300 rounded-xl outline-none focus:border-indigo-500 shadow-2xs transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-1.5 text-slate-400 hover:text-slate-600"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Secondary Dropdowns Ribbon */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/70 text-xs text-slate-500">
            <span className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider mr-1">Filter by:</span>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 outline-none cursor-pointer hover:border-slate-400"
              title="Sort student directory"
            >
              <option value="NEWEST">Sort: Newest First</option>
              <option value="OLDEST">Sort: Oldest First</option>
              <option value="STUDY_TIME">Sort: Most Study Time</option>
              <option value="XP">Sort: Highest XP</option>
              <option value="LOW_SCORE">Sort: Lowest Test Score</option>
              <option value="HIGH_SCORE">Sort: Highest Test Score</option>
              <option value="PAYWALL_HITS">Sort: Most Paywall Hits</option>
            </select>

            {/* Exam Goal Dropdown */}
            <select
              value={goalFilter}
              onChange={e => setGoalFilter(e.target.value)}
              className="text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 outline-none cursor-pointer hover:border-slate-400"
            >
              <option value="ALL">All Classes / Exams</option>
              {availableGoals.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            {/* CRM Status Dropdown */}
            <select
              value={crmFilter}
              onChange={e => setCrmFilter(e.target.value)}
              className="text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 outline-none cursor-pointer hover:border-slate-400"
            >
              <option value="ALL">All CRM Stages</option>
              <option value="NEW_LEAD">New Lead</option>
              <option value="CONTACTED">Contacted</option>
              <option value="INTERESTED">Interested</option>
              <option value="CONVERTED_PRO">Converted PRO</option>
              <option value="NOT_INTERESTED">Not Interested</option>
            </select>

            {/* Account Status Filter */}
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value as any)}
              className="text-xs font-semibold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 outline-none cursor-pointer hover:border-slate-400"
            >
              <option value="ALL">All Account States</option>
              <option value="ACTIVE">Active Only</option>
              <option value="SUSPENDED">Suspended Only</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 hover:underline ml-auto flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Active Filters Bar (Shown whenever any filter is applied) */}
        {hasActiveFilters && (
          <div className="px-4 py-2 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] mr-1">Active Filters:</span>
            {planFilter !== 'ALL' && (
              <button
                onClick={() => setPlanFilter('ALL')}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 shadow-xs transition-colors"
                title="Click to remove Plan filter"
              >
                <span>Plan: {planFilter === 'PAID' ? '👑 Paid' : 'Free Leads'}</span>
                <X className="w-3 h-3 text-slate-400 hover:text-slate-700" />
              </button>
            )}
            {goalFilter !== 'ALL' && (
              <button
                onClick={() => setGoalFilter('ALL')}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 shadow-xs transition-colors"
                title="Click to remove Exam Goal filter"
              >
                <span>Goal: {goalFilter}</span>
                <X className="w-3 h-3 text-slate-400 hover:text-slate-700" />
              </button>
            )}
            {crmFilter !== 'ALL' && (
              <button
                onClick={() => setCrmFilter('ALL')}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 shadow-xs transition-colors"
                title="Click to remove CRM filter"
              >
                <span>CRM: {CRM_STATUS_CONFIG[crmFilter]?.label || crmFilter}</span>
                <X className="w-3 h-3 text-slate-400 hover:text-slate-700" />
              </button>
            )}
            {intentFilter !== 'ALL' && (
              <button
                onClick={() => setIntentFilter('ALL')}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-300 text-rose-800 font-semibold hover:bg-rose-100 shadow-xs transition-colors"
                title="Click to remove Intent filter"
              >
                <span>
                  {intentFilter === 'AT_RISK' ? '⚠️ At Risk (7d+)' : 
                   intentFilter === 'HOT_LEAD' ? '🔥 Hot Leads' : 
                   intentFilter === 'NEW_STUDENT' ? '✨ New Students' :
                   intentFilter === 'NO_ACTIVITY' ? '👻 No Activity' :
                   intentFilter}
                </span>
                <X className="w-3 h-3 text-rose-500 hover:text-rose-700" />
              </button>
            )}
            {hideTestAccounts && (
              <button
                onClick={() => setHideTestAccounts(false)}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-300 text-purple-800 font-semibold hover:bg-purple-100 shadow-xs transition-colors"
                title="Click to show test accounts"
              >
                <span>Tests Hidden</span>
                <X className="w-3 h-3 text-purple-500 hover:text-purple-700" />
              </button>
            )}
            {searchTerm.trim() && (
              <button
                onClick={() => setSearchTerm('')}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-300 text-blue-800 font-semibold hover:bg-blue-100 shadow-xs transition-colors"
                title="Click to clear search"
              >
                <span>Search: "{searchTerm}"</span>
                <X className="w-3 h-3 text-blue-500 hover:text-blue-700" />
              </button>
            )}
            <button
              onClick={resetAllFilters}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline ml-auto"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/70 text-slate-600 text-xs font-bold border-b border-slate-200 select-none">
                <th className="py-3 px-4 min-w-[200px]">Student</th>
                <th className="py-3 px-4 min-w-[150px] whitespace-nowrap">Contact</th>
                <th className="py-3 px-4 whitespace-nowrap">Class / Goal</th>
                <th className="py-3 px-4 text-center min-w-[170px]">Plan & Access</th>
                <th className="py-3 px-4 text-center whitespace-nowrap">Study Time</th>
                <th className="py-3 px-4 text-center whitespace-nowrap">Mock Tests</th>
                <th className="py-3 px-4 min-w-[160px]">Signals / Flags</th>
                <th className="py-3 px-4 min-w-[140px]">CRM Stage</th>
                <th className="py-3 px-4 text-right whitespace-nowrap sticky right-0 bg-slate-100/95 backdrop-blur-xs shadow-[-8px_0_12px_-4px_rgba(0,0,0,0.06)]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {loading ? (
                <tr><td colSpan={9} className="p-8 text-center text-slate-500">Loading student directory...</td></tr>
              ) : paginatedStudents.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-12 text-center">
                    {searchTerm.trim() && hasOtherFilters ? (
                      <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                        <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-3">
                          <Search className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-bold text-slate-800">
                          No students matching "{searchTerm}" under active filters
                        </p>
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                          Your active filters ({[
                            planFilter !== 'ALL' && (planFilter === 'PAID' ? '👑 Paid' : 'Free Leads'),
                            goalFilter !== 'ALL' && `Goal: ${goalFilter}`,
                            crmFilter !== 'ALL' && `CRM: ${crmFilter}`,
                            intentFilter !== 'ALL' && `Intent: ${intentFilter}`,
                            hideTestAccounts && 'Test Accounts Hidden'
                          ].filter(Boolean).join(', ')}) might be filtering them out.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                          <button
                            onClick={() => {
                              setPlanFilter('ALL');
                              setGoalFilter('ALL');
                              setCrmFilter('ALL');
                              setIntentFilter('ALL');
                              setHideTestAccounts(false);
                            }}
                            className="px-3.5 py-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-colors"
                          >
                            Search "{searchTerm}" across all plans & classes
                          </button>
                          <button
                            onClick={resetAllFilters}
                            className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors"
                          >
                            Reset all filters
                          </button>
                        </div>
                      </div>
                    ) : searchTerm.trim() ? (
                      <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                          <Search className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-bold text-slate-800">
                          No student found matching "{searchTerm}"
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Check for spelling or try searching by phone digits or email address.
                        </p>
                        <button
                          onClick={() => setSearchTerm('')}
                          className="mt-3 text-xs font-bold text-indigo-600 hover:underline"
                        >
                          Clear search query
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                          <Users className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-bold text-slate-800">
                          No students match the selected filters
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Try switching the class, plan, or intent filter.
                        </p>
                        <button
                          onClick={resetAllFilters}
                          className="mt-3 px-4 py-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors"
                        >
                          Reset All Filters
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ) : (
                paginatedStudents.map((student) => {
                  const crmConf = CRM_STATUS_CONFIG[student.crmStatus] || CRM_STATUS_CONFIG.NEW_LEAD;

                  return (
                    <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* Student Info */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs uppercase">
                            {(student.fullName || 'S').slice(0, 2)}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-bold text-slate-900 text-sm leading-snug">{student.fullName}</span>
                              {isStudentActive(student) === false && (
                                <span className="inline-flex items-center gap-0.5 text-[9px] font-black px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                                  <ShieldAlert className="w-2.5 h-2.5 text-rose-600" /> SUSPENDED
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-500 truncate max-w-[200px]" title={student.email}>
                              {student.email}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">
                              Joined {new Date(student.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* WhatsApp / Phone */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        {student.phone ? (
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-slate-700 text-xs">+91 {student.phone}</span>
                            <button
                              onClick={() => handleWhatsAppClick(student)}
                              className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-2xs transition-colors"
                              title="Direct WhatsApp Chat"
                            >
                              <MessageSquare className="w-3 h-3" /> Chat
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-slate-400 italic">No phone</span>
                            <button
                              onClick={() => handleEmailClick(student)}
                              className="inline-flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-[11px] font-bold px-2 py-0.5 rounded-md shadow-2xs transition-colors"
                              title={`Send direct email to ${student.email}`}
                            >
                              <Mail className="w-3 h-3 text-indigo-600" /> Email
                            </button>
                          </div>
                        )}
                      </td>

                      {/* Goal */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {student.examGoal}
                        </span>
                      </td>

                      {/* Plan */}
                      <td className="py-3 px-4 text-center">
                        {isStudentPaid(student) ? (
                          (() => {
                            const planInfo = formatPlanBadge(student.subscriptionPlan);
                            return (
                              <div className="inline-flex flex-col items-center">
                                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs whitespace-nowrap">
                                  <Crown className="w-3 h-3 text-amber-600 fill-amber-500 shrink-0" />
                                  <span>{planInfo.title}</span>
                                </span>
                                <div className="text-[10px] text-slate-500 font-medium mt-0.5 flex items-center gap-1 whitespace-nowrap">
                                  {planInfo.subtitle && <span className="font-semibold text-slate-600">{planInfo.subtitle} •</span>}
                                  {student.subscribedUntil && (
                                    <span className="text-amber-700 font-semibold">Exp: {new Date(student.subscribedUntil).toLocaleDateString()}</span>
                                  )}
                                </div>
                              </div>
                            );
                          })()
                        ) : (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                            FREE
                          </span>
                        )}
                      </td>

                      {/* Study Time */}
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <div className="font-extrabold text-slate-900 text-sm">{formatStudyTime(student.totalStudyMinutes)}</div>
                        <div className="text-[11px] text-indigo-600 font-bold mt-0.5">{Math.max(0, student.totalXp)} XP</div>
                      </td>

                      {/* Mock Tests */}
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <div className="font-bold text-slate-800 text-xs">{student.testsTaken} tests</div>
                        {student.averageScore !== null ? (
                          <span className={`inline-block text-[10px] font-black px-2 py-0.5 rounded-full mt-0.5 ${
                            student.averageScore >= 70 ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                            student.averageScore >= 40 ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                            'bg-rose-100 text-rose-800 border border-rose-300'
                          }`}>
                            {student.averageScore}% avg
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 block mt-0.5">No attempts</span>
                        )}
                      </td>

                      {/* Behavioral & Struggle Badges */}
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1 max-w-[190px]">
                          {isStudentHotLead(student) && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200" title="Attempted pro features multiple times">
                              <Flame className="w-3 h-3 text-orange-500" /> Hot ({student.paywallHitCount}x)
                            </span>
                          )}
                          {isStudentLowScore(student) && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200" title="Low marks in mock tests">
                              <AlertTriangle className="w-3 h-3 text-red-500" /> Low Score
                            </span>
                          )}
                          {isStudentNew(student) && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200" title="Joined within last 24 hours">
                              ✨ New
                            </span>
                          )}
                          {isStudentGhost(student) && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200" title="0 study minutes after >24h">
                              👻 Inactive
                            </span>
                          )}
                          {isStudentAtRisk(student) && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200" title="Inactive >7 days">
                              ⚠️ At Risk
                            </span>
                          )}
                          {!isStudentNew(student) && !isStudentHotLead(student) && !isStudentLowScore(student) && !isStudentGhost(student) && !isStudentAtRisk(student) && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                              ✓ Normal
                            </span>
                          )}
                        </div>
                      </td>

                      {/* CRM Status Dropdown */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <select
                          value={student.crmStatus || 'NEW_LEAD'}
                          onChange={e => handleCrmStatusChange(student.id, e.target.value)}
                          className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border outline-none cursor-pointer shadow-2xs ${crmConf.color}`}
                        >
                          <option value="NEW_LEAD">New Lead</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="INTERESTED">Interested</option>
                          <option value="CONVERTED_PRO">Converted PRO</option>
                          <option value="NOT_INTERESTED">Not Interested</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right whitespace-nowrap sticky right-0 bg-white/95 backdrop-blur-xs shadow-[-8px_0_12px_-4px_rgba(0,0,0,0.06)]">
                        <div className="flex items-center justify-end gap-1">
                          {/* Manage Subscription */}
                          <button
                            onClick={() => handleOpenSubscriptionModal(student)}
                            className={`p-1.5 rounded-lg border transition-all ${isStudentPaid(student) ? 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100' : 'text-slate-500 border-slate-200 hover:bg-amber-50 hover:text-amber-600'}`}
                            title="Manage Subscription / Grant PRO"
                          >
                            <Crown className="w-3.5 h-3.5" />
                          </button>

                          {/* Account Status / Suspend */}
                          <button
                            onClick={() => handleOpenStatusModal(student)}
                            className={`p-1.5 rounded-lg border transition-all ${isStudentActive(student) === false ? 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100' : 'text-slate-500 border-slate-200 hover:bg-rose-50 hover:text-rose-600'}`}
                            title={isStudentActive(student) === false ? 'Reactivate Account' : 'Suspend Account'}
                          >
                            {isStudentActive(student) === false ? <UserCheck className="w-3.5 h-3.5 text-rose-600" /> : <UserX className="w-3.5 h-3.5" />}
                          </button>

                          {/* Password Reset */}
                          <button
                            onClick={() => handleOpenPasswordModal(student)}
                            className="p-1.5 text-slate-500 border border-slate-200 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            title="Reset Password & Key"
                          >
                            <KeyRound className="w-3.5 h-3.5" />
                          </button>

                          {/* Adjust XP */}
                          <button
                            onClick={() => handleOpenXpModal(student)}
                            className="p-1.5 text-slate-500 border border-slate-200 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all"
                            title="Adjust XP & Overrides"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                          </button>

                          {/* Edit Profile */}
                          <button
                            onClick={() => handleOpenProfileModal(student)}
                            className="p-1.5 text-slate-500 border border-slate-200 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                            title="Edit Student Info"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          {/* Remarks */}
                          <button
                            onClick={() => handleOpenNotes(student)}
                            className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-transparent hover:border-indigo-200"
                            title={student.crmNotes ? `Remarks: ${student.crmNotes}` : 'Add Remarks'}
                          >
                            <FileText className={`w-3.5 h-3.5 ${student.crmNotes ? 'text-indigo-600' : ''}`} />
                          </button>

                          {/* Activity Drawer */}
                          <button
                            onClick={() => handleOpenActivity(student)}
                            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-transparent"
                            title="View Detailed Activity"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination & Summary Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          <div>
            {processedStudents.length === 0 ? (
              <span className="text-slate-500 font-medium">No matching students found</span>
            ) : (
              <>
                Showing <span className="font-bold text-slate-900">{(page - 1) * pageSize + 1}</span> to <span className="font-bold text-slate-900">{Math.min(page * pageSize, processedStudents.length)}</span> of <span className="font-bold text-slate-900">{processedStudents.length}</span> students
                {hideTestAccounts && <span className="text-purple-600 ml-1.5 font-bold">(Test accounts hidden)</span>}
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page <= 1 || processedStudents.length === 0}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Previous
            </button>
            <span className="px-2 font-bold text-slate-700">
              Page {processedStudents.length === 0 ? 0 : page} of {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages || processedStudents.length === 0}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Remarks / Notes Modal */}
      {editingNotesStudent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Follow-up Remarks</h3>
                <p className="text-xs text-slate-500">{editingNotesStudent.fullName} ({editingNotesStudent.email})</p>
              </div>
              <button onClick={() => setEditingNotesStudent(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Call / Chat Notes</label>
              <textarea
                rows={4}
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
                placeholder="e.g. Student needs Class 12 notes, promised to call tomorrow after asking parents..."
                className="w-full text-sm p-3 border border-slate-300 rounded-xl outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingNotesStudent(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNotes}
                disabled={savingNotes}
                className="px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm transition-all disabled:opacity-50"
              >
                {savingNotes ? 'Saving...' : 'Save Remarks'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-over Activity Drawer */}
      {selectedStudentForDrawer && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex justify-end">
          <div className="bg-white w-full max-w-lg h-full shadow-2xl p-6 overflow-y-auto space-y-6">
            {/* Drawer Header */}
            <div className="border-b border-slate-100 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-black text-slate-900">{selectedStudentForDrawer.fullName}</h2>
                  <p className="text-xs text-slate-500 mt-0.5">{selectedStudentForDrawer.email}</p>
                  {selectedStudentForDrawer.phone && (
                    <p className="text-xs text-emerald-600 font-semibold mt-0.5">📞 +91 {selectedStudentForDrawer.phone}</p>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedStudentForDrawer(null)} 
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Direct Outreach CTAs */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {selectedStudentForDrawer.phone ? (
                  <button
                    onClick={() => handleWhatsAppClick(selectedStudentForDrawer)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Chat on WhatsApp
                  </button>
                ) : (
                  <span className="text-[11px] text-slate-400 font-medium bg-slate-100 px-2.5 py-1 rounded-lg">
                    No phone number
                  </span>
                )}
                <button
                  onClick={() => handleEmailClick(selectedStudentForDrawer)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  Send Support Email
                </button>
              </div>

              {/* Executive Action Controls in Drawer */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => handleOpenSubscriptionModal(selectedStudentForDrawer)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100"
                >
                  <Crown className="w-3.5 h-3.5 text-amber-600" /> Manage Pro
                </button>
                <button
                  onClick={() => handleOpenStatusModal(selectedStudentForDrawer)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg border ${selectedStudentForDrawer.isActive === false ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'}`}
                >
                  {selectedStudentForDrawer.isActive === false ? <UserCheck className="w-3.5 h-3.5 text-rose-600" /> : <UserX className="w-3.5 h-3.5 text-slate-500" />}
                  {selectedStudentForDrawer.isActive === false ? 'Reactivate' : 'Suspend'}
                </button>
                <button
                  onClick={() => handleOpenPasswordModal(selectedStudentForDrawer)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                >
                  <KeyRound className="w-3.5 h-3.5 text-blue-600" /> Reset Password
                </button>
                <button
                  onClick={() => handleOpenXpModal(selectedStudentForDrawer)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Adjust XP
                </button>
                <button
                  onClick={() => handleOpenProfileModal(selectedStudentForDrawer)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                >
                  <Edit3 className="w-3.5 h-3.5 text-emerald-600" /> Edit Info
                </button>
              </div>
            </div>

            {/* Badges Overview */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                isStudentPaid(selectedStudentForDrawer) 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                  : 'bg-slate-100 text-slate-700 border-slate-300'
              }`}>
                {isStudentPaid(selectedStudentForDrawer) ? `👑 PRO (${selectedStudentForDrawer.subscriptionPlan || 'PRO'})` : 'Free Lead'}
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                🎯 {selectedStudentForDrawer.examGoal}
              </span>
              {isStudentHotLead(selectedStudentForDrawer) && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300">
                  🔥 Hot Lead ({selectedStudentForDrawer.paywallHitCount}x Paywall Hits)
                </span>
              )}
              {isStudentLowScore(selectedStudentForDrawer) && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-300">
                  ⚠️ Needs Help ({selectedStudentForDrawer.averageScore}% avg)
                </span>
              )}
              {isStudentNew(selectedStudentForDrawer) && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  ✨ Joined Recently (&lt;24h)
                </span>
              )}
              {isStudentGhost(selectedStudentForDrawer) && (
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  👻 No Activity
                </span>
              )}
              {isStudentAtRisk(selectedStudentForDrawer) && (
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  ⚠️ Inactive &gt;7 Days
                </span>
              )}
            </div>

            {/* In-Drawer CRM Lead Stage & Remarks Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-indigo-600" />
                  CRM Lead Stage
                </span>
                <select
                  value={selectedStudentForDrawer.crmStatus || 'NEW_LEAD'}
                  onChange={e => handleDrawerCrmStatusChange(e.target.value)}
                  className="text-xs font-bold px-2.5 py-1 rounded-full border border-slate-300 bg-white outline-none cursor-pointer"
                >
                  <option value="NEW_LEAD">New Lead</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="INTERESTED">Interested</option>
                  <option value="CONVERTED_PRO">Converted PRO</option>
                  <option value="NOT_INTERESTED">Not Interested</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                  Follow-up Remarks / Call Notes:
                </label>
                <textarea
                  rows={3}
                  value={drawerNotes}
                  onChange={e => setDrawerNotes(e.target.value)}
                  placeholder="Record call discussion or student requirement..."
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-indigo-500"
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleSaveDrawerNotes}
                    disabled={savingDrawerNotes || drawerNotes === (selectedStudentForDrawer.crmNotes || '')}
                    className="px-3 py-1.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg transition-all"
                  >
                    {savingDrawerNotes ? 'Saving...' : 'Save Remarks'}
                  </button>
                </div>
              </div>
            </div>

            {loadingActivity ? (
              <div className="p-12 text-center text-slate-400">Loading student activity logs...</div>
            ) : activityData ? (
              <div className="space-y-6">
                {/* Overview Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-500 font-medium">Study Time</p>
                    <p className="text-lg font-bold text-slate-900">{formatStudyTime(activityData.studyMinutes || 0)}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-500 font-medium">Total XP</p>
                    <p className="text-lg font-bold text-slate-900">{activityData.totalXp || 0} XP</p>
                  </div>
                </div>

                {/* XP Sources Breakdown */}
                {activityData.xpBreakdown && (
                  <div className="bg-gradient-to-br from-indigo-50/70 via-indigo-50/40 to-slate-50 rounded-2xl border border-indigo-100 p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600/20" /> XP Sources Breakdown
                      </span>
                      <span className="text-[11px] font-extrabold text-indigo-700 bg-white border border-indigo-200/80 px-2 py-0.5 rounded-full shadow-xs">
                        Net: {activityData.totalXp || 0} XP
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                      <div className="bg-white/95 p-2 rounded-xl border border-indigo-100/70 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-600 flex items-center gap-1 font-medium">⏱️ Study Sessions</span>
                        <span className="font-extrabold text-indigo-600">+{activityData.xpBreakdown.studyXp || 0}</span>
                      </div>
                      <div className="bg-white/95 p-2 rounded-xl border border-indigo-100/70 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-600 flex items-center gap-1 font-medium">🔥 Daily PYQ</span>
                        <span className="font-extrabold text-amber-600">+{activityData.xpBreakdown.dailyPyqXp || 0}</span>
                      </div>
                      {activityData.xpBreakdown.referralXp > 0 && (
                        <div className="bg-white/95 p-2 rounded-xl border border-indigo-100/70 flex items-center justify-between shadow-2xs">
                          <span className="text-slate-600 flex items-center gap-1 font-medium">👥 Referrals</span>
                          <span className="font-extrabold text-blue-600">+{activityData.xpBreakdown.referralXp}</span>
                        </div>
                      )}
                      {activityData.xpBreakdown.mockTestXp > 0 && (
                        <div className="bg-white/95 p-2 rounded-xl border border-indigo-100/70 flex items-center justify-between shadow-2xs">
                          <span className="text-slate-600 flex items-center gap-1 font-medium">📝 Tests</span>
                          <span className="font-extrabold text-emerald-600">+{activityData.xpBreakdown.mockTestXp}</span>
                        </div>
                      )}
                      {activityData.xpBreakdown.penaltiesXp !== 0 && (
                        <div className="bg-rose-50/80 p-2 rounded-xl border border-rose-200 flex items-center justify-between shadow-2xs col-span-2">
                          <span className="text-rose-700 flex items-center gap-1 font-medium">⚠️ Focus Break Penalties</span>
                          <span className="font-extrabold text-rose-700">{activityData.xpBreakdown.penaltiesXp} XP</span>
                        </div>
                      )}
                      {activityData.xpBreakdown.adminOverrideXp !== 0 && (
                        <div className="bg-purple-50/80 p-2 rounded-xl border border-purple-200 flex items-center justify-between shadow-2xs col-span-2">
                          <span className="text-purple-700 flex items-center gap-1 font-medium">🛡️ Admin Override</span>
                          <span className="font-extrabold text-purple-700">
                            {activityData.xpBreakdown.adminOverrideXp > 0 ? `+${activityData.xpBreakdown.adminOverrideXp}` : activityData.xpBreakdown.adminOverrideXp} XP
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Recent XP Activity Stream */}
                <div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500/20" /> XP Activity Stream
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {activityData.recentXpLogs?.length || 0} events
                    </span>
                  </h3>
                  {activityData.recentXpLogs?.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">No XP activities recorded yet.</p>
                  ) : (
                    <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                      {activityData.recentXpLogs?.map((log: any) => {
                        const isNegative = log.points < 0;
                        const label = log.activityType === 'STUDY_TIME' ? (isNegative ? 'Focus Break Penalty' : 'Study Session')
                          : log.activityType === 'DAILY_PYQ' ? 'Daily PYQ Challenge'
                          : log.activityType === 'REFERRAL' ? 'Referral Reward'
                          : log.activityType === 'ADMIN_OVERRIDE' ? 'Admin XP Adjustment'
                          : log.activityType === 'MOCK_TEST' ? 'Mock Test Complete'
                          : log.activityType;

                        return (
                          <div key={log.id} className="p-2.5 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200/80 text-xs flex justify-between items-center transition-colors">
                            <div className="min-w-0 pr-2">
                              <p className={`font-bold truncate ${isNegative ? 'text-rose-700' : 'text-slate-800'}`}>
                                {isNegative ? '⚠️ ' : ''}{label}
                              </p>
                              <p className="text-[10px] text-slate-400">{new Date(log.createdAt).toLocaleString()}</p>
                            </div>
                            <span className={`px-2 py-0.5 rounded-lg font-extrabold text-xs shrink-0 ${
                              isNegative ? 'bg-rose-100 text-rose-700 border border-rose-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200/70'
                            }`}>
                              {log.points > 0 ? `+${log.points}` : log.points} XP
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Recent Study Sessions */}
                <div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-indigo-600" /> Recent Study Sessions
                  </h3>
                  {activityData.recentSessions?.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">No study sessions recorded.</p>
                  ) : (
                    <div className="space-y-2">
                      {activityData.recentSessions.map((s: any) => (
                        <div key={s.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex justify-between items-center">
                          <div>
                            <p className="font-bold text-slate-800">{s.sessionType || 'STUDY_SESSION'}</p>
                            <p className="text-[11px] text-slate-400">{new Date(s.createdAt).toLocaleString()}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-extrabold text-indigo-600">{s.durationMinutes} mins</span>
                            <p className="text-[10px] text-slate-400">+{s.earnedXp} XP</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Recent Mock Test Attempts */}
                <div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" /> Mock Test Attempts
                  </h3>
                  {activityData.recentTestAttempts?.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">No mock tests attempted yet.</p>
                  ) : (
                    <div className="space-y-2">
                      {activityData.recentTestAttempts.map((t: any) => (
                        <div key={t.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex justify-between items-center">
                          <div>
                            <p className="font-bold text-slate-800">Status: {t.status}</p>
                            <p className="text-[11px] text-slate-400">{new Date(t.startedAt).toLocaleString()}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-extrabold text-emerald-700">{t.score ?? 0} Marks</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Lesson Ratings & Student Feedback */}
                <div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <ThumbsUp className="w-4 h-4 text-sky-600" /> Lesson Ratings & Doubts
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {activityData.recentFeedbacks?.length || 0} reviews
                    </span>
                  </h3>
                  {!activityData.recentFeedbacks || activityData.recentFeedbacks.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">No lesson feedback or doubts submitted yet.</p>
                  ) : (
                    <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                      {activityData.recentFeedbacks.map((fb: any) => (
                        <div key={fb.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-slate-900 truncate">{fb.topic_title || fb.content_title}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 shrink-0 ${
                              fb.is_helpful 
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                                : 'bg-amber-100 text-amber-800 border border-amber-300'
                            }`}>
                              {fb.is_helpful ? '👍 Helpful' : '👎 Had Doubts'}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-2">
                            <span className="font-medium text-slate-700">{fb.subject_name}</span>
                            <span>•</span>
                            <span>{new Date(fb.created_at).toLocaleDateString()}</span>
                          </div>
                          {fb.feedback_text ? (
                            <div className="p-2 rounded-lg bg-white border border-slate-200/80 text-slate-700 text-[11px] italic">
                              &ldquo;{fb.feedback_text}&rdquo;
                            </div>
                          ) : (
                            <p className="text-[10px] text-slate-400 italic">
                              (Quick rating without written remark)
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* ─── 1. Subscription & Pro Plan Modal ──────────────────────────────── */}
      {subModalStudent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-xl border border-amber-200">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Manage Pro Subscription</h3>
                  <p className="text-xs text-slate-500">{subModalStudent.fullName} ({subModalStudent.email})</p>
                </div>
              </div>
              <button onClick={() => setSubModalStudent(null)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Target Subscription Plan:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['FREE', 'PRO', 'UNLIMITED'] as const).map(p => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setSubPlan(p)}
                      className={`py-2 px-3 rounded-xl border font-bold text-center transition-all ${subPlan === p ? 'bg-amber-500 text-white border-amber-600 shadow-xs' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                    >
                      {p === 'FREE' ? 'Free Plan' : p === 'PRO' ? 'PRO Plan' : 'Unlimited'}
                    </button>
                  ))}
                </div>
              </div>

              {subPlan !== 'FREE' && (
                <>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Duration Presets:</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: '30 Days', days: 30 },
                        { label: '90 Days', days: 90 },
                        { label: '1 Year', days: 365 },
                        { label: 'Custom', days: 0 },
                      ].map(d => (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => {
                            setSubDurationDays(d.days);
                            if (d.days > 0) {
                              const target = new Date();
                              target.setDate(target.getDate() + d.days);
                              setSubExpiryDate(target.toISOString().split('T')[0]);
                            }
                          }}
                          className={`py-1.5 px-2 rounded-lg border text-[11px] font-bold text-center transition-all ${subDurationDays === d.days ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Expiry Date:</label>
                    <input
                      type="date"
                      value={subExpiryDate}
                      onChange={e => {
                        setSubExpiryDate(e.target.value);
                        setSubDurationDays(0);
                      }}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-indigo-500"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="font-bold text-slate-700 block mb-1">Audit Reason / Admin Memo:</label>
                <input
                  type="text"
                  value={subReason}
                  onChange={e => setSubReason(e.target.value)}
                  placeholder="e.g. Offline UPI payment, Educator waiver, Scholarship"
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSubModalStudent(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveSubscription}
                disabled={isSavingSub}
                className="px-4 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-xl shadow-xs transition-all"
              >
                {isSavingSub ? 'Saving...' : 'Apply Subscription'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── 2. Account Status / Ban Modal ─────────────────────────────────── */}
      {statusModalStudent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-xl border ${isStudentActive(statusModalStudent) === false ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-rose-50 text-rose-600 border-rose-200'}`}>
                  {isStudentActive(statusModalStudent) === false ? <ShieldCheck className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {isStudentActive(statusModalStudent) === false ? 'Reactivate Account' : 'Suspend Student Account'}
                  </h3>
                  <p className="text-xs text-slate-500">{statusModalStudent.fullName} ({statusModalStudent.email})</p>
                </div>
              </div>
              <button onClick={() => setStatusModalStudent(null)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <p className="text-slate-600">
                {isStudentActive(statusModalStudent) === false 
                  ? 'Reactivating will allow the student to log back in, access study materials, and take mock tests.' 
                  : 'Suspending this account will immediately terminate all active sessions (JWT revoked) and block login access.'}
              </p>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Reason for {isStudentActive(statusModalStudent) === false ? 'Reactivation' : 'Suspension'}:</label>
                <textarea
                  rows={3}
                  value={banReason}
                  onChange={e => setBanReason(e.target.value)}
                  placeholder="Detail the reason for this administrative action..."
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setStatusModalStudent(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveStatus}
                disabled={isSavingStatus}
                className={`px-4 py-2 text-xs font-bold text-white rounded-xl shadow-xs transition-all disabled:opacity-50 ${isStudentActive(statusModalStudent) === false ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700'}`}
              >
                {isSavingStatus ? 'Updating...' : isStudentActive(statusModalStudent) === false ? 'Confirm Reactivation' : 'Confirm Suspension'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── 3. Edit Profile Modal ─────────────────────────────────────────── */}
      {profileModalStudent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-200">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Edit Student Profile</h3>
                  <p className="text-xs text-slate-500">{profileModalStudent.email}</p>
                </div>
              </div>
              <button onClick={() => setProfileModalStudent(null)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name:</label>
                <input
                  type="text"
                  value={editFullName}
                  onChange={e => setEditFullName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Phone Number (10 digits):</label>
                <input
                  type="text"
                  value={editPhone}
                  onChange={e => setEditPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Exam Goal / Target Class:</label>
                <select
                  value={editExamGoal}
                  onChange={e => setEditExamGoal(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-indigo-500 cursor-pointer"
                >
                  {availableGoals.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setProfileModalStudent(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveProfile}
                disabled={isSavingProfile}
                className="px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl shadow-xs transition-all"
              >
                {isSavingProfile ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── 4. Reset Password Modal ───────────────────────────────────────── */}
      {passwordModalStudent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Reset Student Password</h3>
                  <p className="text-xs text-slate-500">{passwordModalStudent.fullName} ({passwordModalStudent.email})</p>
                </div>
              </div>
              <button onClick={() => setPasswordModalStudent(null)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            {generatedPasswordResult ? (
              <div className="space-y-4 text-xs">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm">
                    <Check className="w-4 h-4 text-emerald-600" /> Password Successfully Reset!
                  </div>
                  <p className="text-xs text-emerald-800">
                    Share this temporary password with the student. All previous sessions have been logged out.
                  </p>
                  <div className="flex items-center justify-between p-2.5 bg-white border border-emerald-300 rounded-lg">
                    <span className="font-mono font-black text-slate-900 text-base">{generatedPasswordResult}</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedPasswordResult);
                        setHasCopiedPassword(true);
                        toast.success('Temporary password copied to clipboard!');
                      }}
                      className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 shadow-2xs"
                    >
                      {hasCopiedPassword ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {hasCopiedPassword ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setPasswordModalStudent(null)}
                    className="px-4 py-2 text-xs font-bold bg-slate-900 text-white rounded-xl"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-700">
                    <input
                      type="radio"
                      checked={generateRandom}
                      onChange={() => setGenerateRandom(true)}
                      className="text-blue-600"
                    />
                    Generate Random Secure Password (Recommended)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-700">
                    <input
                      type="radio"
                      checked={!generateRandom}
                      onChange={() => setGenerateRandom(false)}
                      className="text-blue-600"
                    />
                    Set Specific Password
                  </label>
                </div>

                {!generateRandom && (
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">New Password (Min 6 chars):</label>
                    <input
                      type="text"
                      value={customPassword}
                      onChange={e => setCustomPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                )}

                <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setPasswordModalStudent(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSavePassword}
                    disabled={isSavingPassword || (!generateRandom && customPassword.length < 6)}
                    className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl shadow-xs transition-all"
                  >
                    {isSavingPassword ? 'Resetting...' : 'Reset Password'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── 5. XP Adjustment Modal ────────────────────────────────────────── */}
      {xpModalStudent && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-xl border border-purple-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Adjust Student XP</h3>
                  <p className="text-xs text-slate-500">{xpModalStudent.fullName} • Current: <strong>{xpModalStudent.totalXp} XP</strong></p>
                </div>
              </div>
              <button onClick={() => setXpModalStudent(null)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">XP Delta (Positive to add, Negative to deduct):</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={xpDelta}
                    onChange={e => setXpDelta(Number(e.target.value))}
                    className="w-full text-sm font-bold p-2 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-purple-500"
                  />
                  <span className="font-bold text-slate-500 whitespace-nowrap">
                    New Total: {Math.max(0, (xpModalStudent.totalXp || 0) + xpDelta)} XP
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    { label: '+50 XP', val: 50 },
                    { label: '+100 XP', val: 100 },
                    { label: '+250 XP', val: 250 },
                    { label: '-50 XP (Penalty)', val: -50 },
                    { label: '-100 XP (Penalty)', val: -100 },
                  ].map(chip => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => setXpDelta(chip.val)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border transition-all ${xpDelta === chip.val ? 'bg-purple-600 text-white border-purple-700' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Audit Reason:</label>
                <input
                  type="text"
                  value={xpReason}
                  onChange={e => setXpReason(e.target.value)}
                  placeholder="e.g. Bug compensation, Challenge prize, Anti-cheat correction"
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setXpModalStudent(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveXp}
                disabled={isSavingXp || xpDelta === 0}
                className="px-4 py-2 text-xs font-bold bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl shadow-xs transition-all"
              >
                {isSavingXp ? 'Applying...' : 'Apply XP Change'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
