from typing import List, Dict
from .models.agent import Agent, Category, AgentStatus

# Configuração dos agentes disponíveis - Baseado no OpenAI Agents Python
AGENTS_CONFIG = [
    # === AGENTES ORIGINAIS ===
    {
        "id": "contexto-midias",
        "name": "Contexto → Mídias",
        "description": "Transforme contexto em roteiros e apresentações profissionais",
        "category": "Mídia & Conteúdo",
        "color": "from-blue-500 to-cyan-500",
        "icon": "video",
        "url": "http://localhost:5174",
        "port": 5174,
        "path": "../contexto-midias",
        "start_command": "cd web && npm run dev -- --port 5174",
        "features": ["Geração de roteiros", "Criação de apresentações", "Upload de arquivos", "IA OpenAI"]
    },
    {
        "id": "docstoteles",
        "name": "Docstoteles AI",
        "description": "Assistente de documentação com RAG e web scraping",
        "category": "Documentação & RAG",
        "color": "from-purple-500 to-pink-500",
        "icon": "document",
        "url": "http://localhost:8501",
        "port": 8501,
        "path": "../docstoteles",
        "start_command": "streamlit run Home.py",
        "features": ["RAG", "Web Scraping", "Chat com documentos", "Streamlit UI"]
    },
    {
        "id": "oraculo-rag",
        "name": "Oráculo RAG",
        "description": "Sistema RAG avançado com multitask processing",
        "category": "Documentação & RAG",
        "color": "from-green-500 to-teal-500",
        "icon": "database",
        "url": "http://localhost:8000",
        "port": 8000,
        "path": "../oraculo-rag/multitask_fastapi",
        "start_command": "uvicorn main:app --reload",
        "features": ["RAG Multitask", "FastAPI", "Knowledge Base", "Processamento paralelo"]
    },
    {
        "id": "origin-story-book",
        "name": "Origin Story Book",
        "description": "Gerador de histórias de origem com IA",
        "category": "Mídia & Conteúdo",
        "color": "from-amber-500 to-orange-500",
        "icon": "book",
        "url": "http://localhost:3001",
        "port": 3001,
        "path": "../origin-story-book",
        "start_command": "npm run dev",
        "features": ["Geração de histórias", "Estrutura narrativa", "Animações SVG", "React"]
    },
    
    # === AGENTES BASEADOS NO OPENAI AGENTS PYTHON ===
    
    # === ASSISTENTES INTELIGENTES ===
    {
        "id": "assistente-geral",
        "name": "Assistente Geral",
        "description": "Seu assistente pessoal que ajuda com qualquer tarefa do dia a dia",
        "category": "Assistentes Inteligentes",
        "color": "from-indigo-500 to-purple-500",
        "icon": "user",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Conversação natural", "Respostas inteligentes", "Memória de contexto", "Multi-tarefas"]
    },
    {
        "id": "tradutor-universal",
        "name": "Tradutor Universal",
        "description": "Traduz textos entre qualquer idioma com precisão e contexto",
        "category": "Assistentes Inteligentes",
        "color": "from-teal-500 to-cyan-500",
        "icon": "globe",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["100+ idiomas", "Tradução contextual", "Preservação de tom", "Detecção automática"]
    },
    {
        "id": "resumidor-inteligente",
        "name": "Resumidor Inteligente",
        "description": "Cria resumos perfeitos de textos longos mantendo o essencial",
        "category": "Assistentes Inteligentes",
        "color": "from-emerald-500 to-green-500",
        "icon": "file-text",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Resumos personalizados", "Múltiplos formatos", "Pontos-chave", "Análise de sentimento"]
    },
    
    # === AGENTES DE DESENVOLVIMENTO ===
    {
        "id": "programador-python",
        "name": "Programador Python",
        "description": "Especialista em Python que escreve, debuga e otimiza código",
        "category": "Desenvolvimento",
        "color": "from-yellow-500 to-orange-500",
        "icon": "code",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Código Python", "Debug automático", "Otimização", "Boas práticas"]
    },
    {
        "id": "arquiteto-software",
        "name": "Arquiteto de Software",
        "description": "Projeta arquiteturas robustas e escaláveis para seus projetos",
        "category": "Desenvolvimento",
        "color": "from-blue-600 to-indigo-600",
        "icon": "layers",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Arquitetura limpa", "Padrões de design", "Escalabilidade", "Documentação técnica"]
    },
    {
        "id": "testador-automatico",
        "name": "Testador Automático",
        "description": "Cria testes automatizados completos para garantir qualidade do código",
        "category": "Desenvolvimento",
        "color": "from-red-500 to-pink-500",
        "icon": "shield-check",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Testes unitários", "Testes de integração", "Cobertura de código", "CI/CD"]
    },
    
    # === AGENTES DE ANÁLISE DE DADOS ===
    {
        "id": "analista-dados",
        "name": "Analista de Dados",
        "description": "Transforma dados brutos em insights valiosos para decisões",
        "category": "Análise & Dados",
        "color": "from-purple-600 to-violet-600",
        "icon": "bar-chart",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Análise estatística", "Visualizações", "Machine Learning", "Relatórios"]
    },
    {
        "id": "cientista-dados",
        "name": "Cientista de Dados",
        "description": "Cria modelos de IA e machine learning para prever o futuro",
        "category": "Análise & Dados",
        "color": "from-cyan-600 to-blue-600",
        "icon": "brain",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Machine Learning", "Deep Learning", "Previsões", "Otimização"]
    },
    {
        "id": "visualizador-dados",
        "name": "Visualizador de Dados",
        "description": "Cria gráficos e dashboards lindos para contar histórias com dados",
        "category": "Análise & Dados",
        "color": "from-pink-500 to-rose-500",
        "icon": "chart-pie",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Dashboards interativos", "Gráficos dinâmicos", "Storytelling", "Exportação"]
    },
    
    # === AGENTES DE MARKETING ===
    {
        "id": "copywriter",
        "name": "Copywriter",
        "description": "Escreve textos persuasivos que vendem e engajam audiências",
        "category": "Marketing & Vendas",
        "color": "from-orange-500 to-red-500",
        "icon": "pen-tool",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Copy persuasivo", "Anúncios", "Email marketing", "SEO"]
    },
    {
        "id": "estrategista-marketing",
        "name": "Estrategista de Marketing",
        "description": "Desenvolve estratégias completas para aumentar vendas e engajamento",
        "category": "Marketing & Vendas",
        "color": "from-green-600 to-emerald-600",
        "icon": "target",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Estratégias digitais", "Personas", "Funil de vendas", "Métricas"]
    },
    {
        "id": "gerador-conteudo",
        "name": "Gerador de Conteúdo",
        "description": "Cria conteúdo original para blogs, redes sociais e campanhas",
        "category": "Marketing & Vendas",
        "color": "from-violet-500 to-purple-500",
        "icon": "edit-3",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Blog posts", "Redes sociais", "Newsletters", "Conteúdo viral"]
    },
    
    # === AGENTES DE EDUCAÇÃO ===
    {
        "id": "professor-personalizado",
        "name": "Professor Personalizado",
        "description": "Adapta explicações ao seu nível de conhecimento e estilo de aprendizado",
        "category": "Educação",
        "color": "from-blue-500 to-indigo-500",
        "icon": "graduation-cap",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Explicações adaptadas", "Exercícios práticos", "Avaliações", "Progresso"]
    },
    {
        "id": "criador-cursos",
        "name": "Criador de Cursos",
        "description": "Desenvolve cursos online estruturados e envolventes",
        "category": "Educação",
        "color": "from-teal-500 to-cyan-500",
        "icon": "book-open",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Estrutura de curso", "Materiais didáticos", "Avaliações", "Certificados"]
    },
    {
        "id": "tutor-programacao",
        "name": "Tutor de Programação",
        "description": "Ensina programação passo a passo com projetos práticos",
        "category": "Educação",
        "color": "from-green-500 to-emerald-500",
        "icon": "terminal",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Linguagens múltiplas", "Projetos práticos", "Code review", "Portfolio"]
    },
    
    # === AGENTES DE NEGÓCIOS ===
    {
        "id": "consultor-negocios",
        "name": "Consultor de Negócios",
        "description": "Analisa seu negócio e sugere melhorias para crescimento",
        "category": "Negócios",
        "color": "from-gray-600 to-slate-600",
        "icon": "briefcase",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Análise SWOT", "Plano de negócios", "Estratégias", "Métricas"]
    },
    {
        "id": "analista-financeiro",
        "name": "Analista Financeiro",
        "description": "Analisa investimentos e ajuda a tomar decisões financeiras",
        "category": "Negócios",
        "color": "from-green-600 to-teal-600",
        "icon": "dollar-sign",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Análise de investimentos", "Orçamento", "Projeções", "Riscos"]
    },
    {
        "id": "gerenciador-projetos",
        "name": "Gerenciador de Projetos",
        "description": "Organiza e acompanha projetos do início ao fim",
        "category": "Negócios",
        "color": "from-indigo-500 to-blue-500",
        "icon": "calendar",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Planejamento", "Cronogramas", "Recursos", "Relatórios"]
    },
    
    # === AGENTES DE CRIATIVIDADE ===
    {
        "id": "escritor-criativo",
        "name": "Escritor Criativo",
        "description": "Escreve histórias, roteiros e conteúdo criativo original",
        "category": "Criatividade",
        "color": "from-purple-500 to-pink-500",
        "icon": "feather",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Ficção", "Roteiros", "Poesia", "Personagens"]
    },
    {
        "id": "designer-grafico",
        "name": "Designer Gráfico",
        "description": "Cria designs visuais incríveis para qualquer projeto",
        "category": "Criatividade",
        "color": "from-pink-500 to-rose-500",
        "icon": "palette",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Logos", "Banners", "Cartões", "Branding"]
    },
    {
        "id": "compositor-musical",
        "name": "Compositor Musical",
        "description": "Compõe melodias e letras para diferentes estilos musicais",
        "category": "Criatividade",
        "color": "from-yellow-500 to-orange-500",
        "icon": "music",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Melodias", "Letras", "Arranjos", "Partituras"]
    },
    
    # === AGENTES DE PRODUTIVIDADE ===
    {
        "id": "organizador-pessoal",
        "name": "Organizador Pessoal",
        "description": "Organiza sua vida pessoal e profissional para máxima eficiência",
        "category": "Produtividade",
        "color": "from-emerald-500 to-green-500",
        "icon": "check-square",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Agenda", "Tarefas", "Metas", "Hábitos"]
    },
    {
        "id": "assistente-reuniao",
        "name": "Assistente de Reunião",
        "description": "Organiza reuniões, toma notas e cria resumos automáticos",
        "category": "Produtividade",
        "color": "from-blue-500 to-cyan-500",
        "icon": "users",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Agendamento", "Notas", "Resumos", "Ações"]
    },
    {
        "id": "otimizador-tempo",
        "name": "Otimizador de Tempo",
        "description": "Analisa como você usa o tempo e sugere melhorias",
        "category": "Produtividade",
        "color": "from-orange-500 to-red-500",
        "icon": "clock",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Análise de tempo", "Blocos de foco", "Pausas", "Métricas"]
    },
    
    # === AGENTES CHATKIT & AGENT BUILDER ===
    
    # === CHAT INTELIGENTE ===
    {
        "id": "chatkit-conversacional",
        "name": "ChatKit Conversacional",
        "description": "Chat avançado com OpenAI ChatKit e Agent Builder para conversas inteligentes",
        "category": "Chat Inteligente",
        "color": "from-blue-600 to-indigo-600",
        "icon": "message-circle",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["ChatKit", "Agent Builder", "Workflows", "Sessões"]
    },
    {
        "id": "assistente-workflow",
        "name": "Assistente Workflow",
        "description": "Automatiza fluxos de trabalho complexos com Agent Builder",
        "category": "Chat Inteligente",
        "color": "from-purple-600 to-violet-600",
        "icon": "workflow",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Workflows", "Automação", "Integração", "APIs"]
    },
    {
        "id": "chat-multimodal",
        "name": "Chat Multimodal",
        "description": "Chat que entende texto, imagens, áudio e vídeo",
        "category": "Chat Inteligente",
        "color": "from-pink-600 to-rose-600",
        "icon": "camera",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Multimodal", "Imagens", "Áudio", "Vídeo"]
    },
    
    # === AGENTES ESPECIALIZADOS ===
    {
        "id": "assistente-medico",
        "name": "Assistente Médico",
        "description": "Assistente especializado em saúde e medicina com validação científica",
        "category": "Especializados",
        "color": "from-red-500 to-pink-500",
        "icon": "heart",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Saúde", "Medicina", "Sintomas", "Prevenção"]
    },
    {
        "id": "assistente-juridico",
        "name": "Assistente Jurídico",
        "description": "Especialista em direito e questões legais com base em jurisprudência",
        "category": "Especializados",
        "color": "from-gray-700 to-slate-700",
        "icon": "scale",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Direito", "Jurisprudência", "Contratos", "Leis"]
    },
    {
        "id": "assistente-financeiro",
        "name": "Assistente Financeiro",
        "description": "Especialista em finanças pessoais e investimentos",
        "category": "Especializados",
        "color": "from-green-600 to-emerald-600",
        "icon": "trending-up",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Investimentos", "Orçamento", "Poupança", "Aposentadoria"]
    },
    {
        "id": "assistente-academico",
        "name": "Assistente Acadêmico",
        "description": "Especialista em pesquisa acadêmica e metodologia científica",
        "category": "Especializados",
        "color": "from-indigo-600 to-blue-600",
        "icon": "graduation-cap",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Pesquisa", "Metodologia", "Citações", "Teses"]
    },
    
    # === AGENTES DE AUTOMAÇÃO ===
    {
        "id": "automatizador-tarefas",
        "name": "Automatizador de Tarefas",
        "description": "Automatiza tarefas repetitivas e processos de trabalho",
        "category": "Automação",
        "color": "from-cyan-500 to-blue-500",
        "icon": "zap",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["RPA", "Automação", "Workflows", "Integração"]
    },
    {
        "id": "integracao-apis",
        "name": "Integração de APIs",
        "description": "Conecta diferentes sistemas e APIs para criar soluções integradas",
        "category": "Automação",
        "color": "from-teal-500 to-cyan-500",
        "icon": "link",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["APIs", "Integração", "Webhooks", "Sincronização"]
    },
    {
        "id": "monitor-sistema",
        "name": "Monitor de Sistema",
        "description": "Monitora sistemas e infraestrutura com alertas inteligentes",
        "category": "Automação",
        "color": "from-orange-500 to-red-500",
        "icon": "activity",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Monitoramento", "Alertas", "Métricas", "Logs"]
    },
    
    # === AGENTES DE IA AVANÇADA ===
    {
        "id": "gerador-codigo-ia",
        "name": "Gerador de Código IA",
        "description": "Gera código completo em múltiplas linguagens usando IA avançada",
        "category": "IA Avançada",
        "color": "from-yellow-500 to-orange-500",
        "icon": "code-2",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Code Generation", "Multi-language", "Debug", "Optimization"]
    },
    {
        "id": "analisador-sentimento",
        "name": "Analisador de Sentimento",
        "description": "Analisa sentimentos e emoções em textos e conversas",
        "category": "IA Avançada",
        "color": "from-purple-500 to-pink-500",
        "icon": "heart-pulse",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Sentiment Analysis", "Emotion Detection", "NLP", "Psychology"]
    },
    {
        "id": "gerador-conteudo-ia",
        "name": "Gerador de Conteúdo IA",
        "description": "Cria conteúdo original usando IA generativa avançada",
        "category": "IA Avançada",
        "color": "from-green-500 to-teal-500",
        "icon": "sparkles",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Content Generation", "Creative Writing", "SEO", "Branding"]
    },
    
    # === AGENTES GOOGLE AGENT SDK ===
    
    # === PESQUISA E ACADÊMICO ===
    {
        "id": "assistente-pesquisa-academica",
        "name": "Assistente de Pesquisa Acadêmica",
        "description": "Ajuda pesquisadores a identificar publicações recentes e descobrir novas áreas de pesquisa",
        "category": "Pesquisa & Acadêmico",
        "color": "from-blue-700 to-indigo-700",
        "icon": "search",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Publicações", "Áreas de pesquisa", "Citações", "Revisão por pares"]
    },
    {
        "id": "agente-ciencia-dados",
        "name": "Agente de Ciência de Dados",
        "description": "Realiza análises de dados complexas com consultas em linguagem natural para SQL",
        "category": "Pesquisa & Acadêmico",
        "color": "from-purple-700 to-violet-700",
        "icon": "database",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["SQL Natural", "Análise de dados", "Processamento estruturado", "Visualizações"]
    },
    {
        "id": "sistemas-rag",
        "name": "Sistemas RAG",
        "description": "Fornece respostas baseadas em documentos com citações usando Vertex AI RAG Engine",
        "category": "Pesquisa & Acadêmico",
        "color": "from-teal-700 to-cyan-700",
        "icon": "book-open",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["RAG Engine", "Citações", "Documentos", "Vertex AI"]
    },
    
    # === ATENDIMENTO E SERVIÇOS ===
    {
        "id": "assistente-atendimento-cliente",
        "name": "Assistente de Atendimento ao Cliente",
        "description": "Fornece suporte ao cliente com seleção de produtos e gerenciamento de pedidos",
        "category": "Atendimento & Serviços",
        "color": "from-green-700 to-emerald-700",
        "icon": "headphones",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Suporte", "Produtos", "Pedidos", "Streaming ao vivo"]
    },
    {
        "id": "concierge-viagens",
        "name": "Concierge de Viagens",
        "description": "Auxilia no planejamento de viagens e tarefas digitais com instruções dinâmicas",
        "category": "Atendimento & Serviços",
        "color": "from-orange-700 to-red-700",
        "icon": "map",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Planejamento", "Viagens", "Instruções", "Tarefas digitais"]
    },
    {
        "id": "agente-marketing",
        "name": "Agente de Marketing",
        "description": "Automatiza lançamento de sites e produtos com otimização de domínios e geração de conteúdo",
        "category": "Atendimento & Serviços",
        "color": "from-pink-700 to-rose-700",
        "icon": "megaphone",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Lançamentos", "Otimização", "Conteúdo", "Design de marca"]
    },
    
    # === DESENVOLVIMENTO E ENGENHARIA ===
    {
        "id": "assistente-bugs-software",
        "name": "Assistente de Bugs de Software",
        "description": "Ajuda na resolução de bugs com integração de GitHub e StackOverflow",
        "category": "Desenvolvimento & Engenharia",
        "color": "from-red-700 to-pink-700",
        "icon": "bug",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Debug", "GitHub", "StackOverflow", "Resolução de bugs"]
    },
    {
        "id": "engenharia-ml",
        "name": "Engenharia de Machine Learning",
        "description": "Constrói e treina modelos de ML para alcançar desempenho de ponta",
        "category": "Desenvolvimento & Engenharia",
        "color": "from-indigo-700 to-purple-700",
        "icon": "cpu",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["ML Models", "Treinamento", "Performance", "Algoritmos"]
    },
    {
        "id": "agente-pontuacao-imagens",
        "name": "Agente de Pontuação de Imagens",
        "description": "Gera e avalia imagens quanto à conformidade com políticas usando Imagen",
        "category": "Desenvolvimento & Engenharia",
        "color": "from-cyan-700 to-blue-700",
        "icon": "image",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Geração de imagens", "Avaliação", "Políticas", "Imagen"]
    },
    
    # === AGENTES ELEVENLABS VOICE ===
    
    # === VOZ E ÁUDIO ===
    {
        "id": "assistente-voz-multimodal",
        "name": "Assistente de Voz Multimodal",
        "description": "Agente conversacional com voz natural usando ElevenLabs Voice AI",
        "category": "Voz & Áudio",
        "color": "from-violet-600 to-purple-600",
        "icon": "mic",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Voz natural", "WebRTC", "Multimodal", "Real-time"]
    },
    {
        "id": "agente-conversacional-react",
        "name": "Agente Conversacional React",
        "description": "Agente integrado com React usando ElevenLabs SDK para aplicações web",
        "category": "Voz & Áudio",
        "color": "from-blue-600 to-indigo-600",
        "icon": "message-circle",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["React SDK", "WebRTC", "Event-driven", "Client Tools"]
    },
    {
        "id": "agente-mobile-react-native",
        "name": "Agente Mobile React Native",
        "description": "Agente de voz para aplicações móveis cross-platform com React Native",
        "category": "Voz & Áudio",
        "color": "from-green-600 to-teal-600",
        "icon": "smartphone",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["React Native", "Cross-platform", "Mobile", "LiveKit"]
    },
    
    # === WIDGETS E EMBEDDING ===
    {
        "id": "widget-conversacional",
        "name": "Widget Conversacional",
        "description": "Widget embeddável para integrar agentes de voz em qualquer website",
        "category": "Widgets & Embedding",
        "color": "from-orange-600 to-red-600",
        "icon": "layout",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Embeddable", "Web Component", "Customizable", "Easy Integration"]
    },
    {
        "id": "agente-cli-tools",
        "name": "Agente CLI Tools",
        "description": "Ferramentas CLI para gerenciar agentes como código com versionamento",
        "category": "Widgets & Embedding",
        "color": "from-gray-600 to-slate-600",
        "icon": "terminal",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["CLI Tools", "Version Control", "Templates", "Multi-environment"]
    },
    
    # === INTEGRAÇÕES AVANÇADAS ===
    {
        "id": "integracao-camel",
        "name": "Integração CAMEL",
        "description": "Framework de comunicação multiagente com CAMEL para colaboração entre agentes",
        "category": "Integrações Avançadas",
        "color": "from-amber-600 to-yellow-600",
        "icon": "network",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Multi-agent", "CAMEL", "Collaboration", "Communication"]
    },
    {
        "id": "gemini-fullstack",
        "name": "Gemini Fullstack",
        "description": "Agente de pesquisa fullstack com React frontend, FastAPI backend e workflows",
        "category": "Integrações Avançadas",
        "color": "from-emerald-600 to-green-600",
        "icon": "layers",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Fullstack", "React", "FastAPI", "Human-in-the-loop"]
    },
    {
        "id": "consultor-financeiro-avancado",
        "name": "Consultor Financeiro Avançado",
        "description": "Assistência educacional avançada sobre tópicos financeiros e de investimento",
        "category": "Integrações Avançadas",
        "color": "from-green-700 to-emerald-700",
        "icon": "trending-up",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Educação financeira", "Investimentos", "Análise", "Consultoria"]
    },
    
    # === AGENTES LANGCHAIN DEEP AGENTS ===
    
    # === PESQUISA PROFUNDA ===
    {
        "id": "agente-pesquisa-profunda",
        "name": "Agente de Pesquisa Profunda",
        "description": "Realiza pesquisas complexas com planejamento, subagentes e sistema de arquivos",
        "category": "Pesquisa Profunda",
        "color": "from-indigo-800 to-purple-800",
        "icon": "search",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Planejamento", "Subagentes", "Sistema de arquivos", "Pesquisa web"]
    },
    {
        "id": "agente-analise-complexa",
        "name": "Agente de Análise Complexa",
        "description": "Analisa problemas complexos usando múltiplos subagentes especializados",
        "category": "Pesquisa Profunda",
        "color": "from-purple-800 to-pink-800",
        "icon": "brain",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Análise multi-dimensional", "Subagentes", "Memória persistente", "Relatórios"]
    },
    {
        "id": "agente-desenvolvimento-software",
        "name": "Agente de Desenvolvimento de Software",
        "description": "Desenvolve software completo com planejamento, subagentes e controle de versão",
        "category": "Pesquisa Profunda",
        "color": "from-blue-800 to-cyan-800",
        "icon": "code",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Desenvolvimento completo", "Planejamento", "Subagentes", "Git integration"]
    },
    
    # === AGENTES COM MIDDLEWARE ===
    {
        "id": "agente-todo-list",
        "name": "Agente Todo List",
        "description": "Agente com middleware de planejamento e lista de tarefas dinâmica",
        "category": "Middleware Avançado",
        "color": "from-green-800 to-teal-800",
        "icon": "check-square",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["TodoListMiddleware", "Planejamento dinâmico", "Adaptação", "Tracking"]
    },
    {
        "id": "agente-filesystem",
        "name": "Agente FileSystem",
        "description": "Agente com acesso completo ao sistema de arquivos e memória persistente",
        "category": "Middleware Avançado",
        "color": "from-orange-800 to-red-800",
        "icon": "folder",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["FilesystemMiddleware", "Memória persistente", "ls/read/write/edit", "Contexto"]
    },
    {
        "id": "agente-subagentes",
        "name": "Agente Subagentes",
        "description": "Agente supervisor que coordena múltiplos subagentes especializados",
        "category": "Middleware Avançado",
        "color": "from-teal-800 to-cyan-800",
        "icon": "users",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["SubAgentMiddleware", "Coordenação", "Especialização", "Isolamento"]
    },
    
    # === AGENTES HUMAN-IN-THE-LOOP ===
    {
        "id": "agente-hitl",
        "name": "Agente Human-in-the-Loop",
        "description": "Agente que solicita aprovação humana para operações sensíveis",
        "category": "Human-in-the-Loop",
        "color": "from-yellow-800 to-orange-800",
        "icon": "user-check",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["HITL", "Aprovação humana", "Operações sensíveis", "Controle"]
    },
    {
        "id": "agente-colaborativo",
        "name": "Agente Colaborativo",
        "description": "Agente que trabalha em colaboração com humanos em tempo real",
        "category": "Human-in-the-Loop",
        "color": "from-pink-800 to-rose-800",
        "icon": "handshake",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Colaboração", "Tempo real", "Feedback", "Iteração"]
    },
    
    # === AGENTES MCP ===
    {
        "id": "agente-mcp",
        "name": "Agente MCP",
        "description": "Agente com integração MCP (Model Context Protocol) para ferramentas externas",
        "category": "MCP & Protocolos",
        "color": "from-gray-800 to-slate-800",
        "icon": "network",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["MCP Protocol", "Ferramentas externas", "Multi-server", "Async"]
    },
    {
        "id": "agente-langgraph",
        "name": "Agente LangGraph",
        "description": "Agente construído com LangGraph para workflows complexos",
        "category": "MCP & Protocolos",
        "color": "from-violet-800 to-purple-800",
        "icon": "workflow",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["LangGraph", "Workflows", "State management", "Compiled graphs"]
    },
    
    # === AGENTES ESPECIALIZADOS LANGCHAIN ===
    {
        "id": "agente-documentacao",
        "name": "Agente de Documentação",
        "description": "Cria e mantém documentação técnica usando Deep Agents",
        "category": "Especializados LangChain",
        "color": "from-emerald-800 to-green-800",
        "icon": "book",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Documentação técnica", "API docs", "Tutoriais", "Manuais"]
    },
    {
        "id": "agente-testing",
        "name": "Agente de Testing",
        "description": "Cria e executa testes automatizados com planejamento profundo",
        "category": "Especializados LangChain",
        "color": "from-red-800 to-pink-800",
        "icon": "test-tube",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Testes automatizados", "Unit tests", "Integration tests", "Coverage"]
    },
    {
        "id": "agente-deployment",
        "name": "Agente de Deployment",
        "description": "Automatiza deployment e DevOps com subagentes especializados",
        "category": "Especializados LangChain",
        "color": "from-cyan-800 to-blue-800",
        "icon": "rocket",
        "url": "http://localhost:5173",
        "port": 5173,
        "path": "integrated",
        "start_command": "integrated",
        "features": ["Deployment", "DevOps", "CI/CD", "Infraestrutura"]
    }
]

