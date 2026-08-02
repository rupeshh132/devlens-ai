import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { ContentArea } from '@/components/layout/ContentArea';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trash2, LogOut, User } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { toast } from 'sonner';
import { api } from '@/lib/api';

export function Settings() {
  const { user, logout } = useAuth();

  const handleDeleteAccount = async () => {
    if (confirm('Are you absolutely sure you want to delete your account? This action cannot be undone and will delete all your repositories and analysis data.')) {
      try {
        await api.delete('/users/me');
        toast.success('Account deleted successfully');
        logout();
      } catch (error) {
        toast.error('Failed to delete account');
      }
    }
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Settings" 
        description="Manage your account settings and preferences." 
      />
      <ContentArea className="max-w-4xl space-y-8 animate-in fade-in duration-500">
        
        <Card className="bg-card/50 backdrop-blur border-muted/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Name</p>
              <p className="text-lg text-foreground">{user?.name || 'GitHub User'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Email</p>
              <p className="text-lg text-foreground">{user?.email || 'No email provided'}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-muted/60">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Dark Theme</p>
                <p className="text-sm text-muted-foreground">DevLens AI currently runs exclusively in dark mode for the best developer experience.</p>
              </div>
              <Button disabled variant="outline">Active</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              Danger Zone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-medium text-foreground">Sign Out</p>
                <p className="text-sm text-muted-foreground">Sign out of your account on this device.</p>
              </div>
              <Button variant="outline" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
            
            <div className="border-t border-destructive/20 my-4" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-medium text-destructive">Delete Account</p>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data.</p>
              </div>
              <Button variant="destructive" onClick={handleDeleteAccount}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>

      </ContentArea>
    </PageContainer>
  );
}
