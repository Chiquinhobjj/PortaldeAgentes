from .config import DATA_DIR
from uuid import uuid4
from pathlib import Path
from typing import Dict

# Armazenamento em memória (MVP)
DB_SOURCES: Dict[str, dict] = {}
DB_ASSETS: Dict[str, Path] = {}

def new_id() -> str:
    return uuid4().hex

def save_source(source: dict) -> str:
    DB_SOURCES[source['id']] = source
    return source['id']

def get_sources(ids):
    return [DB_SOURCES[i] for i in ids if i in DB_SOURCES]

def save_asset(path: Path) -> str:
    asset_id = new_id()
    DB_ASSETS[asset_id] = path
    return asset_id

def get_asset(asset_id: str) -> Path:
    return DB_ASSETS[asset_id]
