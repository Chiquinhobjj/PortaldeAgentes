from pydantic import BaseModel, Field, HttpUrl
from typing import List, Literal, Optional, Dict

OutputLanguage = Literal['pt-br', 'en']
SourceType = Literal['text','markdown','pdf','audio','image','video','url','youtube']

class SourceItem(BaseModel):
    id: str
    type: SourceType
    name: Optional[str] = None
    text: Optional[str] = None  # conteúdo normalizado
    meta: Dict[str, str] = {}

class ScriptSpeech(BaseModel):
    speaker: Literal['NARRADOR','A','B']
    texto: str

class ScriptPart(BaseModel):
    id: str
    tempo_estimado_seg: int = Field(ge=1, le=3600)
    falas: List[ScriptSpeech]
    legenda: str

class ScriptJson(BaseModel):
    titulo: str
    tipo: Literal['narracao','podcast']
    lingua: OutputLanguage
    partes: List[ScriptPart]

class PresentationSlide(BaseModel):
    titulo: str
    legenda: str
    prompt_visual: str

class PresentationJson(BaseModel):
    titulo_principal: str
    slides: List[PresentationSlide]

# Requests
class IngestTextRequest(BaseModel):
    text: str

class IngestUrlPreviewRequest(BaseModel):
    url: HttpUrl

class IngestUrlFetchRequest(BaseModel):
    url: HttpUrl
    includeLinks: List[HttpUrl] = []

class GenerateScriptRequest(BaseModel):
    sourceIds: List[str]
    outputType: Literal['video','audio']
    outputLanguage: OutputLanguage = 'pt-br'
    tipo: Literal['narracao','podcast'] = 'narracao'

class GeneratePdfRequest(BaseModel):
    presentation: PresentationJson
