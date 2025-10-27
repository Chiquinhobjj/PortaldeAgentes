import React from 'react';
import { Agent } from '../types';

interface AgentStatusBannerProps {
  agent: Agent;
  onConfigure: () => void;
}

export const AgentStatusBanner: React.FC<AgentStatusBannerProps> = ({
  agent,
  onConfigure
}) => {
  if (agent.configured) {
    return null; // Não mostrar banner se já estiver configurado
  }

  return (
    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 mb-6 rounded-r-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-orange-800 dark:text-orange-200">
            Agente não configurado
          </h3>
          <div className="mt-2 text-sm text-orange-700 dark:text-orange-300">
            <p>
              O agente <strong>{agent.name}</strong> ainda não foi configurado. 
              Configure-o para ter acesso a todas as funcionalidades.
            </p>
          </div>
          <div className="mt-3">
            <button
              onClick={onConfigure}
              className="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-700 transition-colors"
            >
              Configurar Agente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
