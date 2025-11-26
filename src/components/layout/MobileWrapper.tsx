import React from "react"
import { cn } from "@/lib/utils"

interface MobileWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function MobileWrapper({
    children,
    className,
    ...props
}: MobileWrapperProps) {
    return (
        <div className="min-h-screen w-full bg-zinc-100 dark:bg-zinc-950 flex justify-center overflow-hidden">
            <div
                className={cn(
                    "w-full max-w-md bg-background min-h-screen shadow-2xl overflow-x-hidden relative flex flex-col",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </div>
    )
}
