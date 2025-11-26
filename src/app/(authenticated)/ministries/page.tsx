"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Mail, ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/shared/GlassCard"
import { SoftIcon } from "@/components/ui/soft-icon"
import { LIBERIAN_MINISTRIES } from "@/data/ministries"
import Link from "next/link"

export default function MinistriesPage() {
    const router = useRouter()

    return (
        <div className="p-4 lg:p-8 space-y-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-6 w-6" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold">Government Directory</h1>
                    <p className="text-sm text-muted-foreground">All ministries and agencies</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LIBERIAN_MINISTRIES.map((ministry, index) => {
                    const Icon = ministry.icon
                    return (
                        <motion.div
                            key={ministry.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <GlassCard className="p-4 space-y-4 h-full">
                                <div className="flex items-start gap-4">
                                    <SoftIcon icon={Icon} variant="primary" size="md" />
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-base">{ministry.name}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{ministry.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>{ministry.contact}</span>
                                    </div>
                                </div>

                                <div className="border-t pt-3 space-y-2">
                                    <p className="text-xs font-medium text-muted-foreground">Available Services:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {ministry.services.map((service, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 rounded-md bg-primary/5 text-xs text-primary font-medium"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link href={`/ministries/${ministry.id}`}>
                                    <Button className="w-full gap-2" variant="outline">
                                        View Services
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </GlassCard>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
