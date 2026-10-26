import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../lib/api';
import { 
  Users, ShieldCheck, ShieldAlert, KeyRound, Sparkles, 
  Search, RefreshCw, X, ChevronLeft, ChevronRight, Copy, Check, 
  ExternalLink, GitBranch, Cpu, BookOpen, AlertCircle, Eye, EyeOff,
  UserCheck, UserX, Award, Shield, Code2, GraduationCap
} from 'lucide-react';
import { toast } from 'sonner';

interface AdminDevUserDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: 'USER' | 'ADMIN';
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'DELETED';
  points: number;
  badges: string;
  repositoryCount: number;
  scanCount: number;
  enrolledCoursesCount: number;
  createdAt: string;
  updatedAt: string;
}

interface AdminDevUserStatsDto {
  totalUsers: number;
  activeUsers: number;
  suspendedUsers: number;
  adminUsers: number;
  totalRepositories: number;
  totalScans: number;
}

interface AdminDevRepoSummaryDto {
  id: string;
  name: string;
  owner: string;
  url: string;
  branch: string;
  provider: string;
  visibility: string;
  status: string;
  createdAt: string;
}

interface AdminDevScanSummaryDto {
  id: string;
  repositoryId: string;
  repositoryName: string;
  status: string;
  progress: number;
  score: number | null;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string;
}

interface AdminDevEnrollmentSummaryDto {
  id: string;
  courseId: string;
  courseTitle: string;
  enrolledAt: string;
  status: string;
}

interface AdminDevUserDetailDto {
  user: AdminDevUserDto;
  repositories: AdminDevRepoSummaryDto[];
  recentScans: AdminDevScanSummaryDto[];
  enrollments: AdminDevEnrollmentSummaryDto[];
}

