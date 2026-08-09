import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { RepositoryDetails } from '../types';
import { Lock, Globe, Star, Activity, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RepositoryCardProps {
  repository: RepositoryDetails;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const queryClient = useQueryClient();

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      await api.post('/analyses/start', { repositoryId: repository.id });
      queryClient.invalidateQueries({ queryKey: ['repositories'] });
      queryClient.invalidateQueries({ queryKey: ['repository', repository.id] });
      queryClient.invalidateQueries({ queryKey: ['repository-analyses', repository.id] });
    } catch (err) {
      console.error('Analysis failed to start', err);
    } finally {
      setIsAnalyzing(false);
    }
  };
  const getStatusBadgeVariant = (status: RepositoryDetails['status'], score: number) => {
    if (status === 'Healthy' && score === 0) return 'outline';
    if (status === 'Analyzing') return 'outline';
    switch (status) {
      case 'Healthy':
        return 'success';
      case 'Warning':
        return 'warning';
      case 'Critical':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getScoreColor = (score: number, status: RepositoryDetails['status']) => {
    if (status === 'Analyzing' || (status === 'Healthy' && score === 0)) return 'text-muted-foreground';
    if (score >= 90) return 'text-emerald-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-destructive';
  };

  return (
    <Card className="hover:border-primary/50 transition-colors border-border bg-card">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FolderGit2 className="h-5 w-5 text-muted-foreground" />
              <Link to={`/repositories/${repository.id}`} className="font-bold text-lg hover:underline text-foreground tracking-tight">
                {repository.owner} / {repository.name}
              </Link>
              <Badge variant="outline" className="ml-2 text-[10px] py-0 h-5 font-semibold uppercase tracking-wider">
                {repository.visibility === 'Private' ? (
                  <Lock className="h-3 w-3 mr-1" />
                ) : (
                  <Globe className="h-3 w-3 mr-1" />
                )}
                {repository.visibility}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-xl">
              {repository.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-1">
              <div className={`flex items-center gap-1.5 font-medium ${repository.language === 'Unknown' ? 'italic text-muted-foreground/70' : ''}`}>
                <div className={`w-2.5 h-2.5 rounded-full ${repository.language === 'Unknown' ? 'bg-muted-foreground/30' : 'bg-blue-500'}`} />
                {repository.language}
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Star className="h-4 w-4" />
                {repository.stars}
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                Updated {repository.lastUpdated}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end justify-between min-w-[200px] space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">Health Score</p>
                <div className={`text-4xl font-black tracking-tighter leading-none ${getScoreColor(repository.score, repository.status)}`}>
                  {(repository.status === 'Analyzing' || (repository.status === 'Healthy' && repository.score === 0)) ? '-' : repository.score}
                </div>
              </div>
              <Badge variant={getStatusBadgeVariant(repository.status, repository.score)}>
                {repository.status === 'Healthy' && repository.score === 0 ? 'Pending' : repository.status}
              </Badge>
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button asChild variant="outline" className="w-full md:w-auto">
                <Link to={`/repositories/${repository.id}`}>
                  Details
                </Link>
              </Button>
              <Button 
                className="w-full md:w-auto" 
                onClick={handleAnalyze} 
                disabled={isAnalyzing || repository.status === 'Analyzing'}
              >
                <Activity className={`h-4 w-4 mr-2 ${isAnalyzing || repository.status === 'Analyzing' ? 'animate-pulse' : ''}`} />
                {isAnalyzing || repository.status === 'Analyzing' ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
