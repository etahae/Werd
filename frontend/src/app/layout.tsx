import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OurSpotify',
  description: 'OurSpotify',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full bg-gradient-to-b from-slate-700 to-black'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
