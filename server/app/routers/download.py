from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from ..storage import get_asset

router = APIRouter(tags=["download"])

@router.get('/download/{asset_id}')
def download(asset_id: str):
    try:
        path = get_asset(asset_id)
    except KeyError:
        raise HTTPException(404, detail="Asset não encontrado")
    return FileResponse(path)
