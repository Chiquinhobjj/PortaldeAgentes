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
    setOnboardingAgent(agentId);
  };

  const handleOnboardingComplete = () => {
    setOnboardingAgent(null);
  };

  const handleOnboardingSkip = () => {
    setOnboardingAgent(null);
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
      return <ProductivityDashboardMobile />;
    }

    const agent = agents.find(a => a.id === activeAgent);
    if (!agent) return null;

    // Interface genérica do agente
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
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interface do Agente</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">🚀 Status</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Agente {agent.status === 'online' ? 'Online' : 'Offline'} - Pronto para uso
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">✨ Recursos</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <h3 className="font-medium text-purple-900 dark:text-purple-100 mb-2">📊 Estatísticas</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-purple-800 dark:text-purple-200">Usos:</span>
                    <span className="ml-2 font-medium">{agent.usage_count}</span>
                  </div>
                  <div>
                    <span className="text-purple-800 dark:text-purple-200">Avaliação:</span>
                    <span className="ml-2 font-medium">{agent.rating || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        {!sidebarCollapsed && (
          <Sidebar
            categories={categories}
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
