"use client"

import { motion } from "framer-motion"

export function OrbitalLoader() {
    return (
        <div className="relative w-20 h-20">
            {/* Center core */}
            <motion.div
                className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-primary"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Orbital rings */}
            {[0, 1, 2].map((index) => (
                <motion.div
                    key={index}
                    className="absolute inset-0 border-2 border-primary/30 rounded-full"
                    style={{
                        width: `${100 - index * 20}%`,
                        height: `${100 - index * 20}%`,
                        margin: "auto",
                    }}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 3 + index,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        },
                    }}
                >
                    <motion.div
                        className="absolute w-2 h-2 rounded-full bg-primary"
                        style={{
                            top: "50%",
                            left: "100%",
                            transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                            boxShadow: [
                                "0 0 0px hsl(var(--primary))",
                                "0 0 20px hsl(var(--primary))",
                                "0 0 0px hsl(var(--primary))",
                            ],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export function OrbitalLoaderFullscreen() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <OrbitalLoader />
                <p className="text-sm text-muted-foreground font-medium">Loading...</p>
            </div>
        </div>
    )
}
