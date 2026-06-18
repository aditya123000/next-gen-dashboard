'use client'

import React, { lazy, Suspense, ReactNode } from 'react'
import { staggerContainer } from '@/lib/animations/variants'

const MotionDiv = lazy(() => 
  import('framer-motion').then(mod => ({ default: mod.motion.div }))
)

interface StaggerWrapperProps {
  children: ReactNode
  className?: string
}

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
