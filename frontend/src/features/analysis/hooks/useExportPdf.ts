import { useMutation } from '@tanstack/react-query';
import { reportApi } from '../services/report.api';

export function useExportPdf() {
  return useMutation({
    mutationFn: async (jobId: string) => {
      const blob = await reportApi.exportPdf(jobId);
      
      // Create object URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `report-${jobId}.pdf`);
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  });
}
