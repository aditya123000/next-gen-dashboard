'use client'

import { motion } from 'framer-motion'
import { progressBarSpring } from '@/lib/animations/variants'
import { useEffect, useState } from 'react'

interface ProgressBarProps {
  value: number
  className?: string
  showLabel?: boolean
}

export function ProgressBar({ 
  value, 
  className = '', 
  showLabel = false 
}: ProgressBarProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className={`relative w-full h-3 bg-gray-800 rounded-full overflow-hidden ${className}`}>
      <motion.div 
        className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
        initial={{ width: '0%' }}
        animate={isMounted ? { width: `${value}%` } : { width: '0%' }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 30,
          duration: 0.8,
        }}
      />
      {showLabel && (
        <span className="absolute right-0 -top-6 text-sm font-medium text-gray-300">
          {value}%
        </span>
      )}
    </div>
  )
}