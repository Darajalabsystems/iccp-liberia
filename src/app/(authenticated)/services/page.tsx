"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/shared/GlassCard"
import { LIBERIAN_MINISTRIES, getServicesByCategory } from "@/data/ministries"
import Link from "next/link"

export default function ServicesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const categories = getServicesByCategory()

    const filteredMinistries = LIBERIAN_MINISTRIES.filter(ministry =>
        ministry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ministry.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <div className="p-4 lg:p-8 space-y-6 max-w-7xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold mb-2">Government Services</h1>
                <p className="text-muted-foreground text-sm">Access all ministries and agencies</p>
            </div>

            <div className="relative max-w-2xl">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                    className="pl-10 glass-input"
                    placeholder="Search services or ministries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {searchQuery ? (
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Search Results ({filteredMinistries.length})</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredMinistries.map((ministry, index) => {
                            const Icon = ministry.icon
                            return (
                                <Link href={`/services/${ministry.id}`} key={ministry.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <GlassCard className="p-4 space-y-3 h-full">
                                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-sm line-clamp-2">{ministry.shortName}</h3>
                                                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                                                    {ministry.services.length} services
                                                </p>
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className="space-y-8">
                    {Array.from(categories.entries()).map(([category, ministries], catIndex) => (
                        <div key={category} className="space-y-4">
                            <h2 className="text-lg font-semibold">{category}</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {ministries.map((ministry, index) => {
                                    const Icon = ministry.icon
                                    return (
                                        <Link href={`/services/${ministry.id}`} key={ministry.id}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                                            >
                                                <GlassCard className="p-4 space-y-3 h-full hover:scale-105 transition-transform">
                                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                        <Icon className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-sm line-clamp-2">{ministry.shortName}</h3>
                                                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                                                            {ministry.services.length} services
                                                        </p>
                                                    </div>
                                                </GlassCard>
                                            </motion.div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
