"use client"

import { motion } from "framer-motion"
import { Search, Bell } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { FEATURED_SERVICES, ALL_SERVICES } from "@/data/services"

export default function DashboardPage() {
    // Get 12 featured services for home page
    const homeServices = [
        ALL_SERVICES.find(s => s.id === "national-id-new"),
        ALL_SERVICES.find(s => s.id === "passport-new"),
        ALL_SERVICES.find(s => s.id === "tax-file-return"),
        ALL_SERVICES.find(s => s.id === "business-register"),
        ALL_SERVICES.find(s => s.id === "property-titles"),
        ALL_SERVICES.find(s => s.id === "energy-compliance"),
        ALL_SERVICES.find(s => s.id === "drivers-license"),
        ALL_SERVICES.find(s => s.id === "civil-registry"),
        ALL_SERVICES.find(s => s.id === "health-insurance"),
        ALL_SERVICES.find(s => s.id === "school-enrollment"),
        ALL_SERVICES.find(s => s.id === "infrastructure-reports"),
        ALL_SERVICES.find(s => s.id === "social-assistance"),
    ].filter(Boolean)

    // Icon mapping
    const iconMap: Record<string, keyof typeof LucideIcons> = {
        "national-id-new": "IdCard",
        "passport-new": "Plane",
        "tax-file-return": "DollarSign",
        "business-register": "Briefcase",
        "property-titles": "Home",
        "energy-compliance": "Zap",
        "drivers-license": "Car",
        "civil-registry": "FileText",
        "health-insurance": "Heart",
        "school-enrollment": "GraduationCap",
        "infrastructure-reports": "AlertCircle",
        "social-assistance": "HandHeart",
    }

    return (
        <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 rounded-full border-2 border-primary bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <span className="font-bold text-xl text-primary">JD</span>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Good Morning,</p>
                            <h1 className="text-2xl font-bold">John Doe</h1>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full lg:hidden relative">
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
                    </Button>
                </div>

                {/* Search */}
                <div className="relative max-w-2xl">
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input
                        className="pl-10 h-12 text-base"
                        placeholder="Search services..."
                    />
                </div>
            </motion.div>

            {/* Services Grid */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Quick Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {homeServices.map((service, index) => {
                        if (!service) return null

                        const IconComponent = LucideIcons[iconMap[service.id] || "FileText"] as LucideIcons.LucideIcon

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <ServiceCard
                                    id={service.id}
                                    name={service.shortName}
                                    icon={IconComponent}
                                    href={`/services/${service.id}`}
                                    iconColor={service.id === "national-id-new" ? "text-primary" : "text-primary"}
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Quick Actions Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10"
            >
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Click any service card to get started. We'll guide you through each step.
                </p>
                <Button variant="outline" size="sm">
                    Watch Tutorial
                </Button>
            </motion.div>
        </div>
    )
}
