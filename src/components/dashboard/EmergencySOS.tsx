"use client"

import { motion } from "framer-motion"
import { Phone, Siren, Ambulance, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function EmergencySOS() {
    const [isExpanded, setIsExpanded] = useState(false)

    const emergencyServices = [
        { name: "Police", number: "911", icon: ShieldAlert, color: "text-blue-600" },
        { name: "Fire", number: "911", icon: Siren, color: "text-red-600" },
        { name: "Ambulance", number: "911", icon: Ambulance, color: "text-green-600" }
    ]

    return (
        <motion.div
            className="fixed bottom-24 right-6 z-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 space-y-2"
                >
                    {emergencyServices.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Button
                                    className="glass-card border-none shadow-lg gap-2 w-full justify-start"
                                    variant="outline"
                                    onClick={() => {
                                        // In production, this would initiate a call
                                        alert(`Calling ${service.name}: ${service.number}`)
                                    }}
                                >
                                    <Icon className={`h-5 w-5 ${service.color}`} />
                                    <span className="font-semibold">{service.name}</span>
                                    <span className="ml-auto text-muted-foreground">{service.number}</span>
                                </Button>
                            </motion.div>
                        )
                    })}
                </motion.div>
            )}

            <Button
                className="h-16 w-16 rounded-full shadow-2xl glass-card border-none bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? (
                    <span className="text-2xl">×</span>
                ) : (
                    <Phone className="h-7 w-7" />
                )}
            </Button>
        </motion.div>
    )
}
