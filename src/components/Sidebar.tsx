import React, { useState } from 'react';
import { Category, Agent } from '../types';
import { ConfigurationBadge } from './ConfigurationBadge';

interface SidebarProps {
  categories: Category[];
  agents: Agent[];
  onCategoryClick: (categoryName: string) => void;
  onSubcategoryClick: (subcategoryName: string) => void;
  onAgentSelect?: (agentId: string) => void;
  activeCategory?: string;
  activeSubcategory?: string;
}

const iconMap: { [key: string]: string } = {
  brain: '🧠',
  code: '💻',
  'bar-chart': '📊',
  briefcase: '💼',
  palette: '🎨',
  mic: '🎤',
  network: '🌐',
  user: '👤',
  sparkles: '✨',
  'message-circle': '💬',
  star: '⭐',
  cpu: '🖥️',
  zap: '⚡',
  layers: '📚',
  search: '🔍',
  database: '🗄️',
  target: '🎯',
  'check-square': '✅',
  headphones: '🎧',
  video: '🎬',
  'graduation-cap': '🎓',
  layout: '📋',
  'user-check': '👥',
  book: '📖'
};

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  agents,
  onCategoryClick,
  onSubcategoryClick,
  onAgentSelect,
  activeCategory,
  activeSubcategory
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || '🧠';
  };

  const getAgentsForCategory = (categoryName: string) => {
    return agents.filter(agent => agent.category === categoryName);
  };

  const getAgentsForSubcategory = (subcategoryName: string) => {
    return agents.filter(agent => {
      // Buscar agentes que pertencem a esta subcategoria específica
      return agent.category === subcategoryName;
    });
  };

  return (
    <div className="w-64 md:w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <div className="p-4 md:p-6">
        <div className="mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Portal de Agentes</h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">71 agentes especializados</p>
        </div>

        <nav className="space-y-2">
          {categories.map((category) => {
            const isExpanded = expandedCategories.has(category.name);
            const isActive = activeCategory === category.name;
            const hasSubcategories = category.subcategories && category.subcategories.length > 0;

            return (
              <div key={category.name}>
                {/* Categoria Principal */}
                <div
                  className={`group flex items-center justify-between p-2 md:p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-transparent`
                      : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                  onClick={() => {
                    if (hasSubcategories) {
                      toggleCategory(category.name);
                    } else {
                      onCategoryClick(category.name);
                    }
                  }}
                >
                  <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                    <div className={`text-base md:text-lg ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'} flex-shrink-0`}>
                      {getIcon(category.icon)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-xs md:text-sm break-words">{category.name}</div>
                      <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'} break-words`}>
                        {category.agent_count} agentes
                      </div>
                    </div>
                  </div>
                  
                  {hasSubcategories && (
                    <div className={`text-sm ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {isExpanded ? '▼' : '▶'}
                    </div>
                  )}
                </div>

                {/* Subcategorias */}
                {hasSubcategories && isExpanded && (
                  <div className="ml-4 md:ml-6 mt-2 space-y-1">
                    {category.subcategories!.map((subcategory) => {
                      const isSubActive = activeSubcategory === subcategory.name;
                      
                      return (
                        <div key={subcategory.name}>
                          <div
                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 border ${
                              isSubActive
                                ? `bg-gradient-to-r ${subcategory.color} text-white shadow-md border-transparent`
                                : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                            }`}
                            onClick={() => onSubcategoryClick(subcategory.name)}
                          >
                            <div className={`text-sm ${isSubActive ? 'text-white' : 'text-gray-400'}`}>
                              {getIcon(subcategory.icon)}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">{subcategory.name}</div>
                              <div className={`text-xs ${isSubActive ? 'text-white/80' : 'text-gray-500'}`}>
                                {subcategory.description}
                              </div>
                            </div>
                          </div>
                          
                          {/* Agentes da subcategoria */}
                          {isSubActive && (
                            <div className="ml-6 mt-2 space-y-1">
                              {getAgentsForSubcategory(subcategory.name).length > 0 ? (
                                <>
                                  {getAgentsForSubcategory(subcategory.name).slice(0, 5).map((agent) => (
                                    <div
                                      key={agent.id}
                                      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                                      onClick={() => onAgentSelect?.(agent.id)}
                                    >
                                      <div className="text-sm">{agent.icon}</div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                                          {agent.name}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-300 truncate">
                                          {agent.description}
                                        </div>
                                      </div>
                                      <ConfigurationBadge configured={agent.configured} size="sm" showText={false} />
                                    </div>
                                  ))}
                                  {getAgentsForSubcategory(subcategory.name).length > 5 && (
                                    <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-1">
                                      +{getAgentsForSubcategory(subcategory.name).length - 5} mais...
                                    </div>
                                  )}
                                </>
                              ) : (
                                <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-2 italic">
                                  Nenhum agente disponível
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Agentes da categoria principal */}
                {!hasSubcategories && isExpanded && (
                  <div className="ml-4 md:ml-6 mt-2 space-y-1">
                    {getAgentsForCategory(category.name).length > 0 ? (
                      <>
                        {getAgentsForCategory(category.name).slice(0, 8).map((agent) => (
                          <div
                            key={agent.id}
                            className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                            onClick={() => onAgentSelect?.(agent.id)}
                          >
                            <div className="text-sm">{agent.icon}</div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                                {agent.name}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-300 truncate">
                                {agent.description}
                              </div>
                            </div>
                            <ConfigurationBadge configured={agent.configured} size="sm" showText={false} />
                          </div>
                        ))}
                        {getAgentsForCategory(category.name).length > 8 && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-1">
                            +{getAgentsForCategory(category.name).length - 8} mais...
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-xs text-gray-500 dark:text-gray-400 text-center py-2 italic">
                        Nenhum agente disponível
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Estatísticas */}
        <div className="mt-6 md:mt-8 p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="font-medium text-gray-900 dark:text-white mb-2 md:mb-3 text-sm md:text-base">📊 Estatísticas</h3>
          <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Total de Agentes</span>
              <span className="font-medium text-gray-900 dark:text-white">71</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Categorias</span>
              <span className="font-medium text-gray-900 dark:text-white">7</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Subcategorias</span>
              <span className="font-medium text-gray-900 dark:text-white">21</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Online</span>
              <span className="font-medium text-green-600 dark:text-green-400">4</span>
            </div>
          </div>
        </div>

        {/* Links Úteis */}
        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2 md:mb-3 text-sm md:text-base">🔗 Links Úteis</h3>
          <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
            <a href="#" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 break-words">
              📚 Documentação
            </a>
            <a href="#" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 break-words">
              🆘 Suporte
            </a>
            <a href="#" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 break-words">
              💡 Tutoriais
            </a>
            <a href="#" className="block text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 break-words">
              🔧 Configurações
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};