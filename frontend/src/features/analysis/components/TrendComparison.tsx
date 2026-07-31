import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { Analysis, AnalysisHistoryItem } from '../types/analysis';

interface TrendComparisonProps {
  baseAnalysis: Analysis;
  targetAnalysis: Analysis;
  history: AnalysisHistoryItem[];
}

export function TrendComparison({ baseAnalysis, targetAnalysis, history }: TrendComparisonProps) {
  // Mock trend data spanning from base to target (or just generic history points)
  const data = [
    { name: 'Base', score: baseAnalysis.overallScore, date: baseAnalysis.completedAt || new Date().toISOString() },
    ...history.slice(0, 3).map((h, i) => ({ name: `Point ${i + 1}`, score: h.overallScore, date: h.date })),
    { name: 'Target', score: targetAnalysis.overallScore, date: targetAnalysis.completedAt || new Date().toISOString() }
  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Score Trend</h3>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#9ca3af" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="#9ca3af" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '0.5rem' }}
              itemStyle={{ color: '#e5e7eb' }}
              labelStyle={{ color: '#9ca3af', marginBottom: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#6366f1" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#trendGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
