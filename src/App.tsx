import logo from '../assets/logo.svg'
import letsStarted from '../assets/lets-started.svg'
import { Plus } from 'lucide-react'
export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="goalman logo" />
      <img src={letsStarted} alt="goalman logo" />
      <p className='text-zinc-300 leading-relaxed max-w-80'>Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?</p>
      <button type="button" className='px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tighter hover:bg-violet-600 focus:bg-violet-500 focus:drop-shadow'> <Plus className='size-4' />Cadastrar meta </button>
    </div>
  )
}