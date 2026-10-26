import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { ProtectedRoute } from '../features/auth/components/ProtectedRoute';
import { PublicRoute } from '../features/auth/components/PublicRoute';
import { AppLayout } from '../layouts/AppLayout';
import { LearnLayout } from '../layouts/LearnLayout';
import { NotFound } from '../pages/NotFound';

const LandingPage = lazy(() => import('../pages/LandingPage').then(module => ({ default: module.LandingPage })));
const FeaturesPage = lazy(() => import('../pages/FeaturesPage').then(module => ({ default: module.FeaturesPage })));
const HowItWorksPage = lazy(() => import('../pages/public/HowItWorksPage').then(module => ({ default: module.HowItWorksPage })));
const PricingPage = lazy(() => import('../pages/public/PricingPage').then(module => ({ default: module.PricingPage })));
const DevPricingPage = lazy(() => import('../pages/public/DevPricingPage').then(module => ({ default: module.DevPricingPage })));
const FAQPage = lazy(() => import('../pages/public/FAQPage').then(module => ({ default: module.FAQPage })));
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
const CoursePlayerPage = lazy(() => import('../pages/CoursePlayerPage').then(module => ({ default: module.CoursePlayerPage })));
const CourseLibraryPage = lazy(() => import('../pages/lms/CourseLibraryPage').then(module => ({ default: module.CourseLibraryPage })));
const LeaderboardPage = lazy(() => import('../pages/lms/LeaderboardPage').then(module => ({ default: module.LeaderboardPage })));
const CertificatesPage = lazy(() => import('../pages/lms/CertificatesPage').then(module => ({ default: module.CertificatesPage })));
const CertificateViewPage = lazy(() => import('../pages/lms/CertificateViewPage').then(module => ({ default: module.CertificateViewPage })));
const LearnLandingPage = lazy(() => import('../pages/learn/LearnLandingPage').then(module => ({ default: module.LearnLandingPage })));
const LearnCategoryPage = lazy(() => import('../pages/learn/LearnCategoryPage').then(module => ({ default: module.LearnCategoryPage })));
const LearnLogin = lazy(() => import('../pages/learn/auth/LearnLogin').then(module => ({ default: module.LearnLogin })));
const LearnRegister = lazy(() => import('../pages/learn/auth/LearnRegister').then(module => ({ default: module.LearnRegister })));
const StudyPlanDashboard = lazy(() => import('../pages/learn/dashboard/StudyPlanDashboard').then(module => ({ default: module.StudyPlanDashboard })));
const TestsPage = lazy(() => import('../pages/learn/dashboard/TestsPage').then(module => ({ default: module.TestsPage })));
const ActiveTestPage = lazy(() => import('../pages/learn/dashboard/ActiveTestPage').then(module => ({ default: module.ActiveTestPage })));
const SyllabusPage = lazy(() => import('../pages/learn/dashboard/SyllabusPage').then(module => ({ default: module.SyllabusPage })));
const PyqHubPage = lazy(() => import('../pages/learn/dashboard/PyqHubPage').then(module => ({ default: module.PyqHubPage })));
const PersonalLockerPage = lazy(() => import('../pages/learn/dashboard/PersonalLockerPage').then(module => ({ default: module.PersonalLockerPage })));
const TopicStudyPage = lazy(() => import('../pages/learn/dashboard/TopicStudyPage').then(module => ({ default: module.TopicStudyPage })));
const LearnLeaderboardPage = lazy(() => import('../pages/learn/dashboard/LeaderboardPage').then(module => ({ default: module.LeaderboardPage })));
const StudentProfilePage = lazy(() => import('../pages/learn/dashboard/StudentProfilePage').then(module => ({ default: module.StudentProfilePage })));
const LearnPricingPage = lazy(() => import('../pages/learn/dashboard/LearnPricingPage').then(module => ({ default: module.LearnPricingPage })));
const AdminLayout = lazy(() => import('../layouts/AdminLayout').then(module => ({ default: module.AdminLayout })));
const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboardPage').then(module => ({ default: module.AdminDashboardPage })));
const AdminCoursesPage = lazy(() => import('../pages/admin/AdminCoursesPage').then(module => ({ default: module.AdminCoursesPage })));
const AdminSubmissionsPage = lazy(() => import('../pages/admin/AdminSubmissionsPage').then(module => ({ default: module.AdminSubmissionsPage })));
const AdminLeaderboardPage = lazy(() => import('../pages/admin/AdminLeaderboardPage').then(module => ({ default: module.AdminLeaderboardPage })));
const AdminStudentsPage = lazy(() => import('../pages/admin/AdminStudentsPage').then(module => ({ default: module.AdminStudentsPage })));
const AdminBillingPage = lazy(() => import('../pages/admin/AdminBillingPage').then(module => ({ default: module.AdminBillingPage })));
const ContentImportPage = lazy(() => import('../pages/learn/admin/ContentImportPage').then(module => ({ default: module.ContentImportPage })));
const ContentUploadPage = lazy(() => import('../pages/learn/admin/ContentUploadPage').then(module => ({ default: module.ContentUploadPage })));
const ContentDashboardPage = lazy(() => import('../pages/learn/admin/ContentDashboardPage').then(module => ({ default: module.ContentDashboardPage })));
const CurriculumBuilderPage = lazy(() => import('../pages/learn/admin/CurriculumBuilderPage').then(module => ({ default: module.CurriculumBuilderPage })));
const AdminQuestionsPage = lazy(() => import('../pages/learn/admin/AdminQuestionsPage').then(module => ({ default: module.AdminQuestionsPage })));
const AdminPyqManagePage = lazy(() => import('../pages/learn/admin/AdminPyqManagePage').then(module => ({ default: module.AdminPyqManagePage })));
const AdminAiTelemetryPage = lazy(() => import('../pages/admin/AdminAiTelemetryPage').then(module => ({ default: module.AdminAiTelemetryPage })));
const AdminAffiliatesPage = lazy(() => import('../pages/admin/AdminAffiliatesPage').then(module => ({ default: module.AdminAffiliatesPage })));
const AdminUsersPage = lazy(() => import('../pages/admin/AdminUsersPage').then(module => ({ default: module.AdminUsersPage })));
import { AdminRoute } from '../features/auth/components/AdminRoute';
import { FocusModeProvider } from '../features/lms/context/FocusModeContext';

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="flex h-screen w-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
    {children}
  </Suspense>
);

