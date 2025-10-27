export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  icon: string;
  url: string;
  port: number;
  status: 'online' | 'offline' | 'starting' | 'error';
  features: string[];
  path: string;
  start_command: string;
  last_used?: string;
  usage_count: number;
  configured: boolean;
}

export interface Category {
  name: string;
  description: string;
  icon: string;
  color: string;
  agent_count: number;
  parent?: string;
  order?: number;
  subcategories?: SubCategory[];
}

export interface SubCategory {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface AgentStatus {
  id: string;
  status: 'online' | 'offline' | 'starting' | 'error';
  uptime?: string;
  memory_usage?: number;
  cpu_usage?: number;
}
