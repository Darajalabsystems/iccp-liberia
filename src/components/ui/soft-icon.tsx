import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SoftIconProps {
    icon: LucideIcon
    className?: string
    variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "gold"
    size?: "sm" | "md" | "lg" | "xl"
}

export function SoftIcon({ icon: Icon, className, variant = "primary", size = "md" }: SoftIconProps) {
    const variants = {
        primary: "bg-primary/10 text-primary border-primary/10",
        secondary: "bg-secondary/10 text-secondary border-secondary/10",
        success: "bg-green-500/10 text-green-600 border-green-500/10",
        warning: "bg-yellow-500/10 text-yellow-600 border-yellow-500/10",
        danger: "bg-red-500/10 text-red-600 border-red-500/10",
        info: "bg-blue-500/10 text-blue-600 border-blue-500/10",
        gold: "bg-[#FFB81C]/10 text-[#FFB81C] border-[#FFB81C]/10", // Liberian Gold
    }

    const sizes = {
        sm: "h-8 w-8 rounded-lg",
        md: "h-12 w-12 rounded-xl",
        lg: "h-16 w-16 rounded-2xl",
        xl: "h-20 w-20 rounded-3xl",
    }

    const iconSizes = {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
    }

    return (
        <div className={cn(
            "flex items-center justify-center flex-shrink-0 backdrop-blur-sm border",
            variants[variant],
            sizes[size],
            className
        )}>
            <Icon className={cn(iconSizes[size])} />
        </div>
    )
}
