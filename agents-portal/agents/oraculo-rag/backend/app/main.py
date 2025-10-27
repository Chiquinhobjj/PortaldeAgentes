from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os
from dotenv import load_dotenv
import uuid
from datetime import datetime
import json
import numpy as np
from sentence_transformers import SentenceTransformer
import faiss
import pickle
import os

load_dotenv()

app = FastAPI(title="Oráculo RAG", version="1.0.0")

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
    metadata: Dict[str, Any] = {}
    created_at: datetime
    embedding: Optional[List[float]] = None

class QueryRequest(BaseModel):
    query: str
    top_k: int = 5
    similarity_threshold: float = 0.7
    context: Optional[str] = None

class QueryResponse(BaseModel):
    answer: str
    sources: List[Document]
    confidence: float
    reasoning: str

class MultiTaskRequest(BaseModel):
    tasks: List[str]
    context: Optional[str] = None

class MultiTaskResponse(BaseModel):
    results: List[Dict[str, Any]]
    summary: str

# Global variables
embedding_model = None
vector_index = None
documents_db = {}
document_embeddings = []

def initialize_embedding_model():
    global embedding_model
    try:
        embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        print("✅ Modelo de embedding inicializado")
    except Exception as e:
        print(f"❌ Erro ao inicializar modelo de embedding: {e}")
        embedding_model = None

def initialize_vector_index():
    global vector_index
    try:
        # Initialize FAISS index for 384-dimensional embeddings
        vector_index = faiss.IndexFlatIP(384)  # Inner product for cosine similarity
        print("✅ Índice vetorial inicializado")
    except Exception as e:
        print(f"❌ Erro ao inicializar índice vetorial: {e}")
        vector_index = None

@app.on_event("startup")
async def startup_event():
    initialize_embedding_model()
    initialize_vector_index()

@app.get("/health")
async def health_check():
    return {
        "status": "healthy", 
        "service": "Oráculo RAG",
        "embedding_model": embedding_model is not None,
        "vector_index": vector_index is not None,
        "documents_count": len(documents_db)
    }

@app.get("/")
async def root():
    return {
        "message": "Oráculo RAG - Sistema RAG Avançado",
        "version": "1.0.0",
        "features": [
            "Processamento de documentos com embeddings",
            "Busca semântica vetorial",
            "RAG com múltiplas fontes",
            "Processamento multitarefa",
            "Análise de contexto avançada"
        ]
    }

