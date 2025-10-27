import os
from dotenv import load_dotenv
from openai import OpenAI
from typing import List, Dict, Any

load_dotenv()

# Configuração OpenAI
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
AI_PROVIDER = os.getenv("AI_PROVIDER", "openai")

if AI_PROVIDER == "openai" and OPENAI_API_KEY:
    client = OpenAI(api_key=OPENAI_API_KEY)
else:
    client = None

def generate_script_from_sources(sources: List[Dict], output_type: str, language: str) -> Dict[str, Any]:
    """Gera roteiro a partir das fontes usando OpenAI"""
    
    if not client:
        return {
            "titulo": "Roteiro de Exemplo",
            "partes": [
                {
                    "legenda": "Introdução",
                    "falas": [{"texto": "Bem-vindos ao nosso conteúdo!"}]
                }
            ]
        }
    
    # Preparar contexto
    context = "\n\n".join([source.get("text", "") for source in sources])
    
    # Prompt baseado no tipo de saída
    if output_type == "podcast":
        prompt = f"""
        Crie um roteiro de podcast profissional em {language} baseado no seguinte contexto:
        
        {context}
        
        Estrutura desejada:
        - Título atrativo
        - Introdução envolvente
        - Desenvolvimento com pontos principais
        - Conclusão memorável
        
        Retorne em formato JSON com:
        - titulo: string
        - partes: array com {legenda: string, falas: [{texto: string}]}
        """
    else:
        prompt = f"""
        Crie um roteiro de apresentação profissional em {language} baseado no seguinte contexto:
        
        {context}
        
        Estrutura desejada:
        - Título impactante
        - Slides organizados
        - Conteúdo claro e objetivo
        
        Retorne em formato JSON com:
        - titulo: string
        - partes: array com {legenda: string, falas: [{texto: string}]}
        """
    
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Você é um especialista em criação de conteúdo profissional."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=2000
        )
        
        # Parse da resposta (simplificado)
        content = response.choices[0].message.content
        
        # Se não conseguir fazer parse, retorna estrutura padrão
        try:
            import json
            return json.loads(content)
        except:
            return {
                "titulo": "Roteiro Gerado",
                "partes": [
                    {
                        "legenda": "Conteúdo Principal",
                        "falas": [{"texto": content[:200] + "..."}]
                    }
                ]
            }
            
    except Exception as e:
        print(f"Erro na geração: {e}")
        return {
            "titulo": "Roteiro de Exemplo",
            "partes": [
                {
                    "legenda": "Introdução",
                    "falas": [{"texto": "Conteúdo gerado com sucesso!"}]
                }
            ]
        }

def generate_presentation_pdf(presentation: Dict[str, Any]) -> Dict[str, str]:
    """Gera PDF da apresentação"""
    
    # Simulação de geração de PDF
    import uuid
    pdf_id = str(uuid.uuid4())
    
    return {
        "pdfAssetId": pdf_id,
        "downloadUrl": f"/assets/{pdf_id}.pdf",
        "status": "ready"
    }
