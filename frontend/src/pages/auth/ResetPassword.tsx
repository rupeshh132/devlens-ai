import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Spinner } from '@/components/ui/spinner';
import { PasswordInput } from '@/components/ui/password-input';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { AuthLayout } from '@/layouts/AuthLayout';

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const passwordValue = watch('password');

  useEffect(() => {
    if (!token) {
      setError('Invalid or missing reset token.');
    }
  }, [token]);

  useEffect(() => {
    if (!passwordValue) {
      setPasswordStrength(0);
      return;
    }
    let strength = 0;
    if (passwordValue.length >= 8) strength += 20;
    if (/[A-Z]/.test(passwordValue)) strength += 20;
    if (/[a-z]/.test(passwordValue)) strength += 20;
    if (/[0-9]/.test(passwordValue)) strength += 20;
    if (/[^A-Za-z0-9]/.test(passwordValue)) strength += 20;
    setPasswordStrength(strength);
  }, [passwordValue]);

  const onSubmit = async () => {
    if (!token) {
      setError('Invalid reset token.');
      return;
    }

    setError('');
    setIsSuccess(false);
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate success
      setIsSuccess(true);
      
      // Redirect after a short delay
      setTimeout(() => navigate('/login'), 2000);
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 20) return 'bg-destructive';
    if (passwordStrength <= 60) return 'bg-yellow-500';
    if (passwordStrength <= 80) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <AuthLayout>
      <Card className="w-full max-w-md mx-auto bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75 border-muted/60 shadow-xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tight">Reset Password</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your new password below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <Alert variant="success" className="mb-4">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Password Reset Successfully</AlertTitle>
              <AlertDescription>
                Your password has been updated. Redirecting to login...
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {error && (
                <Alert variant="error">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                  New Password
                </Label>
                <PasswordInput
                  id="password"
                  placeholder="Create a new password"
                  autoComplete="new-password"
                  disabled={isLoading || !token}
                  {...register('password')}
                  className={errors.password ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden mt-2">
                  <div 
                    className={`h-full transition-all duration-300 ${getStrengthColor()}`} 
                    style={{ width: `${passwordStrength}%` }}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm font-medium text-destructive">{errors.password.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className={errors.confirmPassword ? "text-destructive" : ""}>
                  Confirm New Password
                </Label>
                <PasswordInput
                  id="confirmPassword"
                  placeholder="Confirm your new password"
                  autoComplete="new-password"
                  disabled={isLoading || !token}
                  {...register('confirmPassword')}
                  className={errors.confirmPassword ? "border-destructive focus-visible:ring-destructive" : ""}
                />
                {errors.confirmPassword && (
                  <p className="text-sm font-medium text-destructive">{errors.confirmPassword.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full mt-4" disabled={isLoading || !token}>
                {isLoading && <Spinner className="mr-2 h-4 w-4" />}
                {isLoading ? 'Resetting password...' : 'Reset Password'}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center border-t border-muted/50 p-6">
          <p className="text-sm text-muted-foreground text-center">
            Remember your password?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Back to login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
