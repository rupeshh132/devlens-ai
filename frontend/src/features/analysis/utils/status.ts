import type { AnalysisStatus } from '../types/analysis';

export function getStatusLabel(status: AnalysisStatus): string {
  const labels: Record<AnalysisStatus, string> = {
    IDLE: 'Idle',
    QUEUED: 'Queued',
    CLONING: 'Repository Cloning',
    METADATA_EXTRACTION: 'Metadata Extraction',
    DEPENDENCY_ANALYSIS: 'Dependency Analysis',
    STATIC_ANALYSIS: 'Static Analysis',
    AI_PROCESSING: 'AI Processing',
    SCORING: 'Scoring',
    REPORT_GENERATION: 'Generating Report',
    COMPLETED: 'Completed',
    FAILED: 'Failed',
    CANCELLED: 'Cancelled',
    ARCHIVED: 'Archived',
    DELETED: 'Deleted',
  };
  return labels[status] || status;
}

export function isActiveStatus(status: AnalysisStatus): boolean {
  return [
    'QUEUED', 'CLONING', 'METADATA_EXTRACTION', 'DEPENDENCY_ANALYSIS', 
    'STATIC_ANALYSIS', 'AI_PROCESSING', 'SCORING', 'REPORT_GENERATION'
  ].includes(status);
}
