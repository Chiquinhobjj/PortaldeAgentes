export default function ErrorDisplay({error}:{error?:string}){
  if(!error) return null
  return <div className="text-red-600 dark:text-red-400 text-sm">Erro: {error}</div>
}
