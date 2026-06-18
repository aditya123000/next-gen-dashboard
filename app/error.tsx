'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Dashboard error:', error)
  }, [error])

  return (
    <main 
      className="min-h-screen bg-background flex items-center justify-center p-4"
      role="main"
      aria-labelledby="error-title"
    >
      <section 
        className="max-w-md w-full"
        aria-label="Error message"
      >
        <div className="rounded-2xl bg-surface border border-border p-8 text-center">
          <div 
            className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4"
            aria-hidden="true"
          >
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          
          <h1 id="error-title" className="text-xl font-bold text-white mb-2">
            Failed to Load Dashboard
          </h1>
          
          <p className="text-gray-400 text-sm mb-6">
            {error.message || 'Unable to connect to the database. Please try again.'}
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mb-6 text-left">
              <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-400">
                Debug Information
              </summary>
              <div className="mt-2 p-3 bg-background-secondary rounded-lg text-xs text-gray-400 overflow-auto">
                <p><strong>Error Name:</strong> {error.name}</p>
                <p><strong>Error Message:</strong> {error.message}</p>
                {error.digest && (
                  <p><strong>Digest:</strong> {error.digest}</p>
                )}
              </div>
            </details>
          )}
          
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium"
            aria-label="Try loading the dashboard again"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Try Again
          </button>
        </div>
      </section>
    </main>
  )
}