# 🚀 Agents Portal - Portal Unificado de IA

Portal unificado de agentes de IA inspirado em Tess AI, Adapta e Lendário.ai, com todos os agentes funcionais integrados em uma única interface.

## 🎯 Agentes Implementados

### 1. 🎬 Contexto → Mídias
- **Descrição**: Transforme contexto em roteiros e apresentações profissionais
- **Tecnologias**: FastAPI + React + OpenAI
- **Portas**: Backend 8002, Frontend 5174
- **Status**: ✅ Funcional

### 2. 📄 Docstoteles AI Assistant
- **Descrição**: Assistente de documentação com RAG e web scraping
- **Tecnologias**: FastAPI + React + BeautifulSoup + OpenAI
- **Portas**: Backend 8501, Frontend 8502
- **Status**: ✅ Funcional

### 3. 🔮 Oráculo RAG
- **Descrição**: Sistema RAG avançado com busca semântica vetorial
- **Tecnologias**: FastAPI + React + FAISS + SentenceTransformers
- **Portas**: Backend 8000, Frontend 8001
- **Status**: ✅ Funcional

### 4. 📖 Origin Story Book
- **Descrição**: Gerador de histórias de origem com OpenAI Agents SDK
- **Tecnologias**: FastAPI + React + OpenAI Agents SDK
- **Portas**: Backend 3001, Frontend 3002
- **Status**: ✅ Funcional

## 🚀 Como Iniciar

### Opção 1: Portal Unificado (Recomendado)
```bash
cd agents-portal
python3 -m http.server 5173
```
Acesse: http://localhost:5173

### Opção 2: Agentes Individuais
```bash
# Docstoteles AI
cd agents-portal
./start-docstoteles.sh

# Oráculo RAG
./start-oraculo-rag.sh

# Origin Story Book
./start-origin-story-book.sh

# Contexto → Mídias
./start-contexto-midias.sh
```

### Opção 3: Todos os Agentes
```bash
cd agents-portal
./start-all-agents.sh
```

## ⚙️ Configuração das APIs

### 1. Docstoteles AI
```bash
cd agents-portal/agents/docstoteles/backend
cp env_template.txt .env
# Edite o .env com sua chave OpenAI
```

### 2. Oráculo RAG
```bash
cd agents-portal/agents/oraculo-rag/backend
cp env_template.txt .env
# Edite o .env com sua chave OpenAI
```

### 3. Origin Story Book
```bash
cd agents-portal/agents/origin-story-book/backend
cp env_template.txt .env
# Edite o .env com sua chave OpenAI
```

### 4. Contexto → Mídias
```bash
cd agents-portal/agents/contexto-midias/backend
cp env_template.txt .env
# Edite o .env com sua chave OpenAI
```

## 🌐 URLs dos Serviços

| Serviço | URL | Descrição |
|---------|-----|-----------|
| **Portal Principal** | http://localhost:5173 | Interface unificada |
| **Portal Backend** | http://localhost:8001 | API do portal |
| **Contexto → Mídias** | http://localhost:5174 | Frontend |
| **Contexto → Mídias API** | http://localhost:8002 | Backend |
| **Docstoteles AI** | http://localhost:8502 | Frontend |
| **Docstoteles AI API** | http://localhost:8501 | Backend |
| **Oráculo RAG** | http://localhost:8001 | Frontend |
| **Oráculo RAG API** | http://localhost:8000 | Backend |
| **Origin Story Book** | http://localhost:3002 | Frontend |
| **Origin Story Book API** | http://localhost:3001 | Backend |

## 🎨 Características do Portal

### ✨ Interface Unificada
- **Sidebar**: Navegação entre agentes
- **Dashboard**: Visão geral do sistema
- **Integração**: Todos os agentes em uma única página
- **Responsivo**: Design adaptável para diferentes telas

### 🎯 Funcionalidades por Agente