export function AdminUsersPage() {
  const [users, setUsers] = useState<AdminDevUserDto[]>([]);
  const [stats, setStats] = useState<AdminDevUserStatsDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [usersError, setUsersError] = useState<string | null>(null);
  const [statsError, setStatsError] = useState(false);

  // Filters & Pagination
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'USER' | 'ADMIN'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'SUSPENDED' | 'INACTIVE'>('ALL');
  const [page, setPage] = useState(0);
  const [pageSize] = useState(15);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  // Drawer & Details
  const [selectedUser, setSelectedUser] = useState<AdminDevUserDto | null>(null);
  const [userDetails, setUserDetails] = useState<AdminDevUserDetailDto | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [activeDrawerTab, setActiveDrawerTab] = useState<'repos' | 'scans' | 'courses'>('repos');

  // Action Modals State
  const [roleModalUser, setRoleModalUser] = useState<AdminDevUserDto | null>(null);
  const [statusModalUser, setStatusModalUser] = useState<AdminDevUserDto | null>(null);
  const [passwordModalUser, setPasswordModalUser] = useState<AdminDevUserDto | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [pointsModalUser, setPointsModalUser] = useState<AdminDevUserDto | null>(null);
  const [pointsAmount, setPointsAmount] = useState(50);
  const [pointsOperation, setPointsOperation] = useState<'ADD' | 'SET'>('ADD');

  const [editProfileUser, setEditProfileUser] = useState<AdminDevUserDto | null>(null);
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // ─── Fetch Stats ─────────────────────────────────────────────────────────────
  const fetchStats = useCallback(async () => {
    try {
      setStatsLoading(true);
      setStatsError(false);
      const res = await api.get('/admin/users/stats');
      setStats(res.data);
    } catch {
      setStatsError(true);
      toast.error('Failed to load platform developer statistics');
    } finally {
      setStatsLoading(false);
    }
  }, []);

  // ─── Fetch Users ─────────────────────────────────────────────────────────────
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setUsersError(null);
      const res = await api.get('/admin/users', {
        params: {
          role: roleFilter,
          status: statusFilter,
          search: search.trim() || undefined,
          page,
          size: pageSize,
        }
      });
      if (res.data?.content) {
        setUsers(res.data.content);
        setTotalPages(res.data.totalPages || 1);
        setTotalElements(res.data.totalElements || 0);
      } else {
        setUsers([]);
      }
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to fetch developer accounts';
      setUsersError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, [roleFilter, statusFilter, search, page, pageSize]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // ─── Fetch User 360 Details ──────────────────────────────────────────────────
  const handleOpenDrawer = async (user: AdminDevUserDto) => {
    setSelectedUser(user);
    setUserDetails(null);
    setLoadingDetails(true);
    setActiveDrawerTab('repos');
    try {
      const res = await api.get(`/admin/users/${user.id}`);
      setUserDetails(res.data);
    } catch {
      toast.error('Failed to load user 360 details');
    } finally {
      setLoadingDetails(false);
    }
  };

  const handleCloseDrawer = () => {
    setSelectedUser(null);
    setUserDetails(null);
  };

  // ─── Actions ─────────────────────────────────────────────────────────────────
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRoleChange = async () => {
    if (!roleModalUser) return;
    const targetRole = roleModalUser.role === 'ADMIN' ? 'USER' : 'ADMIN';
    try {
      setIsSubmitting(true);
      await api.patch(`/admin/users/${roleModalUser.id}/role`, { role: targetRole });
      toast.success(`Role updated to ${targetRole}. User sessions refreshed.`);
      setRoleModalUser(null);
      fetchUsers();
      fetchStats();
      if (selectedUser?.id === roleModalUser.id) {
        setSelectedUser(prev => prev ? { ...prev, role: targetRole } : null);
      }
    } catch {
      toast.error('Failed to update role');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = async () => {
    if (!statusModalUser) return;
    const targetStatus = statusModalUser.status === 'SUSPENDED' ? 'ACTIVE' : 'SUSPENDED';
    try {
      setIsSubmitting(true);
      await api.patch(`/admin/users/${statusModalUser.id}/status`, { status: targetStatus });
      toast.success(
        targetStatus === 'SUSPENDED' 
          ? 'Account suspended. All active JWTs and refresh tokens revoked.' 
          : 'Account re-activated successfully.'
      );
      setStatusModalUser(null);
      fetchUsers();
      fetchStats();
      if (selectedUser?.id === statusModalUser.id) {
        setSelectedUser(prev => prev ? { ...prev, status: targetStatus } : null);
      }
    } catch {
      toast.error('Failed to update account status');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async () => {
    if (!passwordModalUser || !newPassword.trim()) return;
    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    try {
      setIsSubmitting(true);
      await api.post(`/admin/users/${passwordModalUser.id}/reset-password`, { newPassword });
      toast.success('Password updated successfully. Active sessions revoked.');
      setPasswordModalUser(null);
      setNewPassword('');
    } catch {
      toast.error('Failed to reset password');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdjustPoints = async () => {
    if (!pointsModalUser) return;
    try {
      setIsSubmitting(true);
      await api.post(`/admin/users/${pointsModalUser.id}/points`, {
        points: Number(pointsAmount),
        operation: pointsOperation,
      });
      toast.success(`Developer points updated successfully.`);
      setPointsModalUser(null);
      fetchUsers();
      if (selectedUser?.id === pointsModalUser.id) {
        setSelectedUser(prev => {
          if (!prev) return null;
          const nextPoints = pointsOperation === 'SET' ? pointsAmount : (prev.points || 0) + pointsAmount;
          return { ...prev, points: Math.max(0, nextPoints) };
        });
      }
    } catch {
      toast.error('Failed to adjust points');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateProfile = async () => {
    if (!editProfileUser || !editEmail.trim()) return;
    try {
      setIsSubmitting(true);
      await api.patch(`/admin/users/${editProfileUser.id}/profile`, {
        firstName: editFirstName.trim(),
        lastName: editLastName.trim(),
        email: editEmail.trim(),
      });
      toast.success('Developer profile updated successfully.');
      setEditProfileUser(null);
      fetchUsers();
      if (selectedUser?.id === editProfileUser.id) {
        setSelectedUser(prev => prev ? {
          ...prev,
          firstName: editFirstName.trim(),
          lastName: editLastName.trim(),
          fullName: `${editFirstName.trim()} ${editLastName.trim()}`,
          email: editEmail.trim(),
        } : null);
      }
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to update profile';
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const parseBadges = (badgesRaw: unknown): string[] => {
    if (!badgesRaw) return [];
    if (Array.isArray(badgesRaw)) return badgesRaw.map(String);
    if (typeof badgesRaw === 'string') {
      try {
        const parsed = JSON.parse(badgesRaw);
        return Array.isArray(parsed) ? parsed.map(String) : [];
      } catch {
        return [];
      }
    }
    return [];
  };

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return '—';
    try {
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? '—' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return '—';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* ─── Top Header & Vertical Switcher ─────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${statsError ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
            <span className={`text-[11px] font-bold tracking-wider uppercase ${statsError ? 'text-amber-500' : 'text-emerald-500'}`}>
              {statsError ? 'DevLens Identity Control (Telemetry Degraded)' : 'DevLens Identity Control'}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight flex items-center gap-2.5 mt-1">
            <Code2 className="h-8 w-8 text-primary" />
            Platform Developers Directory
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
            Admin console for DevLens software engineers, connected repositories, security scans & role permissions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Vertical Switcher Pill */}
          <div className="flex items-center p-1 rounded-xl bg-muted/60 border border-border">
            <Link
              to="/admin/students"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground transition-all"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>PrepLens Students</span>
            </Link>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-primary text-primary-foreground shadow-xs">
              <Code2 className="h-3.5 w-3.5" />
              <span>DevLens Developers</span>
            </div>
          </div>

          <button
            onClick={() => { fetchStats(); fetchUsers(); }}
            disabled={loading}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-card border border-border text-foreground hover:bg-muted transition-all active:scale-95 shadow-2xs"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* ─── KPI Stats Bar ──────────────────────────────────────────────────────── */}
      {/* ─── KPI Stats Bar (Interactive Quick Filters) ────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {/* Total Devs */}
        <button
          type="button"
          onClick={() => { setRoleFilter('ALL'); setStatusFilter('ALL'); setPage(0); }}
          className={`text-left rounded-2xl border p-4 shadow-xs transition-all cursor-pointer hover:scale-[1.02] active:scale-95 ${
            roleFilter === 'ALL' && statusFilter === 'ALL'
              ? 'border-primary ring-2 ring-primary/30 bg-primary/5'
              : 'border-border/70 bg-card/60 hover:bg-card/90 backdrop-blur-md'
          }`}
          title="Click to view all registered developers"
        >
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-[11px] font-semibold uppercase tracking-wider">Total Devs</span>
            <Users className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-black text-foreground mt-2">
            {statsLoading ? '—' : (stats?.totalUsers ?? 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5 flex items-center justify-between">
            <span>Registered accounts</span>
            {roleFilter === 'ALL' && statusFilter === 'ALL' && (
              <span className="font-bold text-primary text-[9px] uppercase">Filtered</span>
            )}
          </div>
        </button>

        {/* Active Devs */}
        <button
          type="button"
          onClick={() => { setStatusFilter(prev => prev === 'ACTIVE' ? 'ALL' : 'ACTIVE'); setPage(0); }}
          className={`text-left rounded-2xl border p-4 shadow-xs transition-all cursor-pointer hover:scale-[1.02] active:scale-95 ${
            statusFilter === 'ACTIVE'
              ? 'border-emerald-500 ring-2 ring-emerald-500/30 bg-emerald-500/15'
              : 'border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 backdrop-blur-md'
          }`}
          title="Click to filter by Active developers"
        >
          <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
            <span className="text-[11px] font-semibold uppercase tracking-wider">Active Devs</span>
            <UserCheck className="h-4 w-4" />
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-2">
            {statsLoading ? '—' : (stats?.activeUsers ?? 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5 flex items-center justify-between">
            <span>Healthy standing</span>
            {statusFilter === 'ACTIVE' && (
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-[9px] uppercase">Filtered</span>
            )}
          </div>
        </button>

        {/* Admins */}
        <button
          type="button"
          onClick={() => { setRoleFilter(prev => prev === 'ADMIN' ? 'ALL' : 'ADMIN'); setPage(0); }}
          className={`text-left rounded-2xl border p-4 shadow-xs transition-all cursor-pointer hover:scale-[1.02] active:scale-95 ${
            roleFilter === 'ADMIN'
              ? 'border-purple-500 ring-2 ring-purple-500/30 bg-purple-500/15'
              : 'border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 backdrop-blur-md'
          }`}
          title="Click to filter by Administrator accounts"
        >
          <div className="flex items-center justify-between text-purple-600 dark:text-purple-400">
            <span className="text-[11px] font-semibold uppercase tracking-wider">Admins</span>
            <Shield className="h-4 w-4" />
          </div>
          <div className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-2">
            {statsLoading ? '—' : (stats?.adminUsers ?? 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5 flex items-center justify-between">
            <span>Role privilege</span>
            {roleFilter === 'ADMIN' && (
              <span className="font-bold text-purple-600 dark:text-purple-400 text-[9px] uppercase">Filtered</span>
            )}
          </div>
        </button>

        {/* Suspended */}
        <button
          type="button"
          onClick={() => { setStatusFilter(prev => prev === 'SUSPENDED' ? 'ALL' : 'SUSPENDED'); setPage(0); }}
          className={`text-left rounded-2xl border p-4 shadow-xs transition-all cursor-pointer hover:scale-[1.02] active:scale-95 ${
            statusFilter === 'SUSPENDED'
              ? 'border-rose-500 ring-2 ring-rose-500/30 bg-rose-500/15'
              : 'border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 backdrop-blur-md'
          }`}
          title="Click to filter by Suspended accounts"
        >
          <div className="flex items-center justify-between text-rose-600 dark:text-rose-400">
            <span className="text-[11px] font-semibold uppercase tracking-wider">Suspended</span>
            <UserX className="h-4 w-4" />
          </div>
          <div className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-2">
            {statsLoading ? '—' : (stats?.suspendedUsers ?? 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5 flex items-center justify-between">
            <span>Access revoked</span>
            {statusFilter === 'SUSPENDED' && (
              <span className="font-bold text-rose-600 dark:text-rose-400 text-[9px] uppercase">Filtered</span>
            )}
          </div>
        </button>

        {/* Connected Repos */}
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-md p-4 shadow-xs">
          <div className="flex items-center justify-between text-blue-600 dark:text-blue-400">
            <span className="text-[11px] font-semibold uppercase tracking-wider">Repos</span>
            <GitBranch className="h-4 w-4" />
          </div>
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-2">
            {statsLoading ? '—' : (stats?.totalRepositories ?? 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5">Connected GitHub</div>
        </div>

        {/* Security Scans */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-md p-4 shadow-xs">
          <div className="flex items-center justify-between text-amber-600 dark:text-amber-400">
            <span className="text-[11px] font-semibold uppercase tracking-wider">Security Scans</span>
            <Cpu className="h-4 w-4" />
          </div>
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-2">
            {statsLoading ? '—' : (stats?.totalScans ?? 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5">Analysis pipeline</div>
        </div>
      </div>

      {/* ─── Filter & Search Bar ─────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-md p-3.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-xs">
        <div className="relative flex-1 min-w-[260px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search developers by name or email..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(0); }}
            className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
          />
          {search && (
            <button
              onClick={() => { setSearch(''); setPage(0); }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Role Filter */}
          <select
            value={roleFilter}
            onChange={e => { setRoleFilter(e.target.value as 'ALL' | 'USER' | 'ADMIN'); setPage(0); }}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-background border border-border text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20 cursor-pointer"
          >
            <option value="ALL">All Roles</option>
            <option value="USER">Developer (USER)</option>
            <option value="ADMIN">Administrator (ADMIN)</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value as 'ALL' | 'ACTIVE' | 'SUSPENDED' | 'INACTIVE'); setPage(0); }}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-background border border-border text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20 cursor-pointer"
          >
            <option value="ALL">All Status</option>
            <option value="ACTIVE">Active Accounts</option>
            <option value="SUSPENDED">Suspended</option>
            <option value="INACTIVE">Inactive</option>
          </select>

          {(search || roleFilter !== 'ALL' || statusFilter !== 'ALL') && (
            <button
              onClick={() => { setSearch(''); setRoleFilter('ALL'); setStatusFilter('ALL'); setPage(0); }}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-500 hover:bg-rose-500/10 transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* ─── Developers Table ───────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs min-w-[1100px]">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-4 min-w-[280px]">Developer</th>
                <th className="py-3.5 px-4 min-w-[120px]">Role</th>
                <th className="py-3.5 px-4 min-w-[120px]">Status</th>
                <th className="py-3.5 px-4 min-w-[130px] text-center">Connected Repos</th>
                <th className="py-3.5 px-4 min-w-[130px] text-center">Analysis Scans</th>
                <th className="py-3.5 px-4 min-w-[110px] text-center">Courses</th>
                <th className="py-3.5 px-4 min-w-[120px] text-center">Dev XP</th>
                <th className="py-3.5 px-4 min-w-[140px] whitespace-nowrap">Member Since</th>
                <th className="py-3.5 px-4 min-w-[110px] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {loading ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-muted-foreground">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <RefreshCw className="h-6 w-6 animate-spin text-primary" />
                      <span className="font-semibold text-xs">Querying developer directory...</span>
                    </div>
                  </td>
                </tr>
              ) : usersError ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center">
                    <div className="flex flex-col items-center justify-center gap-3 max-w-sm mx-auto">
                      <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                        <AlertCircle className="h-7 w-7" />
                      </div>
                      <div>
                        <span className="font-bold text-foreground text-sm block">Failed to Load Developers</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{usersError}</p>
                      </div>
                      <button
                        onClick={() => { fetchUsers(); fetchStats(); }}
                        className="mt-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                        <span>Retry Connection</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-muted-foreground">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <AlertCircle className="h-8 w-8 text-muted-foreground/60" />
                      <span className="font-bold text-foreground">No developers found</span>
                      <p className="text-[11px] text-muted-foreground">Try adjusting your search criteria or role filters.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                users.map(u => {
                  const devName = u.fullName || [u.firstName, u.lastName].filter(Boolean).join(' ').trim() || u.email.split('@')[0];
                  const initials = `${(u.firstName || u.fullName || u.email || 'D').charAt(0)}${(u.lastName || '').charAt(0)}`.toUpperCase();
                  const isAdmin = u.role === 'ADMIN';
                  const isSuspended = u.status === 'SUSPENDED';

                  return (
                    <tr 
                      key={u.id}
                      className="hover:bg-muted/30 transition-colors group cursor-pointer"
                      onClick={() => handleOpenDrawer(u)}
                    >
                      {/* Developer */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            isAdmin 
                              ? 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30' 
                              : isSuspended
                              ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                              : 'bg-primary/10 text-primary border border-primary/20'
                          }`}>
                            {initials || 'DEV'}
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-foreground text-xs truncate flex items-center gap-1.5">
                              <span className="truncate max-w-[200px]" title={devName}>{devName}</span>
                              {isAdmin && (
                                <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-sm bg-purple-500/15 text-purple-600 dark:text-purple-400">
                                  ADMIN
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                              <span className="truncate max-w-[220px]" title={u.email}>{u.email}</span>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleCopy(u.email, u.email); }}
                                className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Copy email"
                              >
                                {copiedId === u.email ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Role */}
                      <td className="py-3.5 px-4" onClick={e => e.stopPropagation()}>
                        <button
                          onClick={() => setRoleModalUser(u)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all active:scale-95 ${
                            isAdmin 
                              ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 hover:bg-purple-500/20' 
                              : 'bg-muted text-muted-foreground border-border hover:bg-muted/80 hover:text-foreground'
                          }`}
                          title="Click to toggle Role"
                        >
                          <Shield className="h-3 w-3" />
                          <span>{u.role}</span>
                        </button>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4" onClick={e => e.stopPropagation()}>
                        <button
                          onClick={() => setStatusModalUser(u)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all active:scale-95 ${
                            isSuspended 
                              ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 hover:bg-rose-500/20' 
                              : u.status === 'ACTIVE'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                              : 'bg-muted text-muted-foreground border-border'
                          }`}
                          title="Click to toggle Status"
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${
                            isSuspended ? 'bg-rose-500' : u.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-slate-400'
                          }`} />
                          <span>{u.status}</span>
                        </button>
                      </td>

                      {/* Connected Repos */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[11px]">
                          <GitBranch className="h-3 w-3" />
                          {u.repositoryCount ?? 0}
                        </span>
                      </td>

                      {/* Scans */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[11px]">
                          <Cpu className="h-3 w-3" />
                          {u.scanCount ?? 0}
                        </span>
                      </td>

                      {/* Enrolled Courses */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400 font-bold text-[11px]">
                          <BookOpen className="h-3 w-3" />
                          {u.enrolledCoursesCount ?? 0}
                        </span>
                      </td>

                      {/* Dev Points / XP */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black text-[11px]">
                          <Sparkles className="h-3 w-3" />
                          {(u.points ?? 0).toLocaleString()}
                        </span>
                      </td>

                      {/* Member Since */}
                      <td className="py-3.5 px-4 text-muted-foreground text-[11px]">
                        {formatDate(u.createdAt)}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenDrawer(u)}
                            className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            title="Inspect Developer 360°"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </button>

                          <button
                            onClick={() => {
                              setPasswordModalUser(u);
                              setNewPassword('');
                            }}
                            className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            title="Reset Password"
                          >
                            <KeyRound className="h-3.5 w-3.5" />
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

        {/* ─── Pagination Footer ──────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-muted/20 text-xs text-muted-foreground">
          <div>
            Showing <span className="font-bold text-foreground">{users.length}</span> of{' '}
            <span className="font-bold text-foreground">{totalElements}</span> developers
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0 || loading}
              className="p-1.5 rounded-lg border border-border bg-card text-foreground hover:bg-muted disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-semibold text-foreground px-2">
              Page {page + 1} of {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1 || loading}
              className="p-1.5 rounded-lg border border-border bg-card text-foreground hover:bg-muted disabled:opacity-40 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Developer 360° Slide-over Drawer ───────────────────────────────────── */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-card border-l border-border h-full flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-5 border-b border-border bg-muted/30 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center font-black text-base shadow-sm ${
                  selectedUser.role === 'ADMIN'
                    ? 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                    : selectedUser.status === 'SUSPENDED'
                    ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                    : 'bg-primary/15 text-primary border border-primary/25'
                }`}>
                  {`${(selectedUser.firstName || selectedUser.fullName || selectedUser.email || 'D').charAt(0)}${(selectedUser.lastName || '').charAt(0)}`.toUpperCase() || 'DEV'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-black text-foreground">
                      {selectedUser.fullName || [selectedUser.firstName, selectedUser.lastName].filter(Boolean).join(' ').trim() || selectedUser.email.split('@')[0]}
                    </h2>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${
                      selectedUser.role === 'ADMIN'
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
                        : 'bg-muted text-muted-foreground border-border'
                    }`}>
                      {selectedUser.role}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      selectedUser.status === 'SUSPENDED'
                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                    }`}>
                      {selectedUser.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                    <span>{selectedUser.email}</span>
                    <span>•</span>
                    <span className="font-mono text-[10px] text-muted-foreground/80">{selectedUser.id}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCloseDrawer}
                className="p-1.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Action Toolbar inside Drawer */}
            <div className="px-5 py-3 border-b border-border bg-muted/10 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setRoleModalUser(selectedUser)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 transition-all active:scale-95"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>{selectedUser.role === 'ADMIN' ? 'Demote to USER' : 'Promote to ADMIN'}</span>
              </button>

              <button
                onClick={() => setStatusModalUser(selectedUser)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all active:scale-95 ${
                  selectedUser.status === 'SUSPENDED'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20'
                }`}
              >
                {selectedUser.status === 'SUSPENDED' ? <UserCheck className="h-3.5 w-3.5" /> : <UserX className="h-3.5 w-3.5" />}
                <span>{selectedUser.status === 'SUSPENDED' ? 'Reactivate Account' : 'Suspend Account'}</span>
              </button>

              <button
                onClick={() => {
                  setPasswordModalUser(selectedUser);
                  setNewPassword('');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border border-border bg-card text-foreground hover:bg-muted transition-all active:scale-95"
              >
                <KeyRound className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Reset Password</span>
              </button>

              <button
                onClick={() => {
                  setPointsModalUser(selectedUser);
                  setPointsAmount(50);
                  setPointsOperation('ADD');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-all active:scale-95"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Adjust Points</span>
              </button>

              <button
                onClick={() => {
                  setEditProfileUser(selectedUser);
                  setEditFirstName(selectedUser.firstName || '');
                  setEditLastName(selectedUser.lastName || '');
                  setEditEmail(selectedUser.email || '');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border border-border bg-card text-foreground hover:bg-muted transition-all active:scale-95 ml-auto"
              >
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-4 gap-2 p-5 border-b border-border bg-card">
              <div className="p-3 rounded-xl bg-muted/40 border border-border">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Connected Repos</span>
                <div className="text-lg font-black text-foreground mt-0.5 flex items-center gap-1.5">
                  <GitBranch className="h-4 w-4 text-blue-500" />
                  {selectedUser.repositoryCount ?? 0}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-muted/40 border border-border">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Total Scans</span>
                <div className="text-lg font-black text-foreground mt-0.5 flex items-center gap-1.5">
                  <Cpu className="h-4 w-4 text-amber-500" />
                  {selectedUser.scanCount ?? 0}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-muted/40 border border-border">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Courses</span>
                <div className="text-lg font-black text-foreground mt-0.5 flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  {selectedUser.enrolledCoursesCount ?? 0}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-muted/40 border border-border">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Dev Points</span>
                <div className="text-lg font-black text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  {(selectedUser.points ?? 0).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Badges Preview */}
            {parseBadges(selectedUser.badges).length > 0 && (
              <div className="px-5 py-2.5 bg-muted/20 border-b border-border flex items-center gap-2 overflow-x-auto">
                <span className="text-[10px] font-bold text-muted-foreground shrink-0 uppercase tracking-wider">Badges:</span>
                {parseBadges(selectedUser.badges).map((badge, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                    <Award className="h-3 w-3" />
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Tab Navigation */}
            <div className="flex border-b border-border px-5 bg-card">
              <button
                onClick={() => setActiveDrawerTab('repos')}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                  activeDrawerTab === 'repos'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <GitBranch className="h-3.5 w-3.5" />
                <span>Connected Repositories ({userDetails?.repositories.length || 0})</span>
              </button>

              <button
                onClick={() => setActiveDrawerTab('scans')}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                  activeDrawerTab === 'scans'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Cpu className="h-3.5 w-3.5" />
                <span>Recent Analysis Scans ({userDetails?.recentScans.length || 0})</span>
              </button>

              <button
                onClick={() => setActiveDrawerTab('courses')}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                  activeDrawerTab === 'courses'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Enrolled Courses ({userDetails?.enrollments.length || 0})</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 p-5 overflow-y-auto space-y-3">
              {loadingDetails ? (
                <div className="py-12 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <RefreshCw className="h-6 w-6 animate-spin text-primary" />
                  <span className="text-xs font-semibold">Loading developer telemetry...</span>
                </div>
              ) : activeDrawerTab === 'repos' ? (
                userDetails?.repositories.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground">
                    <GitBranch className="h-8 w-8 mx-auto text-muted-foreground/60 mb-2" />
                    <p className="font-bold text-foreground text-xs">No repositories connected</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Developer has not linked any GitHub repo yet.</p>
                  </div>
                ) : (
                  userDetails?.repositories.map(repo => (
                    <div key={repo.id} className="p-3.5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <GitBranch className="h-4 w-4 text-primary shrink-0" />
                          <span className="font-bold text-foreground text-xs truncate">{repo.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground">
                            {repo.branch}
                          </span>
                        </div>
                        {repo.url && (
                          <a 
                            href={repo.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-1 rounded-md text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground mt-2">
                        <span>Owner: <strong className="text-foreground">{repo.owner}</strong></span>
                        <span>•</span>
                        <span>Visibility: <strong className="text-foreground uppercase">{repo.visibility}</strong></span>
                        <span>•</span>
                        <span>Provider: <strong className="text-foreground">{repo.provider}</strong></span>
                        <span>•</span>
                        <span>Status: <strong className="text-foreground">{repo.status}</strong></span>
                      </div>
                    </div>
                  ))
                )
              ) : activeDrawerTab === 'scans' ? (
                userDetails?.recentScans.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground">
                    <Cpu className="h-8 w-8 mx-auto text-muted-foreground/60 mb-2" />
                    <p className="font-bold text-foreground text-xs">No analysis scans found</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">No code quality or vulnerability scans initiated.</p>
                  </div>
                ) : (
                  userDetails?.recentScans.map(scan => (
                    <div key={scan.id} className="p-3.5 rounded-xl border border-border bg-card">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-amber-500 shrink-0" />
                          <span className="font-bold text-foreground text-xs">{scan.repositoryName}</span>
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${
                            scan.status === 'COMPLETED'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                              : scan.status === 'FAILED'
                              ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
                              : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                          }`}>
                            {scan.status}
                          </span>
                        </div>
                        {scan.score != null && (
                          <div className="text-xs font-bold text-foreground">
                            Score: <span className="font-black text-emerald-600 dark:text-emerald-400">{scan.score}/100</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground mt-2">
                        <span>Scan ID: <strong className="font-mono text-muted-foreground">{scan.id.substring(0, 8)}...</strong></span>
                        <span>•</span>
                        <span>Progress: <strong className="text-foreground">{scan.progress}%</strong></span>
                        <span>•</span>
                        <span>
                          Created: <strong className="text-foreground">{new Date(scan.createdAt).toLocaleString()}</strong>
                        </span>
                      </div>
                    </div>
                  ))
                )
              ) : (
                userDetails?.enrollments.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground">
                    <BookOpen className="h-8 w-8 mx-auto text-muted-foreground/60 mb-2" />
                    <p className="font-bold text-foreground text-xs">No active enrollments</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Developer has not enrolled in any Academy tracks yet.</p>
                  </div>
                ) : (
                  userDetails?.enrollments.map(enr => (
                    <div key={enr.id} className="p-3.5 rounded-xl border border-border bg-card flex items-center justify-between gap-3">
                      <div>
                        <div className="font-bold text-foreground text-xs">{enr.courseTitle}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">
                          Enrolled: {new Date(enr.enrolledAt).toLocaleDateString()}
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                        {enr.status}
                      </span>
                    </div>
                  ))
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── Role Change Modal ─────────────────────────────────────────────────── */}
      {roleModalUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Change Account Role</h3>
                <p className="text-xs text-muted-foreground">{roleModalUser.fullName || roleModalUser.email}</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Are you sure you want to change this developer&apos;s role from{' '}
              <strong className="text-foreground">{roleModalUser.role}</strong> to{' '}
              <strong className="text-purple-600 dark:text-purple-400">
                {roleModalUser.role === 'ADMIN' ? 'USER' : 'ADMIN'}
              </strong>?
              {roleModalUser.role === 'USER' 
                ? ' Promoting to ADMIN grants complete access to the Admin Command Center, revenue telemetry, user controls, and curriculum builder.'
                : ' Demoting to USER will revoke administrative privileges immediately.'}
            </p>

            <div className="flex items-center justify-end gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setRoleModalUser(null)}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleRoleChange}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-xs flex items-center gap-1.5"
              >
                {isSubmitting && <RefreshCw className="h-3 w-3 animate-spin" />}
                <span>Confirm Role Change</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Status Suspension Modal ────────────────────────────────────────────── */}
      {statusModalUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${
                statusModalUser.status === 'SUSPENDED' 
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                  : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
              }`}>
                {statusModalUser.status === 'SUSPENDED' ? <UserCheck className="h-6 w-6" /> : <ShieldAlert className="h-6 w-6" />}
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {statusModalUser.status === 'SUSPENDED' ? 'Reactivate Account' : 'Suspend Developer Account'}
                </h3>
                <p className="text-xs text-muted-foreground">{statusModalUser.fullName || statusModalUser.email}</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              {statusModalUser.status === 'SUSPENDED' ? (
                <>Reactivating will restore login access and all platform developer features immediately.</>
              ) : (
                <>
                  Suspending this account will <strong className="text-rose-600 dark:text-rose-400">immediately revoke all active JWT tokens</strong> and purge all refresh tokens. Any ongoing session on browser or CLI will be terminated instantly.
                </>
              )}
            </p>

            <div className="flex items-center justify-end gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setStatusModalUser(null)}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleStatusChange}
                disabled={isSubmitting}
                className={`px-4 py-2 rounded-xl text-xs font-bold text-white transition-colors shadow-xs flex items-center gap-1.5 ${
                  statusModalUser.status === 'SUSPENDED'
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-rose-600 hover:bg-rose-700'
                }`}
              >
                {isSubmitting && <RefreshCw className="h-3 w-3 animate-spin" />}
                <span>{statusModalUser.status === 'SUSPENDED' ? 'Confirm Reactivation' : 'Confirm Suspension'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Password Reset Modal ───────────────────────────────────────────────── */}
      {passwordModalUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <KeyRound className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Reset Developer Password</h3>
                <p className="text-xs text-muted-foreground">{passwordModalUser.fullName || passwordModalUser.email}</p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <label className="text-xs font-bold text-foreground block">
                New Temporary Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter min. 6 characters..."
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-[11px] text-muted-foreground">
                All existing sessions on other devices will be terminated immediately. The developer will log in using this password.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setPasswordModalUser(null)}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleResetPassword}
                disabled={isSubmitting || newPassword.length < 6}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors shadow-xs flex items-center gap-1.5"
              >
                {isSubmitting && <RefreshCw className="h-3 w-3 animate-spin" />}
                <span>Set Password</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Adjust Points Modal ────────────────────────────────────────────────── */}
      {pointsModalUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Adjust Dev Points / XP</h3>
                <p className="text-xs text-muted-foreground">{pointsModalUser.fullName || pointsModalUser.email}</p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs font-bold text-foreground block mb-1.5">Operation</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPointsOperation('ADD')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      pointsOperation === 'ADD'
                        ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                        : 'bg-muted/50 border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Add / Deduct Points
                  </button>
                  <button
                    type="button"
                    onClick={() => setPointsOperation('SET')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      pointsOperation === 'SET'
                        ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                        : 'bg-muted/50 border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Set Exact Points
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-foreground block mb-1">
                  Points Value (Current: {pointsModalUser.points.toLocaleString()})
                </label>
                <input
                  type="number"
                  value={pointsAmount}
                  onChange={e => setPointsAmount(Number(e.target.value))}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-background border border-border text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setPointsModalUser(null)}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAdjustPoints}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-xs flex items-center gap-1.5"
              >
                {isSubmitting && <RefreshCw className="h-3 w-3 animate-spin" />}
                <span>Save Points</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Edit Profile Modal ─────────────────────────────────────────────────── */}
      {editProfileUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-base font-bold text-foreground">Edit Developer Profile</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Update name and primary login email.</p>

            <div className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-muted-foreground block mb-1">First Name</label>
                  <input
                    type="text"
                    value={editFirstName}
                    onChange={e => setEditFirstName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-background border border-border text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-muted-foreground block mb-1">Last Name</label>
                  <input
                    type="text"
                    value={editLastName}
                    onChange={e => setEditLastName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-background border border-border text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-muted-foreground block mb-1">Email Address</label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={e => setEditEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs bg-background border border-border text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setEditProfileUser(null)}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpdateProfile}
                disabled={isSubmitting || !editEmail.trim()}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs flex items-center gap-1.5"
              >
                {isSubmitting && <RefreshCw className="h-3 w-3 animate-spin" />}
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
