export interface Resume {
  id: string;
  userId: string;
  fileName: string;
  parsedText: string;
  atsScore: number | null;
  suggestions: string | null;
  createdAt: string;
  updatedAt: string;
}
