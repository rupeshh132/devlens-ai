import { StatCard } from '@/components/ui/stat-card';
import { RecentRepositories } from '@/features/dashboard/components/RecentRepositories';
import { QuickActions } from '@/features/dashboard/components/QuickActions';
import { ActivityFeed } from '@/features/dashboard/components/ActivityFeed';
import { mockQuickStats } from '@/features/dashboard/mock';
import { FolderGit2, CheckCircle, Activity, FileStack } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/useAuth';

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome back, {user?.fullName || 'Developer'}
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your projects today.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Repositories"
          value={mockQuickStats.totalRepositories.toString()}
          icon={FolderGit2}
          description="Connected codebases"
          trend="up"
          trendValue="12%"
        />
        <StatCard
          title="Analyses"
          value={mockQuickStats.totalAnalyses.toString()}
          icon={Activity}
          description="Total scans performed"
          trend="up"
          trendValue="5%"
        />
        <StatCard
          title="Average Score"
          value={`${mockQuickStats.averageScore}/100`}
          icon={CheckCircle}
          description="Across all repositories"
        />
        <StatCard
          title="Reports Generated"
          value={mockQuickStats.reportsGenerated.toString()}
          icon={FileStack}
          description="Detailed PDF/HTML reports"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <RecentRepositories />
          <ActivityFeed />
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
