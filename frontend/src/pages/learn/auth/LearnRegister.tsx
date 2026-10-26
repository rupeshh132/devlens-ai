import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, AlertCircle } from 'lucide-react';
import { learnApi } from '../../../lib/learn-api';
import { api } from '@/lib/api';
import { getStreakData } from '../../../lib/lockerStorage';

export function LearnRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    examGoal: 'SSC CGL', // Default
    targetExamDate: '',
    otp: '',
    referralCode: ''
  });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Timer effect for OTP resend
  useEffect(() => {
    let timer: number;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSendOtp = async () => {
    if (!formData.email) {
      setError('Please enter your email first.');
      return;
    }
    if (countdown > 0) return; // Prevent spamming
    
    setError('');
    setSuccessMsg('');
    setSendingOtp(true);
    try {
      const res = await api.post('/auth/request-otp', { email: formData.email });
      setOtpSent(true);
      setCountdown(60); // Start 60-second timer
      const devOtp = res.data?.data?.otp || res.data?.otp;
      if (devOtp) {
        setFormData(prev => ({ ...prev, otp: devOtp }));
        setSuccessMsg(`OTP sent & auto-filled! [Code: ${devOtp}]`);
      } else {
        setSuccessMsg('OTP sent successfully to your email!');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setSendingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpSent) {
      setError('Please verify your email with OTP first.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await learnApi.post('/auth/register', formData);
      const { token, examGoal, fullName, email: userEmail, subscriptionPlan } = response.data;
      
      localStorage.setItem('learn_token', token);
      localStorage.setItem('learn_exam_goal', examGoal || formData.examGoal);
      if (subscriptionPlan) localStorage.setItem('learn_subscription_plan', subscriptionPlan);
      if (fullName) localStorage.setItem('learn_user_name', fullName);
      if (userEmail) localStorage.setItem('learn_user_email', userEmail);
      else localStorage.setItem('learn_user_email', formData.email);

      // Broadcast fresh user-isolated streak (0 for newly registered students)
      const freshStreak = getStreakData();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('preplens_streak_updated', { detail: freshStreak }));
      }

      navigate('/learn/plan');
    } catch (err: any) {
      // API might return a string or an object with message
      const msg = typeof err.response?.data === 'string' 
        ? err.response.data 
        : (err.response?.data?.message || 'Failed to register. Please try again.');
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, phone: digitsOnly });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      {/* Switcher Banner */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6 bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between shadow-lg">
        <div>
          <p className="text-sm font-semibold text-white">Software Developer?</p>
          <p className="text-xs text-slate-300">Join PrepLens for code analysis.</p>
        </div>
        <Link to="/register" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 bg-white text-slate-900 hover:bg-slate-100 h-8 px-3">
          Join as Developer
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
            <BookOpen className="h-7 w-7 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          Start your preparation
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/learn/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-200">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            {successMsg && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md flex items-center">
                <p className="text-sm text-green-700">{successMsg}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input
                type="text" name="fullName" required
                value={formData.fullName} onChange={handleChange}
                className="mt-1 appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-slate-700">WhatsApp / Mobile</label>
                <span className="text-xs text-slate-400 font-normal">Optional</span>
              </div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 text-sm font-medium">
                  +91
                </div>
                <input
                  type="tel"
                  name="phone"
                  maxLength={10}
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-12 pr-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <p className="mt-1 text-xs text-slate-400">Optional: For study roadmap updates & test alerts.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Email address</label>
              <div className="mt-1 flex space-x-2">
                <input
                  type="email" name="email" required disabled={otpSent}
                  value={formData.email} onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-slate-100"
                />
                <button
                  type="button"
                  disabled={sendingOtp || !formData.email || countdown > 0}
                  onClick={handleSendOtp}
                  className="inline-flex justify-center py-2 px-4 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 whitespace-nowrap"
                >
                  {sendingOtp ? 'Sending...' : (countdown > 0 ? `Resend in ${countdown}s` : (otpSent ? 'Resend' : 'Send OTP'))}
                </button>
              </div>
            </div>

            {otpSent && (
              <div>
                <label className="block text-sm font-medium text-green-700">OTP Code</label>
                <input
                  type="text" name="otp" required maxLength={6}
                  placeholder="6-digit code"
                  value={formData.otp} onChange={handleChange}
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm bg-green-50"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password" name="password" required
                value={formData.password} onChange={handleChange}
                className="mt-1 appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700">What are you preparing for?</label>
              <select 
                name="examGoal" 
                value={formData.examGoal} 
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <optgroup label="School Education (Class 9 - 12)">
                  <option value="Class 9">Class 9 (CBSE / State Boards)</option>
                  <option value="Class 10">Class 10 (Boards & Foundation)</option>
                  <option value="Class 11">Class 11 (Science / Commerce / Arts)</option>
                  <option value="Class 12">Class 12 (Boards & Entrance Prep)</option>
                </optgroup>
                <optgroup label="Competitive & Govt Exams">
                  <option value="JEE Mains">JEE Mains / Advanced (Engineering)</option>
                  <option value="NEET UG">NEET UG (Medical)</option>
                  <option value="SSC CGL">SSC CGL / CHSL (Govt Jobs)</option>
                  <option value="UPSC CSE">UPSC CSE (Civil Services)</option>
                </optgroup>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-slate-700">Referral Code</label>
                <span className="text-xs text-slate-400 font-normal">Optional</span>
              </div>
              <input
                type="text"
                name="referralCode"
                placeholder="e.g. CHINT3952"
                value={formData.referralCode}
                onChange={(e) => setFormData({ ...formData, referralCode: e.target.value.toUpperCase() })}
                className="mt-1 uppercase font-mono appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading || !otpSent}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
