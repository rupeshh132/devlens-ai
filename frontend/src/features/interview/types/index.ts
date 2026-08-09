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

export interface AnswerItem {
  question: string;
  expectedAnswer: string;
  userAnswer: string;
}

export interface InterviewEvaluationRequest {
  answers: AnswerItem[];
}

export interface FeedbackItem {
  question: string;
  score: number;
  feedback: string;
}

export interface InterviewEvaluationResponse {
  overallScore: number;
  feedback: FeedbackItem[];
}
