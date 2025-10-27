import ThemeToggle from './ThemeToggle'
export default function Header(){
  return (
    <header className="w-full flex items-center justify-between p-4 border-b dark:border-neutral-800">
      <h1 className="text-lg font-semibold">Contexto → Mídias</h1>
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  )
}
