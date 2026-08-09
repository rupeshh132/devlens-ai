import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LoadingOverlay } from '@/components/layout/LoadingOverlay';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import { AuthLayout } from '@/layouts/AuthLayout';
import { useAuth } from '@/features/auth/hooks/useAuth';

export function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth(); // We'll just mock logging them in using the auth context
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const token = searchParams.get('token');
      const errorParam = searchParams.get('error');

      if (errorParam) {
        setIsLoading(false);
        setError(`Authentication failed: ${errorParam}`);
        return;
      }

      if (!token) {
        setIsLoading(false);
        setError('No authorization token found in the request.');
        return;
      }

      try {
        localStorage.setItem('devlens_access_token', token);
        
        // Force a page reload to '/dashboard' so AuthProvider picks up the new token
        window.location.href = '/dashboard';
      } catch {
        setIsLoading(false);
        setError('Failed to authenticate with provider. Please try again.');
      }
    };

    handleOAuthCallback();
  }, [searchParams, navigate, login]);

  if (isLoading) {
    return <LoadingOverlay message="Authenticating..." fullscreen />;
  }

  return (
    <AuthLayout>
      <Card className="w-full max-w-md mx-auto bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75 border-muted/60 shadow-xl text-center">
        <CardHeader className="space-y-2 pb-4">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center mb-2">
              <XCircle className="h-12 w-12 text-destructive" strokeWidth={1.5} />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Authentication Failed</CardTitle>
          <CardDescription className="text-muted-foreground text-base">
            {error || 'An unexpected error occurred during authentication.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => navigate('/login')} className="w-full">
            Back to Login
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-muted/50 p-6">
          <p className="text-sm text-muted-foreground">
            Having trouble?{' '}
            <a href="/support" className="font-medium text-primary hover:underline">
              Contact Support
            </a>
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
