import { Zap, Clock, Hourglass } from 'lucide-react';
import type { RecommendationEffort } from '../types/analysis';

interface EffortBadgeProps {
  effort: RecommendationEffort;
}

const config = {
  LOW: { icon: Zap, color: 'text-green-400', label: 'Low Effort' },
  MEDIUM: { icon: Clock, color: 'text-yellow-400', label: 'Medium Effort' },
  HIGH: { icon: Hourglass, color: 'text-orange-400', label: 'High Effort' }
};

export function EffortBadge({ effort }: EffortBadgeProps) {
  const { icon: Icon, color, label } = config[effort];
  
  return (
    <span className="flex items-center gap-1.5 text-xs text-gray-400">
      <Icon className={`h-3.5 w-3.5 ${color}`} />
      {label}
    </span>
  );
}
