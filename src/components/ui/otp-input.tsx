"use client"

import { forwardRef, useState, useRef, useEffect } from "react"
import { Input } from "./input"
import { Label } from "./label"

interface OTPInputProps {
    length?: number
    value: string
    onChange: (value: string) => void
    label?: string
    error?: string
    onComplete?: (value: string) => void
    className?: string
}

export const OTPInput = forwardRef<HTMLDivElement, OTPInputProps>(
    ({ length = 6, value, onChange, label, error, onComplete, className }, ref) => {
        const inputRefs = useRef<(HTMLInputElement | null)[]>([])
        const [otp, setOtp] = useState<string[]>(Array(length).fill(""))

        useEffect(() => {
            // Populate from value prop
            const digits = value.replace(/\D/g, '').split('').slice(0, length)
            const newOtp = [...digits, ...Array(length - digits.length).fill("")]
            setOtp(newOtp)
        }, [value, length])

        const handleChange = (index: number, digit: string) => {
            // Only allow single digit
            const newDigit = digit.replace(/\D/g, '').slice(-1)

            const newOtp = [...otp]
            newOtp[index] = newDigit
            setOtp(newOtp)

            const fullValue = newOtp.join('')
            onChange(fullValue)

            // Auto-focus next input
            if (newDigit && index < length - 1) {
                inputRefs.current[index + 1]?.focus()
            }

            // Call onComplete if all filled
            if (fullValue.length === length && onComplete) {
                onComplete(fullValue)
            }
        }

        const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Backspace' && !otp[index] && index > 0) {
                inputRefs.current[index - 1]?.focus()
            }
        }

        const handlePaste = (e: React.ClipboardEvent) => {
            e.preventDefault()
            const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
            const digits = pastedData.split('')
            const newOtp = [...digits, ...Array(length - digits.length).fill("")]
            setOtp(newOtp)
            onChange(pastedData)

            if (pastedData.length === length && onComplete) {
                onComplete(pastedData)
            }
        }

        return (
            <div ref={ref} className={className}>
                {label && (
                    <Label className="text-lg font-medium mb-3 block">{label}</Label>
                )}
                <div className="flex gap-3 justify-center" onPaste={handlePaste}>
                    {Array.from({ length }).map((_, index) => (
                        <Input
                            key={index}
                            ref={(el: HTMLInputElement | null) => {
                                inputRefs.current[index] = el
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={otp[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="h-16 w-14 text-center text-2xl font-bold"
                            aria-label={`Digit ${index + 1} of ${length}`}
                            aria-invalid={!!error}
                        />
                    ))}
                </div>
                {error && (
                    <p className="mt-3 text-sm text-destructive text-center" role="alert">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)

OTPInput.displayName = "OTPInput"
