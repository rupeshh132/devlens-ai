import { ShieldAlert, AlertTriangle, PlusCircle, CheckCircle2 } from 'lucide-react';
import type { Analysis, Finding } from '../types/analysis';

interface FindingComparisonProps {
  baseAnalysis: Analysis;
  targetAnalysis: Analysis;
}

export function FindingComparison({ baseAnalysis, targetAnalysis }: FindingComparisonProps) {
  const baseIds = new Set(baseAnalysis.findings.map(f => f.id));
  const targetIds = new Set(targetAnalysis.findings.map(f => f.id));

  const addedFindings = targetAnalysis.findings.filter(f => !baseIds.has(f.id));
  const resolvedFindings = baseAnalysis.findings.filter(f => !targetIds.has(f.id));

  const renderFindingList = (findings: Finding[], type: 'added' | 'resolved') => {
    if (findings.length === 0) {
      return (
        <div className="text-center py-6 text-sm text-gray-500 bg-gray-950/50 rounded-lg border border-dashed border-gray-800">
          No findings {type} in this comparison.
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {findings.slice(0, 5).map(f => (
          <div key={f.id} className="p-3 bg-gray-950 border border-gray-800 rounded-lg flex items-start gap-3">
            <div className={`mt-0.5 ${f.severity === 'CRITICAL' ? 'text-red-400' : 'text-orange-400'}`}>
              {f.severity === 'CRITICAL' ? <ShieldAlert className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-200 line-clamp-1">{f.title}</p>
              <p className="text-xs text-gray-500 mt-1">{f.category.replace('_', ' ')}</p>
            </div>
          </div>
        ))}
        {findings.length > 5 && (
          <div className="text-center pt-2">
            <span className="text-xs text-gray-500 font-medium">
              + {findings.length - 5} more {type} findings
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Findings Delta</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <PlusCircle className="h-5 w-5 text-red-400" />
            <h4 className="font-semibold text-white">New Findings</h4>
            <span className="ml-auto bg-red-500/10 text-red-400 px-2 py-0.5 rounded text-xs font-bold">
              {addedFindings.length}
            </span>
          </div>
          {renderFindingList(addedFindings, 'added')}
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
            <h4 className="font-semibold text-white">Resolved Findings</h4>
            <span className="ml-auto bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-xs font-bold">
              {resolvedFindings.length}
            </span>
          </div>
          {renderFindingList(resolvedFindings, 'resolved')}
        </div>
      </div>
    </div>
  );
}
