import { HealthScoreCard } from './HealthScoreCard';
import { CategoryRadarChart } from './CategoryRadarChart';
import { ScoreTrendChart } from './ScoreTrendChart';
import { SeverityDistributionChart } from './SeverityDistributionChart';
import { ScoreBreakdown } from './ScoreBreakdown';
import { AnalysisMetrics } from './AnalysisMetrics';
import type { Analysis, AnalysisHistoryItem } from '../types/analysis';
import { Activity } from 'lucide-react';

interface AnalyticsSectionProps {
  analysis: Analysis;
  history: AnalysisHistoryItem[];
}

export function AnalyticsSection({ analysis, history }: AnalyticsSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Activity className="h-6 w-6 text-indigo-500" />
        Health Score & Analytics
      </h2>
      
      {analysis.metrics && (
        <AnalysisMetrics metrics={analysis.metrics} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <HealthScoreCard 
            score={analysis.overallScore} 
            previousScore={analysis.previousScore} 
          />
          <ScoreBreakdown scores={analysis.scores} />
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CategoryRadarChart scores={analysis.scores} />
            <SeverityDistributionChart findings={analysis.findings} />
          </div>
          <ScoreTrendChart history={history} />
        </div>
      </div>
    </div>
  );
}
