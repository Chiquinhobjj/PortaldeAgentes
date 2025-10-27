const API = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function ingestText(text: string){
  const r = await fetch(`${API}/ingest/text`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({text}) });
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function ingestFile(file: File){
  const formData = new FormData();
  formData.append('file', file);
  
  const r = await fetch(`${API}/ingest/file`, { 
    method:'POST', 
    body: formData 
  });
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function urlPreview(url: string){
  const r = await fetch(`${API}/ingest/url/preview`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({url}) });
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function urlFetch(url: string, includeLinks: string[]){
  const r = await fetch(`${API}/ingest/url/fetch`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({url, includeLinks}) });
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function generateScript(sourceIds: string[], tipo: 'narracao'|'podcast', outputLanguage: 'pt-br'|'en'){
  const r = await fetch(`${API}/generate/script`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({sourceIds, outputType:'video', outputLanguage, tipo})});
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function generatePdf(presentation: any){
  const r = await fetch(`${API}/generate/pdf`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({presentation})});
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}
