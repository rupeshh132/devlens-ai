import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { ProtectedRoute } from '../features/auth/components/ProtectedRoute';
import { PublicRoute } from '../features/auth/components/PublicRoute';
import { Loader2 } from 'lucide-react';

const NotFound = lazy(() => import('../pages/NotFound').then(module => ({ default: module.NotFound })));
const LandingPage = lazy(() => import('../pages/LandingPage').then(module => ({ default: module.LandingPage })));
const FeaturesPage = lazy(() => import('../pages/FeaturesPage').then(module => ({ default: module.FeaturesPage })));
const HowItWorksPage = lazy(() => import('../pages/public/HowItWorksPage').then(module => ({ default: module.HowItWorksPage })));
const IntegrationsPage = lazy(() => import('../pages/public/IntegrationsPage').then(module => ({ default: module.IntegrationsPage })));
const ChangelogPage = lazy(() => import('../pages/public/ChangelogPage').then(module => ({ default: module.ChangelogPage })));
const DocsPage = lazy(() => import('../pages/public/DocsPage').then(module => ({ default: module.DocsPage })));
const BlogPage = lazy(() => import('../pages/public/BlogPage').then(module => ({ default: module.BlogPage })));
const HelpCenterPage = lazy(() => import('../pages/public/HelpCenterPage').then(module => ({ default: module.HelpCenterPage })));
const LegalPage = lazy(() => import('../pages/public/LegalPage').then(module => ({ default: module.LegalPage })));
const Dashboard = lazy(() => import('../pages/Dashboard').then(module => ({ default: module.Dashboard })));
const RepositoriesPage = lazy(() => import('../pages/repositories/RepositoriesPage').then(module => ({ default: module.RepositoriesPage })));
const RepositoryDetailsPage = lazy(() => import('../pages/repositories/RepositoryDetailsPage').then(module => ({ default: module.RepositoryDetailsPage })));
const Settings = lazy(() => import('../pages/Settings').then(module => ({ default: module.Settings })));
const Login = lazy(() => import('../pages/auth/Login').then(module => ({ default: module.Login })));
const Register = lazy(() => import('../pages/auth/Register').then(module => ({ default: module.Register })));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword').then(module => ({ default: module.ForgotPassword })));
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword').then(module => ({ default: module.ResetPassword })));
const VerifyEmail = lazy(() => import('../pages/auth/VerifyEmail').then(module => ({ default: module.VerifyEmail })));
const OAuthCallback = lazy(() => import('../pages/auth/OAuthCallback').then(module => ({ default: module.OAuthCallback })));
const AnalysisDashboard = lazy(() => import('../pages/analysis/AnalysisDashboard').then(module => ({ default: module.AnalysisDashboard })));
const AnalysisReportPage = lazy(() => import('../pages/AnalysisReportPage').then(module => ({ default: module.AnalysisReportPage })));
const ResumePage = lazy(() => import('../pages/resume/ResumePage').then(module => ({ default: module.ResumePage })));
const SkillGapPage = lazy(() => import('../pages/skillgap/SkillGapPage').then(module => ({ default: module.SkillGapPage })));
const RoadmapPage = lazy(() => import('../pages/roadmap/RoadmapPage').then(module => ({ default: module.RoadmapPage })));
const InterviewPage = lazy(() => import('../pages/interview/InterviewPage').then(module => ({ default: module.InterviewPage })));
const UserProfile = lazy(() => import('../pages/profile/UserProfile').then(module => ({ default: module.UserProfile })));

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="flex h-screen w-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
    {children}
  </Suspense>
);

const router = createBrowserRouter([
  // Public routes (no auth required)
  {
    path: '/',
    element: <SuspenseWrapper><LandingPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/features',
    element: <SuspenseWrapper><FeaturesPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/how-it-works',
    element: <SuspenseWrapper><HowItWorksPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/integrations',
    element: <SuspenseWrapper><IntegrationsPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/changelog',
    element: <SuspenseWrapper><ChangelogPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/docs',
    element: <SuspenseWrapper><DocsPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/blog',
    element: <SuspenseWrapper><BlogPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/help',
    element: <SuspenseWrapper><HelpCenterPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/privacy',
    element: <SuspenseWrapper><LegalPage title="Privacy Policy" /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/terms',
    element: <SuspenseWrapper><LegalPage title="Terms of Service" /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/cookies',
    element: <SuspenseWrapper><LegalPage title="Cookie Policy" /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: '/public',
    element: <SuspenseWrapper><LandingPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  
  // Auth routes (only accessible if NOT authenticated)
  {
    element: <PublicRoute />,
    children: [
      { path: '/login', element: <SuspenseWrapper><Login /></SuspenseWrapper> },
      { path: '/register', element: <SuspenseWrapper><Register /></SuspenseWrapper> },
      { path: '/forgot-password', element: <SuspenseWrapper><ForgotPassword /></SuspenseWrapper> },
      { path: '/reset-password', element: <SuspenseWrapper><ResetPassword /></SuspenseWrapper> },
      { path: '/verify-email', element: <SuspenseWrapper><VerifyEmail /></SuspenseWrapper> },
      { path: '/oauth/callback', element: <SuspenseWrapper><OAuthCallback /></SuspenseWrapper> },
    ],
  },
  
  // Protected routes (only accessible if authenticated)
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
        children: [
          { path: '/dashboard', element: <SuspenseWrapper><Dashboard /></SuspenseWrapper> },
          { path: '/repositories', element: <SuspenseWrapper><RepositoriesPage /></SuspenseWrapper> },
          { path: '/repositories/:id', element: <SuspenseWrapper><RepositoryDetailsPage /></SuspenseWrapper> },
          { path: '/analysis', element: <SuspenseWrapper><AnalysisDashboard /></SuspenseWrapper> },
          { path: '/analysis/:jobId', element: <SuspenseWrapper><AnalysisReportPage /></SuspenseWrapper> },
          { path: '/resume', element: <SuspenseWrapper><ResumePage /></SuspenseWrapper> },
          { path: '/skill-gap', element: <SuspenseWrapper><SkillGapPage /></SuspenseWrapper> },
          { path: '/roadmap', element: <SuspenseWrapper><RoadmapPage /></SuspenseWrapper> },
          { path: '/interview', element: <SuspenseWrapper><InterviewPage /></SuspenseWrapper> },
          { path: '/profile', element: <SuspenseWrapper><UserProfile /></SuspenseWrapper> },
          { path: '/settings', element: <SuspenseWrapper><Settings /></SuspenseWrapper> },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
