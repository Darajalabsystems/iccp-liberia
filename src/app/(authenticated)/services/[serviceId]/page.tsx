
import { notFound } from "next/navigation"
import { MotionDiv } from "@/components/ui/motion-div"
import { motion } from "framer-motion"
import { ArrowRight, Clock, DollarSign, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getServiceById } from "@/data/services"
import { formatCurrency } from "@/lib/utils"

interface ServicePageProps {
    params: Promise<{ serviceId: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { serviceId } = await params
    const service = getServiceById(serviceId)

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
                {/* Header */}
                <MotionDiv
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <Link href="/dashboard" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm">
                        ← Back to Dashboard
                    </Link>

                    <div>
                        <h1 className="text-4xl font-bold mb-3">{service.name}</h1>
                        <p className="text-xl text-muted-foreground">{service.description}</p>
                    </div>
                </MotionDiv>

                {/* Quick Info Cards */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {service.estimatedTime && (
                        <Card className="p-4 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Processing Time</p>
                                <p className="font-semibold">{service.estimatedTime}</p>
                            </div>
                        </Card>
                    )}

                    {service.fee && (
                        <Card className="p-4 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                                <DollarSign className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Application Fee</p>
                                <p className="font-semibold">
                                    {typeof service.fee === 'number' ? formatCurrency(service.fee) : service.fee}
                                </p>
                            </div>
                        </Card>
                    )}

                    <Card className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-success" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Status</p>
                            <p className="font-semibold">Available</p>
                        </div>
                    </Card>
                </MotionDiv>

                {/* Required Documents */}
                {service.requiredDocuments && service.requiredDocuments.length > 0 && (
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="h-6 w-6 text-primary" />
                                <h2 className="text-xl font-semibold">Required Documents</h2>
                            </div>
                            <ul className="space-y-2">
                                {service.requiredDocuments.map((doc, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                                        <span>{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </MotionDiv>
                )}

                {/* How it Works */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="p-6">
                        <h2 className="text-xl font-semibold mb-4">How it Works</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Fill Application Form</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Complete the online form with your personal information
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Upload Documents</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Scan and upload required documents (photo, proof of address, etc.)
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Make Payment</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Pay application fee via Mobile Money, Orange Money, or Card
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                                    4
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Track Application</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Receive updates and track your application status online
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </MotionDiv>

                {/* CTA Button */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="sticky bottom-4"
                >
                    <Link href={`/services/${serviceId}/apply`}>
                        <Button size="lg" className="w-full h-14 text-lg">
                            Start Application
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </MotionDiv>
            </div>
        </div>
    )
}
