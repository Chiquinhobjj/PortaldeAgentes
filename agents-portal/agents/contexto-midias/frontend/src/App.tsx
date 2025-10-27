import React, { useState } from 'react';
import { Upload, FileText, Sparkles, Download } from 'lucide-react';

interface WizardState {
  currentStep: number;
  sourceIds: string[];
  outputType: string;
  outputFormat: string;
  language: string;
  isGenerating: boolean;
  progress: number;
  generatedScript: any;
  generatedPdf: string;
}

export default function App() {
  const [wizardState, setWizardState] = useState<WizardState>({
    currentStep: 1,
    sourceIds: [],
    outputType: 'podcast',
    outputFormat: 'script',
    language: 'pt-br',
    isGenerating: false,
    progress: 0,
    generatedScript: null,
    generatedPdf: ''
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [textInput, setTextInput] = useState('');

  const handleTextSubmit = async () => {
    if (!textInput.trim()) return;
    
    try {
      const response = await fetch('http://localhost:8002/ingest/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textInput })
      });
      
      const result = await response.json();
      setWizardState(prev => ({
        ...prev,
        sourceIds: [...prev.sourceIds, result.sourceId],
        currentStep: 2
      }));
    } catch (error) {
      console.error('Erro ao enviar texto:', error);
    }
  };

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch('http://localhost:8002/ingest/file', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      setWizardState(prev => ({
        ...prev,
        sourceIds: [...prev.sourceIds, result.sourceId],
        currentStep: 2
      }));
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
    }
  };

  const handleGenerate = async () => {
    setWizardState(prev => ({ ...prev, isGenerating: true, progress: 0 }));
    
    try {
      // Simular progresso
      for (let i = 0; i <= 100; i += 10) {
        setWizardState(prev => ({ ...prev, progress: i }));
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      // Gerar roteiro
      const response = await fetch('http://localhost:8002/generate/script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceIds: wizardState.sourceIds,
          outputType: wizardState.outputType,
          outputLanguage: wizardState.language,
          tipo: wizardState.outputType
        })
      });
      
      const script = await response.json();
      setWizardState(prev => ({
        ...prev,
        generatedScript: script,
        currentStep: 3,
        isGenerating: false
      }));
      
    } catch (error) {
      console.error('Erro na geração:', error);
      setWizardState(prev => ({ ...prev, isGenerating: false }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Contexto → Mídias
          </h1>
          <p className="text-gray-300 text-lg">
            Transforme contexto em roteiros e apresentações profissionais
          </p>
        </div>

        {/* Step 1: Input Context */}
        {wizardState.currentStep === 1 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Escolha a Entrada do Contexto</h2>
              
              {/* Text Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Texto</label>
                <textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Cole seu texto aqui..."
                  className="w-full h-32 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleTextSubmit}
                  disabled={!textInput.trim()}
                  className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Adicionar Texto
                </button>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Arquivo</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <input
                    type="file"
                    accept=".txt,.md,.pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setUploadedFile(file);
                        handleFileUpload(file);
                      }
                    }}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Escolher Arquivo
                  </label>
                  {uploadedFile && (
                    <p className="mt-2 text-sm text-gray-400">
                      Arquivo selecionado: {uploadedFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Configure Output */}
        {wizardState.currentStep === 2 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Configure a Saída</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Conteúdo</label>
                  <select
                    value={wizardState.outputType}
                    onChange={(e) => setWizardState(prev => ({ ...prev, outputType: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="podcast">Podcast</option>
                    <option value="apresentacao">Apresentação</option>
                    <option value="video">Vídeo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Formato</label>
                  <select
                    value={wizardState.outputFormat}
                    onChange={(e) => setWizardState(prev => ({ ...prev, outputFormat: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="script">Roteiro</option>
                    <option value="presentation">Apresentação</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={handleGenerate}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all"
                >
                  <Sparkles className="w-5 h-5 inline mr-2" />
                  Gerar Conteúdo
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {wizardState.currentStep === 3 && wizardState.generatedScript && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Resultado Gerado</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">{wizardState.generatedScript.titulo}</h3>
                
                <div className="space-y-4">
                  {wizardState.generatedScript.partes?.map((parte: any, index: number) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{parte.legenda}</h4>
                      <div className="space-y-2">
                        {parte.falas?.map((fala: any, fIndex: number) => (
                          <p key={fIndex} className="text-gray-300">{fala.texto}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  <Download className="w-4 h-4 inline mr-2" />
                  Baixar Roteiro
                </button>
                <button
                  onClick={() => setWizardState(prev => ({ ...prev, currentStep: 1, sourceIds: [], generatedScript: null }))}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Novo Projeto
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {wizardState.isGenerating && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">Gerando Conteúdo...</h2>
              <p className="text-gray-400">Processando suas informações com IA</p>
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${wizardState.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">{wizardState.progress}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
