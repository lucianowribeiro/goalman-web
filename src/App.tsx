import { Root } from '@radix-ui/react-dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoal } from './components/empty-goal'
import { Summary } from './components/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'

dayjs.locale('pt-br')

export type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >;

}
export function App() {

  const summary = useQuery<SummaryResponse>({
    queryKey: ['summary'],
    staleTime: 1000 * 60,
    queryFn: getSummary
  }).data

  return (
    <Root>
      {summary?.total && summary.total > 0 ? <Summary /> : <EmptyGoal />}
      <CreateGoal />
    </Root >
  )
} 