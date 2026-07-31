import type { Severity } from '../types/analysis';

interface SeverityFilterProps {
  selected: Severity[];
  onChange: (severities: Severity[]) => void;
}

const SEVERITIES: { value: Severity; label: string }[] = [
  { value: 'CRITICAL', label: 'Critical' },
  { value: 'HIGH', label: 'High' },
  { value: 'MEDIUM', label: 'Medium' },
  { value: 'LOW', label: 'Low' },
  { value: 'INFO', label: 'Info' },
];

export function SeverityFilter({ selected, onChange }: SeverityFilterProps) {
  const toggle = (val: Severity) => {
    if (selected.includes(val)) {
      onChange(selected.filter((s) => s !== val));
    } else {
      onChange([...selected, val]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-400">Severity</label>
      <div className="flex flex-wrap gap-2">
        {SEVERITIES.map((sev) => {
          const isSelected = selected.includes(sev.value);
          return (
            <button
              key={sev.value}
              onClick={() => toggle(sev.value)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                isSelected 
                  ? 'bg-indigo-600 text-white border border-indigo-500' 
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:bg-gray-800'
              }`}
            >
              {sev.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
