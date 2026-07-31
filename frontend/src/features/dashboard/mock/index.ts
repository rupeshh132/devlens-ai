export interface QuickStats {
  totalRepositories: number;
  totalAnalyses: number;
  averageScore: number;
  reportsGenerated: number;
}

export type RepositoryStatus = 'Healthy' | 'Warning' | 'Critical' | 'Analyzing';

export interface Repository {
  id: string;
  name: string;
  language: string;
  lastAnalysis: string;
  score: number;
  status: RepositoryStatus;
}

export type ActivityType = 'analysis_completed' | 'repo_added' | 'report_generated' | 'security_alert';

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  repoName?: string;
}

export const mockQuickStats: QuickStats = {
  totalRepositories: 12,
  totalAnalyses: 148,
  averageScore: 92,
  reportsGenerated: 34,
};

export const mockRepositories: Repository[] = [
  {
    id: '1',
    name: 'devlens-ai-core',
    language: 'TypeScript',
    lastAnalysis: '2 hours ago',
    score: 95,
    status: 'Healthy',
  },
  {
    id: '2',
    name: 'payment-gateway-service',
    language: 'Go',
    lastAnalysis: '5 hours ago',
    score: 78,
    status: 'Warning',
  },
  {
    id: '3',
    name: 'legacy-monolith-api',
    language: 'Java',
    lastAnalysis: '1 day ago',
    score: 45,
    status: 'Critical',
  },
  {
    id: '4',
    name: 'user-auth-microservice',
    language: 'Rust',
    lastAnalysis: 'Just now',
    score: 0,
    status: 'Analyzing',
  },
  {
    id: '5',
    name: 'frontend-dashboard-v2',
    language: 'TypeScript',
    lastAnalysis: '3 days ago',
    score: 88,
    status: 'Healthy',
  },
];

export const mockActivityFeed: Activity[] = [
  {
    id: '1',
    type: 'analysis_completed',
    title: 'Analysis Completed',
    description: 'Security & performance scan finished for devlens-ai-core with score 95/100.',
    timestamp: '2 hours ago',
    repoName: 'devlens-ai-core',
  },
  {
    id: '2',
    type: 'security_alert',
    title: 'Critical Vulnerability Found',
    description: 'Detected outdated dependencies in legacy-monolith-api.',
    timestamp: '1 day ago',
    repoName: 'legacy-monolith-api',
  },
  {
    id: '3',
    type: 'report_generated',
    title: 'Weekly Report Generated',
    description: 'Your weekly code quality summary is ready to view.',
    timestamp: '2 days ago',
  },
  {
    id: '4',
    type: 'repo_added',
    title: 'Repository Connected',
    description: 'Successfully connected user-auth-microservice via GitHub.',
    timestamp: '3 days ago',
    repoName: 'user-auth-microservice',
  },
];