const router = createBrowserRouter([
  // Public routes (no auth required)
  { path: '/', element: <SuspenseWrapper><LandingPage /></SuspenseWrapper>, errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper> },
  { path: '/leaderboard', element: <SuspenseWrapper><LeaderboardPage /></SuspenseWrapper>, errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper> },
  { path: '/features', element: <SuspenseWrapper><FeaturesPage /></SuspenseWrapper> },
  { path: '/how-it-works', element: <SuspenseWrapper><HowItWorksPage /></SuspenseWrapper> },
  { path: '/pricing', element: <SuspenseWrapper><PricingPage /></SuspenseWrapper> },
  { path: '/dev-pricing', element: <SuspenseWrapper><DevPricingPage /></SuspenseWrapper> },
  { path: '/faq', element: <SuspenseWrapper><FAQPage /></SuspenseWrapper> },
  { path: '/integrations', element: <SuspenseWrapper><IntegrationsPage /></SuspenseWrapper> },
  { path: '/changelog', element: <SuspenseWrapper><ChangelogPage /></SuspenseWrapper> },
  { path: '/docs', element: <SuspenseWrapper><DocsPage /></SuspenseWrapper> },
  { path: '/blog', element: <SuspenseWrapper><BlogPage /></SuspenseWrapper> },
  { path: '/help', element: <SuspenseWrapper><HelpCenterPage /></SuspenseWrapper> },
  { path: '/privacy', element: <SuspenseWrapper><LegalPage title="Privacy Policy" /></SuspenseWrapper> },
  { path: '/terms', element: <SuspenseWrapper><LegalPage title="Terms of Service" /></SuspenseWrapper> },
  { path: '/cookies', element: <SuspenseWrapper><LegalPage title="Cookie Policy" /></SuspenseWrapper> },
  { path: '/public', element: <SuspenseWrapper><LandingPage /></SuspenseWrapper> },
  
  // Auth routes
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
  
  // Protected routes
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
          { path: '/courses', element: <SuspenseWrapper><CourseLibraryPage /></SuspenseWrapper> },
          { path: '/certificates', element: <SuspenseWrapper><CertificatesPage /></SuspenseWrapper> },
          { path: '/profile', element: <SuspenseWrapper><UserProfile /></SuspenseWrapper> },
          { path: '/settings', element: <SuspenseWrapper><Settings /></SuspenseWrapper> },
        ],
      },
      // Fullscreen Player & Certificate
      {
        path: '/course/:id/play',
        element: (
          <SuspenseWrapper>
            <FocusModeProvider>
              <CoursePlayerPage />
            </FocusModeProvider>
          </SuspenseWrapper>
        ),
      },
      {
        path: '/certificate/:id',
        element: <SuspenseWrapper><CertificateViewPage /></SuspenseWrapper>,
      }
    ],
  },
  
  // Admin routes
  {
    element: <AdminRoute />,
    children: [
      {
        path: '/admin',
        element: <SuspenseWrapper><AdminLayout /></SuspenseWrapper>,
        errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
        children: [
          { path: 'dashboard', element: <SuspenseWrapper><AdminDashboardPage /></SuspenseWrapper> },
          { path: 'students', element: <SuspenseWrapper><AdminStudentsPage /></SuspenseWrapper> },
          { path: 'billing', element: <SuspenseWrapper><AdminBillingPage /></SuspenseWrapper> },
          { path: 'courses', element: <SuspenseWrapper><AdminCoursesPage /></SuspenseWrapper> },
          { path: 'submissions', element: <SuspenseWrapper><AdminSubmissionsPage /></SuspenseWrapper> },
          { path: 'gamification', element: <SuspenseWrapper><AdminLeaderboardPage /></SuspenseWrapper> },
          { path: 'learn/status', element: <SuspenseWrapper><ContentDashboardPage /></SuspenseWrapper> },
          { path: 'learn/curriculum', element: <SuspenseWrapper><CurriculumBuilderPage /></SuspenseWrapper> },
          { path: 'learn/questions', element: <SuspenseWrapper><AdminQuestionsPage /></SuspenseWrapper> },
          { path: 'learn/import', element: <SuspenseWrapper><ContentImportPage /></SuspenseWrapper> },
          { path: 'learn/upload', element: <SuspenseWrapper><ContentUploadPage /></SuspenseWrapper> },
          { path: 'learn/pyq', element: <SuspenseWrapper><AdminPyqManagePage /></SuspenseWrapper> },
          { path: 'ai', element: <SuspenseWrapper><AdminAiTelemetryPage /></SuspenseWrapper> },
          { path: 'affiliates', element: <SuspenseWrapper><AdminAffiliatesPage /></SuspenseWrapper> },
          { path: 'users', element: <SuspenseWrapper><AdminUsersPage /></SuspenseWrapper> },
          { path: 'developers', element: <SuspenseWrapper><AdminUsersPage /></SuspenseWrapper> },
        ]
      }
    ]
  },
  
  // PrepLens Learn Routes
  {
    path: '/learn',
    element: <LearnLayout />,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
    children: [
      { index: true, element: <SuspenseWrapper><LearnLandingPage /></SuspenseWrapper> },
        { path: 'category/:categoryId', element: <SuspenseWrapper><LearnCategoryPage /></SuspenseWrapper> },
      { path: 'plan', element: <SuspenseWrapper><StudyPlanDashboard /></SuspenseWrapper> },
      { path: 'tests', element: <SuspenseWrapper><TestsPage /></SuspenseWrapper> },
      { path: 'syllabus', element: <SuspenseWrapper><SyllabusPage /></SuspenseWrapper> },
      { path: 'pyq', element: <SuspenseWrapper><PyqHubPage /></SuspenseWrapper> },
      { path: 'locker', element: <SuspenseWrapper><PersonalLockerPage /></SuspenseWrapper> },
      { path: 'topic/:topicId', element: <SuspenseWrapper><TopicStudyPage /></SuspenseWrapper> },
      { path: 'leaderboard', element: <SuspenseWrapper><LearnLeaderboardPage /></SuspenseWrapper> },
        { path: 'profile', element: <SuspenseWrapper><StudentProfilePage /></SuspenseWrapper> },
        { path: 'pricing', element: <SuspenseWrapper><LearnPricingPage /></SuspenseWrapper> }
    ]
  },
  { path: '/learn/test/:testId', element: <SuspenseWrapper><ActiveTestPage /></SuspenseWrapper> },
  { path: '/learn/login', element: <SuspenseWrapper><LearnLogin /></SuspenseWrapper> },
  { path: '/learn/register', element: <SuspenseWrapper><LearnRegister /></SuspenseWrapper> }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

