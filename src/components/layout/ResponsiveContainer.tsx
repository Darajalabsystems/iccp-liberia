import React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
    children: React.ReactNode
    className?: string
}

export function ResponsiveContainer({ children, className }: ResponsiveContainerProps) {
    return (
        <div className={cn(
            "min-h-screen w-full",
            "bg-background text-foreground",
            className
        )}>
            {children}
        </div>
    )
}
