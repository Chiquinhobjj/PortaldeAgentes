#!/bin/bash

# Script para iniciar o Contexto → Mídias
echo "🚀 Iniciando Contexto → Mídias..."

# Verificar se estamos no diretório correto
if [ ! -d "agents/contexto-midias" ]; then
    echo "❌ Execute este script a partir do diretório agents-portal"
    exit 1
fi

cd agents/contexto-midias

# Iniciar Backend
echo "📡 Iniciando backend..."
cd backend
if [ ! -d "venv" ]; then
    echo "🔧 Criando ambiente virtual..."
    python3 -m venv venv
fi

source venv/bin/activate
pip install -r requirements.txt

# Iniciar backend em background
echo "🚀 Iniciando API na porta 8002..."
uvicorn app.main:app --reload --host 0.0.0.0 --port 8002 &
BACKEND_PID=$!

# Aguardar backend inicializar
sleep 3

# Iniciar Frontend
echo "🎨 Iniciando frontend..."
cd ../frontend
npm install
echo "🚀 Iniciando frontend na porta 5174..."
npm run dev &
FRONTEND_PID=$!

echo "✅ Contexto → Mídias iniciado!"
echo "📡 Backend: http://localhost:8002"
echo "🎨 Frontend: http://localhost:5174"
echo "📚 Docs: http://localhost:8002/docs"

# Função para parar os serviços
cleanup() {
    echo "🛑 Parando serviços..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

# Capturar Ctrl+C
trap cleanup SIGINT

# Manter script rodando
wait
