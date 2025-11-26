import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer"
import { BottomNav } from "@/components/layout/BottomNav"
import { Sidebar } from "@/components/layout/Sidebar"

export default function AuthenticatedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ResponsiveContainer>
            <Sidebar />
            <main className="lg:pl-64 pb-16 lg:pb-0">
                {children}
            </main>
            <BottomNav />
        </ResponsiveContainer>
    )
}
