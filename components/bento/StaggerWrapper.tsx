'use client'

import React, { lazy, Suspense, ReactNode } from 'react'
import { staggerContainer } from '@/lib/animations/variants'

// Lazy load the motion.div component from framer-motion
const MotionDiv = lazy(() => 
  import('framer-motion').then(mod => ({ default: mod.motion.div }))
)

interface StaggerWrapperProps {
  children: ReactNode
  className?: string
}

/**
 * A wrapper component that lazy loads framer-motion for stagger animations.
 * Renders a simple div fallback while loading to prevent blocking the UI.
 */
export function StaggerWrapper({ children, className = '' }: StaggerWrapperProps) {
  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <MotionDiv
        className={className}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {children}
      </MotionDiv>
    </Suspense>
  )
}
