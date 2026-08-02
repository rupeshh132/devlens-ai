import { useParams } from 'react-router-dom';
import { useAnalysisReport } from '../features/analysis/hooks/useAnalysisReport';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Info, ShieldAlert, FileText, CheckCircle2, Download } from 'lucide-react';
import { api } from '@/lib/api';

export function AnalysisReportPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const { data: report, isLoading, error } = useAnalysisReport(jobId as string);

  if (isLoading) {
    return (
      <div className="p-8 space-y-6">
          <Skeleton className="h-12 w-[250px]" />
          <Skeleton className="h-32 w-full" />
          <div className="space-y-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
    );
  }

  if (error || !report) {
    return (
      <div className="p-8 text-center text-red-500">
          <p>Failed to load report. It may not exist or you don't have access.</p>
        </div>
    );
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity.toUpperCase()) {
      case 'HIGH':
        return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case 'MEDIUM':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'LOW':
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity.toUpperCase()) {
      case 'HIGH':
        return <Badge variant="destructive">HIGH</Badge>;
      case 'MEDIUM':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">MEDIUM</Badge>;
      case 'LOW':
        return <Badge className="bg-blue-500 hover:bg-blue-600">LOW</Badge>;
      default:
        return <Badge variant="secondary">INFO</Badge>;
    }
  };

  const handleDownloadPdf = async () => {
    try {
      const response = await api.get(`/analyses/${jobId}/report/pdf`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `devlens-report-${jobId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('Failed to download PDF', err);
      alert('Failed to download PDF');
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            <FileText className="w-10 h-10 text-primary" />
            Analysis Report
          </h1>
          <div className="flex items-center gap-6">
            <Button variant="outline" onClick={handleDownloadPdf} className="h-10 border-gray-700 hover:bg-gray-800 text-gray-200">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-400">Score</span>
              <span className={`text-4xl font-black ${report.score >= 80 ? 'text-green-500' : report.score >= 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                {report.score}/100
              </span>
            </div>
          </div>
        </div>

        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-gray-200">AI Summary</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400 whitespace-pre-wrap leading-relaxed">
            {report.summary}
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Vulnerabilities & Suggestions</h2>
          {report.vulnerabilities.length === 0 ? (
            <Card className="border-green-800/50 bg-green-900/20 backdrop-blur-xl flex flex-col items-center justify-center p-12">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <p className="text-xl font-medium text-green-400">No issues found!</p>
              <p className="text-gray-400 mt-2">Your code looks great.</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {report.vulnerabilities.map((vuln) => (
                <Card key={vuln.id} className="border-gray-800 bg-gray-900/40 hover:bg-gray-800/60 transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      {getSeverityIcon(vuln.severity)}
                      <CardTitle className="text-lg text-gray-200">
                        {vuln.filePath}
                        {vuln.lineNumber > 0 && <span className="text-gray-500 ml-2">Line {vuln.lineNumber}</span>}
                      </CardTitle>
                    </div>
                    {getSeverityBadge(vuln.severity)}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-medium mb-3">{vuln.description}</p>
                    {vuln.suggestedFix && (
                      <div className="bg-gray-950 p-4 rounded-md border border-gray-800">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">Suggested Fix</span>
                        <code className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                          {vuln.suggestedFix}
                        </code>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
  );
}
