import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import type { Analysis } from '../types/analysis';

interface CategoryComparisonProps {
  baseAnalysis: Analysis;
  targetAnalysis: Analysis;
}

export function CategoryComparison({ baseAnalysis, targetAnalysis }: CategoryComparisonProps) {
  const getCategoryScore = (analysis: Analysis, category: string) => 
    analysis.scores.find(s => s.category === category)?.score || 0;

  const categories = Array.from(new Set([
    ...baseAnalysis.scores.map(s => s.category),
    ...targetAnalysis.scores.map(s => s.category)
  ]));

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Category Breakdown</h3>
      
      <div className="space-y-4">
        {categories.map((category) => {
          const baseScore = getCategoryScore(baseAnalysis, category);
          const targetScore = getCategoryScore(targetAnalysis, category);
          const diff = targetScore - baseScore;
          const isPositive = diff > 0;
          const isNegative = diff < 0;

          return (
            <div key={category} className="flex items-center justify-between p-3 rounded-lg bg-gray-950 border border-gray-800">
              <div className="w-1/3">
                <span className="text-sm font-medium text-gray-300 capitalize">
                  {category.replace('_', ' ').toLowerCase()}
                </span>
              </div>
              
              <div className="flex-1 flex items-center justify-between px-4">
                <span className="text-gray-500 font-mono w-8 text-right">{baseScore}</span>
                
                <div className={`flex items-center gap-1 text-xs font-bold ${
                  isPositive ? 'text-green-400' :
                  isNegative ? 'text-red-400' :
                  'text-gray-500'
                }`}>
                  {isPositive ? <ArrowUpRight className="h-4 w-4" /> :
                   isNegative ? <ArrowDownRight className="h-4 w-4" /> :
                   <Minus className="h-4 w-4" />}
                  <span className="w-6 text-center">{Math.abs(diff)}</span>
                </div>
                
                <span className="text-white font-bold font-mono w-8 text-left">{targetScore}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
