import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-secondary-foreground mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover">
        Go Home
      </Link>
    </div>
  );
}
