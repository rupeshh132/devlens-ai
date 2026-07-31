import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { NotFound } from '../pages/NotFound';
import { LandingPage } from '../pages/LandingPage';
import { Dashboard } from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/dashboard',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
