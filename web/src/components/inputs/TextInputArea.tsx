import { ingestText } from '../../utils/api'
export default function TextInputArea({onAdded}:{onAdded:(sourceId:string)=>void}){
  async function handleAdd(){
    const v = (document.getElementById('txt') as HTMLTextAreaElement).value
    const {sourceId} = await ingestText(v)
    onAdded(sourceId)
  }
  return (
    <div className="flex flex-col gap-2">
      <textarea id="txt" className="min-h-40 p-3 border rounded dark:bg-neutral-900 dark:border-neutral-800" placeholder="Cole seu contexto aqui (artigos, notas, etc.)" />
      <button onClick={handleAdd} className="self-start px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black">Adicionar como Fonte</button>
    </div>
  )
}
