import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import { ScrollArea } from '@/components/ui/scroll-area';
import type { Activity, ActivityType } from '../mock';
import { CheckCircle2, AlertTriangle, FileText, GitBranch } from 'lucide-react';

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const getActivityIcon = (type: ActivityType | string) => {
    switch (type) {
      case 'analysis_completed':
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case 'security_alert':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'report_generated':
        return <FileText className="h-4 w-4 text-blue-500" />;
      case 'repo_added':
        return <GitBranch className="h-4 w-4 text-primary" />;
      default:
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
    }
  };

  return (
    <Card className="col-span-1 lg:col-span-2 border-muted/60 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            {activities.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">No recent activity found.</p>
            ) : (
              activities.map((activity, index) => (
                <div key={activity.id} className="relative flex gap-4">
                  {/* Timeline Connector */}
                  {index !== activities.length - 1 && (
                    <span 
                      className="absolute left-[11px] top-8 h-full w-[2px] bg-border" 
                      aria-hidden="true" 
                    />
                  )}
                  
                  <div className="relative mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-background border ring-4 ring-background">
                    {getActivityIcon(activity.type)}
                  </div>
                  
                  <div className="flex-auto">
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {activity.title}
                          {activity.repoName && (
                            <span className="font-normal text-muted-foreground ml-1">
                              on <span className="font-medium text-foreground">{activity.repoName}</span>
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {activity.description}
                        </p>
                      </div>
                      <time className="flex-none text-xs text-muted-foreground whitespace-nowrap">
                        {activity.timestamp}
                      </time>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
