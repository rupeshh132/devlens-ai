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
  const getStatusBadgeVariant = (status: RepositoryDetails['status']) => {
    switch (status) {
      case 'Healthy':
        return 'default';
      case 'Warning':
        return 'secondary';
      case 'Critical':
        return 'destructive';
      case 'Analyzing':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const getScoreColor = (score: number, status: RepositoryDetails['status']) => {
    if (status === 'Analyzing') return 'text-muted-foreground';
    if (score >= 90) return 'text-emerald-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-destructive';
  };

  return (
    <Card className="hover:bg-muted/50 transition-colors border-muted/60 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FolderGit2 className="h-5 w-5 text-muted-foreground" />
              <Link to={`/repositories/${repository.id}`} className="font-semibold text-lg hover:underline text-foreground">
                {repository.owner} / {repository.name}
              </Link>
              <Badge variant="outline" className="ml-2 text-xs py-0 h-5">
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
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                {repository.language}
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4" />
                {repository.stars}
              </div>
              <div className="flex items-center gap-1.5">
                Updated {repository.lastUpdated}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end justify-between min-w-[200px] space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Health Score</p>
                <div className={`text-2xl font-bold leading-none ${getScoreColor(repository.score, repository.status)}`}>
                  {repository.status === 'Analyzing' ? '-' : repository.score}
                </div>
              </div>
              <Badge variant={getStatusBadgeVariant(repository.status)}>
                {repository.status}
              </Badge>
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button asChild variant="outline" className="w-full md:w-auto">
                <Link to={`/repositories/${repository.id}`}>
                  Details
                </Link>
              </Button>
              <Button className="w-full md:w-auto">
                <Activity className="h-4 w-4 mr-2" />
                Analyze
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
