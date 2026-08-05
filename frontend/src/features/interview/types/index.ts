export interface InterviewSession {
  id: string;
  targetRole: string;
  sessionData: string; // JSON string
  createdAt: string;
  updatedAt: string;
}

export interface InterviewSessionData {
  questions: InterviewQuestion[];
}

export interface InterviewQuestion {
  question: string;
  expectedAnswer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface InterviewRequest {
  targetRole: string;
}
