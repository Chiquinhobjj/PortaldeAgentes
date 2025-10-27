import React, { useState } from 'react';
import { Category, Agent } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  agents: Agent[];
  onFilterChange: (filteredAgents: Agent[]) => void;
  onCategorySelect: (categoryName: string) => void;
  onSubcategorySelect: (subcategoryName: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  agents,
  onFilterChange,
  onCategorySelect,
  onSubcategorySelect
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterAgents(term, selectedCategory, selectedSubcategory);
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory('');
    onCategorySelect(categoryName);
    filterAgents(searchTerm, categoryName, '');
  };

  const handleSubcategorySelect = (subcategoryName: string) => {
    setSelectedSubcategory(subcategoryName);
    onSubcategorySelect(subcategoryName);
    filterAgents(searchTerm, selectedCategory, subcategoryName);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedSubcategory('');
    onFilterChange(agents);
  };

  const filterAgents = (search: string, category: string, subcategory: string) => {
    let filtered = agents;

    // Filtro por texto
    if (search) {
      filtered = filtered.filter(agent =>
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.description.toLowerCase().includes(search.toLowerCase()) ||
        agent.features.some(feature => feature.toLowerCase().includes(search.toLowerCase()))
      );
    }

    // Filtro por categoria
    if (category) {
      filtered = filtered.filter(agent => agent.category === category);
    }

    // Filtro por subcategoria
    if (subcategory) {
      filtered = filtered.filter(agent => agent.category === subcategory);
    }

    onFilterChange(filtered);
  };

  const getTotalAgentsInSubcategory = (subcategoryName: string) => {
    return agents.filter(agent => agent.category === subcategoryName).length;
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Barra de Busca */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Buscar agentes..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              showFilters || selectedCategory || selectedSubcategory
                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300'
                : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <span>🔧</span>
            Filtros
            <span className={`text-xs transition-transform ${showFilters ? 'rotate-180' : ''}`}>
              {showFilters ? '▼' : '▶'}
            </span>
          </button>

          {(searchTerm || selectedCategory || selectedSubcategory) && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span>❌</span>
              Limpar
            </button>
          )}
        </div>

        {/* Filtros Expandidos */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Categorias Principais */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Categorias Principais</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {categories.map((category) => (
                  <div key={category.name}>
                    <button
                      onClick={() => handleCategorySelect(category.name)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedCategory === category.name
                          ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                          : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{category.name}</div>
                          <div className={`text-xs ${selectedCategory === category.name ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                            {category.agent_count} agentes
                          </div>
                        </div>
                        {category.subcategories && category.subcategories.length > 0 && (
                          <div className={`text-xs ${selectedCategory === category.name ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'}`}>
                            {category.subcategories.length} subcategorias
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Subcategorias */}
                    {selectedCategory === category.name && category.subcategories && (
                      <div className="ml-4 mt-2 space-y-1">
                        {category.subcategories.map((subcategory) => (
                          <button
                            key={subcategory.name}
                            onClick={() => handleSubcategorySelect(subcategory.name)}
                            className={`w-full text-left p-2 rounded border transition-colors ${
                              selectedSubcategory === subcategory.name
                                ? `bg-gradient-to-r ${subcategory.color} text-white border-transparent`
                                : 'bg-gray-50 dark:bg-gray-600 border-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-500'
                            }`}
                          >
                            <div className="text-sm font-medium">{subcategory.name}</div>
                            <div className={`text-xs ${selectedSubcategory === subcategory.name ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                              {getTotalAgentsInSubcategory(subcategory.name)} agentes
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Estatísticas */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Estatísticas</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total de Agentes</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{agents.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Categorias</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{categories.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Online</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {agents.filter(a => a.status === 'online').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Offline</span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {agents.filter(a => a.status === 'offline').length}
                  </span>
                </div>
              </div>
            </div>

            {/* Filtros Rápidos */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Filtros Rápidos</h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    const onlineAgents = agents.filter(a => a.status === 'online');
                    onFilterChange(onlineAgents);
                  }}
                  className="w-full text-left p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <div className="text-sm font-medium text-green-900 dark:text-green-300">🟢 Apenas Online</div>
                  <div className="text-xs text-green-700 dark:text-green-400">
                    {agents.filter(a => a.status === 'online').length} agentes
                  </div>
                </button>
                
                <button
                  onClick={() => {
                    const recentAgents = agents
                      .filter(a => a.usage_count > 0)
                      .sort((a, b) => b.usage_count - a.usage_count);
                    onFilterChange(recentAgents);
                  }}
                  className="w-full text-left p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <div className="text-sm font-medium text-blue-900 dark:text-blue-300">⭐ Mais Usados</div>
                  <div className="text-xs text-blue-700 dark:text-blue-400">
                    {agents.filter(a => a.usage_count > 0).length} agentes
                  </div>
                </button>
                
                <button
                  onClick={() => {
                    const newAgents = agents.filter(a => a.usage_count === 0);
                    onFilterChange(newAgents);
                  }}
                  className="w-full text-left p-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <div className="text-sm font-medium text-purple-900 dark:text-purple-300">🆕 Novos</div>
                  <div className="text-xs text-purple-700 dark:text-purple-400">
                    {agents.filter(a => a.usage_count === 0).length} agentes
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};