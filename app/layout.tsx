import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SoundSync.AI',
  description: 'A Speech-to-Text Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      layout: {
        socialButtonsPlacement: 'bottom',
        socialButtonsVariant: 'iconButton',
        termsPageUrl: 'https://clerk.com/terms',


      }
    }}>
   <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-secondary", inter.className)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}
