import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Agent } from '../types';
import { ConfigurationBadge } from './ConfigurationBadge';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  agent?: string;
  category: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  deadline: string;
  status: 'planning' | 'active' | 'completed' | 'paused';
  tasks: Task[];
}

interface PDI {
  id: string;
  skill: string;
  currentLevel: number;
  targetLevel: number;
  progress: number;
  resources: string[];
  deadline: string;
}

export const ProductivityDashboardMobile: React.FC<{ agents?: Agent[] }> = ({ agents = [] }) => {
  const { theme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'projects' | 'pdi' | 'calendar'>('overview');

  // Calcular estatísticas de agentes
  const configuredAgents = agents.filter(agent => agent.configured).length;
  const totalAgents = agents.length;
  const unconfiguredAgents = agents.filter(agent => !agent.configured);

  // Dados mockados para demonstração
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Revisar proposta comercial',
      description: 'Analisar e ajustar proposta para cliente ABC',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2024-01-15',
      agent: 'Assistente Geral',
      category: 'Negócios'
    },
    {
      id: '2',
      title: 'Criar apresentação executiva',
      description: 'Desenvolver slides para reunião de diretoria',
      priority: 'medium',
      status: 'pending',
      dueDate: '2024-01-18',
      agent: 'Contexto → Mídias',
      category: 'Criatividade'
    },
    {
      id: '3',
      title: 'Análise de dados de vendas',
      description: 'Processar dados do último trimestre',
      priority: 'high',
      status: 'pending',
      dueDate: '2024-01-20',
      agent: 'Analista de Dados',
      category: 'Análise'
    }
  ]);

  const [projects] = useState<Project[]>([
    {
      id: '1',
      name: 'Implementação de IA',
      description: 'Integração de agentes IA na operação',
      progress: 65,
      deadline: '2024-02-15',
      status: 'active',
      tasks: tasks.slice(0, 2)
    },
    {
      id: '2',
      name: 'Otimização de Processos',
      description: 'Automação de workflows internos',
      progress: 30,
      deadline: '2024-03-01',
      status: 'planning',
      tasks: tasks.slice(1, 3)
    }
  ]);

  const [pdiGoals] = useState<PDI[]>([
    {
      id: '1',
      skill: 'Liderança',
      currentLevel: 3,
      targetLevel: 5,
      progress: 60,
      resources: ['Curso de Liderança', 'Mentoria', 'Livros'],
      deadline: '2024-06-30'
    },
    {
      id: '2',
      skill: 'Análise de Dados',
      currentLevel: 2,
      targetLevel: 4,
      progress: 40,
      resources: ['Python para Data Science', 'Certificação Google Analytics'],
      deadline: '2024-04-30'
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 dark:text-red-400';
      case 'medium': return 'text-yellow-500 dark:text-yellow-400';
      case 'low': return 'text-green-500 dark:text-green-400';
      default: return 'text-gray-500 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'in-progress': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'pending': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  const renderOverview = () => (
    <div className="space-y-4 md:space-y-6 p-4 md:p-8">
      {/* Welcome Section - Mobile Optimized */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 break-words">{getGreeting()}, Chiquinho! 👋</h1>
            <p className="text-blue-100 dark:text-blue-200 text-sm md:text-base break-words">
              {currentTime.toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-blue-100 dark:text-blue-200 text-base md:text-lg font-medium">
              {currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <div className="text-3xl md:text-4xl mb-2">🚀</div>
            <p className="text-blue-100 dark:text-blue-200 text-sm md:text-base">Foco na produtividade!</p>
          </div>
        </div>
      </div>

      {/* Quick Stats - Mobile Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">Tarefas Hoje</p>
              <p className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <div className="text-lg md:text-2xl flex-shrink-0 ml-2">📋</div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">Projetos Ativos</p>
              <p className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">2</p>
            </div>
            <div className="text-lg md:text-2xl flex-shrink-0 ml-2">📊</div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">PDI em Andamento</p>
              <p className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">2</p>
            </div>
            <div className="text-lg md:text-2xl flex-shrink-0 ml-2">🎯</div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">Produtividade</p>
              <p className="text-lg md:text-2xl font-bold text-green-600 dark:text-green-400">87%</p>
            </div>
            <div className="text-lg md:text-2xl flex-shrink-0 ml-2">⚡</div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">Agentes Configurados</p>
              <p className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                {configuredAgents}/{totalAgents}
              </p>
            </div>
            <div className="text-lg md:text-2xl flex-shrink-0 ml-2">🤖</div>
          </div>
        </div>
      </div>

      {/* Recent Tasks - Mobile Optimized */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4">📋 Tarefas Recentes</h2>
        <div className="space-y-3">
          {tasks.slice(0, 3).map((task) => (
            <div key={task.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg gap-2">
              <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)} flex-shrink-0 mt-1 sm:mt-0`}></div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm md:text-base break-words">{task.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 break-words">{task.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`px-2 py-1 rounded text-xs whitespace-nowrap ${getStatusColor(task.status)}`}>
                  {task.status === 'in-progress' ? 'Em Andamento' : 
                   task.status === 'completed' ? 'Concluída' : 'Pendente'}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{task.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions - Mobile Grid */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4">⚡ Ações Rápidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <button className="p-3 md:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors active:scale-95">
            <div className="text-xl md:text-2xl mb-2">➕</div>
            <p className="text-xs md:text-sm font-medium text-blue-900 dark:text-blue-300 break-words">Nova Tarefa</p>
          </button>
          <button className="p-3 md:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors active:scale-95">
            <div className="text-xl md:text-2xl mb-2">📅</div>
            <p className="text-xs md:text-sm font-medium text-green-900 dark:text-green-300 break-words">Agendar</p>
          </button>
          <button className="p-3 md:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors active:scale-95">
            <div className="text-xl md:text-2xl mb-2">📊</div>
            <p className="text-xs md:text-sm font-medium text-purple-900 dark:text-purple-300 break-words">Relatório</p>
          </button>
          <button className="p-3 md:p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors active:scale-95">
            <div className="text-xl md:text-2xl mb-2">🎯</div>
            <p className="text-xs md:text-sm font-medium text-orange-900 dark:text-orange-300 break-words">PDI</p>
          </button>
        </div>
      </div>

      {/* Agentes Não Configurados */}
      {unconfiguredAgents.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            ⚠️ Agentes Não Configurados
          </h2>
          <div className="space-y-3">
            {unconfiguredAgents.slice(0, 5).map((agent) => (
              <div key={agent.id} className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-3">
                  <div className="text-lg">{agent.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm">{agent.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{agent.category}</p>
                  </div>
                </div>
                <ConfigurationBadge configured={agent.configured} size="sm" />
              </div>
            ))}
            {unconfiguredAgents.length > 5 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                E mais {unconfiguredAgents.length - 5} agentes...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );

  const renderTasks = () => (
    <div className="space-y-4 md:space-y-6 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">📋 Gestão de Tarefas</h2>
        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors active:scale-95 w-full sm:w-auto">
          ➕ Nova Tarefa
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Tarefas Pendentes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            Pendentes ({tasks.filter(t => t.status === 'pending').length})
          </h3>
          <div className="space-y-3">
            {tasks.filter(t => t.status === 'pending').map((task) => (
              <div key={task.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white text-sm md:text-base break-words">{task.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 break-words">{task.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className={`text-xs ${getPriorityColor(task.priority)}`}>
                    {task.priority === 'high' ? '🔴 Alta' : task.priority === 'medium' ? '🟡 Média' : '🟢 Baixa'}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tarefas em Andamento */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            Em Andamento ({tasks.filter(t => t.status === 'in-progress').length})
          </h3>
          <div className="space-y-3">
            {tasks.filter(t => t.status === 'in-progress').map((task) => (
              <div key={task.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white text-sm md:text-base break-words">{task.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 break-words">{task.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs text-blue-600 dark:text-blue-400 break-words">🤖 {task.agent}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tarefas Concluídas */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Concluídas ({tasks.filter(t => t.status === 'completed').length})
          </h3>
          <div className="space-y-3">
            {tasks.filter(t => t.status === 'completed').map((task) => (
              <div key={task.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg opacity-75">
                <h4 className="font-medium text-gray-900 dark:text-white line-through text-sm md:text-base break-words">{task.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 break-words">{task.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs text-green-600 dark:text-green-400">✅ Concluída</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-4 md:space-y-6 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">📊 Gestão de Projetos</h2>
        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors active:scale-95 w-full sm:w-auto">
          ➕ Novo Projeto
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white break-words">{project.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                project.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                project.status === 'planning' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                project.status === 'completed' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
              }`}>
                {project.status === 'active' ? 'Ativo' : 
                 project.status === 'planning' ? 'Planejamento' :
                 project.status === 'completed' ? 'Concluído' : 'Pausado'}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base break-words">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Progresso</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-600 dark:text-gray-400 gap-2">
              <span className="break-words">📅 Prazo: {project.deadline}</span>
              <span className="whitespace-nowrap">📋 {project.tasks.length} tarefas</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPDI = () => (
    <div className="space-y-4 md:space-y-6 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">🎯 Plano de Desenvolvimento Individual</h2>
        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors active:scale-95 w-full sm:w-auto">
          ➕ Nova Meta PDI
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {pdiGoals.map((goal) => (
          <div key={goal.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white break-words">{goal.skill}</h3>
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400">Nível Atual</div>
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{goal.currentLevel}/5</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Progresso para Meta</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">📚 Recursos de Aprendizado</h4>
              <div className="space-y-1">
                {goal.resources.map((resource, index) => (
                  <div key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <span>📖</span>
                    <span className="break-words">{resource}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400 break-words">
              🎯 Meta: Nível {goal.targetLevel} até {goal.deadline}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCalendar = () => (
    <div className="space-y-4 md:space-y-6 p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">📅 Calendário</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-200 dark:border-gray-700">
        <div className="text-center py-8 md:py-12">
          <div className="text-4xl md:text-6xl mb-4">📅</div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">Calendário Integrado</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base px-4">
            Visualize suas tarefas, prazos e compromissos em uma interface de calendário intuitiva
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors active:scale-95">
            🔗 Conectar Calendário
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs - Mobile Optimized */}
        <div className="mb-6 md:mb-8">
          <nav className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 overflow-x-auto">
            {[
              { id: 'overview', label: '📊 Visão Geral', icon: '📊' },
              { id: 'tasks', label: '📋 Tarefas', icon: '📋' },
              { id: 'projects', label: '📊 Projetos', icon: '📊' },
              { id: 'pdi', label: '🎯 PDI', icon: '🎯' },
              { id: 'calendar', label: '📅 Calendário', icon: '📅' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-shrink-0 py-2 px-3 md:px-4 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.icon}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'tasks' && renderTasks()}
        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'pdi' && renderPDI()}
        {activeTab === 'calendar' && renderCalendar()}
      </div>
    </div>
  );
};

