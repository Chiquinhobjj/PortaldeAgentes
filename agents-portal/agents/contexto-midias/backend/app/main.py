from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import ingest, generate

app = FastAPI(
    title="Contexto → Mídias API",
    description="API para transformar contexto em roteiros e apresentações profissionais",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir routers
app.include_router(ingest.router)
app.include_router(generate.router)

@app.get("/")
def read_root():
    return {"message": "Contexto → Mídias API", "status": "online"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "contexto-midias"}
