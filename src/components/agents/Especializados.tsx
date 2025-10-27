import React from 'react';

// === AGENTES ESPECIALIZADOS ===

export const AssistenteMedicoAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assistente Médico</h1>
        <p className="text-gray-600">Assistente especializado em saúde e medicina com validação científica</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Consulta Médica Virtual</h2>
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-red-500">⚠️</span>
              <span className="text-red-700 font-medium">Aviso Importante</span>
            </div>
            <p className="text-red-600 text-sm mt-1">
              Este assistente é apenas para fins informativos. Sempre consulte um médico profissional para diagnósticos e tratamentos.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🏥 Sintomas e Consulta</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Principais Sintomas</label>
                <textarea 
                  placeholder="Descreva seus sintomas principais..."
                  className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duração</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Menos de 1 dia</option>
                    <option>1-3 dias</option>
                    <option>3-7 dias</option>
                    <option>1-2 semanas</option>
                    <option>Mais de 2 semanas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Intensidade</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Leve</option>
                    <option>Moderada</option>
                    <option>Forte</option>
                    <option>Muito forte</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📋 Histórico Médico</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medicamentos Atuais</label>
                  <textarea 
                    placeholder="Liste medicamentos que está tomando..."
                    className="w-full h-20 p-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alergias Conhecidas</label>
                  <input 
                    type="text" 
                    placeholder="Alergias a medicamentos ou substâncias..."
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condições Crônicas</label>
                  <input 
                    type="text" 
                    placeholder="Diabetes, hipertensão, etc..."
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔍 Análise Inicial</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Possíveis causas</span>
                  <span className="text-sm font-medium">3 identificadas</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Urgência</span>
                  <span className="text-sm font-medium text-yellow-600">Moderada</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Recomendação</span>
                  <span className="text-sm font-medium text-blue-600">Consulta médica</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Confiança</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">💡 Recomendações</h3>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">💊</span>
                  <div>
                    <h4 className="font-medium text-blue-900">Medicamentos</h4>
                    <p className="text-blue-700 text-sm">Paracetamol 500mg a cada 6 horas se necessário</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">🏠</span>
                  <div>
                    <h4 className="font-medium text-green-900">Cuidados em Casa</h4>
                    <p className="text-green-700 text-sm">Repouso, hidratação adequada, alimentação leve</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🚨</span>
                  <div>
                    <h4 className="font-medium text-red-900">Quando Buscar Ajuda</h4>
                    <p className="text-red-700 text-sm">Se os sintomas piorarem ou persistirem por mais de 3 dias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium">
              🏥 Analisar Sintomas
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              📋 Gerar Relatório
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
              📞 Encontrar Médico
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AssistenteJuridicoAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assistente Jurídico</h1>
        <p className="text-gray-600">Especialista em direito e questões legais com base em jurisprudência</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Consulta Jurídica</h2>
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⚖️</span>
              <span className="text-yellow-700 font-medium">Aviso Legal</span>
            </div>
            <p className="text-yellow-600 text-sm mt-1">
              Este assistente fornece informações gerais. Para questões específicas, consulte um advogado qualificado.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">⚖️ Área do Direito</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                Civil
              </button>
              <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                Criminal
              </button>
              <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                Trabalhista
              </button>
              <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                Tributário
              </button>
              <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                Empresarial
              </button>
              <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                Família
              </button>
              <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                Consumidor
              </button>
              <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-sm">
                Imobiliário
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📝 Descrição do Caso</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Situação</label>
                <textarea 
                  placeholder="Descreva sua situação jurídica..."
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Questão</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Consulta</option>
                    <option>Contrato</option>
                    <option>Disputa</option>
                    <option>Compliance</option>
                    <option>Regulamentação</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Urgência</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                    <option>Crítica</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📚 Base Legal</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Art. 5º, XXXV, CF:</strong> Lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Art. 186, CC:</strong> Aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Art. 927, CC:</strong> Aquele que, por ato ilícito, causar dano a outrem, fica obrigado a repará-lo
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚖️ Jurisprudência</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>STJ:</strong> Recurso Especial 1.234.567/SP
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>STF:</strong> ADI 6.789/DF
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>TST:</strong> RR 987.654/RS
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">💡 Análise Jurídica</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Possíveis Ações</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Ação de Cobrança</li>
                    <li>• Ação de Indenização</li>
                    <li>• Ação de Rescisão</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Prazo Prescricional</h4>
                  <p className="text-sm text-gray-600">3 anos (Art. 206, §1º, CC)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Competência</h4>
                  <p className="text-sm text-gray-600">Foro do domicílio do réu</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium">
              ⚖️ Analisar Caso
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              📋 Gerar Parecer
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
              👨‍💼 Encontrar Advogado
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AssistenteFinanceiroAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assistente Financeiro</h1>
        <p className="text-gray-600">Especialista em finanças pessoais e investimentos</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Planejamento Financeiro</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-green-500">💰</span>
              <span className="text-green-700 font-medium">Dica Financeira</span>
            </div>
            <p className="text-green-600 text-sm mt-1">
              Este assistente oferece orientações gerais. Consulte um consultor financeiro para planejamento personalizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">💵 Renda Mensal</h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Salário</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="5000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Renda Extra</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="500" />
                </div>
                <div className="p-2 bg-green-50 rounded">
                  <span className="text-sm font-medium text-green-800">Total: R$ 5.500</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">💸 Gastos Mensais</h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Moradia</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="2000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alimentação</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="800" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Transporte</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="400" />
                </div>
                <div className="p-2 bg-red-50 rounded">
                  <span className="text-sm font-medium text-red-800">Total: R$ 3.200</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Resumo</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Renda</span>
                  <span className="text-sm font-medium text-green-600">R$ 5.500</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Gastos</span>
                  <span className="text-sm font-medium text-red-600">R$ 3.200</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Saldo</span>
                  <span className="text-sm font-medium text-blue-600">R$ 2.300</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Margem</span>
                  <span className="text-sm font-medium text-green-600">42%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🎯 Metas Financeiras</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta de Poupança</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="50000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prazo (meses)</label>
                  <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="24" />
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="font-medium text-blue-900">Valor Mensal Necessário</h4>
                <p className="text-blue-700 text-lg font-semibold">R$ 2.083</p>
                <p className="text-blue-600 text-sm">Baseado na meta de R$ 50.000 em 24 meses</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Investimentos</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tesouro Selic</span>
                  <span className="text-sm font-medium text-green-600">R$ 1.000</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">CDB</span>
                  <span className="text-sm font-medium text-green-600">R$ 500</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Ações</span>
                  <span className="text-sm font-medium text-green-600">R$ 300</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Total Investido</span>
                  <span className="text-sm font-medium text-green-600">R$ 1.800</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">💡 Recomendações</h3>
              <div className="space-y-2">
                <div className="p-2 bg-green-50 rounded text-sm">
                  <strong>✓</strong> Reserve 20% da renda para investimentos
                </div>
                <div className="p-2 bg-blue-50 rounded text-sm">
                  <strong>✓</strong> Mantenha 6 meses de gastos em reserva de emergência
                </div>
                <div className="p-2 bg-yellow-50 rounded text-sm">
                  <strong>⚠</strong> Evite dívidas com juros altos
                </div>
                <div className="p-2 bg-purple-50 rounded text-sm">
                  <strong>📊</strong> Diversifique seus investimentos
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
              💰 Analisar Finanças
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              📊 Gerar Relatório
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
              📈 Simular Investimentos
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
