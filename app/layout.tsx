import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/analytics/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HaoAI - Agentic AI for Great Good in Bioinformatics',
  description: 'Advancing agentic AI research for biomedical and healthcare applications. Latest AI trends, news, and opinions in bioinformatics.',
  keywords: ['AI', 'bioinformatics', 'agentic AI', 'machine learning', 'healthcare', 'biomedical'],
  openGraph: {
    title: 'HaoAI - Agentic AI for Great Good',
    description: 'Advancing agentic AI research for biomedical and healthcare applications',
    type: 'website',
    url: 'https://haoai.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}