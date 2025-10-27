"""
Serviço Docling para processamento avançado de documentos
Suporte para PDF, DOCX, PPTX, XLSX, HTML e imagens com OCR
"""

import os
from pathlib import Path
from typing import Dict, List, Optional, Any
import filetype
from docling.document_converter import DocumentConverter
from docling.datamodel.base_models import InputFormat
from docling.datamodel.pipeline_options import PdfPipelineOptions
from docling.backend.pypdfium2_backend import PyPdfiumDocumentBackend


class DoclingService:
    """Serviço para processamento de documentos usando Docling"""
    
    def __init__(self):
        """Inicializa o conversor Docling"""
        try:
            self.converter = DocumentConverter()
            
            # Configurar opções para PDF
            self.pdf_options = PdfPipelineOptions()
            self.pdf_options.do_ocr = True  # Habilitar OCR para PDFs escaneados
            self.pdf_options.do_table_structure = True  # Extrair estrutura de tabelas
            
            self.initialized = True
        except Exception as e:
            print(f"Erro ao inicializar Docling: {e}")
            self.converter = None
            self.pdf_options = None
            self.initialized = False
        
    def get_file_type(self, file_path: str) -> str:
        """Detecta o tipo de arquivo"""
        try:
            kind = filetype.guess(file_path)
            if kind is None:
                # Fallback para extensão
                ext = Path(file_path).suffix.lower()
                return ext
            return kind.extension
        except Exception:
            return Path(file_path).suffix.lower()
    
    def is_supported_format(self, file_path: str) -> bool:
        """Verifica se o formato é suportado pelo Docling"""
        file_type = self.get_file_type(file_path)
        supported_formats = {
            'pdf', 'docx', 'pptx', 'xlsx', 'html', 'htm',
            'png', 'jpg', 'jpeg', 'gif', 'bmp', 'tiff'
        }
        return file_type in supported_formats
    
    def process_document(self, file_path: str) -> Dict[str, Any]:
        """
        Processa qualquer tipo de documento suportado
        
        Args:
            file_path: Caminho para o arquivo
            
        Returns:
            Dict com texto, tabelas, imagens e metadados
        """
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Arquivo não encontrado: {file_path}")
        
        if not self.is_supported_format(file_path):
            raise ValueError(f"Formato não suportado: {self.get_file_type(file_path)}")
        
        # Verificar se Docling foi inicializado corretamente
        if not self.initialized or self.converter is None:
            return {
                'text': '',
                'raw_text': '',
                'tables': [],
                'images': [],
                'metadata': {},
                'structure': [],
                'file_type': self.get_file_type(file_path),
                'file_size': os.path.getsize(file_path) if os.path.exists(file_path) else 0,
                'success': False,
                'error': 'Docling não foi inicializado corretamente'
            }
        
        try:
            # Converter documento
            result = self.converter.convert(file_path)
            document = result.document
            
            # Extrair informações
            extracted_data = {
                'text': document.export_to_markdown(),
                'raw_text': self._extract_raw_text(document),
                'tables': self._extract_tables(document),
                'images': self._extract_images(document),
                'metadata': self._extract_metadata(document),
                'structure': self._extract_structure(document),
                'file_type': self.get_file_type(file_path),
                'file_size': os.path.getsize(file_path),
                'success': True
            }
            
            return extracted_data
            
        except Exception as e:
            print(f"Erro ao processar documento com Docling: {e}")
            return {
                'text': '',
                'raw_text': '',
                'tables': [],
                'images': [],
                'metadata': {},
                'structure': [],
                'file_type': self.get_file_type(file_path),
                'file_size': os.path.getsize(file_path) if os.path.exists(file_path) else 0,
                'success': False,
                'error': str(e)
            }
    
    def extract_text(self, file_path: str) -> str:
        """Extrai apenas o texto do documento"""
        result = self.process_document(file_path)
        return result.get('text', '')
    
    def extract_tables(self, file_path: str) -> List[Dict[str, Any]]:
        """Extrai tabelas estruturadas do documento"""
        result = self.process_document(file_path)
        return result.get('tables', [])
    
    def extract_images(self, file_path: str) -> List[Dict[str, Any]]:
        """Extrai imagens e informações sobre elas"""
        result = self.process_document(file_path)
        return result.get('images', [])
    
    def to_markdown(self, file_path: str) -> str:
        """Converte documento para Markdown"""
        return self.extract_text(file_path)
    
    def get_document_structure(self, file_path: str) -> List[Dict[str, Any]]:
        """Obtém a estrutura hierárquica do documento"""
        result = self.process_document(file_path)
        return result.get('structure', [])
    
    def _extract_raw_text(self, document) -> str:
        """Extrai texto bruto sem formatação"""
        try:
            # Tentar extrair texto bruto
            text_parts = []
            for element in document.iterate_items():
                if hasattr(element, 'text') and element.text:
                    text_parts.append(element.text.strip())
            return '\n'.join(text_parts)
        except Exception:
            return ''
    
    def _extract_tables(self, document) -> List[Dict[str, Any]]:
        """Extrai tabelas do documento"""
        tables = []
        try:
            for element in document.iterate_items():
                if hasattr(element, 'label') and element.label == 'table':
                    table_data = {
                        'caption': getattr(element, 'caption', ''),
                        'rows': [],
                        'columns': 0
                    }
                    
                    # Extrair dados da tabela
                    if hasattr(element, 'rows'):
                        for row in element.rows:
                            row_data = []
                            for cell in row.cells:
                                row_data.append(cell.text if hasattr(cell, 'text') else '')
                            table_data['rows'].append(row_data)
                            table_data['columns'] = max(table_data['columns'], len(row_data))
                    
                    tables.append(table_data)
        except Exception as e:
            print(f"Erro ao extrair tabelas: {e}")
        
        return tables
    
    def _extract_images(self, document) -> List[Dict[str, Any]]:
        """Extrai informações sobre imagens"""
        images = []
        try:
            for element in document.iterate_items():
                if hasattr(element, 'label') and element.label == 'picture':
                    image_data = {
                        'caption': getattr(element, 'caption', ''),
                        'alt_text': getattr(element, 'alt_text', ''),
                        'description': getattr(element, 'description', ''),
                        'position': getattr(element, 'position', {}),
                    }
                    images.append(image_data)
        except Exception as e:
            print(f"Erro ao extrair imagens: {e}")
        
        return images
    
    def _extract_metadata(self, document) -> Dict[str, Any]:
        """Extrai metadados do documento"""
        metadata = {}
        try:
            if hasattr(document, 'metadata'):
                doc_metadata = document.metadata
                metadata = {
                    'title': getattr(doc_metadata, 'title', ''),
                    'author': getattr(doc_metadata, 'author', ''),
                    'subject': getattr(doc_metadata, 'subject', ''),
                    'creator': getattr(doc_metadata, 'creator', ''),
                    'producer': getattr(doc_metadata, 'producer', ''),
                    'creation_date': getattr(doc_metadata, 'creation_date', ''),
                    'modification_date': getattr(doc_metadata, 'modification_date', ''),
                    'page_count': getattr(doc_metadata, 'page_count', 0),
                }
        except Exception as e:
            print(f"Erro ao extrair metadados: {e}")
        
        return metadata
    
    def _extract_structure(self, document) -> List[Dict[str, Any]]:
        """Extrai estrutura hierárquica (títulos, seções)"""
        structure = []
        try:
            for element in document.iterate_items():
                if hasattr(element, 'label') and element.label in ['heading', 'title']:
                    structure.append({
                        'level': getattr(element, 'level', 1),
                        'text': getattr(element, 'text', ''),
                        'label': element.label,
                        'position': getattr(element, 'position', {}),
                    })
        except Exception as e:
            print(f"Erro ao extrair estrutura: {e}")
        
        return structure
    
    def get_supported_formats(self) -> list:
        """Retorna lista de formatos suportados"""
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


# Instância global do serviço
docling_service = DoclingService()


def process_document_with_docling(file_path: str) -> Dict[str, Any]:
    """
    Função de conveniência para processar documentos com Docling
    
    Args:
        file_path: Caminho para o arquivo
        
    Returns:
        Dict com dados extraídos do documento
    """
    return docling_service.process_document(file_path)


def extract_text_with_docling(file_path: str) -> str:
    """
    Função de conveniência para extrair texto com Docling
    
    Args:
        file_path: Caminho para o arquivo
        
    Returns:
        Texto extraído do documento
    """
    return docling_service.extract_text(file_path)
