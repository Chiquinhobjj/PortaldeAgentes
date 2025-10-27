import { useState } from 'react'
import { urlPreview, urlFetch } from '../../utils/api'
export default function UrlInput({onAdded}:{onAdded:(ids:string[])=>void}){
  const [url,setUrl] = useState('')
  const [links,setLinks] = useState<{href:string,title:string}[]|null>(null)
  async function preview(){
    const r = await urlPreview(url)
    setLinks(r.links)
  }
  async function fetchSelected(){
    const selected = Array.from(document.querySelectorAll<HTMLInputElement>('input[data-href]:checked')).map(i => i.dataset.href!)
    const r = await urlFetch(url, selected)
    onAdded(r.sourceIds)
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://exemplo.com/docs" className="flex-1 p-2 border rounded dark:bg-neutral-900 dark:border-neutral-800" />
        <button onClick={preview} className="px-3 py-1 rounded border">Listar Sublinks</button>
      </div>
      {links && (
        <div className="max-h-56 overflow-auto border rounded p-2 space-y-1 dark:border-neutral-800">
          {links.map((l,i)=> (
            <label key={i} className="flex items-center gap-2 text-sm">
              <input type="checkbox" data-href={l.href} />
              <span className="truncate">{l.title || l.href}</span>
            </label>
          ))}
          <div className="pt-2">
            <button onClick={fetchSelected} className="px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black">Incluir Selecionados</button>
          </div>
        </div>
      )}
    </div>
  )
}
