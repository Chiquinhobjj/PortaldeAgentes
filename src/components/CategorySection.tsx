'use client';

import React from 'react';
import { 
  Video, 
  Database, 
  BarChart3, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Category } from '../types';

interface CategorySectionProps {
  categories: Category[];
  onCategoryClick?: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  categories, 
  onCategoryClick 
}) => {
  const getIcon = (iconName: string) => {
    const icons = {
      video: Video,
      database: Database,
      'bar-chart': BarChart3,
      zap: Zap,
    };
    return icons[iconName as keyof typeof icons] || Video;
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          EXPLORE POR CATEGORIA
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Agentes especializados para cada área da sua empresa. 
          Encontre soluções prontas para automatizar processos específicos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = getIcon(category.icon);
          
          return (
            <div
              key={category.name}
              onClick={() => onCategoryClick?.(category.name)}
              className="bg-navy-medium border border-navy-light rounded-xl p-6 cursor-pointer hover:border-cyan-neon/50 hover:bg-navy-light transition-all group"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-cyan-neon font-bold text-lg">
                    {category.agent_count}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {category.agent_count === 1 ? 'agente' : 'agentes'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-neon transition-colors" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
