
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getStatusLabel, isActiveStatus } from '../utils/status';
import type { AnalysisStatus } from '../types/analysis';
import { AlertCircle, CheckCircle2, Clock, Loader2 } from 'lucide-react';

interface AnalysisStatusCardProps {
  status: AnalysisStatus;
  percentage?: number;
  message?: string;
  duration?: string;
}

export function AnalysisStatusCard({ status, percentage = 0, message, duration }: AnalysisStatusCardProps) {
  const isActive = isActiveStatus(status);
  const isCompleted = status === 'COMPLETED';
  const isFailed = status === 'FAILED';

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {isActive && <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />}
            {isCompleted && <CheckCircle2 className="h-5 w-5 text-green-500" />}
            {isFailed && <AlertCircle className="h-5 w-5 text-red-500" />}
            {!isActive && !isCompleted && !isFailed && <Clock className="h-5 w-5 text-gray-500" />}
            
            <h3 className="font-semibold text-lg text-white">{getStatusLabel(status)}</h3>
          </div>
          {duration && (
            <span className="text-sm text-gray-400 font-mono">{duration}</span>
          )}
        </div>

        {isActive && (
          <div className="space-y-2">
            <Progress value={percentage} className="h-2" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">{message || 'Processing...'}</span>
              <span className="text-gray-400 font-mono">{percentage}%</span>
            </div>
          </div>
        )}

        {isFailed && (
          <div className="bg-red-950/50 border border-red-900 rounded p-3 text-sm text-red-200">
            {message || 'An error occurred during analysis.'}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
