import os
from pathlib import Path
from dotenv import load_dotenv

# Carregar variáveis do arquivo .env
load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

AI_PROVIDER = os.getenv("AI_PROVIDER", "stub")  # 'openai' | 'google' | 'stub'
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")

ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "*").split(",")
