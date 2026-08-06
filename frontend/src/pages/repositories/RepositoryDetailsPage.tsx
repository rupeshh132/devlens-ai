import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRepository } from '@/features/repositories/hooks/useRepository';
import { useDeleteRepository } from '@/features/repositories/hooks/useDeleteRepository';
import { useSyncRepository } from '@/features/repositories/hooks/useSyncRepository';
import { useRepositoryAnalyses } from '@/features/repositories/hooks/useRepositoryAnalyses';
import { api } from '@/lib/api';
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
  const { data: analyses } = useRepositoryAnalyses(id!);
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!id) return;
    setIsAnalyzing(true);
    try {
      await api.post('/analyses/start', { repositoryId: id });
    } catch (err) {
      console.error('Analysis failed to start', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

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
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary" />
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
              {repository.name}
            </h1>
            <Badge variant="outline" className="ml-3 text-xs py-0.5 h-6 font-semibold uppercase tracking-wider">
              {repository.visibility === 'Private' ? (
                <Lock className="h-3 w-3 mr-1" />
              ) : (
                <Globe className="h-3 w-3 mr-1" />
              )}
              {repository.visibility}
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl font-medium">
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
          {analyses && analyses.length > 0 && (
            <Button variant="secondary" onClick={() => navigate(`/analysis/${analyses[0].id}`)}>
              View Latest Report
            </Button>
          )}
          <Button onClick={handleAnalyze} disabled={isAnalyzing || isRefreshing}>
            <Activity className={`h-4 w-4 mr-2 ${isAnalyzing ? 'animate-pulse' : ''}`} />
            {isAnalyzing ? 'Starting...' : 'Analyze Now'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-card border-border">
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
              {repository.description && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">{repository.description}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle>Recent Commits</CardTitle>
              {repository.url && (
                <a
                  href={`${repository.url}/commits`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  View on GitHub →
                </a>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-6 gap-3 text-center">
                <GitCommit className="h-8 w-8 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">Commit history will be available in an upcoming update.</p>
                {repository.url && (
                  <a
                    href={`${repository.url}/commits`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors"
                  >
                    View commits on GitHub
                  </a>
                )}
              </div>
            </CardContent>
          </Card>

          {analyses && analyses.length > 0 && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Analysis History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {(analyses as any[]).slice(0, 5).map((analysis: any) => (
                    <div key={analysis.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          analysis.status === 'COMPLETED' ? 'bg-emerald-500' :
                          analysis.status === 'FAILED' ? 'bg-destructive' : 'bg-yellow-500'
                        }`} />
                        <div>
                          <p className="text-sm font-medium">
                            {analysis.status === 'COMPLETED' ? 'Analysis Complete' :
                             analysis.status === 'FAILED' ? 'Analysis Failed' : 'In Progress'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {analysis.createdAt
                              ? new Date(analysis.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                              : 'Unknown date'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {analysis.score != null && (
                          <span className={`text-sm font-bold ${
                            analysis.score >= 90 ? 'text-emerald-500' :
                            analysis.score >= 70 ? 'text-yellow-500' : 'text-destructive'
                          }`}>{analysis.score}/100</span>
                        )}
                        {analysis.status === 'COMPLETED' && (
                          <Button size="sm" variant="outline" onClick={() => navigate(`/analysis/${analysis.id}`)}>
                            View Report
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Health Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center h-32 w-32 rounded-full border-8 border-muted">
                <div className={`absolute inset-0 rounded-full border-8 border-t-transparent border-r-transparent transform -rotate-45 ${repository.status === 'Analyzing' ? 'animate-spin border-muted-foreground' : (repository.score >= 90 ? 'border-emerald-500' : repository.score >= 70 ? 'border-yellow-500' : 'border-destructive')}`} style={{ opacity: 0.2 }} />
                <div className="text-center">
                  <span className={`text-6xl font-black tracking-tighter ${
                    repository.score === 0 ? 'text-muted-foreground' : getScoreColor(repository.score, repository.status)
                  }`}>
                    {repository.status === 'Analyzing' ? '-' : repository.score === 0 && repository.lastAnalysis === 'N/A' ? 'N/A' : repository.score}
                  </span>
                  <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mt-2">out of 100</p>
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
