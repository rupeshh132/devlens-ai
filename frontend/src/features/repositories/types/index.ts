export type RepositoryVisibility = 'Public' | 'Private';
export type RepositoryStatus = 'Healthy' | 'Warning' | 'Critical' | 'Analyzing';

export interface RepositoryDetails {
  id: string;
  name: string;
  owner: string;
  visibility: RepositoryVisibility;
  language: string;
  stars: number;
  lastUpdated: string;
  lastAnalysis: string;
  score: number;
  status: RepositoryStatus;
  description: string;
  branches: number;
  isFavorite: boolean;
}

export interface CommitInfo {
  id: string;
  message: string;
  author: string;
  date: string;
}
