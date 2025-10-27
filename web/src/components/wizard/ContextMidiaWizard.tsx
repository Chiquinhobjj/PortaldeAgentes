import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Globe, FileText, Settings, Download } from 'lucide-react';
import { WizardState, Language } from '../../types/wizard';
import { useTranslation, getLanguageFromStorage, setLanguageToStorage } from '../../i18n/i18n';
import Step1InputContext from './steps/Step1InputContext';
import Step2ConfigureOutput from './steps/Step2ConfigureOutput';
import Step3Generate from './steps/Step3Generate';
import Step4Results from './steps/Step4Results';

const ContextMidiaWizard = () => {
  const [language, setLanguage] = useState<Language>(getLanguageFromStorage());
  const [wizardState, setWizardState] = useState<WizardState>({
    currentStep: 1,
    sourceIds: [],
    inputType: 'text',
    outputFormat: 'presentation',
    outputType: 'narracao',
    language: language,
    isGenerating: false,
    progress: 0
  });

  const t = useTranslation(language);

  // Update wizard language when language changes
  useEffect(() => {
    setWizardState(prev => ({ ...prev, language }));
    setLanguageToStorage(language);
  }, [language]);

  const nextStep = () => {
    if (wizardState.currentStep < 4) {
      setWizardState(prev => ({
        ...prev,
        currentStep: (prev.currentStep + 1) as 1 | 2 | 3 | 4
      }));
    }
  };

  const prevStep = () => {
    if (wizardState.currentStep > 1) {
      setWizardState(prev => ({
        ...prev,
        currentStep: (prev.currentStep - 1) as 1 | 2 | 3 | 4
      }));
    }
  };

  const resetWizard = () => {
    setWizardState({
      currentStep: 1,
      sourceIds: [],
      inputType: 'text',
      outputFormat: 'presentation',
      outputType: 'narracao',
      language: 'pt-br',
      isGenerating: false,
      progress: 0
    });
  };

  const renderStep = () => {
    switch (wizardState.currentStep) {
      case 1:
        return <Step1InputContext 
          wizardState={wizardState} 
          setWizardState={setWizardState}
          language={language}
        />;
      case 2:
        return <Step2ConfigureOutput 
          wizardState={wizardState} 
          setWizardState={setWizardState}
          language={language}
        />;
      case 3:
        return <Step3Generate 
          wizardState={wizardState} 
          setWizardState={setWizardState}
          language={language}
        />;
      case 4:
        return <Step4Results 
          wizardState={wizardState} 
          setWizardState={setWizardState}
          language={language}
          onReset={resetWizard}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-serif text-gray-900">{t.title}</h1>
              <p className="text-sm text-gray-600">{t.subtitle}</p>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as 'pt-br' | 'en')}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="pt-br">PT-BR</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 min-h-screen p-6">
          <WizardSidebar wizardState={wizardState} t={t} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
const WizardSidebar = ({ wizardState, t }: { wizardState: WizardState, t: any }) => {
  const steps = [
    { id: 1, title: t.steps.step1.title, icon: FileText },
    { id: 2, title: t.steps.step2.title, icon: Settings },
    { id: 3, title: t.steps.step3.title, icon: ChevronRight },
    { id: 4, title: t.steps.step4.title, icon: Download }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Progresso</h3>
      
      <div className="space-y-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = wizardState.currentStep === step.id;
          const isCompleted = wizardState.currentStep > step.id;
          
          return (
            <div 
              key={step.id}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                isActive ? 'bg-blue-50 border border-blue-200' : 
                isCompleted ? 'bg-green-50 border border-green-200' : 
                'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isActive ? 'bg-blue-600 text-white' :
                isCompleted ? 'bg-green-600 text-white' :
                'bg-gray-300 text-gray-600'
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className={`text-sm font-medium ${
                  isActive ? 'text-blue-900' :
                  isCompleted ? 'text-green-900' :
                  'text-gray-600'
                }`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-500">
                  Etapa {step.id}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progresso</span>
          <span>{Math.round((wizardState.currentStep / 4) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(wizardState.currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Summary */}
      {wizardState.sourceIds.length > 0 && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Resumo</h4>
          <div className="space-y-1 text-xs text-gray-600">
            <p>Entrada: {t.steps.step1.options[wizardState.inputType]}</p>
            <p>Formato: {t.steps.step2.formats[wizardState.outputFormat]}</p>
            <p>Tipo: {t.steps.step2.types[wizardState.outputType]}</p>
            <p>Idioma: {wizardState.language.toUpperCase()}</p>
          </div>
        </div>
      )}
    </div>
  );
};


export default ContextMidiaWizard;
