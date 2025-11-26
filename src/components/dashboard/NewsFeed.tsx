"use client"

import { motion } from "framer-motion"
import { Newspaper, Clock } from "lucide-react"
import { GlassCard } from "@/components/shared/GlassCard"

interface NewsItem {
    id: string
    title: string
    source: string
    time: string
    category: "announcement" | "update" | "alert"
}

const NEWS_ITEMS: NewsItem[] = [
    {
        id: "1",
        title: "New online tax filing system launched by LRA",
        source: "Liberia Revenue Authority",
        time: "2h ago",
        category: "announcement"
    },
    {
        id: "2",
        title: "Executive Mansion announces infrastructure development plan",
        source: "Office of the President",
        time: "5h ago",
        category: "update"
    },
    {
        id: "3",
        title: "Ministry of Health updates vaccination schedule",
        source: "Ministry of Health",
        time: "1d ago",
        category: "update"
    },
    {
        id: "4",
        title: "National ID renewal deadline extended to December 31",
        source: "Ministry of Internal Affairs",
        time: "2d ago",
        category: "alert"
    }
]

export default function NewsFeed() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Government Updates</h2>
                <Newspaper className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="space-y-3">
                {NEWS_ITEMS.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <GlassCard className="p-4 space-y-2 hover:scale-[1.02] transition-transform cursor-pointer">
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="text-sm font-medium line-clamp-2 flex-1">{item.title}</h3>
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${item.category === "alert"
                                        ? "bg-red-500/10 text-red-600 dark:text-red-400"
                                        : item.category === "announcement"
                                            ? "bg-primary/10 text-primary"
                                            : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                    }`}>
                                    {item.category}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{item.source}</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{item.time}</span>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
