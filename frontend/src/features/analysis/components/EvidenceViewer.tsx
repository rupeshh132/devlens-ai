import { Search } from 'lucide-react';

interface EvidenceViewerProps {
  code: string;
}

export function EvidenceViewer({ code }: EvidenceViewerProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2">
        <Search className="w-4 h-4" />
        Evidence
      </h4>
      <div className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-xs font-mono text-gray-300 leading-relaxed">
            {code}
          </pre>
        </div>
      </div>
    </div>
  );
}
