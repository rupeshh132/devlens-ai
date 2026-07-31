import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

interface LiveLogsProps {
  logs: string[];
}

export function LiveLogs({ logs }: LiveLogsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new logs arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <Card className="bg-gray-950 border-gray-800 flex flex-col h-full">
      <CardHeader className="py-3 border-b border-gray-800 bg-gray-900/50">
        <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          Live Logs
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-grow relative">
        <div 
          ref={scrollRef}
          className="absolute inset-0 p-4 overflow-y-auto font-mono text-xs text-gray-300 space-y-1 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
        >
          {logs.length === 0 ? (
            <span className="text-gray-600 italic">Waiting for logs...</span>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="flex">
                <span className="text-gray-600 mr-4 shrink-0">
                  {new Date().toISOString().substring(11, 19)}
                </span>
                <span className={`${log.includes('ERROR') ? 'text-red-400' : log.includes('WARN') ? 'text-yellow-400' : 'text-gray-300'}`}>
                  {log}
                </span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
