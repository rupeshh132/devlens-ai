export type AnalysisStatus =
  | 'IDLE'
  | 'QUEUED'
  | 'CLONING'
  | 'METADATA_EXTRACTION'
  | 'DEPENDENCY_ANALYSIS'
  | 'STATIC_ANALYSIS'
  | 'AI_PROCESSING'
  | 'SCORING'
  | 'REPORT_GENERATION'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELLED'
  | 'ARCHIVED'
  | 'DELETED';

export type AnalysisCategory =
  | 'ARCHITECTURE'
  | 'CODE_QUALITY'
  | 'SECURITY'
  | 'PERFORMANCE'
  | 'TESTING'
  | 'DOCUMENTATION'
  | 'MAINTAINABILITY';

export type Severity = 'INFO' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type Priority = 'NICE_TO_HAVE' | 'SHOULD_FIX' | 'MUST_FIX';

export interface Recommendation {
  id: string;
  description: string;
  codeSnippet?: string;
  effort: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface Finding {
  id: string;
  category: AnalysisCategory;
  severity: Severity;
  priority: Priority;
  title: string;
  description: string;
  filePath: string;
  lineNumber?: number;
  confidence: number;
  evidence?: string;
  recommendations: Recommendation[];
}

export interface Score {
  category: AnalysisCategory;
  score: number;
  previousScore?: number;
}

export interface Progress {
  status: AnalysisStatus;
  percentage: number;
  message: string;
}

export interface ReportMetadata {
  id: string;
  analysisId: string;
  fileFormat: 'PDF' | 'JSON';
  storageUrl: string;
  sizeBytes: number;
  generatedAt: string;
}

export interface AnalysisHistoryItem {
  id: string;
  date: string;
  overallScore: number;
  commitHash: string;
}

export interface AnalysisMetrics {
  linesOfCode: number;
  files: number;
  dependencies: number;
  languages: Record<string, number>;
  frameworks: string[];
  technicalDebt: string;
}

export interface Analysis {
  id: string;
  repositoryId: string;
  status: AnalysisStatus;
  commitHash: string;
  overallScore: number;
  previousScore?: number;
  scores: Score[];
  findings: Finding[];
  report?: ReportMetadata;
  metrics?: AnalysisMetrics;
  startedAt: string;
  completedAt?: string;
}
