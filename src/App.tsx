import { Root } from '@radix-ui/react-dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoal } from './components/empty-goal'
import { Summary } from './components/summary'
export function App() {
  return (
    <Root>
      <Summary />
      {/*       <EmptyGoal /> */}
      <CreateGoal />
    </Root >
  )
} 