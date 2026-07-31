import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HealthGauge } from './HealthGauge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface HealthScoreCardProps {
  score: number;
  previousScore?: number;
}

export function HealthScoreCard({ score, previousScore }: HealthScoreCardProps) {
  const getTrend = () => {
    if (!previousScore) return null;
    const diff = score - previousScore;
    if (diff > 0) return { icon: TrendingUp, color: 'text-green-500', text: `+${diff} points` };
    if (diff < 0) return { icon: TrendingDown, color: 'text-red-500', text: `${diff} points` };
    return { icon: Minus, color: 'text-gray-500', text: 'No change' };
  };

  const trend = getTrend();

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg text-white">Overall Health</CardTitle>
      </CardHeader>
      <CardContent>
        <HealthGauge score={score} />
        
        {trend && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm"
          >
            <span className="text-gray-400">vs previous analysis:</span>
            <span className={`flex items-center font-medium ${trend.color}`}>
              <trend.icon className="w-4 h-4 mr-1" />
              {trend.text}
            </span>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
