"use client"

import { Wallet, QrCode, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/shared/GlassCard"

const transactions = [
    { title: "Tax Payment", date: "Today, 10:23 AM", amount: "-$1,250.00", type: "debit" },
    { title: "Business License", date: "Yesterday", amount: "-$150.00", type: "debit" },
    { title: "Refund Processed", date: "Nov 20, 2024", amount: "+$45.00", type: "credit" },
    { title: "Court Fee", date: "Nov 15, 2024", amount: "-$25.00", type: "debit" },
]

export default function WalletPage() {
    return (
        <div className="p-4 lg:p-8 space-y-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Wallet</h1>

            {/* Balance Card */}
            <GlassCard gradient className="text-white space-y-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-white/70">Total Balance</p>
                        <h2 className="text-4xl font-bold mt-1">$4,250.00</h2>
                    </div>
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                        <Wallet className="h-6 w-6" />
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button className="flex-1 bg-white text-black hover:bg-white/90 border-none">
                        <ArrowUpRight className="mr-2 h-4 w-4" /> Top Up
                    </Button>
                    <Button className="flex-1 bg-white/20 text-white hover:bg-white/30 border-none">
                        <QrCode className="mr-2 h-4 w-4" /> Scan
                    </Button>
                </div>
            </GlassCard>

            {/* Payment Methods */}
            <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground">Payment Methods</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="h-24 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">Orange Money</div>
                    <div className="h-24 bg-yellow-500 rounded-xl flex items-center justify-center text-black font-bold text-sm shadow-md">MTN Mobile</div>
                    <div className="h-24 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">Visa ****4242</div>
                    <div className="h-24 bg-zinc-800 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md cursor-pointer hover:bg-zinc-700 transition">Add New +</div>
                </div>
            </div>

            {/* Transaction History */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Recent Transactions</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">View All</Button>
                </div>
                <div className="space-y-3">
                    {transactions.map((tx, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center gap-3">
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                    {tx.type === 'credit' ? <ArrowDownLeft className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{tx.title}</p>
                                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                                </div>
                            </div>
                            <span className={`font-semibold text-sm ${tx.type === 'credit' ? 'text-green-600' : 'text-foreground'}`}>
                                {tx.amount}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
