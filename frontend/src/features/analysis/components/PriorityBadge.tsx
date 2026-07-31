import { ShieldAlert, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import type { RecommendationPriority } from '../types/analysis';

interface PriorityBadgeProps {
  priority: RecommendationPriority;
}

const config = {
  CRITICAL: { icon: ShieldAlert, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  HIGH: { icon: AlertTriangle, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  MEDIUM: { icon: AlertCircle, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
  LOW: { icon: Info, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' }
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const { icon: Icon, color, bg } = config[priority];
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${color} ${bg}`}>
      <Icon className="h-3.5 w-3.5" />
      {priority}
    </span>
  );
}
