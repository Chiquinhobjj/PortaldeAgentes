# 🚀 Portal de Agentes - Sistema Completo

## 📋 Visão Geral

O Portal de Agentes é um sistema que hospeda múltiplos agentes de IA localmente, permitindo gerenciar e usar diferentes ferramentas de IA em um só lugar.

## 🏗️ Estrutura do Sistema

```
agents-portal/
├── index.html                 # Portal principal (porta 5173)
├── backend/                   # API do portal (porta 8001)
├── agents/                    # Agentes hospedados localmente
│   ├── contexto-midias/       # Contexto → Mídias
│   │   ├── backend/           # API (porta 8002)
│   │   └── frontend/          # Interface (porta 5174)
│   ├── docstoteles/           # Docstoteles AI
│   ├── oraculo-rag/           # Oráculo RAG
│   └── origin-story-book/     # Origin Story Book
└── start-contexto-midias.sh   # Script de inicialização
```

## 🎯 Agentes Disponíveis

### 1. **Contexto → Mídias** ✅ IMPLEMENTADO
- **Descrição**: Transforme contexto em roteiros e apresentações profissionais
- **Backend**: http://localhost:8002
- **Frontend**: http://localhost:5174
- **Categoria**: Mídia & Conteúdo
- **Features**: Geração de roteiros, Criação de apresentações, Upload de arquivos, IA OpenAI

### 2. **Docstoteles AI** 🔄 EM DESENVOLVIMENTO
- **Descrição**: Assistente de documentação com RAG e web scraping
- **Porta**: 8501
- **Categoria**: Documentação & RAG
- **Features**: RAG, Web Scraping, Chat com documentos, Streamlit UI

### 3. **Oráculo RAG** 🔄 EM DESENVOLVIMENTO
- **Descrição**: Sistema RAG avançado com multitask processing
- **Porta**: 8000
- **Categoria**: Documentação & RAG
- **Features**: RAG Multitask, FastAPI, Knowledge Base, Processamento paralelo

### 4. **Origin Story Book** 🔄 EM DESENVOLVIMENTO
- **Descrição**: Gerador de histórias de origem com IA
- **Porta**: 3001
- **Categoria**: Mídia & Conteúdo
- **Features**: Geração de histórias, Estrutura narrativa, Animações SVG, React

## 🚀 Como Usar

### 1. **Acessar o Portal Principal**
```bash
# O portal já está rodando em:
http://localhost:5173
```

### 2. **Iniciar o Contexto → Mídias**
```bash
# Opção 1: Usar o script automático
./start-contexto-midias.sh

# Opção 2: Manual
cd agents/contexto-midias/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8002

# Em outro terminal:
cd agents/contexto-midias/frontend
npm install
npm run dev
```

### 3. **Usar o Contexto → Mídias**
1. Acesse http://localhost:5174
2. Cole seu texto ou faça upload de um arquivo
3. Configure o tipo de saída (podcast, apresentação, vídeo)
4. Clique em "Gerar Conteúdo"
5. Visualize e baixe o resultado

## 🔧 Configuração

### **Variáveis de Ambiente**
Crie um arquivo `.env` em `agents/contexto-midias/backend/`:
```env
OPENAI_API_KEY=sua_chave_openai_aqui
AI_PROVIDER=openai
ALLOWED_ORIGINS=http://localhost:5174
```

### **Portas Utilizadas**
- **5173**: Portal Principal
- **8001**: API do Portal
- **5174**: Contexto → Mídias Frontend
- **8002**: Contexto → Mídias Backend

## 📚 API Endpoints

### **Portal Principal**
- `GET /` - Status do portal
- `GET /api/agents` - Lista de agentes
- `GET /api/categories` - Categorias de agentes

### **Contexto → Mídias**
- `GET /` - Status da API
- `GET /health` - Health check
- `POST /ingest/text` - Ingestão de texto
- `POST /ingest/file` - Upload de arquivo
- `POST /generate/script` - Geração de roteiro
- `POST /generate/pdf` - Geração de PDF

## 🎨 Interface

O portal possui:
- **Sidebar** com navegação e categorias
- **Cards dos agentes** com status em tempo real
- **Sistema de busca** e filtros
- **Botões de controle** (iniciar/parar agentes)
- **Design responsivo** inspirado no Dalton Lab

## 🔄 Status dos Agentes

O portal verifica automaticamente o status dos agentes:
- **🟢 Online**: Agente rodando e acessível
- **🔴 Offline**: Agente não está rodando
- **▶️ Botão**: Iniciar agente
- **🛑 Botão**: Parar agente

## 🚧 Próximos Passos

1. **Implementar Docstoteles AI**
2. **Implementar Oráculo RAG**
3. **Implementar Origin Story Book**
4. **Adicionar sistema de logs**
5. **Implementar backup/restore**
6. **Adicionar métricas de uso**

## 🆘 Troubleshooting

### **Problema**: Portal não carrega
**Solução**: Verifique se o servidor HTTP está rodando na porta 5173

### **Problema**: Contexto → Mídias não inicia
**Solução**: 
1. Verifique se as dependências Python estão instaladas
2. Configure a chave OpenAI no arquivo .env
3. Verifique se as portas 8002 e 5174 estão livres

### **Problema**: Erro de CORS
**Solução**: Verifique se `ALLOWED_ORIGINS` está configurado corretamente

---

**🎉 Sistema funcionando! Acesse http://localhost:5173 para começar!**