import { StatCard } from '@/components/ui/stat-card';
import { RecentRepositories } from '@/features/dashboard/components/RecentRepositories';
import { QuickActions } from '@/features/dashboard/components/QuickActions';
import { ActivityFeed } from '@/features/dashboard/components/ActivityFeed';
import { FolderGit2, CheckCircle, Activity, FileStack } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useDashboardSummary } from '@/features/dashboard/hooks/useDashboardSummary';

export function Dashboard() {
  const { user } = useAuth();
  const { data: summary, isLoading } = useDashboardSummary();

  if (isLoading) {
    return <div className="flex h-[50vh] items-center justify-center">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-primary" />
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              Welcome back, {user?.fullName?.split(' ')[0] || 'Developer'}
            </h1>
          </div>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your projects today.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Repositories"
          value={summary?.totalRepositories?.toString() || '0'}
          icon={FolderGit2}
          description="Connected codebases"
        />
        <StatCard
          title="Active Analyses"
          value={summary?.activeAnalyses?.toString() || '0'}
          icon={Activity}
          description="Running or queued"
        />
        <StatCard
          title="Average Score"
          value={summary?.averageScore != null ? `${summary.averageScore}/100` : 'N/A'}
          icon={CheckCircle}
          description="Across all repositories"
        />
        <StatCard
          title="Completed Scans"
          value={summary?.completedAnalyses?.toString() || '0'}
          icon={FileStack}
          description="Finished analyses"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <RecentRepositories repositories={summary?.recentRepositories || []} />
          <ActivityFeed activities={summary?.recentAnalyses || []} />
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
