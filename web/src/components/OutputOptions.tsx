import { useState } from 'react'
export default function OutputOptions({onChange}:{onChange:(cfg:{format:'video'|'audio'|'presentation'|'pptx', idioma:'pt-br'|'en', tipo:'narracao'|'podcast'})=>void}){
  const [format,setFormat] = useState<'video'|'audio'|'presentation'|'pptx'>('presentation')
  const [idioma,setIdioma] = useState<'pt-br'|'en'>('pt-br')
  const [tipo,setTipo] = useState<'narracao'|'podcast'>('narracao')
  function emit(){ onChange({format, idioma, tipo}) }
  return (
    <div className="border rounded p-3 space-y-3 dark:border-neutral-800">
      <div className="font-medium">Configurações de Saída</div>
      <div className="flex flex-wrap gap-2 items-center">
        <label className="text-sm">Formato:</label>
        {(['video','audio','presentation','pptx'] as const).map(f => (
          <label key={f} className="text-sm flex items-center gap-1"><input type="radio" name="fmt" defaultChecked={f==='presentation'} onChange={()=>{setFormat(f); emit()}}/> {f==='presentation'? 'Apresentação (PDF)': f.toUpperCase()}</label>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <label className="text-sm">Idioma de Saída:</label>
        <select defaultValue={idioma} onChange={e=>{setIdioma(e.target.value as any); emit()}} className="p-1 border rounded text-sm dark:bg-neutral-900 dark:border-neutral-800">
          <option value="pt-br">Português (Brasil)</option>
          <option value="en">Inglês</option>
        </select>
      </div>
      <div className="flex gap-3 items-center">
        <label className="text-sm">Estilo de Áudio:</label>
        <select defaultValue={tipo} onChange={e=>{setTipo(e.target.value as any); emit()}} className="p-1 border rounded text-sm dark:bg-neutral-900 dark:border-neutral-800">
          <option value="narracao">Narrador único</option>
          <option value="podcast">Podcast (duas vozes)</option>
        </select>
      </div>
      <button onClick={emit} className="px-3 py-1 border rounded text-sm">Aplicar</button>
    </div>
  )
}
