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
import { analysisService } from '@/features/analysis/services/analysis.service';
import { mockHistory, mockBaseAnalysis } from '@/features/analysis/mock';
import type { Progress, Progress as AnalysisProgressType } from '@/features/analysis/types/analysis';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function AnalysisDashboard() {
  // Hardcoded for mock purposes
  const REPOSITORY_ID = 'repo-1';
  const ANALYSIS_ID = 'ana-12345';

  const { analysis, isLoading, error } = useAnalysis(ANALYSIS_ID);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState<Progress | undefined>(undefined);

  useEffect(() => {
    if (!isAnalyzing) return;

    // Use a timeout to avoid calling setState synchronously during render
    const initialTimeout = setTimeout(() => {
      setProgress({ status: 'QUEUED', percentage: 0, message: 'Job queued...' });
    }, 0);

    const phases = [
      { status: 'CLONING', percentage: 10, message: 'Cloning repository...', delay: 1500 },
      { status: 'METADATA_EXTRACTION', percentage: 25, message: 'Extracting metadata...', delay: 3000 },
      { status: 'DEPENDENCY_ANALYSIS', percentage: 40, message: 'Analyzing dependencies...', delay: 4500 },
      { status: 'STATIC_ANALYSIS', percentage: 55, message: 'Running static analysis...', delay: 6000 },
      { status: 'AI_PROCESSING', percentage: 70, message: 'Running AI models...', delay: 7500 },
      { status: 'SCORING', percentage: 85, message: 'Calculating scores...', delay: 9000 },
      { status: 'REPORT_GENERATION', percentage: 95, message: 'Compiling report...', delay: 10500 },
      { status: 'COMPLETED', percentage: 100, message: 'Analysis complete!', delay: 12000 },
    ] as const;

    const timeouts = phases.map(phase => 
      setTimeout(() => {
        setProgress({ status: phase.status, percentage: phase.percentage, message: phase.message });
        if (phase.status === 'COMPLETED') {
          setIsAnalyzing(false);
          toast.success('Analysis completed successfully!');
        }
      }, phase.delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(initialTimeout);
    };
  }, [isAnalyzing]);

  const handleAnalyze = async () => {
    try {
      setIsAnalyzing(true);
      await analysisService.startAnalysis(REPOSITORY_ID);
    } catch {
      setIsAnalyzing(false);
      toast.error('Failed to start analysis');
    }
  };

  const handleCancel = async () => {
    try {
      await analysisService.cancelAnalysis('job-mock');
      setIsAnalyzing(false);
      setProgress(undefined);
      toast.info('Analysis cancelled');
    } catch {
      toast.error('Failed to cancel analysis');
    }
  };

  const handleDownloadReport = async () => {
    if (!analysis?.id) return;
    try {
      await analysisService.downloadReport(analysis.id);
      // In a real app, create object URL and trigger download
      toast.success('Report downloaded');
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
              <AnalyticsSection analysis={analysis} history={mockHistory} />
            </>
          )}

          {analysis && analysis.recommendations && analysis.recommendations.length > 0 && (
            <RecommendationsPanel recommendations={analysis.recommendations} />
          )}

          {analysis && (
            <>
              <AnalysisHistory initialHistory={mockHistory} />
              <ReportPreview analysis={analysis} />
              <CompareAnalyses baseAnalysis={mockBaseAnalysis} targetAnalysis={analysis} history={mockHistory} />
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}
