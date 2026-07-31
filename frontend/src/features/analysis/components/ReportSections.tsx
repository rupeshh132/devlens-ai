import { ReportFinding } from './ReportFinding';
import type { Analysis, Recommendation } from '../types/analysis';

interface ReportSectionsProps {
  analysis: Analysis;
}

export function ReportSections({ analysis }: ReportSectionsProps) {
  const sortedFindings = [...analysis.findings].sort((a, b) => {
    const severities = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1, INFO: 0 };
    return (severities[b.severity] || 0) - (severities[a.severity] || 0);
  });

  return (
    <div className="space-y-10">
      <section className="page-break-before-always">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
          2. Detailed Findings
        </h2>
        <div className="space-y-6">
          {sortedFindings.map((finding, index) => (
            <ReportFinding key={finding.id} finding={finding} index={index + 1} />
          ))}
          {sortedFindings.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 italic">No findings detected.</p>
          )}
        </div>
      </section>

      {analysis.recommendations && analysis.recommendations.length > 0 && (
        <section className="page-break-before-always">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
            3. AI Recommendations
          </h2>
          <div className="space-y-6">
            {analysis.recommendations.map((rec: Recommendation, index: number) => (
              <div key={rec.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 bg-white dark:bg-gray-950 shadow-sm page-break-inside-avoid">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {index + 1}. {rec.title}
                </h4>
                <div className="flex gap-4 mb-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <span>Priority: <span className="text-gray-700 dark:text-gray-300">{rec.priority}</span></span>
                  <span>Effort: <span className="text-gray-700 dark:text-gray-300">{rec.effort}</span></span>
                  <span>Category: <span className="text-gray-700 dark:text-gray-300">{rec.category.replace('_', ' ')}</span></span>
                </div>
                
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <strong className="text-gray-900 dark:text-gray-200">Problem:</strong>
                    <p className="mt-1">{rec.problem}</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-200">Solution:</strong>
                    <p className="mt-1">{rec.recommendation}</p>
                  </div>
                  {rec.implementationSteps && rec.implementationSteps.length > 0 && (
                    <div>
                      <strong className="text-gray-900 dark:text-gray-200">Implementation Steps:</strong>
                      <ul className="list-decimal pl-5 mt-1 space-y-1">
                        {rec.implementationSteps.map((step: string, i: number) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
