"use client"

import { Home, Briefcase, Wallet, User, Building2, Bell } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher"

const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Ministries", href: "/ministries", icon: Building2 },
    { name: "Wallet", href: "/wallet", icon: Wallet },
    { name: "Profile", href: "/profile", icon: User }
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:z-50 border-r glass-card backdrop-blur-xl bg-background/80">
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b">
                <h1 className="text-xl font-bold text-primary">LCCP</h1>
                <div className="flex items-center gap-2">
                    <ThemeSwitcher />
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Bell className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link key={item.name} href={item.href}>
                            <div className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeSidebarTab"
                                        className="absolute inset-0 bg-primary/10 rounded-xl"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <Icon className="h-5 w-5 relative z-10" />
                                <span className="relative z-10">{item.name}</span>
                            </div>
                        </Link>
                    )
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">JD</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">John Doe</p>
                        <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}
