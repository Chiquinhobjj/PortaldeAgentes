#!/bin/bash

echo "🚀 Iniciando Origin Story Book..."

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

echo "📡 Iniciando backend na porta 3001..."
cd backend && source ../venv/bin/activate && python app/main.py &
BACKEND_PID=$!

echo "🎨 Iniciando frontend na porta 3002..."
cd ../frontend && python3 -m http.server 3002 &
FRONTEND_PID=$!

echo "✅ Origin Story Book iniciado!"
echo "📡 Backend: http://localhost:3001"
echo "🎨 Frontend: http://localhost:3002"
echo "📚 Docs: http://localhost:3001/docs"
echo ""
echo "Para parar os serviços:"
echo "kill $BACKEND_PID $FRONTEND_PID"