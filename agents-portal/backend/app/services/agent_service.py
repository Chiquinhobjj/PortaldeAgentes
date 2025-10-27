import psutil
import requests
import subprocess
import time
from typing import List, Optional
from ..models.agent import Agent, AgentStatus, AgentStatusResponse
from ..config import get_agents

class AgentService:
    """Serviço para gerenciar agentes"""
    
    def __init__(self):
        self.agents = get_agents()
    
    def get_all_agents(self) -> List[Agent]:
        """Retorna todos os agentes com status atualizado"""
        for agent in self.agents:
            agent.status = self._check_agent_status(agent)
        return self.agents
    
    def get_agent_by_id(self, agent_id: str) -> Optional[Agent]:
        """Retorna um agente específico por ID"""
        for agent in self.agents:
            if agent.id == agent_id:
                agent.status = self._check_agent_status(agent)
                return agent
        return None
    
    def _check_agent_status(self, agent: Agent) -> AgentStatus:
        """Verifica se um agente está online"""
        try:
            # Verificar se há processo rodando na porta
            for conn in psutil.net_connections():
                if conn.laddr.port == agent.port and conn.status == 'LISTEN':
                    # Tentar fazer uma requisição HTTP para confirmar
                    try:
                        response = requests.get(agent.url, timeout=2)
                        if response.status_code in [200, 404]:  # 404 é OK, significa que o servidor está rodando
                            return AgentStatus.ONLINE
                    except requests.RequestException:
                        pass
            return AgentStatus.OFFLINE
        except Exception:
            return AgentStatus.ERROR
    
    def get_agent_status(self, agent_id: str) -> Optional[AgentStatusResponse]:
        """Retorna status detalhado de um agente"""
        agent = self.get_agent_by_id(agent_id)
        if not agent:
            return None
        
        status_response = AgentStatusResponse(
            id=agent.id,
            status=agent.status
        )
        
        if agent.status == AgentStatus.ONLINE:
            try:
                # Tentar obter informações de processo
                for proc in psutil.process_iter(['pid', 'name', 'create_time', 'memory_percent', 'cpu_percent']):
                    try:
                        # Verificar se o processo está usando a porta do agente
                        for conn in proc.connections():
                            if conn.laddr.port == agent.port:
                                status_response.uptime = self._format_uptime(time.time() - proc.info['create_time'])
                                status_response.memory_usage = proc.info['memory_percent']
                                status_response.cpu_usage = proc.info['cpu_percent']
                                break
                    except (psutil.NoSuchProcess, psutil.AccessDenied):
                        continue
            except Exception:
                pass
        
        return status_response
    
    def _format_uptime(self, seconds: float) -> str:
        """Formata tempo de uptime"""
        hours = int(seconds // 3600)
        minutes = int((seconds % 3600) // 60)
        if hours > 0:
            return f"{hours}h {minutes}m"
        return f"{minutes}m"
    
    def start_agent(self, agent_id: str) -> bool:
        """Inicia um agente executando o script correspondente"""
        agent = self.get_agent_by_id(agent_id)
        if not agent:
            return False
        
        try:
            # Determinar o script baseado no agent_id
            script_path = self._get_script_path(agent_id)
            if not script_path:
                return False
            
            # Executar script em background
            subprocess.Popen(
                ["bash", script_path],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                cwd="/Users/chiquinho/Downloads/startups/agentes_vibecoding/EBAAS/agents/fazedoria/ideias/contexto-midias/agents-portal"
            )
            
            # Aguardar um pouco para o processo iniciar
            time.sleep(2)
            
            # Verificar se o agente está rodando
            return self._check_agent_status(agent) == AgentStatus.ONLINE
            
        except Exception as e:
            print(f"Erro ao iniciar agente {agent_id}: {e}")
            return False
    
    def stop_agent(self, agent_id: str) -> bool:
        """Para um agente matando os processos nas portas"""
        agent = self.get_agent_by_id(agent_id)
        if not agent:
            return False
        
        try:
            # Encontrar e matar processos usando as portas do agente
            killed = False
            
            # Para agentes com múltiplas portas (backend + frontend)
            ports_to_check = [agent.port]
            if hasattr(agent, 'backend_port') and agent.backend_port:
                ports_to_check.append(agent.backend_port)
            
            for port in ports_to_check:
                for proc in psutil.process_iter(['pid', 'connections']):
                    try:
                        for conn in proc.info['connections']:
                            if conn.laddr.port == port:
                                proc.kill()
                                killed = True
                                print(f"Processo {proc.info['pid']} na porta {port} foi terminado")
                    except (psutil.NoSuchProcess, psutil.AccessDenied, AttributeError):
                        continue
            
            # Aguardar um pouco para os processos terminarem
            time.sleep(1)
            
            # Verificar se o agente parou
            return self._check_agent_status(agent) == AgentStatus.OFFLINE
            
        except Exception as e:
            print(f"Erro ao parar agente {agent_id}: {e}")
            return False
    
    def _get_script_path(self, agent_id: str) -> Optional[str]:
        """Retorna o caminho do script de inicialização para o agente"""
        scripts = {
            "contexto-midias": "start-contexto-midias.sh",
            "docstoteles": "start-docstoteles.sh", 
            "oraculo-rag": "start-oraculo-rag.sh",
            "origin-story-book": "start-origin-story-book.sh"
        }
        
        script_name = scripts.get(agent_id)
        if script_name:
            return script_name
        return None
    
    def configure_agent(self, agent_id: str) -> bool:
        """Marca um agente como configurado"""
        agent = self.get_agent_by_id(agent_id)
        if not agent:
            return False
        
        agent.configured = True
        return True
    
    def get_agent_configuration_status(self, agent_id: str) -> Optional[bool]:
        """Retorna status de configuração de um agente"""
        agent = self.get_agent_by_id(agent_id)
        if not agent:
            return None
        
        return agent.configured

# Instância global do serviço
agent_service = AgentService()
