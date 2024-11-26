import React, { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
    return (
        <input {...props}
            ref={ref}
            className={twMerge(
                "px-4 h-12 bg-black border border-zinc-900 rounde-lg placeholder-zinc-400 outline-none text-sm hover:border-zinc-800",
                props.className)} />
    )
})

Input.displayName = "Input" 