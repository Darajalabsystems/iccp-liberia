import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LCCP Liberia - Digital Government Platform",
  description: "Liberal Central Citizen Platform - One-stop digital government services for Liberia",
}

import { AccessibilityProvider } from "@/contexts/AccessibilityContext"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AccessibilityProvider>
            {children}
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
