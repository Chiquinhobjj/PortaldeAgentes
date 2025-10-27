export type OutputLanguage = 'pt-br' | 'en';
export type SourceType = 'text'|'markdown'|'pdf'|'audio'|'image'|'video'|'url'|'youtube';
export interface SourceItem {
  id: string;
  type: SourceType;
  name?: string;
  status: 'processing'|'ready'|'error';
  text?: string;
  meta?: Record<string, any>;
}
export type OutputType = 'video'|'audio'|'presentation'|'pptx';
export interface ScriptSpeech { speaker: 'NARRADOR'|'A'|'B'; texto: string }
export interface ScriptPart { id: string; tempo_estimado_seg: number; falas: ScriptSpeech[]; legenda: string; }
export interface ScriptJson { titulo: string; tipo: 'narracao'|'podcast'; lingua: OutputLanguage; partes: ScriptPart[]; }
export interface PresentationSlide { titulo: string; legenda: string; prompt_visual: string }
export interface PresentationJson { titulo_principal: string; slides: PresentationSlide[] }
