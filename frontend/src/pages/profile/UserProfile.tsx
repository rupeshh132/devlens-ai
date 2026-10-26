import React, { useEffect, useState } from 'react';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { getRecentActivities } from '../../features/auth/services/activity.api';
import type { ActivityDto } from '../../features/auth/services/activity.api';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Trophy, Medal, Star, Activity, History, BookOpen, Mic, FileText, Edit2 } from 'lucide-react';
import { PageHeader } from '../../components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { api } from '@/lib/api';
import { toast } from 'sonner';

export const UserProfile: React.FC = () => {
  const { user } = useAuth();
  const [activities, setActivities] = useState<ActivityDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({ firstName: '', lastName: '', newPassword: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setEditForm({ firstName: user.firstName || '', lastName: user.lastName || '', newPassword: '' });
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    setSaving(true);
    try {
      await api.put('/users/profile', editForm);
      toast.success('Profile updated successfully! Refreshing...');
      setIsEditOpen(false);
      setTimeout(() => window.location.reload(), 1500);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getRecentActivities();
        setActivities(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchActivities();
  }, []);

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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'interview': return Mic;
      case 'roadmap': return BookOpen;
      case 'analysis': return Activity;
      case 'resume': return FileText; // Will import FileText
      default: return History;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PageHeader 
        title="Your Profile & Progress" 
        description="Track your journey, points, and achievements." 
      />

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Info & Score */}
        <Card className="col-span-1 border-border bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Trophy className="h-24 w-24 text-primary" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-xl">Developer Profile</CardTitle>
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input 
                      value={editForm.firstName} 
                      onChange={e => setEditForm({...editForm, firstName: e.target.value})} 
                      placeholder="First Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input 
                      value={editForm.lastName} 
                      onChange={e => setEditForm({...editForm, lastName: e.target.value})} 
                      placeholder="Last Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>New Password (Optional)</Label>
                    <Input 
                      type="password"
                      value={editForm.newPassword} 
                      onChange={e => setEditForm({...editForm, newPassword: e.target.value})} 
                      placeholder="Leave blank to keep unchanged" 
                    />
                  </div>
                  <Button onClick={handleUpdateProfile} className="w-full" disabled={saving}>
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
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
        <Card className="col-span-2 border-border">
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
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center p-4"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
            ) : activities.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">No recent activity found.</p>
            ) : (
              activities.map((item, index) => {
                const Icon = getActivityIcon(item.type);
                return (
                  <div key={item.id || index} className="flex items-start gap-4">
                    <div className={`p-2 rounded-full mt-0.5 
                      ${item.type === 'interview' ? 'bg-blue-500/10 text-blue-500' : ''}
                      ${item.type === 'roadmap' ? 'bg-green-500/10 text-green-500' : ''}
                      ${item.type === 'analysis' ? 'bg-purple-500/10 text-purple-500' : ''}
                      ${item.type === 'resume' ? 'bg-orange-500/10 text-orange-500' : ''}
                    `}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium leading-none">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
