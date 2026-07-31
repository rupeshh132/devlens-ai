import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, GitBranch as GithubIcon, UploadCloud, FileText } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      label: 'Analyze Repository',
      icon: Code2,
      variant: 'primary' as const,
      description: 'Start a new analysis scan',
    },
    {
      label: 'Upload Project',
      icon: UploadCloud,
      variant: 'outline' as const,
      description: 'Upload local code archive',
    },
    {
      label: 'Connect GitHub',
      icon: GithubIcon,
      variant: 'outline' as const,
      description: 'Sync repositories automatically',
    },
    {
      label: 'View Reports',
      icon: FileText,
      variant: 'outline' as const,
      description: 'Access past analysis reports',
    },
  ];

  return (
    <Card className="col-span-1 border-muted/60 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30">
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {actions.map((action, i) => (
          <Button
            key={i}
            variant={action.variant}
            className={`w-full justify-start h-auto py-3 px-4 ${action.variant === 'outline' ? 'border-muted-foreground/20 hover:bg-muted/50' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-md ${action.variant === 'primary' ? 'bg-primary-foreground/10' : 'bg-muted'}`}>
                <action.icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-medium text-sm leading-none mb-1">{action.label}</span>
                <span className="text-xs text-muted-foreground font-normal">{action.description}</span>
              </div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
