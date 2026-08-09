import { useState, useMemo } from 'react';
import { Inbox } from 'lucide-react';
import { RecommendationCard } from './RecommendationCard';
import { RecommendationSearch } from './RecommendationSearch';
import { RecommendationFilter } from './RecommendationFilter';
import type { Recommendation } from '../types/analysis';

interface RecommendationsPanelProps {
  recommendations: Recommendation[];
}

const PRIORITY_OPTIONS = [
  { label: 'Critical', value: 'CRITICAL', color: 'text-red-400' },
  { label: 'High', value: 'HIGH', color: 'text-orange-400' },
  { label: 'Medium', value: 'MEDIUM', color: 'text-yellow-400' },
  { label: 'Low', value: 'LOW', color: 'text-blue-400' },
];

const EFFORT_OPTIONS = [
  { label: 'Low Effort', value: 'LOW', color: 'text-green-400' },
  { label: 'Medium Effort', value: 'MEDIUM', color: 'text-yellow-400' },
  { label: 'High Effort', value: 'HIGH', color: 'text-orange-400' },
];

const CATEGORY_OPTIONS = [
  { label: 'Security', value: 'SECURITY' },
  { label: 'Performance', value: 'PERFORMANCE' },
  { label: 'Architecture', value: 'ARCHITECTURE' },
  { label: 'Best Practices', value: 'BEST_PRACTICES' },
  { label: 'Code Style', value: 'CODE_STYLE' },
  { label: 'Testing', value: 'TESTING' },
];

export function RecommendationsPanel({ recommendations }: RecommendationsPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [selectedEfforts, setSelectedEfforts] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter((rec) => {
      // Priority filter
      if (selectedPriorities.length > 0 && !selectedPriorities.includes(rec.priority)) {
        return false;
      }
      
      // Effort filter
      if (selectedEfforts.length > 0 && !selectedEfforts.includes(rec.effort)) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(rec.category)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          rec.title.toLowerCase().includes(query) ||
          rec.shortSummary.toLowerCase().includes(query) ||
          rec.problem.toLowerCase().includes(query);
        
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [recommendations, searchQuery, selectedPriorities, selectedEfforts, selectedCategories]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold text-white tracking-tight">AI Recommendations</h2>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <RecommendationSearch value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div className="flex flex-wrap gap-2">
            <RecommendationFilter
              label="Priority"
              options={PRIORITY_OPTIONS}
              selectedValues={selectedPriorities}
              onChange={setSelectedPriorities}
            />
            <RecommendationFilter
              label="Effort"
              options={EFFORT_OPTIONS}
              selectedValues={selectedEfforts}
              onChange={setSelectedEfforts}
            />
            <RecommendationFilter
              label="Category"
              options={CATEGORY_OPTIONS}
              selectedValues={selectedCategories}
              onChange={setSelectedCategories}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredRecommendations.length > 0 ? (
          filteredRecommendations.map((rec) => (
            <RecommendationCard key={rec.id} recommendation={rec} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-gray-900/50 border border-gray-800 border-dashed rounded-lg">
            <div className="mb-4">
              <Inbox className="h-8 w-8 text-gray-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium text-gray-300">No recommendations found</h3>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  );
}
