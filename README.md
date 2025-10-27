# Contexto → Mídias

Sistema que transforma contextos (texto, PDF, URLs) em mídias (apresentações PDF, scripts de vídeo/áudio).

## 🚀 Instalação e Execução

### Pré-requisitos
- Python 3.13+
- Node.js 18+
- Chave API OpenAI (opcional)

### 1. Backend (FastAPI)

```bash
cd server

# Criar ambiente virtual
python3 -m venv venv

# Ativar ambiente virtual
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt
pip install openai python-dotenv

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env e adicionar sua chave OpenAI

# Executar servidor
python3 -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 2. Frontend (React + Vite)

```bash
cd web

# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev
```

### 3. Acessar a Aplicação

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **Documentação**: http://localhost:8000/docs

## 🔧 Configuração OpenAI

Para usar IA real (opcional):

1. Crie um arquivo `.env` em `server/`:
```env
AI_PROVIDER=openai
OPENAI_API_KEY=sk-sua-chave-aqui
ALLOWED_ORIGINS=http://localhost:5173
```

2. Sem a chave, o sistema funciona em modo "stub" (demonstração)

## 📋 Funcionalidades

### Ingestão de Conteúdo
- **Texto**: Cole texto diretamente
- **Arquivos**: Upload de PDF, TXT, MD
- **URLs**: Preview e seleção de links

### Geração de Mídia
- **Roteiros**: Narração ou Podcast
- **Apresentações**: PDF com slides
- **Idiomas**: Português (pt-br) ou Inglês (en)

### Download
- PDFs gerados ficam disponíveis para download
- URLs de download automáticas

## 🏗️ Arquitetura

```
server/
├── app/
│   ├── main.py          # FastAPI app
│   ├── config.py         # Configurações
│   ├── schemas.py        # Modelos Pydantic
│   ├── storage.py        # Armazenamento em memória
│   ├── routers/          # Endpoints API
│   └── services/         # Lógica de negócio
└── requirements.txt

web/
├── src/
│   ├── App.tsx           # Componente principal
│   ├── components/       # Componentes React
│   ├── utils/api.ts      # Cliente HTTP
│   └── types.ts          # Tipos TypeScript
└── package.json
```

## 🔄 Modo de Uso

1. **Adicionar Conteúdo**: Use as abas para inserir texto, arquivos ou URLs
2. **Configurar Saída**: Escolha formato (apresentação), idioma e tipo
3. **Gerar**: Clique em "Gerar" para processar
4. **Download**: Baixe o PDF gerado

## 🛠️ Desenvolvimento

### Estrutura da API

- `POST /ingest/text` - Inserir texto
- `POST /ingest/file` - Upload de arquivo
- `POST /ingest/url/preview` - Preview de URL
- `POST /ingest/url/fetch` - Buscar conteúdo de URL
- `POST /generate/script` - Gerar roteiro
- `POST /generate/pdf` - Gerar PDF
- `GET /download/{asset_id}` - Download de arquivo

### Próximas Implementações

- [ ] Geração de áudio (TTS)
- [ ] Geração de vídeo
- [ ] Integração com Google AI
- [ ] Persistência em banco de dados
- [ ] Autenticação de usuários
