import { Badge } from '@/components/ui/badge';
import { Target } from 'lucide-react';

interface ConfidenceBadgeProps {
  confidence: number;
}

export function ConfidenceBadge({ confidence }: ConfidenceBadgeProps) {
  const color = 
    confidence >= 90 ? 'bg-green-900/50 text-green-300 border-green-800/50' :
    confidence >= 70 ? 'bg-blue-900/50 text-blue-300 border-blue-800/50' :
    'bg-yellow-900/50 text-yellow-300 border-yellow-800/50';

  return (
    <Badge variant="outline" className={`flex items-center gap-1 ${color}`}>
      <Target className="w-3 h-3" />
      {confidence}%
    </Badge>
  );
}
