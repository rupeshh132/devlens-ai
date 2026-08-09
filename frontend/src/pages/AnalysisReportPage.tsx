import { useParams } from 'react-router-dom';
import { useAnalysisReport } from '../features/analysis/hooks/useAnalysisReport';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Info, ShieldAlert, FileText, CheckCircle2, Download, Loader2 } from 'lucide-react';
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

  if (report.status === 'FAILED') {
    return (
      <div className="p-4 md:p-8 space-y-6 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive">Analysis Failed</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          {report.errorMessage || 'An unknown error occurred during analysis.'}
        </p>
      </div>
    );
  }

  if (report.score === null || report.summary === null) {
    return (
      <div className="p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-muted p-8 rounded-full mb-6">
          <Loader2 className="w-16 h-16 text-brand-navy animate-spin" />
        </div>
        <h1 className="text-4xl font-black tracking-tight text-brand-navy mb-4">Analysis in Progress</h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          We are currently analyzing your codebase for vulnerabilities and generating a skill gap report. Please wait...
        </p>
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
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-4xl font-black tracking-tight text-brand-navy flex items-center gap-3">
            <FileText className="w-10 h-10 text-brand-coral" />
            Analysis Report
          </h1>
          <div className="flex items-center gap-6">
            <Button variant="outline" onClick={handleDownloadPdf} className="h-12 px-6 rounded-full font-bold border-border hover:bg-muted text-brand-navy">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Score</span>
              <span className={`text-4xl font-black ${report.score >= 80 ? 'text-green-600' : report.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                {report.score}/100
              </span>
            </div>
          </div>
        </div>

        <Card className="rounded-2xl border-border/50 shadow-sm overflow-hidden">
          <CardHeader className="bg-muted/30 border-b border-border/50 pb-4">
            <CardTitle className="text-xl font-bold text-brand-navy">AI Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-brand-navy/80 whitespace-pre-wrap leading-relaxed text-lg">
            {report.summary}
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-black tracking-tight text-brand-navy mb-6">Vulnerabilities & Suggestions</h2>
          {report.vulnerabilities.length === 0 ? (
            <Card className="rounded-2xl border-green-200 bg-green-50 flex flex-col items-center justify-center p-12 shadow-sm">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <p className="text-2xl font-bold text-green-700">No issues found!</p>
              <p className="text-green-600/80 mt-2 font-medium">Your code looks great.</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {report.vulnerabilities.map((vuln) => (
                <Card key={vuln.id} className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-3">
                      {getSeverityIcon(vuln.severity)}
                      <CardTitle className="text-lg font-bold text-brand-navy">
                        {vuln.filePath}
                        {vuln.lineNumber > 0 && <span className="text-muted-foreground font-medium ml-2 text-sm">Line {vuln.lineNumber}</span>}
                      </CardTitle>
                    </div>
                    {getSeverityBadge(vuln.severity)}
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-brand-navy/90 font-medium mb-4 text-base">{vuln.description}</p>
                    {vuln.suggestedFix && (
                      <div className="bg-muted/50 p-5 rounded-xl border border-border/50">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-coral mb-3 block">Suggested Fix</span>
                        <code className="text-sm text-brand-navy whitespace-pre-wrap font-mono block">
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
