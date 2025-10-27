from fastapi import APIRouter, HTTPException
from pathlib import Path
from ..schemas import GenerateScriptRequest, GeneratePdfRequest, PresentationJson
from ..storage import get_sources, save_asset
from ..services.ai import generate_script_from_sources
from ..services.pdfgen import build_pdf

router = APIRouter(prefix="/generate", tags=["generate"])

@router.post('/script')
def generate_script(payload: GenerateScriptRequest):
    sources = get_sources(payload.sourceIds)
    if not sources:
        raise HTTPException(404, detail="Nenhuma fonte encontrada")
    script = generate_script_from_sources(sources, payload.outputLanguage, payload.tipo)
    return script.model_dump()

@router.post('/pdf')
def generate_pdf(payload: GeneratePdfRequest):
    pres = PresentationJson.model_validate(payload.presentation)
    out = Path.cwd() / f"presentation_{hash(pres.titulo_principal) & 0xffff}.pdf"
    build_pdf(pres, out)
    asset_id = save_asset(out)
    return {"pdfAssetId": asset_id, "downloadUrl": f"/download/{asset_id}"}

@router.post('/audio')
def generate_audio():
    raise HTTPException(501, detail="Áudio TTS ainda não implementado no scaffold.")

@router.post('/video')
def generate_video():
    raise HTTPException(501, detail="Vídeo ainda não implementado no scaffold.")