# Configuração das categorias hierárquicas - Organizadas por grupos principais
CATEGORIES_CONFIG = [
    # === GRUPO PRINCIPAL: ASSISTENTES & IA ===
    {
        "name": "Assistentes & IA",
        "description": "Assistentes inteligentes e agentes de IA avançada",
        "icon": "brain",
        "color": "from-indigo-500 to-purple-500",
        "parent": None,
        "order": 1,
        "subcategories": [
            {
                "name": "Assistentes Inteligentes",
                "description": "Assistentes gerais que ajudam com tarefas do dia a dia",
                "icon": "user",
                "color": "from-indigo-500 to-purple-500"
            },
            {
                "name": "IA Avançada",
                "description": "Agentes com IA generativa e análise avançada",
                "icon": "sparkles",
                "color": "from-green-500 to-teal-500"
            },
            {
                "name": "Chat Inteligente",
                "description": "Agentes de chat avançado com ChatKit e Agent Builder",
                "icon": "message-circle",
                "color": "from-blue-600 to-indigo-600"
            },
            {
                "name": "Especializados",
                "description": "Agentes especializados em áreas específicas",
                "icon": "star",
                "color": "from-purple-600 to-violet-600"
            }
        ]
    },
    
    # === GRUPO PRINCIPAL: DESENVOLVIMENTO & TECNOLOGIA ===
    {
        "name": "Desenvolvimento & Tecnologia",
        "description": "Agentes para programação, desenvolvimento e tecnologia",
        "icon": "code",
        "color": "from-yellow-500 to-orange-500",
        "parent": None,
        "order": 2,
        "subcategories": [
            {
                "name": "Desenvolvimento",
                "description": "Agentes especializados em programação e desenvolvimento",
                "icon": "code",
                "color": "from-yellow-500 to-orange-500"
            },
            {
                "name": "Desenvolvimento & Engenharia",
                "description": "Agentes para desenvolvimento de software e engenharia",
                "icon": "cpu",
                "color": "from-indigo-700 to-purple-700"
            },
            {
                "name": "Automação",
                "description": "Agentes para automação de processos e integração",
                "icon": "zap",
                "color": "from-cyan-500 to-blue-500"
            },
            {
                "name": "Middleware Avançado",
                "description": "Agentes com middleware especializado para funcionalidades avançadas",
                "icon": "layers",
                "color": "from-green-800 to-teal-800"
            }
        ]
    },
    
    # === GRUPO PRINCIPAL: DADOS & ANÁLISE ===
    {
        "name": "Dados & Análise",
        "description": "Agentes para análise de dados, pesquisa e insights",
        "icon": "bar-chart",
        "color": "from-purple-600 to-violet-600",
        "parent": None,
        "order": 3,
        "subcategories": [
            {
                "name": "Análise & Dados",
                "description": "Agentes para análise de dados e machine learning",
                "icon": "bar-chart",
                "color": "from-purple-600 to-violet-600"
            },
            {
                "name": "Pesquisa & Acadêmico",
                "description": "Agentes especializados em pesquisa acadêmica e científica",
                "icon": "search",
                "color": "from-blue-700 to-indigo-700"
            },
            {
                "name": "Pesquisa Profunda",
                "description": "Agentes com capacidades de pesquisa profunda e planejamento complexo",
                "icon": "search",
                "color": "from-indigo-800 to-purple-800"
            },
            {
                "name": "Documentação & RAG",
                "description": "Agentes para processamento de documentos e RAG",
                "icon": "database",
                "color": "from-green-500 to-teal-500"
            }
        ]
    },
    
    # === GRUPO PRINCIPAL: NEGÓCIOS & PRODUTIVIDADE ===
    {
        "name": "Negócios & Produtividade",
        "description": "Agentes para negócios, marketing e produtividade",
        "icon": "briefcase",
        "color": "from-gray-600 to-slate-600",
        "parent": None,
        "order": 4,
        "subcategories": [
            {
                "name": "Negócios",
                "description": "Agentes para consultoria e gestão de negócios",
                "icon": "briefcase",
                "color": "from-gray-600 to-slate-600"
            },
            {
                "name": "Marketing & Vendas",
                "description": "Agentes para marketing digital e estratégias de vendas",
                "icon": "target",
                "color": "from-green-600 to-emerald-600"
            },
            {
                "name": "Produtividade",
                "description": "Agentes para organização e otimização de produtividade",
                "icon": "check-square",
                "color": "from-emerald-500 to-green-500"
            },
            {
                "name": "Atendimento & Serviços",
                "description": "Agentes para atendimento ao cliente e serviços especializados",
                "icon": "headphones",
                "color": "from-green-700 to-emerald-700"
            }
        ]
    },
    
    # === GRUPO PRINCIPAL: CRIATIVIDADE & MÍDIA ===
    {
        "name": "Criatividade & Mídia",
        "description": "Agentes para criação de conteúdo, arte e mídia",
        "icon": "palette",
        "color": "from-pink-500 to-rose-500",
        "parent": None,
        "order": 5,
        "subcategories": [
            {
                "name": "Criatividade",
                "description": "Agentes para criação artística e conteúdo criativo",
                "icon": "palette",
                "color": "from-pink-500 to-rose-500"
            },
            {
                "name": "Mídia & Conteúdo",
                "description": "Agentes para criação de conteúdo e mídia",
                "icon": "video",
                "color": "from-blue-500 to-cyan-500"
            },
            {
                "name": "Educação",
                "description": "Agentes educacionais e tutoriais personalizados",
                "icon": "graduation-cap",
                "color": "from-blue-500 to-indigo-500"
            }
        ]
    },
    
    # === GRUPO PRINCIPAL: VOZ & INTERFACE ===
    {
        "name": "Voz & Interface",
        "description": "Agentes de voz, áudio e interfaces avançadas",
        "icon": "mic",
        "color": "from-violet-600 to-purple-600",
        "parent": None,
        "order": 6,
        "subcategories": [
            {
                "name": "Voz & Áudio",
                "description": "Agentes de voz e áudio com ElevenLabs Voice AI",
                "icon": "mic",
                "color": "from-violet-600 to-purple-600"
            },
            {
                "name": "Widgets & Embedding",
                "description": "Widgets e ferramentas para integração de agentes",
                "icon": "layout",
                "color": "from-orange-600 to-red-600"
            },
            {
                "name": "Human-in-the-Loop",
                "description": "Agentes que trabalham em colaboração com humanos",
                "icon": "user-check",
                "color": "from-yellow-800 to-orange-800"
            }
        ]
    },
    
    # === GRUPO PRINCIPAL: AVANÇADO & PROTOCOLOS ===
    {
        "name": "Avançado & Protocolos",
        "description": "Agentes com tecnologias avançadas e protocolos especiais",
        "icon": "network",
        "color": "from-gray-800 to-slate-800",
        "parent": None,
        "order": 7,
        "subcategories": [
            {
                "name": "MCP & Protocolos",
                "description": "Agentes com integração de protocolos avançados",
                "icon": "network",
                "color": "from-gray-800 to-slate-800"
            },
            {
                "name": "Integrações Avançadas",
                "description": "Agentes com integrações avançadas e frameworks complexos",
                "icon": "network",
                "color": "from-amber-600 to-yellow-600"
            },
            {
                "name": "Especializados LangChain",
                "description": "Agentes especializados baseados no ecossistema LangChain",
                "icon": "book",
                "color": "from-emerald-800 to-green-800"
            }
        ]
    }
]

