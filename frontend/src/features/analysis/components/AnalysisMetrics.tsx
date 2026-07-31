import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Files, Package, Cpu, Layers, Timer } from 'lucide-react';
import type { AnalysisMetrics as MetricsType } from '../types/analysis';

interface AnalysisMetricsProps {
  metrics: MetricsType;
}

export function AnalysisMetrics({ metrics }: AnalysisMetricsProps) {
  const items = [
    {
      label: 'Lines of Code',
      value: metrics.linesOfCode.toLocaleString(),
      icon: Code2,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      label: 'Files Analyzed',
      value: metrics.files.toLocaleString(),
      icon: Files,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10'
    },
    {
      label: 'Dependencies',
      value: metrics.dependencies.toLocaleString(),
      icon: Package,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      label: 'Languages',
      value: Object.keys(metrics.languages).length,
      icon: Cpu,
      color: 'text-pink-400',
      bg: 'bg-pink-500/10'
    },
    {
      label: 'Frameworks',
      value: metrics.frameworks.length,
      icon: Layers,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10'
    },
    {
      label: 'Technical Debt',
      value: metrics.technicalDebt,
      icon: Timer,
      color: 'text-red-400',
      bg: 'bg-red-500/10'
    }
  ];

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg text-white">Repository Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-lg border border-gray-800 bg-gray-950/50">
              <div className={`p-3 rounded-md ${item.bg}`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">{item.label}</p>
                <p className="text-lg font-bold text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
