import React, { useState, useEffect } from 'react';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { WizardState, Language } from '../../types/wizard';
import { useTranslation } from "../../../i18n/i18n";
import { generateScript, generatePdf } from '../../../utils/api';

interface Step3GenerateProps {
  wizardState: WizardState;
  setWizardState: React.Dispatch<React.SetStateAction<WizardState>>;
  language: Language;
}

const Step3Generate: React.FC<Step3GenerateProps> = ({ 
  wizardState, 
  setWizardState, 
  language 
}) => {
  const t = useTranslation(language);
  const [currentPhase, setCurrentPhase] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Step3Generate useEffect triggered, isGenerating:', wizardState.isGenerating);
    if (wizardState.isGenerating) {
      console.log('Starting generation...');
      generateContent();
    }
  }, [wizardState.isGenerating]);

  const generateContent = async () => {
    try {
      console.log('generateContent started');
      console.log('wizardState.sourceIds:', wizardState.sourceIds);
      console.log('wizardState.outputType:', wizardState.outputType);
      console.log('wizardState.language:', wizardState.language);
      
      // Phase 1: Analyzing
      setCurrentPhase(t.phases.analyzing);
      setWizardState(prev => ({ ...prev, progress: 20 }));
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Phase 2: Structuring
      setCurrentPhase(t.phases.structuring);
      setWizardState(prev => ({ ...prev, progress: 40 }));
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Phase 3: Generating Script
      setCurrentPhase(t.phases.generating);
      setWizardState(prev => ({ ...prev, progress: 60 }));
      
      console.log('Calling generateScript...');
      const script = await generateScript(
        wizardState.sourceIds, 
        wizardState.outputType, 
        wizardState.language
      );
      console.log('Script generated:', script);
      
      setWizardState(prev => ({ ...prev, generatedScript: script }));

      // Phase 4: Creating Presentation
      setCurrentPhase(t.phases.creating);
      setWizardState(prev => ({ ...prev, progress: 80 }));
      
      if (wizardState.outputFormat === 'presentation') {
        const presentation = {
          titulo_principal: script.titulo,
          slides: script.partes.map((p: any, i: number) => ({
            titulo: `${language === 'pt-br' ? 'Slide' : 'Slide'} ${i + 1}`,
            legenda: p.legenda,
            prompt_visual: `${language === 'pt-br' ? 'Ilustre:' : 'Illustrate:'} ${p.legenda}`
          }))
        };
        
        const pdfResult = await generatePdf(presentation);
        setWizardState(prev => ({ ...prev, generatedPdf: pdfResult.downloadUrl }));
      }

      // Phase 5: Finalizing
      setCurrentPhase(t.phases.finalizing);
      setWizardState(prev => ({ ...prev, progress: 100 }));
      await new Promise(resolve => setTimeout(resolve, 500));

      // Complete
      setWizardState(prev => ({ 
        ...prev, 
        isGenerating: false, 
        currentStep: 4,
        currentPhase: 'complete'
      }));

    } catch (err) {
      console.error('Generation error:', err);
      setError(t.errors.generationFailed);
      setWizardState(prev => ({ 
        ...prev, 
        isGenerating: false,
        currentPhase: 'error'
      }));
      console.error('Generation error:', err);
    }
  };

  const handleStartGeneration = () => {
    console.log('handleStartGeneration called');
    setError('');
    setWizardState(prev => ({ 
      ...prev, 
      isGenerating: true, 
      progress: 0,
      currentPhase: 'analyzing'
    }));
    console.log('isGenerating set to true');
  };

  const handlePrevious = () => {
    setWizardState(prev => ({ ...prev, currentStep: 2 }));
  };

  const renderAnimatedSVG = () => {
    const progress = wizardState.progress;
    
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto mb-6">
        <defs>
          <radialGradient id="aiGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>
        
        {/* Central AI Brain */}
        <g transform="translate(60, 60)">
          <circle 
            cx="0" 
            cy="0" 
            r="25" 
            fill="url(#aiGradient)" 
            opacity="0.8"
          >
            <animate 
              attributeName="r" 
              values="20;30;20" 
              dur="2s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="opacity" 
              values="0.6;1;0.6" 
              dur="2s" 
              repeatCount="indefinite" 
            />
          </circle>
          
          {/* Neural Network Lines */}
          <g stroke="#9ca3af" strokeWidth="2" opacity="0.9">
            <line x1="0" y1="-40" x2="0" y2="-25">
              <animate 
                attributeName="stroke-width" 
                values="1;3;1" 
                dur="1.5s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="28" y1="-28" x2="20" y2="-20">
              <animate 
                attributeName="stroke-width" 
                values="1;3;1" 
                dur="1.5s" 
                repeatCount="indefinite" 
                begin="0.2s" 
              />
            </line>
            <line x1="40" y1="0" x2="25" y2="0">
              <animate 
                attributeName="stroke-width" 
                values="1;3;1" 
                dur="1.5s" 
                repeatCount="indefinite" 
                begin="0.4s" 
              />
            </line>
            <line x1="28" y1="28" x2="20" y2="20">
              <animate 
                attributeName="stroke-width" 
                values="1;3;1" 
                dur="1.5s" 
                repeatCount="indefinite" 
                begin="0.6s" 
              />
            </line>
            <line x1="0" y1="40" x2="0" y2="25">
              <animate 
                attributeName="stroke-width" 
                values="1;3;1" 
                dur="1.5s" 
                repeatCount="indefinite" 
                begin="0.8s" 
              />
            </line>
            <line x1="-28" y1="28" x2="-20" y2="20">
              <animate 
                attributeName="stroke-width" 
                values="1;3;1" 
                dur="1.5s" 
                repeatCount="indefinite" 
                begin="1s" 
              />
            </line>
            <line x1="-40" y1="0" x2="-25" y2="0">
              <animate 
                attributeName="stroke-width" 
                values="1;3;1" 
                dur="1.5s" 
                repeatCount="indefinite" 
                begin="1.2s" 
              />
            </line>
            <line x1="-28" y1="-28" x2="-20" y2="-20">
              <animate 
                attributeName="stroke-width" 
                values="1;3;1" 
                dur="1.5s" 
                repeatCount="indefinite" 
                begin="1.4s" 
              />
            </line>
          </g>
          
          {/* Floating Data Points */}
          <circle cx="-35" cy="-35" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="-35;-45;-35" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="35" cy="-35" r="2" fill="#1d4ed8">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="cy" values="-35;-45;-35" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="-35" cy="35" r="2.5" fill="#60a5fa">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="cy" values="35;25;35" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="35" cy="35" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="cy" values="35;25;35" dur="3s" repeatCount="indefinite" begin="1.5s" />
          </circle>
          
          {/* Central Sparkle */}
          <text x="0" y="5" textAnchor="middle" fontSize="16" fill="#ffffff" fontWeight="bold">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            ✦
          </text>
        </g>
      </svg>
    );
  };

  if (!wizardState.isGenerating && wizardState.currentPhase !== 'complete') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">{t.steps.step3.title}</h2>
          <p className="text-gray-600 text-lg">{t.steps.step3.description}</p>
        </div>

        <div className="text-center py-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            {language === 'pt-br' ? 'Pronto para Gerar!' : 'Ready to Generate!'}
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {language === 'pt-br' 
              ? 'Clique no botão abaixo para começar a transformar seu contexto em mídia profissional usando inteligência artificial.'
              : 'Click the button below to start transforming your context into professional media using artificial intelligence.'
            }
          </p>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              {t.actions.previous}
            </button>
            
            <button
              onClick={handleStartGeneration}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {t.actions.generate}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">{t.steps.step3.title}</h2>
        <p className="text-gray-600 text-lg">{t.steps.step3.description}</p>
      </div>

      <div className="text-center py-8">
        {renderAnimatedSVG()}
        
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          {currentPhase || t.phases.analyzing}
        </h3>
        
        <div className="w-full max-w-md mx-auto mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{language === 'pt-br' ? 'Progresso' : 'Progress'}</span>
            <span>{wizardState.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${wizardState.progress}%` }}
            />
          </div>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg max-w-md mx-auto">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step3Generate;
