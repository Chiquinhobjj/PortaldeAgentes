import { Language, Translation } from '../types/wizard';

export const translations: Record<Language, Translation> = {
  'pt-br': {
    title: 'Contexto → Mídias',
    subtitle: 'Transforme qualquer contexto em mídia profissional',
    steps: {
      step1: {
        title: 'Forneça o Contexto',
        description: 'Escolha como fornecer o material base',
        options: {
          text: 'Texto Direto',
          file: 'Upload de Arquivo',
          url: 'URL/Link'
        }
      },
      step2: {
        title: 'Escolha o Formato',
        description: 'Como você quer transformar esse contexto?',
        formats: {
          video: 'Roteiro de Vídeo',
          presentation: 'Apresentação'
        },
        types: {
          narracao: 'Narração',
          podcast: 'Podcast'
        }
      },
      step3: {
        title: 'Criando sua Mídia',
        description: 'IA está processando o conteúdo...'
      },
      step4: {
        title: 'Sua Mídia está Pronta',
        description: 'Visualize e baixe o resultado'
      }
    },
    actions: {
      next: 'Próximo',
      previous: 'Anterior',
      generate: 'Gerar',
      download: 'Baixar',
      newContent: 'Nova Mídia',
      upload: 'Upload',
      paste: 'Colar Texto',
      enterUrl: 'Inserir URL',
      selectFile: 'Selecionar Arquivo',
      analyze: 'Analisar',
      processing: 'Processando...',
      complete: 'Concluído!',
      viewResult: 'Ver Resultado',
      editSettings: 'Editar Configurações'
    },
    phases: {
      analyzing: 'Analisando contexto...',
      structuring: 'Estruturando roteiro...',
      generating: 'Gerando conteúdo...',
      creating: 'Criando apresentação...',
      finalizing: 'Finalizando...'
    },
    placeholders: {
      textInput: 'Cole ou digite seu texto aqui...',
      urlInput: 'https://exemplo.com',
      fileUpload: 'Arraste arquivos aqui ou clique para selecionar'
    },
    errors: {
      emptyText: 'Por favor, insira algum texto',
      invalidUrl: 'URL inválida',
      fileTooBig: 'Arquivo muito grande',
      generationFailed: 'Falha na geração. Tente novamente.'
    }
  },
  'en': {
    title: 'Context → Media',
    subtitle: 'Transform any context into professional media',
    steps: {
      step1: {
        title: 'Provide Context',
        description: 'Choose how to provide the base material',
        options: {
          text: 'Direct Text',
          file: 'File Upload',
          url: 'URL/Link'
        }
      },
      step2: {
        title: 'Choose Format',
        description: 'How do you want to transform this context?',
        formats: {
          video: 'Video Script',
          presentation: 'Presentation'
        },
        types: {
          narracao: 'Narration',
          podcast: 'Podcast'
        }
      },
      step3: {
        title: 'Creating your Media',
        description: 'AI is processing the content...'
      },
      step4: {
        title: 'Your Media is Ready',
        description: 'View and download the result'
      }
    },
    actions: {
      next: 'Next',
      previous: 'Previous',
      generate: 'Generate',
      download: 'Download',
      newContent: 'New Media',
      upload: 'Upload',
      paste: 'Paste Text',
      enterUrl: 'Enter URL',
      selectFile: 'Select File',
      analyze: 'Analyze',
      processing: 'Processing...',
      complete: 'Complete!',
      viewResult: 'View Result',
      editSettings: 'Edit Settings'
    },
    phases: {
      analyzing: 'Analyzing context...',
      structuring: 'Structuring script...',
      generating: 'Generating content...',
      creating: 'Creating presentation...',
      finalizing: 'Finalizing...'
    },
    placeholders: {
      textInput: 'Paste or type your text here...',
      urlInput: 'https://example.com',
      fileUpload: 'Drag files here or click to select'
    },
    errors: {
      emptyText: 'Please enter some text',
      invalidUrl: 'Invalid URL',
      fileTooBig: 'File too large',
      generationFailed: 'Generation failed. Please try again.'
    }
  }
};

export const useTranslation = (language: Language) => {
  return translations[language];
};

export const getLanguageFromStorage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('contexto-midias-language');
    return (stored as Language) || 'pt-br';
  }
  return 'pt-br';
};

export const setLanguageToStorage = (language: Language) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('contexto-midias-language', language);
  }
};
