import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
  hideTextOnMobile?: boolean;
}

export function Logo({ className, size = 'md', variant = 'dark', hideTextOnMobile = false }: LogoProps) {
  
  const sizeClasses = {
    sm: {
      box: 'w-3 h-3',
      text: 'text-lg',
    },
    md: {
      box: 'w-4 h-4',
      text: 'text-xl',
    },
    lg: {
      box: 'w-5 h-5',
      text: 'text-2xl',
    },
    xl: {
      box: 'w-6 h-6',
      text: 'text-3xl',
    },
  };

  const currentSize = sizeClasses[size];
  const textColor = variant === 'dark' ? 'text-brand-navy' : 'text-white drop-shadow-md';

  return (
    <Link to="/" className={cn("flex items-center gap-3 group hover:opacity-90 transition-opacity", className)}>
      <div 
        className={cn(
          "bg-brand-coral rounded-sm transition-transform group-hover:scale-110",
          currentSize.box,
          variant === 'light' && "shadow-[0_0_15px_rgba(255,107,107,0.5)]"
        )} 
      />
      <span 
        className={cn(
          "font-black tracking-tight",
          currentSize.text,
          textColor,
          hideTextOnMobile && "hidden sm:inline-block"
        )}
      >
        DevLens AI
      </span>
    </Link>
  )
}
