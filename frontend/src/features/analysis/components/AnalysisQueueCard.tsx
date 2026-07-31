import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

interface AnalysisQueueCardProps {
  position: number;
}

export function AnalysisQueueCard({ position }: AnalysisQueueCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 bg-gradient-to-r from-gray-900 to-indigo-950/30">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-full">
            <Users className="h-5 w-5 text-indigo-400" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-300">Queue Position</h4>
            <p className="text-xs text-gray-500 mt-0.5">Waiting for available workers...</p>
          </div>
        </div>
        <div className="text-2xl font-bold text-white">
          #{position}
        </div>
      </CardContent>
    </Card>
  );
}
