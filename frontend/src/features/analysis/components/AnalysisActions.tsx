
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, XCircle, FileText, Play } from 'lucide-react';

interface AnalysisActionsProps {
  onAnalyze: () => void;
  onCancel: () => void;
  onViewReport: () => void;
  onViewHistory: () => void;
  isAnalyzing: boolean;
  hasReport: boolean;
}

export function AnalysisActions({
  onAnalyze,
  onCancel,
  onViewReport,
  onViewHistory,
  isAnalyzing,
  hasReport
}: AnalysisActionsProps) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl text-white">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {isAnalyzing ? (
          <Button 
            variant="outline" 
            className="w-full justify-start text-red-500 border-red-900/50 hover:bg-red-950 hover:text-red-400"
            onClick={onCancel}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Cancel Analysis
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="w-full justify-start border-gray-700 hover:bg-gray-800"
            onClick={onAnalyze}
          >
            <Play className="mr-2 h-4 w-4" />
            Analyze Again
          </Button>
        )}

        <Button 
          variant="outline" 
          className="w-full justify-start border-gray-700 hover:bg-gray-800"
          onClick={onViewReport}
          disabled={!hasReport}
        >
          <FileText className="mr-2 h-4 w-4" />
          View Detailed Report
        </Button>

        <Button 
          variant="outline" 
          className="w-full justify-start border-gray-700 hover:bg-gray-800"
          onClick={onViewHistory}
        >
          <History className="mr-2 h-4 w-4" />
          Analysis History
        </Button>
      </CardContent>
    </Card>
  );
}
