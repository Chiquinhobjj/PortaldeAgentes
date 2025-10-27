export default function GenerateButton({onClick, disabled}:{onClick:()=>void, disabled?:boolean}){
  return <button disabled={disabled} onClick={onClick} className="px-4 py-2 rounded bg-black text-white disabled:opacity-50 dark:bg-white dark:text-black">Gerar</button>
}
