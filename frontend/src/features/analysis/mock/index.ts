import type { Analysis, AnalysisHistoryItem, Progress, Score, Finding, Recommendation } from '../types/analysis';

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
        
      },
    ],
  },
];

export const mockRecommendations: Recommendation[] = [
  {
    id: 'rec-1',
    title: 'Migrate to Parameterized Queries',
    category: 'SECURITY',
    priority: 'CRITICAL',
    effort: 'MEDIUM',
    shortSummary: 'Prevent SQL injection attacks by replacing direct string concatenation in queries.',
    problem: 'The current implementation constructs SQL queries using direct string concatenation from user input (e.g. req.body.email). This makes the application vulnerable to SQL Injection attacks.',
    recommendation: 'Refactor all database queries to use parameterized queries or an ORM.',
    whyItMatters: 'SQL injection can lead to unauthorized data access, data loss, or complete system compromise.',
    implementationSteps: [
      'Identify all raw SQL queries in src/api/users.ts.',
      'Replace string concatenation with parameterized syntax ($1, $2, etc.).',
      'Pass user input as a separate array of parameters to the query execution function.',
      'Run security tests to ensure no regressions.'
    ],
    expectedImpact: 'Eliminates SQL injection vectors in the users service.',
    relatedFindings: ['f-1'],
    affectedFiles: ['src/api/users.ts'],
    codeSnippet: 'db.query("SELECT * FROM users WHERE email = $1", [req.body.email])'
  },
  {
    id: 'rec-2',
    title: 'Implement DataLoader for Orders',
    category: 'PERFORMANCE',
    priority: 'HIGH',
    effort: 'HIGH',
    shortSummary: 'Resolve N+1 query issue when fetching orders with related items.',
    problem: 'Fetching related entities in a loop causes O(N) database queries, significantly slowing down response times for large datasets.',
    recommendation: 'Use DataLoader to batch and cache database requests.',
    whyItMatters: 'Reduces database load and improves API response times, providing a better user experience.',
    implementationSteps: [
      'Install and configure DataLoader.',
      'Create a batch loading function for order items.',
      'Replace loop-based queries with dataloader.load() calls.'
    ],
    expectedImpact: 'Reduces database queries per request from N to 1, improving throughput by up to 400%.',
    relatedFindings: ['f-2'],
    affectedFiles: ['src/services/orderService.ts']
  }
];



export const mockAnalysis: Analysis = {
  id: 'ana-12345',
  repositoryId: 'repo-1',
  status: 'COMPLETED',
  commitHash: 'a1b2c3d4e5f6',
  overallScore: 76,
  previousScore: 74,
  metrics: {
    linesOfCode: 45200,
    files: 234,
    dependencies: 42,
    languages: {
      TypeScript: 85,
      CSS: 10,
      HTML: 5,
    },
    frameworks: ['React', 'Spring Boot'],
    technicalDebt: '2d 4h',
  },
  scores: mockScores,
  findings: mockFindings,
  recommendations: mockRecommendations,
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
  { 
    id: 'h-1', 
    date: '2026-07-01T10:00:00Z', 
    overallScore: 65, 
    previousScore: 60,
    commitHash: 'abc1234',
    commitMessage: 'Initial migration to TypeScript',
    branch: 'main',
    status: 'COMPLETED'
  },
  { 
    id: 'h-2', 
    date: '2026-07-15T10:00:00Z', 
    overallScore: 70, 
    previousScore: 65,
    commitHash: 'def5678',
    commitMessage: 'Fix authentication vulnerabilities',
    branch: 'main',
    status: 'COMPLETED'
  },
  { 
    id: 'h-failed', 
    date: '2026-07-28T14:30:00Z', 
    overallScore: 0, 
    commitHash: 'deadbeef',
    commitMessage: 'WIP: Broken build experiment',
    branch: 'feature/new-auth',
    status: 'FAILED'
  },
  { 
    id: 'h-3', 
    date: '2026-07-31T12:00:00Z', 
    overallScore: 76, 
    previousScore: 70,
    commitHash: 'a1b2c3d',
    commitMessage: 'Merge pull request #42 from feature/optimizations',
    branch: 'main',
    status: 'COMPLETED'
  },
];

export const mockProgress: Progress = {
  status: 'AI_PROCESSING',
  percentage: 65,
  message: 'Scanning for security vulnerabilities...',
};
export const mockBaseAnalysis: Analysis = { ...mockAnalysis, overallScore: 68, scores: [ { category: 'ARCHITECTURE', score: 70, previousScore: 70 }, { category: 'CODE_QUALITY', score: 65, previousScore: 65 }, { category: 'SECURITY', score: 62, previousScore: 62 }, { category: 'PERFORMANCE', score: 75, previousScore: 75 } ], findings: mockAnalysis.findings.slice(1) };
