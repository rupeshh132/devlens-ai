
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Building2, Briefcase, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

// Mock data until API is wired up
const EXAM_CATEGORIES = [
  { id: '1', title: 'School (Class 9-12)', icon: BookOpen, color: 'bg-blue-100 text-blue-600', count: '4 Exams' },
  { id: '2', title: 'Engineering (JEE)', icon: GraduationCap, color: 'bg-indigo-100 text-indigo-600', count: '3 Exams' },
  { id: '3', title: 'Medical (NEET)', icon: GraduationCap, color: 'bg-rose-100 text-rose-600', count: '2 Exams' },
  { id: '4', title: 'Govt Exams (SSC/Bank)', icon: Building2, color: 'bg-emerald-100 text-emerald-600', count: '8 Exams' },
  { id: '5', title: 'Placement / Aptitude', icon: Briefcase, color: 'bg-purple-100 text-purple-600', count: '5 Exams' },
];

export function LearnLandingPage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Your AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Study Companion</span>
        </h1>
        <p className="text-lg text-slate-600">
          Prepare for India's toughest exams with verified content and an AI that builds a daily study plan based on your weak topics.
        </p>
        <div className="pt-4">
          <input 
            type="text" 
            placeholder="Search for an exam (e.g., SSC CGL, JEE Mains)..." 
            className="w-full max-w-md px-5 py-3 rounded-full border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">What are you preparing for?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXAM_CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/learn/category/${cat.id}`}
              className="group flex flex-col p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={cn("p-3 rounded-xl", cat.color)}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {cat.count}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {cat.title}
              </h3>
              <div className="mt-auto pt-4 flex items-center text-sm font-medium text-blue-600">
                Explore Exams <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
