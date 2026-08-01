import { useState, useMemo } from 'react';
import { useRepositories } from '../hooks/useRepositories';
import { RepositoryCard } from './RepositoryCard';
import { SearchBar } from '@/components/ui/search-bar';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationPrevious, 
  PaginationNext, 
  PaginationLink 
} from '@/components/ui/pagination';
import type { RepositoryDetails } from '../types';
import { Filter, SortDesc, FolderGit2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function RepositoryList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { data: repositories = [], isLoading, isError } = useRepositories();

  const languages = ['All', ...Array.from(new Set(repositories.map(r => r.language)))];
  const statuses = ['All', 'Healthy', 'Warning', 'Critical', 'Analyzing'];

  const filteredData = useMemo(() => {
    let data = repositories;
    
    if (searchQuery) {
      data = data.filter(r => 
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        r.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (languageFilter !== 'All') {
      data = data.filter(r => r.language === languageFilter);
    }
    
    if (statusFilter !== 'All') {
      data = data.filter(r => r.status === statusFilter);
    }
    
    return data;
  }, [searchQuery, languageFilter, statusFilter, repositories]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center text-muted-foreground animate-pulse">Loading repositories...</div>;
  }

  if (isError) {
    return <div className="p-8 text-center text-destructive">Failed to load repositories.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card/50 p-4 rounded-lg border border-muted/60 backdrop-blur supports-[backdrop-filter]:bg-card/30">
        <SearchBar 
          placeholder="Search repositories..." 
          onSearch={setSearchQuery}
          onClear={() => setSearchQuery('')}
          className="w-full md:max-w-md"
        />
        
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select 
              className="text-sm bg-transparent border-none focus:ring-0 text-foreground cursor-pointer"
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang} value={lang} className="bg-background text-foreground">{lang}</option>
              ))}
            </select>
          </div>
          
          <div className="w-px h-4 bg-border mx-2 hidden md:block" />
          
          <div className="flex items-center space-x-2">
            <select 
              className="text-sm bg-transparent border-none focus:ring-0 text-foreground cursor-pointer"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statuses.map(status => (
                <option key={status} value={status} className="bg-background text-foreground">{status}</option>
              ))}
            </select>
          </div>
          
          <div className="w-px h-4 bg-border mx-2 hidden md:block" />
          
          <Button variant="ghost" size="sm" className="whitespace-nowrap">
            <SortDesc className="h-4 w-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {currentData.length > 0 ? (
          currentData.map((repo: RepositoryDetails) => (
            <RepositoryCard key={repo.id} repository={repo} />
          ))
        ) : (
          <Card className="bg-card/50 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <FolderGit2 className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No repositories found</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setLanguageFilter('All');
                  setStatusFilter('All');
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination className="pt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => handlePageChange(currentPage - 1)} 
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className="cursor-pointer"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => handlePageChange(currentPage + 1)}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