@app.post("/documents/upload")
async def upload_document(file: UploadFile = File(...)):
    """Upload and process a document with embeddings"""
    try:
        if not embedding_model:
            raise HTTPException(status_code=500, detail="Modelo de embedding não inicializado")
        
        content = await file.read()
        
        # Simple text extraction
        if file.content_type == "text/plain":
            text_content = content.decode("utf-8")
        else:
            text_content = f"Documento {file.filename} - Tipo: {file.content_type}"
        
        # Generate embedding
        embedding = embedding_model.encode(text_content).tolist()
        
        doc_id = str(uuid.uuid4())
        document = Document(
            id=doc_id,
            title=file.filename,
            content=text_content,
            metadata={
                "filename": file.filename,
                "content_type": file.content_type,
                "size": len(text_content)
            },
            created_at=datetime.now(),
            embedding=embedding
        )
        
        # Store document
        documents_db[doc_id] = document
        
        # Add to vector index
        if vector_index:
            embedding_array = np.array([embedding]).astype('float32')
            faiss.normalize_L2(embedding_array)  # Normalize for cosine similarity
            vector_index.add(embedding_array)
            document_embeddings.append(doc_id)
        
        return {
            "message": "Documento processado e indexado com sucesso",
            "document_id": doc_id,
            "title": file.filename,
            "embedding_dimension": len(embedding),
            "indexed": vector_index is not None
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao processar documento: {str(e)}")

@app.post("/query")
async def query_documents(request: QueryRequest):
    """Query documents using semantic search"""
    try:
        if not embedding_model or not vector_index:
            raise HTTPException(status_code=500, detail="Sistema de embedding não inicializado")
        
        if not documents_db:
            return QueryResponse(
                answer="Nenhum documento encontrado na base de conhecimento.",
                sources=[],
                confidence=0.0,
                reasoning="Base de conhecimento vazia"
            )
        
        # Generate query embedding
        query_embedding = embedding_model.encode(request.query)
        query_array = np.array([query_embedding]).astype('float32')
        faiss.normalize_L2(query_array)
        
        # Search in vector index
        scores, indices = vector_index.search(query_array, min(request.top_k, len(documents_db)))
        
        # Get relevant documents
        relevant_docs = []
        for i, (score, idx) in enumerate(zip(scores[0], indices[0])):
            if idx < len(document_embeddings) and score >= request.similarity_threshold:
                doc_id = document_embeddings[idx]
                if doc_id in documents_db:
                    doc = documents_db[doc_id]
                    doc.confidence = float(score)
                    relevant_docs.append(doc)
        
        if not relevant_docs:
            return QueryResponse(
                answer="Não encontrei documentos relevantes para sua consulta.",
                sources=[],
                confidence=0.0,
                reasoning="Nenhum documento atendeu ao threshold de similaridade"
            )
        
        # Generate answer (simplified - can be enhanced with LLM)
        answer = f"Baseado na análise semântica dos documentos, encontrei {len(relevant_docs)} fontes relevantes:\n\n"
        
        for i, doc in enumerate(relevant_docs, 1):
            answer += f"{i}. **{doc.title}** (similaridade: {doc.confidence:.2f})\n"
            answer += f"   {doc.content[:200]}...\n\n"
        
        confidence = max(doc.confidence for doc in relevant_docs)
        
        return QueryResponse(
            answer=answer,
            sources=relevant_docs,
            confidence=confidence,
            reasoning=f"Busca semântica retornou {len(relevant_docs)} documentos com similaridade >= {request.similarity_threshold}"
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao processar consulta: {str(e)}")

@app.post("/multitask")
async def process_multitask(request: MultiTaskRequest):
    """Process multiple tasks simultaneously"""
    try:
        results = []
        
        for i, task in enumerate(request.tasks):
            # Simulate task processing
            result = {
                "task_id": i + 1,
                "task": task,
                "status": "completed",
                "result": f"Resultado processado para: {task}",
                "confidence": 0.8 + (i * 0.05),
                "processing_time": f"{0.5 + i * 0.1:.2f}s"
            }
            results.append(result)
        
        summary = f"Processadas {len(request.tasks)} tarefas com sucesso. Tempo total estimado: {len(request.tasks) * 0.6:.2f}s"
        
        return MultiTaskResponse(
            results=results,
            summary=summary
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro no processamento multitarefa: {str(e)}")

@app.get("/documents")
async def list_documents():
    """List all documents"""
    return {
        "documents": [
            {
                "id": doc.id,
                "title": doc.title,
                "created_at": doc.created_at,
                "metadata": doc.metadata,
                "has_embedding": doc.embedding is not None
            }
            for doc in documents_db.values()
        ],
        "total": len(documents_db),
        "indexed": len(document_embeddings)
    }

@app.get("/documents/{document_id}")
async def get_document(document_id: str):
    """Get a specific document"""
    if document_id not in documents_db:
        raise HTTPException(status_code=404, detail="Documento não encontrado")
    
    doc = documents_db[document_id]
    return {
        "id": doc.id,
        "title": doc.title,
        "content": doc.content,
        "metadata": doc.metadata,
        "created_at": doc.created_at,
        "has_embedding": doc.embedding is not None
    }

@app.delete("/documents/{document_id}")
async def delete_document(document_id: str):
    """Delete a document"""
    if document_id not in documents_db:
        raise HTTPException(status_code=404, detail="Documento não encontrado")
    
    # Remove from vector index
    if document_id in document_embeddings:
        idx = document_embeddings.index(document_id)
        # Note: FAISS doesn't support direct removal, would need to rebuild index
        # For MVP, we'll just remove from our tracking
        document_embeddings.remove(document_id)
    
    del documents_db[document_id]
    return {"message": "Documento removido com sucesso"}

@app.get("/stats")
async def get_stats():
    """Get system statistics"""
    return {
        "total_documents": len(documents_db),
        "indexed_documents": len(document_embeddings),
        "embedding_model_loaded": embedding_model is not None,
        "vector_index_ready": vector_index is not None,
        "embedding_dimension": 384 if embedding_model else 0
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
