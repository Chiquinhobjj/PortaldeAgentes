#!/bin/bash

echo "🚀 Iniciando Agents Portal..."

# Verificar se estamos no diretório correto
if [ ! -d "backend" ] || [ ! -d "frontend" ]; then
    echo "❌ Execute este script no diretório agents-portal"
    exit 1
fi

# Função para verificar se uma porta está em uso
check_port() {
    lsof -ti:$1 > /dev/null 2>&1
}

# Verificar portas necessárias
echo "🔍 Verificando portas..."

if check_port 8001; then
    echo "⚠️  Porta 8001 (backend) já está em uso"
else
    echo "✅ Porta 8001 (backend) disponível"
fi

if check_port 3000; then
    echo "⚠️  Porta 3000 (frontend) já está em uso"
else
    echo "✅ Porta 3000 (frontend) disponível"
fi

# Instalar dependências do backend
echo "📦 Instalando dependências do backend..."
cd backend
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt
cd ..

# Instalar dependências do frontend
echo "📦 Instalando dependências do frontend..."
cd frontend
npm install
cd ..

echo "✅ Setup concluído!"
echo ""
echo "Para iniciar o sistema:"
echo "1. Backend:  cd backend && source venv/bin/activate && python -m app.main"
echo "2. Frontend: cd frontend && npm run dev"
echo ""
echo "Acesse: http://localhost:3000"