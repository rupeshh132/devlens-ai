import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { Analysis } from '../types/analysis';

interface ScoreComparisonProps {
  baseAnalysis: Analysis;
  targetAnalysis: Analysis;
}

export function ScoreComparison({ baseAnalysis, targetAnalysis }: ScoreComparisonProps) {
  const diff = targetAnalysis.overallScore - baseAnalysis.overallScore;
  const isPositive = diff > 0;
  const isNegative = diff < 0;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Overall Health Shift</h3>
      
      <div className="flex items-center gap-8 md:gap-16">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-2">
            {baseAnalysis.overallScore}
          </div>
          <span className="text-sm text-gray-500">Base</span>
        </div>

        <div className="flex flex-col items-center">
          <div className={`flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full border-4 shadow-lg ${
            isPositive ? 'border-green-500/30 bg-green-500/10 text-green-400' :
            isNegative ? 'border-red-500/30 bg-red-500/10 text-red-400' :
            'border-gray-500/30 bg-gray-500/10 text-gray-400'
          }`}>
            {isPositive ? (
              <TrendingUp className="h-8 w-8 md:h-10 md:w-10" />
            ) : isNegative ? (
              <TrendingDown className="h-8 w-8 md:h-10 md:w-10" />
            ) : (
              <Minus className="h-8 w-8 md:h-10 md:w-10" />
            )}
          </div>
          <div className={`mt-3 font-bold text-lg ${
            isPositive ? 'text-green-400' :
            isNegative ? 'text-red-400' :
            'text-gray-400'
          }`}>
            {isPositive ? '+' : ''}{diff} pts
          </div>
        </div>

        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">
            {targetAnalysis.overallScore}
          </div>
          <span className="text-sm text-indigo-400">Target</span>
        </div>
      </div>
    </div>
  );
}
