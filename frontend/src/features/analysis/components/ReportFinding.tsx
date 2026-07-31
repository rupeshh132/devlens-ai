import { AlertTriangle, Info, ShieldAlert, Zap } from 'lucide-react';
import type { Finding } from '../types/analysis';

interface ReportFindingProps {
  finding: Finding;
  index: number;
}

const severityConfig = {
  CRITICAL: { icon: ShieldAlert, color: 'text-red-500', bg: 'bg-red-500/10' },
  HIGH: { icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  MEDIUM: { icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  LOW: { icon: Info, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  INFO: { icon: Info, color: 'text-gray-500', bg: 'bg-gray-500/10' },
};

export function ReportFinding({ finding, index }: ReportFindingProps) {
  const config = severityConfig[finding.severity] || severityConfig.INFO;
  const Icon = config.icon;

  return (
    <div className="mb-6 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden page-break-inside-avoid shadow-sm">
      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex items-start gap-3">
        <div className={`mt-0.5 p-1.5 rounded-md ${config.bg} ${config.color}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-gray-900 dark:text-white">
            {index}. {finding.title}
          </h4>
          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
            <span className={`font-medium ${config.color}`}>{finding.severity}</span>
            <span>•</span>
            <span>{finding.category.replace('_', ' ')}</span>
            <span>•</span>
            <span>Confidence: {finding.confidence}%</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-950">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {finding.description}
        </p>

        {finding.evidence && (
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Evidence Snippet:</p>
            <pre className="bg-gray-100 dark:bg-gray-900 rounded-md p-3 text-xs font-mono text-gray-800 dark:text-gray-300 overflow-x-auto border border-gray-200 dark:border-gray-800">
              <code>{finding.evidence}</code>
            </pre>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1.5 font-mono">
              File: {finding.filePath} {finding.lineNumber && `(Line ${finding.lineNumber})`}
            </div>
          </div>
        )}

        {finding.recommendations && finding.recommendations.length > 0 && (
          <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/20 rounded-md p-3">
            <p className="text-xs font-medium text-indigo-800 dark:text-indigo-300 mb-1">Recommendation:</p>
            <p className="text-sm text-indigo-900 dark:text-indigo-200">
              {finding.recommendations[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
