from fastapi import APIRouter, HTTPException
from typing import List
from ..models.agent import Agent, Category, AgentStatusResponse
from ..services.agent_service import agent_service
from ..config import get_categories as get_categories_from_config

router = APIRouter(prefix="/api", tags=["agents"])

@router.get("/agents", response_model=List[Agent])
async def get_agents():
    """Retorna lista de todos os agentes"""
    return agent_service.get_all_agents()

@router.get("/agents/{agent_id}", response_model=Agent)
async def get_agent(agent_id: str):
    """Retorna detalhes de um agente específico"""
    agent = agent_service.get_agent_by_id(agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agente não encontrado")
    return agent

@router.get("/agents/{agent_id}/status", response_model=AgentStatusResponse)
async def get_agent_status(agent_id: str):
    """Retorna status detalhado de um agente"""
    status = agent_service.get_agent_status(agent_id)
    if not status:
        raise HTTPException(status_code=404, detail="Agente não encontrado")
    return status

@router.get("/categories", response_model=List[Category])
async def get_categories():
    """Retorna lista de categorias"""
    return get_categories_from_config()

@router.post("/agents/{agent_id}/start")
async def start_agent(agent_id: str):
    """Inicia um agente"""
    success = agent_service.start_agent(agent_id)
    if not success:
        raise HTTPException(status_code=400, detail="Falha ao iniciar agente")
    return {"message": "Agente iniciado com sucesso"}

@router.post("/agents/{agent_id}/stop")
async def stop_agent(agent_id: str):
    """Para um agente"""
    success = agent_service.stop_agent(agent_id)
    if not success:
        raise HTTPException(status_code=400, detail="Falha ao parar agente")
    return {"message": "Agente parado com sucesso"}

@router.post("/agents/{agent_id}/configure")
async def configure_agent(agent_id: str):
    """Marca um agente como configurado"""
    success = agent_service.configure_agent(agent_id)
    if not success:
        raise HTTPException(status_code=404, detail="Agente não encontrado")
    return {"message": "Agente configurado com sucesso"}

@router.get("/agents/{agent_id}/configured")
async def get_agent_configuration_status(agent_id: str):
    """Retorna status de configuração de um agente"""
    configured = agent_service.get_agent_configuration_status(agent_id)
    if configured is None:
        raise HTTPException(status_code=404, detail="Agente não encontrado")
    return {"configured": configured}
