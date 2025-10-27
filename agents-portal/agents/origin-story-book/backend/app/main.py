from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os
from dotenv import load_dotenv
import uuid
from datetime import datetime
import json

# OpenAI Agents SDK
try:
    from agents import Agent, Runner, function_tool
    AGENTS_AVAILABLE = True
except ImportError:
    AGENTS_AVAILABLE = False
    print("⚠️ OpenAI Agents SDK não disponível. Usando implementação simplificada.")

load_dotenv()

app = FastAPI(title="Origin Story Book", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class StoryRequest(BaseModel):
    character_name: str
    character_description: str
    world_setting: str
    story_type: str = "hero"  # hero, villain, antihero, mentor
    tone: str = "epic"  # epic, dark, comedic, mysterious
    length: str = "medium"  # short, medium, long
    additional_details: Optional[str] = None

class StoryResponse(BaseModel):
    story_id: str
    title: str
    story: str
    character_arc: str
    world_details: str
    themes: List[str]
    created_at: datetime
    metadata: Dict[str, Any]

class StoryAnalysis(BaseModel):
    story_id: str
    analysis: Dict[str, Any]
    suggestions: List[str]
    rating: float

# Function tools for agents
@function_tool
def generate_character_background(name: str, description: str) -> str:
    """Generate detailed character background"""
    return f"Background gerado para {name}: {description} - História de origem detalhada criada."

@function_tool
def create_world_setting(setting: str) -> str:
    """Create detailed world setting"""
    return f"Mundo criado: {setting} - Ambiente detalhado estabelecido."

@function_tool
def develop_story_structure(story_type: str, tone: str) -> str:
    """Develop story structure and pacing"""
    return f"Estrutura desenvolvida para história {story_type} com tom {tone}."

# Initialize agents if SDK is available
if AGENTS_AVAILABLE:
    # Character Development Agent
    character_agent = Agent(
        name="Character Developer",
        instructions="""You are a master character developer specializing in creating compelling origin stories. 
        Focus on psychological depth, motivations, and character growth. Create believable characters with 
        clear arcs and development potential.""",
        tools=[generate_character_background],
        model="gpt-4o-mini"
    )
    
    # World Building Agent
    world_agent = Agent(
        name="World Builder",
        instructions="""You are an expert world builder who creates immersive, detailed settings for stories. 
        Focus on consistency, depth, and atmosphere. Create worlds that feel lived-in and authentic.""",
        tools=[create_world_setting],
        model="gpt-4o-mini"
    )
    
    # Story Structure Agent
    story_agent = Agent(
        name="Story Architect",
        instructions="""You are a story architect who specializes in narrative structure, pacing, and plot development. 
        Create engaging stories with proper pacing, conflict, and resolution.""",
        tools=[develop_story_structure],
        model="gpt-4o-mini"
    )
    
    # Main Story Generator Agent
    main_agent = Agent(
        name="Origin Story Generator",
        instructions="""You are a master storyteller who creates compelling origin stories. You coordinate with 
        character development, world building, and story structure to create complete, engaging origin stories. 
        Always create stories that are emotionally resonant and narratively satisfying.""",
        handoffs=[character_agent, world_agent, story_agent],
        model="gpt-4o-mini"
    )

# In-memory storage
STORIES_DB = {}
ANALYSES_DB = {}

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "Origin Story Book",
        "agents_available": AGENTS_AVAILABLE,
        "stories_count": len(STORIES_DB)
    }

@app.get("/")
async def root():
    return {
        "message": "Origin Story Book - Gerador de Histórias de Origem",
        "version": "1.0.0",
        "features": [
            "Geração de histórias de origem com IA",
            "Desenvolvimento de personagens",
            "Construção de mundos",
            "Análise de estrutura narrativa",
            "Múltiplos tipos de história",
            "Agentes especializados"
        ],
        "agents_sdk": AGENTS_AVAILABLE
    }

