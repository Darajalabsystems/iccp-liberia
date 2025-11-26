// Service related types
export type ServiceCategory =
    | "identity"
    | "passport-travel"
    | "taxes-money"
    | "business"
    | "land-property"
    | "courts-justice"
    | "driving-vehicles"
    | "health"
    | "education"
    | "utilities"
    | "social-benefits"
    | "diaspora-county"

export type ServiceStatus = "draft" | "submitted" | "processing" | "approved" | "rejected" | "completed"

export interface Service {
    id: string
    name: string
    shortName: string
    category: ServiceCategory
    description: string
    featured?: boolean
    requiresAuth?: boolean
    estimatedTime?: string
    fee?: number | string
    requiredDocuments?: string[]
    ministryId?: string
}

export interface ServiceApplication {
    id: string
    serviceId: string
    userId: string
    status: ServiceStatus
    submittedAt: Date
    updatedAt: Date
    formData: Record<string, unknown>
    documents?: ApplicationDocument[]
    paymentStatus?: "pending" | "completed" | "failed"
    trackingNumber?: string
}

export interface ApplicationDocument {
    id: string
    name: string
    type: string
    size: number
    uploadedAt: Date
    url: string
}

// Form wizard types
export interface FormStep {
    id: string
    title: string
    description?: string
    fields: FormField[]
    validation?: (data: unknown) => boolean | Promise<boolean>
}

export interface FormField {
    id: string
    type: "text" | "email" | "phone" | "number" | "textarea" | "select" | "file" | "date" | "checkbox" | "radio"
    label: string
    placeholder?: string
    required?: boolean
    options?: { label: string; value: string }[]
    validation?: (value: unknown) => boolean | string
    helpText?: string
}
