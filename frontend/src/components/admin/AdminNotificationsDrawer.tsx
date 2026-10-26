import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, Clock, CheckCircle2, 
  RefreshCw, X, Sparkles, 
  Award, Flame, ArrowUpRight, Users, Check
} from 'lucide-react';
import { api } from '@/lib/api';
import { toast } from 'sonner';

export interface AdminNotification {
  id: string;
  type: 'CAPSTONE' | 'HOT_LEAD' | 'PRO_CONVERSION' | 'SYSTEM';
  title: string;
  subtitle: string;
  meta?: string;
  timestamp?: string;
  actionUrl: string;
  actionText: string;
  priority: 'high' | 'medium' | 'info';
}

interface AdminNotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCountChange?: (count: number) => void;
}

const DISMISSED_STORAGE_KEY = 'devlens_admin_dismissed_alerts_v1';
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

function getStoredDismissedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(DISMISSED_STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as Record<string, number>;
    const now = Date.now();
    const validIds = new Set<string>();
    let needsPrune = false;
    for (const [id, ts] of Object.entries(parsed)) {
      if (typeof ts === 'number' && now - ts < SEVEN_DAYS_MS) {
        validIds.add(id);
      } else {
        needsPrune = true;
      }
    }
    if (needsPrune) {
      saveStoredDismissedIds(validIds);
    }
    return validIds;
  } catch {
    return new Set();
  }
}

