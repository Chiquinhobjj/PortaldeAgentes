import React from 'react';

// === AGENTES LANGCHAIN DEEP AGENTS ===

export const AgentePesquisaProfundaAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Agente de Pesquisa Profunda</h1>
        <p className="text-gray-600">Realiza pesquisas complexas com planejamento, subagentes e sistema de arquivos</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Pesquisa Profunda com Deep Agents</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🎯 Objetivo da Pesquisa</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tópico Principal</label>
                <input 
                  type="text" 
                  placeholder="Ex: 'Impacto da IA na educação brasileira'"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Escopo da Pesquisa</label>
                <textarea 
                  placeholder="Descreva o que você quer descobrir, analisar ou comparar..."
                  className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profundidade</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Superficial (1-2 horas)</option>
                    <option>Moderada (3-5 horas)</option>
                    <option>Profunda (6-12 horas)</option>
                    <option>Exaustiva (1+ dias)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fontes</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Web + Acadêmico</option>
                    <option>Apenas Acadêmico</option>
                    <option>Apenas Web</option>
                    <option>Personalizado</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📋 Plano de Execução</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-sm">Definir subagentes especializados</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-sm">Coletar dados primários</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-sm">Analisar e correlacionar</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <span className="text-sm">Sintetizar resultados</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                  <span className="text-sm">Gerar relatório final</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🤖 Subagentes Ativos</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">🔍</span>
                    <span className="text-sm font-medium">Pesquisador Web</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Ativo</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">📚</span>
                    <span className="text-sm font-medium">Analista Acadêmico</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Ativo</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-pink-50 rounded">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-500">📊</span>
                    <span className="text-sm font-medium">Analista de Dados</span>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Aguardando</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-teal-50 rounded">
                  <div className="flex items-center gap-2">
                    <span className="text-teal-500">✍️</span>
                    <span className="text-sm font-medium">Escritor de Relatórios</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Inativo</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📁 Sistema de Arquivos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-medium text-gray-900 mb-2">📄 Arquivos Coletados</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>dados_primarios.json</span>
                    <span className="text-gray-500">2.3MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>artigos_academicos.pdf</span>
                    <span className="text-gray-500">15.7MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>pesquisas_web.md</span>
                    <span className="text-gray-500">847KB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>analise_preliminar.txt</span>
                    <span className="text-gray-500">234KB</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-medium text-gray-900 mb-2">🔄 Status da Execução</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Progresso geral</span>
                    <span className="text-sm font-medium">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tempo decorrido</span>
                    <span className="text-sm font-medium">2h 34m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tempo estimado</span>
                    <span className="text-sm font-medium">1h 12m</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-medium text-gray-900 mb-2">📊 Métricas</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fontes consultadas</span>
                    <span className="text-sm font-medium">47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Dados coletados</span>
                    <span className="text-sm font-medium">2,341</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Subagentes usados</span>
                    <span className="text-sm font-medium">3/4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Confiança média</span>
                    <span className="text-sm font-medium text-green-600">89%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📈 Resultados Preliminares</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-indigo-500">
                  <h4 className="font-medium text-gray-900">Descoberta Principal</h4>
                  <p className="text-gray-700 text-sm mt-1">
                    A IA na educação brasileira mostra crescimento de 340% nos últimos 2 anos, 
                    com foco em personalização e acessibilidade.
                  </p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                  <h4 className="font-medium text-gray-900">Tendência Emergente</h4>
                  <p className="text-gray-700 text-sm mt-1">
                    Uso de chatbots educacionais aumentou 78% em 2024, 
                    especialmente em escolas públicas.
                  </p>
                </div>
                <div className="p-3 bg-white rounded border-l-4 border-pink-500">
                  <h4 className="font-medium text-gray-900">Desafio Identificado</h4>
                  <p className="text-gray-700 text-sm mt-1">
                    Falta de capacitação docente é o principal obstáculo 
                    para adoção efetiva da IA educacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-indigo-800 hover:bg-indigo-900 text-white px-6 py-3 rounded-lg font-medium">
              🔍 Iniciar Pesquisa Profunda
            </button>
            <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-medium">
              📊 Ver Progresso
            </button>
            <button className="bg-pink-800 hover:bg-pink-900 text-white px-6 py-3 rounded-lg font-medium">
              📋 Gerar Relatório
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AgenteTodoListAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Agente Todo List</h1>
        <p className="text-gray-600">Agente com middleware de planejamento e lista de tarefas dinâmica</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">TodoListMiddleware Avançado</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📝 Lista de Tarefas Dinâmica</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <input type="checkbox" checked className="rounded" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-900">Definir objetivos da pesquisa</span>
                  <div className="text-xs text-gray-600 mt-1">Concluído há 15 minutos</div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Concluído</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <input type="checkbox" checked className="rounded" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-900">Coletar dados primários</span>
                  <div className="text-xs text-gray-600 mt-1">Em progresso - 67% completo</div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Em Progresso</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <input type="checkbox" className="rounded" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-900">Analisar dados coletados</span>
                  <div className="text-xs text-gray-600 mt-1">Aguardando conclusão da coleta</div>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pendente</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                <input type="checkbox" className="rounded" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-900">Sintetizar resultados</span>
                  <div className="text-xs text-gray-600 mt-1">Bloqueado por dependências</div>
                </div>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Bloqueado</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                <input type="checkbox" className="rounded" />
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-900">Gerar relatório final</span>
                  <div className="text-xs text-gray-600 mt-1">Aguardando síntese</div>
                </div>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Bloqueado</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔄 Adaptação Dinâmica</h3>
              <div className="space-y-2">
                <div className="p-2 bg-blue-50 rounded text-sm">
                  <strong>Nova tarefa adicionada:</strong> "Validar fontes encontradas"
                </div>
                <div className="p-2 bg-green-50 rounded text-sm">
                  <strong>Tarefa modificada:</strong> "Coletar dados" → "Coletar dados primários e secundários"
                </div>
                <div className="p-2 bg-yellow-50 rounded text-sm">
                  <strong>Prioridade alterada:</strong> "Análise" movida para alta prioridade
                </div>
                <div className="p-2 bg-purple-50 rounded text-sm">
                  <strong>Dependência criada:</strong> "Relatório" depende de "Síntese"
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas de Planejamento</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tarefas totais</span>
                  <span className="text-sm font-medium">5</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Concluídas</span>
                  <span className="text-sm font-medium text-green-600">1</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Em progresso</span>
                  <span className="text-sm font-medium text-blue-600">1</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Bloqueadas</span>
                  <span className="text-sm font-medium text-gray-600">2</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Eficiência</span>
                  <span className="text-sm font-medium text-green-600">85%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🎯 Sistema de Prompting</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-gray-500"># Prompt automático do TodoListMiddleware</div>
              <div></div>
              <div>Use the write_todos tool to:</div>
              <div>1. Break down complex tasks into smaller, manageable steps</div>
              <div>2. Update the todo list as you progress</div>
              <div>3. Adapt the plan when new information emerges</div>
              <div>4. Track dependencies between tasks</div>
              <div>5. Maintain focus on the main objective</div>
              <div></div>
              <div>Current objective: Research impact of AI in Brazilian education</div>
              <div>Progress: 2/5 tasks completed (40%)</div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">⚙️ Configurações do Middleware</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Frequência de Atualização</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Automática</option>
                  <option>A cada etapa</option>
                  <option>Manual</option>
                  <option>Inteligente</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nível de Detalhamento</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Alto</option>
                  <option>Médio</option>
                  <option>Baixo</option>
                  <option>Adaptativo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Modo de Adaptação</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Conservador</option>
                  <option>Balanceado</option>
                  <option>Agressivo</option>
                  <option>Inteligente</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-medium">
              📝 Atualizar Todo List
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium">
              🔄 Adaptar Plano
            </button>
            <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-medium">
              📊 Ver Estatísticas
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AgenteHitlAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Agente Human-in-the-Loop</h1>
        <p className="text-gray-600">Agente que solicita aprovação humana para operações sensíveis</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Sistema de Aprovação Humana</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">⚠️ Operação Sensível Detectada</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">⚠️</span>
                <div className="flex-1">
                  <h4 className="font-medium text-yellow-900">Aprovação Necessária</h4>
                  <p className="text-yellow-800 text-sm mt-1">
                    O agente detectou uma operação que requer sua aprovação antes de prosseguir.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">Operação: Envio de Email</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Destinatário:</strong> cliente@empresa.com<br/>
                  <strong>Assunto:</strong> Proposta comercial - Projeto IA<br/>
                  <strong>Conteúdo:</strong> Envio de proposta comercial com valores e cronograma...
                </p>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900">Contexto</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Esta operação foi identificada como sensível porque envolve comunicação externa 
                  com informações comerciais confidenciais.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">✅ Aprovar</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Permitir que o agente execute a operação conforme planejado.</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
                  ✅ Aprovar Operação
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">✏️ Editar</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Modificar os parâmetros da operação antes da execução.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                  ✏️ Editar Operação
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">❌ Rejeitar</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Cancelar a operação e buscar alternativas.</p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium">
                  ❌ Rejeitar Operação
                </button>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📋 Histórico de Aprovações</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm">Envio de relatório para cliente</span>
                </div>
                <span className="text-xs text-gray-500">há 2 horas</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✏️</span>
                  <span className="text-sm">Atualização de dados (editado)</span>
                </div>
                <span className="text-xs text-gray-500">há 4 horas</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">❌</span>
                  <span className="text-sm">Exclusão de arquivos importantes</span>
                </div>
                <span className="text-xs text-gray-500">ontem</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚙️ Configurações HITL</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Operações de email</span>
                  <input type="checkbox" checked className="rounded" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Modificações de arquivos</span>
                  <input type="checkbox" checked className="rounded" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Chamadas de API externas</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Operações financeiras</span>
                  <input type="checkbox" checked className="rounded" />
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Total de aprovações</span>
                  <span className="text-sm font-medium">47</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Taxa de aprovação</span>
                  <span className="text-sm font-medium text-green-600">78%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tempo médio de resposta</span>
                  <span className="text-sm font-medium">3m 24s</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Operações bloqueadas</span>
                  <span className="text-sm font-medium text-red-600">12</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-yellow-800 hover:bg-yellow-900 text-white px-6 py-3 rounded-lg font-medium">
              ⚙️ Configurar HITL
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium">
              📊 Ver Estatísticas
            </button>
            <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-medium">
              📋 Histórico Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
