import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700"
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="Toggle dark mode"
    >
      <span
        className={`${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform dark:bg-gray-300`}
      />
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      
      {/* Ícones */}
      <div className="absolute inset-0 flex items-center justify-between px-1">
        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-yellow-500'}`}>
          ☀️
        </span>
        <span className={`text-xs ${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`}>
          🌙
        </span>
      </div>
    </button>
  );
};
