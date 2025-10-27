# Concierge Viagens Agent

Agente de IA especializado em concierge viagens.

## Descrição

Este agente é responsável por concierge viagens e oferece funcionalidades avançadas de processamento e análise.

## Funcionalidades

- Processamento de dados em tempo real
- Análise inteligente de contexto
- Resposta contextual e precisa
- Integração com APIs externas
- Interface RESTful completa

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

## Uso

### Executar o agente

```bash
cd backend
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Endpoints disponíveis

- `GET /` - Informações básicas do agente
- `GET /health` - Health check
- `GET /info` - Informações detalhadas
- `POST /process` - Processar requisição
- `GET /status` - Status do agente

### Exemplo de uso

```python
import requests

# Processar uma requisição
response = requests.post("http://localhost:8000/process", json={
    "input": "dados para processar",
    "context": "contexto adicional"
})

print(response.json())
```

## Configuração

O agente pode ser configurado através de variáveis de ambiente:

- `AGENT_NAME`: Nome do agente
- `AGENT_VERSION`: Versão
- `LOG_LEVEL`: Nível de log
- `API_KEY`: Chave da API (se necessário)

## Desenvolvimento

### Estrutura do projeto

```
concierge-viagens/
├── backend/
│   ├── app/
│   │   ├── main.py          # Aplicação principal
│   │   ├── routers/         # Endpoints
│   │   ├── services/        # Lógica de negócio
│   │   ├── schemas/         # Modelos de dados
│   │   └── models/          # Modelos de banco
│   └── requirements.txt     # Dependências
├── frontend/                # Interface web (opcional)
├── docs/                    # Documentação
├── tests/                   # Testes
└── README.md               # Este arquivo
```

### Testes

```bash
pytest tests/
```

### Linting

```bash
black app/
flake8 app/
mypy app/
```

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
