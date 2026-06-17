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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="rounded-2xl bg-surface border border-border p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          
          <h2 className="text-xl font-bold text-white mb-2">
            Failed to Load Dashboard
          </h2>
          
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
                <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
                <p><strong>Supabase URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}</p>
                <p><strong>Anon Key:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}</p>
              </div>
            </details>
          )}
          
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <div className="mt-4 text-xs text-gray-500">
            <span>Need help? </span>
            <button 
              onClick={() => window.location.reload()}
              className="text-purple-400 hover:text-purple-300"
            >
              Refresh page
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}