"""
Testes para o agente agente-ciencia-dados
"""

import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root_endpoint():
    """Testa endpoint raiz"""
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["message"] == "Agente Ciencia Dados Agent"
    assert data["status"] == "online"

def test_health_check():
    """Testa health check"""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["agent"] == "agente-ciencia-dados"

def test_agent_info():
    """Testa informações do agente"""
    response = client.get("/info")
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == "agente-ciencia-dados"
    assert "features" in data
    assert "capabilities" in data

def test_process_request():
    """Testa processamento de requisição"""
    test_data = {
        "input": "teste",
        "context": "contexto de teste"
    }
    
    response = client.post("/process", json=test_data)
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "success"
    assert data["agent"] == "agente-ciencia-dados"

def test_status():
    """Testa status do agente"""
    response = client.get("/status")
    assert response.status_code == 200
    data = response.json()
    assert data["agent"] == "agente-ciencia-dados"
    assert data["status"] == "online"
