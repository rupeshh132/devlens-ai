import { useState } from 'react';
import { ChevronDown, ChevronUp, Box } from 'lucide-react';
import { PriorityBadge } from './PriorityBadge';
import { EffortBadge } from './EffortBadge';
import { RecommendationDetails } from './RecommendationDetails';
import { AnimatePresence } from 'framer-motion';
import type { Recommendation } from '../types/analysis';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`rounded-lg border transition-all duration-200 ${
      isExpanded 
        ? 'border-indigo-500/50 bg-gray-900/80 shadow-lg shadow-indigo-900/10' 
        : 'border-gray-800 bg-gray-950 hover:border-gray-700'
    }`}>
      <div 
        className="p-5 flex items-start gap-4 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 min-w-0 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-medium text-white truncate">
              {recommendation.title}
            </h3>
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-800 rounded px-2 py-1">
                <Box className="h-3 w-3" />
                {recommendation.category.replace('_', ' ')}
              </span>
              <PriorityBadge priority={recommendation.priority} />
              <EffortBadge effort={recommendation.effort} />
            </div>
          </div>
          
          <p className="text-sm text-gray-400 line-clamp-2">
            {recommendation.shortSummary}
          </p>
        </div>

        <button 
          className={`shrink-0 p-1.5 rounded-md hover:bg-gray-800 text-gray-400 transition-colors ${
            isExpanded ? 'bg-gray-800 text-white' : ''
          }`}
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <RecommendationDetails recommendation={recommendation} />
        )}
      </AnimatePresence>
    </div>
  );
}
