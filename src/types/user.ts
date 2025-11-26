export interface User {
    id: string
    phone: string
    name?: string
    email?: string
    nationalId?: string
    dateOfBirth?: Date
    address?: string
    county?: string
    photoUrl?: string
    createdAt: Date
    lastLogin?: Date
}

export interface AuthState {
    isAuthenticated: boolean
    user: User | null
    isGuest: boolean
}

// WebAuthn types
export interface BiometricCredential {
    id: string
    userId: string
    credentialId: string
    publicKey: string
    counter: number
    createdAt: Date
    lastUsed?: Date
    deviceName?: string
}

// OTP types
export interface OTPSession {
    phone: string
    code: string
    expiresAt: Date
    verified: boolean
}

// Certificate types
export interface Certificate {
    id: string
    type: "national-id" | "birth" | "marriage" | "passport" | "tax-clearance" | "business" | "other"
    name: string
    issueDate: Date
    expiryDate?: Date
    documentUrl?: string
    metadata?: Record<string, unknown>
}
