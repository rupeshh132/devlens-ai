import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { generateInterview } from '../api/interviewApi';
import type { InterviewSession, InterviewSessionData, InterviewQuestion } from '../types';
import { Loader2, Mic, Eye, EyeOff, MessageSquare } from 'lucide-react';

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

  const handleGenerate = async () => {
    if (!targetRole.trim()) return;
    try {
      setIsGenerating(true);
      setError(null);
      const data = await generateInterview({ targetRole });
      onSessionGenerated(data);
      setCurrentQuestionIndex(0);
      setShowAnswer(false);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } }; message?: string };
      setError(error.response?.data?.message || error.message || 'Failed to generate interview. Ensure you have run a skill gap analysis first.');
    } finally {
      setIsGenerating(false);
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

      {data && data.questions && data.questions.length > 0 && (
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
              <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                ${data.questions[currentQuestionIndex].difficulty === 'Easy' ? 'bg-green-500/10 text-green-500' : ''}
                ${data.questions[currentQuestionIndex].difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-500' : ''}
                ${data.questions[currentQuestionIndex].difficulty === 'Hard' ? 'bg-red-500/10 text-red-500' : ''}
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
              <div className="p-6 bg-secondary/30 rounded-lg border border-secondary/50 animate-in fade-in zoom-in-95 duration-200">
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Expected Answer Strategy:
                </h4>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {data.questions[currentQuestionIndex].expectedAnswer}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full space-y-4 py-12 text-muted-foreground">
                <Mic className="h-12 w-12 text-muted/50 mb-2" />
                <p className="text-center max-w-md">Take a moment to formulate your answer out loud. When you're ready, reveal the expected answer to compare.</p>
              </div>
            )}
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
              variant={showAnswer ? "secondary" : "default"} 
              onClick={() => setShowAnswer(!showAnswer)}
              className="min-w-[140px] w-full sm:w-auto order-1 sm:order-2"
            >
              {showAnswer ? (
                <><EyeOff className="h-4 w-4 mr-2" /> Hide Answer</>
              ) : (
                <><Eye className="h-4 w-4 mr-2" /> Reveal Answer</>
              )}
            </Button>
            
            <Button 
              onClick={() => {
                setCurrentQuestionIndex(Math.min(data.questions.length - 1, currentQuestionIndex + 1));
                setShowAnswer(false);
              }}
              disabled={currentQuestionIndex === data.questions.length - 1}
              className="w-full sm:w-auto order-3"
            >
              Next
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
