import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPendingGoals } from "../http/get-pending-goals";
import { Fragment } from "react/jsx-runtime";
import { OutlineButton } from "./ui/outline-button";
import { Plus } from "lucide-react";
import { createGoalCompletion } from "../http/create-goal-completion";

type PendingGoals = {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCount: number;
}[]



export function PendingGoals() {
    const queryClient = useQueryClient()
    const pendingGoals = useQuery<PendingGoals>({
        queryKey: ['pending-goals'],
        staleTime: 1000 * 60,
        queryFn: getPendingGoals
    }).data

    if (!pendingGoals) return

    async function handleCompleteGoals(goalId: string) {
        await createGoalCompletion(goalId)
        queryClient.invalidateQueries({ queryKey: ['summary'] })
        queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    }
    return (<div className='flex flex-wrap gap-3'>
        {pendingGoals.map((goal, index) => (
            <Fragment key={`${index}-${goal}`} >
                <OutlineButton disabled={goal.completionCount >= goal.desiredWeeklyFrequency} onClick={() => handleCompleteGoals(goal.id)}>
                    <Plus className='size-4 text-zinc-600' />
                    {goal.title}
                </OutlineButton>
            </Fragment>
        ))
        }
    </div>
    )
}