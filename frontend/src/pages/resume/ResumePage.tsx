import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { ResumeUploader } from '../../features/resume/components/ResumeUploader';
import { ResumeScoreCard } from '../../features/resume/components/ResumeScoreCard';
import { getMyLatestResume } from '../../features/resume/api/resumeApi';
import type { Resume } from '../../features/resume/types';
import { Loader2 } from 'lucide-react';
import { Button } from '../../components/ui/button';

export const ResumePage: React.FC = () => {
  const [resume, setResume] = useState<Resume | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploadingNew, setIsUploadingNew] = useState(false);

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

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Resume Analyzer" 
        description="Upload your resume to get an ATS score and AI suggestions based on your verified GitHub skills."
      >
        {resume && !isUploadingNew && (
          <Button onClick={() => setIsUploadingNew(true)} variant="outline">
            Upload New Resume
          </Button>
        )}
      </PageHeader>

      {isLoading ? (
        <div className="flex h-64 w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-8">
          {(!resume || isUploadingNew) ? (
            <div className="space-y-4">
              {isUploadingNew && (
                <Button variant="ghost" onClick={() => setIsUploadingNew(false)} className="mb-4">
                  &larr; Cancel Upload
                </Button>
              )}
              <ResumeUploader onUploadSuccess={handleUploadSuccess} />
            </div>
          ) : (
            <ResumeScoreCard resume={resume} />
          )}
        </div>
      )}
    </div>
  );
};
