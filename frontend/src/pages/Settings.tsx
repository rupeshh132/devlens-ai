import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { ContentArea } from '@/components/layout/ContentArea';

export function Settings() {
  return (
    <PageContainer>
      <PageHeader 
        title="Settings" 
        description="Manage your account settings and preferences." 
      />
      <ContentArea>
        <div className="p-6 border rounded-lg bg-card">
          <p className="text-muted-foreground">Settings content will go here.</p>
        </div>
      </ContentArea>
    </PageContainer>
  );
}
