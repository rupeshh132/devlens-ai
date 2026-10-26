import { Link, useRouteError } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFound() {
  const error: any = useRouteError();
  if (error) {
    console.error("React Router caught error:", error);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="flex flex-col items-center text-center space-y-6 max-w-md">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50" />
          <h1 className="text-9xl font-black tracking-tighter text-foreground relative">404</h1>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Page Not Found</h2>
          <p className="text-muted-foreground font-medium">The page you are looking for does not exist or has been moved.</p>
          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200 text-left overflow-auto max-h-40 font-mono">
              <p className="font-bold">Debug Error:</p>
              <p>{error.statusText || error.message || JSON.stringify(error)}</p>
            </div>
          )}
        </div>
        <Button asChild size="lg" className="mt-8 rounded-full">
          <Link to="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
