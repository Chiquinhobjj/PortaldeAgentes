import React, { useState } from 'react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  type: 'info' | 'input' | 'demo' | 'test';
  content: any;
  required: boolean;
}

interface AgentOnboardingProps {
  agentId: string;
  agentName: string;
  agentDescription: string;
  onComplete: () => void;
  onSkip: () => void;
}

export const AgentOnboarding: React.FC<AgentOnboardingProps> = ({
  agentId,
  agentName,
  agentDescription,
  onComplete,
  onSkip
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Configuração específica de onboarding para cada agente
  const getOnboardingSteps = (agentId: string): OnboardingStep[] => {
    const commonSteps = [
      {
        id: 'welcome',
        title: `Bem-vindo ao ${agentName}!`,
        description: 'Vamos configurar este agente para suas necessidades específicas.',
        type: 'info' as const,
        content: {
          icon: '👋',
          message: `Este é o ${agentName}. ${agentDescription}`,
          features: [
            'Configuração personalizada',
            'Integração com suas ferramentas',
            'Aprendizado contínuo',
            'Suporte 24/7'
          ]
        },
        required: true
      }
    ];

    switch (agentId) {
      case 'assistente-geral':
        return [
          ...commonSteps,
          {
            id: 'preferences',
            title: 'Preferências Pessoais',
            description: 'Configure suas preferências de trabalho e comunicação.',
            type: 'input' as const,
            content: {
              fields: [
                {
                  name: 'workStyle',
                  label: 'Estilo de Trabalho',
                  type: 'select',
                  options: ['Focado', 'Colaborativo', 'Flexível', 'Estruturado'],
                  required: true
                },
                {
                  name: 'communicationStyle',
                  label: 'Estilo de Comunicação',
                  type: 'select',
                  options: ['Direto', 'Detalhado', 'Visual', 'Conversacional'],
                  required: true
                },
                {
                  name: 'timezone',
                  label: 'Fuso Horário',
                  type: 'select',
                  options: ['UTC-3 (Brasil)', 'UTC-5', 'UTC+0', 'UTC+1'],
                  required: true
                }
              ]
            },
            required: true
          },
          {
            id: 'demo',
            title: 'Demonstração Interativa',
            description: 'Veja o agente em ação com uma tarefa de exemplo.',
            type: 'demo' as const,
            content: {
              scenario: 'Criar uma lista de tarefas para o dia',
              steps: [
                'Analisar agenda do dia',
                'Priorizar tarefas importantes',
                'Sugerir otimizações',
                'Gerar resumo executivo'
              ]
            },
            required: false
          }
        ];

      case 'contexto-midias':
        return [
          ...commonSteps,
          {
            id: 'content-preferences',
            title: 'Preferências de Conteúdo',
            description: 'Configure o tipo de conteúdo que você mais cria.',
            type: 'input' as const,
            content: {
              fields: [
                {
                  name: 'contentTypes',
                  label: 'Tipos de Conteúdo',
                  type: 'checkbox',
                  options: ['Roteiros', 'Apresentações', 'Artigos', 'Posts Sociais', 'E-mails'],
                  required: true
                },
                {
                  name: 'targetAudience',
                  label: 'Público-Alvo',
                  type: 'select',
                  options: ['Executivos', 'Técnicos', 'Clientes', 'Interno', 'Geral'],
                  required: true
                },
                {
                  name: 'tone',
                  label: 'Tom de Comunicação',
                  type: 'select',
                  options: ['Profissional', 'Casual', 'Técnico', 'Persuasivo', 'Informativo'],
                  required: true
                }
              ]
            },
            required: true
          },
          {
            id: 'demo',
            title: 'Demonstração de Criação',
            description: 'Veja como criar conteúdo profissional rapidamente.',
            type: 'demo' as const,
            content: {
              scenario: 'Criar uma apresentação executiva',
              steps: [
                'Definir objetivo da apresentação',
                'Estruturar conteúdo principal',
                'Gerar slides com design profissional',
                'Incluir dados e gráficos relevantes'
              ]
            },
            required: false
          }
        ];

      case 'analista-dados':
        return [
          ...commonSteps,
          {
            id: 'data-sources',
            title: 'Fontes de Dados',
            description: 'Configure as fontes de dados que você utiliza.',
            type: 'input' as const,
            content: {
              fields: [
                {
                  name: 'dataTypes',
                  label: 'Tipos de Dados',
                  type: 'checkbox',
                  options: ['Vendas', 'Marketing', 'Financeiro', 'Operacional', 'RH'],
                  required: true
                },
                {
                  name: 'tools',
                  label: 'Ferramentas Utilizadas',
                  type: 'checkbox',
                  options: ['Excel', 'Google Sheets', 'Power BI', 'Tableau', 'Python', 'SQL'],
                  required: true
                },
                {
                  name: 'reportingFrequency',
                  label: 'Frequência de Relatórios',
                  type: 'select',
                  options: ['Diário', 'Semanal', 'Mensal', 'Trimestral', 'Sob Demanda'],
                  required: true
                }
              ]
            },
            required: true
          },
          {
            id: 'demo',
            title: 'Análise de Dados',
            description: 'Veja como o agente pode acelerar suas análises.',
            type: 'demo' as const,
            content: {
              scenario: 'Análise de performance de vendas',
              steps: [
                'Importar dados de vendas',
                'Identificar tendências e padrões',
                'Gerar insights automáticos',
                'Criar visualizações interativas'
              ]
            },
            required: false
          }
        ];

      default:
        return [
          ...commonSteps,
          {
            id: 'basic-setup',
            title: 'Configuração Básica',
            description: 'Configure as funcionalidades principais deste agente.',
            type: 'input' as const,
            content: {
              fields: [
                {
                  name: 'useCase',
                  label: 'Principal Uso',
                  type: 'textarea',
                  placeholder: 'Descreva como você pretende usar este agente...',
                  required: true
                },
                {
                  name: 'frequency',
                  label: 'Frequência de Uso',
                  type: 'select',
                  options: ['Diário', 'Semanal', 'Mensal', 'Sob Demanda'],
                  required: true
                }
              ]
            },
            required: true
          }
        ];
    }
  };

  const steps = getOnboardingSteps(agentId);
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

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const renderStepContent = () => {
    switch (currentStepData.type) {
      case 'info':
        return (
          <div className="text-center">
            <div className="text-6xl mb-6">{currentStepData.content.icon}</div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {currentStepData.content.message}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStepData.content.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'input':
        return (
          <div className="space-y-6">
            {currentStepData.content.fields.map((field: any, index: number) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                
                {field.type === 'select' ? (
                  <select
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    required={field.required}
                  >
                    <option value="">Selecione uma opção...</option>
                    {field.options.map((option: string) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : field.type === 'checkbox' ? (
                  <div className="space-y-2">
                    {field.options.map((option: string) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 dark:border-gray-600"
                          onChange={(e) => {
                            const currentValues = formData[field.name] || [];
                            const newValues = e.target.checked
                              ? [...currentValues, option]
                              : currentValues.filter((v: string) => v !== option);
                            handleFieldChange(field.name, newValues);
                          }}
                        />
                        <span className="text-gray-700 dark:text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                ) : field.type === 'textarea' ? (
                  <textarea
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    rows={4}
                    placeholder={field.placeholder}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={field.placeholder}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
        );

      case 'demo':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
                🎬 Cenário: {currentStepData.content.scenario}
              </h3>
              <div className="space-y-3">
                {currentStepData.content.steps.map((step: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-blue-800 dark:text-blue-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">💡 Benefícios:</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Economia de tempo significativa</li>
                <li>• Qualidade profissional consistente</li>
                <li>• Aprendizado contínuo e adaptação</li>
                <li>• Integração com suas ferramentas</li>
              </ul>
            </div>
          </div>
        );

      default:
        return <div>Conteúdo não disponível</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentStepData.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {currentStepData.description}
              </p>
            </div>
            <button
              onClick={handleSkip}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
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
        <div className="p-6">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Anterior
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleSkip}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Pular Configuração
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              {currentStep === steps.length - 1 ? 'Finalizar' : 'Próximo →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
