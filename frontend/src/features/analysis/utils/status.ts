import type { AnalysisStatus } from '../types/analysis';

export function getStatusLabel(status: AnalysisStatus): string {
  const labels: Record<AnalysisStatus, string> = {
    IDLE: 'Idle',
    QUEUED: 'Queued',
    FETCHING: 'Fetching Repository',
    SCANNING: 'Scanning Files',
    ANALYZING: 'Running AI Analysis',
    REPORT_GENERATION: 'Generating Report',
    COMPLETED: 'Completed',
    FAILED: 'Failed',
    ARCHIVED: 'Archived',
    DELETED: 'Deleted',
  };
  return labels[status] || status;
}

export function isActiveStatus(status: AnalysisStatus): boolean {
  return ['QUEUED', 'FETCHING', 'SCANNING', 'ANALYZING', 'REPORT_GENERATION'].includes(status);
}
