import { Check, Circle, Loader2 } from 'lucide-react';

interface ProgressStepProps {
  label: string;
  status: 'pending' | 'active' | 'completed' | 'failed';
  isLast?: boolean;
}

export function ProgressStep({ label, status, isLast }: ProgressStepProps) {
  return (
    <div className="relative flex items-start group">
      <div className="flex flex-col items-center">
        <div className={`
          flex items-center justify-center w-8 h-8 rounded-full border-2 bg-gray-900 z-10
          ${status === 'completed' ? 'border-green-500 text-green-500' : ''}
          ${status === 'active' ? 'border-indigo-500 text-indigo-500' : ''}
          ${status === 'failed' ? 'border-red-500 text-red-500' : ''}
          ${status === 'pending' ? 'border-gray-700 text-gray-700' : ''}
        `}>
          {status === 'completed' && <Check className="w-4 h-4" />}
          {status === 'active' && <Loader2 className="w-4 h-4 animate-spin" />}
          {status === 'failed' && <Circle className="w-4 h-4 fill-current" />}
          {status === 'pending' && <Circle className="w-2 h-2 fill-current" />}
        </div>
        {!isLast && (
          <div className={`
            w-0.5 h-full min-h-[3rem] absolute top-8
            ${status === 'completed' ? 'bg-green-500/50' : 'bg-gray-800'}
          `} />
        )}
      </div>
      <div className="ml-4 mt-1.5">
        <p className={`
          text-sm font-medium
          ${status === 'completed' ? 'text-gray-300' : ''}
          ${status === 'active' ? 'text-indigo-400 font-semibold' : ''}
          ${status === 'failed' ? 'text-red-400' : ''}
          ${status === 'pending' ? 'text-gray-600' : ''}
        `}>
          {label}
        </p>
      </div>
    </div>
  );
}
