import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Billboard Marketplace',
  description: 'Hitta och hyr reklamplatser i Sverige',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
