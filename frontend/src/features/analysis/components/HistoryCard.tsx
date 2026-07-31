import { format } from 'date-fns';
import { GitBranch, GitCommit, Play, Trash2, CheckCircle, XCircle, AlertCircle, type LucideIcon } from 'lucide-react';
import type { AnalysisHistoryItem, AnalysisStatus } from '../types/analysis';

interface HistoryCardProps {
  item: AnalysisHistoryItem;
  onRun: (id: string) => void;
  onDelete: (id: string) => void;
}

const statusConfig: Partial<Record<AnalysisStatus, { icon: LucideIcon; color: string; bg: string; text: string }>> = {
  COMPLETED: { icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10', text: 'Completed' },
  FAILED: { icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10', text: 'Failed' },
  QUEUED: { icon: AlertCircle, color: 'text-gray-400', bg: 'bg-gray-500/10', text: 'Queued' },
  CLONING: { icon: Play, color: 'text-blue-400', bg: 'bg-blue-500/10', text: 'In Progress' },
  AI_PROCESSING: { icon: Play, color: 'text-purple-400', bg: 'bg-purple-500/10', text: 'AI Processing' },
  CANCELLED: { icon: AlertCircle, color: 'text-orange-400', bg: 'bg-orange-500/10', text: 'Cancelled' },
};

export function HistoryCard({ item, onRun, onDelete }: HistoryCardProps) {
  const status = statusConfig[item.status] || statusConfig.COMPLETED!;
  const StatusIcon = status.icon;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-blue-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-800 bg-gray-950 hover:bg-gray-900/50 transition-colors group">
      <div className="flex-1 min-w-0 space-y-3">
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium border border-gray-800 ${status.bg} ${status.color}`}>
            <StatusIcon className="h-3 w-3" />
            {status.text}
          </span>
          <span className="text-sm text-gray-400">
            {format(new Date(item.date), 'MMM d, yyyy • h:mm a')}
          </span>
        </div>

        <div>
          <h3 className="text-base font-medium text-white truncate">
            {item.commitMessage || 'Analysis Run'}
          </h3>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
            {item.branch && (
              <span className="flex items-center gap-1">
                <GitBranch className="h-3.5 w-3.5" />
                {item.branch}
              </span>
            )}
            <span className="flex items-center gap-1 font-mono">
              <GitCommit className="h-3.5 w-3.5" />
              {item.commitHash.substring(0, 7)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 sm:pl-4 sm:border-l border-gray-800">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs text-gray-500 mb-1">Score</span>
          <div className="flex items-end gap-2">
            <span className={`text-2xl font-bold ${getScoreColor(item.overallScore)} leading-none`}>
              {item.overallScore}
            </span>
            {item.previousScore !== undefined && (
              <span className={`text-xs mb-0.5 ${item.overallScore >= item.previousScore ? 'text-green-400' : 'text-red-400'}`}>
                {item.overallScore >= item.previousScore ? '+' : ''}{item.overallScore - item.previousScore}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onRun(item.id)}
            className="p-2 text-gray-400 hover:text-white bg-gray-900 hover:bg-indigo-500/20 hover:text-indigo-400 rounded-md transition-colors"
            title="Re-run Analysis"
          >
            <Play className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-2 text-gray-400 hover:text-red-400 bg-gray-900 hover:bg-red-500/10 rounded-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            title="Delete History"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
