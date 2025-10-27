import React from 'react';

// === ASSISTENTES INTELIGENTES ===

export const AssistenteGeralAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assistente Geral</h1>
        <p className="text-gray-600">Seu assistente pessoal que ajuda com qualquer tarefa do dia a dia</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Conversação Inteligente</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">💬 Chat Inteligente</h3>
            <div className="bg-gray-50 rounded-lg p-4 h-48 overflow-y-auto">
              <div className="text-gray-500 text-center">Inicie uma conversa com seu assistente...</div>
            </div>
            <div className="mt-2 flex gap-2">
              <input 
                type="text" 
                placeholder="Digite sua pergunta ou tarefa..."
                className="flex-1 p-2 border border-gray-300 rounded-lg"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
                Enviar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🧠 Memória de Contexto</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Conversas lembradas</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Preferências salvas</span>
                  <span className="text-sm font-medium">0</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚡ Multi-tarefas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tarefas ativas</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Status</span>
                  <span className="text-sm font-medium text-green-600">Pronto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TradutorUniversalAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tradutor Universal</h1>
        <p className="text-gray-600">Traduz textos entre qualquer idioma com precisão e contexto</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Tradução Inteligente</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📝 Texto Original</h3>
              <textarea 
                placeholder="Cole o texto que deseja traduzir..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <div className="mt-2">
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Detectar idioma automaticamente</option>
                  <option>Português</option>
                  <option>Inglês</option>
                  <option>Espanhol</option>
                  <option>Francês</option>
                </select>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🌍 Tradução</h3>
              <div className="w-full h-32 p-3 border border-gray-300 rounded-lg bg-gray-50">
                <div className="text-gray-500 text-center">Tradução aparecerá aqui...</div>
              </div>
              <div className="mt-2">
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Selecione o idioma de destino</option>
                  <option>Português</option>
                  <option>Inglês</option>
                  <option>Espanhol</option>
                  <option>Francês</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium">
              🔄 Traduzir
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium">
              📋 Copiar
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              🔊 Ouvir
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="font-medium text-gray-900">100+ Idiomas</h4>
                <p className="text-sm text-gray-600">Suportados</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-medium text-gray-900">Contextual</h4>
                <p className="text-sm text-gray-600">Preserva tom</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-medium text-gray-900">Instantâneo</h4>
                <p className="text-sm text-gray-600">Resultados rápidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ResumidorInteligenteAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resumidor Inteligente</h1>
        <p className="text-gray-600">Cria resumos perfeitos de textos longos mantendo o essencial</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Resumo Inteligente</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📄 Texto Original</h3>
            <textarea 
              placeholder="Cole o texto que deseja resumir..."
              className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <div className="mt-2 flex gap-2">
              <input type="file" className="text-sm text-gray-600" />
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm">
                📁 Upload
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚙️ Configurações</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tamanho do resumo</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Muito curto (10%)</option>
                    <option>Curto (25%)</option>
                    <option>Médio (50%)</option>
                    <option>Longo (75%)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estilo</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Pontos-chave</option>
                    <option>Parágrafo</option>
                    <option>Estruturado</option>
                    <option>Narrativo</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Análise</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Palavras originais</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Palavras no resumo</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Compressão</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📝 Resumo Gerado</h3>
            <div className="w-full h-40 p-3 border border-gray-300 rounded-lg bg-gray-50">
              <div className="text-gray-500 text-center">Resumo aparecerá aqui...</div>
            </div>
            <div className="mt-2 flex gap-2">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium">
                ✨ Gerar Resumo
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium">
                📋 Copiar
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                💾 Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
