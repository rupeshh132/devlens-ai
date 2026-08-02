/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCreateRepository } from '../hooks/useCreateRepository';
import { useUpdateRepository } from '../hooks/useUpdateRepository';
import type { RepositoryDetails } from '../types';

interface RepositoryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  repository?: RepositoryDetails | null;
}

export function RepositoryFormDialog({ open, onOpenChange, repository }: RepositoryFormDialogProps) {
  const isEditing = !!repository;
  const createMutation = useCreateRepository();
  const updateMutation = useUpdateRepository();
  
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    branch: 'main',
    visibility: 'PUBLIC' as 'PUBLIC' | 'PRIVATE',
  });

  useEffect(() => {
    
    if (repository && open) {
      setFormData({
        name: repository.name || '',
        url: repository.url || '',
        branch: repository.branch || 'main',
        visibility: repository.visibility === 'Public' ? 'PUBLIC' : 'PRIVATE',
      });
    } else if (!open) {
      setFormData({
        name: '',
        url: '',
        branch: 'main',
        visibility: 'PUBLIC',
      });
    }
  }, [repository, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && repository) {
        await updateMutation.mutateAsync({
          id: repository.id,
          payload: {
            name: formData.name,
            branch: formData.branch,
            visibility: formData.visibility,
          },
        });
      } else {
        // Extract owner from GitHub URL
        let owner = 'unknown';
        try {
          const urlObj = new URL(formData.url);
          const parts = urlObj.pathname.split('/').filter(Boolean);
          if (parts.length >= 2) {
            owner = parts[0];
          }
        } catch (e) {
          // Ignore parse errors, let backend validate
        }

        await createMutation.mutateAsync({
          name: formData.name,
          owner: owner,
          url: formData.url,
          branch: formData.branch,
          visibility: formData.visibility,
          provider: 'GITHUB',
        });
      }
      onOpenChange(false);
    } catch {
      // Error handled by mutation toast
    }
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Repository' : 'Add Repository'}</DialogTitle>
          <DialogDescription>
            {isEditing 
              ? 'Update repository settings.' 
              : 'Add a new repository to monitor.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Repository Name</label>
            <input
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          {!isEditing && (
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium">Repository URL</label>
              <input
                id="url"
                type="url"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.url}
                onChange={e => setFormData({ ...formData, url: e.target.value })}
                required
                placeholder="https://github.com/owner/repo"
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="branch" className="text-sm font-medium">Default Branch</label>
            <input
              id="branch"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.branch}
              onChange={e => setFormData({ ...formData, branch: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="visibility" className="text-sm font-medium">Visibility</label>
            <select
              id="visibility"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.visibility}
              onChange={e => setFormData({ ...formData, visibility: e.target.value as 'PUBLIC' | 'PRIVATE' })}
            >
              <option value="PUBLIC">Public</option>
              <option value="PRIVATE">Private</option>
            </select>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
