import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, AlertCircle } from 'lucide-react';
import { learnApi } from '../../../lib/learn-api';
import { getStreakData } from '../../../lib/lockerStorage';

export function LearnLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await learnApi.post('/auth/login', { email, password });
      const { token, examGoal, fullName, email: userEmail, subscriptionPlan } = response.data;
      
      // Isolate Student Token & Data
      localStorage.setItem('learn_token', token);
      if (examGoal) localStorage.setItem('learn_exam_goal', examGoal);
      if (subscriptionPlan) localStorage.setItem('learn_subscription_plan', subscriptionPlan);
      if (fullName) localStorage.setItem('learn_user_name', fullName);
      if (userEmail) localStorage.setItem('learn_user_email', userEmail);
      else localStorage.setItem('learn_user_email', email); // fallback
      
      // Broadcast logged-in student's isolated streak immediately
      const freshStreak = getStreakData();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('preplens_streak_updated', { detail: freshStreak }));
      }

      // Redirect to Student Dashboard
      navigate('/learn/plan');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      {/* Switcher Banner */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6 bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between shadow-lg">
        <div>
          <p className="text-sm font-semibold text-white">Software Developer?</p>
          <p className="text-xs text-slate-300">Sign in to PrepLens.</p>
        </div>
        <Link to="/login" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 bg-white text-slate-900 hover:bg-slate-100 h-8 px-3">
          Developer Login
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
            <BookOpen className="h-7 w-7 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          Welcome back to PrepLens Learn
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link to="/learn/register" className="font-medium text-blue-600 hover:text-blue-500">
            Start preparing for free
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700">Email address</label>
              <div className="mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign in to Learn'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 border-t border-slate-200 pt-6">
            <div className="text-center">
              <p className="text-xs text-slate-500">
                Developer looking for internship?{' '}
                <Link to="/login" className="font-medium text-slate-900 hover:underline">
                  Go to PrepLens Portal
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
