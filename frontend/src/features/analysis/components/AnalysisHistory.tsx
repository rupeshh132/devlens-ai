import { useState, useMemo } from 'react';
import { History, Inbox } from 'lucide-react';
import { toast } from 'sonner';
import { HistoryTimeline } from './HistoryTimeline';
import { HistorySearch } from './HistorySearch';
import { HistoryFilters } from './HistoryFilters';
import type { AnalysisHistoryItem, AnalysisStatus } from '../types/analysis';

interface AnalysisHistoryProps {
  initialHistory: AnalysisHistoryItem[];
}

const STATUS_OPTIONS: { label: string; value: AnalysisStatus; color?: string }[] = [
  { label: 'Completed', value: 'COMPLETED', color: 'text-green-400' },
  { label: 'Failed', value: 'FAILED', color: 'text-red-400' },
  { label: 'Queued', value: 'QUEUED', color: 'text-gray-400' },
  { label: 'In Progress', value: 'CLONING', color: 'text-blue-400' },
  { label: 'AI Processing', value: 'AI_PROCESSING', color: 'text-purple-400' },
  { label: 'Cancelled', value: 'CANCELLED', color: 'text-orange-400' },
];

export function AnalysisHistory({ initialHistory }: AnalysisHistoryProps) {
  const [history, setHistory] = useState<AnalysisHistoryItem[]>(initialHistory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<AnalysisStatus[]>([]);

  const filteredHistory = useMemo(() => {
    return history.filter((item) => {
      // Status filter
      if (selectedStatuses.length > 0 && !selectedStatuses.includes(item.status)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          item.commitHash.toLowerCase().includes(query) ||
          (item.commitMessage && item.commitMessage.toLowerCase().includes(query)) ||
          (item.branch && item.branch.toLowerCase().includes(query));
        
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [history, searchQuery, selectedStatuses]);

  const handleRun = (id: string) => {
    toast.success(`Analysis re-run triggered for commit from history ${id}`);
  };

  const handleDelete = (id: string) => {
    setHistory(history.filter(h => h.id !== id));
    toast.success('Analysis history record deleted.');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <History className="h-6 w-6 text-indigo-400" />
        <h2 className="text-2xl font-bold text-white">Analysis History</h2>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <HistorySearch value={searchQuery} onChange={setSearchQuery} />
          <div className="flex flex-wrap gap-2">
            <HistoryFilters
              label="Status"
              options={STATUS_OPTIONS}
              selectedValues={selectedStatuses}
              onChange={setSelectedStatuses}
            />
          </div>
        </div>
      </div>

      <div className="pt-2">
        {filteredHistory.length > 0 ? (
          <HistoryTimeline 
            history={filteredHistory} 
            onRun={handleRun} 
            onDelete={handleDelete} 
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-gray-900/50 border border-gray-800 border-dashed rounded-lg">
            <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
              <Inbox className="h-6 w-6 text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-300">No history found</h3>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  );
}
