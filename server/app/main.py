from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .config import ALLOWED_ORIGINS
from .routers import ingest, generate, download

app = FastAPI(title="Contexto→Mídias API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todas as origens durante desenvolvimento
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ingest.router)
app.include_router(generate.router)
app.include_router(download.router)

@app.get("/")
def root():
    return {"ok": True, "service": "contexto-midias", "version": "0.1.0"}
