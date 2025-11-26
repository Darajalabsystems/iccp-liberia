"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ConfettiProps {
    trigger: boolean
    onComplete?: () => void
}

export function Confetti({ trigger, onComplete }: ConfettiProps) {
    const [particles, setParticles] = useState<number[]>([])

    useEffect(() => {
        if (trigger) {
            // Create 50 particles
            setParticles(Array.from({ length: 50 }, (_, i) => i))

            // Clear after animation
            const timeout = setTimeout(() => {
                setParticles([])
                onComplete?.()
            }, 3000)

            return () => clearTimeout(timeout)
        }
    }, [trigger, onComplete])

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <AnimatePresence>
                {particles.map((i) => {
                    const colors = [
                        "bg-primary",
                        "bg-accent",
                        "bg-secondary",
                        "bg-green-500",
                        "bg-blue-500",
                        "bg-purple-500",
                        "bg-pink-500",
                        "bg-yellow-500",
                    ]
                    const randomColor = colors[Math.floor(Math.random() * colors.length)]
                    const randomX = Math.random() * 100
                    const randomDelay = Math.random() * 0.3
                    const randomDuration = 2 + Math.random()
                    const randomRotate = Math.random() * 720 - 360

                    return (
                        <motion.div
                            key={i}
                            className={`absolute w-3 h-3 rounded-full ${randomColor}`}
                            style={{
                                left: `${randomX}%`,
                                top: "-10px",
                            }}
                            initial={{
                                y: 0,
                                x: 0,
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                            }}
                            animate={{
                                y: window.innerHeight + 100,
                                x: (Math.random() - 0.5) * 200,
                                opacity: 0,
                                scale: 0,
                                rotate: randomRotate,
                            }}
                            transition={{
                                duration: randomDuration,
                                delay: randomDelay,
                                ease: "easeIn",
                            }}
                            exit={{ opacity: 0 }}
                        />
                    )
                })}
            </AnimatePresence>
        </div>
    )
}
