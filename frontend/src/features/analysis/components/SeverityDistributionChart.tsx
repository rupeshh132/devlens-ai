import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import type { Finding } from '../types/analysis';

interface SeverityDistributionChartProps {
  findings: Finding[];
}

export function SeverityDistributionChart({ findings }: SeverityDistributionChartProps) {
  const distribution = {
    CRITICAL: 0,
    HIGH: 0,
    MEDIUM: 0,
    LOW: 0,
    INFO: 0
  };

  findings.forEach(f => {
    distribution[f.severity]++;
  });

  const data = [
    { name: 'Critical', count: distribution.CRITICAL, fill: '#ef4444' }, // red-500
    { name: 'High', count: distribution.HIGH, fill: '#f97316' },     // orange-500
    { name: 'Medium', count: distribution.MEDIUM, fill: '#eab308' },   // yellow-500
    { name: 'Low', count: distribution.LOW, fill: '#3b82f6' },        // blue-500
    { name: 'Info', count: distribution.INFO, fill: '#6b7280' }       // gray-500
  ];

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg text-white">Severity Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#9ca3af" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6b7280" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#f3f4f6' }}
                cursor={{ fill: '#374151', opacity: 0.4 }}
              />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} isAnimationActive={true}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
