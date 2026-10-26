import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Trophy, Play, CheckCircle, Search, Loader2, Lock } from 'lucide-react';
import { learnApi } from '../../../lib/learn-api';
import { usePremium } from '../../../hooks/usePremium';
import { PaywallModal } from '../../../components/learn/PaywallModal';

interface MockTest {
  id: string;
  title: string;
  durationMins: number;
  totalMarks: number;
  free: boolean;
  taken: boolean;
  score?: number;
}

const FREE_TEST_LIMIT = 2;

export function TestsPage() {
  const navigate = useNavigate();
  const [mockTests, setMockTests] = useState<MockTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const { isPremium, loading: premiumLoading } = usePremium();

  const [examGoal, setExamGoal] = useState<string>(() => localStorage.getItem('learn_exam_goal') || 'Your Target Exam');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const profileRes = await learnApi.get('/profile');
        if (profileRes.data?.examGoal) {
          setExamGoal(profileRes.data.examGoal);
          localStorage.setItem('learn_exam_goal', profileRes.data.examGoal);
        }
      } catch (e) {}
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await learnApi.get('/tests/my-tests');
        setMockTests(response.data);
      } catch (err) {
        console.error('Failed to fetch mock tests', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  const handleStart = (test: MockTest, index: number) => {
    // Free users can only take first FREE_TEST_LIMIT tests
    const isLocked = !isPremium && !test.free && index >= FREE_TEST_LIMIT;
    if (isLocked) {
      setPaywallOpen(true);
      return;
    }
    navigate(`/learn/test/${test.id}`);
  };

  const isTestLocked = (test: MockTest, index: number) =>
    !isPremium && !test.free && index >= FREE_TEST_LIMIT;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        featureName="Premium Mock Tests"
        featureDescription="Unlock all mock tests and get a detailed AI Weakness Report after every attempt. Free users get access to the first 2 tests only."
      />

      <div>
        <h1 className="text-3xl font-bold text-slate-900">Mock Tests for {examGoal}</h1>
        <p className="text-slate-600 mt-2">Evaluate your preparation with real exam-like conditions.</p>
      </div>

      {/* Free user notice */}
      {!premiumLoading && !isPremium && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <p className="text-amber-800 font-semibold text-sm">Free plan: First {FREE_TEST_LIMIT} tests unlocked</p>
            <p className="text-amber-700 text-xs mt-0.5">Upgrade to Premium to unlock all tests + AI Weakness Detector report.</p>
          </div>
          <button
            onClick={() => navigate('/learn/pricing')}
            className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex-shrink-0"
          >
            Upgrade →
          </button>
        </div>
      )}

      {loading || premiumLoading ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-500">
          <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-600" />
          <p>Loading your mock tests...</p>
        </div>
      ) : mockTests.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
          <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No Tests Available Yet</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            We are currently adding high-quality mock tests for <strong>{examGoal}</strong>. Please check back later!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test, index) => {
            const locked = isTestLocked(test, index);
            return (
              <div
                key={test.id}
                className={`bg-white rounded-2xl border shadow-sm flex flex-col overflow-hidden transition-shadow ${
                  locked ? 'border-slate-200 opacity-75' : 'border-slate-200 hover:shadow-md'
                }`}
              >
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg ${
                      locked
                        ? 'bg-slate-100 text-slate-500'
                        : test.free
                        ? 'bg-green-100 text-green-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      <span className="text-xs font-bold uppercase flex items-center gap-1">
                        {locked ? (
                          <><Lock className="w-3 h-3" /> Premium</>
                        ) : test.free ? 'Free' : 'Premium'}
                      </span>
                    </div>
                    {test.taken && (
                      <div className="flex items-center text-green-600 text-sm font-semibold">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Completed
                      </div>
                    )}
                  </div>

                  <h3 className={`text-xl font-bold leading-tight mb-4 ${locked ? 'text-slate-400' : 'text-slate-900'}`}>
                    {test.title}
                  </h3>

                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center text-slate-600 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {test.durationMins} Minutes
                    </div>
                    <div className="flex items-center text-slate-600 text-sm">
                      <Trophy className="w-4 h-4 mr-2" />
                      {test.totalMarks} Marks Max
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-slate-50 p-4">
                  {test.taken && !locked ? (
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Highest Score</p>
                        <p className="text-lg font-bold text-slate-900">{test.score} / {test.totalMarks}</p>
                      </div>
                      <button className="text-blue-600 text-sm font-medium hover:underline">View Analysis</button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleStart(test, index)}
                      className={`w-full flex justify-center items-center py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                        locked
                          ? 'bg-slate-200 text-slate-500 cursor-pointer hover:bg-slate-300'
                          : 'text-white bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {locked ? (
                        <><Lock className="w-4 h-4 mr-2" /> Unlock with Premium</>
                      ) : (
                        <><Play className="w-4 h-4 mr-2" fill="currentColor" /> Start Test Now</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
