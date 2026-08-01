import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { RepositoryStatus, Repository } from '../mock'; // Reusing type definitions or redefining them

interface RecentRepositoriesProps {
  repositories: Repository[];
}

export function RecentRepositories({ repositories }: RecentRepositoriesProps) {
  const getStatusBadgeVariant = (status: RepositoryStatus) => {
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

  const getScoreColor = (score: number, status: RepositoryStatus) => {
    if (status === 'Analyzing') return 'text-muted-foreground';
    if (score >= 90) return 'text-emerald-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-destructive';
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Repositories</CardTitle>
        <CardDescription>Latest codebases analyzed by DevLens AI.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border border-muted/50">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead>Repository Name</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Last Analysis</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {repositories.map((repo: Repository) => (
                <TableRow key={repo.id}>
                  <TableCell className="font-medium">{repo.name}</TableCell>
                  <TableCell>{repo.language}</TableCell>
                  <TableCell className="text-muted-foreground">{repo.lastAnalysis}</TableCell>
                  <TableCell className={`text-right font-semibold ${getScoreColor(repo.score, repo.status)}`}>
                    {repo.status === 'Analyzing' ? '-' : repo.score}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(repo.status)}>
                      {repo.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
