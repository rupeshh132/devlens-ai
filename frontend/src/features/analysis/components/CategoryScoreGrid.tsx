
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Score } from '../types/analysis';
import { getScoreColor } from '../utils/score';
import { 
  ShieldAlert, 
  Component, 
  Code2, 
  Zap, 
  TestTube2, 
  BookOpen, 
  Wrench 
} from 'lucide-react';

interface CategoryScoreGridProps {
  scores: Score[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  ARCHITECTURE: <Component className="h-5 w-5" />,
  CODE_QUALITY: <Code2 className="h-5 w-5" />,
  SECURITY: <ShieldAlert className="h-5 w-5" />,
  PERFORMANCE: <Zap className="h-5 w-5" />,
  TESTING: <TestTube2 className="h-5 w-5" />,
  DOCUMENTATION: <BookOpen className="h-5 w-5" />,
  MAINTAINABILITY: <Wrench className="h-5 w-5" />,
};

const CATEGORY_LABELS: Record<string, string> = {
  ARCHITECTURE: 'Architecture',
  CODE_QUALITY: 'Code Quality',
  SECURITY: 'Security',
  PERFORMANCE: 'Performance',
  TESTING: 'Testing',
  DOCUMENTATION: 'Documentation',
  MAINTAINABILITY: 'Maintainability',
};

export function CategoryScoreGrid({ scores }: CategoryScoreGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {scores.map((score) => (
        <Card key={score.category} className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
              {CATEGORY_ICONS[score.category]}
              {CATEGORY_LABELS[score.category] || score.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${getScoreColor(score.score)}`}>
              {score.score}
            </div>
            {score.previousScore !== undefined && (
              <p className="text-xs text-gray-500 mt-1">
                Prev: {score.previousScore}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
