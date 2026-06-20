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
    <div className={`relative w-full h-2 bg-white/4 rounded-full overflow-hidden border border-white/3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] ${className}`}>
      <motion.div 
        className="h-full bg-[#5B6CFF] rounded-full"
        style={{ transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: value / 100 }}
        transition={{
          type: 'spring',
          stiffness: 85,
          damping: 22,
          mass: 0.8
        }}
      />
      {showLabel && (
        <span className="absolute right-0 text-xs font-bold text-gray-300" 
            style={{ transform: 'translateY(-100%)' }}>
          {value}%
        </span>
      )}
    </div>
  )
}
