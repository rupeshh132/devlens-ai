/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRepository } from '@/features/repositories/hooks/useRepository';
import { useDeleteRepository } from '@/features/repositories/hooks/useDeleteRepository';
import { useSyncRepository } from '@/features/repositories/hooks/useSyncRepository';
import type { RepositoryDetails } from '@/features/repositories/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  FolderGit2, 
  ArrowLeft, 
  Activity, 
  RefreshCcw, 
  Trash2, 
  Star,
  GitBranch,
  GitCommit,
  Calendar,
  AlertTriangle,
  Globe,
  Lock
} from 'lucide-react';
import { RepositoryFormDialog } from '@/features/repositories/components/RepositoryFormDialog';

export function RepositoryDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: repository, isLoading } = useRepository(id!);
  const { mutateAsync: deleteRepo, isPending: isDeleting } = useDeleteRepository();
  const { mutateAsync: syncRepo, isPending: isRefreshing } = useSyncRepository();
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const commits: unknown[] = []; // Not implemented in backend yet

  const handleRefresh = async () => {
    if (id) {
      await syncRepo(id);
    }
  };

  const handleDelete = async () => {
    if (id && confirm('Are you sure you want to delete this repository?')) {
      await deleteRepo(id);
      navigate('/repositories');
    }
  };

  const getScoreColor = (score: number, status: RepositoryDetails['status']) => {
    if (status === 'Analyzing') return 'text-muted-foreground';
    if (score >= 90) return 'text-emerald-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-destructive';
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-[200px] md:col-span-2" />
          <Skeleton className="h-[200px]" />
        </div>
      </div>
    );
  }

  if (!repository) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Repository Not Found</h2>
        <p className="text-muted-foreground mb-6">The repository you are looking for does not exist or you don't have access.</p>
        <Button asChild>
          <Link to="/repositories">Back to Repositories</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link to="/repositories" className="hover:text-foreground flex items-center transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Repositories
        </Link>
        <span>/</span>
        <span className="text-foreground">{repository.name}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <FolderGit2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {repository.name}
            </h1>
            <Badge variant="outline" className="ml-2">
              {repository.visibility === 'Private' ? (
                <Lock className="h-3 w-3 mr-1" />
              ) : (
                <Globe className="h-3 w-3 mr-1" />
              )}
              {repository.visibility}
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {repository.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" onClick={() => setIsEditOpen(true)}>
            Edit
          </Button>
          <Button variant="outline" onClick={handleRefresh} disabled={isRefreshing}>
            <RefreshCcw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="outline" className={repository.isFavorite ? 'text-yellow-500 border-yellow-500/50' : ''}>
            <Star className={`h-4 w-4 mr-2 ${repository.isFavorite ? 'fill-yellow-500' : ''}`} />
            {repository.isFavorite ? 'Starred' : 'Star'}
          </Button>
          <Button onClick={handleRefresh} disabled={isRefreshing}>
            <Activity className="h-4 w-4 mr-2" />
            Analyze Now
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30 border-muted/60">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <FolderGit2 className="h-4 w-4 mr-2" /> Owner
                  </p>
                  <p className="font-medium">{repository.owner}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" /> Language
                  </p>
                  <p className="font-medium">{repository.language}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <GitBranch className="h-4 w-4 mr-2" /> Branches
                  </p>
                  <p className="font-medium">{repository.branches}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-2" /> Last Updated
                  </p>
                  <p className="font-medium">{repository.lastUpdated}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30 border-muted/60">
            <CardHeader>
              <CardTitle>Recent Commits</CardTitle>
            </CardHeader>
            <CardContent>
              {commits.length > 0 ? (
                <div className="space-y-4">
                  {commits.map((commit: any) => (
                    <div key={commit.id} className="flex items-start gap-4">
                      <div className="mt-1 bg-muted p-1.5 rounded-md">
                        <GitCommit className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{commit.message}</p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <span className="font-mono bg-muted px-1.5 rounded text-foreground">{commit.id}</span>
                          <span>by {commit.author}</span>
                          <span>•</span>
                          <span>{commit.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No recent commits found.</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30 border-muted/60">
            <CardHeader>
              <CardTitle>Health Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center h-32 w-32 rounded-full border-8 border-muted">
                <div className={`absolute inset-0 rounded-full border-8 border-t-transparent border-r-transparent transform -rotate-45 ${repository.status === 'Analyzing' ? 'animate-spin border-muted-foreground' : (repository.score >= 90 ? 'border-emerald-500' : repository.score >= 70 ? 'border-yellow-500' : 'border-destructive')}`} style={{ opacity: 0.2 }} />
                <div className="text-center">
                  <span className={`text-4xl font-bold ${getScoreColor(repository.score, repository.status)}`}>
                    {repository.status === 'Analyzing' ? '-' : repository.score}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">out of 100</p>
                </div>
              </div>
              <div className="mt-6 text-center space-y-1">
                <Badge variant={repository.status === 'Healthy' ? 'default' : repository.status === 'Warning' ? 'secondary' : repository.status === 'Analyzing' ? 'outline' : 'destructive'}>
                  {repository.status}
                </Badge>
                <p className="text-sm text-muted-foreground">Last analyzed {repository.lastAnalysis}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-destructive text-lg">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Permanently delete this repository and all of its analysis history. This action cannot be undone.
              </p>
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                {isDeleting ? 'Deleting...' : 'Delete Repository'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <RepositoryFormDialog open={isEditOpen} onOpenChange={setIsEditOpen} repository={repository} />
    </div>
  );
}
