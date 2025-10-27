from typing import List
import os
from openai import OpenAI
from ..schemas import ScriptJson, PresentationJson, SourceItem
from ..config import AI_PROVIDER, OPENAI_API_KEY

def generate_script_from_sources(sources: List[SourceItem], output_language: str, tipo: str) -> ScriptJson:
    # Converter dicionários para SourceItem se necessário
    source_items = []
    for s in sources:
        if isinstance(s, dict):
            source_items.append(SourceItem(**s))
        else:
            source_items.append(s)
    
    joined = "\n\n".join([s.text or s.meta.get('desc','') or '' for s in source_items])
    
    # Tentar usar OpenAI se configurado
    if AI_PROVIDER == 'openai' and OPENAI_API_KEY and OPENAI_API_KEY != 'sk-your-openai-api-key-here':
        try:
            client = OpenAI(api_key=OPENAI_API_KEY)
            
            # Preparar prompt baseado no tipo
            if tipo == 'podcast':
                prompt = f"""Crie um roteiro de podcast em {output_language} baseado no seguinte conteúdo:

{joined[:3000]}

O roteiro deve ter:
- Título atrativo
- 3-6 partes com falas entre dois apresentadores (A e B)
- Cada parte deve ter tempo estimado em segundos
- Falas naturais e envolventes
- Legenda resumida para cada parte

Formato JSON:
{{
  "titulo": "Título do Podcast",
  "tipo": "podcast",
  "lingua": "{output_language}",
  "partes": [
    {{
      "id": "p1",
      "tempo_estimado_seg": 30,
      "falas": [
        {{"speaker": "A", "texto": "Fala do apresentador A"}},
        {{"speaker": "B", "texto": "Fala do apresentador B"}}
      ],
      "legenda": "Resumo da parte"
    }}
  ]
}}"""
            else:  # narração
                prompt = f"""Crie um roteiro de narração em {output_language} baseado no seguinte conteúdo:

{joined[:3000]}

O roteiro deve ter:
- Título atrativo
- 3-6 partes com narração fluida
- Cada parte deve ter tempo estimado em segundos
- Texto claro e envolvente
- Legenda resumida para cada parte

Formato JSON:
{{
  "titulo": "Título da Narração",
  "tipo": "narracao",
  "lingua": "{output_language}",
  "partes": [
    {{
      "id": "p1",
      "tempo_estimado_seg": 30,
      "falas": [
        {{"speaker": "NARRADOR", "texto": "Texto da narração"}}
      ],
      "legenda": "Resumo da parte"
    }}
  ]
}}"""

            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7,
                max_tokens=2000
            )
            
            # Tentar extrair JSON da resposta
            content = response.choices[0].message.content
            import json
            try:
                # Procurar por JSON na resposta
                start = content.find('{')
                end = content.rfind('}') + 1
                if start != -1 and end != 0:
                    json_str = content[start:end]
                    script_data = json.loads(json_str)
                    return ScriptJson.model_validate(script_data)
            except (json.JSONDecodeError, ValueError):
                pass  # Fallback para modo stub
                
        except Exception as e:
            print(f"Erro OpenAI: {e}")
            pass  # Fallback para modo stub
    
    # Modo stub (fallback)
    partes = []
    chunks = [c.strip() for c in joined.split('\n\n') if c.strip()] or ["Conteúdo não fornecido"]
    for idx, ch in enumerate(chunks[:8]):
        partes.append({
            'id': f'p{idx+1}',
            'tempo_estimado_seg': max(4, min(20, len(ch)//20)),
            'falas': (
                [{'speaker':'A','texto': ch[: max(40, len(ch)//2)]}, {'speaker':'B','texto': ch[max(40, len(ch)//2):]}]
                if tipo == 'podcast' else [{'speaker':'NARRADOR','texto': ch}]
            ),
            'legenda': ch[:120]
        })
    payload = {'titulo':'Roteiro (Stub)', 'tipo': tipo, 'lingua': output_language, 'partes': partes}
    return ScriptJson.model_validate(payload)

def generate_presentation_stub(sources: List[SourceItem], output_language: str) -> PresentationJson:
    joined = "\n\n".join([s.text or s.meta.get('desc','') or '' for s in sources])
    bullets = [b.strip() for b in joined.split('\n') if b.strip()][:10] or ["Slide de exemplo"]
    slides = []
    for i, b in enumerate(bullets):
        slides.append({
            'titulo': f'Slide {i+1}',
            'legenda': b,
            'prompt_visual': f"Ilustração minimalista relacionada a: {b[:80]}"
        })
    payload = {'titulo_principal': 'Apresentação (Stub)', 'slides': slides}
    return PresentationJson.model_validate(payload)
