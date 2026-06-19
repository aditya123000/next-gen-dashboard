'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { ReactNode } from 'react'

interface GlowCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'hero' | 'glow'
  glowColor?: 'purple' | 'pink' | 'blue' | 'orange' | 'none'
}

export function GlowCard({ 
  children, 
  className = '', 
  variant = 'default',
  glowColor = 'none',
  ...props 
}: GlowCardProps) {
  // Variant configurations
  const variants = {
    default: {
      bg: 'bg-zinc-950/40 backdrop-blur-md',
      border: 'border-white/[0.08]',
      shadow: 'shadow-card',
    },
    elevated: {
      bg: 'bg-zinc-950/60 backdrop-blur-md',
      border: 'border-white/[0.08]',
      shadow: 'shadow-card-elevated',
    },
    hero: {
      bg: 'bg-zinc-950/50 backdrop-blur-md',
      border: 'border-white/[0.08]',
      shadow: 'shadow-card',
    },
    glow: {
      bg: 'bg-zinc-950/40 backdrop-blur-md',
      border: 'border-white/[0.08]',
      shadow: 'shadow-card',
    },
  }

  // Glow color configurations (mapped to standard subtle shadows for visual calming)
  const glowColors = {
    purple: 'shadow-glow-purple',
    pink: 'shadow-glow-pink',
    blue: 'shadow-glow-blue',
    orange: 'shadow-glow-orange',
    none: '',
  }

  const variantStyles = variants[variant] || variants.default
  const glowStyle = glowColor !== 'none' ? glowColors[glowColor] : ''

  return (
    <motion.div
      {...props}
      className={cn(
        'relative rounded-2xl border transition-all duration-200',
        variantStyles.bg,
        variantStyles.border,
        variantStyles.shadow,
        glowStyle,
        'hover:border-white/10 hover:shadow-card-hover',
        className
      )}
      whileHover={{
        y: -1.5,
        transition: { type: 'spring', stiffness: 500, damping: 28 }
      }}
    >
      {/* Subtle top light highlight reflection */}
      <div 
        className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/[0.03] via-transparent to-transparent opacity-100 pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Card content */}
      <div className="relative z-10 h-full w-full flex flex-col flex-1">
        {children}
      </div>
    </motion.div>
  )
}
