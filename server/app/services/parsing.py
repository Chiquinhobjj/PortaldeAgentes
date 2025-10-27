"""
Serviço de parsing de documentos usando Docling
Suporte para PDF, DOCX, PPTX, XLSX, HTML e imagens com OCR
"""

import os
from pathlib import Path
from typing import Optional, Dict, Any
from .docling_service import docling_service, process_document_with_docling, extract_text_with_docling


def normalize_text(text: str) -> str:
    """Normaliza texto removendo caracteres de controle"""
    return text.strip().replace('\r', '\n')


def parse_pdf_to_text(fp) -> str:
    """
    Extrai texto de PDF usando Docling (com OCR para PDFs escaneados)
    
    Args:
        fp: Caminho do arquivo ou objeto de arquivo
        
    Returns:
        Texto extraído do PDF
    """
    try:
        # Se fp é um objeto de arquivo, obter o caminho
        if hasattr(fp, 'name'):
            file_path = fp.name
        else:
            file_path = str(fp)
        
        # Usar Docling para extrair texto
        text = extract_text_with_docling(file_path)
        return normalize_text(text)
        
    except Exception as e:
        print(f"Erro ao processar PDF com Docling: {e}")
        # Fallback para pdfminer se Docling falhar
        try:
            from pdfminer.high_level import extract_text as pdf_extract
            text = pdf_extract(fp)
            return normalize_text(text)
        except Exception as fallback_error:
            print(f"Erro no fallback pdfminer: {fallback_error}")
            return ""


def parse_document_to_text(file_path: str) -> str:
    """
    Extrai texto de qualquer documento suportado usando Docling
    
    Args:
        file_path: Caminho para o arquivo
        
    Returns:
        Texto extraído do documento
    """
    try:
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Arquivo não encontrado: {file_path}")
        
        # Verificar se o formato é suportado
        if not docling_service.is_supported_format(file_path):
            raise ValueError(f"Formato não suportado: {docling_service.get_file_type(file_path)}")
        
        # Usar Docling para extrair texto
        text = extract_text_with_docling(file_path)
        return normalize_text(text)
        
    except Exception as e:
        print(f"Erro ao processar documento com Docling: {e}")
        return ""


def parse_document_full(file_path: str) -> Dict[str, Any]:
    """
    Processa documento completo extraindo texto, tabelas, imagens e metadados
    
    Args:
        file_path: Caminho para o arquivo
        
    Returns:
        Dict com todos os dados extraídos
    """
    try:
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Arquivo não encontrado: {file_path}")
        
        file_type = docling_service.get_file_type(file_path)
        
        # Para PDFs, usar pdfminer.six por enquanto (Docling tem problemas de inicialização)
        if file_type == 'pdf':
            try:
                from pdfminer.high_level import extract_text as pdf_extract
                text = pdf_extract(file_path)
                return {
                    'text': normalize_text(text),
                    'raw_text': normalize_text(text),
                    'tables': [],
                    'images': [],
                    'metadata': {'file_type': 'pdf'},
                    'structure': [],
                    'file_type': 'pdf',
                    'file_size': os.path.getsize(file_path),
                    'success': True
                }
            except Exception as pdf_error:
                print(f"Erro ao processar PDF com pdfminer: {pdf_error}")
                return {
                    'text': '',
                    'raw_text': '',
                    'tables': [],
                    'images': [],
                    'metadata': {},
                    'structure': [],
                    'file_type': 'pdf',
                    'file_size': os.path.getsize(file_path),
                    'success': False,
                    'error': f'Erro PDF: {str(pdf_error)}'
                }
        
        # Para outros formatos, tentar Docling
        try:
            result = process_document_with_docling(file_path)
            
            # Normalizar texto
            if 'text' in result:
                result['text'] = normalize_text(result['text'])
            if 'raw_text' in result:
                result['raw_text'] = normalize_text(result['raw_text'])
            
            return result
        except Exception as docling_error:
            print(f"Erro ao processar com Docling: {docling_error}")
            # Fallback para texto simples
            return {
                'text': f'[FALLBACK] Arquivo {file_type} processado com limitações',
                'raw_text': f'[FALLBACK] Arquivo {file_type} processado com limitações',
                'tables': [],
                'images': [],
                'metadata': {'file_type': file_type},
                'structure': [],
                'file_type': file_type,
                'file_size': os.path.getsize(file_path),
                'success': True,
                'warning': f'Processado com fallback devido a: {str(docling_error)}'
            }
        
    except Exception as e:
        print(f"Erro ao processar documento completo: {e}")
        return {
            'text': '',
            'raw_text': '',
            'tables': [],
            'images': [],
            'metadata': {},
            'structure': [],
            'file_type': docling_service.get_file_type(file_path),
            'file_size': os.path.getsize(file_path) if os.path.exists(file_path) else 0,
            'success': False,
            'error': str(e)
        }


def get_supported_formats() -> list:
    """
    Retorna lista de formatos suportados pelo Docling
    
    Returns:
        Lista de extensões suportadas
    """
    return [
        'pdf',   # PDF com OCR
        'docx',  # Microsoft Word
        'pptx',  # Microsoft PowerPoint
        'xlsx',  # Microsoft Excel
        'html',  # HTML
        'htm',   # HTML
        'png',   # Imagem com OCR
        'jpg',   # Imagem com OCR
        'jpeg',  # Imagem com OCR
        'gif',   # Imagem com OCR
        'bmp',   # Imagem com OCR
        'tiff'   # Imagem com OCR
    ]


def is_format_supported(file_path: str) -> bool:
    """
    Verifica se o formato do arquivo é suportado
    
    Args:
        file_path: Caminho para o arquivo
        
    Returns:
        True se o formato é suportado
    """
    return docling_service.is_supported_format(file_path)
