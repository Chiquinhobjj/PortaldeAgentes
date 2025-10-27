#!/bin/bash

echo "🚀 INICIANDO TODOS OS AGENTES DO PORTAL UNIFICADO"
echo "=================================================="
echo ""

# Função para verificar se uma porta está em uso
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
        echo "⚠️ Porta $port já está em uso"
        return 1
    else
        echo "✅ Porta $port disponível"
        return 0
    fi
}

# Função para matar processos em portas específicas
kill_port() {
    local port=$1
    local pid=$(lsof -ti:$port)
    if [ ! -z "$pid" ]; then
        echo "🔄 Parando processo na porta $port (PID: $pid)"
        kill -9 $pid
        sleep 2
    fi
}

echo "🔍 Verificando portas..."
check_port 5173  # Portal principal
check_port 8001  # Portal backend
check_port 8501  # Docstoteles backend
check_port 8000  # Oráculo RAG backend
check_port 3001  # Origin Story Book backend

echo ""
echo "🧹 Limpando portas em uso..."
kill_port 5173
kill_port 8001
kill_port 8501
kill_port 8000
kill_port 3001

echo ""
echo "🎯 Iniciando Portal Principal..."
cd agents-portal
python3 -m http.server 5173 &
PORTAL_PID=$!
echo "✅ Portal Principal: http://localhost:5173 (PID: $PORTAL_PID)"

echo ""
echo "📡 Iniciando Backend do Portal..."
cd backend
if [ ! -d "venv" ]; then
    echo "📦 Criando ambiente virtual..."
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8001 &
PORTAL_BACKEND_PID=$!
echo "✅ Portal Backend: http://localhost:8001 (PID: $PORTAL_BACKEND_PID)"

echo ""
echo "🎬 Iniciando Contexto → Mídias..."
cd ../agents/contexto-midias
if [ ! -d "venv" ]; then
    echo "📦 Criando ambiente virtual..."
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
cd backend
python app/main.py &
CONTEXTO_BACKEND_PID=$!
cd ../frontend
npm install > /dev/null 2>&1
npm run dev &
CONTEXTO_FRONTEND_PID=$!
echo "✅ Contexto → Mídias Backend: http://localhost:8002 (PID: $CONTEXTO_BACKEND_PID)"
echo "✅ Contexto → Mídias Frontend: http://localhost:5174 (PID: $CONTEXTO_FRONTEND_PID)"

echo ""
echo "📄 Iniciando Docstoteles AI..."
cd ../../docstoteles
if [ ! -d "venv" ]; then
    echo "📦 Criando ambiente virtual..."
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
cd backend
python app/main.py &
DOCSTOTELES_BACKEND_PID=$!
cd ../frontend
python3 -m http.server 8502 &
DOCSTOTELES_FRONTEND_PID=$!
echo "✅ Docstoteles Backend: http://localhost:8501 (PID: $DOCSTOTELES_BACKEND_PID)"
echo "✅ Docstoteles Frontend: http://localhost:8502 (PID: $DOCSTOTELES_FRONTEND_PID)"

echo ""
echo "🔮 Iniciando Oráculo RAG..."
cd ../../oraculo-rag
if [ ! -d "venv" ]; then
    echo "📦 Criando ambiente virtual..."
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
cd backend
python app/main.py &
ORACULO_BACKEND_PID=$!
cd ../frontend
python3 -m http.server 8001 &
ORACULO_FRONTEND_PID=$!
echo "✅ Oráculo RAG Backend: http://localhost:8000 (PID: $ORACULO_BACKEND_PID)"
echo "✅ Oráculo RAG Frontend: http://localhost:8001 (PID: $ORACULO_FRONTEND_PID)"

echo ""
echo "📖 Iniciando Origin Story Book..."
cd ../../origin-story-book
if [ ! -d "venv" ]; then
    echo "📦 Criando ambiente virtual..."
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt > /dev/null 2>&1
cd backend
python app/main.py &
ORIGIN_BACKEND_PID=$!
cd ../frontend
python3 -m http.server 3002 &
ORIGIN_FRONTEND_PID=$!
echo "✅ Origin Story Book Backend: http://localhost:3001 (PID: $ORIGIN_BACKEND_PID)"
echo "✅ Origin Story Book Frontend: http://localhost:3002 (PID: $ORIGIN_FRONTEND_PID)"

echo ""
echo "🎉 TODOS OS AGENTES INICIADOS COM SUCESSO!"
echo "=========================================="
echo ""
echo "🌐 PORTAL PRINCIPAL:"
echo "   http://localhost:5173"
echo ""
echo "🎬 CONTEXTO → MÍDIAS:"
echo "   Frontend: http://localhost:5174"
echo "   Backend: http://localhost:8002"
echo ""
echo "📄 DOCSTOTELES AI:"
echo "   Frontend: http://localhost:8502"
echo "   Backend: http://localhost:8501"
echo ""
echo "🔮 ORÁCULO RAG:"
echo "   Frontend: http://localhost:8001"
echo "   Backend: http://localhost:8000"
echo ""
echo "📖 ORIGIN STORY BOOK:"
echo "   Frontend: http://localhost:3002"
echo "   Backend: http://localhost:3001"
echo ""
echo "📊 BACKEND DO PORTAL:"
echo "   http://localhost:8001"
echo ""
echo "🛑 Para parar todos os serviços:"
echo "   kill $PORTAL_PID $PORTAL_BACKEND_PID $CONTEXTO_BACKEND_PID $CONTEXTO_FRONTEND_PID $DOCSTOTELES_BACKEND_PID $DOCSTOTELES_FRONTEND_PID $ORACULO_BACKEND_PID $ORACULO_FRONTEND_PID $ORIGIN_BACKEND_PID $ORIGIN_FRONTEND_PID"
echo ""
echo "⚙️ Configure os arquivos .env com suas chaves de API:"
echo "   - agents-portal/agents/docstoteles/backend/env_template.txt"
echo "   - agents-portal/agents/oraculo-rag/backend/env_template.txt"
echo "   - agents-portal/agents/origin-story-book/backend/env_template.txt"
echo ""
echo "🎯 Acesse o portal principal em: http://localhost:5173"