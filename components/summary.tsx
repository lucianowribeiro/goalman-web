import { Trigger } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { LogoIcon } from './icons/logo'
import { Plus } from 'lucide-react'
import { ProgressIndicator, Progress } from '../components/ui/progress-bar'
export function Summary() {
    return (
        <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
            <div className=" flex items-center justify-center">
                <div className='flex items-center gap-3 '>
                    <LogoIcon />
                    <span className='text-lg font-semibold'>5 a 10 de agosto</span>
                </div>
                <Trigger asChild>
                    <Button size='sm'>
                        <Plus className='size-4' />
                        Cadastrar meta
                    </Button>
                </Trigger>
            </div>
            <div className='flex flex-col gap-3'>
                <Progress max={15} value={8}>
                    <ProgressIndicator style={{ width: '50%' }} />
                </Progress>
            </div>
            <div className='flex items-center justify-between text-xs text-zinc-400'>
                <span>Voce completou <span className='text-zinc-100'>8</span> de <span className='text-zinc-100'>15</span> metas nessa semana</span>
                <span>50%</span>
            </div>
        </div>
    )
}