import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { NotFound } from '../pages/NotFound';
import { LandingPage } from '../pages/LandingPage';
import { Dashboard } from '../pages/Dashboard';
import { RepositoriesPage } from '../pages/repositories/RepositoriesPage';
import { RepositoryDetailsPage } from '../pages/repositories/RepositoryDetailsPage';
import { Settings } from '../pages/Settings';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import { ForgotPassword } from '../pages/auth/ForgotPassword';
import { ResetPassword } from '../pages/auth/ResetPassword';
import { VerifyEmail } from '../pages/auth/VerifyEmail';
import { OAuthCallback } from '../pages/auth/OAuthCallback';
import { AnalysisDashboard } from '../pages/analysis/AnalysisDashboard';
import { ProtectedRoute } from '../features/auth/components/ProtectedRoute';
import { PublicRoute } from '../features/auth/components/PublicRoute';

const router = createBrowserRouter([
  // Public routes (no auth required)
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/public',
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
  
  // Auth routes (only accessible if NOT authenticated)
  {
    element: <PublicRoute />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
      { path: '/reset-password', element: <ResetPassword /> },
      { path: '/verify-email', element: <VerifyEmail /> },
      { path: '/oauth/callback', element: <OAuthCallback /> },
    ],
  },
  
  // Protected routes (only accessible if authenticated)
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/repositories', element: <RepositoriesPage /> },
          { path: '/repositories/:id', element: <RepositoryDetailsPage /> },
          { path: '/analysis', element: <AnalysisDashboard /> },
          { path: '/settings', element: <Settings /> },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
