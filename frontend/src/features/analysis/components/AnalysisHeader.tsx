
import { Button } from '@/components/ui/button';
import { Download, Play, RefreshCw } from 'lucide-react';

interface AnalysisHeaderProps {
  repositoryName: string;
  branch: string;
  lastAnalysisDate?: string;
  onAnalyze: () => void;
  onDownloadReport: () => void;
  isAnalyzing: boolean;
}

export function AnalysisHeader({
  repositoryName,
  branch,
  lastAnalysisDate,
  onAnalyze,
  onDownloadReport,
  isAnalyzing
}: AnalysisHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">{repositoryName}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-4 h-4 bg-gray-800 rounded flex items-center justify-center text-[10px] border border-gray-700">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.122a2.25 2.25 0 11-1.5 0V9.5A2.5 2.5 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" /></svg>
            </span>
            {branch}
          </span>
          {lastAnalysisDate && (
            <span>Last analyzed: {new Date(lastAnalysisDate).toLocaleString()}</span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Button 
          variant="outline" 
          onClick={onDownloadReport}
          className="w-full sm:w-auto"
          disabled={!lastAnalysisDate || isAnalyzing}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
        <Button 
          onClick={onAnalyze} 
          disabled={isAnalyzing}
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700"
        >
          {isAnalyzing ? (
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Play className="mr-2 h-4 w-4" />
          )}
          {isAnalyzing ? 'Analyzing...' : 'Analyze Now'}
        </Button>
      </div>
    </div>
  );
}
