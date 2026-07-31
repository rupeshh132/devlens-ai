import { ProgressStep } from './ProgressStep';
import type { AnalysisStatus } from '../types/analysis';

interface ProgressTimelineProps {
  currentStatus: AnalysisStatus;
}

const timelineSteps: { status: AnalysisStatus; label: string }[] = [
  { status: 'QUEUED', label: 'Queued' },
  { status: 'CLONING', label: 'Repository Cloning' },
  { status: 'METADATA_EXTRACTION', label: 'Metadata Extraction' },
  { status: 'DEPENDENCY_ANALYSIS', label: 'Dependency Analysis' },
  { status: 'STATIC_ANALYSIS', label: 'Static Analysis' },
  { status: 'AI_PROCESSING', label: 'AI Processing' },
  { status: 'SCORING', label: 'Scoring' },
  { status: 'REPORT_GENERATION', label: 'Generating Report' },
];

export function ProgressTimeline({ currentStatus }: ProgressTimelineProps) {
  // Find index of current status
  let currentIndex = timelineSteps.findIndex(s => s.status === currentStatus);
  
  // If COMPLETED, FAILED, or CANCELLED, handle appropriately
  if (currentStatus === 'COMPLETED') currentIndex = timelineSteps.length;
  if (currentStatus === 'FAILED' || currentStatus === 'CANCELLED') {
    // We assume it failed at the current active step in a real app, 
    // for mock purposes we can just leave it as is or handle it externally
  }

  return (
    <div className="py-4">
      {timelineSteps.map((step, index) => {
        let stepState: 'pending' | 'active' | 'completed' | 'failed' = 'pending';
        
        if (currentStatus === 'FAILED' && index === currentIndex) {
          stepState = 'failed';
        } else if (index < currentIndex) {
          stepState = 'completed';
        } else if (index === currentIndex && currentStatus !== 'FAILED' && currentStatus !== 'CANCELLED') {
          stepState = 'active';
        }

        return (
          <ProgressStep 
            key={step.status}
            label={step.label}
            status={stepState}
            isLast={index === timelineSteps.length - 1}
          />
        );
      })}
    </div>
  );
}
