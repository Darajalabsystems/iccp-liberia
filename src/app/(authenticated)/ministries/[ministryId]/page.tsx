import { notFound } from "next/navigation"
import { MotionDiv } from "@/components/ui/motion-div"
import { SoftIcon } from "@/components/ui/soft-icon"
import { ArrowLeft, ArrowRight, Mail, Phone, MapPin, Globe, ExternalLink, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getMinistryById } from "@/data/ministries"
import { ALL_SERVICES } from "@/data/services"

interface MinistryPageProps {
    params: Promise<{ ministryId: string }>
}

export default async function MinistryPage({ params }: MinistryPageProps) {
    const { ministryId } = await params
    const ministry = getMinistryById(ministryId)

    if (!ministry) {
        notFound()
    }

    const Icon = ministry.icon

    // Find related services from the main service catalog
    // Filter by explicit ministryId
    const relatedServices = ALL_SERVICES.filter(service => service.ministryId === ministryId)

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
                {/* Header */}
                <MotionDiv
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <Link href="/ministries" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Directory
                    </Link>

                    <div className="flex items-start gap-6">
                        <SoftIcon icon={Icon} variant="primary" size="xl" />
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{ministry.name}</h1>
                            <p className="text-xl text-muted-foreground">{ministry.description}</p>
                        </div>
                    </div>
                </MotionDiv>

                {/* Contact Info */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <Card className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs text-muted-foreground">Email</p>
                            <p className="font-semibold truncate">{ministry.contact}</p>
                        </div>
                    </Card>

                    <Card className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <Phone className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Phone</p>
                            <p className="font-semibold">+231 77 000 0000</p>
                        </div>
                    </Card>

                    <Card className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                            <Globe className="h-5 w-5 text-success" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Website</p>
                            <p className="font-semibold">www.gov.lr</p>
                        </div>
                    </Card>
                </MotionDiv>

                {/* Services List */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Available Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ministry.services.map((serviceName, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">{serviceName}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Available at {ministry.shortName} offices
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </MotionDiv>

                {/* Related Online Services */}
                {relatedServices.length > 0 && (
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-xl font-semibold mb-4">Apply Online</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {relatedServices.map((service) => (
                                <Link key={service.id} href={`/services/${service.id}`}>
                                    <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer h-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold">{service.name}</h3>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs font-medium text-primary">
                                            <span>Start Application</span>
                                            <ArrowRight className="h-3 w-3" />
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </MotionDiv>
                )}
            </div>
        </div>
    )
}
