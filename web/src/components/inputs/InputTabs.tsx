import { useState } from 'react'
import TextInputArea from './TextInputArea'
import UrlInput from './UrlInput'
import FileUpload from './FileUpload'
export default function InputTabs({onSourceAdd}:{onSourceAdd:(ids:string[]|string)=>void}){
  const [tab, setTab] = useState<'text'|'files'|'url'>('text')
  return (
    <div>
      <div className="flex gap-2 mb-3">
        {['text','files','url'].map(t => (
          <button key={t} onClick={()=>setTab(t as any)} className={`px-3 py-1 rounded border text-sm ${tab===t?'bg-black text-white dark:bg-white dark:text-black':''}`}>{t==='text'?'Colar Texto':t==='files'?'Enviar Arquivos':'A partir de URL'}</button>
        ))}
      </div>
      {tab==='text' && <TextInputArea onAdded={sid=>onSourceAdd(sid)} />}
      {tab==='files' && <FileUpload />}
      {tab==='url' && <UrlInput onAdded={(ids)=>onSourceAdd(ids)} />}
    </div>
  )
}
