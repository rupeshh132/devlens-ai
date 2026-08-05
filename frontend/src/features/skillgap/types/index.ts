export interface SkillGapAnalysis {
  id: string;
  targetRole: string;
  gapReport: string; // JSON string
  createdAt: string;
  updatedAt: string;
}

export interface GapReport {
  overallMatchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  projectIdeas: ProjectIdea[];
  recommendations: string[];
}

export interface ProjectIdea {
  title: string;
  description: string;
  skillsTargeted: string[];
}

export interface SkillGapRequest {
  targetRole: string;
}
