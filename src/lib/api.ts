import axios from 'axios';
import { Agent, Category, AgentStatus } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export const agentsApi = {
  // Buscar todos os agentes
  getAgents: async (): Promise<Agent[]> => {
    console.log('Making request to:', API_BASE_URL + '/api/agents');
    const response = await api.get('/api/agents');
    console.log('Response received:', response.data);
    return response.data;
  },

  // Buscar agente por ID
  getAgent: async (id: string): Promise<Agent> => {
    const response = await api.get(`/api/agents/${id}`);
    return response.data;
  },

  // Buscar status de um agente
  getAgentStatus: async (id: string): Promise<AgentStatus> => {
    const response = await api.get(`/api/agents/${id}/status`);
    return response.data;
  },

  // Buscar categorias
  getCategories: async (): Promise<Category[]> => {
    const response = await api.get('/api/categories');
    return response.data;
  },

  // Iniciar agente (simulado para experiência integrada)
  startAgent: async (id: string): Promise<void> => {
    console.log(`Simulando start do agente ${id}`);
    // Para a experiência integrada, não precisamos realmente executar processos externos
    // Os agentes funcionam dentro do portal
  },

  // Parar agente (simulado para experiência integrada)
  stopAgent: async (id: string): Promise<void> => {
    console.log(`Simulando stop do agente ${id}`);
    // Para a experiência integrada, não precisamos realmente executar processos externos
    // Os agentes funcionam dentro do portal
  },

  // Configurar agente
  configureAgent: async (id: string): Promise<void> => {
    const response = await api.post(`/api/agents/${id}/configure`);
    return response.data;
  },

  // Verificar status de configuração
  getAgentConfigurationStatus: async (id: string): Promise<{ configured: boolean }> => {
    const response = await api.get(`/api/agents/${id}/configured`);
    return response.data;
  },
};
