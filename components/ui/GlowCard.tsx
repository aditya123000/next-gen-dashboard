'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { hoverScale, cardGlow } from '@/lib/animations/variants'
import { cn } from '@/lib/utils/cn'
import { ReactNode } from 'react'

interface GlowCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  gradient?: string
}

export function GlowCard({ 
  children, 
  className = '', 
  gradient = 'from-purple-600/20 via-pink-600/10 to-transparent',
  ...props 
}: GlowCardProps) {
  return (
    <motion.div
      {...hoverScale}
      {...cardGlow}
      {...props}
      className={cn(
        'relative rounded-2xl bg-surface border border-border p-6 shadow-card',
        'transition-colors duration-300',
        className
      )}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className={cn(
          'absolute inset-0 rounded-2xl bg-linear-to-br opacity-0',
          gradient
        )}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none rounded-2xl" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}