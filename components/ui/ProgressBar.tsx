'use client'

import { motion } from 'framer-motion'

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
  return (
    <div className={`relative w-full h-3 bg-gray-800 rounded-full overflow-hidden ${className}`}>
      <motion.div 
        className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
        style={{ transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: value / 100 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 30,
          duration: 0.8,
        }}
      />
      {showLabel && (
        <span className="absolute right-0 text-sm font-medium text-gray-300" 
            style={{ transform: 'translateY(-100%)' }}>
          {value}%
        </span>
      )}
    </div>
  )
}
