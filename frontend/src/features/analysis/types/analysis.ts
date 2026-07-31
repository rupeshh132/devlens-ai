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

export type RecommendationPriority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export type RecommendationEffort = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Recommendation {
  id: string;
  title: string;
  category: AnalysisCategory;
  priority: RecommendationPriority;
  effort: RecommendationEffort;
  shortSummary: string;
  problem: string;
  recommendation: string;
  whyItMatters: string;
  implementationSteps: string[];
  expectedImpact: string;
  relatedFindings: string[];
  affectedFiles: string[];
  codeSnippet?: string;
}

export interface FindingRecommendation {
  id: string;
  description: string;
  codeSnippet?: string;
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
  recommendations: FindingRecommendation[];
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
  previousScore?: number;
  commitHash: string;
  commitMessage?: string;
  branch?: string;
  status: AnalysisStatus;
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
  branch?: string;
  overallScore: number;
  previousScore?: number;
  scores: Score[];
  findings: Finding[];
  recommendations: Recommendation[];
  report?: ReportMetadata;
  metrics?: AnalysisMetrics;
  startedAt: string;
  completedAt?: string;
}
