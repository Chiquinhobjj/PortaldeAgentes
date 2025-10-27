'use client';

import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Agente de Campanhas" 
}) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-navy-medium border border-navy-light rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon/50 transition-all"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
