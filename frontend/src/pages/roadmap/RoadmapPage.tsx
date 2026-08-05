import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { RoadmapView } from '../../features/roadmap/components/RoadmapView';
import { getLatestRoadmap } from '../../features/roadmap/api/roadmapApi';
import { Roadmap } from '../../features/roadmap/types';
import { Loader2 } from 'lucide-react';

export const RoadmapPage: React.FC = () => {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLatestRoadmap();
  }, []);

  const fetchLatestRoadmap = async () => {
    try {
      setIsLoading(true);
      const data = await getLatestRoadmap();
      setRoadmap(data);
    } catch (error) {
      console.log('No existing roadmap found');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoadmapGenerated = (newRoadmap: Roadmap) => {
    setRoadmap(newRoadmap);
  };

  return (
    <div className="space-y-10">
      <PageHeader 
        title="Dynamic Roadmap" 
        description="Your personalized step-by-step learning journey to bridge skill gaps and master your target role."
      />

      {isLoading ? (
        <div className="flex h-64 w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-10">
          <RoadmapView initialRoadmap={roadmap} onRoadmapGenerated={handleRoadmapGenerated} />
        </div>
      )}
    </div>
  );
};
