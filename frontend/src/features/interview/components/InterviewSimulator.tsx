import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { generateInterview, evaluateInterview } from '../api/interviewApi';
import type { InterviewSession, InterviewSessionData, InterviewEvaluationResponse } from '../types';
import { Loader2, Mic, Eye, EyeOff, MessageSquare, CheckCircle, BrainCircuit } from 'lucide-react';

import { useQueryClient } from '@tanstack/react-query';

interface InterviewSimulatorProps {
  initialSession: InterviewSession | null;
  onSessionGenerated: (session: InterviewSession) => void;
}

export const InterviewSimulator: React.FC<InterviewSimulatorProps> = ({ initialSession, onSessionGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [targetRole, setTargetRole] = useState(initialSession?.targetRole || 'Software Engineer');
  const [error, setError] = useState<string | null>(null);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<InterviewEvaluationResponse | null>(null);
  const queryClient = useQueryClient();

  const handleGenerate = async () => {
    if (!targetRole.trim()) return;
    try {
      setIsGenerating(true);
      setError(null);
      const data = await generateInterview({ targetRole });
      onSessionGenerated(data);
      setCurrentQuestionIndex(0);
      setShowAnswer(false);
      setUserAnswers({});
      setEvaluationResult(null);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } }; message?: string };
      setError(error.response?.data?.message || error.message || 'Failed to generate interview. Ensure you have run a skill gap analysis first.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEvaluate = async (sessionData: InterviewSessionData) => {
    try {
      setIsEvaluating(true);
      setError(null);
      const payload = {
        answers: sessionData.questions.map((q, index) => ({
          question: q.question,
          expectedAnswer: q.expectedAnswer,
          userAnswer: userAnswers[index] || ''
        }))
      };
      const result = await evaluateInterview(payload);
      setEvaluationResult(result);
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } }; message?: string };
      setError(error.response?.data?.message || error.message || 'Failed to evaluate interview.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const parseSession = (session: InterviewSession | null): InterviewSessionData | null => {
    if (!session || !session.sessionData) return null;
    try {
      return JSON.parse(session.sessionData) as InterviewSessionData;
    } catch {
      return null;
    }
  };

  const data = parseSession(initialSession);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-primary" />
            AI Interview Simulator
          </CardTitle>
          <CardDescription>
            Practice technical interviews tailored to your target role and skill profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g. Backend Developer"
              className="max-w-md w-full"
            />
            <Button onClick={handleGenerate} disabled={isGenerating || !targetRole.trim()} className="w-full sm:w-auto">
              {isGenerating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
              {initialSession ? 'Regenerate Questions' : 'Start Mock Interview'}
            </Button>
          </div>
          {error && <p className="text-destructive mt-2 text-sm">{error}</p>}
        </CardContent>
      </Card>

      {evaluationResult ? (
        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="text-center pb-8 border-b">
            <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold">Interview Completed</CardTitle>
            <CardDescription className="text-lg mt-2">
              Overall Score: <span className="font-bold text-primary">{evaluationResult.overallScore}/100</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" /> Detailed Feedback
            </h3>
            {evaluationResult.feedback.map((item: any, idx: number) => (
              <div key={idx} className="space-y-3 p-6 bg-secondary/30 rounded-lg border border-border/50">
                <div className="flex justify-between items-start gap-4">
                  <h4 className="font-medium flex-1">Q{idx + 1}: {item.question}</h4>
                  <span className="font-bold text-primary whitespace-nowrap">Score: {item.score}/100</span>
                </div>
                <div className="text-sm space-y-2 mt-4">
                  <p><span className="font-semibold text-muted-foreground">Your Answer:</span> {userAnswers[idx] || 'No answer provided'}</p>
                  <div className="p-4 bg-background rounded-md border mt-3">
                    <p className="font-semibold mb-1 flex items-center gap-2 text-primary">
                      AI Feedback
                    </p>
                    <p className="text-muted-foreground">{item.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="justify-center border-t pt-6 pb-6">
            <Button onClick={() => setEvaluationResult(null)} variant="outline">
              Review Answers
            </Button>
          </CardFooter>
        </Card>
      ) : data && data.questions && data.questions.length > 0 && (
        <Card className="border-primary/20 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-secondary">
            <div 
              className="h-full bg-primary transition-all duration-300" 
              style={{ width: `${((currentQuestionIndex + 1) / data.questions.length) * 100}%` }}
            />
          </div>
          <CardHeader>
            <div className="flex justify-between items-center text-sm text-muted-foreground mb-2 mt-2">
              <span>Question {currentQuestionIndex + 1} of {data.questions.length}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border
                ${data.questions[currentQuestionIndex].difficulty === 'Easy' ? 'bg-green-500/10 text-green-600 border-green-500/20' : ''}
                ${data.questions[currentQuestionIndex].difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-600 border-amber-500/20' : ''}
                ${data.questions[currentQuestionIndex].difficulty === 'Hard' ? 'bg-red-500/10 text-red-600 border-red-500/20' : ''}
              `}>
                {data.questions[currentQuestionIndex].difficulty}
              </span>
            </div>
            <CardTitle className="text-2xl mt-4 leading-relaxed flex gap-3">
              <MessageSquare className="h-6 w-6 mt-1 text-primary shrink-0" />
              {data.questions[currentQuestionIndex].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-6 min-h-[200px]">
            {showAnswer ? (
              <div className="p-8 bg-card rounded-2xl border border-border animate-in fade-in zoom-in-95 duration-200 mb-6">
                <h4 className="font-bold tracking-tight text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-primary mt-0.5" /> Expected Answer Strategy:
                </h4>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {data.questions[currentQuestionIndex].expectedAnswer}
                </p>
              </div>
            ) : null}
            <div className="flex flex-col h-full space-y-4 py-4">
              <Textarea
                value={userAnswers[currentQuestionIndex] || ''}
                onChange={(e) => setUserAnswers({...userAnswers, [currentQuestionIndex]: e.target.value})}
                placeholder="Type your answer here..."
                className="min-h-[150px] resize-y"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between border-t border-border/50 pt-6 bg-card/50">
            <Button 
              variant="outline" 
              onClick={() => {
                setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
                setShowAnswer(false);
              }}
              disabled={currentQuestionIndex === 0}
              className="w-full sm:w-auto order-2 sm:order-1"
            >
              Previous
            </Button>
            
            <Button 
              variant={showAnswer ? "secondary" : undefined} 
              onClick={() => setShowAnswer(!showAnswer)}
              className="min-w-[140px] w-full sm:w-auto order-1 sm:order-2"
            >
              {showAnswer ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Hide Answer</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Reveal Answer</>
              )}
            </Button>
            
            {currentQuestionIndex === data.questions.length - 1 ? (
              <Button 
                onClick={() => handleEvaluate(data)}
                disabled={isEvaluating}
                className="w-full sm:w-auto order-3"
              >
                {isEvaluating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                Submit Interview
              </Button>
            ) : (
              <Button 
                onClick={() => {
                  setCurrentQuestionIndex(Math.min(data.questions.length - 1, currentQuestionIndex + 1));
                  setShowAnswer(false);
                }}
                className="w-full sm:w-auto order-3"
              >
                Next
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

