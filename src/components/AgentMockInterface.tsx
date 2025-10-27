import React, { useState } from 'react';
import { Agent } from '../types';
import { AgentStatusBanner } from './AgentStatusBanner';
import { AgentConfigurationWizard } from './AgentConfigurationWizard';
import { ConfigurationBadge } from './ConfigurationBadge';

interface AgentMockInterfaceProps {
  agent: Agent;
  onBack: () => void;
  onConfigure: (agentId: string) => void;
}

export const AgentMockInterface: React.FC<AgentMockInterfaceProps> = ({
  agent,
  onBack,
  onConfigure
}) => {
  const [showConfigWizard, setShowConfigWizard] = useState(false);

  const handleConfigure = () => {
    setShowConfigWizard(true);
  };

  const handleConfigComplete = () => {
    setShowConfigWizard(false);
    onConfigure(agent.id);
  };

  const handleConfigCancel = () => {
    setShowConfigWizard(false);
  };

  const getCategoryInterface = () => {
    switch (agent.category) {
      case 'Assistentes & IA':
        return (
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">🤖</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Chat Interativo</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Converse com o assistente</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                    Olá! Sou o {agent.name}. Como posso ajudá-lo hoje?
                  </p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled
                  />
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Desenvolvimento':
        return (
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm">💻</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Editor de Código</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Desenvolva com IA</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400 mb-2">// {agent.name} - Interface Mock</div>
                <div className="text-gray-300">
                  <div className="text-green-400">def</div> <div className="text-blue-400 inline">main</div>():
                </div>
                <div className="text-gray-300 ml-4">
                  <div className="text-yellow-400">print</div>(<div className="text-orange-400">"Interface mock - configure para funcionalidade completa"</div>)
                </div>
                <div className="text-gray-500 mt-4"># Configure o agente para funcionalidade completa</div>
              </div>
            </div>
          </div>
        );

      case 'Dados & Análise':
        return (
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">📊</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Dashboard de Análise</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visualize dados e métricas</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-400">--</div>
                  <div className="text-sm text-gray-500">Métricas</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-400">--</div>
                  <div className="text-sm text-gray-500">Relatórios</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Negócios':
        return (
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-400 text-sm">💼</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Ferramentas de Negócio</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Gerencie processos empresariais</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Formulário de Entrada</h4>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Campo de exemplo..."
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      disabled
                    />
                    <button
                      disabled
                      className="w-full px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded cursor-not-allowed"
                    >
                      Processar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Criatividade':
        return (
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 dark:text-pink-400 text-sm">🎨</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Canvas Criativo</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Crie conteúdo visual</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center">
                <div className="text-gray-400 text-lg mb-2">🎨</div>
                <p className="text-gray-500 dark:text-gray-400">
                  Área de criação visual
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Configure o agente para funcionalidade completa
                </p>
              </div>
            </div>
          </div>
        );

      case 'Educação':
        return (
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 dark:text-yellow-400 text-sm">📚</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Plataforma Educacional</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aprenda com IA</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Módulo de Aprendizado</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Lição 1: Introdução</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-500">Lição 2: Conceitos Avançados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">⚙️</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Interface Padrão</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Funcionalidades do agente</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                <div className="text-gray-400 text-4xl mb-4">🔧</div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Interface mock para <strong>{agent.name}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  Configure o agente para funcionalidade completa
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button 
            onClick={onBack}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 flex items-center gap-2"
          >
            ← Voltar ao Portal
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {agent.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {agent.description}
              </p>
            </div>
            <ConfigurationBadge configured={agent.configured} size="lg" />
          </div>
        </div>

        {/* Status Banner */}
        <AgentStatusBanner agent={agent} onConfigure={handleConfigure} />

        {/* Main Content */}
        <div className="space-y-6">
          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Recursos Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {agent.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-800 dark:text-green-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category-specific Interface */}
          {getCategoryInterface()}

          {/* Mock Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-100">
                  Interface Mock
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                  Esta é uma interface de demonstração. Para funcionalidade completa, 
                  configure o agente adequadamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Wizard */}
      {showConfigWizard && (
        <AgentConfigurationWizard
          agent={agent}
          onComplete={handleConfigComplete}
          onCancel={handleConfigCancel}
        />
      )}
    </div>
  );
};
