import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface HealthGaugeProps {
  score: number;
}

export function HealthGauge({ score }: HealthGaugeProps) {
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 100 - score }
  ];

  const getColor = (s: number) => {
    if (s >= 90) return '#22c55e'; // green-500
    if (s >= 70) return '#3b82f6'; // blue-500
    if (s >= 50) return '#eab308'; // yellow-500
    return '#ef4444'; // red-500
  };

  const color = getColor(score);

  return (
    <div className="relative h-[200px] w-full flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={90}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
            isAnimationActive={true}
            animationDuration={1500}
            animationBegin={200}
          >
            <Cell fill={color} />
            <Cell fill="#1f2937" /> {/* gray-800 */}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      <div className="absolute flex flex-col items-center justify-center" style={{ top: '60%' }}>
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold text-white tracking-tighter"
        >
          {score}
        </motion.span>
        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">
          Health
        </span>
      </div>
    </div>
  );
}
