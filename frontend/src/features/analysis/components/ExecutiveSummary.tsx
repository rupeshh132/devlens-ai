import type { Analysis } from '../types/analysis';

interface ExecutiveSummaryProps {
  analysis: Analysis;
}

export function ExecutiveSummary({ analysis }: ExecutiveSummaryProps) {
  const criticalFindings = analysis.findings.filter(f => f.severity === 'CRITICAL').length;
  const highFindings = analysis.findings.filter(f => f.severity === 'HIGH').length;
  const totalFindings = analysis.findings.length;
  
  return (
    <div className="mb-10 page-break-inside-avoid">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
        1. Executive Summary
      </h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          This AI-generated analysis report provides a comprehensive review of the <strong>{analysis.repositoryId}</strong> repository. 
          The overall health score of the codebase is <strong>{analysis.overallScore}/100</strong>.
        </p>
        
        <p className="mb-4">
          During the automated review process, <strong>{totalFindings} total issues</strong> were identified. 
          Of these, <span className="font-semibold text-red-600 dark:text-red-400">{criticalFindings} are critical</span> and <span className="font-semibold text-orange-600 dark:text-orange-400">{highFindings} are high severity</span>. 
          Immediate attention is recommended for the critical and high severity findings to ensure security and stability.
        </p>

        <p>
          The AI engine has provided <strong>{analysis.recommendations?.length || 0} strategic recommendations</strong> to improve architectural integrity, security posture, and overall maintainability. Addressing these recommendations will significantly improve the long-term health of the project.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {analysis.scores.map((score) => (
          <div key={score.category} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-3 shadow-sm">
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-1">
              {score.category.replace('_', ' ')}
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {score.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
