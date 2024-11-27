import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function OutlineButton(props: ComponentProps<'button'>) {
    return (
        <button {...props} className={twMerge("flex items-center px-3 py-2 gap-2 rounded-full border border-dashed border-zinc-800 text-sm text-zinc-300 hover:border-zinc-700 hover:drop-shadow focus:bprder-pink-500 focus:drop-shadow disabled:cursor-default disabled:border-transparent disabled:text-zinc-700", props.className)} />
    )
}