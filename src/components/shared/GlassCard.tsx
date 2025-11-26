import React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    gradient?: boolean
}

export function GlassCard({
    children,
    className,
    gradient = false,
    ...props
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl transition-all hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20",
                gradient && "bg-gradient-to-br from-white/10 to-white/5",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
