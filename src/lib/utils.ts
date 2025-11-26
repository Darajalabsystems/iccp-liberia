import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Phone number utilities for Liberia
export function formatLiberianPhone(phone: string): string {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '')

  // If starts with 231, keep it. Otherwise add it
  const withCountryCode = digits.startsWith('231') ? digits : '231' + digits

  // Format as +231 XX XXX XXXX
  if (withCountryCode.length === 12) {
    return `+${withCountryCode.slice(0, 3)} ${withCountryCode.slice(3, 5)} ${withCountryCode.slice(5, 8)} ${withCountryCode.slice(8)}`
  }

  return `+${withCountryCode}`
}

export function validateLiberianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  // Should be 231 + 9 digits (total 12)
  return digits.length === 12 && digits.startsWith('231')
}

// Currency utilities
export function formatCurrency(amount: number, currency: 'LRD' | 'USD' = 'LRD'): string {
  return new Intl.NumberFormat('en-LR', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

// Date utilities
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-LR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-LR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(d)
}

// LocalStorage utilities for form drafts
export function saveDraft<T>(key: string, data: T): void {
  try {
    localStorage.setItem(`lccp-draft-${key}`, JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save draft:', error)
  }
}

export function loadDraft<T>(key: string): T | null {
  try {
    const draft = localStorage.getItem(`lccp-draft-${key}`)
    return draft ? JSON.parse(draft) : null
  } catch (error) {
    console.error('Failed to load draft:', error)
    return null
  }
}

export function clearDraft(key: string): void {
  try {
    localStorage.removeItem(`lccp-draft-${key}`)
  } catch (error) {
    console.error('Failed to clear draft:', error)
  }
}

// Accessibility helpers
export function getContrastRatio(color1: string, color2: string): number {
  // Simplified contrast ratio calculation
  // In production, you'd use a proper color library
  return 4.5 // Placeholder
}

export function meetsWCAGAA(color1: string, color2: string): boolean {
  return getContrastRatio(color1, color2) >= 4.5
}

export function meetsWCAGAAA(color1: string, color2: string): boolean {
  return getContrastRatio(color1, color2) >= 7
}

// File upload utilities
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

export function isValidFileType(file: File, acceptedTypes: string[]): boolean {
  return acceptedTypes.some(type => {
    if (type.startsWith('.')) {
      return file.name.toLowerCase().endsWith(type.toLowerCase())
    }
    return file.type.match(type) !== null
  })
}

// Generate unique IDs
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
