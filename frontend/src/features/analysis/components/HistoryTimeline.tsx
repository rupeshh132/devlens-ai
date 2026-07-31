import { HistoryCard } from './HistoryCard';
import type { AnalysisHistoryItem } from '../types/analysis';

interface HistoryTimelineProps {
  history: AnalysisHistoryItem[];
  onRun: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HistoryTimeline({ history, onRun, onDelete }: HistoryTimelineProps) {
  return (
    <div className="relative space-y-4">
      {/* Vertical line connecting cards */}
      <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-800 -z-10 hidden md:block" />
      
      {history.map((item) => (
        <div key={item.id} className="relative">
          <div className="md:pl-16">
            <HistoryCard item={item} onRun={onRun} onDelete={onDelete} />
          </div>
          
          {/* Node dot on the timeline */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-900 border-2 border-indigo-500 hidden md:block z-10" />
        </div>
      ))}
    </div>
  );
}
