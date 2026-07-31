import { useState, useEffect } from 'react';
import { AnalysisOverview } from '@/features/analysis/components/AnalysisOverview';
import { useAnalysis } from '@/features/analysis/hooks/useAnalysis';
import { analysisService } from '@/features/analysis/services/analysis.service';
import type { Progress } from '@/features/analysis/types/analysis';
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
      { status: 'FETCHING', percentage: 20, message: 'Cloning repository...', delay: 1500 },
      { status: 'SCANNING', percentage: 40, message: 'Extracting AST...', delay: 3000 },
      { status: 'ANALYZING', percentage: 70, message: 'Running AI models...', delay: 4500 },
      { status: 'REPORT_GENERATION', percentage: 90, message: 'Compiling report...', delay: 6000 },
      { status: 'COMPLETED', percentage: 100, message: 'Analysis complete!', delay: 7000 },
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
      <AnalysisOverview 
        analysis={analysis}
        progress={progress}
        onAnalyze={handleAnalyze}
        onCancel={handleCancel}
        onDownloadReport={handleDownloadReport}
        onViewReport={() => toast.info('Navigating to detailed report...')}
        onViewHistory={() => toast.info('Navigating to history...')}
        isAnalyzing={isAnalyzing}
      />
    </motion.div>
  );
}
