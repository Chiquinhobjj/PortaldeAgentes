import React, { useState } from 'react';
import { Agent } from '../types';

interface AgentOnboardingProps {
  agent: Agent;
  onComplete: () => void;
  onSkip: () => void;
}

export const AgentOnboardingMobile: React.FC<AgentOnboardingProps> = ({
  agent,
  onComplete,
  onSkip
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: `Bem-vindo ao ${agent.name}! 🎉`,
      description: `Este agente especializado em ${agent.description.toLowerCase()} está pronto para ajudar você.`,
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-4xl md:text-6xl mb-4">{agent.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {agent.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base break-words">
              {agent.description}
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 md:p-4">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2 text-sm md:text-base">✨ Principais Recursos:</h4>
            <ul className="space-y-1">
              {agent.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-blue-800 dark:text-blue-200 text-xs md:text-sm flex items-center gap-2">
                  <span>•</span>
                  <span className="break-words">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Configuração Inicial ⚙️',
      description: 'Vamos configurar o agente para suas necessidades específicas.',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 md:p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm md:text-base">🎯 Objetivo</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm break-words">
                Defina o que você espera deste agente
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 md:p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm md:text-base">⚡ Performance</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm break-words">
                Configure velocidade vs qualidade
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 md:p-4">
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-2 text-sm md:text-base">💡 Dica</h4>
            <p className="text-green-800 dark:text-green-200 text-xs md:text-sm break-words">
              Você pode ajustar essas configurações a qualquer momento nas configurações do agente.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Demonstração Interativa 🚀',
      description: 'Veja o agente em ação com um exemplo prático.',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg p-4 md:p-6 text-white">
            <h4 className="font-semibold mb-2 text-sm md:text-base">🎬 Exemplo de Uso</h4>
            <p className="text-blue-100 dark:text-blue-200 text-xs md:text-sm break-words">
              Aqui você verá como o agente funciona na prática
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 md:p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Simulação em tempo real</span>
            </div>
            <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300 break-words">
              O agente está processando sua solicitação...
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Pronto para Usar! ✅',
      description: 'Seu agente está configurado e pronto para ajudar.',
      content: (
        <div className="space-y-4 text-center">
          <div className="text-4xl md:text-6xl mb-4">🎉</div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            Configuração Concluída!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base break-words">
            O {agent.name} está pronto para ser usado. Você pode começar a interagir com ele agora mesmo!
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 md:p-4">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2 text-sm md:text-base">🚀 Próximos Passos:</h4>
            <ul className="text-left space-y-1">
              <li className="text-blue-800 dark:text-blue-200 text-xs md:text-sm flex items-center gap-2">
                <span>1.</span>
                <span className="break-words">Faça sua primeira pergunta ou solicitação</span>
              </li>
              <li className="text-blue-800 dark:text-blue-200 text-xs md:text-sm flex items-center gap-2">
                <span>2.</span>
                <span className="break-words">Explore os recursos avançados</span>
              </li>
              <li className="text-blue-800 dark:text-blue-200 text-xs md:text-sm flex items-center gap-2">
                <span>3.</span>
                <span className="break-words">Personalize as configurações conforme necessário</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onSkip();
  };

  const renderStepContent = () => {
    return currentStepData.content;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white break-words">
                {currentStepData.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base break-words">
                {currentStepData.description}
              </p>
            </div>
            <button
              onClick={handleSkip}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0 ml-2 p-1"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Passo {currentStep + 1} de {steps.length}</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            ← Anterior
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleSkip}
              className="px-3 md:px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm md:text-base"
            >
              Pular Configuração
            </button>
            <button
              onClick={handleNext}
              className="px-4 md:px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors active:scale-95 text-sm md:text-base"
            >
              {currentStep === steps.length - 1 ? 'Finalizar' : 'Próximo →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
