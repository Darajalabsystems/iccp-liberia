"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

export type ThemeName = "liberia" | "cyber" | "solar" | "eco" | "contrast"

export interface Theme {
    name: ThemeName
    label: string
    colors: {
        background: string
        foreground: string
        primary: string
        primaryForeground: string
        secondary: string
        accent: string
        muted: string
        mutedForeground: string
        card: string
        border: string
    }
}

export const themes: Record<ThemeName, Theme> = {
    liberia: {
        name: "liberia",
        label: "Liberia National",
        colors: {
            background: "150 40% 98%",
            foreground: "160 50% 10%",
            primary: "160 84% 39%",
            primaryForeground: "0 0% 100%",
            secondary: "48 100% 50%",
            accent: "48 100% 50%",
            muted: "150 30% 90%",
            mutedForeground: "160 20% 40%",
            card: "0 0% 100%",
            border: "150 20% 85%",
        },
    },
    cyber: {
        name: "cyber",
        label: "Cyber Blue",
        colors: {
            background: "200 100% 5%",
            foreground: "180 100% 90%",
            primary: "180 100% 50%",
            primaryForeground: "200 100% 10%",
            secondary: "280 100% 60%",
            accent: "180 100% 50%",
            muted: "200 50% 15%",
            mutedForeground: "180 50% 60%",
            card: "200 80% 8%",
            border: "180 50% 25%",
        },
    },
    solar: {
        name: "solar",
        label: "Solar Flare",
        colors: {
            background: "20 100% 98%",
            foreground: "20 100% 10%",
            primary: "16 100% 50%",
            primaryForeground: "0 0% 100%",
            secondary: "38 100% 50%",
            accent: "16 100% 50%",
            muted: "20 60% 90%",
            mutedForeground: "20 40% 40%",
            card: "0 0% 100%",
            border: "20 40% 85%",
        },
    },
    eco: {
        name: "eco",
        label: "Eco Green",
        colors: {
            background: "120 30% 98%",
            foreground: "120 60% 15%",
            primary: "120 61% 34%",
            primaryForeground: "0 0% 100%",
            secondary: "90 50% 45%",
            accent: "120 61% 34%",
            muted: "120 30% 90%",
            mutedForeground: "120 30% 40%",
            card: "0 0% 100%",
            border: "120 20% 85%",
        },
    },
    contrast: {
        name: "contrast",
        label: "High Contrast",
        colors: {
            background: "0 0% 100%",
            foreground: "0 0% 0%",
            primary: "0 0% 0%",
            primaryForeground: "0 0% 100%",
            secondary: "0 0% 20%",
            accent: "0 0% 0%",
            muted: "0 0% 95%",
            mutedForeground: "0 0% 30%",
            card: "0 0% 100%",
            border: "0 0% 0%",
        },
    },
}

interface ThemeContextType {
    theme: ThemeName
    setTheme: (theme: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<ThemeName>("liberia")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const stored = localStorage.getItem("lccp-theme") as ThemeName
        if (stored && themes[stored]) {
            setThemeState(stored)
        }
    }, [])

    const setTheme = (newTheme: ThemeName) => {
        setThemeState(newTheme)
        localStorage.setItem("lccp-theme", newTheme)
        applyTheme(newTheme)
    }

    useEffect(() => {
        if (mounted) {
            applyTheme(theme)
        }
    }, [theme, mounted])

    // Always render provider to avoid useTheme error
    // Hydration mismatch is handled by initial state being default

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    // Handle SSR case
    if (typeof window === 'undefined') {
        return { theme: 'liberia' as ThemeName, setTheme: () => { } }
    }
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context
}

function applyTheme(themeName: ThemeName) {
    const theme = themes[themeName]
    const root = document.documentElement

    Object.entries(theme.colors).forEach(([key, value]) => {
        const cssVar = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
        root.style.setProperty(cssVar, value)
    })

    // Dark mode for certain themes
    if (themeName === "cyber" || themeName === "contrast") {
        root.classList.add("dark")
    } else {
        root.classList.remove("dark")
    }
}
