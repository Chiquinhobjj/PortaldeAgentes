'use client';

import React, { useState, useEffect } from 'react';
import { agentsApi } from '../lib/api';
import { Agent, Category } from '../types';
import { Sidebar } from '../components/Sidebar';
import { CategoryFilterMobile } from '../components/CategoryFilterMobile';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';
import { ProductivityDashboardMobile } from '../components/ProductivityDashboardMobile';
import { AgentOnboardingMobile } from '../components/AgentOnboardingMobile';
import { AgentMockInterface } from '../components/AgentMockInterface';

export default function HomePage() {
  return (
    <ThemeProvider>
      <HomePageContent />
    </ThemeProvider>
  );
}

function HomePageContent() {
  const [loading, setLoading] = useState(true);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [onboardingAgent, setOnboardingAgent] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Loading data...');
        const [agentsData, categoriesData] = await Promise.all([
          agentsApi.getAgents(),
          agentsApi.getCategories()
        ]);
        
        console.log('Agents loaded:', agentsData.length);
        console.log('Categories loaded:', categoriesData.length);
        
        setAgents(agentsData);
        setFilteredAgents(agentsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Erro ao carregar dados dos agentes');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleFilterChange = (filteredAgents: Agent[]) => {
    setFilteredAgents(filteredAgents);
  };

  const handleCategorySelect = (categoryName: string) => {
    setActiveCategory(categoryName);
    setActiveSubcategory('');
    setActiveAgent(null);
  };

  const handleSubcategorySelect = (subcategoryName: string) => {
    setActiveSubcategory(subcategoryName);
    setActiveAgent(null);
  };

  const handleAgentSelect = (agentId: string) => {
    setActiveAgent(agentId);
    // Verificar se é primeira vez usando o agente
    const isFirstTime = !localStorage.getItem(`agent_${agentId}_configured`);
    if (isFirstTime) {
      setOnboardingAgent(agentId);
    } else {
      setOnboardingAgent(null);
    }
  };

  const handleAgentConfigure = async (agentId: string) => {
    try {
      await agentsApi.configureAgent(agentId);
      // Atualizar o estado local
      setAgents(prevAgents => 
        prevAgents.map(agent => 
          agent.id === agentId ? { ...agent, configured: true } : agent
        )
      );
    } catch (error) {
      console.error('Erro ao configurar agente:', error);
    }
  };

  const handleOnboardingSkip = () => {
    setOnboardingAgent(null);
  };

  const handleOnboardingComplete = () => {
    if (onboardingAgent) {
      localStorage.setItem(`agent_${onboardingAgent}_configured`, 'true');
      setOnboardingAgent(null);
      // Marcar agente como configurado no estado local
      setAgents(prevAgents => 
        prevAgents.map(agent => 
          agent.id === onboardingAgent ? { ...agent, configured: true } : agent
        )
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando agentes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Erro ao Carregar</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  const renderAgentContent = () => {
    if (onboardingAgent) {
      const agent = agents.find(a => a.id === onboardingAgent);
      if (!agent) return null;
      return (
        <AgentOnboardingMobile 
          agent={agent} 
          onComplete={handleOnboardingComplete} 
          onSkip={handleOnboardingSkip} 
        />
      );
    }
    
          if (!activeAgent) {
            return <ProductivityDashboardMobile agents={agents} />;
          }

    const agent = agents.find(a => a.id === activeAgent);
    if (!agent) return null;

    // Renderizar interface específica do agente
    switch (agent.id) {
      case 'contexto-midias':
        return (
          <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <button 
                  onClick={() => setActiveAgent(null)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 flex items-center gap-2"
                >
                  ← Voltar ao Portal
                </button>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{agent.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{agent.description}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-white">Wizard de Criação</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">1. Entrada do Contexto</h3>
                    <textarea 
                      placeholder="Cole seu texto ou contexto aqui..."
                      className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <div className="mt-2">
                      <input type="file" className="text-sm text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">2. Configurar Saída</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo</label>
                        <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                          <option>Roteiro</option>
                          <option>Apresentação</option>
                          <option>Artigo</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Formato</label>
                        <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                          <option>PDF</option>
                          <option>DOCX</option>
                          <option>TXT</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">3. Gerar Conteúdo</h3>
                    <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      🚀 Gerar Conteúdo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'assistente-geral':
        return (
          <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <button 
                  onClick={() => setActiveAgent(null)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 flex items-center gap-2"
                >
                  ← Voltar ao Portal
                </button>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{agent.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{agent.description}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-white">Assistente Geral</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">💬 Chat</h3>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-3">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Olá! Como posso ajudar você hoje?</p>
                      </div>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Digite sua pergunta..."
                          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">⚡ Ações Rápidas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <button className="p-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded text-xs">
                        📝 Resumir
                      </button>
                      <button className="p-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded text-xs">
                        🔍 Pesquisar
                      </button>
                      <button className="p-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded text-xs">
                        ✍️ Escrever
                      </button>
                      <button className="p-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded text-xs">
                        🧮 Calcular
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <AgentMockInterface
            agent={agent}
            onBack={() => setActiveAgent(null)}
            onConfigure={handleAgentConfigure}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        {!sidebarCollapsed && (
          <Sidebar
            categories={categories}
            agents={agents}
            onCategoryClick={handleCategorySelect}
            onSubcategoryClick={handleSubcategorySelect}
            activeCategory={activeCategory}
            activeSubcategory={activeSubcategory}
            onAgentSelect={handleAgentSelect}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header com filtros */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between p-3 md:p-4">
              <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white truncate">Portal de Agentes IA</h1>
              </div>
              <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                  {filteredAgents.length} de {agents.length} agentes
                </div>
                <ThemeToggle />
              </div>
            </div>
            
            <CategoryFilterMobile
              categories={categories}
              agents={agents}
              onFilterChange={handleFilterChange}
              onCategorySelect={handleCategorySelect}
              onSubcategorySelect={handleSubcategorySelect}
              onAgentSelect={handleAgentSelect}
            />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {renderAgentContent()}
          </div>
        </div>
      </div>

      {/* Onboarding Modal */}
      {onboardingAgent && (
        <AgentOnboardingMobile
          agent={agents.find(a => a.id === onboardingAgent)!}
          onComplete={handleOnboardingComplete}
          onSkip={handleOnboardingSkip}
        />
      )}
    </div>
  );
}
