import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jai',
  description: 'Your personal AI assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li><Button asChild variant="ghost"><Link href="/">Home</Link></Button></li>
            <li><Button asChild variant="ghost"><Link href="/login">Login</Link></Button></li>
            <li><Button asChild variant="ghost"><Link href="/register">Register</Link></Button></li>
            <li><Button asChild variant="ghost"><Link href="/chat">Chat</Link></Button></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
