import { useEffect, useState } from 'react'
export default function ThemeToggle(){
  const [dark, setDark] = useState<boolean>(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  }, [dark])
  return (
    <button className="px-3 py-1 rounded border text-sm" onClick={() => setDark(d => !d)}>
      {dark ? 'Tema: Escuro' : 'Tema: Claro'}
    </button>
  )
}
