import React from 'react';

interface ConfigurationBadgeProps {
  configured: boolean;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const ConfigurationBadge: React.FC<ConfigurationBadgeProps> = ({
  configured,
  size = 'md',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSize = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  if (configured) {
    return (
      <div className={`inline-flex items-center gap-1.5 bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 border border-green-300 dark:border-green-700 rounded-full font-semibold ${sizeClasses[size]} shadow-sm`}>
        <svg className={iconSize[size]} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        {showText && 'Configurado'}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-100 border border-orange-300 dark:border-orange-700 rounded-full font-semibold ${sizeClasses[size]} shadow-sm`}>
      <svg className={iconSize[size]} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {showText && 'Não Configurado'}
    </div>
  );
};
