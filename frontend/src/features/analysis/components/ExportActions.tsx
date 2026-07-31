import { Download, Printer, Share2 } from 'lucide-react';
import { toast } from 'sonner';

export function ExportActions() {
  const handleExport = (type: string) => {
    toast.success(`Mock ${type} generated successfully`);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleExport('PDF')}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors shadow-sm"
      >
        <Download className="h-4 w-4" />
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
