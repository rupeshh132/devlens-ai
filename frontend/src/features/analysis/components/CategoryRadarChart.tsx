import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import type { Score } from '../types/analysis';

interface CategoryRadarChartProps {
  scores: Score[];
}

export function CategoryRadarChart({ scores }: CategoryRadarChartProps) {
  const data = scores.map(s => ({
    subject: s.category.replace('_', ' '),
    A: s.score,
    fullMark: 100,
  }));

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg text-white">Category Scores</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#9ca3af', fontSize: 11 }} 
              />
              <PolarRadiusAxis 
                angle={30} 
                domain={[0, 100]} 
                tick={{ fill: '#6b7280', fontSize: 10 }}
                tickCount={6}
                stroke="#374151"
              />
              <Radar
                name="Score"
                dataKey="A"
                stroke="#6366f1" // indigo-500
                fill="#6366f1"
                fillOpacity={0.4}
                isAnimationActive={true}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#f3f4f6' }}
                itemStyle={{ color: '#818cf8' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
