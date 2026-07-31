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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Spinner } from '@/components/ui/spinner';
import { PasswordInput } from '@/components/ui/password-input';
import { Link, useNavigate } from 'react-router-dom';
import { Terminal, AlertCircle } from 'lucide-react';
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
    } catch (err: unknown) {
      if (err instanceof Error) {
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
      <Card className="w-full max-w-md mx-auto bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/75 border-muted/60 shadow-xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your details below to create your account and get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <Alert variant="error">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="fullName" className={errors.fullName ? "text-destructive" : ""}>
                Full Name
              </Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                autoComplete="name"
                disabled={isLoading}
                {...register('fullName')}
                className={errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.fullName && (
                <p className="text-sm font-medium text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
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
                className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm font-medium text-destructive">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className={errors.password ? "text-destructive" : ""}>
                Password
              </Label>
              <PasswordInput
                id="password"
                placeholder="Create a password"
                autoComplete="new-password"
                disabled={isLoading}
                {...register('password')}
                className={errors.password ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {/* Password Strength Indicator */}
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
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
                Confirm Password
              </Label>
              <PasswordInput
                id="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
                disabled={isLoading}
                {...register('confirmPassword')}
                className={errors.confirmPassword ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-sm font-medium text-destructive">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox 
                id="acceptTerms" 
                disabled={isLoading}
                onCheckedChange={(checked) => setValue('acceptTerms', checked === true, { shouldValidate: true })}
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="acceptTerms"
                  className={`text-sm font-medium ${errors.acceptTerms ? "text-destructive" : "text-muted-foreground"}`}
                >
                  I accept the terms and conditions
                </Label>
                {errors.acceptTerms && (
                  <p className="text-sm text-destructive">{errors.acceptTerms.message}</p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full mt-2" disabled={isLoading}>
              {isLoading && <Spinner className="mr-2 h-4 w-4" />}
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
            
            <div className="relative pt-2">
              <div className="absolute inset-0 flex items-center pt-2">
                <span className="w-full border-t border-muted-foreground/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase pt-2">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <Button
              type="button"
              variant="outline"
              className="w-full"
              disabled={isLoading}
            >
              <Terminal className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-muted/50 p-6">
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
