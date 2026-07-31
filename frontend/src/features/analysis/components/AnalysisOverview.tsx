
import { AnalysisHeader } from './AnalysisHeader';
import { AnalysisStatusCard } from './AnalysisStatusCard';
import { ScoreOverview } from './ScoreOverview';
import { CategoryScoreGrid } from './CategoryScoreGrid';
import { RecentFindingsCard } from './RecentFindingsCard';
import { AnalysisActions } from './AnalysisActions';
import type { Analysis, Progress } from '../types/analysis';
import { Card, CardContent } from '@/components/ui/card';

interface AnalysisOverviewProps {
  analysis: Analysis | null;
  progress?: Progress;
  onAnalyze: () => void;
  onCancel: () => void;
  onDownloadReport: () => void;
  onViewReport: () => void;
  onViewHistory: () => void;
  isAnalyzing: boolean;
}

export function AnalysisOverview({
  analysis,
  progress,
  onAnalyze,
  onCancel,
  onDownloadReport,
  onViewReport,
  onViewHistory,
  isAnalyzing
}: AnalysisOverviewProps) {
  
  if (!analysis && !isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">No Analysis Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          This repository hasn't been analyzed yet. Run your first analysis to get detailed insights into code quality, security, and architecture.
        </p>
        <AnalysisHeader 
          repositoryName="devlens-ai" 
          branch="main"
          onAnalyze={onAnalyze}
          onDownloadReport={onDownloadReport}
          isAnalyzing={isAnalyzing}
        />
      </div>
    );
  }

  // Calculate duration if completed
  const getDuration = () => {
    if (!analysis?.completedAt) return undefined;
    const start = new Date(analysis.startedAt).getTime();
    const end = new Date(analysis.completedAt).getTime();
    const seconds = Math.floor((end - start) / 1000);
    return `${seconds}s`;
  };

  return (
    <div className="space-y-6">
      <AnalysisHeader 
        repositoryName="devlens-ai" // In a real app, this would come from repo context
        branch="main"
        lastAnalysisDate={analysis?.completedAt}
        onAnalyze={onAnalyze}
        onDownloadReport={onDownloadReport}
        isAnalyzing={isAnalyzing}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScoreOverview 
              score={analysis?.overallScore || 0} 
              previousScore={analysis?.previousScore} 
            />
            
            <AnalysisStatusCard 
              status={isAnalyzing ? progress?.status || 'QUEUED' : analysis?.status || 'IDLE'}
              percentage={progress?.percentage}
              message={progress?.message}
              duration={getDuration()}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Category Scores</h3>
            {analysis?.scores ? (
              <CategoryScoreGrid scores={analysis.scores} />
            ) : (
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="py-12 text-center text-gray-500">
                  Scores will appear here once the analysis is complete.
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <AnalysisActions 
            onAnalyze={onAnalyze}
            onCancel={onCancel}
            onViewReport={onViewReport}
            onViewHistory={onViewHistory}
            isAnalyzing={isAnalyzing}
            hasReport={!!analysis?.report}
          />
          
          <RecentFindingsCard findings={analysis?.findings || []} />
        </div>
      </div>
    </div>
  );
}
