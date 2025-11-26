"use client"

import { Home, Briefcase, Wallet, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Wallet", href: "/wallet", icon: Wallet },
    { name: "Profile", href: "/profile", icon: User }
]

export function BottomNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t glass-card backdrop-blur-xl bg-background/80">
            <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative flex flex-col items-center justify-center flex-1 h-full group"
                        >
                            <div className="relative">
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -inset-2 bg-primary/10 rounded-xl"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <Icon
                                    className={`h-6 w-6 relative z-10 transition-colors ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                                        }`}
                                />
                            </div>
                            <span
                                className={`text-xs mt-1 transition-colors ${isActive ? "text-primary font-medium" : "text-muted-foreground"
                                    }`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
