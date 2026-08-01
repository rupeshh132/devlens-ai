import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { ProtectedRoute } from '../features/auth/components/ProtectedRoute';
import { PublicRoute } from '../features/auth/components/PublicRoute';
import { Loader2 } from 'lucide-react';

const NotFound = lazy(() => import('../pages/NotFound').then(module => ({ default: module.NotFound })));
const LandingPage = lazy(() => import('../pages/LandingPage').then(module => ({ default: module.LandingPage })));
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
          { path: '/settings', element: <SuspenseWrapper><Settings /></SuspenseWrapper> },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
