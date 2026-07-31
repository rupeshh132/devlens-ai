import type { Analysis } from '../types/analysis';

interface ReportSidebarProps {
  analysis: Analysis;
}

export function ReportSidebar({ analysis }: ReportSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
          Table of Contents
        </h3>
        <nav className="space-y-2 text-sm">
          <a href="#executive-summary" className="block text-indigo-600 dark:text-indigo-400 hover:underline">
            1. Executive Summary
          </a>
          <a href="#detailed-findings" className="block text-indigo-600 dark:text-indigo-400 hover:underline">
            2. Detailed Findings
          </a>
          <div className="pl-4 space-y-1 mt-1 text-gray-600 dark:text-gray-400">
            {['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'INFO'].map(sev => {
              const count = analysis.findings.filter(f => f.severity === sev).length;
              if (count === 0) return null;
              return (
                <div key={sev} className="flex justify-between">
                  <span className="capitalize">{sev.toLowerCase()}</span>
                  <span>{count}</span>
                </div>
              );
            })}
          </div>
          {analysis.recommendations && analysis.recommendations.length > 0 && (
            <a href="#ai-recommendations" className="block text-indigo-600 dark:text-indigo-400 hover:underline mt-2">
              3. AI Recommendations
            </a>
          )}
        </nav>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
          Metadata
        </h3>
        <div className="space-y-3 text-sm">
          <div>
            <span className="block text-gray-500 dark:text-gray-400 text-xs">Files Analyzed</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {analysis.metrics?.files || 0}
            </span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 text-xs">Lines of Code</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {analysis.metrics?.linesOfCode || 0}
            </span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 text-xs">Dependencies</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {analysis.metrics?.dependencies || 0}
            </span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 text-xs">Languages</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {Object.keys(analysis.metrics?.languages || {}).map((lang: string) => (
                <span key={lang} className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded text-xs font-medium text-gray-700 dark:text-gray-300">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
