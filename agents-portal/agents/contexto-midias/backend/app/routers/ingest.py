from fastapi import APIRouter, UploadFile, File, HTTPException
from ..schemas import IngestTextRequest, IngestUrlPreviewRequest, IngestUrlFetchRequest, SourceItem
import os
import tempfile

router = APIRouter(prefix="/ingest", tags=["ingest"])

# Storage simples em memória
DB_SOURCES = {}

def new_id():
    import uuid
    return str(uuid.uuid4())

def save_source(source_data):
    DB_SOURCES[source_data["id"]] = source_data

def get_sources(source_ids):
    return [DB_SOURCES[sid] for sid in source_ids if sid in DB_SOURCES]

@router.post('/text')
def ingest_text(payload: IngestTextRequest):
    if not payload.text.strip():
        raise HTTPException(422, detail="Texto vazio")
    
    sid = new_id()
    save_source(SourceItem(
        id=sid, 
        type='text', 
        text=payload.text.strip()
    ).model_dump())
    
    return {"sourceId": sid, "status": "ready"}

@router.post('/file')
def ingest_file(file: UploadFile = File(...)):
    content = file.file.read()
    name = (file.filename or "arquivo").lower()
    sid = new_id()

    try:
        if name.endswith('.pdf'):
            from pdfminer.high_level import extract_text as pdf_extract
            with tempfile.NamedTemporaryFile(delete=False, suffix='.pdf') as tmp:
                tmp.write(content)
                tmp.flush()
                text = pdf_extract(tmp.name)
                os.unlink(tmp.name)
        elif name.endswith('.txt') or name.endswith('.md'):
            text = content.decode('utf-8', errors='ignore')
        else:
            text = content.decode('utf-8', errors='ignore')
        
        save_source(SourceItem(
            id=sid, 
            type='file', 
            text=text.strip(),
            meta={'filename': name}
        ).model_dump())
        
        return {"sourceId": sid, "status": "ready"}
        
    except Exception as e:
        raise HTTPException(500, detail=f"Erro ao processar arquivo: {str(e)}")

@router.post('/url/preview')
def url_preview(payload: IngestUrlPreviewRequest):
    return {"links": [payload.url]}

@router.post('/url/fetch')
def url_fetch(payload: IngestUrlFetchRequest):
    source_ids = []
    for href in payload.includeLinks or [payload.url]:
        sid = new_id()
        save_source(SourceItem(
            id=sid, 
            type='url', 
            text=f"[URL] {href}",
            meta={"href": href}
        ).model_dump())
        source_ids.append(sid)
    
    return {"sourceIds": source_ids, "status": "ready"}
