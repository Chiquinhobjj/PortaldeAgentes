export default function Loader({text='Processando... Isso pode levar um momento.'}:{text?:string}){
  return <div className="text-sm opacity-80 animate-pulse">{text}</div>
}
