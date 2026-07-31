
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Finding } from '../types/analysis';
import { getSeverityColor } from '../utils/severity';
import { ShieldAlert } from 'lucide-react';

interface RecentFindingsCardProps {
  findings: Finding[];
}

export function RecentFindingsCard({ findings }: RecentFindingsCardProps) {
  // Take top 5 highest severity findings
  const topFindings = findings.slice(0, 5);

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-indigo-400" />
          Top Findings
        </CardTitle>
      </CardHeader>
      <CardContent>
        {topFindings.length === 0 ? (
          <div className="text-gray-500 text-sm py-4 text-center">
            No issues found in this analysis. Great job!
          </div>
        ) : (
          <div className="space-y-4">
            {topFindings.map((finding) => (
              <div key={finding.id} className="p-4 bg-gray-950 rounded-lg border border-gray-800">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-white">{finding.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded font-semibold ${getSeverityColor(finding.severity)}`}>
                    {finding.severity}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  {finding.description}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-mono bg-gray-900 px-2 py-1 rounded">
                    {finding.filePath}
                  </span>
                  <span>{finding.confidence}% confidence</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