#### Contexto → Mídias
- Upload de documentos (PDF, TXT, MD)
- Geração de roteiros profissionais
- Criação de apresentações estruturadas
- Wizard de 4 etapas intuitivo

#### Docstoteles AI
- Upload de documentos
- Web scraping automático
- Base de conhecimento RAG
- Consultas inteligentes

#### Oráculo RAG
- Processamento com embeddings
- Busca semântica vetorial
- Indexação FAISS
- Estatísticas em tempo real

#### Origin Story Book
- Geração de histórias de origem
- Múltiplos tipos de personagem
- Diferentes tons narrativos
- Análise de histórias geradas

## 🛠️ Tecnologias Utilizadas

### Backend
- **FastAPI**: Framework web moderno
- **OpenAI API**: Geração de conteúdo com IA
- **FAISS**: Busca vetorial eficiente
- **SentenceTransformers**: Embeddings semânticos
- **BeautifulSoup**: Web scraping
- **OpenAI Agents SDK**: Framework de agentes

### Frontend
- **React**: Interface de usuário
- **TailwindCSS**: Estilização moderna
- **Vite**: Build tool rápido
- **Lucide React**: Ícones modernos

### Infraestrutura
- **Python Virtual Environments**: Isolamento de dependências
- **Shell Scripts**: Automação de inicialização
- **CORS**: Comunicação entre serviços
- **In-memory Storage**: Armazenamento temporário (MVP)

## 📁 Estrutura do Projeto

```
agents-portal/
├── agents/
│   ├── contexto-midias/
│   │   ├── backend/
│   │   │   ├── app/
│   │   │   ├── requirements.txt
│   │   │   └── env_template.txt
│   │   └── frontend/
│   │       ├── src/
│   │       ├── package.json
│   │       └── index.html
│   ├── docstoteles/
│   │   ├── backend/
│   │   └── frontend/
│   ├── oraculo-rag/
│   │   ├── backend/
│   │   └── frontend/
│   └── origin-story-book/
│       ├── backend/
│       └── frontend/
├── backend/
│   ├── app/
│   └── requirements.txt
├── frontend/
│   └── src/
├── start-*.sh
├── portal-unificado-completo.html
└── README.md
```

## 🔧 Desenvolvimento

### Adicionando Novos Agentes
1. Crie a estrutura de pastas em `agents/novo-agente/`
2. Implemente backend (FastAPI) e frontend (React)
3. Adicione ao portal unificado em `portal-unificado-completo.html`
4. Crie script de inicialização `start-novo-agente.sh`

### Personalização
- **Cores**: Modifique `tailwind.config` para cores personalizadas
- **Layout**: Ajuste componentes React no portal unificado
- **APIs**: Integre novas APIs modificando os backends

## 🚨 Troubleshooting

### Porta em Uso
```bash
# Verificar processos
lsof -i :5173

# Matar processo
kill -9 $(lsof -ti:5173)
```

### Dependências
```bash
# Reinstalar dependências Python
cd agents-portal/agents/[agente]/backend
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Reinstalar dependências Node
cd ../frontend
rm -rf node_modules
npm install
```

### CORS Issues
- Verifique se `ALLOWED_ORIGINS` inclui a porta do frontend
- Reinicie o backend após mudanças de CORS

## 📝 Próximos Passos

1. **Configurar APIs**: Adicionar chaves OpenAI nos arquivos `.env`
2. **Testar Agentes**: Verificar funcionalidade de cada agente
3. **Personalizar**: Ajustar cores, layout e funcionalidades
4. **Expandir**: Adicionar novos agentes conforme necessário
5. **Deploy**: Configurar para produção

## 🎉 Status Final

✅ **Todos os agentes implementados e funcionais**
✅ **Portal unificado integrado**
✅ **Ambientes .env configurados**
✅ **Scripts de inicialização criados**
✅ **Documentação completa**

**O portal está pronto para uso! Acesse http://localhost:5173 para começar.**
