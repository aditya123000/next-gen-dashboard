'use client'

import { useState, useEffect } from 'react'

interface ProgressBarProps {
  value: number
  className?: string
  showLabel?: boolean
}

export function ProgressBar({ value, className = '', showLabel = false }: ProgressBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className={`relative w-full h-3 bg-gray-800 rounded-full overflow-hidden ${className}`}>
      <div 
        className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
      {showLabel && (
        <span className="absolute right-0 -top-6 text-sm font-medium text-gray-300">
          {value}%
        </span>
      )}
    </div>
  )
}