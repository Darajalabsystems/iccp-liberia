"use client"

import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle, Download, Share2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import QRCode from "react-qr-code"

export default function SuccessPage() {
    const searchParams = useSearchParams()
    const trackingNumber = searchParams?.get("tracking") || "LCCP-UNKNOWN"

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full space-y-8"
            >
                {/* Success Animation */}
                <motion.div
                    className="flex flex-col items-center text-center space-y-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="h-24 w-24 rounded-full bg-success/10 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                        <CheckCircle className="h-16 w-16 text-success" />
                    </motion.div>

                    <div>
                        <h1 className="text-4xl font-bold mb-2">Application Submitted!</h1>
                        <p className="text-xl text-muted-foreground">
                            Your National ID application has been received
                        </p>
                    </div>
                </motion.div>

                {/* Receipt Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Card className="p-8 space-y-6">
                        <div className="text-center pb-6 border-b">
                            <h2 className="text-2xl font-semibold mb-2">Application Receipt</h2>
                            <p className="text-sm text-muted-foreground">Save this for your records</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Tracking Number</span>
                                <span className="font-mono font-bold text-lg">{trackingNumber}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Service</span>
                                <span className="font-semibold">National ID - New Application</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Date Submitted</span>
                                <span className="font-semibold">{new Date().toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Application Fee</span>
                                <span className="font-semibold">LRD 500.00</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Payment Status</span>
                                <span className="inline-flex items-center gap-2 text-success font-semibold">
                                    <CheckCircle className="h-4 w-4" />
                                    Paid
                                </span>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="flex justify-center pt-6 border-t">
                            <div className="p-4 bg-white rounded-xl">
                                <QRCode value={trackingNumber} size={150} />
                            </div>
                        </div>
                        <p className="text-xs text-center text-muted-foreground">
                            Scan this QR code to track your application
                        </p>
                    </Card>
                </motion.div>

                {/* Next Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <Card className="p-6">
                        <h3 className="font-semibold mb-4">What Happens Next?</h3>
                        <ol className="space-y-3 text-sm">
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-xs">
                                    1
                                </span>
                                <span>
                                    Your application will be reviewed within 2-3 business days
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-xs">
                                    2
                                </span>
                                <span>
                                    You'll receive an SMS notification when your National ID is ready
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-xs">
                                    3
                                </span>
                                <span>
                                    Pick up your ID at the nearest LCCP service center or request delivery
                                </span>
                            </li>
                        </ol>
                    </Card>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14"
                        onClick={() => window.print()}
                    >
                        <Download className="mr-2 h-5 w-5" />
                        Download Receipt
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14"
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: "LCCP Application Receipt",
                                    text: `Tracking Number: ${trackingNumber}`,
                                })
                            }
                        }}
                    >
                        <Share2 className="mr-2 h-5 w-5" />
                        Share Receipt
                    </Button>
                </motion.div>

                {/* Return to Dashboard */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center"
                >
                    <Link href="/dashboard">
                        <Button size="lg" className="h-14 px-8">
                            Return to Dashboard
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}
