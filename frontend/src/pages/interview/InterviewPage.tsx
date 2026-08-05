import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { InterviewSimulator } from '../../features/interview/components/InterviewSimulator';
import { getLatestInterview } from '../../features/interview/api/interviewApi';
import type { InterviewSession } from '../../features/interview/types';
import { Loader2 } from 'lucide-react';

export const InterviewPage: React.FC = () => {
  const [session, setSession] = useState<InterviewSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLatestSession = async () => {
      try {
        const data = await getLatestInterview();
        setSession(data);
      } catch {
        console.log('No existing interview session found');
      } finally {
        setIsLoading(false);
      }
    };
    fetchLatestSession();
  }, []);

  const handleSessionGenerated = (newSession: InterviewSession) => {
    setSession(newSession);
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Mock Interview" 
        description="Practice with AI-generated technical questions tailored to your skills." 
      />

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <InterviewSimulator 
          initialSession={session} 
          onSessionGenerated={handleSessionGenerated} 
        />
      )}
    </div>
  );
};
