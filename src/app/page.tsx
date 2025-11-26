"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Star } from "lucide-react"
import { MobileWrapper } from "@/components/layout/MobileWrapper"

export default function SplashPage() {
  const [showSplash, setShowSplash] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
      // Navigate to auth after fade out
      setTimeout(() => {
        router.push("/auth")
      }, 500)
    }, 3000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <MobileWrapper className="bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            className="flex h-full flex-col items-center justify-center px-8"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glowing background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-secondary/30 via-transparent to-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Rising Lone Star */}
            <motion.div
              initial={{ y: 100, scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ y: 0, scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
              className="relative z-10"
            >
              {/* Glow effect behind star */}
              <motion.div
                className="absolute inset-0 blur-3xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-secondary rounded-full" />
              </motion.div>

              {/* The Lone Star */}
              <Star
                className="h-32 w-32 fill-secondary text-secondary drop-shadow-[0_0_25px_rgba(255,184,28,0.8)] relative z-10"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Welcome Home text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 text-center relative z-10"
            >
              <h1 className="text-5xl font-black tracking-tight mb-3">
                Welcome Home
              </h1>
              <p className="text-lg text-white/90 font-medium">
                Liberal Central Citizen Platform
              </p>
              <p className="text-sm text-white/70 mt-2">
                One Liberia. One Platform.
              </p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-12 left-0 right-0 flex justify-center z-10"
            >
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-white/60"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MobileWrapper>
  )
}
