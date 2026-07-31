import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Score } from '../types/analysis';

interface ScoreBreakdownProps {
  scores: Score[];
}

export function ScoreBreakdown({ scores }: ScoreBreakdownProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400 bg-green-500/10 border-green-500/20';
    if (score >= 70) return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    if (score >= 50) return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
    return 'text-red-400 bg-red-500/10 border-red-500/20';
  };

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg text-white">Score Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scores.map((s) => (
            <div key={s.category} className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-300">
                  {s.category.replace('_', ' ')}
                </span>
              </div>
              <div className={`px-3 py-1 rounded border text-sm font-semibold ${getScoreColor(s.score)}`}>
                {s.score}/100
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
