import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aryan Thakur - Full Stack Developer & AI Engineer',
  description: 'Portfolio of Aryan Thakur (Utkarsh Raghav) - Full Stack Developer, AI Engineer, and Entrepreneur',
  keywords: 'Full Stack Developer, AI Engineer, Discord Bots, Web Development, Next.js, React',
  authors: [{ name: 'Aryan Thakur' }],
  openGraph: {
    title: 'Aryan Thakur - Full Stack Developer & AI Engineer',
    description: 'Portfolio of Aryan Thakur - Full Stack Developer, AI Engineer, and Entrepreneur',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
