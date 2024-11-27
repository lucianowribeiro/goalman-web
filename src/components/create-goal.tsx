
import { Label } from './ui/label'
import { Input } from './ui/input'
import { RadioGroup, RadioGroupItem, RadioGroupIndicator } from './ui/radio-group'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { Content, Overlay, Portal, Title, Close, Description } from '@radix-ui/react-dialog'
export function CreateGoal() {
    return (
        <Portal>
            <Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
            <Content className="fixed z-50 right-0 top-0 bottom-0 w-[400px] h-screen bordel-l border-zinc-900 bg-zinc-950 p-8">
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <div className="flex items-center justify-between">
                            <Title>Cadastrar meta</Title>
                            <Close>
                                <X className='size-5 text-zinc-600' />
                            </Close>
                        </div>
                        <Description>
                            Adicione atividades que te fazem bem e que você quer continuar praticando toda semana.
                        </Description>
                    </div>
                    <form action="" className='flex flex-1 flex-col justify-between'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='title'>Qual a atividade</Label>
                                <Input id="title" autoFocus placeholder="Praticar exercícios ,meditar,etc .." />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label htmlFor='title'>Quantas vezes na semana?</Label>
                                <RadioGroup>
                                    <RadioGroupItem value='1'>
                                        <RadioGroupIndicator />
                                        <span className='text-zinc-300 text-sm font-medium leading-none'>1x na semana</span>
                                        <span className='text-l leading-none'>🥱</span>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='2'>
                                        <RadioGroupIndicator />
                                        <span className='text-zinc-300 text-sm font-medium leading-none'>2x na semana</span>
                                        <span className='text-l leading-none'>🙂</span>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='3'>
                                        <RadioGroupIndicator />
                                        <span className='text-zinc-300 text-sm font-medium leading-none'>3x na semana</span>
                                        <span className='text-l leading-none'>😎</span>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='4'>
                                        <RadioGroupIndicator />
                                        <span className='text-zinc-300 text-sm font-medium leading-none'>4x na semana</span>
                                        <span className='text-l leading-none'>😜</span>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='5'>
                                        <RadioGroupIndicator />
                                        <span className='text-zinc-300 text-sm font-medium leading-none'>5x na semana</span>
                                        <span className='text-l leading-none'>🤨</span>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='6'>
                                        <RadioGroupIndicator />
                                        <span className='text-zinc-300 text-sm font-medium leading-none'>6x na semana</span>
                                        <span className='text-l leading-none'>🤯</span>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='7'>
                                        <RadioGroupIndicator />
                                        <span className='text-zinc-300 text-sm font-medium leading-none'>7x na semana</span>
                                        <span className='text-l leading-none'>🔥</span>
                                    </RadioGroupItem>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <Close asChild>
                                <Button type="button" className='flex-1' variant='secondary'>
                                    Fechar
                                </Button>
                            </Close>
                            <Button className='flex-1'>
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </Content >
        </Portal>
    )
}