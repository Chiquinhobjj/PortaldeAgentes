import React, { useState, useRef } from 'react';
import { FileText, Upload, Link, ChevronRight, File, AlertCircle } from 'lucide-react';
import { WizardState, Language } from '../../types/wizard';
import { useTranslation } from "../../../i18n/i18n";
import { ingestText, ingestFile } from '../../../utils/api';

interface Step1InputContextProps {
  wizardState: WizardState;
  setWizardState: React.Dispatch<React.SetStateAction<WizardState>>;
  language: Language;
}

const Step1InputContext: React.FC<Step1InputContextProps> = ({ 
  wizardState, 
  setWizardState, 
  language 
}) => {
  const t = useTranslation(language);
  const [textInput, setTextInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Formatos suportados pelo Docling
  const supportedFormats = [
    '.pdf', '.docx', '.pptx', '.xlsx', '.html', '.htm',
    '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff',
    '.txt', '.md'
  ];

  const handleTextSubmit = async () => {
    if (!textInput.trim()) {
      setError(t.errors.emptyText);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await ingestText(textInput);
      setWizardState(prev => ({
        ...prev,
        sourceIds: [response.sourceId],
        inputData: { text: textInput },
        currentStep: 2
      }));
    } catch (err) {
      setError(t.errors.generationFailed);
      console.error('Error ingesting text:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async () => {
    if (!uploadedFile) {
      setError(language === 'pt-br' ? 'Nenhum arquivo selecionado' : 'No file selected');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await ingestFile(uploadedFile);
      setWizardState(prev => ({
        ...prev,
        sourceIds: [response.sourceId],
        inputData: { file: uploadedFile.name },
        currentStep: 2
      }));
    } catch (err) {
      setError(t.errors.generationFailed);
      console.error('Error uploading file:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      if (supportedFormats.includes(fileExtension)) {
        setUploadedFile(file);
        setError('');
      } else {
        setError(
          language === 'pt-br' 
            ? `Formato não suportado: ${fileExtension}. Formatos suportados: ${supportedFormats.join(', ')}`
            : `Unsupported format: ${fileExtension}. Supported formats: ${supportedFormats.join(', ')}`
        );
        setUploadedFile(null);
      }
    }
  };

  const inputOptions = [
    {
      key: 'text' as const,
      icon: FileText,
      title: t.steps.step1.options.text,
      description: language === 'pt-br' 
        ? 'Cole ou digite texto diretamente' 
        : 'Paste or type text directly'
    },
    {
      key: 'file' as const,
      icon: Upload,
      title: t.steps.step1.options.file,
      description: language === 'pt-br' 
        ? 'Faça upload de PDF, DOCX, PPTX, XLSX, HTML, imagens ou TXT' 
        : 'Upload PDF, DOCX, PPTX, XLSX, HTML, images or TXT files'
    },
    {
      key: 'url' as const,
      icon: Link,
      title: t.steps.step1.options.url,
      description: language === 'pt-br' 
        ? 'Insira uma URL para análise' 
        : 'Enter a URL for analysis'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-gray-900 mb-4">{t.steps.step1.title}</h2>
        <p className="text-gray-600 text-lg">{t.steps.step1.description}</p>
      </div>

      {/* Input Type Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {language === 'pt-br' ? 'Escolha o tipo de entrada:' : 'Choose input type:'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {inputOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = wizardState.inputType === option.key;
            
            return (
              <button
                key={option.key}
                onClick={() => setWizardState(prev => ({ ...prev, inputType: option.key }))}
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
                    {option.title}
                  </h4>
                </div>
                <p className={`text-sm ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
                  {option.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Content */}
      {wizardState.inputType === 'text' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'pt-br' ? 'Seu texto:' : 'Your text:'}
            </label>
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={t.placeholders.textInput}
              className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleTextSubmit}
              disabled={isLoading || !textInput.trim()}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t.actions.processing}
                </>
              ) : (
                <>
                  {t.actions.next}
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {wizardState.inputType === 'file' && (
        <div className="space-y-6">
          <div className="text-center">
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {language === 'pt-br' ? 'Upload de Arquivo' : 'File Upload'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'pt-br' 
                ? 'Formatos suportados: PDF, DOCX, PPTX, XLSX, HTML, PNG, JPG, GIF, BMP, TIFF, TXT, MD'
                : 'Supported formats: PDF, DOCX, PPTX, XLSX, HTML, PNG, JPG, GIF, BMP, TIFF, TXT, MD'
              }
            </p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <input
              ref={fileInputRef}
              type="file"
              accept={supportedFormats.join(',')}
              onChange={handleFileSelect}
              className="hidden"
            />
            
            {uploadedFile ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <File className="w-8 h-8 text-green-600" />
                  <div className="text-left">
                    <p className="font-medium text-green-900">{uploadedFile.name}</p>
                    <p className="text-sm text-green-700">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleFileUpload}
                    disabled={isLoading}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t.actions.processing}
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        {language === 'pt-br' ? 'Processar Arquivo' : 'Process File'}
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={() => {
                      setUploadedFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {language === 'pt-br' ? 'Remover' : 'Remove'}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
                >
                  <Upload className="w-5 h-5" />
                  {language === 'pt-br' ? 'Selecionar Arquivo' : 'Select File'}
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  {language === 'pt-br' 
                    ? 'ou arraste e solte o arquivo aqui'
                    : 'or drag and drop file here'
                  }
                </p>
              </div>
            )}
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => setWizardState(prev => ({ ...prev, inputType: 'text' }))}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {language === 'pt-br' ? 'Usar Texto' : 'Use Text'}
            </button>
          </div>
        </div>
      )}

      {wizardState.inputType === 'url' && (
        <div className="text-center py-12">
          <Link className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {language === 'pt-br' ? 'Análise de URL' : 'URL Analysis'}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === 'pt-br' 
              ? 'Funcionalidade será implementada em breve' 
              : 'Feature will be implemented soon'
            }
          </p>
          <button
            onClick={() => setWizardState(prev => ({ ...prev, inputType: 'text' }))}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {language === 'pt-br' ? 'Usar Texto' : 'Use Text'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Step1InputContext;