@app.post("/stories/generate")
async def generate_story(request: StoryRequest):
    """Generate an origin story using AI agents"""
    try:
        story_id = str(uuid.uuid4())
        
        if AGENTS_AVAILABLE:
            # Use OpenAI Agents SDK
            prompt = f"""
            Create an origin story for:
            - Character: {request.character_name} - {request.character_description}
            - World: {request.world_setting}
            - Type: {request.story_type}
            - Tone: {request.tone}
            - Length: {request.length}
            - Additional details: {request.additional_details or 'None'}
            
            Create a complete origin story with character development, world building, and narrative structure.
            """
            
            result = await Runner.run(main_agent, prompt)
            story_content = result.final_output
        else:
            # Fallback implementation
            story_content = f"""
            # A Origem de {request.character_name}
            
            ## O Mundo
            {request.world_setting}
            
            ## O Personagem
            {request.character_name} era {request.character_description}. 
            Sua jornada começou quando...
            
            ## A História
            Em um mundo onde {request.world_setting.lower()}, {request.character_name} descobriu seu verdadeiro destino.
            Com um tom {request.tone}, esta é a história de como tudo começou...
            
            ## Desenvolvimento
            Através de desafios e descobertas, {request.character_name} evoluiu de {request.character_description.lower()} 
            para se tornar um verdadeiro {request.story_type}.
            
            ## Conclusão
            Esta é apenas o início da jornada de {request.character_name}, mas já podemos ver 
            os elementos que moldarão seu futuro...
            """
        
        # Create story response
        story_response = StoryResponse(
            story_id=story_id,
            title=f"A Origem de {request.character_name}",
            story=story_content,
            character_arc=f"Desenvolvimento de {request.character_name} de {request.character_description} para {request.story_type}",
            world_details=request.world_setting,
            themes=["origem", "desenvolvimento", "destino", "crescimento"],
            created_at=datetime.now(),
            metadata={
                "character_name": request.character_name,
                "character_description": request.character_description,
                "world_setting": request.world_setting,
                "story_type": request.story_type,
                "tone": request.tone,
                "length": request.length,
                "agents_used": AGENTS_AVAILABLE
            }
        )
        
        STORIES_DB[story_id] = story_response
        
        return {
            "message": "História de origem gerada com sucesso",
            "story": story_response
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao gerar história: {str(e)}")

@app.post("/stories/{story_id}/analyze")
async def analyze_story(story_id: str):
    """Analyze a generated story"""
    try:
        if story_id not in STORIES_DB:
            raise HTTPException(status_code=404, detail="História não encontrada")
        
        story = STORIES_DB[story_id]
        
        # Simple analysis (can be enhanced with AI)
        analysis = {
            "character_development": "Bom desenvolvimento do personagem principal",
            "world_building": "Mundo bem estabelecido e consistente",
            "narrative_structure": "Estrutura narrativa sólida",
            "pacing": "Ritmo adequado para o tipo de história",
            "themes": story.themes,
            "word_count": len(story.story.split()),
            "readability": "Acessível para o público-alvo"
        }
        
        suggestions = [
            "Considere adicionar mais detalhes sobre o mundo",
            "Desenvolva mais os conflitos internos do personagem",
            "Explore mais as consequências das ações do personagem"
        ]
        
        rating = 8.5  # Simulated rating
        
        story_analysis = StoryAnalysis(
            story_id=story_id,
            analysis=analysis,
            suggestions=suggestions,
            rating=rating
        )
        
        ANALYSES_DB[story_id] = story_analysis
        
        return {
            "message": "Análise concluída",
            "analysis": story_analysis
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao analisar história: {str(e)}")

@app.get("/stories")
async def list_stories():
    """List all generated stories"""
    return {
        "stories": [
            {
                "story_id": story.story_id,
                "title": story.title,
                "character_name": story.metadata.get("character_name"),
                "story_type": story.metadata.get("story_type"),
                "tone": story.metadata.get("tone"),
                "created_at": story.created_at,
                "themes": story.themes
            }
            for story in STORIES_DB.values()
        ],
        "total": len(STORIES_DB)
    }

@app.get("/stories/{story_id}")
async def get_story(story_id: str):
    """Get a specific story"""
    if story_id not in STORIES_DB:
        raise HTTPException(status_code=404, detail="História não encontrada")
    
    return STORIES_DB[story_id]

@app.get("/stories/{story_id}/analysis")
async def get_story_analysis(story_id: str):
    """Get analysis for a story"""
    if story_id not in ANALYSES_DB:
        raise HTTPException(status_code=404, detail="Análise não encontrada")
    
    return ANALYSES_DB[story_id]

@app.delete("/stories/{story_id}")
async def delete_story(story_id: str):
    """Delete a story"""
    if story_id not in STORIES_DB:
        raise HTTPException(status_code=404, detail="História não encontrada")
    
    del STORIES_DB[story_id]
    if story_id in ANALYSES_DB:
        del ANALYSES_DB[story_id]
    
    return {"message": "História removida com sucesso"}

@app.get("/story-types")
async def get_story_types():
    """Get available story types and configurations"""
    return {
        "story_types": [
            {"id": "hero", "name": "Herói", "description": "Jornada do herói clássica"},
            {"id": "villain", "name": "Vilão", "description": "Origem de um antagonista"},
            {"id": "antihero", "name": "Anti-herói", "description": "Protagonista moralmente ambíguo"},
            {"id": "mentor", "name": "Mentor", "description": "Guia sábio e experiente"}
        ],
        "tones": [
            {"id": "epic", "name": "Épico", "description": "Grandioso e inspirador"},
            {"id": "dark", "name": "Sombrio", "description": "Melancólico e intenso"},
            {"id": "comedic", "name": "Cômico", "description": "Humorístico e leve"},
            {"id": "mysterious", "name": "Misterioso", "description": "Enigmático e intrigante"}
        ],
        "lengths": [
            {"id": "short", "name": "Curto", "description": "1-2 páginas"},
            {"id": "medium", "name": "Médio", "description": "3-5 páginas"},
            {"id": "long", "name": "Longo", "description": "6+ páginas"}
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3001)
