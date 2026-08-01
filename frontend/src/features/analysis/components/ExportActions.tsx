import { Download, Printer, Share2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useExportPdf } from '../hooks/useExportPdf';

interface ExportActionsProps {
  jobId: string;
}

export function ExportActions({ jobId }: ExportActionsProps) {
  const exportPdfMutation = useExportPdf();

  const handleExport = (type: string) => {
    if (type === 'PDF') {
      exportPdfMutation.mutate(jobId, {
        onSuccess: () => toast.success('Report downloaded successfully'),
        onError: () => toast.error('Failed to download report'),
      });
    } else {
      toast.info(`${type} export is not supported yet`);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleExport('PDF')}
        disabled={exportPdfMutation.isPending}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-md transition-colors shadow-sm"
      >
        {exportPdfMutation.isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Download className="h-4 w-4" />
        )}
        Export PDF
      </button>
      <button
        onClick={() => handleExport('Print')}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 rounded-md transition-colors"
      >
        <Printer className="h-4 w-4" />
        Print
      </button>
      <button
        onClick={() => handleExport('Share')}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 rounded-md transition-colors"
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>
    </div>
  );
}
