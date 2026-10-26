import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/lib/api';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Lock, Play, GraduationCap, Award, Briefcase, CheckCircle2, Code } from 'lucide-react';
import { toast } from 'sonner';

interface MasterTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  techs: string[];
  capstoneProject: string;
  color: string;
}

const MASTER_TRACKS: MasterTrack[] = [
  {
    id: 'track-java-fullstack',
    title: 'Master in Full Stack Java Development',
    subtitle: 'Career Track & Virtual Internship',
    description: 'Master Core Java, Spring Boot microservices, React, and PostgreSQL. Build a production-grade E-Commerce Banking Engine and get AI-reviewed.',
    price: 999,
    techs: ['Core Java', 'Spring Boot', 'Microservices', 'React', 'PostgreSQL'],
    capstoneProject: 'Banking Microservice API Engine',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'track-devops-cloud',
    title: 'Master in DevOps & Cloud Engineering',
    subtitle: 'Career Track & Virtual Internship',
    description: 'Learn Linux, Docker, Kubernetes, AWS, Terraform, and CI/CD. Build an automated multi-cloud deployment pipeline.',
    price: 999,
    techs: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD'],
    capstoneProject: 'Automated CI/CD Kubernetes Pipeline',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'track-ai-data',
    title: 'Master in AI & Data Engineering',
    subtitle: 'Career Track & Virtual Internship',
    description: 'Build real LLM apps with Python, FastAPI, Pandas, Groq AI API, and Vector DBs (Chroma). Create an AI Document Q&A Search Engine.',
    price: 999,
    techs: ['Python', 'FastAPI', 'Pandas', 'Groq AI API', 'Vector DB'],
    capstoneProject: 'RAG Document Search Engine',
    color: 'from-purple-600 to-violet-700',
  },
  {
    id: 'track-mern-fullstack',
    title: 'Master in Full Stack MERN Development',
    subtitle: 'Career Track & Virtual Internship',
    description: 'Master MongoDB, Express.js, React 18, Node.js, and Tailwind CSS. Build a real-time SaaS Collaboration tool with WebSockets.',
    price: 999,
    techs: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    capstoneProject: 'Real-time SaaS Collaboration Tool',
    color: 'from-emerald-600 to-teal-700',
  },
];

export function CourseLibraryPage() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<MasterTrack[]>(MASTER_TRACKS);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load published courses from API
    api.get('/courses')
      .then(res => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          const serverTracks = res.data
            .filter((c: any) => c.isPublished)
            .map((c: any) => {
              const matchedTemplate = MASTER_TRACKS.find(
                t => t.title.toLowerCase().trim() === (c.title || '').toLowerCase().trim()
              );
              return {
                id: c.id,
                title: c.title,
                subtitle: matchedTemplate?.subtitle || 'Career Track & Virtual Internship',
                description: c.description || matchedTemplate?.description || '',
                price: c.price > 1000 ? Math.round(c.price / 100) : c.price,
                techs: matchedTemplate?.techs || ['Enterprise Architecture', 'Production Ready', 'AI-Reviewed'],
                capstoneProject: matchedTemplate?.capstoneProject || 'Production Capstone Project',
                color: matchedTemplate?.color || 'from-blue-600 to-indigo-700'
              };
            });
          if (serverTracks.length > 0) {
            setCourses(serverTracks);
          }
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleUnlock = async (track: MasterTrack) => {
    try {
      setProcessing(track.id);
      const res = await loadRazorpay();
      if (!res) {
        toast.error('Razorpay SDK failed to load. Are you online?');
        setProcessing(null);
        return;
      }

      // 1. Create Order on Backend
      const orderRes = await api.post('/payments/create-order', { courseId: track.id, amount: track.price });
      const orderId = orderRes.data.orderId;

      // 2. Open Razorpay Checkout Modal
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YOUR_KEY_HERE',
        amount: track.price * 100, // paise
        currency: 'INR',
        name: 'PrepLens Academy',
        description: `Unlock ${track.title}`,
        order_id: orderId,
        handler: async function (response: any) {
           try {
             await api.post('/payments/verify', {
               razorpayOrderId: response.razorpay_order_id,
               razorpayPaymentId: response.razorpay_payment_id,
               razorpaySignature: response.razorpay_signature
             });
             toast.success('Master Track & Virtual Internship Unlocked! 🎉');
             navigate(`/course/${track.id}/play`);
           } catch(err) {
             toast.error('Payment verification failed. Please contact support.');
           }
        },
        prefill: {
          name: user?.fullName || 'Developer Student',
          email: user?.email || '',
        },
        theme: { color: '#0f111a' },
        modal: {
          ondismiss: function() {
            setProcessing(null);
          }
        }
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function (response: any){
        toast.error(response.error.description);
        setProcessing(null);
      });
      rzp1.open();
    } catch(err: any) {
      if (err?.response?.status === 409) {
        toast.success('You are already enrolled!');
        navigate(`/course/${track.id}/play`);
      } else {
        // Fallback for demo when backend order API is in test mode
        toast.info(`Demo Mode: Unlocking ${track.title}`);
        navigate(`/course/${track.id}/play`);
      }
      setProcessing(null);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading PrepLens Academy Master Tracks...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">PrepLens Academy</h1>
          </div>
          <p className="text-slate-600 mt-2 text-base max-w-2xl">
            Master high-demand tech stacks through hands-on capstone projects, AI code reviews, and earn dual verified credentials.
          </p>
        </div>

        {/* Credentials Guarantee Badge */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3">
          <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Dual Credentials Included</p>
            <p className="text-xs text-amber-700">Course Cert + Virtual Internship Cert (with QR Verification)</p>
          </div>
        </div>
      </div>

      {/* Master Track Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map(track => (
          <div
            key={track.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Header Gradient */}
            <div className={`bg-gradient-to-r ${track.color || 'from-blue-600 to-indigo-600'} p-6 text-white relative`}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-extrabold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  {track.subtitle || 'Career Track'}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Premium
                </span>
              </div>
              <h3 className="text-2xl font-black mt-2 leading-tight">{track.title}</h3>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-slate-600 text-sm leading-relaxed">{track.description}</p>

              {/* Technologies Pill List */}
              {track.techs && track.techs.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1">
                    <Code className="w-3.5 h-3.5" /> Technologies Mastered
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {track.techs.map(t => (
                      <span key={t} className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Capstone Project Box */}
              {track.capstoneProject && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Capstone Project & AI Code Audit</p>
                    <p className="text-xs font-bold text-slate-900">{track.capstoneProject}</p>
                  </div>
                </div>
              )}

              {/* Dual Certificate Features */}
              <div className="space-y-1.5 border-t border-slate-100 pt-4">
                <div className="flex items-center text-xs font-semibold text-slate-700 gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Course Completion Certificate</span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Virtual Internship Experience Certificate</span>
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-700 gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>QR Code & Public Employer Verification Link</span>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                <div>
                  <span className="text-3xl font-extrabold text-slate-900">₹{track.price}</span>
                  <span className="text-slate-500 text-xs ml-1">/ lifetime access</span>
                </div>
                <button
                  disabled={processing === track.id}
                  onClick={() => handleUnlock(track)}
                  className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-all disabled:opacity-50"
                >
                  {processing === track.id ? 'Processing...' : 'Unlock Track'} <Play className="h-4 w-4" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
