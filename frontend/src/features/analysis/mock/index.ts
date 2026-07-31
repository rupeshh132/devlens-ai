import type { Analysis, AnalysisHistoryItem, Progress, Score, Finding } from '../types/analysis';

export const mockScores: Score[] = [
  { category: 'ARCHITECTURE', score: 85, previousScore: 80 },
  { category: 'CODE_QUALITY', score: 72, previousScore: 75 },
  { category: 'SECURITY', score: 95, previousScore: 95 },
  { category: 'PERFORMANCE', score: 68, previousScore: 65 },
  { category: 'TESTING', score: 50, previousScore: 48 },
  { category: 'DOCUMENTATION', score: 90, previousScore: 85 },
  { category: 'MAINTAINABILITY', score: 78, previousScore: 78 },
];

export const mockFindings: Finding[] = [
  {
    id: 'f-1',
    category: 'SECURITY',
    severity: 'CRITICAL',
    priority: 'MUST_FIX',
    title: 'SQL Injection Vulnerability',
    description: 'User input is concatenated directly into SQL query.',
    filePath: 'src/api/users.ts',
    lineNumber: 42,
    confidence: 98,
    evidence: "const query = 'SELECT * FROM users WHERE email = ' + req.body.email;",
    recommendations: [
      {
        id: 'r-1',
        description: 'Use parameterized queries.',
        codeSnippet: 'db.query("SELECT * FROM users WHERE email = $1", [req.body.email])',
        effort: 'LOW',
      },
    ],
  },
  {
    id: 'f-2',
    category: 'PERFORMANCE',
    severity: 'HIGH',
    priority: 'SHOULD_FIX',
    title: 'N+1 Query Detected',
    description: 'Fetching related entities in a loop.',
    filePath: 'src/services/orderService.ts',
    lineNumber: 112,
    confidence: 90,
    recommendations: [
      {
        id: 'r-2',
        description: 'Use a DataLoader or bulk fetch.',
        effort: 'MEDIUM',
      },
    ],
  },
  {
    id: 'f-3',
    category: 'TESTING',
    severity: 'MEDIUM',
    priority: 'SHOULD_FIX',
    title: 'Low Test Coverage',
    description: 'Core billing logic has only 45% test coverage.',
    filePath: 'src/services/billing.ts',
    confidence: 100,
    recommendations: [
      {
        id: 'r-3',
        description: 'Add edge case tests for failed payments.',
        effort: 'HIGH',
      },
    ],
  },
];

export const mockAnalysis: Analysis = {
  id: 'ana-12345',
  repositoryId: 'repo-1',
  status: 'COMPLETED',
  commitHash: 'a1b2c3d4e5f6',
  overallScore: 76,
  previousScore: 74,
  scores: mockScores,
  findings: mockFindings,
  report: {
    id: 'rep-1',
    analysisId: 'ana-12345',
    fileFormat: 'PDF',
    storageUrl: 'https://storage.example.com/report.pdf',
    sizeBytes: 1048576,
    generatedAt: '2026-07-31T12:00:00Z',
  },
  startedAt: '2026-07-31T11:58:00Z',
  completedAt: '2026-07-31T12:00:00Z',
};

export const mockHistory: AnalysisHistoryItem[] = [
  { id: 'h-1', date: '2026-07-01T10:00:00Z', overallScore: 65, commitHash: 'abc1234' },
  { id: 'h-2', date: '2026-07-15T10:00:00Z', overallScore: 70, commitHash: 'def5678' },
  { id: 'h-3', date: '2026-07-31T12:00:00Z', overallScore: 76, commitHash: 'a1b2c3d' },
];

export const mockProgress: Progress = {
  status: 'AI_PROCESSING',
  percentage: 65,
  message: 'Scanning for security vulnerabilities...',
};
