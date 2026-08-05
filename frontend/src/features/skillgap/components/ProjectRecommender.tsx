import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { SkillGapAnalysis, GapReport, ProjectIdea } from '../types';
import { Rocket, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectRecommenderProps {
  analysis: SkillGapAnalysis | null;
}

export const ProjectRecommender: React.FC<ProjectRecommenderProps> = ({ analysis }) => {
  if (!analysis || !analysis.gapReport) return null;

  let report: GapReport;
  try {
    report = JSON.parse(analysis.gapReport) as GapReport;
  } catch {
    return null;
  }

  if (!report.projectIdeas || report.projectIdeas.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Recommended Projects</h2>
        <p className="text-muted-foreground">
          Build these tailored projects to bridge your skill gaps and improve your resume for the {analysis.targetRole} role.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {report.projectIdeas.map((project: ProjectIdea, index: number) => (
          <Card key={index} className="flex flex-col h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  <Rocket className="h-4 w-4" />
                </div>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-6">
                {project.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  <Code className="h-3 w-3" />
                  Targeted Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skillsTargeted.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full group" asChild>
                <Link to={`/dashboard`}>
                  Start Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
