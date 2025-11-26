"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Upload, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PhoneInput } from "@/components/ui/phone-input"
import { Card } from "@/components/ui/card"
import { getServiceById } from "@/data/services"
import { saveDraft, loadDraft } from "@/lib/utils"
import { formatCurrency } from "@/lib/utils"

type ApplicationStep = 1 | 2 | 3 | 4 | 5

interface NationalIDFormData {
    // Step 1: Personal Info
    firstName: string
    lastName: string
    dateOfBirth: string
    gender: string

    // Step 2: Contact
    phone: string
    email: string
    county: string
    address: string

    // Step 3: Documents
    photo?: File
    birthCertificate?: File
    proofOfAddress?: File

    // Step 4: Payment
    paymentMethod?: "mobile-money" | "orange-money" | "card"
}

export default function ApplyPage() {
    const params = useParams()
    const router = useRouter()
    const serviceId = params?.serviceId as string
    const service = getServiceById(serviceId)

    const [currentStep, setCurrentStep] = useState<ApplicationStep>(1)
    const [formData, setFormData] = useState<NationalIDFormData>(() => {
        // Try to load draft from localStorage
        const draft = loadDraft<NationalIDFormData>(`application-${serviceId}`)
        return draft || {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            phone: "",
            email: "",
            county: "",
            address: "",
        }
    })

    const totalSteps = 5

    const updateFormData = (field: keyof NationalIDFormData, value: unknown) => {
        const newData = { ...formData, [field]: value }
        setFormData(newData)
        // Auto-save draft
        saveDraft(`application-${serviceId}`, newData)
    }

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((currentStep + 1) as ApplicationStep)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((currentStep - 1) as ApplicationStep)
        }
    }

    const handleSubmit = () => {
        // Simulate successful submission
        router.push(`/services/${serviceId}/success?tracking=LCCP-${Date.now()}`)
    }

    const renderStepIndicator = () => (
        <div className="flex items-center justify-center gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                    <motion.div
                        className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${index + 1 === currentStep
                            ? "bg-primary text-primary-foreground"
                            : index + 1 < currentStep
                                ? "bg-success text-success-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: index + 1 === currentStep ? 1.1 : 1 }}
                        transition={{ type: "spring" }}
                    >
                        {index + 1}
                    </motion.div>
                    {index < totalSteps - 1 && (
                        <div className={`h-1 w-8 ${index < currentStep - 1 ? "bg-success" : "bg-muted"}`} />
                    )}
                </div>
            ))}
        </div>
    )

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-3xl mx-auto p-4 md:p-8 space-y-6">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2">{service?.name || "Application"}</h1>
                    <p className="text-muted-foreground">Step {currentStep} of {totalSteps}</p>
                </div>

                {/* Progress Indicator */}
                {renderStepIndicator()}

                {/* Form Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="p-6 md:p-8 space-y-6">
                            {/* Step 1: Personal Information */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold">Personal Information</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="firstName" className="text-lg">First Name *</Label>
                                            <Input
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={(e) => updateFormData("firstName", e.target.value)}
                                                className="h-12 mt-2 text-base"
                                                placeholder="Enter your first name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="lastName" className="text-lg">Last Name *</Label>
                                            <Input
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => updateFormData("lastName", e.target.value)}
                                                className="h-12 mt-2 text-base"
                                                placeholder="Enter your last name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="dateOfBirth" className="text-lg">Date of Birth *</Label>
                                            <Input
                                                id="dateOfBirth"
                                                type="date"
                                                value={formData.dateOfBirth}
                                                onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                                                className="h-12 mt-2 text-base"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label className="text-lg">Gender *</Label>
                                            <div className="grid grid-cols-2 gap-3 mt-2">
                                                {["Male", "Female"].map((gender) => (
                                                    <Button
                                                        key={gender}
                                                        type="button"
                                                        variant={formData.gender === gender ? "default" : "outline"}
                                                        className="h-12"
                                                        onClick={() => updateFormData("gender", gender)}
                                                    >
                                                        {gender}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Contact Information */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold">Contact Information</h2>

                                    <div className="space-y-4">
                                        <PhoneInput
                                            value={formData.phone}
                                            onChange={(val) => updateFormData("phone", val)}
                                            label="Phone Number"
                                            required
                                        />

                                        <div>
                                            <Label htmlFor="email" className="text-lg">Email (Optional)</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => updateFormData("email", e.target.value)}
                                                className="h-12 mt-2 text-base"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="county" className="text-lg">County *</Label>
                                            <Input
                                                id="county"
                                                value={formData.county}
                                                onChange={(e) => updateFormData("county", e.target.value)}
                                                className="h-12 mt-2 text-base"
                                                placeholder="Select or type your county"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="address" className="text-lg">Address *</Label>
                                            <Input
                                                id="address"
                                                value={formData.address}
                                                onChange={(e) => updateFormData("address", e.target.value)}
                                                className="h-12 mt-2 text-base"
                                                placeholder="Street address"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Upload Documents */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold">Upload Documents</h2>

                                    <div className="space-y-4">
                                        <div className="border-2 border-dashed rounded-xl p-8 text-center space-y-4">
                                            <div className="flex justify-center">
                                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <Camera className="h-8 w-8 text-primary" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">Passport Photo *</h3>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    Take or upload a recent passport-style photo
                                                </p>
                                                <Button variant="outline" className="h-12">
                                                    <Upload className="mr-2 h-5 w-5" />
                                                    Upload Photo
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="border-2 border-dashed rounded-xl p-8 text-center space-y-4">
                                            <div className="flex justify-center">
                                                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center">
                                                    <Upload className="h-8 w-8 text-secondary" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">Birth Certificate *</h3>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    Scan or photo of your birth certificate
                                                </p>
                                                <Button variant="outline" className="h-12">
                                                    <Upload className="mr-2 h-5 w-5" />
                                                    Upload Document
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="border-2 border-dashed rounded-xl p-8 text-center space-y-4">
                                            <div className="flex justify-center">
                                                <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center">
                                                    <Upload className="h-8 w-8 text-success" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">Proof of Address</h3>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    Utility bill, lease, or other proof
                                                </p>
                                                <Button variant="outline" className="h-12">
                                                    <Upload className="mr-2 h-5 w-5" />
                                                    Upload Document
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Payment */}
                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold">Payment Method</h2>

                                    <div className="p-6 bg-muted rounded-xl">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-lg font-medium">Application Fee:</span>
                                            <span className="text-2xl font-bold">{formatCurrency(service?.fee as number || 0)}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">One-time payment for National ID processing</p>
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-lg">Select Payment Method *</Label>

                                        <Button
                                            type="button"
                                            variant={formData.paymentMethod === "mobile-money" ? "default" : "outline"}
                                            className="w-full h-16 text-lg justify-start"
                                            onClick={() => updateFormData("paymentMethod", "mobile-money")}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-primary/10flex items-center justify-center">
                                                    📱
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-semibold">Mobile Money</div>
                                                    <div className="text-xs text-muted-foreground">Instant payment</div>
                                                </div>
                                            </div>
                                        </Button>

                                        <Button
                                            type="button"
                                            variant={formData.paymentMethod === "orange-money" ? "default" : "outline"}
                                            className="w-full h-16 text-lg justify-start"
                                            onClick={() => updateFormData("paymentMethod", "orange-money")}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                                    🍊
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-semibold">Orange Money</div>
                                                    <div className="text-xs text-muted-foreground">Instant payment</div>
                                                </div>
                                            </div>
                                        </Button>

                                        <Button
                                            type="button"
                                            variant={formData.paymentMethod === "card" ? "default" : "outline"}
                                            className="w-full h-16 text-lg justify-start"
                                            onClick={() => updateFormData("paymentMethod", "card")}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                                    💳
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-semibold">Debit/Credit Card</div>
                                                    <div className="text-xs text-muted-foreground">Visa, Mastercard</div>
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Review & Submit */}
                            {currentStep === 5 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold">Review Your Application</h2>

                                    <div className="space-y-4">
                                        <div className="p-4 bg-muted rounded-lg">
                                            <h3 className="font-semibold mb-2">Personal Information</h3>
                                            <div className="text-sm space-y-1">
                                                <p><span className="text-muted-foreground">Name:</span> {formData.firstName} {formData.lastName}</p>
                                                <p><span className="text-muted-foreground">Date of Birth:</span> {formData.dateOfBirth}</p>
                                                <p><span className="text-muted-foreground">Gender:</span> {formData.gender}</p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-muted rounded-lg">
                                            <h3 className="font-semibold mb-2">Contact Information</h3>
                                            <div className="text-sm space-y-1">
                                                <p><span className="text-muted-foreground">Phone:</span> {formData.phone}</p>
                                                <p><span className="text-muted-foreground">Email:</span> {formData.email || "Not provided"}</p>
                                                <p><span className="text-muted-foreground">County:</span> {formData.county}</p>
                                                <p><span className="text-muted-foreground">Address:</span> {formData.address}</p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-muted rounded-lg">
                                            <h3 className="font-semibold mb-2">Payment</h3>
                                            <div className="text-sm space-y-1">
                                                <p><span className="text-muted-foreground">Method:</span> {formData.paymentMethod}</p>
                                                <p><span className="text-muted-foreground">Amount:</span> {formatCurrency(service?.fee as number || 0)}</p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-success/10 border border-success rounded-lg">
                                            <p className="text-sm">
                                                By submitting, you confirm that all information provided is accurate and you agree to the LCCP Terms of Service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Card>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                    {currentStep > 1 && (
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={prevStep}
                            className="h-14 flex-1"
                        >
                            <ArrowLeft className="mr-2 h-5" />
                            Back
                        </Button>
                    )}

                    {currentStep < totalSteps ? (
                        <Button
                            size="lg"
                            onClick={nextStep}
                            className="h-14 flex-1"
                        >
                            Continue
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    ) : (
                        <Button
                            size="lg"
                            onClick={handleSubmit}
                            className="h-14 flex-1 bg-success hover:bg-success/90"
                        >
                            Submit Application
                        </Button>
                    )}
                </div>

                {/* Auto-save indicator */}
                <p className="text-xs text-center text-muted-foreground">
                    Your progress is automatically saved
                </p>
            </div>
        </div>
    )
}
