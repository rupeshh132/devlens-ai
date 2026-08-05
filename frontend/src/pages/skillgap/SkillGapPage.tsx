import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { SkillGapDashboard } from '../../features/skillgap/components/SkillGapDashboard';
import { ProjectRecommender } from '../../features/skillgap/components/ProjectRecommender';
import { getLatestSkillGapAnalysis } from '../../features/skillgap/api/skillgapApi';
import type { SkillGapAnalysis } from '../../features/skillgap/types';
import { Loader2 } from 'lucide-react';

export const SkillGapPage: React.FC = () => {
  const [analysis, setAnalysis] = useState<SkillGapAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLatestAnalysis = async () => {
    try {
      const data = await getLatestSkillGapAnalysis();
      setAnalysis(data);
    } catch {
      console.log('No existing skill gap analysis found');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
    fetchLatestAnalysis();
  }, []);

  const handleAnalysisGenerated = (newAnalysis: SkillGapAnalysis) => {
    setAnalysis(newAnalysis);
  };

  return (
    <div className="space-y-10">
      <PageHeader 
        title="Skill Gap Analyzer" 
        description="Discover missing skills and get personalized project recommendations to land your target role."
      />

      {isLoading ? (
        <div className="flex h-64 w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto space-y-10">
          <SkillGapDashboard initialAnalysis={analysis} onAnalysisGenerated={handleAnalysisGenerated} />
          
          {analysis && (
            <ProjectRecommender analysis={analysis} />
          )}
        </div>
      )}
    </div>
  );
};
