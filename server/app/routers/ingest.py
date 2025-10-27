from fastapi import APIRouter, UploadFile, File, HTTPException
from ..schemas import IngestTextRequest, IngestUrlPreviewRequest, IngestUrlFetchRequest, SourceItem
from ..storage import new_id, save_source
from ..services.parsing import normalize_text
from ..services.urltools import extract_links
import os
import tempfile

router = APIRouter(prefix="/ingest", tags=["ingest"])

@router.post('/text')
def ingest_text(payload: IngestTextRequest):
    if not payload.text.strip():
        raise HTTPException(422, detail="Texto vazio")
    sid = new_id()
    save_source(SourceItem(id=sid, type='text', text=normalize_text(payload.text)).model_dump())
    return {"sourceId": sid, "status": "ready"}

@router.post('/file')
def ingest_file(file: UploadFile = File(...)):
    content = file.file.read()
    name = (file.filename or "arquivo").lower()
    sid = new_id()

    try:
        # Processar arquivo baseado na extensão
        if name.endswith('.pdf'):
            try:
                from pdfminer.high_level import extract_text as pdf_extract
                with tempfile.NamedTemporaryFile(delete=False, suffix='.pdf') as tmp:
                    tmp.write(content)
                    tmp.flush()
                    
                    text = pdf_extract(tmp.name)
                    src = SourceItem(
                        id=sid, 
                        type='pdf',
                        text=normalize_text(text),
                        meta={
                            'filename': name,
                            'file_type': 'pdf',
                            'file_size': len(content),
                            'processing_method': 'pdfminer.six'
                        }
                    )
                    
                    # Limpar arquivo temporário
                    os.unlink(tmp.name)
            except Exception as pdf_error:
                src = SourceItem(
                    id=sid, 
                    type='error',
                    text=f"[ERRO] Falha ao processar PDF {name}: {str(pdf_error)}",
                    meta={'filename': name, 'error': str(pdf_error)}
                )
        
        elif name.endswith('.txt') or name.endswith('.md'):
            # Processar arquivos de texto simples
            text = content.decode('utf-8', errors='ignore')
            src = SourceItem(
                id=sid, 
                type='markdown' if name.endswith('.md') else 'text', 
                text=normalize_text(text),
                meta={'filename': name}
            )
        
        else:
            # Para outros formatos, usar texto simples
            try:
                text = content.decode('utf-8', errors='ignore')
                src = SourceItem(
                    id=sid, 
                    type='text',
                    text=normalize_text(text),
                    meta={'filename': name, 'file_type': 'text'}
                )
            except Exception as text_error:
                src = SourceItem(
                    id=sid, 
                    type='error',
                    text=f"[ERRO] Falha ao processar {name}: {str(text_error)}",
                    meta={'filename': name, 'error': str(text_error)}
                )

    except Exception as e:
        # Erro geral no processamento
        src = SourceItem(
            id=sid, 
            type='error',
            text=f"[ERRO] Falha ao processar {name}: {str(e)}",
            meta={'filename': name, 'error': str(e)}
        )

    save_source(src.model_dump())
    return {"sourceId": sid, "status": "ready"}

@router.post('/url/preview')
def url_preview(payload: IngestUrlPreviewRequest):
    links = extract_links(str(payload.url))
    return {"links": links}

@router.post('/url/fetch')
def url_fetch(payload: IngestUrlFetchRequest):
    source_ids = []
    for href in payload.includeLinks or [str(payload.url)]:
        sid = new_id()
        save_source(SourceItem(id=sid, type='url', text=f"[URL] {href}", meta={"href": href}).model_dump())
        source_ids.append(sid)
    return {"sourceIds": source_ids, "status": "ready"}
