import { Badge } from '@/components/ui/badge';
import type { Finding } from '../types/analysis';
import { getSeverityColor } from '../utils/severity';
import { ConfidenceBadge } from './ConfidenceBadge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FindingCardProps {
  finding: Finding;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

export function FindingCard({ finding, isExpanded, onToggle, children }: FindingCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-colors hover:border-gray-700">
      <div 
        className="p-4 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        onClick={onToggle}
      >
        <div className="flex-grow space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={getSeverityColor(finding.severity)} variant="outline">
              {finding.severity}
            </Badge>
            <Badge className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700">
              {finding.category.replace('_', ' ')}
            </Badge>
            <ConfidenceBadge confidence={finding.confidence} />
          </div>
          <h3 className="text-lg font-semibold text-white">{finding.title}</h3>
          <p className="text-sm text-gray-400 line-clamp-1">{finding.description}</p>
        </div>
        
        <div className="flex items-center text-gray-500 shrink-0 self-end sm:self-auto">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-800"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
