from pydantic import BaseModel
from typing import List, Optional, Dict
from enum import Enum

class AgentStatus(str, Enum):
    ONLINE = "online"
    OFFLINE = "offline"
    STARTING = "starting"
    ERROR = "error"

class Agent(BaseModel):
    id: str
    name: str
    description: str
    category: str
    color: str  # gradiente Tailwind CSS
    icon: str
    url: str
    port: int
    status: AgentStatus
    features: List[str]
    path: str
    start_command: str
    last_used: Optional[str] = None
    usage_count: int = 0
    configured: bool = False

class Category(BaseModel):
    name: str
    description: str
    icon: str
    color: str
    agent_count: int
    parent: Optional[str] = None
    order: Optional[int] = None
    subcategories: Optional[List[Dict]] = None

class AgentStatusResponse(BaseModel):
    id: str
    status: AgentStatus
    uptime: Optional[str] = None
    memory_usage: Optional[float] = None
    cpu_usage: Optional[float] = None
