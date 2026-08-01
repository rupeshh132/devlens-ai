/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { AnalysisOverview } from '@/features/analysis/components/AnalysisOverview';
import { FindingsExplorer } from '@/features/analysis/components/FindingsExplorer';
import { AnalyticsSection } from '@/features/analysis/components/AnalyticsSection';
import { RecommendationsPanel } from '@/features/analysis/components/RecommendationsPanel';
import { AnalysisHistory } from '@/features/analysis/components/AnalysisHistory';
import { ReportPreview } from '@/features/analysis/components/ReportPreview';
import { CompareAnalyses } from '@/features/analysis/components/CompareAnalyses';
import { AnalysisProgress } from '@/features/analysis/components/AnalysisProgress';
import { useAnalysis } from '@/features/analysis/hooks/useAnalysis';
import { useStartAnalysis } from '@/features/analysis/hooks/useStartAnalysis';
import { useAnalysisStream } from '@/features/analysis/hooks/useAnalysisStream';
import { useCancelAnalysis } from '@/features/analysis/hooks/useCancelAnalysis';
import { useAnalysisHistory } from '@/features/analysis/hooks/useAnalysisHistory';
import { useExportPdf } from '@/features/analysis/hooks/useExportPdf';

import type { Progress as AnalysisProgressType } from '@/features/analysis/types/analysis';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function AnalysisDashboard() {
  const REPOSITORY_ID = 'repo-1'; // Real app would get this from route params

  const [jobId, setJobId] = useState<string | undefined>();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const { analysis, isLoading, error } = useAnalysis(jobId || 'ana-12345');
  const { progress, isConnectionClosed } = useAnalysisStream(jobId);
  const { history } = useAnalysisHistory(REPOSITORY_ID);
  
  const startMutation = useStartAnalysis();
  const cancelMutation = useCancelAnalysis();
  const exportPdfMutation = useExportPdf();

  useEffect(() => {
    if (isConnectionClosed && progress) {
      setIsAnalyzing(false);
      if (progress.status === 'COMPLETED') {
        toast.success('Analysis completed successfully!');
      } else if (progress.status === 'FAILED') {
        toast.error(`Analysis failed: ${progress.message || 'Unknown error'}`);
      }
    }
  }, [isConnectionClosed, progress?.status, progress]);

  const handleAnalyze = async () => {
    try {
      setIsAnalyzing(true);
      const res = await startMutation.mutateAsync(REPOSITORY_ID);
      setJobId(res.id);
    } catch {
      setIsAnalyzing(false);
    }
  };

  const handleCancel = async () => {
    if (jobId) {
      try {
        await cancelMutation.mutateAsync(jobId);
        setIsAnalyzing(false);
      } catch {
        // error handled in hook
      }
    }
  };

  const handleDownloadReport = async () => {
    if (!analysis?.id) return;
    try {
      await exportPdfMutation.mutateAsync(analysis.id);
      toast.success('Report downloaded successfully');
    } catch {
      toast.error('Failed to download report');
    }
  };

  if (isLoading && !isAnalyzing) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-950/50 border border-red-900 rounded-lg p-6 text-center max-w-lg mx-auto mt-12">
        <h3 className="text-xl font-semibold text-red-200 mb-2">Error Loading Dashboard</h3>
        <p className="text-red-300/80 mb-4">{error.message}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-900/50 hover:bg-red-900 text-red-100 rounded transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8 max-w-7xl"
    >
      {isAnalyzing ? (
        <AnalysisProgress 
          progress={progress as AnalysisProgressType} 
          startedAt={new Date().toISOString()} // Mock started at
          onCancel={handleCancel}
          onRetry={handleAnalyze}
          queuePosition={progress?.status === 'QUEUED' ? 2 : 0}
        />
      ) : (
        <div className="space-y-8">
          <AnalysisOverview 
            analysis={analysis}
            progress={progress as AnalysisProgressType}
            onAnalyze={handleAnalyze}
            onCancel={handleCancel}
            onDownloadReport={handleDownloadReport}
            onViewReport={() => toast.info('Navigating to detailed report...')}
            onViewHistory={() => toast.info('Navigating to history...')}
            isAnalyzing={isAnalyzing}
          />
          {analysis && analysis.findings && analysis.findings.length > 0 && (
            <>
              <FindingsExplorer findings={analysis.findings} />
              <AnalyticsSection analysis={analysis} history={history} />
            </>
          )}

          {analysis && analysis.recommendations && analysis.recommendations.length > 0 && (
            <RecommendationsPanel recommendations={analysis.recommendations} />
          )}

          {analysis && (
            <>
              <AnalysisHistory initialHistory={history} />
              <ReportPreview analysis={analysis} />
              <CompareAnalyses baseAnalysis={analysis as any} targetAnalysis={analysis as any} history={history} />
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}
