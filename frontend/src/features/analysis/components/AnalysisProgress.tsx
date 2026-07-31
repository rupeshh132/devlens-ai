import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ProgressTimeline } from './ProgressTimeline';
import { LiveLogs } from './LiveLogs';
import { EstimatedTimeCard } from './EstimatedTimeCard';
import { AnalysisQueueCard } from './AnalysisQueueCard';
import type { AnalysisStatus, Progress as AnalysisProgressType } from '../types/analysis';
import { Activity, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnalysisProgressProps {
  progress?: AnalysisProgressType;
  startedAt?: string;
  onCancel: () => void;
  onRetry?: () => void;
  queuePosition?: number;
}

export function AnalysisProgress({ 
  progress, 
  startedAt, 
  onCancel,
  onRetry,
  queuePosition
}: AnalysisProgressProps) {
  const [logs, setLogs] = useState<string[]>([]);
  
  const status = progress?.status || 'QUEUED';
  const percentage = progress?.percentage || 0;
  const isFailed = status === 'FAILED';
  const isCompleted = status === 'COMPLETED';

  // Mock log generation based on status changes
  useEffect(() => {
    if (!progress) return;
    
    const initialLogTimeout = setTimeout(() => {
      const timeString = new Date().toISOString().substring(11, 19);
      setLogs(prev => [...prev, `[${timeString}] ${progress.message}`]);
    }, 0);
    
    // Add some random intermediate logs if it's active
    if (!['QUEUED', 'COMPLETED', 'FAILED', 'CANCELLED'].includes(status)) {
      const interval = setInterval(() => {
        setLogs(prev => {
          // Keep max 50 logs to prevent memory issues
          const newLogs = [...prev, `[${new Date().toISOString().substring(11, 19)}] Processing chunk...`];
          return newLogs.slice(-50);
        });
      }, 2000);
      return () => {
        clearInterval(interval);
        clearTimeout(initialLogTimeout);
      };
    }
    return () => clearTimeout(initialLogTimeout);
  }, [progress, status]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="h-6 w-6 text-indigo-500" />
            Live Analysis
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Analyzing repository for quality, security, and architecture issues
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {isFailed && onRetry && (
            <Button onClick={onRetry} variant="outline" className="border-gray-700 hover:bg-gray-800">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retry Analysis
            </Button>
          )}
          {!isCompleted && !isFailed && (
            <Button onClick={onCancel} variant="destructive" className="bg-red-900/50 hover:bg-red-900 text-red-200">
              <XCircle className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-medium text-gray-400 flex justify-between items-center">
                <span>Overall Progress</span>
                <span className="font-mono text-white">{percentage}%</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress 
                value={percentage} 
                className={`h-3 ${isFailed ? 'bg-red-950' : 'bg-gray-800'}`} 
                data-dummy={`${isFailed ? 'bg-red-500' : 'bg-indigo-500'}`}
              />
              <p className="text-sm text-gray-500 mt-3 flex justify-between">
                <span>{progress?.message || 'Initializing...'}</span>
              </p>
            </CardContent>
          </Card>

          <AnimatePresence>
            {status === 'QUEUED' && queuePosition && queuePosition > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <AnalysisQueueCard position={queuePosition} />
              </motion.div>
            )}
          </AnimatePresence>

          <EstimatedTimeCard 
            startedAt={startedAt} 
            isComplete={isCompleted || isFailed} 
          />

          <div className="h-[300px]">
            <LiveLogs logs={logs} />
          </div>
        </div>

        <div>
          <Card className="bg-gray-900 border-gray-800 h-full">
            <CardHeader>
              <CardTitle className="text-lg text-white">Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressTimeline currentStatus={status as AnalysisStatus} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
