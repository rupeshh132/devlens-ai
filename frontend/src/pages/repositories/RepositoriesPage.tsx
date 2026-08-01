import { RepositoryList } from '@/features/repositories/components/RepositoryList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { RepositoryFormDialog } from '@/features/repositories/components/RepositoryFormDialog';

export function RepositoriesPage() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Repositories</h1>
          <p className="text-muted-foreground mt-1">
            Manage and analyze your connected codebases.
          </p>
        </div>
        <Button onClick={() => setIsAddOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Repository
        </Button>
      </div>
      
      <RepositoryList />
      <RepositoryFormDialog open={isAddOpen} onOpenChange={setIsAddOpen} />
    </div>
  );
}
