import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Progress } from '../../../components/ui/progress';
import { generateSkillGapAnalysis } from '../api/skillgapApi';
import type { SkillGapAnalysis, GapReport } from '../types';
import { Loader2, Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from '../../../components/ui/input';

interface SkillGapDashboardProps {
  initialAnalysis: SkillGapAnalysis | null;
  onAnalysisGenerated: (analysis: SkillGapAnalysis) => void;
}

export const SkillGapDashboard: React.FC<SkillGapDashboardProps> = ({ initialAnalysis, onAnalysisGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [targetRole, setTargetRole] = useState(initialAnalysis?.targetRole || '');
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!targetRole.trim()) return;
    try {
      setIsGenerating(true);
      setError(null);
      const data = await generateSkillGapAnalysis({ targetRole });
      onAnalysisGenerated(data);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } }; message?: string };
      setError(error.response?.data?.message || error.message || 'Failed to generate analysis. Make sure you have uploaded a resume.');
    } finally {
      setIsGenerating(false);
    }
  };

  const parseReport = (analysis: SkillGapAnalysis | null): GapReport | null => {
    if (!analysis || !analysis.gapReport) return null;
    try {
      return JSON.parse(analysis.gapReport) as GapReport;
    } catch {
      return null;
    }
  };

  const report = parseReport(initialAnalysis);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            Target Role Setup
          </CardTitle>
          <CardDescription>
            Enter the job role you want to prepare for. AI will analyze your latest resume against this role.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g. Senior Frontend Engineer"
              className="max-w-md w-full"
            />
            <Button onClick={handleGenerate} disabled={isGenerating || !targetRole.trim()} className="w-full sm:w-auto">
              {isGenerating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
              {initialAnalysis ? 'Regenerate Analysis' : 'Analyze Skill Gap'}
            </Button>
          </div>
          {error && <p className="text-destructive mt-2 text-sm">{error}</p>}
        </CardContent>
      </Card>

      {report && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Overall Match</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6 space-y-6">
              <div className="text-7xl font-black tracking-tighter text-primary">
                {report.overallMatchPercentage}%
              </div>
              <Progress value={report.overallMatchPercentage} className="w-full h-2" />
              <p className="text-muted-foreground text-center text-sm font-medium">
                Based on the alignment between your resume and standard industry requirements for {initialAnalysis?.targetRole}.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill Alignment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Matched Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {report.matchedSkills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border">
                        {skill}
                      </span>
                    ))}
                    {report.matchedSkills.length === 0 && <span className="text-muted-foreground text-sm">No significant matches found.</span>}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3 mt-6">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    Missing Skills to Acquire
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {report.missingSkills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                        {skill}
                      </span>
                    ))}
                    {report.missingSkills.length === 0 && <span className="text-muted-foreground text-sm">No significant gaps found.</span>}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
