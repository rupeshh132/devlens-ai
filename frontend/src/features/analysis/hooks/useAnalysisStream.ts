/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import type { Progress, AnalysisStatus } from '../types/analysis';

export function useAnalysisStream(jobId: string | undefined) {
  const [progress, setProgress] = useState<Progress | undefined>(undefined);
  const [logs, setLogs] = useState<{ id: string; message: string; timestamp: string }[]>([]);
  const [isConnectionClosed, setIsConnectionClosed] = useState(false);

  useEffect(() => {
    if (!jobId) {
      setProgress(undefined);
      setLogs([]);
      setIsConnectionClosed(false);
      return;
    }

    // Reset state for new job
    setLogs([]);
    setIsConnectionClosed(false);

    // Hardcode the API base URL depending on your configuration or use an environment variable
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';
    
    // Note: withCredentials: true ensures HttpOnly cookies are sent
    const eventSource = new EventSource(`${baseUrl}/analyses/${jobId}/progress/stream`, {
      withCredentials: true
    });

    eventSource.addEventListener('progress', (event) => {
      try {
        const data = JSON.parse(event.data);
        const newProgress: Progress = {
          status: data.status as AnalysisStatus,
          percentage: data.progress,
          message: data.message
        };
        
        setProgress(newProgress);

        if (data.message) {
          setLogs(prev => [...prev, {
            id: Math.random().toString(36).substr(2, 9),
            message: data.message,
            timestamp: new Date().toISOString()
          }]);
        }

        if (data.status === 'COMPLETED' || data.status === 'FAILED' || data.status === 'CANCELLED') {
          eventSource.close();
          setIsConnectionClosed(true);
        }
      } catch (err) {
        console.error('Failed to parse SSE message', err);
      }
    });

    eventSource.addEventListener('heartbeat', (event) => {
      console.log('SSE Heartbeat:', event.data);
    });

    eventSource.onerror = () => {
      console.error('SSE connection error');
      // EventSource auto-reconnects, but if we want to stop it on error we could close it.
      // We will let it auto-reconnect unless we received a terminal status.
    };

    return () => {
      eventSource.close();
    };
  }, [jobId]);

  return { progress, logs, isConnectionClosed };
}
