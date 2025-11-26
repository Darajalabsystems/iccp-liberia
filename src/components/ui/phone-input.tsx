"use client"

import { forwardRef, useState } from "react"
import { formatLiberianPhone } from "@/lib/utils"
import { Input } from "./input"
import { Label } from "./label"

interface PhoneInputProps {
    value: string
    onChange: (value: string) => void
    label?: string
    error?: string
    required?: boolean
    className?: string
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
    ({ value, onChange, label, error, required, className }, ref) => {
        const [focused, setFocused] = useState(false)

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const input = e.target.value
            // Only allow digits
            const digits = input.replace(/\D/g, '')

            // Format and update
            const formatted = formatLiberianPhone(digits)
            onChange(formatted)
        }

        return (
            <div className={className}>
                {label && (
                    <Label htmlFor="phone-input" className="text-lg font-medium mb-2 block">
                        {label} {required && <span className="text-destructive">*</span>}
                    </Label>
                )}
                <div className="relative">
                    <Input
                        ref={ref}
                        id="phone-input"
                        type="tel"
                        value={value}
                        onChange={handleChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        placeholder="+231 XX XXX XXXX"
                        className="h-14 text-lg pl-4 pr-4"
                        aria-label={label || "Phone number"}
                        aria-required={required}
                        aria-invalid={!!error}
                        aria-describedby={error ? "phone-error" : undefined}
                    />
                </div>
                {error && (
                    <p id="phone-error" className="mt-2 text-sm text-destructive" role="alert">
                        {error}
                    </p>
                )}
                <p className="mt-1 text-xs text-muted-foreground">
                    Liberian phone number starting with +231
                </p>
            </div>
        )
    }
)

PhoneInput.displayName = "PhoneInput"
