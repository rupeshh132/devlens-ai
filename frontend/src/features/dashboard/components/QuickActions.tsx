import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, UploadCloud, BrainCircuit, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function QuickActions() {
  const navigate = useNavigate();
  const actions = [
    {
      label: 'Analyze Repository',
      icon: Code2,
      variant: 'primary' as const,
      description: 'Start a new analysis scan',
      href: '/repositories',
    },
    {
      label: 'Upload Project',
      icon: UploadCloud,
      variant: 'outline' as const,
      description: 'Upload local code archive',
      href: '/repositories',
    },
    {
      label: 'Skill Gap Analysis',
      variant: 'outline' as const,
      description: 'Identify your weak areas',
      href: '/skill-gap',
    },
    {
      label: 'Mock Interview',
      icon: Mic,
      variant: 'outline' as const,
      description: 'Practice with AI',
      href: '/interview',
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
            onClick={() => navigate(action.href)}
            className={`w-full justify-start h-auto py-3 px-4 ${action.variant === 'outline' ? 'border-muted-foreground/20 hover:bg-muted/50' : ''}`}
          >
            <div className="flex items-center gap-3">
              {action.icon && (
                <div className={`${action.variant === 'primary' ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                  <action.icon className="h-4 w-4" strokeWidth={2} />
                </div>
              )}
              <div className="flex flex-col items-start text-left">
                <span className="font-medium text-sm leading-none mb-1">{action.label}</span>
                <span className={`text-xs font-normal ${action.variant === 'primary' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{action.description}</span>
              </div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
