import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, XCircle, MailCheck } from 'lucide-react';
import { AuthLayout } from '@/layouts/AuthLayout';

type VerificationStatus = 'verifying' | 'success' | 'expired' | 'invalid';

export function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<VerificationStatus>('verifying');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const verifyToken = async () => {
      if (!token) {
        setStatus('invalid');
        return;
      }

      // Mock API call to verify token
      timeoutId = setTimeout(() => {
        if (token === 'expired') {
          setStatus('expired');
        } else if (token === 'invalid') {
          setStatus('invalid');
        } else {
          // Assume success for any other token in this mock
          setStatus('success');
        }
      }, 1500);
    };

    verifyToken();

    return () => clearTimeout(timeoutId);
  }, [token]);

  return (
    <AuthLayout>
      <Card className="w-full max-w-md mx-auto bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75 border-muted/60 shadow-xl text-center">
        <CardHeader className="space-y-2 pb-4">
          <div className="flex justify-center mb-4">
            {status === 'verifying' && (
              <div className="flex items-center justify-center mb-2">
                <Spinner className="h-10 w-10 text-primary" />
              </div>
            )}
            {status === 'success' && (
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-500" strokeWidth={1.5} />
              </div>
            )}
            {status === 'expired' && (
              <div className="flex items-center justify-center mb-2">
                <XCircle className="h-12 w-12 text-yellow-600 dark:text-yellow-500" strokeWidth={1.5} />
              </div>
            )}
            {status === 'invalid' && (
              <div className="flex items-center justify-center mb-2">
                <XCircle className="h-12 w-12 text-destructive" strokeWidth={1.5} />
              </div>
            )}
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            {status === 'verifying' && 'Verifying Email...'}
            {status === 'success' && 'Email Verified!'}
            {status === 'expired' && 'Link Expired'}
            {status === 'invalid' && 'Invalid Link'}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base">
            {status === 'verifying' && 'Please wait while we verify your email address.'}
            {status === 'success' && 'Your email address has been successfully verified. You can now access all features of your account.'}
            {status === 'expired' && 'The verification link you used has expired. Please request a new one.'}
            {status === 'invalid' && 'The verification link is invalid or malformed. Please check the link and try again.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {status === 'success' && (
            <Button asChild className="w-full">
              <Link to="/login">Continue to Login</Link>
            </Button>
          )}
          {status === 'expired' && (
            <Button className="w-full">
              <MailCheck className="mr-2 h-4 w-4" />
              Resend Verification Email
            </Button>
          )}
          {status === 'invalid' && (
            <Button asChild className="w-full">
              <Link to="/register">Back to Register</Link>
            </Button>
          )}
        </CardContent>
        {status !== 'success' && (
          <CardFooter className="flex justify-center border-t border-muted/50 p-6">
            <p className="text-sm text-muted-foreground">
              Need help?{' '}
              <Link to="/support" className="font-medium text-primary hover:underline">
                Contact Support
              </Link>
            </p>
          </CardFooter>
        )}
      </Card>
    </AuthLayout>
  );
}
