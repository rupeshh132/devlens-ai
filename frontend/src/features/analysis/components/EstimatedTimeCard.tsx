import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Timer } from 'lucide-react';

interface EstimatedTimeCardProps {
  startedAt?: string;
  estimatedTotalSeconds?: number;
  isComplete: boolean;
}

export function EstimatedTimeCard({ 
  startedAt, 
  estimatedTotalSeconds = 120,
  isComplete
}: EstimatedTimeCardProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!startedAt || isComplete) return;

    const start = new Date(startedAt).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setElapsed(Math.floor((now - start) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startedAt, isComplete]);

  const remaining = Math.max(0, estimatedTotalSeconds - elapsed);
  
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 rounded-lg">
            <Timer className="h-5 w-5 text-indigo-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Elapsed Time</p>
            <p className="text-xl font-mono font-semibold text-white">
              {formatTime(elapsed)}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Clock className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Estimated Remaining</p>
            <p className="text-xl font-mono font-semibold text-white">
              {isComplete ? '0:00' : formatTime(remaining)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
