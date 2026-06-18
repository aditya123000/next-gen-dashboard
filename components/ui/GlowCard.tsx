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
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://w3.org id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] pointer-events-none rounded-2xl" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}