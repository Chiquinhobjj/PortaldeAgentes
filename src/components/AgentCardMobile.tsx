'use client';

import React from 'react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
  onStart?: (id: string) => void;
  onStop?: (id: string) => void;
  onSelect?: (id: string) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onStart, onStop, onSelect }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-gray-500';
      case 'starting':
        return 'bg-yellow-500 animate-pulse';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'starting':
        return 'Iniciando...';
      case 'error':
        return 'Erro';
      default:
        return 'Desconhecido';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 dark:text-red-400';
      case 'medium':
        return 'text-yellow-500 dark:text-yellow-400';
      case 'low':
        return 'text-green-500 dark:text-green-400';
      default:
        return 'text-gray-500 dark:text-gray-400';
    }
  };

  const handleStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStart?.(agent.id);
  };

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStop?.(agent.id);
  };

  const handleSelect = () => {
    onSelect?.(agent.id);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 md:p-4 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
      onClick={handleSelect}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2 md:mb-3">
        <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
          <div className="text-lg md:text-2xl flex-shrink-0">
            {agent.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base break-words">
              {agent.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 break-words">
              {agent.description}
            </p>
          </div>
        </div>
        
        {/* Status */}
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${getStatusColor(agent.status)}`}></div>
          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden sm:inline">
            {getStatusText(agent.status)}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="mb-2 md:mb-3">
        <div className="flex flex-wrap gap-1 md:gap-2">
          {agent.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs break-words"
            >
              {feature}
            </span>
          ))}
          {agent.features.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
              +{agent.features.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400">
          <span className="break-words">📊 {agent.usage_count} usos</span>
          <span className="break-words">⭐ {agent.rating || 'N/A'}</span>
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          {agent.status === 'online' ? (
            <button
              onClick={handleStop}
              className="p-1.5 md:p-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors active:scale-95"
              title="Parar agente"
            >
              <span className="text-sm md:text-base">⏹️</span>
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="p-1.5 md:p-2 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors active:scale-95"
              title="Iniciar agente"
            >
              <span className="text-sm md:text-base">▶️</span>
            </button>
          )}
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(agent.url, '_blank');
            }}
            className="p-1.5 md:p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors active:scale-95"
            title="Abrir em nova aba"
          >
            <span className="text-sm md:text-base">🔗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
