#!/bin/bash

echo "🚀 Iniciando Oráculo RAG..."

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Criando ambiente virtual..."
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install dependencies
echo "📦 Instalando dependências..."
pip install -r requirements.txt

# Copy environment template if .env doesn't exist
if [ ! -f ".env" ]; then
    echo "⚙️ Copiando template de configuração..."
    cp env_template.txt .env
    echo "⚠️ Configure o arquivo .env com suas chaves de API"
fi

echo "📡 Iniciando backend na porta 8000..."
cd backend && source ../venv/bin/activate && python app/main.py &
BACKEND_PID=$!

echo "🎨 Iniciando frontend na porta 8001..."
cd ../frontend && python3 -m http.server 8001 &
FRONTEND_PID=$!

echo "✅ Oráculo RAG iniciado!"
echo "📡 Backend: http://localhost:8000"
echo "🎨 Frontend: http://localhost:8001"
echo "📚 Docs: http://localhost:8000/docs"
echo ""
echo "Para parar os serviços:"
echo "kill $BACKEND_PID $FRONTEND_PID"