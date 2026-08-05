import React from 'react';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Trophy, Medal, Star, Activity, History, BookOpen, Mic } from 'lucide-react';
import { PageHeader } from '../../components/layout/PageHeader';

export const UserProfile: React.FC = () => {
  const { user } = useAuth();
  
  // In a real implementation, we would fetch history and parsed badges from the backend.
  const points = user?.points || 0;
  
  // Safely parse badges if they exist
  let badges: string[] = [];
  try {
    if (user?.badges) {
      const parsed = JSON.parse(user.badges);
      if (Array.isArray(parsed)) badges = parsed;
    }
  } catch (e) {
    console.error("Failed to parse badges", e);
  }

  // Placeholder history items until we add a full history API
  const historyItems = [
    { title: 'Mock Interview Completed', date: '2 hours ago', icon: Mic, type: 'interview' },
    { title: 'Roadmap Generated', date: 'Yesterday', icon: BookOpen, type: 'roadmap' },
    { title: 'Skill Gap Analysis', date: '2 days ago', icon: Activity, type: 'analysis' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PageHeader 
        title="Your Profile & Progress" 
        description="Track your journey, points, and achievements." 
      />

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Info & Score */}
        <Card className="col-span-1 border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Trophy className="h-24 w-24 text-primary" />
          </div>
          <CardHeader>
            <CardTitle className="text-xl">Developer Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Name</p>
              <p className="text-2xl font-bold">{user?.firstName} {user?.lastName}</p>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>
            
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Total Score</p>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Star className="h-8 w-8 text-primary fill-primary" />
                </div>
                <div>
                  <p className="text-4xl font-black text-primary">{points}</p>
                  <p className="text-sm font-medium">XP Points</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges & Achievements */}
        <Card className="col-span-2 border-muted/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-amber-500" /> 
              Badges & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            {badges.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-muted-foreground border-2 border-dashed border-muted rounded-xl bg-muted/20">
                <Trophy className="h-12 w-12 text-muted-foreground/50 mb-3" />
                <p>Complete tasks like uploading resumes and taking interviews to earn badges!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {badges.map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl border border-secondary hover:border-primary/50 transition-colors">
                    <Medal className="h-8 w-8 text-amber-500 mb-2" />
                    <span className="font-medium text-sm text-center">{badge}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Activity History */}
      <Card className="border-muted/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {historyItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`p-2 rounded-full mt-0.5 
                  ${item.type === 'interview' ? 'bg-blue-500/10 text-blue-500' : ''}
                  ${item.type === 'roadmap' ? 'bg-green-500/10 text-green-500' : ''}
                  ${item.type === 'analysis' ? 'bg-purple-500/10 text-purple-500' : ''}
                `}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-medium leading-none">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
