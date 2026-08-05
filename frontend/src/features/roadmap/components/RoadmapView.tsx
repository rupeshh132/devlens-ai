import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { generateRoadmap } from '../api/roadmapApi';
import type { Roadmap, RoadmapData, Milestone } from '../types';
import { Loader2, Map as MapIcon, CheckCircle, Circle, Clock, ExternalLink } from 'lucide-react';

interface RoadmapViewProps {
  initialRoadmap: Roadmap | null;
  onRoadmapGenerated: (roadmap: Roadmap) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ initialRoadmap, onRoadmapGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [title, setTitle] = useState(initialRoadmap?.title || 'Senior React Developer');
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!title.trim()) return;
    try {
      setIsGenerating(true);
      setError(null);
      const data = await generateRoadmap({ title });
      onRoadmapGenerated(data);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } }; message?: string };
      setError(error.response?.data?.message || error.message || 'Failed to generate roadmap. Ensure you have run a skill gap analysis first.');
    } finally {
      setIsGenerating(false);
    }
  };

  const parseRoadmap = (roadmap: Roadmap | null): RoadmapData | null => {
    if (!roadmap || !roadmap.roadmapData) return null;
    try {
      return JSON.parse(roadmap.roadmapData) as RoadmapData;
    } catch {
      return null;
    }
  };

  const data = parseRoadmap(initialRoadmap);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapIcon className="h-5 w-5 text-primary" />
            Generate Dynamic Roadmap
          </CardTitle>
          <CardDescription>
            AI will create a step-by-step learning roadmap based on your latest skill gap analysis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Master React and Node.js"
              className="max-w-md"
            />
            <Button onClick={handleGenerate} disabled={isGenerating || !title.trim()}>
              {isGenerating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
              {initialRoadmap ? 'Regenerate Roadmap' : 'Generate Roadmap'}
            </Button>
          </div>
          {error && <p className="text-destructive mt-2 text-sm">{error}</p>}
        </CardContent>
      </Card>

      {data && data.milestones && data.milestones.length > 0 && (
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-8 mt-10">
          {data.milestones.map((milestone: Milestone, index: number) => (
            <div key={index} className="relative pl-8">
              <div className="absolute -left-[21px] top-1 bg-background p-1">
                {milestone.status === 'completed' ? (
                  <CheckCircle className="h-8 w-8 text-green-500 bg-background rounded-full" />
                ) : milestone.status === 'in_progress' ? (
                  <Clock className="h-8 w-8 text-amber-500 bg-background rounded-full" />
                ) : (
                  <Circle className="h-8 w-8 text-muted-foreground bg-background rounded-full" />
                )}
              </div>
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                      {milestone.estimatedTime}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{milestone.description}</p>
                  
                  {milestone.resources && milestone.resources.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-semibold">Suggested Resources:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {milestone.resources.map((res, idx) => (
                          <li key={idx} className="text-sm text-primary hover:underline cursor-pointer flex items-center gap-1">
                            {res} <ExternalLink className="h-3 w-3" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
