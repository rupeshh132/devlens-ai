import { useState } from 'react';
import { api } from '../../../lib/api';

export interface TailoredResume {
  matchScore: number;
  jobTitle: string;
  tailoredSummary: string;
  keySkills: string[];
  experiences: {
    company: string;
    role: string;
    duration: string;
    bullets: string[];
  }[];
  educations: {
    degree: string;
    institution: string;
    year: string;
  }[];
  missingKeywords: string[];
}

export function useResumeTailor() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tailored, setTailored] = useState<TailoredResume | null>(null);

  const tailor = async (jobDescription: string, file?: File | null) => {
    setLoading(true);
    setError(null);
    setTailored(null);

    try {
      const formData = new FormData();
      formData.append('jobDescription', jobDescription);
      if (file) {
        formData.append('file', file);
      }

      const response = await api.post<{ result: string }>('/resumes/tailor', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const parsed: TailoredResume = JSON.parse(response.data.result);
      setTailored(parsed);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { tailor, loading, error, tailored, setTailored };
}
