"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Shield, LogOut, Eye, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/shared/GlassCard"

// Simple Switch component
function SimpleSwitch({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (c: boolean) => void }) {
    return (
        <div
            className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${checked ? 'bg-primary' : 'bg-zinc-300 dark:bg-zinc-700'}`}
            onClick={() => onCheckedChange(!checked)}
        >
            <motion.div
                className="w-4 h-4 bg-white rounded-full shadow-sm"
                animate={{ x: checked ? 16 : 0 }}
            />
        </div>
    )
}

export default function ProfilePage() {
    const [isFlipped, setIsFlipped] = useState(false)
    const [biometricEnabled, setBiometricEnabled] = useState(true)

    return (
        <div className="p-4 lg:p-8 space-y-8 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Profile</h1>

            {/* Digital ID Card (Flip Animation) */}
            <div className="perspective-1000 h-56 w-full max-w-2xl mx-auto cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <motion.div
                    className="relative w-full h-full transition-all duration-500 preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                        <GlassCard gradient className="h-full flex flex-col justify-between border-white/30 shadow-2xl bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-xs font-bold">LR</span>
                                    </div>
                                    <span className="font-bold tracking-widest text-sm">REPUBLIC OF LIBERIA</span>
                                </div>
                                <div className="h-10 w-10 bg-white/20 rounded-lg backdrop-blur-md flex items-center justify-center">
                                    <User className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <p className="text-xs text-white/70 uppercase tracking-wider">National ID Number</p>
                                <p className="text-xl font-mono tracking-widest mt-1">9900 1234 5678</p>
                            </div>
                            <div className="flex justify-between items-end relative z-10">
                                <div>
                                    <p className="text-xs text-white/70">Name</p>
                                    <p className="font-bold">JOHN DOE</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-white/70">Expires</p>
                                    <p className="font-bold">12/2028</p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute inset-0 backface-hidden"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <GlassCard className="h-full flex flex-col justify-center items-center bg-zinc-900 text-white border-zinc-700">
                            <div className="bg-white p-2 rounded-lg">
                                <div className="h-32 w-32 bg-black" /> {/* QR Code Placeholder */}
                            </div>
                            <p className="mt-4 text-xs text-zinc-400">Scan to verify identity</p>
                        </GlassCard>
                    </div>
                </motion.div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">Tap card to flip</p>

            {/* Settings */}
            <div className="space-y-6 max-w-2xl mx-auto">
                <div className="space-y-4">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Account Settings</h3>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20">
                                <Shield className="h-4 w-4" />
                            </div>
                            <span className="font-medium text-sm">Biometric Login</span>
                        </div>
                        <SimpleSwitch checked={biometricEnabled} onCheckedChange={setBiometricEnabled} />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/20">
                                <Eye className="h-4 w-4" />
                            </div>
                            <span className="font-medium text-sm">Data Access Log</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 text-xs">View</Button>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/20">
                                <Globe className="h-4 w-4" />
                            </div>
                            <span className="font-medium text-sm">Language</span>
                        </div>
                        <span className="text-sm text-muted-foreground">English</span>
                    </div>
                </div>

                <Button variant="destructive" className="w-full gap-2">
                    <LogOut className="h-4 w-4" /> Sign Out
                </Button>
            </div>
        </div>
    )
}