function saveStoredDismissedIds(ids: Set<string>) {
  try {
    const now = Date.now();
    const data: Record<string, number> = {};
    ids.forEach(id => {
      data[id] = now;
    });
    localStorage.setItem(DISMISSED_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn('Failed to persist dismissed alerts to storage:', err);
  }
}

export function AdminNotificationsDrawer({ isOpen, onClose, onCountChange }: AdminNotificationsDrawerProps) {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(() => getStoredDismissedIds());
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'ALL' | 'CAPSTONE' | 'HOT_LEAD' | 'SYSTEM'>('ALL');

  const fetchLiveAlerts = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const alerts: AdminNotification[] = [];

      // 1. Fetch pending capstone submissions
      try {
        const subRes = await api.get('/admin/submissions?status=PENDING_REVIEW');
        const pendingItems = Array.isArray(subRes.data) ? subRes.data : [];
        pendingItems.slice(0, 10).forEach((sub: any) => {
          alerts.push({
            id: `capstone-${sub.id}`,
            type: 'CAPSTONE',
            title: `${sub.userName || sub.user?.fullName || 'Student'} submitted Capstone`,
            subtitle: `${sub.moduleTitle || sub.module?.title || 'Capstone Project'}`,
            meta: sub.projectRepoUrl ? 'GitHub Repo attached' : 'Ready for grading',
            actionUrl: `/admin/submissions?submissionId=${sub.id}&status=PENDING_REVIEW`,
            actionText: 'Grade Capstone',
            priority: 'high'
          });
        });
      } catch (err) {
        // Silently skip if endpoint temporarily down
      }

      // 2. Fetch students for Hot Leads & At Risk
      try {
        const studentsRes = await api.get('/learn/admin/students', {
          params: { crmStatus: 'ALL', size: 50 }
        });
        const studentList = Array.isArray(studentsRes.data) ? studentsRes.data : [];
        
        // Find hot leads
        const hotLeads = studentList.filter((s: any) => s.isHotLead || (s.paywallHitCount && s.paywallHitCount >= 2));
        hotLeads.slice(0, 5).forEach((lead: any) => {
          alerts.push({
            id: `lead-${lead.id}`,
            type: 'HOT_LEAD',
            title: `Hot Lead: ${lead.fullName || 'Student'}`,
            subtitle: `Hit subscription paywall ${lead.paywallHitCount || 2} times`,
            meta: lead.examGoal ? `Goal: ${lead.examGoal}` : 'Ready for outreach',
            actionUrl: `/admin/students?search=${encodeURIComponent(lead.fullName || lead.email || '')}&intent=HOT_LEAD&studentId=${lead.id}`,
            actionText: 'View CRM Profile',
            priority: 'medium'
          });
        });

        // Find recently converted PRO students (sorted by newest enrollment first)
        const proStudents = studentList
          .filter((s: any) => s.isPaidUser || s.subscriptionPlan === 'PRO')
          .sort((a: any, b: any) => {
            const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return timeB - timeA;
          });

        // Present up to 3 recent conversions with engagement telemetry
        proStudents.slice(0, 3).forEach((pro: any) => {
          const studyMins = pro.totalStudyMinutes || 0;
          const needsOnboarding = studyMins === 0;

          alerts.push({
            id: `pro-${pro.id}`,
            type: 'PRO_CONVERSION',
            title: `PRO Member: ${pro.fullName || pro.email || 'Student'}`,
            subtitle: needsOnboarding
              ? 'New PRO conversion with 0 study minutes recorded'
              : `Active PRO tier learner • ${pro.testsTaken || 0} tests completed`,
            meta: needsOnboarding
              ? '⚠️ Needs Onboarding Outreach'
              : `🔥 ${studyMins} mins studied`,
            actionUrl: `/admin/students?search=${encodeURIComponent(pro.fullName || pro.email || '')}&plan=PAID&studentId=${pro.id}`,
            actionText: needsOnboarding ? 'Reach Out in CRM' : 'Inspect Student',
            priority: needsOnboarding ? 'medium' : 'info'
          });
        });
      } catch (err) {
        // Silently skip if endpoint temporarily down
      }

      // 3. Fetch overall telemetry for system milestones
      try {
        const statsRes = await api.get('/admin/stats');
        if (statsRes && statsRes.data) {
          if (statsRes.data.certificatesIssued > 0) {
            alerts.push({
              id: 'stat-certs',
              type: 'SYSTEM',
              title: `${statsRes.data.certificatesIssued} Certificates Issued`,
              subtitle: 'Students successfully graduated & certified',
              meta: 'LMS Milestone',
              actionUrl: '/admin/dashboard',
              actionText: 'View Telemetry',
              priority: 'info'
            });
          }
        }
      } catch (err) {
        // Silently skip if endpoint temporarily down
      }

      setNotifications(alerts);
    } finally {
      if (!silent) setLoading(false);
    }
  }, []);

  // Compute active (non-dismissed) notifications
  const activeAlerts = useMemo(() => {
    return notifications.filter(n => !dismissedIds.has(n.id));
  }, [notifications, dismissedIds]);

  // Synchronize unread badge count with active alerts only
  useEffect(() => {
    if (onCountChange) {
      const actionableCount = activeAlerts.filter(a => a.priority === 'high' || a.priority === 'medium').length;
      onCountChange(actionableCount);
    }
  }, [activeAlerts, onCountChange]);

  // Dismiss a single alert
  const handleDismissAlert = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDismissedIds(prev => {
      const next = new Set(prev);
      next.add(id);
      saveStoredDismissedIds(next);
      return next;
    });
    toast.success('Alert marked as handled', {
      description: 'Hidden from your active queue.',
      duration: 2500,
    });
  };

  // Dismiss all currently active alerts
  const handleDismissAll = () => {
    if (activeAlerts.length === 0) return;
    setDismissedIds(prev => {
      const next = new Set(prev);
      activeAlerts.forEach(a => next.add(a.id));
      saveStoredDismissedIds(next);
      return next;
    });
    toast.success('All alerts marked as handled', {
      description: 'Your Action Center queue is now at Inbox Zero.',
      duration: 3000,
    });
  };

  // Restore all dismissed alerts
  const handleResetDismissed = () => {
    setDismissedIds(new Set());
    try {
      localStorage.removeItem(DISMISSED_STORAGE_KEY);
    } catch {}
    toast.info('Dismissed alerts restored', {
      description: 'All past notifications are visible again.',
    });
  };

  // Initial load
  useEffect(() => {
    fetchLiveAlerts();
  }, [fetchLiveAlerts]);

  // Refetch when drawer opens
  useEffect(() => {
    if (isOpen) {
      fetchLiveAlerts();
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, fetchLiveAlerts]);

  // Periodic 60s background polling & window focus re-validation
  useEffect(() => {
    const POLL_INTERVAL_MS = 60_000;
    const intervalId = setInterval(() => {
      fetchLiveAlerts(true);
    }, POLL_INTERVAL_MS);

    const handleFocus = () => {
      fetchLiveAlerts(true);
    };
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('focus', handleFocus);
    };
  }, [fetchLiveAlerts]);

  const filteredNotifications = useMemo(() => {
    return activeAlerts.filter(n => {
      if (activeTab === 'ALL') return true;
      if (activeTab === 'CAPSTONE') return n.type === 'CAPSTONE';
      if (activeTab === 'HOT_LEAD') return n.type === 'HOT_LEAD' || n.type === 'PRO_CONVERSION';
      if (activeTab === 'SYSTEM') return n.type === 'SYSTEM';
      return true;
    });
  }, [activeAlerts, activeTab]);

  const highPriorityCount = useMemo(() => activeAlerts.filter(n => n.priority === 'high').length, [activeAlerts]);
  const leadCount = useMemo(() => activeAlerts.filter(n => n.type === 'HOT_LEAD' || n.type === 'PRO_CONVERSION').length, [activeAlerts]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 animate-in fade-in duration-200">
      {/* Dimmed Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose} 
      />

      {/* Slide-over Right Drawer */}
      <aside className="fixed inset-y-0 right-0 w-full max-w-md bg-card border-l border-border shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-250">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-border bg-card/95 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-xs">
                <Bell className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  Admin Action Center
                  {highPriorityCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/20 animate-pulse">
                      {highPriorityCount} Urgently Pending
                    </span>
                  )}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">Live events from PostgreSQL & LMS Queue</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {activeAlerts.length > 0 && (
                <button
                  onClick={handleDismissAll}
                  title="Mark all as handled"
                  className="px-2.5 py-1.5 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1"
                >
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="hidden sm:inline">Clear All</span>
                </button>
              )}
              <button
                onClick={() => fetchLiveAlerts()}
                disabled={loading}
                title="Refresh live queue"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-primary' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-border/60 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                activeTab === 'ALL'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              All Alerts ({activeAlerts.length})
            </button>
            <button
              onClick={() => setActiveTab('CAPSTONE')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5 ${
                activeTab === 'CAPSTONE'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <span>Capstones</span>
              {highPriorityCount > 0 && (
                <span className="h-4 px-1 rounded-full text-[9px] bg-rose-500 text-white font-black flex items-center justify-center">
                  {highPriorityCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('HOT_LEAD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5 ${
                activeTab === 'HOT_LEAD'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <span>Leads & PRO</span>
              {leadCount > 0 && (
                <span className="h-4 px-1 rounded-full text-[9px] bg-amber-500 text-white font-black flex items-center justify-center">
                  {leadCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('SYSTEM')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                activeTab === 'SYSTEM'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              System
            </button>
          </div>
        </div>

        {/* Notifications Body Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {loading && activeAlerts.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <RefreshCw className="h-6 w-6 animate-spin text-primary mx-auto" />
              <p className="text-xs text-muted-foreground font-medium">Checking live PostgreSQL database queue...</p>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="py-16 text-center px-4 space-y-3">
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Inbox Zero</h4>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                No active pending reviews or critical alerts in this category right now. All queues are clear!
              </p>
              {dismissedIds.size > 0 && (
                <button
                  onClick={handleResetDismissed}
                  className="mt-2 text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Restore {dismissedIds.size} dismissed alert{dismissedIds.size > 1 ? 's' : ''}
                </button>
              )}
            </div>
          ) : (
            filteredNotifications.map((notif) => {
              const isHigh = notif.priority === 'high';
              const isLead = notif.type === 'HOT_LEAD';
              const isPro = notif.type === 'PRO_CONVERSION';

              return (
                <div
                  key={notif.id}
                  className={`p-3.5 rounded-2xl border transition-all hover:shadow-md ${
                    isHigh
                      ? 'bg-rose-500/5 dark:bg-rose-950/20 border-rose-500/30'
                      : isLead
                      ? 'bg-amber-500/5 dark:bg-amber-950/20 border-amber-500/30'
                      : isPro
                      ? 'bg-violet-500/5 dark:bg-violet-950/20 border-violet-500/30'
                      : 'bg-card border-border hover:border-border/80'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`h-8 w-8 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold ${
                      isHigh
                        ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                        : isLead
                        ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                        : isPro
                        ? 'bg-violet-500/15 text-violet-600 dark:text-violet-400'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {notif.type === 'CAPSTONE' && <Clock className="h-4 w-4" />}
                      {notif.type === 'HOT_LEAD' && <Flame className="h-4 w-4" />}
                      {notif.type === 'PRO_CONVERSION' && <Award className="h-4 w-4" />}
                      {notif.type === 'SYSTEM' && <Sparkles className="h-4 w-4" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <h5 className="text-xs font-bold text-foreground truncate">{notif.title}</h5>
                          {isHigh && (
                            <span className="text-[10px] font-black uppercase tracking-wider text-rose-500 bg-rose-500/10 px-1.5 py-0.2 rounded-md shrink-0">
                              Action Req.
                            </span>
                          )}
                        </div>
                        <button
                          onClick={(e) => handleDismissAlert(notif.id, e)}
                          title="Mark as handled / dismiss"
                          className="p-1 rounded-lg text-muted-foreground/60 hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors shrink-0"
                        >
                          <Check className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{notif.subtitle}</p>
                      
                      {notif.meta && (
                        <p className="text-[11px] text-muted-foreground/80 mt-1 flex items-center gap-1 font-mono">
                          <span>•</span> {notif.meta}
                        </p>
                      )}

                      <div className="mt-2.5 pt-2 border-t border-border/50 flex items-center justify-between">
                        <button
                          onClick={() => {
                            onClose();
                            navigate(notif.actionUrl);
                          }}
                          className={`inline-flex items-center gap-1 text-xs font-bold transition-all ${
                            isHigh 
                              ? 'text-rose-600 dark:text-rose-400 hover:underline' 
                              : isLead
                              ? 'text-amber-600 dark:text-amber-400 hover:underline'
                              : isPro
                              ? 'text-violet-600 dark:text-violet-400 hover:underline'
                              : 'text-primary hover:underline'
                          }`}
                        >
                          <span>{notif.actionText}</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer with Quick Shortcuts & Dismissed Restore */}
        <div className="p-4 border-t border-border bg-muted/20 space-y-2">
          <div className="flex items-center justify-between px-1">
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Quick Direct Shortcuts</p>
            {dismissedIds.size > 0 && (
              <button
                onClick={handleResetDismissed}
                className="text-[11px] font-semibold text-primary hover:underline transition-all"
              >
                Restore ({dismissedIds.size}) Handled
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onClose();
                navigate('/admin/submissions');
              }}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-card border border-border hover:bg-muted text-foreground transition-colors"
            >
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>Submissions</span>
            </button>
            <button
              onClick={() => {
                onClose();
                navigate('/admin/students');
              }}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-card border border-border hover:bg-muted text-foreground transition-colors"
            >
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>Student CRM</span>
            </button>
          </div>
        </div>

      </aside>
    </div>
  );
}
