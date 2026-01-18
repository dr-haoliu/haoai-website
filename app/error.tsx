'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">Oops!</h1>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            We apologize for the inconvenience. An error has occurred while processing your request.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={reset}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium"
            >
              Go Home
            </Link>
          </div>

          <details className="text-left bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <summary className="cursor-pointer text-slate-700 dark:text-slate-300 font-medium">
              Error Details (for debugging)
            </summary>
            <pre className="mt-4 p-4 bg-slate-100 dark:bg-slate-900 rounded text-sm overflow-auto text-slate-700 dark:text-slate-300">
              {error.message}
              {error.digest && (
                <>
                  {'\n\n'}
                  <span className="text-xs text-slate-500">Error ID: {error.digest}</span>
                </>
              )}
            </pre>
          </details>
        </div>
      </div>
    </div>
  )
}