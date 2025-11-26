"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Upload, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TaxWizardPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)

    const nextStep = () => {
        if (step < 3) setStep(step + 1)
        else router.push("/dashboard")
    }

    return (
        <div className="p-6 space-y-6 min-h-screen flex flex-col">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-6 w-6" />
                </Button>
                <h1 className="text-xl font-bold">File Tax Return</h1>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                    <span>Step {step} of 3</span>
                    <span>{Math.round((step / 3) * 100)}%</span>
                </div>
                <Progress value={step * 33.33} className="h-2" />
            </div>

            <div className="flex-1">
                <Card className="glass-card border-none shadow-none bg-white/50 dark:bg-black/20 h-full">
                    <CardHeader>
                        <CardTitle>
                            {step === 1 && "Personal Information"}
                            {step === 2 && "Income Details"}
                            {step === 3 && "Review & Submit"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {step === 1 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Tax ID (TIN)</label>
                                    <Input defaultValue="500-123-456" readOnly className="bg-zinc-100 dark:bg-zinc-800" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <Input defaultValue="John Doe" readOnly className="bg-zinc-100 dark:bg-zinc-800" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Address</label>
                                    <Input defaultValue="123 Tubman Blvd, Monrovia" />
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center gap-3">
                                    <DollarSign className="h-6 w-6 text-blue-500" />
                                    <div>
                                        <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Estimated Tax</p>
                                        <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">$1,250.00</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Annual Income (LRD)</label>
                                    <Input placeholder="0.00" type="number" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Upload W-2 / Documents</label>
                                    <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-8 flex flex-col items-center justify-center text-muted-foreground hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
                                        <Upload className="h-8 w-8 mb-2" />
                                        <span className="text-sm">Tap to upload</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="space-y-6 text-center py-8">
                                <div className="h-20 w-20 mx-auto rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                    <Check className="h-10 w-10 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Ready to Submit</h3>
                                    <p className="text-muted-foreground">Please review your information before final submission.</p>
                                </div>
                                <div className="text-left bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Tax Year</span>
                                        <span className="font-medium">2024</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Total Income</span>
                                        <span className="font-medium">$45,000.00</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2 mt-2">
                                        <span className="font-bold">Tax Due</span>
                                        <span className="font-bold text-primary">$1,250.00</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={nextStep}>
                            {step === 3 ? "Submit Return" : "Continue"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
