'use client';

import React from 'react';
import { 
  Video, 
  FileText, 
  Database, 
  Book,
  ExternalLink,
  Play,
  Square
} from 'lucide-react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
  onStart?: (id: string) => void;
  onStop?: (id: string) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onStart, onStop }) => {
  const getIcon = (iconName: string) => {
    const icons = {
      video: Video,
      document: FileText,
      database: Database,
      book: Book,
    };
    return icons[iconName as keyof typeof icons] || Video;
  };

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

  const Icon = getIcon(agent.icon);

  const handleCardClick = () => {
    if (agent.status === 'online') {
      window.open(agent.url, '_blank');
    }
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (agent.status === 'online' && onStop) {
      onStop(agent.id);
    } else if (agent.status === 'offline' && onStart) {
      onStart(agent.id);
    }
  };

  return (
    <div 
      className={`relative bg-gradient-to-br ${agent.color} rounded-xl p-6 cursor-pointer card-hover ${
        agent.status === 'online' ? 'neon-glow' : 'opacity-75'
      }`}
      onClick={handleCardClick}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)}`}></div>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="text-white">
        <h3 className="text-lg font-bold mb-2">{agent.name}</h3>
        <p className="text-sm text-white/80 mb-4 line-clamp-2">
          {agent.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {agent.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
              >
                {feature}
              </span>
            ))}
            {agent.features.length > 2 && (
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                +{agent.features.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Status and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`}></div>
            <span className="text-xs text-white/80">
              {getStatusText(agent.status)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {agent.status === 'online' ? (
              <>
                <button
                  onClick={handleActionClick}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title="Parar agente"
                >
                  <Square className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCardClick}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title="Abrir agente"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={handleActionClick}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                title="Iniciar agente"
              >
                <Play className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
