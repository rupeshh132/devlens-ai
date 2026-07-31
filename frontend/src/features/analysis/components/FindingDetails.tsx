import type { Finding } from '../types/analysis';
import { FileCode2, Info, Lightbulb } from 'lucide-react';
import { EvidenceViewer } from './EvidenceViewer';

interface FindingDetailsProps {
  finding: Finding;
}

export function FindingDetails({ finding }: FindingDetailsProps) {
  return (
    <div className="p-4 bg-gray-900/50 space-y-6">
      <div>
        <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-2">
          <Info className="w-4 h-4" />
          Explanation
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          {finding.description}
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2">
          <FileCode2 className="w-4 h-4" />
          Location
        </h4>
        <div className="bg-gray-950 border border-gray-800 rounded p-3 text-sm font-mono text-gray-300 overflow-x-auto">
          {finding.filePath}
          {finding.lineNumber && <span className="text-gray-500">:{finding.lineNumber}</span>}
        </div>
      </div>

      {finding.evidence && (
        <EvidenceViewer code={finding.evidence} />
      )}

      {finding.recommendations.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4" />
            Recommendations
          </h4>
          <ul className="space-y-2">
            {finding.recommendations.map((rec) => (
              <li key={rec.id} className="bg-indigo-950/20 border border-indigo-900/30 rounded p-3">
                <p className="text-sm text-indigo-200">{rec.description}</p>
                {rec.codeSnippet && (
                  <div className="mt-2 bg-gray-950 border border-gray-800 rounded p-2 text-xs font-mono text-gray-300 overflow-x-auto">
                    <pre>{rec.codeSnippet}</pre>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
