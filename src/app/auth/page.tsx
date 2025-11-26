"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Phone, ArrowRight, Fingerprint, Star, ShieldCheck, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneInput } from "@/components/ui/phone-input"
import { OTPInput } from "@/components/ui/otp-input"
import { validateLiberianPhone } from "@/lib/utils"
import { SoftIcon } from "@/components/ui/soft-icon"

type AuthStep = "phone" | "otp"

export default function AuthPage() {
    const router = useRouter()
    const [step, setStep] = useState<AuthStep>("phone")
    const [phone, setPhone] = useState("")
    const [otp, setOTP] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handlePhoneSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!validateLiberianPhone(phone)) {
            setError("Please enter a valid Liberian phone number")
            return
        }

        setLoading(true)
        // Simulate sending OTP
        await new Promise(resolve => setTimeout(resolve, 1000))
        setLoading(false)
        setStep("otp")
    }

    const handleOTPComplete = async (code: string) => {
        setLoading(true)
        // Simulate OTP verification
        await new Promise(resolve => setTimeout(resolve, 1000))

        // For demo, any 6-digit code works
        if (code.length === 6) {
            router.push("/dashboard")
        } else {
            setError("Invalid OTP code")
            setLoading(false)
        }
    }

    const handleContinueAsGuest = () => {
        router.push("/dashboard")
    }

    return (
        <div className="min-h-screen w-full flex bg-background">
            {/* Left Side - Hero Section (Hidden on mobile) */}
            <div className="hidden lg:flex w-1/2 relative bg-[#005EB8] text-white overflow-hidden flex-col justify-between p-12">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]" />
                </div>

                {/* Decorative Star */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -right-20 -top-20 text-white"
                >
                    <Star className="h-96 w-96 fill-current" />
                </motion.div>

                {/* Logo Area */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                        <Star className="h-6 w-6 text-white fill-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">LCCP Liberia</span>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-lg space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl font-bold leading-tight"
                    >
                        One Portal for All Government Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-white/80"
                    >
                        Access passports, taxes, business registration, and more. Secure, fast, and convenient.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4 pt-4"
                    >
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                            <ShieldCheck className="h-4 w-4" />
                            Secure Platform
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                            <Globe className="h-4 w-4" />
                            Available 24/7
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="relative z-10 text-sm text-white/60">
                    © 2025 Government of Liberia. All rights reserved.
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 relative">
                {/* Mobile Header (Visible only on mobile) */}
                <div className="lg:hidden absolute top-6 left-6 flex items-center gap-2">
                    <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Star className="h-5 w-5 text-primary fill-primary" />
                    </div>
                    <span className="font-bold text-lg text-primary">LCCP</span>
                </div>

                <div className="w-full max-w-md space-y-8">
                    {/* Form Header */}
                    <div className="text-center lg:text-left space-y-2">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight">
                                {step === "phone" ? "Welcome Back" : "Verify Number"}
                            </h2>
                            <p className="text-muted-foreground">
                                {step === "phone"
                                    ? "Enter your phone number to access your account"
                                    : `We sent a 6-digit code to ${phone}`
                                }
                            </p>
                        </motion.div>
                    </div>

                    {/* Form Content */}
                    <AnimatePresence mode="wait">
                        {step === "phone" ? (
                            <motion.form
                                key="phone-step"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handlePhoneSubmit}
                                className="space-y-6"
                            >
                                <div className="space-y-4">
                                    <PhoneInput
                                        value={phone}
                                        onChange={setPhone}
                                        label="Phone Number"
                                        error={error}
                                        required
                                        className="w-full"
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full h-12 text-base"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending code..." : "Continue"}
                                        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                                    </Button>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">
                                            Or continue with
                                        </span>
                                    </div>
                                </div>

                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full h-12"
                                    onClick={() => {/* Future: WebAuthn implementation */ }}
                                >
                                    <Fingerprint className="mr-2 h-4 w-4" />
                                    Biometrics / Face ID
                                </Button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="otp-step"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                <OTPInput
                                    value={otp}
                                    onChange={setOTP}
                                    onComplete={handleOTPComplete}
                                    label="Enter Verification Code"
                                    error={error}
                                    className="w-full justify-center lg:justify-start"
                                />

                                <div className="flex flex-col gap-3">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        className="w-full"
                                        onClick={() => setStep("phone")}
                                    >
                                        Change phone number
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="link"
                                        className="w-full text-primary"
                                        onClick={() => {
                                            setError("")
                                            alert("OTP resent!")
                                        }}
                                    >
                                        Didn't receive code? Resend
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Guest Option */}
                    <div className="pt-6 text-center lg:text-left">
                        <Button
                            type="button"
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground p-0 h-auto font-normal"
                            onClick={handleContinueAsGuest}
                        >
                            Continue as Guest &rarr;
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
