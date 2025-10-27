from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
from dotenv import load_dotenv
import requests
from bs4 import BeautifulSoup
import json
import uuid
from datetime import datetime

load_dotenv()

app = FastAPI(title="Docstoteles AI Assistant", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class Document(BaseModel):
    id: str
    title: str
    content: str
    url: Optional[str] = None
    created_at: datetime
    source_type: str  # "upload", "web_scrape", "manual"

class QueryRequest(BaseModel):
    query: str
    context: Optional[str] = None

class QueryResponse(BaseModel):
    answer: str
    sources: List[Document]
    confidence: float

class WebScrapeRequest(BaseModel):
    url: str
    title: Optional[str] = None

# In-memory storage (MVP)
DB_DOCUMENTS = {}
DB_QUERIES = []

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "Docstoteles AI Assistant"}

@app.get("/")
async def root():
    return {
        "message": "Docstoteles AI Assistant",
        "version": "1.0.0",
        "features": [
            "Document upload and processing",
            "Web scraping and content extraction", 
            "RAG-based question answering",
            "Multi-source knowledge base"
        ]
    }

@app.post("/documents/upload")
async def upload_document(file: UploadFile = File(...)):
    """Upload and process a document"""
    try:
        content = await file.read()
        
        # Simple text extraction (can be enhanced with docling)
        if file.content_type == "text/plain":
            text_content = content.decode("utf-8")
        else:
            text_content = f"Documento {file.filename} - Tipo: {file.content_type}"
        
        doc_id = str(uuid.uuid4())
        document = Document(
            id=doc_id,
            title=file.filename,
            content=text_content,
            created_at=datetime.now(),
            source_type="upload"
        )
        
        DB_DOCUMENTS[doc_id] = document
        
        return {
            "message": "Documento carregado com sucesso",
            "document_id": doc_id,
            "title": file.filename,
            "size": len(text_content)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao processar documento: {str(e)}")

@app.post("/documents/scrape")
async def scrape_web_content(request: WebScrapeRequest):
    """Scrape content from a web URL"""
    try:
        response = requests.get(request.url, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract main content
        title = request.title or soup.find('title')
        if title:
            title = title.get_text().strip()
        
        # Remove scripts and styles
        for script in soup(["script", "style"]):
            script.decompose()
        
        content = soup.get_text()
        # Clean up whitespace
        lines = (line.strip() for line in content.splitlines())
        chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
        content = ' '.join(chunk for chunk in chunks if chunk)
        
        doc_id = str(uuid.uuid4())
        document = Document(
            id=doc_id,
            title=title or request.url,
            content=content[:5000],  # Limit content size
            url=request.url,
            created_at=datetime.now(),
            source_type="web_scrape"
        )
        
        DB_DOCUMENTS[doc_id] = document
        
        return {
            "message": "Conteúdo web extraído com sucesso",
            "document_id": doc_id,
            "title": title,
            "url": request.url,
            "content_length": len(content)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao extrair conteúdo web: {str(e)}")

@app.post("/query")
async def query_documents(request: QueryRequest):
    """Query the knowledge base using RAG"""
    try:
        if not DB_DOCUMENTS:
            return QueryResponse(
                answer="Nenhum documento encontrado na base de conhecimento. Faça upload de documentos ou extraia conteúdo web primeiro.",
                sources=[],
                confidence=0.0
            )
        
        # Simple keyword-based search (can be enhanced with vector search)
        query_lower = request.query.lower()
        relevant_docs = []
        
        for doc in DB_DOCUMENTS.values():
            if any(word in doc.content.lower() for word in query_lower.split()):
                relevant_docs.append(doc)
        
        if not relevant_docs:
            return QueryResponse(
                answer="Não encontrei informações relevantes nos documentos disponíveis.",
                sources=[],
                confidence=0.0
            )
        
        # Simple answer generation (can be enhanced with OpenAI)
        answer = f"Baseado nos documentos encontrados, aqui estão as informações relevantes para sua pergunta: '{request.query}'\n\n"
        
        for i, doc in enumerate(relevant_docs[:3], 1):
            answer += f"{i}. {doc.title}:\n{doc.content[:200]}...\n\n"
        
        confidence = min(0.9, len(relevant_docs) / len(DB_DOCUMENTS))
        
        return QueryResponse(
            answer=answer,
            sources=relevant_docs[:5],
            confidence=confidence
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao processar consulta: {str(e)}")

@app.get("/documents")
async def list_documents():
    """List all documents in the knowledge base"""
    return {
        "documents": list(DB_DOCUMENTS.values()),
        "total": len(DB_DOCUMENTS)
    }

@app.get("/documents/{document_id}")
async def get_document(document_id: str):
    """Get a specific document"""
    if document_id not in DB_DOCUMENTS:
        raise HTTPException(status_code=404, detail="Documento não encontrado")
    
    return DB_DOCUMENTS[document_id]

@app.delete("/documents/{document_id}")
async def delete_document(document_id: str):
    """Delete a document"""
    if document_id not in DB_DOCUMENTS:
        raise HTTPException(status_code=404, detail="Documento não encontrado")
    
    del DB_DOCUMENTS[document_id]
    return {"message": "Documento removido com sucesso"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8501)
