import type { AnalysisCategory } from '../types/analysis';

interface CategoryFilterProps {
  selected: AnalysisCategory[];
  onChange: (categories: AnalysisCategory[]) => void;
}

const CATEGORIES: { value: AnalysisCategory; label: string }[] = [
  { value: 'ARCHITECTURE', label: 'Architecture' },
  { value: 'CODE_QUALITY', label: 'Code Quality' },
  { value: 'SECURITY', label: 'Security' },
  { value: 'PERFORMANCE', label: 'Performance' },
  { value: 'TESTING', label: 'Testing' },
  { value: 'DOCUMENTATION', label: 'Documentation' },
  { value: 'MAINTAINABILITY', label: 'Maintainability' },
];

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const toggle = (val: AnalysisCategory) => {
    if (selected.includes(val)) {
      onChange(selected.filter((c) => c !== val));
    } else {
      onChange([...selected, val]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-400">Category</label>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const isSelected = selected.includes(cat.value);
          return (
            <button
              key={cat.value}
              onClick={() => toggle(cat.value)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                isSelected 
                  ? 'bg-indigo-600 text-white border border-indigo-500' 
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:bg-gray-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
