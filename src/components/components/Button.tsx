
import React from 'react';
import { cn } from '@/components/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'yellow' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-60 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-sm",
    secondary: "bg-white text-primary-700 border border-primary-200 hover:bg-primary-50",
    outline: "bg-transparent text-primary-700 border border-primary-200 hover:bg-primary-50",
    yellow: 'bg-[#ffd90f] text-gray-900 hover:bg-[#ffc700]', // Using the exact color code
    ghost: "bg-transparent text-primary-700 hover:bg-primary-50",
    link: "bg-transparent text-primary-600 hover:text-primary-800 underline-offset-4 hover:underline p-0",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  
  const iconSpacing = {
    left: icon && "space-x-2",
    right: icon && "space-x-2 flex-row-reverse",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== 'link' && sizeStyles[size],
        iconSpacing[iconPosition],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
