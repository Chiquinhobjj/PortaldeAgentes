from fastapi import APIRouter, HTTPException
from ..schemas import GenerateScriptRequest, GeneratePdfRequest
from ..services.ai import generate_script_from_sources, generate_presentation_pdf
from ..routers.ingest import get_sources

router = APIRouter(prefix="/generate", tags=["generate"])

@router.post('/script')
def generate_script(payload: GenerateScriptRequest):
    try:
        sources = get_sources(payload.sourceIds)
        if not sources:
            raise HTTPException(400, detail="Nenhuma fonte encontrada")
        
        script = generate_script_from_sources(
            sources, 
            payload.outputType, 
            payload.outputLanguage
        )
        
        return script
        
    except Exception as e:
        raise HTTPException(500, detail=f"Erro na geração: {str(e)}")

@router.post('/pdf')
def generate_pdf(payload: GeneratePdfRequest):
    try:
        pdf_result = generate_presentation_pdf(payload.presentation)
        return pdf_result
        
    except Exception as e:
        raise HTTPException(500, detail=f"Erro na geração do PDF: {str(e)}")
