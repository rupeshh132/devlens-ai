import { Calendar, GitBranch, ShieldCheck } from 'lucide-react';
import type { Analysis } from '../types/analysis';

interface ReportHeaderProps {
  analysis: Analysis;
}

export function ReportHeader({ analysis }: ReportHeaderProps) {
  const dateStr = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(analysis.completedAt || analysis.startedAt || new Date().toISOString()));

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
            <ShieldCheck className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              AI Analysis Report
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Comprehensive Code Quality & Security Review
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 shadow-sm">
            <span className="text-xl font-bold text-indigo-700 dark:text-indigo-400">
              {analysis.overallScore}
            </span>
          </div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wider">
            Health Score
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Repository</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-200 truncate">
            {analysis.repositoryId}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Branch</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-200 flex items-center gap-1.5">
            <GitBranch className="h-3.5 w-3.5" />
            {analysis.branch || 'main'}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Commit</p>
          <p className="text-sm font-mono text-gray-900 dark:text-gray-200 truncate">
            {analysis.commitHash?.substring(0, 7) || 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Generated On</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-200 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {dateStr}
          </p>
        </div>
      </div>
    </div>
  );
}
