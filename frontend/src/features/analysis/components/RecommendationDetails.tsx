import { motion } from 'framer-motion';
import { Target, Lightbulb, Activity, CheckCircle, FileCode2, Link } from 'lucide-react';
import type { Recommendation } from '../types/analysis';

interface RecommendationDetailsProps {
  recommendation: Recommendation;
}

export function RecommendationDetails({ recommendation }: RecommendationDetailsProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="border-t border-gray-800 bg-gray-900/50 overflow-hidden"
    >
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-red-400" />
                The Problem
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {recommendation.problem}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-yellow-400" />
                Recommendation
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {recommendation.recommendation}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-2">
                <Activity className="h-4 w-4 text-blue-400" />
                Why It Matters
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {recommendation.whyItMatters}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Implementation Steps
              </h4>
              <ul className="space-y-2">
                {recommendation.implementationSteps.map((step, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-gray-400">
                    <span className="text-indigo-400 font-mono mt-0.5">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-indigo-300 mb-2">Expected Impact</h4>
              <p className="text-sm text-indigo-200/80">{recommendation.expectedImpact}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-800/50">
          {recommendation.affectedFiles.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileCode2 className="h-3.5 w-3.5" />
                Affected Files ({recommendation.affectedFiles.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {recommendation.affectedFiles.map((file, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 font-mono border border-gray-700">
                    {file}
                  </span>
                ))}
              </div>
            </div>
          )}

          {recommendation.relatedFindings.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Link className="h-3.5 w-3.5" />
                Related Findings
              </h4>
              <div className="flex flex-wrap gap-2">
                {recommendation.relatedFindings.map((findingId, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-500 font-mono border border-gray-700/50">
                    {findingId}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {recommendation.codeSnippet && (
          <div className="pt-4 border-t border-gray-800/50">
             <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Example Snippet</h4>
             <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 overflow-x-auto">
               <pre className="text-sm font-mono text-gray-300">
                 <code>{recommendation.codeSnippet}</code>
               </pre>
             </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
