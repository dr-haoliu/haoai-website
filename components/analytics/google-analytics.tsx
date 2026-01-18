'use client'

import { useEffect } from 'react'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_TRACKING_ID) return

    window.dataLayer = window.dataLayer || []

    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }

    gtag('js', new Date())
    gtag('config', GA_TRACKING_ID)

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script)
  }, [])

  return null
}