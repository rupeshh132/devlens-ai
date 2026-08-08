import React from 'react';
import type { Resume } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { Progress } from '../../../components/ui/progress';

interface ResumeScoreCardProps {
  resume: Resume;
}

export const ResumeScoreCard: React.FC<ResumeScoreCardProps> = ({ resume }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  const suggestions: string[] = resume.suggestions ? JSON.parse(resume.suggestions) : [];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Resume Analysis Results</CardTitle>
          <CardDescription>File: {resume.fileName}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Score Circle */}
            <div className="flex flex-col items-center justify-center p-6 bg-card rounded-full w-48 h-48 border-8 border-border relative">
              <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-1">ATS Score</span>
              <span className={`text-6xl font-black tracking-tighter ${getScoreColor(resume.atsScore || 0)}`}>
                {resume.atsScore || 0}
              </span>
              <span className="text-xs font-bold text-muted-foreground mt-1">/ 100</span>
            </div>

            {/* Overview */}
            <div className="flex-1 space-y-4">
              <h3 className="text-lg font-medium">Quick Overview</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your resume has been analyzed and cross-referenced with your GitHub repositories. 
                {resume.atsScore && resume.atsScore >= 80 
                  ? " Great job! Your resume aligns well with your verified skills."
                  : " There's room for improvement to make your resume stand out."}
              </p>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Skills Match</span>
                  <span className="font-medium">Good</span>
                </div>
                <Progress value={85} className="h-2" indicatorClassName="bg-emerald-500" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {suggestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              AI Suggestions for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {suggestions.map((suggestion, idx) => (
                <li key={idx} className="flex items-start bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{suggestion}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
