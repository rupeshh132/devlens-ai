
import { Card, CardContent } from '@/components/ui/card';
import { getScoreColor, getScoreLabel } from '../utils/score';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ScoreOverviewProps {
  score: number;
  previousScore?: number;
}

export function ScoreOverview({ score, previousScore }: ScoreOverviewProps) {
  const colorClass = getScoreColor(score);
  const diff = previousScore ? score - previousScore : 0;
  
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="pt-6 flex flex-col items-center justify-center text-center h-full">
        <h3 className="text-gray-400 font-medium mb-2">Overall Health Score</h3>
        <div className={`text-6xl font-bold mb-2 ${colorClass}`}>
          {score}
        </div>
        <div className={`text-lg font-medium mb-4 ${colorClass}`}>
          {getScoreLabel(score)}
        </div>
        
        {previousScore && (
          <div className="flex items-center gap-1 text-sm">
            {diff > 0 ? (
              <span className="flex items-center text-green-500 bg-green-500/10 px-2 py-1 rounded">
                <TrendingUp className="h-4 w-4 mr-1" />
                +{diff} pts
              </span>
            ) : diff < 0 ? (
              <span className="flex items-center text-red-500 bg-red-500/10 px-2 py-1 rounded">
                <TrendingDown className="h-4 w-4 mr-1" />
                {diff} pts
              </span>
            ) : (
              <span className="flex items-center text-gray-500 bg-gray-500/10 px-2 py-1 rounded">
                <Minus className="h-4 w-4 mr-1" />
                No change
              </span>
            )}
            <span className="text-gray-500 ml-1">since last scan</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
