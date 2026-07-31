import { GitBranch, GitCommit, Calendar } from 'lucide-react';
import type { Analysis } from '../types/analysis';

interface ComparisonHeaderProps {
  baseAnalysis: Analysis;
  targetAnalysis: Analysis;
}

export function ComparisonHeader({ baseAnalysis, targetAnalysis }: ComparisonHeaderProps) {
  const formatDate = (dateString?: string) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(dateString || new Date().toISOString()));
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
        <div className="space-y-4 md:pr-8">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Base Analysis</h3>
            <span className="px-2.5 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded">Previous</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Branch</span>
              <span className="text-sm font-medium text-white flex items-center gap-1.5">
                <GitBranch className="h-3.5 w-3.5" />
                {baseAnalysis.branch || 'main'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Commit</span>
              <span className="text-sm font-mono text-white flex items-center gap-1.5">
                <GitCommit className="h-3.5 w-3.5" />
                {baseAnalysis.commitHash.substring(0, 7)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Analyzed On</span>
              <span className="text-sm font-medium text-white flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(baseAnalysis.completedAt)}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Target Analysis</h3>
            <span className="px-2.5 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded">Current</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Branch</span>
              <span className="text-sm font-medium text-white flex items-center gap-1.5">
                <GitBranch className="h-3.5 w-3.5" />
                {targetAnalysis.branch || 'main'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Commit</span>
              <span className="text-sm font-mono text-white flex items-center gap-1.5">
                <GitCommit className="h-3.5 w-3.5" />
                {targetAnalysis.commitHash.substring(0, 7)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Analyzed On</span>
              <span className="text-sm font-medium text-white flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(targetAnalysis.completedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
