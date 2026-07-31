import { useState, useRef, useEffect } from 'react';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AnalysisStatus } from '../types/analysis';

interface FilterOption {
  label: string;
  value: AnalysisStatus;
  color?: string;
}

interface HistoryFiltersProps {
  label: string;
  options: FilterOption[];
  selectedValues: AnalysisStatus[];
  onChange: (values: AnalysisStatus[]) => void;
}

export function HistoryFilters({ label, options, selectedValues, onChange }: HistoryFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (value: AnalysisStatus) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const isAllSelected = selectedValues.length === 0;

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-md border text-sm font-medium transition-colors ${
          !isAllSelected 
            ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' 
            : 'bg-gray-950 border-gray-800 text-gray-300 hover:bg-gray-900'
        }`}
      >
        <Filter className="h-4 w-4" />
        {label}
        {!isAllSelected && (
          <span className="flex items-center justify-center h-5 w-5 rounded bg-indigo-500/20 text-indigo-300 text-xs ml-1">
            {selectedValues.length}
          </span>
        )}
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 z-10 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-2 space-y-1 max-h-64 overflow-y-auto">
              <button
                onClick={() => { onChange([]); setIsOpen(false); }}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
              >
                <span>All {label}s</span>
                {isAllSelected && <Check className="h-4 w-4 text-indigo-400" />}
              </button>
              
              <div className="h-px bg-gray-800 my-1" />
              
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <button
                    key={option.value}
                    onClick={() => toggleOption(option.value)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
                  >
                    <span className={`flex items-center gap-2 ${option.color || ''}`}>
                      {option.label}
                    </span>
                    {isSelected && <Check className="h-4 w-4 text-indigo-400" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
