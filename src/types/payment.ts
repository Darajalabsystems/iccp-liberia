export type PaymentMethod = "mobile-money" | "orange-money" | "card" | "bank-transfer"

export interface PaymentDetails {
    method: PaymentMethod
    amount: number
    currency: "LRD" | "USD"
    phoneNumber?: string // For mobile money
    cardLast4?: string // For card payments
    reference?: string
}

export interface Transaction {
    id: string
    userId: string
    serviceId?: string
    type: "payment" | "refund" | "fee"
    amount: number
    currency: "LRD" | "USD"
    method: PaymentMethod
    status: "pending" | "completed" | "failed" | "refunded"
    description: string
    createdAt: Date
    completedAt?: Date
    receiptUrl?: string
    reference: string
}

export interface Receipt {
    id: string
    transactionId: string
    serviceId?: string
    serviceName?: string
    amount: number
    currency: "LRD" | "USD"
    paidAt: Date
    paymentMethod: PaymentMethod
    reference: string
    downloadUrl: string
}

export interface WalletBalance {
    totalPaid: number
    pendingPayments: number
    currency: "LRD"
}
