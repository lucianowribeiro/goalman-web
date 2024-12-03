import { Trigger } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { LogoIcon } from './icons/logo'
import { CheckCircle2, Plus } from 'lucide-react'
import { Separator } from './ui/separator'
import { ProgressIndicator, Progress } from './ui/progress-bar'
import { useQuery } from '@tanstack/react-query'
import type { SummaryResponse } from '../App'
import dayjs from 'dayjs'
import { getSummary } from '../http/get-summary'
import { PendingGoals } from './pending-goals'



export function Summary() {
    const summary = useQuery<SummaryResponse>({
        queryKey: ['summary'],
        staleTime: 1000 * 60,
        queryFn: getSummary
    }).data


    const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
    const endDayOfWeek = dayjs().endOf('week').format('D MMM')

    if (!summary) return

    const completePercentage = Math.round(summary.completed * 100 / summary.total)
    return (
        <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
            <div className=" flex items-center justify-between">
                <div className='flex items-center gap-3 '>
                    <LogoIcon />
                    <span className='text-lg font-semibold capitalize'>{firstDayOfWeek} -  {endDayOfWeek}</span>
                </div>
                <Trigger asChild>
                    <Button size='sm'>
                        <Plus className='size-4' />
                        Cadastrar meta
                    </Button>
                </Trigger>
            </div>
            <div className='flex flex-col gap-3'>
                <Progress max={summary.total} value={summary.completed}>
                    <ProgressIndicator style={{ width: `${completePercentage}%` }} />
                </Progress>

                <div className='flex items-center justify-between text-xs text-zinc-400'>
                    <span>Voce completou <span className='text-zinc-100'>{summary.completed}</span> de <span className='text-zinc-100'>{summary.total}</span> metas nessa semana</span>
                    <span>{completePercentage}%</span>
                </div>
            </div>

            <Separator />

            <PendingGoals />

            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-medium'>Sua semana</h2>
                {Object.keys(summary.goalsPerDay).map((day, index) => (
                    < div key={`${index}-${day}`} className='flex flex-col gap-4'>
                        <h3 className='text-xl font-medium capitalize'>
                            {dayjs(day).format('dddd')} {' '}
                            <span className='text-zinc-400 text-xs'>({dayjs(day).format('D [ de ] MMMM')})</span>
                        </h3>

                        {summary.goalsPerDay[day].map((goal, index) => (
                            <ul key={`${index}-${goal}`} className='flex flex-col gap-3'>

                                <li className='flex items-center gap-2'>
                                    <CheckCircle2 className='size-4 text-pink-500' />
                                    <span className='text-sm text-zinc-400'>
                                        Voce completou "
                                        <span className='text-zinc-100'>{goal.title}</span> {' '}ás{' '}
                                        <span className='text-zinc-100'>{dayjs(goal.completedAt).format('HH:mm')}</span>
                                    </span>
                                </li>
                            </ul>))}
                    </div>)
                )}
            </div>

        </div >
    )
}   