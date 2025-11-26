"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type FontSize = "normal" | "large" | "very-large"
type MotionPreference = "reduced" | "full"
type Language = "english" | "simple-english"

interface AccessibilityContextType {
    fontSize: FontSize
    setFontSize: (size: FontSize) => void
    dyslexicFont: boolean
    setDyslexicFont: (enabled: boolean) => void
    motionPreference: MotionPreference
    setMotionPreference: (pref: MotionPreference) => void
    highContrast: boolean
    setHighContrast: (enabled: boolean) => void
    textToSpeech: boolean
    setTextToSpeech: (enabled: boolean) => void
    language: Language
    setLanguage: (lang: Language) => void
    guidedTourShown: boolean
    setGuidedTourShown: (shown: boolean) => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

const fontSizeMap: Record<FontSize, string> = {
    normal: "18px",
    large: "22px",
    "very-large": "26px",
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
    const [fontSize, setFontSizeState] = useState<FontSize>("normal")
    const [dyslexicFont, setDyslexicFontState] = useState(false)
    const [motionPreference, setMotionPreferenceState] = useState<MotionPreference>("full")
    const [textToSpeech, setTextToSpeechState] = useState(false)
    const [language, setLanguageState] = useState<Language>("english")
    const [guidedTourShown, setGuidedTourShownState] = useState(false)
    const [highContrast, setHighContrastState] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Load preferences from localStorage
        const storedFontSize = localStorage.getItem("lccp-font-size")
        if (storedFontSize) {
            setFontSizeState(storedFontSize as FontSize)
        }

        const storedDyslexic = localStorage.getItem("lccp-dyslexic-font")
        if (storedDyslexic) {
            setDyslexicFontState(storedDyslexic === "true")
        }

        const storedMotion = localStorage.getItem("lccp-motion")
        if (storedMotion) {
            setMotionPreferenceState(storedMotion as MotionPreference)
        }

        const storedContrast = localStorage.getItem("lccp-high-contrast")
        if (storedContrast) {
            setHighContrastState(storedContrast === "true")
        }

        const storedLanguage = localStorage.getItem("lccp-language")
        if (storedLanguage) {
            setLanguageState(storedLanguage as Language)
        }

        const storedTour = localStorage.getItem("lccp-guided-tour-shown")
        if (storedTour) {
            setGuidedTourShownState(storedTour === "true")
        }
    }, [])

    const setFontSize = (size: FontSize) => {
        setFontSizeState(size)
        localStorage.setItem("lccp-font-size", size)
        document.documentElement.style.fontSize = fontSizeMap[size]
    }

    const setDyslexicFont = (enabled: boolean) => {
        setDyslexicFontState(enabled)
        localStorage.setItem("lccp-dyslexic-font", enabled.toString())
        if (enabled) {
            document.documentElement.classList.add("dyslexic-font")
        } else {
            document.documentElement.classList.remove("dyslexic-font")
        }
    }

    const setMotionPreference = (pref: MotionPreference) => {
        setMotionPreferenceState(pref)
        localStorage.setItem("lccp-motion", pref)
        if (pref === "reduced") {
            document.documentElement.classList.add("reduce-motion")
        } else {
            document.documentElement.classList.remove("reduce-motion")
        }
    }

    const setHighContrast = (enabled: boolean) => {
        setHighContrastState(enabled)
        localStorage.setItem("lccp-high-contrast", enabled.toString())
        if (enabled) {
            document.documentElement.classList.add("high-contrast")
        } else {
            document.documentElement.classList.remove("high-contrast")
        }
    }

    const setTextToSpeech = (enabled: boolean) => {
        setTextToSpeechState(enabled)
        localStorage.setItem("lccp-text-to-speech", enabled.toString())
    }

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("lccp-language", lang)
    }

    const setGuidedTourShown = (shown: boolean) => {
        setGuidedTourShownState(shown)
        localStorage.setItem("lccp-guided-tour-shown", shown.toString())
    }

    useEffect(() => {
        if (mounted) {
            document.documentElement.style.fontSize = fontSizeMap[fontSize]
            if (dyslexicFont) {
                document.documentElement.classList.add("dyslexic-font")
            }
            if (motionPreference === "reduced") {
                document.documentElement.classList.add("reduce-motion")
            }
            if (highContrast) {
                document.documentElement.classList.add("high-contrast")
            }
        }
    }, [mounted, fontSize, dyslexicFont, motionPreference, highContrast])

    // Always render provider to avoid useAccessibility error
    // Hydration mismatch is handled by initial state being default

    return (
        <AccessibilityContext.Provider
            value={{
                fontSize,
                setFontSize,
                dyslexicFont,
                setDyslexicFont,
                motionPreference,
                setMotionPreference,
                highContrast,
                setHighContrast,
                textToSpeech,
                setTextToSpeech,
                language,
                setLanguage,
                guidedTourShown,
                setGuidedTourShown,
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    )
}

export function useAccessibility() {
    const context = useContext(AccessibilityContext)
    if (typeof window === 'undefined') {
        return {
            fontSize: 'normal' as FontSize,
            setFontSize: () => { },
            dyslexicFont: false,
            setDyslexicFont: () => { },
            motionPreference: 'full' as MotionPreference,
            setMotionPreference: () => { },
            highContrast: false,
            setHighContrast: () => { },
            textToSpeech: false,
            setTextToSpeech: () => { },
            language: 'english' as Language,
            setLanguage: () => { },
            guidedTourShown: false,
            setGuidedTourShown: () => { },
        }
    }
    if (!context) {
        throw new Error("useAccessibility must be used within AccessibilityProvider")
    }
    return context
}
