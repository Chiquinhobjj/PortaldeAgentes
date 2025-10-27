import React from 'react';

// === AGENTES DE ANÁLISE DE DADOS ===

export const AnalistaDadosAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analista de Dados</h1>
        <p className="text-gray-600">Transforma dados brutos em insights valiosos para decisões</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Análise de Dados</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📊 Upload de Dados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="text-gray-500 mb-2">📁</div>
                <p className="text-gray-600">Arraste arquivos aqui ou clique para selecionar</p>
                <p className="text-sm text-gray-500 mt-1">CSV, Excel, JSON suportados</p>
                <input type="file" className="mt-2" />
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fonte de Dados</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Arquivo local</option>
                    <option>URL</option>
                    <option>Banco de dados</option>
                    <option>API</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Análise</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Exploratória</option>
                    <option>Descritiva</option>
                    <option>Preditiva</option>
                    <option>Prescritiva</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Visualizações</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  📊 Gráfico de Barras
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  📈 Gráfico de Linha
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  🥧 Gráfico de Pizza
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  🔥 Heatmap
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  📊 Scatter Plot
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  📋 Tabela Dinâmica
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Registros</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Colunas</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Valores nulos</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Duplicatas</span>
                  <span className="text-sm font-medium">0</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📊 Dashboard</h3>
            <div className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-gray-600">Visualizações aparecerão aqui</p>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
                📊 Gerar Análise
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                📋 Relatório
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
                💾 Exportar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔍 Insights</h3>
              <div className="space-y-2">
                <div className="p-2 bg-blue-50 rounded text-sm">
                  <strong>Tendência:</strong> Dados mostram crescimento de 15%
                </div>
                <div className="p-2 bg-green-50 rounded text-sm">
                  <strong>Correlação:</strong> Variáveis A e B correlacionam em 0.8
                </div>
                <div className="p-2 bg-yellow-50 rounded text-sm">
                  <strong>Outlier:</strong> 3 pontos fora do padrão detectados
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Métricas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Média</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Mediana</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Desvio Padrão</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Correlação</span>
                  <span className="text-sm font-medium">0</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Recomendações</h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Limpeza:</strong> Remover 5% de outliers
                </div>
                <div className="text-sm">
                  <strong>Transformação:</strong> Aplicar log nos dados
                </div>
                <div className="text-sm">
                  <strong>Segmentação:</strong> Criar 3 grupos distintos
                </div>
                <div className="text-sm">
                  <strong>Predição:</strong> Usar modelo de regressão
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CientistaDadosAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cientista de Dados</h1>
        <p className="text-gray-600">Cria modelos de IA e machine learning para prever o futuro</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Machine Learning</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🤖 Modelo de IA</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Problema</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Classificação</option>
                  <option>Regressão</option>
                  <option>Clustering</option>
                  <option>Recomendação</option>
                  <option>NLP</option>
                  <option>Visão Computacional</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Algoritmo</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Random Forest</option>
                  <option>XGBoost</option>
                  <option>Neural Network</option>
                  <option>SVM</option>
                  <option>Linear Regression</option>
                  <option>K-Means</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Dados de Treino</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dataset</label>
                  <input type="file" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Divisão Treino/Teste</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>70/30</option>
                    <option>80/20</option>
                    <option>90/10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Validação Cruzada</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>5-fold</option>
                    <option>10-fold</option>
                    <option>Leave-one-out</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚙️ Hiperparâmetros</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Learning Rate</span>
                  <input type="number" step="0.01" className="w-20 p-1 border border-gray-300 rounded text-sm" placeholder="0.01" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Epochs</span>
                  <input type="number" className="w-20 p-1 border border-gray-300 rounded text-sm" placeholder="100" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Batch Size</span>
                  <input type="number" className="w-20 p-1 border border-gray-300 rounded text-sm" placeholder="32" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Regularização</span>
                  <input type="number" step="0.01" className="w-20 p-1 border border-gray-300 rounded text-sm" placeholder="0.01" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🎯 Treinamento do Modelo</h3>
            <div className="space-y-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-cyan-600 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
              <div className="text-center">
                <div className="text-gray-500">Modelo não treinado ainda</div>
              </div>
              <div className="flex gap-2 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium">
                  🚀 Treinar Modelo
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
                  📊 Avaliar
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                  🔮 Fazer Predição
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Performance</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Accuracy</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Precision</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Recall</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">F1-Score</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔍 Feature Importance</h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span>Feature 1</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span>Feature 2</span>
                    <span>72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{width: '72%'}}></div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span>Feature 3</span>
                    <span>58%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{width: '58%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Visualizações</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📈 Curva de Aprendizado
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  🎯 Matriz de Confusão
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📊 ROC Curve
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  🔥 Heatmap de Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const VisualizadorDadosAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Visualizador de Dados</h1>
        <p className="text-gray-600">Cria gráficos e dashboards lindos para contar histórias com dados</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Dashboard Interativo</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🎨 Designer de Gráficos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Gráfico</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>📊 Gráfico de Barras</option>
                  <option>📈 Gráfico de Linha</option>
                  <option>🥧 Gráfico de Pizza</option>
                  <option>📊 Scatter Plot</option>
                  <option>🔥 Heatmap</option>
                  <option>📋 Tabela</option>
                  <option>🌊 Área</option>
                  <option>📊 Histograma</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tema</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>🎨 Moderno</option>
                  <option>🌙 Escuro</option>
                  <option>☀️ Claro</option>
                  <option>🌈 Colorido</option>
                  <option>⚫ Minimalista</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Configurações</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Eixo X</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Selecione uma coluna</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Eixo Y</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Selecione uma coluna</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cor</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Automático</option>
                    <option>Azul</option>
                    <option>Verde</option>
                    <option>Vermelho</option>
                    <option>Roxo</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Filtros</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Período</span>
                  <select className="text-sm border border-gray-300 rounded">
                    <option>Últimos 30 dias</option>
                    <option>Últimos 90 dias</option>
                    <option>Último ano</option>
                    <option>Personalizado</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Categoria</span>
                  <select className="text-sm border border-gray-300 rounded">
                    <option>Todas</option>
                    <option>Categoria A</option>
                    <option>Categoria B</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Região</span>
                  <select className="text-sm border border-gray-300 rounded">
                    <option>Todas</option>
                    <option>Norte</option>
                    <option>Sul</option>
                    <option>Leste</option>
                    <option>Oeste</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📊 Visualização</h3>
            <div className="w-full h-80 p-4 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600">Seu gráfico aparecerá aqui</p>
                <p className="text-sm text-gray-500 mt-2">Configure os dados e clique em "Gerar Gráfico"</p>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium">
                📊 Gerar Gráfico
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                📋 Adicionar ao Dashboard
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
                💾 Salvar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📱 Templates</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📊 Dashboard Executivo
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📈 Análise de Vendas
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  👥 Análise de Usuários
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  💰 Financeiro
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎨 Personalização</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tamanho</span>
                  <select className="text-sm border border-gray-300 rounded">
                    <option>Pequeno</option>
                    <option>Médio</option>
                    <option>Grande</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Animação</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Interativo</span>
                  <input type="checkbox" className="rounded" checked />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Responsivo</span>
                  <input type="checkbox" className="rounded" checked />
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📤 Exportação</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📊 PNG (Imagem)
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📄 PDF (Relatório)
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📊 SVG (Vetorial)
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📋 HTML (Embed)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
