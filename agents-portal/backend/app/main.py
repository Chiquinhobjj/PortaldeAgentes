from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from .routers import agents
import os

app = FastAPI(
    title="Agents Portal API",
    description="API para gerenciar agentes de IA",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=False,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Incluir routers
app.include_router(agents.router)

@app.get("/")
async def root():
    return {
        "message": "Agents Portal API",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Servir arquivos estáticos do frontend (para desenvolvimento)
if os.path.exists("../frontend/out"):
    app.mount("/static", StaticFiles(directory="../frontend/out"), name="static")
    
    @app.get("/{path:path}")
    async def serve_frontend(path: str):
        """Serve frontend files"""
        if path == "" or path == "/":
            path = "index.html"
        
        file_path = f"../frontend/out/{path}"
        if os.path.exists(file_path):
            return FileResponse(file_path)
        else:
            return FileResponse("../frontend/out/index.html")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
