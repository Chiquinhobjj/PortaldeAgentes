import React from 'react';
import { Download, RefreshCw, FileText, Presentation, ChevronLeft } from 'lucide-react';
import { WizardState, Language } from '../../types/wizard';
import { useTranslation } from "../../../i18n/i18n";

interface Step4ResultsProps {
  wizardState: WizardState;
  setWizardState: React.Dispatch<React.SetStateAction<WizardState>>;
  language: Language;
  onReset: () => void;
}

const Step4Results: React.FC<Step4ResultsProps> = ({ 
  wizardState, 
  setWizardState, 
  language,
  onReset 
}) => {
  const t = useTranslation(language);

  const handleDownload = () => {
    if (wizardState.generatedPdf) {
      const link = document.createElement('a');
      link.href = wizardState.generatedPdf;
      link.download = `${wizardState.generatedScript?.titulo || 'apresentacao'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleRegenerate = () => {
    setWizardState(prev => ({ 
      ...prev, 
      currentStep: 3,
      isGenerating: true,
      progress: 0,
      currentPhase: 'analyzing'
    }));
  };

  const handlePrevious = () => {
    setWizardState(prev => ({ ...prev, currentStep: 2 }));
  };

  if (!wizardState.generatedScript) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {language === 'pt-br' ? 'Nenhum resultado encontrado' : 'No results found'}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === 'pt-br' 
              ? 'Parece que a geração ainda não foi concluída.' 
              : 'It seems the generation has not been completed yet.'
            }
          </p>
          <button
            onClick={handlePrevious}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {t.actions.previous}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 p-8 text-center text-white">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Download className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-serif font-normal mb-2">
          {t.steps.step4.title}
        </h1>
        <p className="text-lg opacity-90">
          {t.steps.step4.description}
        </p>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Script Display */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-serif text-gray-900">
              {wizardState.generatedScript.titulo}
            </h2>
          </div>
          
          <div className="space-y-4">
            {wizardState.generatedScript.partes.map((parte: any, index: number) => (
              <div key={parte.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-900">
                    {language === 'pt-br' ? 'Parte' : 'Part'} {index + 1}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {parte.tempo_estimado_seg}s
                  </span>
                </div>
                
                <p className="text-gray-700 mb-3 text-sm">
                  {parte.legenda}
                </p>
                
                <div className="space-y-2">
                  {parte.falas.map((fala: any, falaIndex: number) => (
                    <div key={falaIndex} className="flex gap-3">
                      <span className="font-medium text-blue-600 text-sm min-w-0 flex-shrink-0">
                        {fala.speaker}:
                      </span>
                      <p className="text-gray-700 text-sm flex-1">
                        {fala.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Preview */}
        {wizardState.generatedPdf && (
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Presentation className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-serif text-gray-900">
                {language === 'pt-br' ? 'Preview da Apresentação' : 'Presentation Preview'}
              </h2>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <iframe
                src={wizardState.generatedPdf}
                className="w-full h-96 border-0 rounded"
                title="PDF Preview"
              />
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-4">
            {language === 'pt-br' ? 'Informações do Projeto' : 'Project Information'}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-blue-800">
                {language === 'pt-br' ? 'Título:' : 'Title:'}
              </span>
              <p className="text-blue-700">{wizardState.generatedScript.titulo}</p>
            </div>
            <div>
              <span className="font-medium text-blue-800">
                {language === 'pt-br' ? 'Tipo:' : 'Type:'}
              </span>
              <p className="text-blue-700">{t.steps.step2.types[wizardState.outputType]}</p>
            </div>
            <div>
              <span className="font-medium text-blue-800">
                {language === 'pt-br' ? 'Formato:' : 'Format:'}
              </span>
              <p className="text-blue-700">{t.steps.step2.formats[wizardState.outputFormat]}</p>
            </div>
            <div>
              <span className="font-medium text-blue-800">
                {language === 'pt-br' ? 'Idioma:' : 'Language:'}
              </span>
              <p className="text-blue-700">
                {wizardState.language === 'pt-br' ? '🇧🇷 Português' : '🇺🇸 English'}
              </p>
            </div>
            <div>
              <span className="font-medium text-blue-800">
                {language === 'pt-br' ? 'Partes:' : 'Parts:'}
              </span>
              <p className="text-blue-700">{wizardState.generatedScript.partes.length}</p>
            </div>
            <div>
              <span className="font-medium text-blue-800">
                {language === 'pt-br' ? 'Duração Total:' : 'Total Duration:'}
              </span>
              <p className="text-blue-700">
                {wizardState.generatedScript.partes.reduce((acc: number, p: any) => acc + p.tempo_estimado_seg, 0)}s
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between pt-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            {t.actions.previous}
          </button>
          
          <div className="flex gap-3">
            <button
              onClick={handleRegenerate}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              {language === 'pt-br' ? 'Regenerar' : 'Regenerate'}
            </button>
            
            {wizardState.generatedPdf && (
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t.actions.download}
              </button>
            )}
            
            <button
              onClick={onReset}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {t.actions.newContent}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Results;
