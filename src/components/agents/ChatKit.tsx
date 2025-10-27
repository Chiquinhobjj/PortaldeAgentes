import React from 'react';

// === AGENTES CHATKIT & AGENT BUILDER ===

export const ChatKitConversacionalAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ChatKit Conversacional</h1>
        <p className="text-gray-600">Chat avançado com OpenAI ChatKit e Agent Builder para conversas inteligentes</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Chat Inteligente</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">💬 Conversação Avançada</h3>
            <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                    Olá! Como posso ajudar você hoje?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
                    Preciso de ajuda com um projeto de IA
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                    Perfeito! Posso ajudar com desenvolvimento, análise de dados, ou automação. O que você tem em mente?
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <input 
                type="text" 
                placeholder="Digite sua mensagem..."
                className="flex-1 p-2 border border-gray-300 rounded-lg"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Enviar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔧 Configurações ChatKit</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>GPT-4o</option>
                    <option>GPT-4 Turbo</option>
                    <option>GPT-3.5 Turbo</option>
                    <option>Claude 3.5 Sonnet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Temperatura</label>
                  <input type="range" min="0" max="1" step="0.1" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Tokens</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="4000" />
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas da Sessão</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Mensagens trocadas</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tempo de resposta</span>
                  <span className="text-sm font-medium">1.2s</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tokens usados</span>
                  <span className="text-sm font-medium">2,847</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Custo estimado</span>
                  <span className="text-sm font-medium">$0.08</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🎯 Workflows Disponíveis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🤖</div>
                <h4 className="font-medium text-gray-900">Assistente Geral</h4>
                <p className="text-sm text-gray-600">Conversação livre</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">💻</div>
                <h4 className="font-medium text-gray-900">Desenvolvimento</h4>
                <p className="text-sm text-gray-600">Código e debugging</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-medium text-gray-900">Análise</h4>
                <p className="text-sm text-gray-600">Dados e insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AssistenteWorkflowAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assistente Workflow</h1>
        <p className="text-gray-600">Automatiza fluxos de trabalho complexos com Agent Builder</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Criador de Workflows</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🔄 Fluxo de Trabalho</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Entrada de Dados</h4>
                  <p className="text-sm text-gray-600">Recebe informações do usuário</p>
                </div>
                <div className="text-blue-500">→</div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Processamento IA</h4>
                  <p className="text-sm text-gray-600">Analisa e processa com IA</p>
                </div>
                <div className="text-green-500">→</div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Integração Externa</h4>
                  <p className="text-sm text-gray-600">Conecta com APIs externas</p>
                </div>
                <div className="text-purple-500">→</div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Saída de Resultado</h4>
                  <p className="text-sm text-gray-600">Retorna resultado final</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚙️ Configurações</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Workflow</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Meu Workflow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Trigger</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Manual</option>
                    <option>Webhook</option>
                    <option>Cron Job</option>
                    <option>Evento</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Timeout</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>30 segundos</option>
                    <option>1 minuto</option>
                    <option>5 minutos</option>
                    <option>15 minutos</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Monitoramento</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Execuções hoje</span>
                  <span className="text-sm font-medium">47</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Taxa de sucesso</span>
                  <span className="text-sm font-medium text-green-600">98.2%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tempo médio</span>
                  <span className="text-sm font-medium">2.3s</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Status</span>
                  <span className="text-sm font-medium text-green-600">Ativo</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🔗 Integrações</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <p className="text-sm text-gray-600">SMTP</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">💾</div>
                <h4 className="font-medium text-gray-900">Database</h4>
                <p className="text-sm text-gray-600">SQL/NoSQL</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <h4 className="font-medium text-gray-900">Cloud</h4>
                <p className="text-sm text-gray-600">AWS/Azure</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <h4 className="font-medium text-gray-900">APIs</h4>
                <p className="text-sm text-gray-600">REST/GraphQL</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
              🚀 Criar Workflow
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              📊 Testar
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
              💾 Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ChatMultimodalAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Chat Multimodal</h1>
        <p className="text-gray-600">Chat que entende texto, imagens, áudio e vídeo</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Interface Multimodal</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🎨 Upload Multimodal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="text-gray-500 mb-2">📷</div>
                  <p className="text-gray-600">Arraste imagens aqui</p>
                  <input type="file" accept="image/*" className="mt-2" />
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="text-gray-500 mb-2">🎵</div>
                  <p className="text-gray-600">Arraste áudios aqui</p>
                  <input type="file" accept="audio/*" className="mt-2" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="text-gray-500 mb-2">🎬</div>
                  <p className="text-gray-600">Arraste vídeos aqui</p>
                  <input type="file" accept="video/*" className="mt-2" />
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="text-gray-500 mb-2">📄</div>
                  <p className="text-gray-600">Arraste documentos aqui</p>
                  <input type="file" accept=".pdf,.doc,.docx" className="mt-2" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">💬 Chat com Mídia</h3>
            <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                    Analise esta imagem para mim
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
                    <div className="mb-2">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzQyODVmNCIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbTwvdGV4dD48L3N2Zz4=" alt="Imagem" className="w-20 h-20 rounded" />
                    </div>
                    Esta é uma imagem azul com texto "Imagem"
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                    A imagem mostra um retângulo azul (#4285F4) com o texto "Imagem" em branco centralizado. É um exemplo simples de elemento gráfico.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <input 
                type="text" 
                placeholder="Digite sua pergunta sobre a mídia..."
                className="flex-1 p-2 border border-gray-300 rounded-lg"
              />
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg">
                Enviar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Capacidades</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Análise de imagens</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Transcrição de áudio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Análise de vídeo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">OCR em documentos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Detecção de objetos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Análise de sentimento</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Imagens processadas</span>
                  <span className="text-sm font-medium">23</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Áudios transcritos</span>
                  <span className="text-sm font-medium">15</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Vídeos analisados</span>
                  <span className="text-sm font-medium">8</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Documentos lidos</span>
                  <span className="text-sm font-medium">12</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🔧 Configurações Avançadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Qualidade de Imagem</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Alta (HD)</option>
                  <option>Média (720p)</option>
                  <option>Baixa (480p)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Idioma do Áudio</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Português</option>
                  <option>Inglês</option>
                  <option>Espanhol</option>
                  <option>Detectar automaticamente</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Modo de Análise</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Rápido</option>
                  <option>Balanceado</option>
                  <option>Detalhado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
