from pydantic import BaseModel
from typing import List, Optional, Dict, Any

class SourceItem(BaseModel):
    id: str
    type: str
    text: str
    meta: Optional[Dict[str, Any]] = {}

class IngestTextRequest(BaseModel):
    text: str

class IngestUrlPreviewRequest(BaseModel):
    url: str

class IngestUrlFetchRequest(BaseModel):
    url: str
    includeLinks: Optional[List[str]] = None

class GenerateScriptRequest(BaseModel):
    sourceIds: List[str]
    outputType: str
    outputLanguage: str
    tipo: str

class GeneratePdfRequest(BaseModel):
    presentation: Dict[str, Any]
