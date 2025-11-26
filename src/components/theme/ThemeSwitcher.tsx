"use client"

import { Palette } from "lucide-react"
import { useTheme, themes, type ThemeName } from "@/contexts/ThemeContext"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                    <Palette className="h-5 w-5" />
                    <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                {Object.values(themes).map((t) => (
                    <DropdownMenuItem
                        key={t.name}
                        onClick={() => setTheme(t.name)}
                        className={`cursor-pointer ${theme === t.name ? "bg-primary/10 font-semibold" : ""
                            }`}
                    >
                        <div className="flex items-center gap-3 w-full">
                            <div
                                className="h-4 w-4 rounded-full border"
                                style={{
                                    backgroundColor: `hsl(${t.colors.primary})`,
                                }}
                            />
                            <span>{t.label}</span>
                            {theme === t.name && (
                                <motion.div
                                    layoutId="activeTheme"
                                    className="ml-auto h-2 w-2 rounded-full bg-primary"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
