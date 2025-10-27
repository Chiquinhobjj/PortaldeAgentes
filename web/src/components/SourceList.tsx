export default function SourceList({ids}:{ids:string[]}){
  if(!ids.length) return null
  return (
    <div className="border rounded p-3 dark:border-neutral-800">
      <div className="font-medium mb-2">Fontes</div>
      <ul className="text-sm space-y-1">
        {ids.map(id => <li key={id} className="opacity-80">• {id}</li>)}
      </ul>
    </div>
  )
}
