import { ArrowLeftRight } from 'lucide-react';
import { ComparisonHeader } from './ComparisonHeader';
import { ScoreComparison } from './ScoreComparison';
import { CategoryComparison } from './CategoryComparison';
import { FindingComparison } from './FindingComparison';
import { TrendComparison } from './TrendComparison';
import type { Analysis, AnalysisHistoryItem } from '../types/analysis';

interface CompareAnalysesProps {
  baseAnalysis: Analysis;
  targetAnalysis: Analysis;
  history: AnalysisHistoryItem[];
}

export function CompareAnalyses({ baseAnalysis, targetAnalysis, history }: CompareAnalysesProps) {
  return (
    <div className="space-y-6 mt-12 pt-12 border-t border-gray-800">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-10 w-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
          <ArrowLeftRight className="h-5 w-5 text-indigo-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Compare Analyses</h2>
          <p className="text-sm text-gray-400">Review changes between analysis runs</p>
        </div>
      </div>

      <ComparisonHeader baseAnalysis={baseAnalysis} targetAnalysis={targetAnalysis} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScoreComparison baseAnalysis={baseAnalysis} targetAnalysis={targetAnalysis} />
        <CategoryComparison baseAnalysis={baseAnalysis} targetAnalysis={targetAnalysis} />
      </div>

      <FindingComparison baseAnalysis={baseAnalysis} targetAnalysis={targetAnalysis} />
      
      <TrendComparison baseAnalysis={baseAnalysis} targetAnalysis={targetAnalysis} history={history} />
    </div>
  );
}
