'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-provider';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const { themeColors } = useTheme();

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500',
    ghost: 'text-gray-900 hover:bg-gray-100 focus:ring-red-600 dark:text-gray-100 dark:hover:bg-gray-800',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  };

  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      style={{
        backgroundColor: variant === 'primary' ? themeColors.primary.red : undefined,
        borderColor: variant === 'outline' ? themeColors.primary.red : undefined,
        color: variant === 'outline' ? themeColors.primary.red : undefined,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
