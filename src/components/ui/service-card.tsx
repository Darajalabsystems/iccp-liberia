"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Card } from "./card"
import { cn } from "@/lib/utils"
import { useAccessibility } from "@/contexts/AccessibilityContext"

interface ServiceCardProps {
    id: string
    name: string
    icon: LucideIcon
    href: string
    iconColor?: string
    className?: string
}

export function ServiceCard({ id, name, icon: Icon, href, iconColor = "text-primary", className }: ServiceCardProps) {
    const { motionPreference } = useAccessibility()
    const reducedMotion = motionPreference === "reduced"

    const cardVariants = {
        hover: {
            y: -4,
            scale: 1.02
        },
        tap: {
            scale: 0.98
        }
    }

    const animationProps = reducedMotion ? {} : {
        variants: cardVariants,
        whileHover: "hover" as const,
        whileTap: "tap" as const
    }

    return (
        <Link href={href} className="block">
            <motion.div
                {...animationProps}
                className={cn("focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded-xl", className)}
            >
                <Card className="h-full min-h-[140px] p-6 flex flex-col items-center justify-center gap-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
                    <div className={cn(
                        "h-16 w-16 rounded-2xl flex items-center justify-center",
                        "bg-gradient-to-br from-primary/10 to-primary/5",
                        "group-hover:from-primary/20 group-hover:to-primary/10 transition-colors"
                    )}>
                        <Icon
                            className={cn("h-8 w-8", iconColor)}
                            aria-hidden="true"
                        />
                    </div>
                    <span className="text-base font-semibold leading-tight line-clamp-2">
                        {name}
                    </span>
                </Card>
            </motion.div>
        </Link>
    )
}
