export interface Roadmap {
  id: string;
  title: string;
  roadmapData: string; // JSON string
  createdAt: string;
  updatedAt: string;
}

export interface RoadmapData {
  milestones: Milestone[];
}

export interface Milestone {
  title: string;
  description: string;
  estimatedTime: string;
  status: 'pending' | 'in_progress' | 'completed';
  resources: string[];
}

export interface RoadmapRequest {
  title: string;
}
