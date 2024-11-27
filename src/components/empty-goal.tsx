import logo from '../../assets/logo.svg'
import letsStarted from '../../assets/lets-started.svg'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { Trigger } from '@radix-ui/react-dialog'

export function EmptyGoal() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8">
            <img src={logo} alt="goalman logo" />
            <img src={letsStarted} alt="goalman logo" />
            <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?</p>

            <Trigger asChild>
                <Button >
                    <Plus className='size-4' />
                    Cadastrar meta
                </Button>
            </Trigger>
        </div >

    )
}

