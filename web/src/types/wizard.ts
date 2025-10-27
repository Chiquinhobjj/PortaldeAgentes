export interface WizardState {
  currentStep: 1 | 2 | 3 | 4;
  sourceIds: string[];
  inputType: 'text' | 'file' | 'url';
  outputFormat: 'video' | 'presentation';
  outputType: 'narracao' | 'podcast';
  language: 'pt-br' | 'en';
  generatedScript?: ScriptJson;
  generatedPdf?: string; // URL
  isGenerating: boolean;
  progress: number;
  currentPhase?: string;
  inputData?: {
    text?: string;
    file?: File;
    url?: string;
    urlLinks?: Array<{href: string, title: string}>;
  };
}

export interface ScriptJson {
  titulo: string;
  tipo: 'narracao' | 'podcast';
  lingua: 'pt-br' | 'en';
  partes: ScriptPart[];
}

export interface ScriptPart {
  id: string;
  tempo_estimado_seg: number;
  falas: ScriptSpeech[];
  legenda: string;
}

export interface ScriptSpeech {
  speaker: 'NARRADOR' | 'A' | 'B';
  texto: string;
}

export interface PresentationJson {
  titulo_principal: string;
  slides: PresentationSlide[];
}

export interface PresentationSlide {
  titulo: string;
  legenda: string;
  prompt_visual: string;
}

export interface Translation {
  title: string;
  subtitle: string;
  steps: {
    step1: {
      title: string;
      description: string;
      options: {
        text: string;
        file: string;
        url: string;
      };
    };
    step2: {
      title: string;
      description: string;
      formats: {
        video: string;
        presentation: string;
      };
      types: {
        narracao: string;
        podcast: string;
      };
    };
    step3: {
      title: string;
      description: string;
    };
    step4: {
      title: string;
      description: string;
    };
  };
  actions: {
    next: string;
    previous: string;
    generate: string;
    download: string;
    newContent: string;
    upload: string;
    paste: string;
    enterUrl: string;
    selectFile: string;
    analyze: string;
    processing: string;
    complete: string;
    viewResult: string;
    editSettings: string;
  };
  phases: {
    analyzing: string;
    structuring: string;
    generating: string;
    creating: string;
    finalizing: string;
  };
  placeholders: {
    textInput: string;
    urlInput: string;
    fileUpload: string;
  };
  errors: {
    emptyText: string;
    invalidUrl: string;
    fileTooBig: string;
    generationFailed: string;
  };
}

export type Language = 'pt-br' | 'en';
