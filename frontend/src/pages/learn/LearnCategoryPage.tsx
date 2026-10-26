import { useParams, Link } from 'react-router-dom';
import { BookOpen, Map, Zap, ChevronRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Extended Mock Data for Categories (Normally fetched from API based on categoryId)
const CATEGORY_DETAILS: Record<string, any> = {
  '1': {
    title: 'School Education (Class 9, 10, 11, 12)',
    description: 'Comprehensive curriculum for CBSE, ICSE & State Boards with AI doubt clearing, chapter-wise quizzes, and board exam mock tests.',
    students: '350K+ Students',
    topics: ['Class 9 (Maths & Science)', 'Class 10 (Board Exam Special)', 'Class 11 (PCM/PCB/Commerce)', 'Class 12 (Board & CUET Prep)'],
    features: ['NCERT Line-by-Line AI Explanations', 'Subject-Wise Chapter Tests', 'Previous 10 Years Board Papers', 'Principal & Teacher Progress Report']
  },
  '2': {
    title: 'JEE Mains & Advanced',
    description: 'Master Physics, Chemistry, and Mathematics with AI-driven study plans and full-length mock tests.',
    students: '124K+',
    topics: ['Physics', 'Chemistry', 'Mathematics'],
    features: ['100+ Full Mock Tests', 'PYQ Analysis (2010-2024)', 'AI Weakness Detection']
  },
  '3': {
    title: 'NEET UG',
    description: 'Comprehensive biology, physics, and chemistry practice tailored for the NTA medical entrance.',
    students: '98K+',
    topics: ['Biology', 'Physics', 'Chemistry'],
    features: ['NCERT Line-by-Line MCQs', '80+ Full Length Tests', 'Rank Predictor']
  },
  '4': {
    title: 'Govt Exams (SSC CGL / CHSL)',
    description: 'Quantitative aptitude, reasoning, and general awareness optimized for SSC & Banking exams.',
    students: '210K+',
    topics: ['Quant', 'Reasoning', 'English', 'General Awareness'],
    features: ['Speed Math Tricks', 'Tier 1 & Tier 2 Mocks', 'Vocab Builder']
  },
  '5': {
    title: 'UPSC CSE & Civil Services',
    description: 'Strategic preparation for Prelims & Mains with daily current affairs and answer writing analysis.',
    students: '56K+',
    topics: ['History', 'Polity', 'Geography', 'Economy', 'Environment'],
    features: ['Daily Current Affairs', 'Mains Answer Evaluation', 'CSAT Practice']
  }
};

export function LearnCategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Fallback to a default if category not found in mock data
  const category = categoryId && CATEGORY_DETAILS[categoryId] 
    ? CATEGORY_DETAILS[categoryId] 
    : {
        title: 'Exam Preparation',
        description: 'Comprehensive study material and mock tests.',
        students: '10K+',
        topics: ['Subject 1', 'Subject 2'],
        features: ['Mock Tests', 'Study Plans', 'Analytics']
      };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-800 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center text-blue-200 text-sm font-medium mb-4 space-x-2">
            <Link to="/learn" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Categories</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{category.title}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {category.title}
          </h1>
          
          <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
            {category.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold" asChild>
              <Link to="/learn/register">
                Start Preparing Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-900 hover:bg-blue-900/20 hover:text-white" asChild>
              <Link to="/learn/syllabus">
                View Full Syllabus
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-blue-200">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              {category.students} Enrolled
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-8">
          
          {/* Topics Covered */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Subjects Covered</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {category.topics.map((topic: string, i: number) => (
                <Card key={i} className="border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="font-medium text-slate-800">{topic}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why PrepLens Learn?</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <ul className="space-y-4">
                {category.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <Map className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <p className="ml-3 text-slate-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="border-2 border-blue-600 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">PRO Subscription</h3>
              <p className="text-slate-600 text-sm mb-6">
                Get unlimited access to AI study plans, doubt solving, and premium mock tests.
              </p>
              
              <div className="text-3xl font-bold text-slate-900 mb-6">
                ₹599<span className="text-base font-normal text-slate-500">/month</span>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4" asChild>
                <Link to="/pricing">Upgrade to PRO</Link>
              </Button>
              
              <p className="text-xs text-center text-slate-500 flex items-center justify-center">
                <Lock className="h-3 w-3 mr-1" /> Secure payment via Razorpay
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Icon helper since Users wasn't imported at top to avoid conflict
function Users(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
