import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, ...props 
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95';
  
  const variants = {
    primary: 'bg-gold-500 text-white hover:bg-gold-600 shadow-lg shadow-gold-500/20',
    secondary: 'bg-charcoal-900 text-white hover:bg-black',
    outline: 'border border-beige-200 text-charcoal-800 hover:bg-white',
    ghost: 'text-charcoal-800 hover:bg-beige-100 hover:text-gold-600'
  };

  const sizes = {
    sm: 'h-9 px-6 text-[10px]',
    md: 'h-11 px-8 text-xs',
    lg: 'h-14 px-10 text-xs'
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
