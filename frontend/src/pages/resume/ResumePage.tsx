import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { ResumeUploader } from '../../features/resume/components/ResumeUploader';
import { ResumeScoreCard } from '../../features/resume/components/ResumeScoreCard';
import { ResumeTailorTab } from '../../features/resume/components/ResumeTailorTab';
import { getMyLatestResume } from '../../features/resume/api/resumeApi';
import type { Resume } from '../../features/resume/types';
import { Loader2, FileText, Sparkles, Lock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useCurrentUser } from '../../features/auth/hooks/useCurrentUser';
import { useDevPremium } from '../../hooks/useDevPremium';
import { DevPaywallModal } from '../../components/dev/DevPaywallModal';

type Tab = 'analyze' | 'tailor';

export const ResumePage: React.FC = () => {
  const [resume, setResume] = useState<Resume | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploadingNew, setIsUploadingNew] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('analyze');
  const [paywallOpen, setPaywallOpen] = useState(false);
  const { isDevPro } = useDevPremium();
  const { data: currentUser } = useCurrentUser();

  useEffect(() => {
    const fetchLatestResume = async () => {
      try {
        const data = await getMyLatestResume();
        setResume(data);
      } catch {
        console.log('No existing resume found');
      } finally {
        setIsLoading(false);
      }
    };
    fetchLatestResume();
  }, []);

  const handleUploadSuccess = (newResume: Resume) => {
    setResume(newResume);
    setIsUploadingNew(false);
  };

  const handleTabClick = (tab: Tab) => {
    if (tab === 'tailor' && !isDevPro) {
      setPaywallOpen(true);
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="space-y-6 pb-24">
      <DevPaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        featureName="AI Job-Specific Resume Tailoring"
        featureDescription="Free developers can analyze ATS scores. Upgrade to Dev Pro to automatically rewrite and tailor your resume bullets for any specific job description."
      />

      <PageHeader
        title="Resume Tools"
        description="Analyze your resume's ATS score — or tailor it to any job description with AI."
        actions={
          resume && !isUploadingNew && activeTab === 'analyze' && (
            <Button onClick={() => setIsUploadingNew(true)} variant="outline">
              Upload New Resume
            </Button>
          )
        }
      />

      {/* Tab Switcher */}
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-1 bg-muted p-1 rounded-xl w-fit">
          <button
            onClick={() => handleTabClick('analyze')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'analyze' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <FileText className="h-4 w-4" />
            ATS Score Analyzer
          </button>
          <button
            onClick={() => handleTabClick('tailor')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'tailor' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {!isDevPro ? <Lock className="h-4 w-4 text-amber-500" /> : <Sparkles className="h-4 w-4" />}
            JD Tailor (AI)
            {!isDevPro && <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-600 border border-amber-500/30">Pro</span>}
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex h-64 w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-2">
          {activeTab === 'analyze' ? (
            (!resume || isUploadingNew) ? (
              <div className="space-y-4">
                {isUploadingNew && (
                  <Button variant="ghost" onClick={() => setIsUploadingNew(false)} className="mb-4">
                    ← Cancel Upload
                  </Button>
                )}
                <ResumeUploader onUploadSuccess={handleUploadSuccess} />
              </div>
            ) : (
              <ResumeScoreCard resume={resume} />
            )
          ) : (
            <ResumeTailorTab
              hasStoredResume={!!resume}
              userName={currentUser?.email?.split('@')[0] || 'Your Name'}
            />
          )}
        </div>
      )}
    </div>
  );
};
