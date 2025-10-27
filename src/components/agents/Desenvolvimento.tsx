import React from 'react';

// === AGENTES DE DESENVOLVIMENTO ===

export const ProgramadorPythonAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Programador Python</h1>
        <p className="text-gray-600">Especialista em Python que escreve, debuga e otimiza código</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Editor de Código Python</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🐍 Código Python</h3>
              <textarea 
                placeholder="# Digite seu código Python aqui...
def hello_world():
    print('Hello, World!')
    return 'Success'

# Exemplo de uso
if __name__ == '__main__':
    result = hello_world()
    print(f'Resultado: {result}')"
                className="w-full h-64 p-3 border border-gray-300 rounded-lg font-mono text-sm bg-gray-900 text-green-400"
              />
              <div className="mt-2 flex gap-2">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm">
                  ▶️ Executar
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                  🔍 Debug
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                  ⚡ Otimizar
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Resultado</h3>
              <div className="w-full h-64 p-3 border border-gray-300 rounded-lg bg-gray-900 text-green-400 font-mono text-sm overflow-y-auto">
                <div className="text-gray-500">Resultado da execução aparecerá aqui...</div>
              </div>
              <div className="mt-2 flex gap-2">
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm">
                  📋 Copiar
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm">
                  📁 Salvar
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔧 Ferramentas</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  📝 Gerar código
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  🐛 Debug automático
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  ⚡ Otimização
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100">
                  📚 Documentação
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📚 Bibliotecas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">NumPy</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Pandas</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Django</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">FastAPI</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Estatísticas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Linhas de código</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Funções</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Complexidade</span>
                  <span className="text-sm font-medium text-green-600">Baixa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ArquitetoSoftwareAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Arquiteto de Software</h1>
        <p className="text-gray-600">Projeta arquiteturas robustas e escaláveis para seus projetos</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Design de Arquitetura</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🏗️ Projeto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Projeto</label>
                <input 
                  type="text" 
                  placeholder="Ex: Sistema de E-commerce"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Sistema</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>API</option>
                  <option>Microservices</option>
                  <option>Monolito</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Requisitos</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Usuários Concorrentes</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>1-100</option>
                    <option>100-1K</option>
                    <option>1K-10K</option>
                    <option>10K+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Volume de Dados</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Pequeno (&lt; 1GB)</option>
                    <option>Médio (1GB - 100GB)</option>
                    <option>Grande (100GB - 1TB)</option>
                    <option>Muito Grande (&gt; 1TB)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Latência</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Baixa (&lt; 100ms)</option>
                    <option>Média (100ms - 1s)</option>
                    <option>Alta (&gt; 1s)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🏛️ Padrões Arquiteturais</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">MVC (Model-View-Controller)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Microservices</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Event-Driven</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">CQRS</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Hexagonal Architecture</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📐 Diagrama de Arquitetura</h3>
            <div className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🏗️</div>
                <p className="text-gray-600">Diagrama de arquitetura será gerado aqui</p>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                🎨 Gerar Arquitetura
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium">
                📋 Copiar Diagrama
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
                💾 Salvar Projeto
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔧 Tecnologias</h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Frontend:</strong> React, Vue, Angular
                </div>
                <div className="text-sm">
                  <strong>Backend:</strong> Node.js, Python, Java
                </div>
                <div className="text-sm">
                  <strong>Database:</strong> PostgreSQL, MongoDB
                </div>
                <div className="text-sm">
                  <strong>Cloud:</strong> AWS, Azure, GCP
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Métricas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Escalabilidade</span>
                  <span className="text-sm font-medium text-green-600">Alta</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Manutenibilidade</span>
                  <span className="text-sm font-medium text-green-600">Alta</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Performance</span>
                  <span className="text-sm font-medium text-green-600">Alta</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📚 Documentação</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📋 Especificação técnica
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  🏗️ Guia de implementação
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  🔧 Checklist de deploy
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📊 Métricas de monitoramento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TestadorAutomaticoAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Testador Automático</h1>
        <p className="text-gray-600">Cria testes automatizados completos para garantir qualidade do código</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Geração de Testes</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📝 Código para Testar</h3>
            <textarea 
              placeholder="def calcular_imc(peso, altura):
    if peso <= 0 or altura <= 0:
        raise ValueError('Peso e altura devem ser positivos')
    return peso / (altura ** 2)

def classificar_imc(imc):
    if imc < 18.5:
        return 'Abaixo do peso'
    elif imc < 25:
        return 'Peso normal'
    elif imc < 30:
        return 'Sobrepeso'
    else:
        return 'Obesidade'"
              className="w-full h-40 p-3 border border-gray-300 rounded-lg font-mono text-sm bg-gray-900 text-green-400"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚙️ Configurações de Teste</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Framework</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>pytest</option>
                    <option>unittest</option>
                    <option>nose2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Teste</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm">Testes Unitários</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Testes de Integração</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Testes de Performance</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cobertura Mínima</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>80%</option>
                    <option>90%</option>
                    <option>95%</option>
                    <option>100%</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Funções analisadas</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Testes gerados</span>
                  <span className="text-sm font-medium">0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Cobertura estimada</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Casos de borda</span>
                  <span className="text-sm font-medium">0</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🧪 Testes Gerados</h3>
            <div className="w-full h-64 p-3 border border-gray-300 rounded-lg bg-gray-900 text-green-400 font-mono text-sm overflow-y-auto">
              <div className="text-gray-500">Testes automatizados aparecerão aqui...</div>
            </div>
            <div className="mt-2 flex gap-2">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium">
                🧪 Gerar Testes
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
                ▶️ Executar Testes
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium">
                📋 Copiar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">✅ Resultados</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Testes passaram</span>
                  <span className="text-sm font-medium text-green-600">0/0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Testes falharam</span>
                  <span className="text-sm font-medium text-red-600">0/0</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Cobertura real</span>
                  <span className="text-sm font-medium">0%</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔍 Análise</h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Casos de teste:</strong> Validação de entrada, casos extremos, cenários de erro
                </div>
                <div className="text-sm">
                  <strong>Mocking:</strong> Dependências externas simuladas
                </div>
                <div className="text-sm">
                  <strong>Assertions:</strong> Verificações automáticas de resultado
                </div>
                <div className="text-sm">
                  <strong>Fixtures:</strong> Dados de teste reutilizáveis
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Relatórios</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📊 Relatório de cobertura
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  🐛 Análise de bugs
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  ⚡ Performance
                </button>
                <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 text-sm">
                  📋 Exportar resultados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);