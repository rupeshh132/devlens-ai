import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { uploadResume } from '../api/resumeApi';
import type { Resume } from '../types';
import { useQueryClient } from '@tanstack/react-query';

interface ResumeUploaderProps {
  onUploadSuccess: (resume: Resume) => void;
}

export const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === 'application/pdf' || 
          selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(selectedFile);
        setError(null);
      } else {
        setFile(null);
        setError('Please upload a PDF or DOCX file.');
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setError(null);

    try {
      const resume = await uploadResume(file);
      onUploadSuccess(resume);
      setFile(null);
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string, error?: string }; status?: number }; message?: string };
      
      if (error.response?.status === 429) {
        setError("AI Rate Limit reached. Please try again in a few minutes.");
      } else {
        setError(error.response?.data?.message || error.response?.data?.error || error.message || 'Upload failed');
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Resume</CardTitle>
        <CardDescription>
          Upload your latest resume (PDF or DOCX) to get an ATS score and AI-powered suggestions based on your GitHub projects.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          className="border-2 border-dashed border-border rounded-2xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          onClick={() => document.getElementById('resume-upload-input')?.click()}
        >
          <Upload className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold tracking-tight">Click to browse or drag and drop</h3>
          <p className="text-sm text-muted-foreground mt-2">PDF or DOCX (MAX. 5MB)</p>
          <input 
            id="resume-upload-input" 
            type="file" 
            accept=".pdf,.docx" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </div>

        {file && (
          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        )}

        {error && (
          <div className="flex items-center space-x-2 text-red-500 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        <Button 
          className="w-full" 
          disabled={!file || isUploading} 
          onClick={handleUpload}
        >
          {isUploading ? 'Parsing & Analyzing...' : 'Upload & Analyze Resume'}
        </Button>
      </CardContent>
    </Card>
  );
};
