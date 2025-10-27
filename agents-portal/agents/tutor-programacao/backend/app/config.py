"""
Configuração do agente tutor-programacao
"""

import os
from typing import Optional
from pydantic import BaseSettings

class Settings(BaseSettings):
    """Configurações do agente"""
    
    # Informações básicas
    agent_name: str = "Tutor Programacao"
    agent_version: str = "1.0.0"
    agent_description: str = "Agente especializado em tutor programacao"
    
    # API Configuration
    api_host: str = "0.0.0.0"
    api_port: int = 8000
    debug: bool = False
    
    # Logging
    log_level: str = "INFO"
    
    # Database
    database_url: Optional[str] = None
    
    # External APIs
    openai_api_key: Optional[str] = None
    anthropic_api_key: Optional[str] = None
    
    # Redis
    redis_url: Optional[str] = None
    
    class Config:
        env_file = ".env"
        case_sensitive = False

# Instância global das configurações
settings = Settings()
