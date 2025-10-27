export default function ResultsDisplay({pdfUrl}:{pdfUrl?:string}){
  if(!pdfUrl) return null
  return (
    <div className="border rounded p-3 dark:border-neutral-800">
      <div className="font-medium mb-2">Resultado</div>
      <a className="underline" href={pdfUrl} target="_blank">Baixar Apresentação (PDF)</a>
    </div>
  )
}
