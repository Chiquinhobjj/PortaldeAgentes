import React from 'react';

// === AGENTES GOOGLE AGENT SDK ===

export const AssistentePesquisaAcademicaAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assistente de Pesquisa Acadêmica</h1>
        <p className="text-gray-600">Ajuda pesquisadores a identificar publicações recentes e descobrir novas áreas de pesquisa</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Pesquisa Acadêmica Inteligente</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🔍 Busca de Publicações</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Área de Pesquisa</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Inteligência Artificial</option>
                  <option>Machine Learning</option>
                  <option>Ciência de Dados</option>
                  <option>Robótica</option>
                  <option>Biologia Computacional</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Palavras-chave</label>
                <input 
                  type="text" 
                  placeholder="Digite palavras-chave da sua pesquisa..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Período</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Últimos 6 meses</option>
                    <option>Último ano</option>
                    <option>Últimos 2 anos</option>
                    <option>Últimos 5 anos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Publicação</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Todas</option>
                    <option>Artigos</option>
                    <option>Conferências</option>
                    <option>Livros</option>
                    <option>Preprints</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Métricas de Impacto</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Citações totais</span>
                  <span className="text-sm font-medium">1,247</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">H-index</span>
                  <span className="text-sm font-medium">23</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">i10-index</span>
                  <span className="text-sm font-medium">45</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Fator de impacto</span>
                  <span className="text-sm font-medium">8.7</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Áreas Emergentes</h3>
              <div className="space-y-2">
                <div className="p-2 bg-blue-50 rounded text-sm">
                  <strong>Transformers:</strong> Crescimento de 340% nos últimos 2 anos
                </div>
                <div className="p-2 bg-green-50 rounded text-sm">
                  <strong>Multimodal AI:</strong> Tendência crescente em 2024
                </div>
                <div className="p-2 bg-purple-50 rounded text-sm">
                  <strong>Federated Learning:</strong> Área em expansão
                </div>
                <div className="p-2 bg-yellow-50 rounded text-sm">
                  <strong>Quantum ML:</strong> Campo emergente
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📚 Publicações Encontradas</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">"Advanced Neural Architecture Search for Efficient Models"</h4>
                <p className="text-sm text-gray-600 mt-1">Nature Machine Intelligence • 2024 • 127 citações</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Neural Architecture Search</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Efficiency</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Automation</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">"Multimodal Learning with Vision-Language Models"</h4>
                <p className="text-sm text-gray-600 mt-1">ICML 2024 • 89 citações</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Multimodal</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Vision-Language</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Learning</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium">
              🔍 Buscar Publicações
            </button>
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium">
              📊 Analisar Tendências
            </button>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium">
              📋 Gerar Relatório
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AgenteCienciaDadosAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Agente de Ciência de Dados</h1>
        <p className="text-gray-600">Realiza análises de dados complexas com consultas em linguagem natural para SQL</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Análise de Dados com IA</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🗣️ Consulta em Linguagem Natural</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pergunta sobre os dados</label>
                <textarea 
                  placeholder="Ex: 'Mostre as vendas por região nos últimos 3 meses' ou 'Qual produto teve maior crescimento?'"
                  className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fonte de Dados</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Banco de dados SQL</option>
                    <option>CSV/Excel</option>
                    <option>API REST</option>
                    <option>Data Warehouse</option>
                    <option>BigQuery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Análise</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Descritiva</option>
                    <option>Preditiva</option>
                    <option>Diagnóstica</option>
                    <option>Prescritiva</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">💻 SQL Gerado</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-500">-- SQL gerado automaticamente:</div>
                <div>SELECT region, SUM(sales) as total_sales</div>
                <div>FROM sales_data</div>
                <div>WHERE date >= DATE_SUB(NOW(), INTERVAL 3 MONTH)</div>
                <div>GROUP BY region</div>
                <div>ORDER BY total_sales DESC;</div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Resultados</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Registros processados</span>
                  <span className="text-sm font-medium">15,847</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tempo de execução</span>
                  <span className="text-sm font-medium">2.3s</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Confiança</span>
                  <span className="text-sm font-medium text-green-600">94%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Complexidade</span>
                  <span className="text-sm font-medium text-blue-600">Média</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📈 Visualização dos Dados</h3>
            <div className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-gray-600">Gráfico dos resultados aparecerá aqui</p>
                <p className="text-sm text-gray-500 mt-2">Baseado na consulta executada</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔧 Ferramentas</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📝 Otimizar Query
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  🔍 Explicar SQL
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📊 Criar Dashboard
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  💾 Salvar Análise
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📚 Histórico</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Última consulta:</strong> Vendas por região
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Mais usada:</strong> Análise temporal
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Favorita:</strong> Comparação de produtos
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Insights</h3>
              <div className="space-y-2">
                <div className="p-2 bg-blue-50 rounded text-sm">
                  <strong>Padrão:</strong> Vendas aumentam 15% nas quartas-feiras
                </div>
                <div className="p-2 bg-green-50 rounded text-sm">
                  <strong>Tendência:</strong> Região Sul cresceu 23% este mês
                </div>
                <div className="p-2 bg-yellow-50 rounded text-sm">
                  <strong>Alerta:</strong> Produto X com queda de 8%
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium">
              🗣️ Processar Consulta
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium">
              📊 Executar SQL
            </button>
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium">
              📈 Gerar Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SistemasRagAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sistemas RAG</h1>
        <p className="text-gray-600">Fornece respostas baseadas em documentos com citações usando Vertex AI RAG Engine</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">RAG Engine Avançado</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📚 Base de Conhecimento</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload de Documentos</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="text-gray-500 mb-2">📄</div>
                    <p className="text-gray-600">Arraste documentos aqui</p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOCX, TXT, MD suportados</p>
                    <input type="file" multiple className="mt-2" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fonte de Dados</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Documentos locais</option>
                    <option>Google Drive</option>
                    <option>SharePoint</option>
                    <option>Confluence</option>
                    <option>Notion</option>
                    <option>Web scraping</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔍 Consulta RAG</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pergunta</label>
                  <textarea 
                    placeholder="Faça uma pergunta sobre os documentos carregados..."
                    className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Gemini Pro</option>
                    <option>GPT-4</option>
                    <option>Claude 3.5</option>
                    <option>PaLM 2</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Documentos indexados</span>
                  <span className="text-sm font-medium">47</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Chunks processados</span>
                  <span className="text-sm font-medium">2,341</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Embeddings gerados</span>
                  <span className="text-sm font-medium">2,341</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Última atualização</span>
                  <span className="text-sm font-medium">2h atrás</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">💬 Resposta com Citações</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-teal-500">
                  <p className="text-gray-800">
                    Com base nos documentos analisados, o processo de implementação de RAG envolve três etapas principais: 
                    <strong>indexação</strong>, <strong>recuperação</strong> e <strong>geração</strong>.
                  </p>
                  <div className="mt-2 text-sm text-gray-600">
                    📄 <strong>Fonte:</strong> "RAG Implementation Guide.pdf" (página 12)
                  </div>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                  <p className="text-gray-800">
                    A qualidade dos embeddings é crucial para o desempenho do sistema RAG. 
                    Recomenda-se usar modelos especializados como Sentence-BERT.
                  </p>
                  <div className="mt-2 text-sm text-gray-600">
                    📄 <strong>Fonte:</strong> "Best Practices for RAG.pdf" (página 8)
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚙️ Configurações</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Chunk size</span>
                  <span className="text-sm font-medium">512 tokens</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Overlap</span>
                  <span className="text-sm font-medium">50 tokens</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Top-k</span>
                  <span className="text-sm font-medium">5</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Threshold</span>
                  <span className="text-sm font-medium">0.7</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Performance</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Precisão</span>
                  <span className="text-sm font-medium text-green-600">92%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Recall</span>
                  <span className="text-sm font-medium text-green-600">88%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Latência</span>
                  <span className="text-sm font-medium text-blue-600">1.2s</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Custo/mês</span>
                  <span className="text-sm font-medium">$45</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔧 Ferramentas</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  🔄 Reindexar documentos
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📊 Analisar qualidade
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  🎯 Otimizar embeddings
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📋 Exportar resultados
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium">
              🔍 Processar Consulta
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium">
              📚 Indexar Documentos
            </button>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-medium">
              📊 Avaliar Performance
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
