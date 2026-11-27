import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
  hideTextOnMobile?: boolean;
  showText?: boolean;
  to?: string;
}

export function Logo({ 
  className, 
  size = 'md', 
  variant = 'dark', 
  hideTextOnMobile = false,
  showText = true,
  to = "/"
}: LogoProps) {
  
  const sizeClasses = {
    sm: {
      box: 'w-8 h-8',
      text: 'text-lg',
      gap: 'gap-2.5',
    },
    md: {
      box: 'w-9 h-9',
      text: 'text-xl',
      gap: 'gap-2.5',
    },
    lg: {
      box: 'w-11 h-11',
      text: 'text-2xl',
      gap: 'gap-3',
    },
    xl: {
      box: 'w-14 h-14',
      text: 'text-3xl',
      gap: 'gap-3.5',
    },
  };

  const currentSize = sizeClasses[size];
  const textColor = variant === 'dark' ? 'text-brand-navy' : 'text-white drop-shadow-md';

  return (
    <Link to={to} className={cn("flex items-center group hover:opacity-95 transition-opacity shrink-0", currentSize.gap, className)}>
      <div 
        className={cn(
          "rounded-full overflow-hidden shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-xs border border-slate-200/90 ring-2 ring-primary/10 bg-white",
          currentSize.box,
          variant === 'light' && "border-white/30 ring-white/20 shadow-md"
        )} 
      >
        <img 
          src="/preplens-logo.jpg" 
          alt="PrepLens Logo" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      {showText && (
        <span 
          className={cn(
            "font-black tracking-tight",
            currentSize.text,
            textColor,
            hideTextOnMobile && "hidden sm:inline-block"
          )}
        >
          PrepLens
        </span>
      )}
    </Link>
  )
}

