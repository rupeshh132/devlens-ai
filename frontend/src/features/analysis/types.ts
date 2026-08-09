export interface Vulnerability {
  id: string;
  filePath: string;
  lineNumber: number;
  severity: 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  description: string;
  suggestedFix: string;
}

export interface AnalysisReport {
  jobId: string;
  status?: string;
  errorMessage?: string;
  score: number;
  summary: string;
  vulnerabilities: Vulnerability[];
}