def get_agents() -> List[Agent]:
    """Retorna lista de agentes configurados"""
    agents = []
    for config in AGENTS_CONFIG:
        agent = Agent(
            id=config["id"],
            name=config["name"],
            description=config["description"],
            category=config["category"],
            color=config["color"],
            icon=config["icon"],
            url=config["url"],
            port=config["port"],
            status=AgentStatus.OFFLINE,  # Será atualizado pelo service
            features=config["features"],
            path=config["path"],
            start_command=config["start_command"]
        )
        agents.append(agent)
    return agents

def get_categories() -> List[Category]:
    """Retorna lista de categorias hierárquicas com contagem de agentes"""
    agents = get_agents()
    categories = []
    
    for config in CATEGORIES_CONFIG:
        # Contar agentes da categoria principal
        main_agent_count = len([a for a in agents if a.category == config["name"]])
        
        # Contar agentes das subcategorias
        subcategory_counts = {}
        total_subcategory_agents = 0
        
        for subcat in config.get("subcategories", []):
            subcat_count = len([a for a in agents if a.category == subcat["name"]])
            subcategory_counts[subcat["name"]] = subcat_count
            total_subcategory_agents += subcat_count
        
        # Total de agentes (principal + subcategorias)
        total_agents = main_agent_count + total_subcategory_agents
        
        category = Category(
            name=config["name"],
            description=config["description"],
            icon=config["icon"],
            color=config["color"],
            agent_count=total_agents,
            parent=config.get("parent"),
            order=config.get("order", 999),
            subcategories=config.get("subcategories", [])
        )
        categories.append(category)
    
    # Ordenar por ordem definida
    categories.sort(key=lambda x: x.order)
    
    return categories

def get_all_subcategories() -> List[Category]:
    """Retorna todas as subcategorias como uma lista plana"""
    agents = get_agents()
    subcategories = []
    
    for config in CATEGORIES_CONFIG:
        for subcat in config.get("subcategories", []):
            agent_count = len([a for a in agents if a.category == subcat["name"]])
            subcategory = Category(
                name=subcat["name"],
                description=subcat["description"],
                icon=subcat["icon"],
                color=subcat["color"],
                agent_count=agent_count,
                parent=config["name"]
            )
            subcategories.append(subcategory)
    
    return subcategories
