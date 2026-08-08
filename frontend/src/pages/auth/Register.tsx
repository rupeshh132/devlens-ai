import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Spinner } from '@/components/ui/spinner';
import { PasswordInput } from '@/components/ui/password-input';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { AuthLayout } from '@/layouts/AuthLayout';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function Register() {
  const { register: registerAuth } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const passwordValue = watch('password');

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

  const onSubmit = async (data: RegisterFormValues) => {
    setError('');
    setIsLoading(true);
    try {
      await registerAuth({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
      navigate('/dashboard');
    } catch (err: any) {
      if (err.isAxiosError && err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.status === 409) {
        setError('Email already exists.');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred during registration.');
      }
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
      <Card className="w-full max-w-md mx-auto bg-transparent border-none shadow-none">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Enter your details below to create your account and get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {error && (
              <Alert variant="error" className="py-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-xs">{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-1">
              <Label htmlFor="fullName" className={errors.fullName ? "text-destructive" : ""}>
                Full Name
              </Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                autoComplete="name"
                disabled={isLoading}
                {...register('fullName')}
                className={`h-9 ${errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""}`}
              />
              {errors.fullName && (
                <p className="text-[11px] font-medium text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                disabled={isLoading}
                {...register('email')}
                className={`h-9 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
              />
              {errors.email && (
                <p className="text-[11px] font-medium text-destructive">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                Password
              </Label>
              <PasswordInput
                id="password"
                placeholder="Create a password"
                autoComplete="new-password"
                disabled={isLoading}
                {...register('password')}
                className={`h-9 ${errors.password ? "border-destructive focus-visible:ring-destructive" : ""}`}
              />
              {/* Password Strength Indicator */}
              <div className="h-1 w-full bg-secondary rounded-full overflow-hidden mt-1">
                <div 
                  className={`h-full transition-all duration-300 ${getStrengthColor()}`} 
                  style={{ width: `${passwordStrength}%` }}
                />
              </div>
              {errors.password && (
                <p className="text-[11px] font-medium text-destructive">{errors.password.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword" className={errors.confirmPassword ? "text-destructive" : ""}>
                Confirm Password
              </Label>
              <PasswordInput
                id="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
                disabled={isLoading}
                {...register('confirmPassword')}
                className={`h-9 ${errors.confirmPassword ? "border-destructive focus-visible:ring-destructive" : ""}`}
              />
              {errors.confirmPassword && (
                <p className="text-[11px] font-medium text-destructive">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex items-start space-x-2 pt-1">
              <Checkbox 
                id="acceptTerms" 
                disabled={isLoading}
                onCheckedChange={(checked) => setValue('acceptTerms', checked === true, { shouldValidate: true })}
                className="mt-0.5"
              />
              <div className="grid gap-1 leading-none">
                <Label
                  htmlFor="acceptTerms"
                  className={`text-sm font-medium ${errors.acceptTerms ? "text-destructive" : "text-muted-foreground"}`}
                >
                  I accept the terms and conditions
                </Label>
                {errors.acceptTerms && (
                  <p className="text-[11px] text-destructive">{errors.acceptTerms.message}</p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full h-9 mt-1" disabled={isLoading}>
              {isLoading && <Spinner className="mr-2 h-4 w-4" />}
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
            
            <div className="relative pt-1 pb-1">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted-foreground/20" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <Button
              type="button"
              variant="outline"
              className="w-full bg-white hover:bg-gray-50 border-input/50 h-9"
              disabled={isLoading}
              onClick={() => {
                const backendBase = (import.meta.env.VITE_API_URL || 
                  'http://localhost:8080/api/v1')
                  .replace('/api/v1', '');
                
                window.location.href = 
                  `${backendBase}/oauth2/authorization/github`;
              }}
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="currentColor">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              Continue with GitHub
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-muted/50 p-4">
          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
