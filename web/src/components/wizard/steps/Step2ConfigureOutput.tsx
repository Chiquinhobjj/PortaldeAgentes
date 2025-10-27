import React from 'react';
import { Video, Presentation, Mic, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { WizardState, Language } from '../../types/wizard';
import { useTranslation } from "../../../i18n/i18n";

interface Step2ConfigureOutputProps {
  wizardState: WizardState;
  setWizardState: React.Dispatch<React.SetStateAction<WizardState>>;
  language: Language;
}

const Step2ConfigureOutput: React.FC<Step2ConfigureOutputProps> = ({ 
  wizardState, 
  setWizardState, 
  language 
}) => {
  const t = useTranslation(language);

  const outputFormats = [
    {
      key: 'video' as const,
      icon: Video,
      title: t.steps.step2.formats.video,
      description: language === 'pt-br' 
        ? 'Roteiro estruturado para vídeo' 
        : 'Structured script for video'
    },
    {
      key: 'presentation' as const,
      icon: Presentation,
      title: t.steps.step2.formats.presentation,
      description: language === 'pt-br' 
        ? 'Apresentação em slides PDF' 
        : 'Slides presentation PDF'
    }
  ];

  const outputTypes = [
    {
      key: 'narracao' as const,
      icon: Mic,
      title: t.steps.step2.types.narracao,
      description: language === 'pt-br' 
        ? 'Narração única e fluida' 
        : 'Single flowing narration'
    },
    {
      key: 'podcast' as const,
      icon: Users,
      title: t.steps.step2.types.podcast,
      description: language === 'pt-br' 
        ? 'Diálogo entre apresentadores' 
        : 'Dialogue between hosts'
    }
  ];

  const handleNext = () => {
    setWizardState(prev => ({ ...prev, currentStep: 3 }));
  };

  const handlePrevious = () => {
    setWizardState(prev => ({ ...prev, currentStep: 1 }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">{t.steps.step2.title}</h2>
        <p className="text-gray-600 text-lg">{t.steps.step2.description}</p>
      </div>

      <div className="space-y-8">
        {/* Output Format Selection */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {language === 'pt-br' ? 'Formato de Saída:' : 'Output Format:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outputFormats.map((format) => {
              const Icon = format.icon;
              const isSelected = wizardState.outputFormat === format.key;
              
              return (
                <button
                  key={format.key}
                  onClick={() => setWizardState(prev => ({ ...prev, outputFormat: format.key }))}
                  className={`p-6 border-2 rounded-lg text-left transition-all duration-200 ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50 shadow-md' 
                      : 'border-gray-300 hover:border-gray-400 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className={`font-semibold ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                      {format.title}
                    </h4>
                  </div>
                  <p className={`text-sm ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
                    {format.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Output Type Selection */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {language === 'pt-br' ? 'Tipo de Conteúdo:' : 'Content Type:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outputTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = wizardState.outputType === type.key;
              
              return (
                <button
                  key={type.key}
                  onClick={() => setWizardState(prev => ({ ...prev, outputType: type.key }))}
                  className={`p-6 border-2 rounded-lg text-left transition-all duration-200 ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50 shadow-md' 
                      : 'border-gray-300 hover:border-gray-400 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className={`font-semibold ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                      {type.title}
                    </h4>
                  </div>
                  <p className={`text-sm ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
                    {type.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Language Selection */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {language === 'pt-br' ? 'Idioma:' : 'Language:'}
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => setWizardState(prev => ({ ...prev, language: 'pt-br' }))}
              className={`px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200 ${
                wizardState.language === 'pt-br'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              🇧🇷 Português (BR)
            </button>
            <button
              onClick={() => setWizardState(prev => ({ ...prev, language: 'en' }))}
              className={`px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200 ${
                wizardState.language === 'en'
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              🇺🇸 English
            </button>
          </div>
        </div>

        {/* Preview Summary */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            {language === 'pt-br' ? 'Resumo da Configuração:' : 'Configuration Summary:'}
          </h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-medium">
                {language === 'pt-br' ? 'Entrada:' : 'Input:'} 
              </span> 
              {t.steps.step1.options[wizardState.inputType]}
            </p>
            <p>
              <span className="font-medium">
                {language === 'pt-br' ? 'Formato:' : 'Format:'} 
              </span> 
              {t.steps.step2.formats[wizardState.outputFormat]}
            </p>
            <p>
              <span className="font-medium">
                {language === 'pt-br' ? 'Tipo:' : 'Type:'} 
              </span> 
              {t.steps.step2.types[wizardState.outputType]}
            </p>
            <p>
              <span className="font-medium">
                {language === 'pt-br' ? 'Idioma:' : 'Language:'} 
              </span> 
              {wizardState.language === 'pt-br' ? '🇧🇷 Português' : '🇺🇸 English'}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            onClick={handlePrevious}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            {t.actions.previous}
          </button>
          
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            {t.actions.next}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2ConfigureOutput;
