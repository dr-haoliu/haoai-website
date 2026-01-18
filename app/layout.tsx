import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-TBPXCC4P7E'

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
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}