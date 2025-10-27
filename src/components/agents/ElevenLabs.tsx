import React from 'react';

// === AGENTES ELEVENLABS VOICE ===

export const AssistenteVozMultimodalAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assistente de Voz Multimodal</h1>
        <p className="text-gray-600">Agente conversacional com voz natural usando ElevenLabs Voice AI</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Conversação com Voz Natural</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🎤 Interface de Voz</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <div className="text-white text-4xl">🎙️</div>
                </div>
                <div className="space-y-2">
                  <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium">
                    🎤 Falar com o Agente
                  </button>
                  <p className="text-sm text-gray-600">Clique e fale naturalmente</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 h-48 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-violet-500 text-white p-3 rounded-lg max-w-xs">
                      <div className="flex items-center gap-2">
                        <span>🎤</span>
                        <span>Olá! Como posso ajudar você hoje?</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
                      <div className="flex items-center gap-2">
                        <span>👤</span>
                        <span>Preciso de ajuda com um projeto de IA</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-violet-500 text-white p-3 rounded-lg max-w-xs">
                      <div className="flex items-center gap-2">
                        <span>🎤</span>
                        <span>Perfeito! Posso ajudar com desenvolvimento, análise de dados, ou automação. O que você tem em mente?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎛️ Configurações de Voz</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Voz do Agente</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Sarah (Feminina, Natural)</option>
                    <option>James (Masculina, Profissional)</option>
                    <option>Emma (Feminina, Amigável)</option>
                    <option>David (Masculina, Autoritativa)</option>
                    <option>Lisa (Feminina, Calma)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Velocidade</label>
                  <input type="range" min="0.5" max="2" step="0.1" className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Lenta</span>
                    <span>Normal</span>
                    <span>Rápida</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tom</label>
                  <input type="range" min="0" max="100" step="5" className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Baixo</span>
                    <span>Médio</span>
                    <span>Alto</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas da Conversa</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tempo de conversa</span>
                  <span className="text-sm font-medium">2m 34s</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Mensagens trocadas</span>
                  <span className="text-sm font-medium">8</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Latência média</span>
                  <span className="text-sm font-medium">180ms</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Qualidade áudio</span>
                  <span className="text-sm font-medium text-green-600">HD</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Confiança STT</span>
                  <span className="text-sm font-medium text-green-600">96%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🔧 Recursos Avançados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🌐</div>
                <h4 className="font-medium text-gray-900">WebRTC</h4>
                <p className="text-sm text-gray-600">Baixa latência</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-medium text-gray-900">STT Avançado</h4>
                <p className="text-sm text-gray-600">Reconhecimento preciso</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="font-medium text-gray-900">TTS Natural</h4>
                <p className="text-sm text-gray-600">Voz humana</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="font-medium text-gray-900">Real-time</h4>
                <p className="text-sm text-gray-600">Resposta instantânea</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium">
              🎤 Iniciar Conversa
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              ⚙️ Configurar Voz
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
              📊 Ver Estatísticas
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AgenteConversacionalReactAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Agente Conversacional React</h1>
        <p className="text-gray-600">Agente integrado com React usando ElevenLabs SDK para aplicações web</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">SDK React Integrado</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">⚛️ Componente React</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-gray-500">// Exemplo de uso do SDK</div>
              <div>import {`{ useConversation }`} from "@elevenlabs/react";</div>
              <div></div>
              <div>const conversation = useConversation({`{`}</div>
              <div>  agentId: "your-agent-id",</div>
              <div>  clientTools: {`{`}</div>
              <div>    logMessage: async ({`{ message }`}) => {`{`}</div>
              <div>      console.log(message);</div>
              <div>    {`}`},</div>
              <div>  {`}`},</div>
              <div>{`}`});</div>
              <div></div>
              <div>conversation.startSession();</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Eventos Disponíveis</h3>
              <div className="space-y-2">
                <div className="p-2 bg-blue-50 rounded text-sm">
                  <strong>onSessionStart:</strong> Sessão iniciada
                </div>
                <div className="p-2 bg-green-50 rounded text-sm">
                  <strong>onMessage:</strong> Nova mensagem recebida
                </div>
                <div className="p-2 bg-yellow-50 rounded text-sm">
                  <strong>onError:</strong> Erro na comunicação
                </div>
                <div className="p-2 bg-purple-50 rounded text-sm">
                  <strong>onSessionEnd:</strong> Sessão finalizada
                </div>
                <div className="p-2 bg-red-50 rounded text-sm">
                  <strong>onAudioStart:</strong> Áudio iniciado
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>onAudioEnd:</strong> Áudio finalizado
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🛠️ Client Tools</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>logMessage:</strong> Log de mensagens
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>saveData:</strong> Salvar dados
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>sendEmail:</strong> Enviar email
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>updateUI:</strong> Atualizar interface
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>callAPI:</strong> Chamar API externa
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>showNotification:</strong> Mostrar notificação
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📱 Interface de Demonstração</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                    <div className="flex items-center gap-2">
                      <span>🤖</span>
                      <span>Olá! Sou seu assistente React integrado.</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
                    <div className="flex items-center gap-2">
                      <span>👤</span>
                      <span>Como você pode me ajudar?</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                    <div className="flex items-center gap-2">
                      <span>🤖</span>
                      <span>Posso executar ações no seu app, fazer chamadas de API, e muito mais!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📦 Instalação</h3>
              <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm">
                <div>npm install @elevenlabs/react</div>
                <div className="text-gray-500"># ou</div>
                <div>yarn add @elevenlabs/react</div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🔧 Configuração</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Agent ID:</strong> Configurado
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>API Key:</strong> Configurada
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Environment:</strong> Development
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <strong>Debug Mode:</strong> Ativado
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Status</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Conexão</span>
                  <span className="text-sm font-medium text-green-600">Ativa</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">WebRTC</span>
                  <span className="text-sm font-medium text-green-600">Conectado</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Latência</span>
                  <span className="text-sm font-medium">120ms</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Versão SDK</span>
                  <span className="text-sm font-medium">2.1.0</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              ⚛️ Inicializar SDK
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
              🎯 Testar Ferramentas
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
              📊 Ver Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const WidgetConversacionalAgent = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Widget Conversacional</h1>
        <p className="text-gray-600">Widget embeddável para integrar agentes de voz em qualquer website</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Widget Embeddável</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">📦 Código de Integração</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div className="text-gray-500">// HTML - Adicione ao seu site</div>
              <div>&lt;script src="https://cdn.elevenlabs.io/widget.js"&gt;&lt;/script&gt;</div>
              <div>&lt;elevenlabs-widget</div>
              <div>  agent-id="your-agent-id"</div>
              <div>  position="bottom-right"</div>
              <div>  theme="light"</div>
              <div>  language="pt-BR"</div>
              <div>&gt;&lt;/elevenlabs-widget&gt;</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎨 Personalização</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Posição</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>bottom-right</option>
                    <option>bottom-left</option>
                    <option>top-right</option>
                    <option>top-left</option>
                    <option>center</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tema</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>light</option>
                    <option>dark</option>
                    <option>auto</option>
                    <option>custom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Idioma</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>pt-BR</option>
                    <option>en-US</option>
                    <option>es-ES</option>
                    <option>fr-FR</option>
                    <option>de-DE</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📊 Estatísticas do Widget</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Sites usando</span>
                  <span className="text-sm font-medium">1,247</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Conversas/mês</span>
                  <span className="text-sm font-medium">45,892</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Taxa de engajamento</span>
                  <span className="text-sm font-medium text-green-600">78%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tempo médio</span>
                  <span className="text-sm font-medium">3m 24s</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">🖥️ Preview do Widget</h3>
            <div className="bg-gray-100 rounded-lg p-8 min-h-64 relative">
              <div className="absolute bottom-4 right-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-white text-2xl">💬</span>
                </div>
              </div>
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🌐</div>
                <p>Seu website aqui</p>
                <p className="text-sm mt-2">Widget aparecerá no canto inferior direito</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">⚙️ Configurações Avançadas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Auto-start</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Persistência</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Analytics</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Debug mode</span>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Casos de Uso</h3>
              <div className="space-y-2">
                <div className="p-2 bg-blue-50 rounded text-sm">
                  <strong>E-commerce:</strong> Suporte ao cliente
                </div>
                <div className="p-2 bg-green-50 rounded text-sm">
                  <strong>SaaS:</strong> Onboarding de usuários
                </div>
                <div className="p-2 bg-purple-50 rounded text-sm">
                  <strong>Educação:</strong> Tutoria personalizada
                </div>
                <div className="p-2 bg-yellow-50 rounded text-sm">
                  <strong>Saúde:</strong> Consultas virtuais
                </div>
                <div className="p-2 bg-red-50 rounded text-sm">
                  <strong>Financeiro:</strong> Consultoria
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Métricas</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Conversões</span>
                  <span className="text-sm font-medium text-green-600">+23%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tempo no site</span>
                  <span className="text-sm font-medium text-green-600">+45%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">Satisfação</span>
                  <span className="text-sm font-medium text-green-600">4.8/5</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">ROI</span>
                  <span className="text-sm font-medium text-green-600">340%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">
              📦 Gerar Código
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              🎨 Personalizar
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
              📊 Ver Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
