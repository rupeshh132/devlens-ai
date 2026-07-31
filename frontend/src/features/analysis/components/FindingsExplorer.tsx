import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Filter, ShieldAlert } from 'lucide-react';
import type { Finding, Severity, AnalysisCategory } from '../types/analysis';
import { FindingCard } from './FindingCard';
import { FindingDetails } from './FindingDetails';
import { SeverityFilter } from './SeverityFilter';
import { CategoryFilter } from './CategoryFilter';

interface FindingsExplorerProps {
  findings: Finding[];
}

export function FindingsExplorer({ findings }: FindingsExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeverities, setSelectedSeverities] = useState<Severity[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<AnalysisCategory[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFindings = useMemo(() => {
    return findings.filter((finding) => {
      const matchesSearch = 
        finding.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        finding.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        finding.filePath.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesSeverity = selectedSeverities.length === 0 || selectedSeverities.includes(finding.severity);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(finding.category);

      return matchesSearch && matchesSeverity && matchesCategory;
    });
  }, [findings, searchQuery, selectedSeverities, selectedCategories]);

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-indigo-500" />
          Findings Explorer
          <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
            {filteredFindings.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search findings..."
                className="pl-9 bg-gray-950 border-gray-800 text-white placeholder:text-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-2 text-gray-300 font-medium pb-2">
                <Filter className="h-4 w-4" />
                Filters
              </div>
              <SeverityFilter selected={selectedSeverities} onChange={setSelectedSeverities} />
              <CategoryFilter selected={selectedCategories} onChange={setSelectedCategories} />
            </div>
          </div>

          {/* Results List */}
          <div className="lg:col-span-3 space-y-4">
            {filteredFindings.length === 0 ? (
              <div className="text-center py-12 bg-gray-950/50 rounded-lg border border-gray-800 border-dashed">
                <ShieldAlert className="h-10 w-10 text-gray-700 mx-auto mb-3" />
                <h3 className="text-gray-300 font-medium mb-1">No findings found</h3>
                <p className="text-sm text-gray-500">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFindings.map((finding) => (
                  <FindingCard
                    key={finding.id}
                    finding={finding}
                    isExpanded={expandedId === finding.id}
                    onToggle={() => setExpandedId(expandedId === finding.id ? null : finding.id)}
                  >
                    <FindingDetails finding={finding} />
                  </FindingCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
